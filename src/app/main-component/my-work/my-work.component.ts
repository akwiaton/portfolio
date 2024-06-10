import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  img: string;
  name: string;
  title: string;
  description: string;
  projectLink: string;
  codeLink: string
}

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {

  projects: Project[] = [
  {
    img: "./assets/img/project-2.png",
    name: "Join",
    title: "JavaScript | CSS | HTML",
    description: "Der Aufgabenmanager orientiert sich am Kanban-System. Er ermöglicht das Organisieren und Sortieren von Aufgaben mithilfe der Drag-and-Drop-Funktion sowie das Erstellen von Kontakten, die man den Aufgaben zuweisen kann.",
    projectLink: "Live Test",
    codeLink: "Github"
  },
  {
    img: "./assets/img/project-1.png",
    name: "Pollo Loco",
    title: "JavaScript | CSS | HTML",
    description: "El Pollo Loco ist ein Jump&Run Spiel, das auf einem objektorientierten Ansatz basiert. Probieren Sie es aus und helfen Sie Pepe, Münzen und Tabasco-Flaschen zu sammeln, um gegen den verrückten Hahn zu kämpfen.",
    projectLink: "Live Test",
    codeLink: "Github"
  },
  ]

}
