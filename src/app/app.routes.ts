import { Routes } from '@angular/router';
import { MainComponentComponent } from './main-component/main-component.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: MainComponentComponent },
    { path: 'imprint', component: ImprintComponent },
];
