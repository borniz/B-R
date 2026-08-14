import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contavilidad',
  imports: [],
  templateUrl: './contavilidad.html',
  styleUrl: './contavilidad.css',
})
export class Contavilidad {
   constructor(private ruter:Router){}
  regresarAlCatalogo(){
    this.ruter.navigate(['/servicios']);
  }
}
