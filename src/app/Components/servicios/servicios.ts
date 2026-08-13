import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

interface ModuloERP {
  id: string;
  nombre: string;
  descripcion: string;
  seleccionado: boolean;
}
interface DetailModulo {
  id: string;
  detalle: string;
  valorM: number;
  valorIm: number;
  select: boolean;
}

@Component({
  selector: 'app-servicios',
  imports: [RouterModule],
  standalone: true,
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
  clickModule = signal<DetailModulo | null>(null);
  modulos: ModuloERP[] = [
    {
      id: 'inv',
      nombre: 'Productos e Inventarios',
      descripcion: 'Control de productos, existencias, movimientos y bodegas',
      seleccionado: false,
    },
    {
      id: 'venFact',
      nombre: 'Ventas + Facturacion',
      descripcion: 'Emisión de facturas y notas de crédito fiscales.',
      seleccionado: false,
    },
    {
      id: 'post',
      nombre: 'Punto de venta post',
      descripcion: 'Ventas rapidas, cajas y cajeros.',
      seleccionado: false,
    },
    {
      id: 'comProv',
      nombre: 'Compras y Provedores',
      descripcion: 'Compras, recepcion y provedores',
      seleccionado: false,
    },
    {
      id: 'cajTeso',
      nombre: 'Caja y Tesoreria',
      descripcion: 'Dinero, Ingresos, Egresos y cierres',
      seleccionado: false,
    },
    {
      id: 'cartCob',
      nombre: 'Cartera y Cobranza',
      descripcion: 'Creditos, cuentas por cobrar y pagos',
      seleccionado: false,
    },
    {
      id: 'conta',
      nombre: 'Contabilidad',
      descripcion: 'Gestion contable y financiera',
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
  ];
  detail: DetailModulo[] = [
    {
      id: 'inv',
      detalle: `Incluye :
      -Catálogo de productos
-Categorías
-Marcas
-Presentaciones
-Unidades de medida
-Códigos de barras
-Precios
-Costos
-Existencias
-Entradas
-Salidas
-Ajustes
-Kardex
-Inventario físico
-Stock mínimo
-Alertas
-Bodegas
   Ideal para

Tiendas, ferreterías, distribuidores, almacenes, empresas comerciales.   `,
      valorM: 39900,
      valorIm: 180000,
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
      valorM: 49900,
      valorIm: 200000,
      select: false,
    },
    {
      id: 'post',
      detalle: `Este servicio está pensado para negocios que venden directamente al consumidor.
  Incluye: 
POS
Cajas
Cajeros
Apertura
Cierre
Arqueo
Venta rápida
Código de barras
Medios de pago
Impresión
Devoluciones
Descuentos
Reportes por caja`,
      valorM: 39900,
      valorIm: 200000,
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
      valorM: 39900,
      valorIm: 200000,
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
      valorM: 29900,
      valorIm: 150000,
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
      valorM: 39900,
      valorIm: 200000,
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
      valorM: 89900,
      valorIm: 400000,
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
    }
  }

  // Obtener solo los servicios que el cliente eligió
  obtenerServiciosContratados() {
    return this.modulos.filter((m) => m.seleccionado);
  }
}
