import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);