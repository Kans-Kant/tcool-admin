import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountComponent } from './account/account.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesComponent } from './messages/messages.component';
import { UsersComponent } from './users/users.component';
import { RemindersComponent } from './reminders/reminders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SynthesisComponent } from './synthesis/synthesis.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './messages/message/message.component';
import { MessageShowComponent } from './messages/message-show/message-show.component';
import { InterventionsComponent } from './synthesis/interventions/interventions.component';
import { InterventionComponent } from './synthesis/intervention/intervention.component';
import { NotificationShowComponent } from './notifications/notification-show/notification-show.component';
import { ReminderShowComponent } from './reminders/reminder-show/reminder-show.component';
import { WebSocketService } from 'src/app/services/websocket.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from '../home/auth.interceptor';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AccountComponent,
    NotificationsComponent,
    MessagesComponent,
    UsersComponent,
    RemindersComponent,
    DashboardComponent,
    SynthesisComponent,
    SettingsComponent,
    MessageComponent,
    MessageShowComponent,
    InterventionsComponent,
    InterventionComponent,
    NotificationShowComponent,
    ReminderShowComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  exports : [
    HeaderComponent,
    SidebarComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
    },
  ],
})
export class AdminModule { }
