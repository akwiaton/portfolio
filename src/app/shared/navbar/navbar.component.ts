import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, inject, HostListener } from '@angular/core';
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
  isScreenSmall: boolean = false;
  open = false;
  openMenu: boolean = false;

translate = inject(TranslationService);

checkSize() {
  window.innerWidth <= 1060;
}

ngOnInit() {
  this.checkScreenSize();
}

@HostListener('window:resize', ['$event'])
onResize() {
  this.checkScreenSize();
}

checkScreenSize() {
  this.isScreenSmall = window.innerWidth <= 1060;
}

// getDynamicClass() {
//   return this.openMenu ? 'menu-icon active' : 'menu-icon inactive';
// }
toggleMenu() {
  if (this.open == false) {
    this.open = true;
  } else {
    this.open = false;
  }
}

closeMenu() {
  this.open = false;
}

}
