import { addIcons } from 'ionicons';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationEnd, Router } from '@angular/router';
import {
  IonHeader,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { filter } from 'rxjs';

@Component({
  selector: 'money-lover-main-layout',
  templateUrl: './main-layout.component.html',
  standalone: true,
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonTitle,
  ],
})
export class MainLayoutComponent implements OnInit {
  title?: string;
  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.router.events
      .pipe(filter((x) => x instanceof ChildActivationEnd))
      .subscribe((data) => {
        let sn = data.snapshot;
        while (sn.firstChild) {
          sn = sn.firstChild;
        }
        this.title = sn.data.title;
      });
  }
}
