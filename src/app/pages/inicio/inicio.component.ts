import { Component } from '@angular/core';

import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

interface portafolio {
  titulo: string;
  descripcion: string;
  caracteristicas: string[];
}

@Component({
  selector: 'app-inicio',

  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
  imports: [Dialog, ButtonModule],
})
export class InicioComponent {
  selectedProject: portafolio | null = null;
  neryfil: portafolio = {
    titulo: 'Plataforma web para editorial',
    descripcion:
      'Sitio web completo para una editorial, compuesto por una landing page atractiva y una intranet privada (dashboard) exclusiva para clientes activos.',
    caracteristicas: [
      'Gestión de libros por categorías con descarga de recursos en PDF y Word.',
      'Blog dinámico y secciones de capacitación.',
      'Agenda interna y control de eventos.',
      'Sistema de registro y login con validación previa por parte del administrador.',
      'Control de accesos exclusivo para usuarios autorizados.',
      'Tecnologías: Angular, Firebase, Tailwind, PrimeNG.',
    ],
  };

  visible: boolean = false;

  showDialog(proyecto: portafolio) {
    this.selectedProject = proyecto;
    this.visible = true;
  }

  closeDialog(): void {
    this.visible = false;
    this.selectedProject = null;
  }
}
