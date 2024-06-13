import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';


interface Project {
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
  imports: [CommonModule, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {

  translate = inject(TranslationService);

  projects: Project[] = [
  {
    img: "./assets/img/project-2.1.png",
    name: "Join",
    title: "JavaScript | CSS | HTML",
    description: "Task-manager Tool orientiert sich am Kanban-System. Er ermöglicht das Organisieren und Sortieren von Aufgaben mithilfe der Drag-and-Drop-Funktion sowie das Erstellen von Kontakten, die man den Aufgaben zuweisen kann",
    // description: [("MYWORK.projectDescription' | translate")],
    projectLink: "Live Test",
    codeLink: "Github",
    isRowReverse: false,
  },
  {
    img: "./assets/img/project-1.1.png",
    name: "Pollo Loco",
    title: "JavaScript | CSS | HTML",
    // description: [("MYWORK.projectDescription' | translate")],
    description: "El Pollo Loco ist ein Jump&Run Spiel, das auf einem objektorientierten Ansatz basiert. Probieren Sie es aus und helfen Sie Pepe, Münzen und Tabasco-Flaschen zu sammeln, um gegen den verrückten Hahn zu kämpfen.",
    projectLink: "Live Test",
    codeLink: "Github",
    isRowReverse: true,
  },
  ]
rowReverse: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;

}
