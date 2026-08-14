import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-api-empresarial',
  imports: [RouterModule],
  templateUrl: './api-empresarial.html',
  styleUrl: './api-empresarial.css',
})
export class ApiEmpresarial {
  constructor(private ruter:Router){}
  regresarAlCatalogo(){
    this.ruter.navigate(['/servicios']);
  }
}
