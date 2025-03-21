import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';




@Component({
  selector: 'app-review',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {

translate = inject(TranslationService);

}
