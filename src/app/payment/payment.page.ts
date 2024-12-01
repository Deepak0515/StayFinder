import { Component, OnDestroy } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnDestroy {
  paymentMethod: string | null = null;
  showQRCode: boolean = false;
  paymentTimer: any;

  constructor(private alertController: AlertController, private router: Router) {} // Inject Router

  async makepayment() {
    if (!this.paymentMethod) {
      await this.showAlert('Error', 'Please select a payment method.');
      return;
    }

    if (this.paymentMethod === 'hostel') {
      await this.showAlert('', 'Please pay the fee at the hostel.');
    } else if (this.paymentMethod === 'upi') {
      this.showQRCode = true;
      this.startPaymentTimer();
    }
  }

  startPaymentTimer() {
    // Set a timer for 1 minute (60000 milliseconds)
    this.paymentTimer = setTimeout(async () => {
      await this.showAlert('Success', 'Payment successful!');
      this.showQRCode = false; // Hide QR code after success
      this.router.navigate(['/home']); // Navigate to the home page
    }, 60000); // 1 minute delay
  }

  ngOnDestroy() {
    if (this.paymentTimer) {
      clearTimeout(this.paymentTimer);
    }
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Optionally navigate to the home page when the alert is closed
            this.router.navigate(['/home']);
          }
        }
      ],
    });
    await alert.present();
  }
}
