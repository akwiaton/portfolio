import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslationService } from '../../../translation.service';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatDialogModule, TranslateModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {

  translate = Inject(TranslationService);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}

}
