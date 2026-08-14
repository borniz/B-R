import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-comp-prov',
  imports: [RouterModule],
  templateUrl: './comp-prov.html',
  styleUrl: './comp-prov.css',
})
export class CompProv {
   constructor(private ruter:Router){}
  regresarAlCatalogo(){
    this.ruter.navigate(['/servicios']);
  }
}
