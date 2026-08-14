import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multi-sede',
  imports: [],
  templateUrl: './multi-sede.html',
  styleUrl: './multi-sede.css',
})
export class MultiSede {
   constructor(private ruter:Router){}
  regresarAlCatalogo(){
    this.ruter.navigate(['/servicios']);
  }
}
