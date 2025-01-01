import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonText } from '@ionic/angular/standalone';
import { CurrencyFormatterPipe } from '@money-lover/shared/pipe';
import { Transaction, TransactionContainer } from '../../shared';

@Component({
    selector: 'summary-transaction',
    templateUrl: './transaction.component.html',
    standalone: true,
    imports: [
        RouterLink,
        DatePipe,

        CurrencyFormatterPipe,

        IonText,
        TransactionContainer,
    ],
})
export class SummaryTransactionComponent {
    transactions: Transaction[] = [
        {
            id: 1,
            category: 'Đồ dùng cá nhân',
            icon: 'personal',
            amount: 35000,
            createdDate: '2024-12-31',
        },

        {
            id: 2,
            category: 'Đồ dùng cá nhân',
            icon: 'personal',
            amount: 35000,
            createdDate: '2024-12-31',
        },

        {
            id: 3,
            category: 'Thu nhập khác',
            icon: 'other_income',
            amount: 35000,
            createdDate: '2024-12-31',
            transType: 'incomming',
        },
    ];
}
