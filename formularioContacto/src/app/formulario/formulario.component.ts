import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Input() datos: any;
  nombre = '';
  email = '';
  mensaje = '';
  operacion = '';
  operacionResultado = '5';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  enviarFormulario() {
    if (this.operacion == this.operacionResultado) {
      this.router.navigate(['/respuesta']);
      // this.datos.push({
      //   nombre: this.nombre,
      //   email: this.email,
      //   mensaje: this.mensaje,
      // });
    }
  }
}
