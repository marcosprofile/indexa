import { Injectable } from '@angular/core';
import { Contato } from './../components/contato/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420", "email": "email@teste.com"},
    {"id": 2, "nome": "Antônio", "telefone": "38 128451235", "email": "email@teste.com"},
    {"id": 3, "nome": "Ágata", "telefone": "38 128451235", "email": "email@teste.com"},
    {"id": 4, "nome": "Bruno", "telefone": "95 695521583", "email": "email@teste.com"},
    {"id": 5, "nome": "Beatriz", "telefone": "25 854986459", "email": "email@teste.com"},
    {"id": 6, "nome": "Carlos", "telefone": "94 543197849", "email": "email@teste.com"}
  ]

  constructor() {
    //Obter contatos do localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;

    if (contatosLocalStorage) {
      this.contatos = contatosLocalStorage;
    }

    //Salvar contatos no localStorage
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos() {
    return this.contatos;
  }

  salvarContato(contato: Contato) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

}
