import { Routes } from '@angular/router';
import { Servicios } from './Components/servicios/servicios';
import { Home } from './Components/home/home';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'servicios',component:Servicios}
];
