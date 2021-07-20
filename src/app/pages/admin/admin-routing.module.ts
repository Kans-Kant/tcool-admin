import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AccountComponent } from './account/account.component';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { UsersComponent } from './users/users.component';
import { SynthesisComponent } from './synthesis/synthesis.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RemindersComponent } from './reminders/reminders.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminAuthGuardLogin, AuthGuard } from '../home/auth.guard.service';
import { MessageComponent } from './messages/message/message.component';
import { MessageShowComponent } from './messages/message-show/message-show.component';
import { InterventionsComponent } from './synthesis/interventions/interventions.component';
import { InterventionComponent } from './synthesis/intervention/intervention.component';
import { ReminderShowComponent } from './reminders/reminder-show/reminder-show.component';
import { NotificationShowComponent } from './notifications/notification-show/notification-show.component';

export const routes: Routes = [
  {
    path: 'admin',
    canActivate : [AuthGuard/*,AdminAuthGuardLogin*/],
    component: AdminComponent,
    children: [
      {
        path: '', redirectTo: 'account', pathMatch: 'full'
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'messages',
        component: MessagesComponent
      },
      {
        path: 'message/:id',
        component: MessageShowComponent
      },
      {
        path: 'message',
        component: MessageComponent
      },
      {
        path: 'utilisateurs',
        component: UsersComponent
      },
      {
        path: 'synthese',
        component: SynthesisComponent
      },
      {
        path: 'interventions/:theme',
        component: InterventionsComponent
      },
      {
        path: 'intervention/:id',
        component: InterventionComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'notification/:id',
        component: NotificationShowComponent
      },
      {
        path: 'rappels',
        component: RemindersComponent
      },
      {
        path: 'rappel/:id',
        component: ReminderShowComponent
      },
      {
        path: 'parametres',
        component: SettingsComponent
      }/*,
      {
        path: 'tableau',
        component: DashboardComponent
      }*/
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
