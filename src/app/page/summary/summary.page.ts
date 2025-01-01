import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { SummaryBalanceComponent } from './components/balance/balance.component';
import { SummaryWalletComponent } from './components/wallet/wallet.component';
import { SummaryReportComponent } from './components/report/report.component';
import { SummarySpendingComponent } from './components/spending/spending.component';
import { SummaryTransactionComponent } from './components/transaction/transaction.component';

const INTERNAL_COMPONENT = [
    SummaryBalanceComponent,
    SummaryWalletComponent,
    SummaryReportComponent,
    SummarySpendingComponent,
    SummaryTransactionComponent
];

@Component({
    selector: 'summary-page',
    templateUrl: './summary.page.html',
    styleUrls: ['./summary.page.scss'],
    standalone: true,
    imports: [IonContent, ...INTERNAL_COMPONENT],
})
export class SummaryPage {}
