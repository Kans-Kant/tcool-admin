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
export class UserService {

  constructor(private http: HttpClient) { }

  logout(): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/auth/logout', httpOptions);
  }
  getMe(id): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/comptes/' + id, httpOptions);
  }

  getUsers(): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/comptes/all', httpOptions);
  }

  update(user, id): Observable<any> {
    return this.http.put(environment.apiUrl + '/api/comptes/update/' + id, user, httpOptions);
  }

  getAllUnreadNotif(id): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/comptes/notif-no-read/' + id, httpOptions);
  }
}