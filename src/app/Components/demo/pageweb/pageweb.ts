import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pageweb',
  imports: [RouterModule],
  templateUrl: './pageweb.html',
  styleUrl: './pageweb.css',
})
export class Pageweb {
  private ruter = inject(Router)
  regresarAlCatalogo(){
    this.ruter.navigate(['/servicios']);
  }
}
