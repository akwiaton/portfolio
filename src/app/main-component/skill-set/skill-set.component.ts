import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

  translate = inject(TranslationService);

}
