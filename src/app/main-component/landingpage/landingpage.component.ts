import { CommonModule } from '@angular/common';
import { Component, inject, HostListener } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, NavbarComponent, TranslateModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  translate = inject(TranslationService);


  
}
