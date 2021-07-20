import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from 'src/app/models/message.model';
import { Rappel } from 'src/app/models/rappel.model';
import { DataStorageService } from 'src/app/services/data.service';
import { MessageService } from 'src/app/services/message.service';
import { RappelService } from 'src/app/services/rappel.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  users: any;
  usersChecked: any;
  users_text: string = '';
  messageForm: FormGroup;
  message: Message;
  rappel: Rappel;
  isReminder: boolean = false;

  constructor(
    private dataService: DataStorageService,
    private userService: UserService,
    private messageService: MessageService,
    private tokenStorage: TokenStorageService,
    private rappelService: RappelService
  ) { }

  ngOnInit(): void {
    const users = this.dataService.getUsers();
    if ((users !== null) && (users !== undefined)) {
      this.users_text = "";
      for (let user of users) {
        this.users_text = this.users_text + user.firstName + ", ";
      }
      this.usersChecked = users;
    }
    this.initForm();
    this.getUsers();
  }

  initForm() {
    this.messageForm = new FormGroup({
      'users': new FormControl(this.users_text, [Validators.required]),
      'message': new FormControl('', [Validators.required]),
      'date': new FormControl(''),
      'time': new FormControl('')
    })
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        const users = [];
        for (let user of this.users) {
          let i = 0;
          if (this.usersChecked !== null && this.usersChecked !== undefined)
            for (let user1 of this.usersChecked) {
              if (user.idCompte === user1.idCompte) {
                i = 1;
              }
            }
          if (i === 1) {
            user.checked = true;
          } else {
            user.checked = false;
          }
          users.push(user);
        }
        this.users = users;
      }
    )
  }

  onSend() {
    const users = [];
    if (this.usersChecked !== null && this.usersChecked !== undefined) {
      for (let user of this.usersChecked) {
        delete user.checked;
        users.push(user);
      }
      if (this.isReminder) {
        this.rappel = new Rappel();
        this.rappel.rappel = this.messageForm.value.message;
        this.rappel.createdBy = this.tokenStorage.getUser().username;
        this.rappel.heure = Number(this.messageForm.value.time.split(":")[0]);
        this.rappel.minutes = Number(this.messageForm.value.time.split(":")[1]);
        let date = new Date(this.messageForm.value.date);
        date.setHours(this.rappel.heure);
        date.setMinutes(this.rappel.minutes);
        date.setMilliseconds(0);
        date.setSeconds(0);
        this.rappel.date = date;
        this.rappel.comptes = users;
        Swal.fire({
          text: 'Voulez-vous envoyé un rappel à ces utilisateurs?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, envoyer!',
          cancelButtonText: 'Non, annuler'
        }).then((result) => {
          if (result.isConfirmed) {
            this.rappelService.sendRappel(this.rappel).subscribe(
              (data) => {
                Swal.fire({
                  'icon': "success",
                  'timer': 4000,
                  'text': "Rappel envoyé avec succès"
                })
              }, (err) => {
                Swal.fire({
                  'icon': "error",
                  'timer': 4000,
                  'text': "erreur lors de l'envoi du rappel"
                })
              }
            )
          }
        })
      }
      if (!this.isReminder) {
        this.message = new Message();
        this.message.message = this.messageForm.value.message;
        this.message.createdBy = this.tokenStorage.getUser().username;
        this.message.createdDate = new Date();
        this.message.comptes = users;
        Swal.fire({
          text: 'Voulez-vous envoyé un message à ces utilisateurs?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui, envoyer!',
          cancelButtonText: 'Non, annuler'
        }).then((result) => {
          if (result.isConfirmed) {
            this.messageService.sendMessage(this.message).subscribe(
              (data) => {
                Swal.fire({
                  'icon': "success",
                  'timer': 4000,
                  'text': "Message envoyé avec succès"
                })
              }, (err) => {
                Swal.fire({
                  'icon': "error",
                  'timer': 4000,
                  'text': "erreur lors de l'envoi du message"
                })
              }
            )
          }
        })
      }
    }
  }

  sendCheckedUsers(): void {
    this.usersChecked = this.users.filter((user) => user.checked);
    /*if((users!==null)&&(users!==undefined)){
      this.dataService.setUsers(users);
    }*/
    this.users_text = "";
    if (this.usersChecked !== null && this.usersChecked !== undefined)
      for (let user of this.usersChecked) {
        this.users_text = this.users_text + user.firstName + ", ";
      }
      this.messageForm.get("users").setValue(this.users_text);
  }

  onReminder(isChecked: boolean) {
    if (isChecked) {
      this.isReminder = true;
      this.messageForm.controls["date"].setValidators(Validators.required);
      this.messageForm.controls["time"].setValidators(Validators.required);
    }
    else {
      this.isReminder = false;
      this.messageForm.controls['date'].clearValidators();
      this.messageForm.controls['time'].clearValidators();
    }
    this.messageForm.get("date").updateValueAndValidity();
    this.messageForm.get("time").updateValueAndValidity();
  }

}
