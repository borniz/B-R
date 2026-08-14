import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
interface DolorVentas {
  id: string;
  emoji: string;
  pregunta: string;
  problemaReal: string;
  solucionErp: string;
}
@Component({
  selector: 'app-ventas-fact',
  imports: [RouterModule],
  templateUrl: './ventas-fact.html',
  styleUrl: './ventas-fact.css',
})
export class VentasFact {
   constructor(private ruter:Router){}
  regresarAlCatalogo(){
    this.ruter.navigate(['/servicios']);
  }
dolorVentasSeleccionado = signal<string>('dian');
  listaDoloresVentas: DolorVentas[] = [
  {
    id: 'rapidez',
    emoji: '⚡',
    pregunta: '¿Tus clientes hacen largas filas para recibir una nota de venta o factura?',
    problemaReal: 'Hacer facturas a mano en papel o buscar precios de memoria en Excel hace que el cliente espere de más, se canse y decida irse a la competencia.',
    solucionErp: 'Con B&R Solutions creas facturas tradicionales en un segundo. Seleccionas los productos, el sistema aplica descuentos automáticamente y genera un PDF limpio listo para imprimir o enviar por WhatsApp.'
  },
  {
    id: 'cuentas',
    emoji: '📁',
    pregunta: '¿Te cuesta saber cuánto vendiste al final del día?',
    problemaReal: 'Sumar recibos de papel al cerrar el negocio quita tiempo y es fácil cometer errores, perdiendo el rastro de la utilidad real o de los créditos otorgados.',
    solucionErp: 'El ERP almacena un Historial impecable en la nube. Con un solo clic miras las ventas del día, manejas devoluciones, registras abonos de clientes y exportas reportes automáticos.'
  },
  {
    id: 'electronica',
    emoji: '⚖️',
    pregunta: '¿Necesitas Facturación Electrónica? (Opcional)',
    problemaReal: 'Muchos sistemas te obligan a pagar costosos paquetes fiscales de facturación electrónica desde el primer día, incluso si tu negocio aún no está obligado por ley.',
    solucionErp: 'Nuestro ERP incluye facturación normal estándar. Si en el futuro tu empresa crece y necesitas Facturación Electrónica, puedes activar el módulo fiscal con un solo clic como un servicio adicional, sin perder tus datos.'
  }
];
cambiarDolorVentas(id: string): void {
  this.dolorVentasSeleccionado.set(id);
}

// Helper para obtener el problema de ventas activo
get dolorVentasActivo() {
  return this.listaDoloresVentas.find(d => d.id === this.dolorVentasSeleccionado())!;
}
}
