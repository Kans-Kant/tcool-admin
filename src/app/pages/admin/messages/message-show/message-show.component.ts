import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message-show',
  templateUrl: './message-show.component.html',
  styleUrls: ['./message-show.component.css']
})
export class MessageShowComponent implements OnInit {

  message : Message;
  idMessage :number;

  constructor(
    private messageService : MessageService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idMessage = Number(this.route.snapshot.paramMap.get("id"));
    this.getMessage();
  }

  getMessage(){
    this.messageService.getMessage(this.idMessage).subscribe(
      (data)=>{
        this.message = data;
        console.log(this.message);
      }
    )
  }

}
