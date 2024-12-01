import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  entered_email: string = '';
  entered_password: string = '';
  entered_name: string = '';

  actual_name : string = 'Deepak_Sangaram0515';
  actual_email: string = "deepak.sangaram@gmail.com";
  actual_password: string = 'Temple@123'

  
  constructor(private alertController: AlertController, private router: Router) {}

  async login() {
    // Check if any field is empty
    if (!this.entered_name) {
      await this.showAlert('Error', 'Please fill your name.');
      return;
    }
    if (!this.entered_email) {
      await this.showAlert('Error', 'Please fill your email.');
      return;
    }
    if (!this.entered_password) {
      await this.showAlert('Error', 'Please fill your password.');
      return;
    }

    if(this.entered_name != this.actual_name){
      await this.showAlert('Error', 'Incorrect userid.');
      return;
    }
    if(this.entered_email != this.actual_email){
      await this.showAlert('Error', 'Incorrect email id.');
      return;
    }
    if(this.entered_password != this.actual_password){
      await this.showAlert('Error', 'Incorrect password.');
      return;
    }

    if(this.entered_name == this.actual_name || this.entered_email == this.actual_email || this.entered_password == this.actual_password){
      this.router.navigate(['/main']);
    
    }
  }

  async signup(){
    this.router.navigate(['/signup'])
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();  // Present the alert
  }
}
