import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage {
  @Input() img!: string;  // Using non-null assertion operator here

  constructor(public modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }
}
