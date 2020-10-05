import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule
    ],
    declarations: [ AboutComponent ],
    exports: [ AboutComponent ],
    providers: []
})
export class AboutModule { }
