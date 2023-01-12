import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NosotrosComponent,
    ContactoComponent,
    MisionComponent,
    VisionComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NosotrosComponent,
    ContactoComponent,
    MisionComponent,
    VisionComponent,
    HomeComponent
  ]
})
export class PagesModule { }
