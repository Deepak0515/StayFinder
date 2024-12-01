import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingPagePage } from './bookingpage.page';

const routes: Routes = [
  {
    path: '',
    component: BookingPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingpagePageRoutingModule {}
