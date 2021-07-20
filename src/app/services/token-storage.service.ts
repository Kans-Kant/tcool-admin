import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ROLE_KEY = 'admin';

@Injectable({providedIn: 'root'})
export class TokenStorageService {

  constructor() {}

  signout() {
    //window.sessionStorage.clear();
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.removeItem(ROLE_KEY);
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
 }

 public saveUser(user) {
     window.sessionStorage.removeItem(USER_KEY);
     window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
 }

 public getUser() {
     return JSON.parse(sessionStorage.getItem(USER_KEY));
 }

 public saveRole(role){
  window.sessionStorage.removeItem(ROLE_KEY);
  window.sessionStorage.setItem(ROLE_KEY, role);
 }

 public getRole(){
  return sessionStorage.getItem(ROLE_KEY);
 }

}