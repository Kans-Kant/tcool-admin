import { map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import { NotificationService } from './notification.service';
import { ToastNotificationService } from './toast-notification.service';
import { Notification } from './../models/notification.model';
import * as SockJS from 'sockjs-client';
import * as StompJs from '@stomp/stompjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from './token-storage.service';
/**
 * a websocket service allowing subscription to a broker
 */
@Injectable()
export class WebSocketService {

    public unreadNotif: number[] = [];
    private client: StompJs.Client;

    constructor(
        private tokenStorage: TokenStorageService,
        private toastr: ToastNotificationService,
        private notifService: NotificationService
    ) { }

    connect() {
        if (!this.client || this.client.connected) {
            this.client = new StompJs.Client({
                connectHeaders: {
                    username: this.tokenStorage.getUser().username,
                    Authorization: 'Bearer ' + this.tokenStorage.getToken(),
                    //responseType: 'text'
                },
                webSocketFactory: () => new SockJS(environment.apiUrl + '/ws'),
            });

            this.client.onConnect = () => {
                this.client.subscribe('/user/' + this.tokenStorage.getUser().username + '/queue/notifications', (resp) => {
                    const text: Notification = JSON.parse(resp.body);
                    this.toastr.showInfo(text.message, text.sendFrom);
                });

                this.client.subscribe('/user/' + this.tokenStorage.getUser().username + '/queue/unread', (resp) => {
                    const nbr: number = JSON.parse(resp.body);
                    this.unreadNotif.push(nbr);
                });

                console.info('connected!');
            };

            this.client.onStompError = (frame) => {
                console.error(frame.headers['message']);
                console.error('Details: ', frame.body);
            };

            this.client.activate();
        }
    }

    disconnect() {
        if (this.client && this.client.connected) {
            this.client.deactivate();
            this.client = null;
            console.info("disconnected :-/");
        }
    }


}
