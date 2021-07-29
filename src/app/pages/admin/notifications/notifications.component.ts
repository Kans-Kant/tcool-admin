import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { WebSocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: Notification[] = [];

  notifs: number[];
  constructor(
    private userService: UserService,
    private tokenStorage: TokenStorageService,
    private wsSocket : WebSocketService
  ) { }

  ngOnInit(): void {
    this.notifs = this.wsSocket.unreadNotif;
    console.log(this.notifs);
    this.getAllNotifications();
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
