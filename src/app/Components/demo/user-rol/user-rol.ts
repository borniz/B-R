import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-rol',
  imports: [],
  templateUrl: './user-rol.html',
  styleUrl: './user-rol.css',
})
export class UserRol {
   constructor(private ruter:Router){}
  regresarAlCatalogo(){
    this.ruter.navigate(['/servicios']);
  }
}
