import { Component } from '@angular/core';
import {
  IonContent,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'summary-page',
  templateUrl: './summary.page.html',
  standalone: true,
  imports: [IonContent, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class SummaryPage {}
