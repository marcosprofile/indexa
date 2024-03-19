import { Injectable } from '@angular/core';

interface Contato {
  id: number
  nome: string
  telefone: string
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: Contato[] = [
    {"id": 1, "nome": "Ana", "telefone": "29 278869420"},
    {"id": 2, "nome": "Antônio", "telefone": "38 128451235"},
    {"id": 3, "nome": "Ágata", "telefone": "38 128451235"},
    {"id": 4, "nome": "Bruno", "telefone": "95 695521583"},
    {"id": 5, "nome": "Beatriz", "telefone": "25 854986459"},
    {"id": 6, "nome": "Carlos", "telefone": "94 543197849"}
  ]

  constructor() {
    //Obter contatos do localStorage
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null;

    if (contatosLocalStorage) {
      this.contatos = contatosLocalStorage;
    } else {
      //Salvar contatos no localStorage
      localStorage.setItem('contatos', JSON.stringify(this.contatos));
    }
  }

  obterContatos() {
    return this.contatos;
  }


}
