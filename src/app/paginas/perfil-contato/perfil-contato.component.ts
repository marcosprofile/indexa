import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../components/container/container.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Contato } from '../../components/contato/contato';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    RouterLink
  ],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent implements OnInit {

  contato: Contato = {
    id: 0,
    nome: "",
    telefone: "",
    email: "",
    aniversario: "",
    redes: ""
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    if(id) {
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contato) => {
        this.contato = contato;
      })
    }
  }

}