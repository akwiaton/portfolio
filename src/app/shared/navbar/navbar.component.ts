import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

//   window.addEventListener('scroll', function() {
//     if (window.scrollY > 0) {
//         nav.style.backgroundColor = '#eef3ff';
//     } else {
//         nav.style.backgroundColor = 'transparent';
//     }
// });

}
