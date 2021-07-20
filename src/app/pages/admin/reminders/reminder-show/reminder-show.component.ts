import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rappel } from 'src/app/models/rappel.model';
import { RappelService } from 'src/app/services/rappel.service';

@Component({
  selector: 'app-reminder-show',
  templateUrl: './reminder-show.component.html',
  styleUrls: ['./reminder-show.component.css']
})
export class ReminderShowComponent implements OnInit {

  rappel : Rappel;
  idRappel :number;

  constructor(
    private rappelService : RappelService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idRappel = Number(this.route.snapshot.paramMap.get("id"));
    this.getMessage();
  }

  getMessage(){
    this.rappelService.getRappel(this.idRappel).subscribe(
      (data)=>{
        this.rappel = data;
        console.log(this.rappel);
      }
    )
  }

}