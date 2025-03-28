import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';


interface Project {
[x: string]: any;
  img: string;
  name: string;
  title: string;
  description: string;
  projectLink: string;
  codeLink: string;
  isRowReverse: boolean
}

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule, TranslateModule ],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {

  translate = inject(TranslationService);

  constructor() {}

  projects: Project[] = [
    // {
    //   img: "./assets/img/project-4.1.svg",
    //   name: "DaBubble",
    //   title: "Angular | TypeScript | Firebase | Material Design",
    //   description: "PROJECT.projectDabubble",
    //   projectLink: "https://da-bubble.alicja-kwiaton.de",
    //   codeLink: "https://github.com/DonDomenico/DABubble",
    //   isRowReverse: true,
    // },
  {
    img: "./assets/img/project-2.1.png",
    name: "Join",
    title: "JavaScript | CSS | HTML",
    description: "PROJECT.projectJoin",
    projectLink: "https://join.alicja-kwiaton.de/index.html",
    codeLink: "https://github.com/akwiaton/join",
    isRowReverse: false,
  },
  {
    img: "./assets/img/project-1.1.png",
    name: "Pollo Loco",
    title: "JavaScript | CSS | HTML",
    description: "PROJECT.projectPolloLoco",
    projectLink: "https://pollo-loco.alicja-kwiaton.de",
    codeLink: "https://github.com/akwiaton/el_pollo_loco",
    isRowReverse: true,
  },
  {
    img: "./assets/img/project-3.1.png",
    name: "Paddlergilde Kaiserslautern 1926 e.V.",
    title: "WordPress | Google Analytics | Tag Manager",
    description: "PROJECT.projectPadllergilde",
    projectLink: "https://www.paddlergilde.de/",
    codeLink: "",
    isRowReverse: false,
  },
  ]

}
