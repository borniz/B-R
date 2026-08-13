import { Component } from '@angular/core';
import { Servicios } from "../servicios/servicios";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  standalone:true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private router: Router) {}

  // Acción para llevarlos al configurador modular que creamos antes
  irAServicios(): void {
    this.router.navigate(['/servicios']);
    console.log('Navegando a la sección de personalización del ERP...');
  }

  agendarDemo(): void {
    alert('¡Gracias por tu interés en B&R Solutions! Muy pronto habilitaremos el formulario de contacto para agendar tu demostración personalizada.');
  }
}
