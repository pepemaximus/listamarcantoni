import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  public ALUMNOS: Array <Alumno> = [
    {
      id: 1,
      nombre: 'Carolina',
      apellido: 'Orzabal',
      curso: 'Desarrollo web',
    },
    {
      id: 2,
      nombre: 'Gustavo',
      apellido: 'Ortega',
      curso: 'Javascript',
    },
    {
      id: 3,
      nombre: 'Marcos',
      apellido: 'Pereyra',
      curso: 'Customer experience',
    },
    {
      id: 4,
      nombre: 'Florencia',
      apellido: 'Ferresi',
      curso: 'Docker',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

