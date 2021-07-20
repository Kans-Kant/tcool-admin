import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';
//import Chart from 'chart.js';
import { Intervention } from 'src/app/models/intervention.model';
import { InterventionService } from 'src/app/services/intervention.service';

@Component({
  selector: 'app-synthesis',
  templateUrl: './synthesis.component.html',
  styleUrls: ['./synthesis.component.css']
})
export class SynthesisComponent implements AfterViewInit,OnInit {

  iTechnicals : Intervention[] = [];
  iAdministratives : Intervention[] = [];
  iRecoveries : Intervention[] = [];
  interventions : Intervention[] = [];

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Reclamation', 'Technique'], ['Reclamation', 'Administrative'], ['Reclamation', 'Recouvrement']];
  public pieChartData: SingleDataSet = [1,1,1];//[300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  data :  any[] = [];
  
  constructor(
    private interventionService : InterventionService,
    private elementRef: ElementRef,private _cdref:ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getAll();
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  getAll(){
    this.interventionService.getAll().subscribe(
      (data)=>{
        this.interventions = data;
        for(let intervention of this.interventions){
          if(intervention.theme==="c_technical"){
            this.iTechnicals.push(intervention);
          }
          if(intervention.theme==="c_administrative"){
            this.iAdministratives.push(intervention);
          }
          if(intervention.theme==="c_recovery"){
            this.iRecoveries.push(intervention);
          }
        }
        this.pieChartData = [];
        this.data.push(this.iTechnicals.length);
        this.data.push(this.iAdministratives.length);
        this.data.push(this.iRecoveries.length);
        this.pieChartData = this.data;
      }
    )
  }

  ngAfterViewInit() {

   /* console.log(this.chartRef.nativeElement);
    this._cdref.detectChanges();
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'bar',
      data: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    },
    maintainAspectRatio: false
  }
    })*/
  }

}
