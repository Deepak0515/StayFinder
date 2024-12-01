import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name: string = '';
  email: string = '';
  userid: string = '';
  entered_password: string = '';
  reentered_password: string = '';

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async checkpass() {
    if(!this.name)
    if (this.entered_password !== this.reentered_password) {
      await this.showAlert('Error', 'Passwords do not match. Please try again.');
      return;
    } else {
      await this.showAlert('Success', 'Passwords match!');
    }
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present(); // Present the alert
  }
}
