import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from 'src/app/models/notification.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { WebSocketService } from 'src/app/services/websocket.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  notifications : Notification[] = [];
  url = environment;
  user : any; 
  constructor(
    private tokenStorage : TokenStorageService,
    private userService : UserService,
    private wsSocket : WebSocketService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getAllNotifications();
  }

  logout() {
    Swal.fire({
      title: 'êtes-vous sûrs de vouloir quitter?',
      text: 'Vous serez déconnecté!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, quitter!',
      cancelButtonText: 'Non, annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tokenStorage.signout();
        this.wsSocket.disconnect();
        this.router.navigate(['/home']);
      }
    })
  }

  getAllNotifications() {
    this.notifications = [];
    if (this.tokenStorage?.getToken() !== null) {
      console.log(this.tokenStorage.getUser()?.id);
      this.userService.getAllUnreadNotif(this.tokenStorage.getUser()?.id).subscribe(
        (data) => {
          console.log(data);
          this.notifications = data;
        }
      )
    }
  }

}
