import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-caja-teso',
  imports: [RouterModule],
  templateUrl: './caja-teso.html',
  styleUrl: './caja-teso.css',
})
export class CajaTeso {
   constructor(private ruter:Router){}
  regresarAlCatalogo(){
    this.ruter.navigate(['/servicios']);
  }
}
