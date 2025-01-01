import { NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { IonIcon, IonItem, IonList, IonText } from '@ionic/angular/standalone';
import { CurrencyFormatterPipe } from '@money-lover/shared/pipe';

@Component({
    selector: 'transaction-container',
    templateUrl: './transaction.component.html',
    standalone: true,
    imports: [NgFor, NgTemplateOutlet, CurrencyFormatterPipe, IonList, IonItem, IonText, IonIcon ],
})
export class TransactionContainer {
    @Input({ required: true })
    transactions: Transaction[];

    @Input({ required: false })
    viewTemplate: TemplateRef<any>;

    tracker = (index: number, transaction: Transaction): any => {
        return transaction.id;
    }


}

export interface Transaction {
    id: any;
    amount: number;
    category: string;
    icon: string;
    amountRate?: number;
    createdDate?: string;
    transType?: 'incomming' | 'outcomming';
}
