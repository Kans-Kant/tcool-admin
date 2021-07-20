import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
})
};

@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any>{
    return this.http.get(environment.apiUrl + '/api/interventions/all', httpOptions);
  }

  getIByTheme(theme): Observable<any>{
    return this.http.get(environment.apiUrl + '/api/interventions/theme/'+theme, httpOptions);
  }

  getInterById(id): Observable<any>{
    return this.http.get(environment.apiUrl + '/api/interventions/'+id, httpOptions);
  }

}