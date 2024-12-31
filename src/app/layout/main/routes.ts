import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main-layout.component').then((x) => x.MainLayoutComponent),
    children: [
      {
        path: 'tong-quan',
        loadComponent: () =>
          import('@money-lover/page/summary').then((x) => x.SummaryPage),
      },
      
      {
        path: '',
        redirectTo: '/tong-quan',
        pathMatch: 'full',
      },
    ],
  },
];
