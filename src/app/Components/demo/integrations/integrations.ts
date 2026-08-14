import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-integrations',
  imports: [],
  templateUrl: './integrations.html',
  styleUrl: './integrations.css',
})
export class Integrations {
   constructor(private ruter:Router){}
  regresarAlCatalogo(){
    this.ruter.navigate(['/servicios']);
  }
}
