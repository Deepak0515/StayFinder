import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {

  constructor(public modalController: ModalController,
    private router: Router
  ) {}

  async openImageModal(imageUrl: string) {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img: imageUrl
      }
    });
    return await modal.present();
  }

  async checkavailability(){
    this.router.navigate(['/bookingpage']);
  }
}
