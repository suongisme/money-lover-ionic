import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonItem, IonLabel, IonList, IonText } from '@ionic/angular/standalone';

@Component({
    selector: 'summary-wallet',
    templateUrl: './wallet.component.html',
    standalone: true,
    imports: [IonList, IonItem, IonLabel, IonText, RouterLink],
})
export class SummaryWalletComponent {
}
