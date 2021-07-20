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
export class RappelService {

  constructor(private http: HttpClient) {}

  sendRappel(message): Observable<any>{
    return this.http.post(environment.apiUrl + '/api/rappels/send-rappel',message, httpOptions);
  }
  getRappelOf(id): Observable<any>{
    return this.http.get(environment.apiUrl + '/api/rappels/created-rappels/'+id, httpOptions);
  }

  getRappel(id): Observable<any>{
    return this.http.get(environment.apiUrl + '/api/rappels/rappel/'+id, httpOptions);
  }

  getMyRappels(id): Observable<any>{
    return this.http.get(environment.apiUrl + '/api/rappels/'+id, httpOptions);
  }

}