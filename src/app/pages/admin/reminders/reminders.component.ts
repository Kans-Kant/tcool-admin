import { Component, OnInit } from '@angular/core';
import { Rappel } from 'src/app/models/rappel.model';
import { RappelService } from 'src/app/services/rappel.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  rappels : Rappel[] = [];

  constructor(
    private rappelService : RappelService,
    private tokenStorage : TokenStorageService
  ) { }

  ngOnInit(): void {
    this.getRappels();
  }

  getRappels(){
    if((this.tokenStorage.getToken()!==undefined)&&(this.tokenStorage.getToken()!==null)){
      this.rappelService.getRappelOf(this.tokenStorage.getUser()?.username).subscribe(
        (data)=>{
          this.rappels = data;
          console.log(data);
        }
      )
    }
  }

}
