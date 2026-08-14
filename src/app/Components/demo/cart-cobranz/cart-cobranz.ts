import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-cobranz',
  imports: [RouterModule],
  templateUrl: './cart-cobranz.html',
  styleUrl: './cart-cobranz.css',
})
export class CartCobranz {
   constructor(private ruter:Router){}
  regresarAlCatalogo(){
    this.ruter.navigate(['/servicios']);
  }
}
