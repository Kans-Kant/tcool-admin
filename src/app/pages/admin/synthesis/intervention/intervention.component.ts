import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Intervention } from 'src/app/models/intervention.model';
import { InterventionService } from 'src/app/services/intervention.service';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent implements OnInit {

  idIntervention:number;
  intervention : Intervention;
  constructor(
    private route : ActivatedRoute,
    private interventionService : InterventionService
  ) { }

  ngOnInit(): void {
    this.idIntervention = Number(this.route.snapshot.paramMap.get("id"));
    this.getIntervention();
  }

  getIntervention(){
    this.interventionService.getInterById(this.idIntervention).subscribe(
      (data)=>{
        console.log(data);
        this.intervention = data;
      }
    )
  }

}
