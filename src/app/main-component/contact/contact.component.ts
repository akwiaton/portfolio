import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    TranslateModule,
    CommonModule,
    RouterModule,
    PopupComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  translate = inject(TranslationService);

  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest = false;
  privacyPolicyChecked = false;
  arrowBtn = './assets/img/go-up-btn.svg';

  post = {
    endPoint: 'https://alicja-kwiaton.de/sendMail-new.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.openPopup();
            ngForm.resetForm();
            this.privacyPolicyChecked = !this.privacyPolicyChecked;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  togglePrivacyPolicy() {
    this.privacyPolicyChecked = !this.privacyPolicyChecked;
  }

  constructor(@Inject(MatDialog) private dialog: MatDialog) {}

  openPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '350px',
      height: '200px',
      data: { message: 'Deine Nachricht wurde erfolgreich gesendet' },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('Das Pop-up wurde geschlossen');
    });
    setTimeout(() => {
      dialogRef.close();
    }, 2000);
  }
}
