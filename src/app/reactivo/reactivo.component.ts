import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    this.formCliente = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      pais : ['', Validators.required]
    });
   }

   public usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: ''
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

  /* formCliente = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    correo: new FormControl(''),
    pais: new FormControl('')
  }); */

  formCliente! : FormGroup;

  ngOnInit(): void {
  }

  guardar() {
    this.usuario.nombre = this.formCliente.get('nombre')?.value;
    this.usuario.apellido = this.formCliente.get('apellido')?.value;
    this.usuario.correo = this.formCliente.get('correo')?.value;
    this.usuario.pais = this.formCliente.get('pais')?.value;
    console.log(this.formCliente);
  }

}
