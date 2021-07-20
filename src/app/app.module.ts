import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './pages/home/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { AdminModule } from './pages/admin/admin.module';
import { AuthGuard } from './pages/home/auth.guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataStorageService } from './services/data.service';
import { ToastrModule } from 'ngx-toastr';
import { WebSocketService } from './services/websocket.service';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
      preventDuplicates: true,
    }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    AdminModule,
    ChartsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    DataStorageService,
    WebSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
