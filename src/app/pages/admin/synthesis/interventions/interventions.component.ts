import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Intervention } from 'src/app/models/intervention.model';
import { InterventionService } from 'src/app/services/intervention.service';

@Component({
  selector: 'app-interventions',
  templateUrl: './interventions.component.html',
  styleUrls: ['./interventions.component.css']
})
export class InterventionsComponent implements OnInit {

  theme:string;
  interventions : Intervention[] = [];
  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private interventionService : InterventionService
  ) { }

  ngOnInit(): void {
    this.theme = this.route.snapshot.paramMap.get("theme");
    this.getInterventions();
  }

  setTheme(){
    if(this.theme==="administratives"){
      return "c_administrative";
    }if(this.theme==="recouvrements"){
      return "c_recovery";
    }if(this.theme==="techniques"){
      return "c_technical"
    }
  }

  getInterventions(){
    const theme = this.setTheme();
    this.interventionService.getIByTheme(theme).subscribe(
      (data)=>{
        console.log(data);
        this.interventions = data;
      }
    ) 
  }

  getTheme(theme){
    let theme1 = "";
    if(theme==="c_technical"){
      theme1 = "Reclamation Technique";
      return theme1;
    }if(theme==="c_administrative"){
      theme1 = "Reclamation Administrative";
      return theme1;
    }if(theme==="c_recovery"){
      theme1 = "Recouvrement recouvrement";
      return theme1;
    }
  }

}
