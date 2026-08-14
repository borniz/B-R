import { Router, RouterModule } from '@angular/router';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-productos-inventario',
  imports: [RouterModule],
  templateUrl: './productos-inventario.html',
  styleUrl: './productos-inventario.css',
})
export class ProductosInventario {
   constructor(private ruter:Router){}
  regresarAlCatalogo(){
    this.ruter.navigate(['/servicios']);
  }
 selectContainer = signal <boolean>(false);
  ContainerOptions() {
this.selectContainer.set(!this.selectContainer());
}
}
