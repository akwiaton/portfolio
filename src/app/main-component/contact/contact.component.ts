import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  translate = inject(TranslationService);

  http = inject(HttpClient);

  contactData = {
      name: "",
      email: "",
      message: "",
    }

    mailTest = true; // wenn auf dem server auf false setzen

    post = {
      endPoint: 'https://deineDomain.de/sendMail.php',
      body: (payload: any) => JSON.stringify(payload),
      options: {
        headers: {
          'Content-Type': 'text/plain',
          responseType: 'text',
        },
      },
    };
  // if else nur zum testen, danach entfernen
    onSubmit(ngForm: NgForm) {
      if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
        this.http.post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
  // hier kann ich hizufügen was noch passieren soll
              ngForm.resetForm();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
      } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
  // zum testen das selbe hier einfügen
        ngForm.resetForm();
      }
    }
}
