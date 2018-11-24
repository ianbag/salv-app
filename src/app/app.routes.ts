import { Routes } from "@angular/router";

import { ResidentesComponent } from "./residentes/residentes.component";
import { ResidenteComponent } from "./residentes/residente/residente.component";

export const ROUTES: Routes = [
    //ROTAS VÃO AQUI

    { path: 'residentes', component: ResidentesComponent },
    { path: 'residente/:codigo', component: ResidenteComponent }

]