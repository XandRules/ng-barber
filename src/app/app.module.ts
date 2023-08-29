import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AutenticacaoService } from './auth/autenticacao.service';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBNPj-UKRWAvakl4Yub7D5puacKvFhpEMQ",
        authDomain: "ngbarber-90dd7.firebaseapp.com",
        databaseURL: "https://ngbarber-90dd7-default-rtdb.firebaseio.com",
        projectId: "ngbarber-90dd7",
        storageBucket: "ngbarber-90dd7.appspot.com",
        messagingSenderId: "123811783342",
        appId: "1:123811783342:web:db8533024788878dfdc33f",
        measurementId: "G-R5ZBP4N59P"
      }
    ),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [AutenticacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
