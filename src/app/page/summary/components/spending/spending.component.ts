import { Component } from '@angular/core';
import {
    IonCard,
    IonCardContent,
    IonSegment,
    IonSegmentButton,
    IonSegmentContent,
    IonSegmentView,
    IonText
} from '@ionic/angular/standalone';
import { TransactionContainer, Transaction } from '../../shared';

@Component({
    selector: 'summary-spending',
    templateUrl: './spending.component.html',
    standalone: true,
    imports: [
        IonText,
        IonSegment,
        IonSegmentButton,
        IonSegmentView,
        IonSegmentContent,
        IonCard,
        IonCardContent,
        TransactionContainer
    ],
})
export class SummarySpendingComponent {

    transactions: Transaction[] = [
        {
            id: 1,
            amount: 12967520,
            category: 'Gia đình',
            amountRate: 96,
            icon: 'family'
        },
        {
            id: 2,
            amount: 12967520,
            category: 'Gia đình',
            amountRate: 96,
            icon: 'family'
        },
        {
            id: 3,
            amount: 12967520,
            category: 'Gia đình',
            amountRate: 96,
            icon: 'family'
        }
    ]

}