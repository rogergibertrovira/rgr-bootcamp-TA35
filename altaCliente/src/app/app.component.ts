import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'altaCliente';
  clientes = [
    {
      nombre: 'Señor X',
      cif: '43005',
      direccion: 'Calle Falsa 123',
      grupo: 'Grupo 1',
    },
    {
      nombre: 'Señora Y',
      cif: '43001',
      direccion: 'Avenida Real 98',
      grupo: 'Grupo 2',
    },
  ];
}
