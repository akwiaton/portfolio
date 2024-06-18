import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from '../main-component/landingpage/landingpage.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [RouterModule, CommonModule, NavbarComponent, FooterComponent, LandingpageComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
