import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit{
  @Input() datos: any;
  nombre = '';
  email = '';
  mensaje = '';
  operacion = '';
  operacionResultado = '5';

  constructor() {}

  ngOnInit(): void {}

  enviarFormulario() {
    if (this.operacion == this.operacionResultado) {
      this.datos.nombre = this.nombre;
      this.datos.email = this.email;
      this.datos.mensaje = this.mensaje;
      this.datos.enviado = true;
    }
  }
}
