import { Component } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { CommonModule } from '@angular/common';
import { SeparadorComponent } from '../../components/separador/separador.component';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [ContainerComponent, CommonModule, SeparadorComponent],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {

}
