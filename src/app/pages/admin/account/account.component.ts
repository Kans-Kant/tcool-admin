import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Compte } from 'src/app/models/compte.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accountForm : FormGroup;
  user : Compte;

  constructor(
    private userService : UserService,
    private tokenStorage : TokenStorageService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.fillForm();
  }

  initForm(){
    this.accountForm = new FormGroup({
      'lastName' : new FormControl('', [Validators.required]),
      'firstName' : new FormControl('',[Validators.required]),
      'email' : new FormControl('',[Validators.required]),
      'role' : new FormControl('',[Validators.required]),
      'immeuble' : new FormControl('',[Validators.required]),
      'appartement' : new FormControl('',[Validators.required]),
      'phone' : new FormControl('',[Validators.required])
    })
  }
  fillForm(){
    this.user = new Compte();
    if(this.tokenStorage.getToken()!==undefined)
    this.userService.getMe(this.tokenStorage.getUser().id).subscribe(
      (data)=>{
        this.user = data;
        this.accountForm.patchValue({
          'lastName' : this.user.lastName,
          'firstName' : this.user.firstName,
          'email' : this.user.email,
          'immeuble' : this.user.appartement,
          'appartement' : this.user.appartement,
          'phone' : this.user.phone,
          'role' : this.user.myRole.role
        })
      }
    )
  }

  onUpdate(){
    this.user.email = this.accountForm.value.email;
    this.user.lastName = this.accountForm.value.lastName;
    this.user.firstName = this.accountForm.value.firstName;
    this.user.appartement = this.accountForm.value.appartement;
    this.user.immeuble = this.accountForm.value.immeuble;
    this.user.phone = this.accountForm.value.phone;

    this.userService.update(this.user,this.tokenStorage.getUser().id).subscribe(
      (data)=>{
        this.user;
        Swal.fire({
          'icon' : 'success',
          'text' : 'Information sauvegardée avec succès',
          'timer' : 4000
        })
      }
    )
  }

}
