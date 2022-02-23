import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  public usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: '',
    sexo: 'Hombre',
    password: '',
    archivo : null
  };

  public paises : any[] = [
    {
      codigo: 'CRI',
      nombre: 'Costa Rica'
    },
    {
      codigo: 'ESP',
      nombre: 'España'
    },
    {
      codigo: 'USA',
      nombre: 'Estados Unidos'
    },
    {
      codigo: 'MEX',
      nombre: 'México'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public guardar(formulario : NgForm) {
    this.usuario.nombre = formulario.value.nombre;
    this.usuario.apellido = formulario.value.apellido;
    this.usuario.correo = formulario.value.correo;
    this.usuario.pais = formulario.value.pais;
    console.log(this.usuario);
    console.log(formulario);
  }

  seleccionarArchivo(event : any) {
    this.usuario.archivo = event.target.files[0];
  }

}
