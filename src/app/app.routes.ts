import { Routes } from '@angular/router';
import { Servicios } from './Components/servicios/servicios';
import { Home } from './Components/home/home';
import { Demo } from './Components/demo/demo';
import { ProductosInventario } from './Components/demo/productos-inventario/productos-inventario';
import { VentasFact } from './Components/demo/ventas-fact/ventas-fact';
import { ApiEmpresarial } from './Components/demo/api-empresarial/api-empresarial';
import { CajaTeso } from './Components/demo/caja-teso/caja-teso';
import { CartCobranz } from './Components/demo/cart-cobranz/cart-cobranz';
import { CompProv } from './Components/demo/comp-prov/comp-prov';
import { Contavilidad } from './Components/demo/contavilidad/contavilidad';
import { CrmClient } from './Components/demo/crm-client/crm-client';
import { Integrations } from './Components/demo/integrations/integrations';
import { MultiSede } from './Components/demo/multi-sede/multi-sede';
import { Nomina } from './Components/demo/nomina/nomina';
import { Post } from './Components/demo/post/post';
import { Report } from './Components/demo/report/report';
import { UserRol } from './Components/demo/user-rol/user-rol';
import { Pageweb } from './Components/demo/pageweb/pageweb';
export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'servicios',component:Servicios},
    {path:'demo',component:Demo},
    {path:'inv',component:ProductosInventario},
    {path:'venFact',component:VentasFact},
    {path:'apiEmpr',component:ApiEmpresarial},
    {path:'cajTeso',component:CajaTeso},
    {path:'cartCob',component:CartCobranz},
    {path:'comProv',component:CompProv},
    {path:'conta',component:Contavilidad},
    {path:'crmClient',component:CrmClient},
    {path:'integ',component:Integrations},
    {path:'MultSed',component:MultiSede},
    {path:'nomim',component:Nomina},
    {path:'post',component:Post},
    {path:'report',component:Report},
    {path:'userRol',component:UserRol},
    {path:'pageweb',component:Pageweb}
    
    
];
