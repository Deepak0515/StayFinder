import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookingpagePageRoutingModule } from './bookingpage-routing.module';

import { BookingPagePage } from './bookingpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookingpagePageRoutingModule
  ],
  declarations: [BookingPagePage]
})
export class BookingpagePageModule {}
