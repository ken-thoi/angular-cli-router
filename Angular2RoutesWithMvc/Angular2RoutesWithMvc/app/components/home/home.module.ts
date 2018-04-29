// Imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

// Component Decorator
@NgModule({
    imports: [
        FormsModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent
    ]
})

// Component Class
export class HomeModule {
}
