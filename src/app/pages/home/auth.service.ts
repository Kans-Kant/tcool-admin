import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(credentials): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/auth/login', {
      username: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  register(user/*,token*/): Observable<any> {
    return this.http.post(environment.apiUrl + '/api/auth/register'/*signup?recaptchaToken='+token*/, user, httpOptions);
  }

}