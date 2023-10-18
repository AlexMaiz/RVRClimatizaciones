import { Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showMenu: boolean = false;
  showMenu2: boolean = false;
  showMenu3: boolean = false;
  constructor(private el: ElementRef) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  toggleMenu2() {
    this.showMenu2 = !this.showMenu2;
  }
  toggleMenu3() {
    this.showMenu3 = !this.showMenu3;
  }
  closeMenu() {
    this.showMenu = false;
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
}
