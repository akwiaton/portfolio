import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactComponent } from './contact/contact.component';
import { TranslationService } from '../translation.service';
import { ReviewComponent } from "../review/review.component";

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [CommonModule, LandingpageComponent, AboutMeComponent, FooterComponent, SkillSetComponent, MyWorkComponent, ContactComponent, ReviewComponent],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent {

}
