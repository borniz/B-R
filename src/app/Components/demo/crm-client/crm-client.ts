import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crm-client',
  imports: [],
  templateUrl: './crm-client.html',
  styleUrl: './crm-client.css',
})
export class CrmClient {
   constructor(private ruter:Router){}
  regresarAlCatalogo(){
    this.ruter.navigate(['/servicios']);
  }
}
