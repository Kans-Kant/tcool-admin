import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { WebSocketService } from 'src/app/services/websocket.service';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  credentials = { 'email': '', 'password': '' }

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private wsSocket: WebSocketService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    })
  }

  onLogin() {
    this.credentials.email = this.loginForm.value.email;
    this.credentials.password = this.loginForm.value.password;
    this.authService.login(this.credentials).subscribe(
      (data) => {
        if (data.currentUser.authorities[0].authority==="ASSISTANTE") {
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data.currentUser);
          this.wsSocket.connect();
          this.tokenStorage.saveRole(data.currentUser.authorities[0].authority);
          this.router.navigate(['/admin']);
        }else{
          Swal.fire({
            'icon' : 'error',
            'text' : 'You are not authorized'
          })
        }
      }
    )
  }

}
