import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.page.html',
  styleUrls: ['./bookingpage.page.scss'],
})
export class BookingPagePage {
  name: string = '';
  phone: number | null = null;
  aadhaar: string = '';
  staytime: number | null = null;

  constructor(private alertController: AlertController, private router: Router, ) {}

  // Function to handle form submission
  async bookbed() {


    if(!this.name){
      await this.showAlert('Error', 'Please fill your name.');
      return;

    }

    if(!this.phone){
      await this.showAlert('Error', 'Please fill your phone number.');
      return;

    }

    if(!this.aadhaar){
      await this.showAlert('Error', 'Please fill your aadhaar card number.');
      return;

    }

    if(!this.staytime){
      await this.showAlert('Error', 'Please select stay time.');
      return;

    }

    if(this.staytime > 12){
      await this.showAlert('Error', 'Please select stay period only from 1 to 12 month(S) only');
      return ;

    }

    if(this.phone.toString().length !== 10){
      await this.showAlert('Error', 'Please enter valid phone number');
      return
    }

    if(this.aadhaar.toString().length !== 12  ){
      await this.showAlert('Error', 'Please enter valid aadhaar number');
      return
    }
    

    // Display confirmation popup
    const alert = await this.alertController.create({
      header: 'Booking Confirmation',
      message: `Are you sure you want to book the hostel for ${this.staytime} months?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Booking Cancelled');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            // Optional: Clear form fields after confirmation
            this.clearForm();
            // Navigate to the desired route after confirming the booking
            this.router.navigate(['/payment']); // Change to your target route
          }
        }
      ]
    });

    await alert.present();
  }
  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();  // Present the alert
  }

  // Optional method to clear form fields
  clearForm() {
    this.name = '';
    this.phone = null;
    this.aadhaar = '';
    this.staytime = null;
  }
}
