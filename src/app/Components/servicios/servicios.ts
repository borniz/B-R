import { CurrencyPipe } from '@angular/common';
import { Component, computed, Injectable, signal } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';

interface ModuloERP {
  id: string;
  nombre: string;
  descripcion: string;
  seleccionado: boolean;
  valor?: number;
  valorAnual?: number;
  valorIm?: number;
}
interface DetailModulo {
  id: string;
  detalle: string;
  valorM: number;
  valorIm?: number;
  valorAnual?:number,
  select: boolean;
}

@Component({
  selector: 'app-servicios',
  imports: [RouterModule,CurrencyPipe],
  standalone: true,
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
@Injectable({providedIn:'root'})
export class Servicios {
  clickModule = signal<DetailModulo | null>(null);
  valorMen=signal<number>(0);
  valorAnual=signal<number>(0);
  constructor(private router:Router){}
  modulos: ModuloERP[] = [
    {
      id: 'inv',
      nombre: 'Básica',
      descripcion: `Productos e Inventario,
-Clientes,
-Ventas,
-Facturación PDF
-Envío de facturas por correo
-Dashboard básico
-2 usuarios
-1 bodega
-Soporte básico`,
      seleccionado: false,
    },
    {
      id: 'venFact',
      nombre: 'Profesional',
      descripcion: `Todo lo anterior +

Compras y proveedores
Caja y tesorería
Cartera y cobranza
POS
Reportes
5 usuarios
Hasta 3 cajas
Inventario avanzado`,
      seleccionado: false,
    },
    {
      id: 'post',
      nombre: 'Avanzado',
      descripcion: `Todo lo anterior +

Contabilidad
CRM
Multi-sede
Multi-bodega
Usuarios y roles avanzados
Auditoría
Reportes/BI
10 usuarios
API empresarial básica`,
      seleccionado: false,
    },
    {
      id: 'comProv',
      nombre: 'Empresarial',
      descripcion: `Todo lo anterior +

Usuarios ilimitados
Bodegas/sedes según necesidad
API empresarial
Integraciones
Automatizaciones
Soporte prioritario
Personalizaciones
Facturación electrónica como adicional o incluida según negociación`,
      seleccionado: false,
    },
    {
      id: 'cajTeso',
      nombre: 'Página Web Básica',
      descripcion: `Diseño responsive
Vista Inicio
Vista Nosotros
Vista Servicios
Vista Contacto
boton WhatsApp
Google Maps
Formulario de contacto`,
      seleccionado: false,
    },
    {
      id: 'cartCob',
      nombre: 'Página Web Profesional',
      descripcion: `Todo lo anterior
Diseño personalizado
Catálogo de productos
Galería
SEO básico
Redes sociales
Blog
Formularios
Google Analytics
Optimización móvil`,
      seleccionado: false,
    },
    {
      id: 'conta',
      nombre: 'Tienda Online',
      descripcion: `Catálogo
Carrito
Clientes
Pedidos
Integración de pagos
WhatsApp
Administración de productos
Responsive
Dominio
Hosting
SSL`,
      seleccionado: false,
    },
    {
      id: 'nomim',
      nombre: 'Nomina',
      descripcion: 'Gestion de empleados y nomina',
      seleccionado: false,
    },
    {
      id: 'crmClient',
      nombre: 'CRM y Clientes',
      descripcion: 'Seguimiento y relacion con clientes',
      seleccionado: false,
    },
    {
      id: 'report',
      nombre: 'Reportes y BI',
      descripcion: 'Indicadores y analisis empresarial',
      seleccionado: false,
    },
    {
      id: 'MultSed',
      nombre: 'Multi-Sede y Multi-Bodega',
      descripcion: 'Operacion de varias sedes',
      seleccionado: false,
    },
    {
      id: 'userRol',
      nombre: 'Usuarios, Roles y Auditorias',
      descripcion: 'Control de acceso y trazabilidad',
      seleccionado: false,
    },
    {
      id: 'integ',
      nombre: 'Integraciones',
      descripcion: 'Conectar Sistemas Externos',
      seleccionado: false,
    },
    {
      id: 'apiEmpr',
      nombre: 'API Empresarial',
      descripcion: 'Integracion con aplicaciones Externas',
      seleccionado: false,
    },
    {
      id:'pageweb',
      nombre:'Pagina Web',
      descripcion:'Creacion de la pagina web',
      seleccionado:false
    }
  ];
  detail: DetailModulo[] = [
    {
      id: 'inv',
      detalle: `Incluye :
      -Catálogo de productos
      -Productos e Inventario
      -Clientes
      -Ventas
      -Facturación PDF
      -Envío de facturas por correo
      -Dashboard básico
-2 usuarios
-1 bodega
-Soporte básico
   Ideal para

Tiendas, ferreterías, distribuidores, almacenes, empresas comerciales.   `,
      valorM: 49900,
      valorAnual: 499000,
      select: false,
    },
    {
      id: 'venFact',
      detalle: `
  Incluye:
  -Ventas
-Cotizaciones
-Pedidos
-Clientes
-Listas de precios
-Descuentos
-Devoluciones
-Facturación electrónica
-Notas crédito
-Notas débito
-PDF
-XML
-Envío al cliente
-Historial
-Reportes
  `,
      valorM: 89900,
      valorAnual: 899000,
      select: false,
    },
    {
      id: 'post',
      detalle: `Todo lo anterior
Diseño personalizado
Catálogo de productos
Galería
SEO básico
Redes sociales
Blog
Formularios
Google Analytics
Optimización móvil`,
      valorM: 149900,
      valorAnual: 1499000,
      select: false,
    },
    {
      id: 'comProv',
      detalle: `
      -Incluye
-Proveedores
-Cotizaciones
-Órdenes de compra
-Recepción
-Facturas de proveedor
-Devoluciones
-Costos
-Historial
-Cuentas por pagar básicas`,
      valorM: 249900,
      valorAnual: 2499000,
      select: false,
    },
    {
      id: 'cajTeso',
      detalle: `
      Incluye:
-Cajas
-Bancos
-Ingresos
-Egresos
-Gastos
-Retiros
-Transferencias
-Arqueos
-Cierres
-Conciliación básica
-Flujo de efectivo`,
      valorM: 39900,
      valorAnual: 399000,
      valorIm: 799000,
      select: false,
    },
    {
      id: 'cartCob',
      detalle: `
      Incluye:
-Crédito
-Cupos
-Condiciones de pago
-Cuentas por cobrar
-Abonos
-Saldos
-Vencimientos
-Estado de cuenta
-Historial
-Gestión de mora`,
      valorM: 59900,
      valorAnual: 599000,
      valorIm: 1499000,
      select: false,
    },
    {
      id: 'conta',
      detalle: `
      Incluye :
-Plan de cuentas
-Terceros
-Comprobantes
-Movimientos
-Cuentas por cobrar
-Cuentas por pagar
-Impuestos
-Cierres
-Libros
-Estados financieros
-Reportes contables`,
      valorM: 79900,
      valorAnual: 799000,
      valorIm: 2499000,
      select: false,
    },
    {
      id: 'nomim',
      detalle: `
      Incluye :
-Empleados
-Contratos
-Conceptos
-Novedades
-Liquidación
-Prestaciones
-Seguridad social
-Nómina electrónica
-Reportes`,
      valorM: 59900,
      valorIm: 300000,
      select: false,
    },
    {
      id: 'crmClient',
      detalle: `
      Incluye :
-Clientes
-Contactos
-Segmentación
-Historial
-Actividades
-Seguimientos
-Oportunidades
-Tareas
-Comunicaciones`,
      valorM: 39900,
      valorIm: 200000,
      select: false,
    },
    {
      id: 'report',
      detalle: `
      Incluye :
-Dashboard
-Ventas
-Compras
-Inventario
-Cartera
-Utilidad
-Flujo de caja
-Indicadores
-Comparativos
-Exportación
-Reportes personalizados`,
      valorM: 49900,
      valorIm: 250000,
      select: false,
    },
    {
      id: 'MultSed',
      detalle: `
      Incluye:
-Sedes
-Bodegas
-Cajas
-Usuarios por sede
-Inventario por sede
-Ventas por sede
-Compras por sede
-Transferencias
-Reportes consolidados`,
      valorM: 79900,
      valorIm: 400000,
      select: false,
    },
    {
      id: 'userRol',
      detalle: `
      Incluye:
-Usuarios
-Roles
-Permisos
-Restricciones
-Auditoría
-Historial
-Registro de operaciones
-Seguridad`,
      valorM: 29900,
      valorIm: 150000,
      select: false,
    },
    {
      id: 'integ',
      detalle: ``,
      valorM: 49900,
      valorIm: 300000,
      select: false,
    },
    {
      id: 'apiEmpr',
      detalle: ``,
      valorM: 99900,
      valorIm: 500000,
      select: false,
    },
    
  ];

  selectionModule(id: string): void {
    if (this.clickModule()?.id === id) {
      this.clickModule.set(null);
    } else {
      this.router.navigate([`/${id}`],{state:{stateervicio:id}})
      const infoExtendida = this.detail.find((d) => d.id === id);
      if (infoExtendida) {
        this.clickModule.set(infoExtendida);
      }
    }
  } // Alternar la selección de un módulo
  
toggleModulo(id: string): void {
    const modulo = this.modulos.find((m) => m.id === id);
    if (modulo) {
      modulo.seleccionado = !modulo.seleccionado;
      
      // Buscamos los costos correspondientes en el catálogo de detalles
      const valorMod = this.detail.find((d) => d.id === id);
      
      // Asignamos los precios dinámicamente al módulo básico
      modulo.valor = valorMod?.valorM || 0;
      modulo.valorIm = valorMod?.valorIm || 0;
      modulo.valorAnual = valorMod?.valorAnual || 0;
    }
  }
   valorMensualTotal = (() => {
    return this.modulos
      .filter((m) => m.seleccionado)
      .reduce((total, m) => total + (m.valor || 0), 0);
  });
  
  valorImplementacion =(()=>{
    return this.modulos
      .filter((m)=>m.seleccionado)
      .reduce((total,m)=>total +(m.valorIm ||0),0)
  })
  ValorAnual =(()=>{
    const total = this.modulos
    .filter(m => m.seleccionado)
    .reduce((suma, m) => suma + (m.valorAnual || 0), 0);
  
  return total;
  })
  obtenerServiciosContratados() {
    return this.modulos.filter((m) => m.seleccionado);
  }
}
