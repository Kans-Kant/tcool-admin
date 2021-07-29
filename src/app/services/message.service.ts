import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  sendMessage(message): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/messages/send-message', message, httpOptions);
  }
  getMesageOf(id): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/messages/created-messages/' + id, httpOptions);
  }

  getMessage(id): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/messages/message/' + id, httpOptions);
  }

  getMyMessages(id): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/messages/' + id, httpOptions);
  }

}