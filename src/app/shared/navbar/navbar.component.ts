import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

translate = inject(TranslationService);

//   window.addEventListener('scroll', function() {
//     if (window.scrollY > 0) {
//         nav.style.backgroundColor = '#eef3ff';
//     } else {
//         nav.style.backgroundColor = 'transparent';
//     }
// });

}
