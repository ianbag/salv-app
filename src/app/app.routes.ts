import { ConveniosComponent } from './convenios/convenios.component';
import { Routes } from "@angular/router";

import { ResidentesComponent } from "./residentes/residentes.component";
import { ResidenteComponent } from "./residentes/residente/residente.component";
import { NotFoundComponent } from './not-found/not-found.component';

export const ROUTES: Routes = [
    //ROTAS VÃO AQUI

    { path: 'residentes', component: ResidentesComponent },
    { path: 'residente/:id', component: ResidenteComponent },
    { path: 'convenios', component: ConveniosComponent },
    { path: '**', component: NotFoundComponent}

]