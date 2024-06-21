import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [SocialSharing],
})
export class HomePage {

    constructor(private actionSheetController: ActionSheetController, private socialSharing: SocialSharing) {}

    async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Share via',
        buttons: [
          {
            text: 'Facebook',
            icon: 'logo-facebook',
            handler: () => {
              console.log('Share via Facebook');
              this.shareViaFacebook();
              // Add your Facebook share logic here
            }
          },
          {
            text: 'Twitter',
            icon: 'logo-twitter',
            handler: () => {
              console.log('Share via Twitter');
              this.shareViaTwitter();
              // Add your Twitter share logic here
            }
          },
          {
            text: 'Instagram',
            icon: 'logo-instagram',
            handler: () => {
              console.log('Share via Instagram');
              this.shareViaInstagram();
              // Add your Instagram share logic here
            }
          },
          {
            text: 'Email',
            icon: 'mail',
            handler: () => {
              console.log('Share via Email');
              this.shareViaEmail();
              // Add your Email share logic here
            }
          },
          {
            text: 'Cancel',
            icon: 'close',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      await actionSheet.present();
    }

    shareViaFacebook() {
      this.socialSharing.shareViaFacebook('Check this out!', '', 'https://example.com').then(() => {
        console.log('Shared successfully!');
      }).catch((error) => {
        console.error('Error sharing via Facebook', error);
      });
    }

    shareViaTwitter() {
      this.socialSharing.shareViaTwitter('Check this out!', '', 'https://example.com').then(() => {
        console.log('Shared successfully!');
      }).catch((error) => {
        console.error('Error sharing via Twitter', error);
      });
    }

    shareViaInstagram() {
      this.socialSharing.shareViaInstagram('Check this out!', 'data:image/png;base64,...').then(() => {
        console.log('Shared successfully!');
      }).catch((error) => {
        console.error('Error sharing via Instagram', error);
      });
    }

    shareViaEmail() {
      this.socialSharing.shareViaEmail('Check this out!', 'Subject', ['recipient@example.com']).then(() => {
        console.log('Email sent successfully!');
      }).catch((error) => {
        console.error('Error sending email', error);
      });
    }


}
