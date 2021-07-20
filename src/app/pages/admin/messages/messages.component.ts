import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages : Message[] = [];
  constructor(
    private messageService : MessageService,
    private tokenStorage : TokenStorageService
  ) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(){
    if((this.tokenStorage.getToken()!==undefined)||(this.tokenStorage.getToken()!==null))
    this.messageService.getMesageOf(this.tokenStorage.getUser().username).subscribe(
      (data)=>{
        this.messages = data;
        console.log(this.messages);
      }
    )
  }

}
