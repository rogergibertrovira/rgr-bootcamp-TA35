import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulario-alta',
  templateUrl: './formulario-alta.component.html',
  styleUrls: ['./formulario-alta.component.css'],
})
export class FormularioAltaComponent {
  title = 'formularioAlta';
  nombre = '';
  cif = '';
  direccion = '';
  grupo = '';

  @Input() datos: any;

  constructor() {}

  ngOnInit(): void {}

  anadirCliente() {
    this.datos.push({nombre: this.nombre, cif: this.cif, direccion: this.direccion, grupo: this.grupo})
  }
}
