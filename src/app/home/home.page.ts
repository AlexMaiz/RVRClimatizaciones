import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showMenu: boolean = false;
  showMenu2: boolean = false;
  showMenu3: boolean = false;
  formulario!: FormGroup;
  constructor(private el: ElementRef,
              private formBuilder: FormBuilder) {
                this.formulario = this.formBuilder.group({
                  nombreApellido: '',
                  email: '',
                  telefono: '',
                  asunto: '',
                  mensaje: ''
                });
              }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  toggleMenu2() {
    this.showMenu2 = !this.showMenu2;
  }
  toggleMenu3() {
    this.showMenu3 = !this.showMenu3;
  }

  closeMenu2() {
    this.showMenu2 = false;
  }
  closeMenu3() {
    this.showMenu3 = false;
  }
  opcionSeleccionada(opcion: string) {
    // Implementa la lógica para manejar la opción seleccionada
    console.log('Opción seleccionada:', opcion);
  }
  opcionSeleccionada2(opcion: string) {
    // Implementa la lógica para manejar la opción seleccionada
    console.log('Opción seleccionada:', opcion);
  }
  opcionSeleccionada3(opcion: string) {
    // Implementa la lógica para manejar la opción seleccionada
    console.log('Opción seleccionada:', opcion);
  }

  scrollToSection(sectionClass: string) {
    const section = this.el.nativeElement.querySelector('.' + sectionClass);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  enviarFormulario() {
    // Obtén los valores de los campos del formulario
    const valoresFormulario = this.formulario.value;

    // Imprime los valores en la consola
    console.log('Nombre y Apellido:', valoresFormulario.nombreApellido);
    console.log('Email:', valoresFormulario.email);
    console.log('Teléfono:', valoresFormulario.telefono);
    console.log('Asunto:', valoresFormulario.asunto);
    console.log('Mensaje:', valoresFormulario.mensaje);
  }
}
