import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./layout/main/routes').then(x => x.routes)
    }
]