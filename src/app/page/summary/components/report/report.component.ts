import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonText, IonCard, IonCardContent, IonSegment, IonSegmentButton, IonLabel, IonSegmentView, IonSegmentContent } from '@ionic/angular/standalone';

@Component({
    selector: 'summary-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss'],
    standalone: true,
    imports: [
        IonText,
        IonCard,
        IonCardContent,
        IonSegment, IonSegmentButton, IonLabel,
        IonSegmentView, IonSegmentContent,
        
        RouterLink
    ]
})
export class SummaryReportComponent {

}