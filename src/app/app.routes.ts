import { Routes } from '@angular/router';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';

export const routes: Routes = [
  {
    path: 'lista-contatos',
    component: ListaContatosComponent
  },
  {
    path: 'formulario',
    component: FormularioContatoComponent
  },
  {
    path: '',
    redirectTo: 'lista-contatos',
    pathMatch: 'full'
  }
];
