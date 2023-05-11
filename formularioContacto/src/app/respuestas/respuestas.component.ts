import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent {
  @Input() datos: any;

  constructor() {}

  ngOnInit(): void {}
}
