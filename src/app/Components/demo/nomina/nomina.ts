import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nomina',
  imports: [],
  templateUrl: './nomina.html',
  styleUrl: './nomina.css',
})
export class Nomina {
   constructor(private ruter:Router){}
  regresarAlCatalogo(){
    this.ruter.navigate(['/servicios']);
  }
}
