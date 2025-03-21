import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, inject, HostListener } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatButtonToggleModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScreenSmall: boolean = false;
  open = false;
  logoUrl = './assets/img/logo.png';


translate = inject(TranslationService);

changeLogo() {
  if (this.open) {
    this.logoUrl = './assets/img/logo-blue.svg';
  } else {
    this.logoUrl = './assets/img/logo.png';
  }
}

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

scrollToTop() {
  window.scrollTo(0, 0);
}

}
