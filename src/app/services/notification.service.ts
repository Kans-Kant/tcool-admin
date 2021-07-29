import { Notification } from './../models/notification.model';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: "root"
})
export class NotificationService {

  private notificationEndpoint = '/api/notification';
  notificationMessage = new EventEmitter();

  constructor(private http: HttpClient) {}

  // get notifications
  getNotifs(idReceiver: number) {
    return this.http.get(environment.apiUrl + this.notificationEndpoint + '/all/' + idReceiver);
  }

  // read notification
  readNotification(item: Notification) {
    return this.http.put(environment.apiUrl + this.notificationEndpoint + '/read', item);
  }

  // get number of unread notification
  getNumberOfUnreadNotification(idReceiver: number) {
    return this.http.get(environment.apiUrl + this.notificationEndpoint + '/unread-message/' + idReceiver);
  }
}
