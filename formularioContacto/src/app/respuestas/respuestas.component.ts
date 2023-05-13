import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css'],
})
export class RespuestasComponent implements OnInit {
  @Input() datos: any;
  visible: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
