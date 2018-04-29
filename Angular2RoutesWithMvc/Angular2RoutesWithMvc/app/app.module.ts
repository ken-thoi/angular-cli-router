import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { HomeModule } from './components/home/home.module';
import { ContactsModule } from './components/contacts/contacts.module';
import { NavMenuModule } from './components/nav-menu/nav-menu.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        HomeModule,
        ContactsModule,
        NavMenuModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
