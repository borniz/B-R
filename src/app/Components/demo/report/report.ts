import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  imports: [],
  templateUrl: './report.html',
  styleUrl: './report.css',
})
export class Report {
   constructor(private ruter:Router){}
  regresarAlCatalogo(){
    this.ruter.navigate(['/servicios']);
  }
}
