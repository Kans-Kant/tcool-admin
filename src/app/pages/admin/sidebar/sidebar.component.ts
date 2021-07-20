import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { WebSocketService } from 'src/app/services/websocket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user: User;

  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router,
    private userService: UserService,
    private wsSocket : WebSocketService
  ) { }

  ngOnInit(): void {
    this.getUser();
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

  getUser() {
    if (this.tokenStorage.getToken() !== undefined)
      this.userService.getMe(this.tokenStorage.getUser().id).subscribe(
        (data) => {
          this.user = data;
        })
  }

}
