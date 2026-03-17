import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-maioridade',
  imports: [FormsModule, CommonModule],
  templateUrl: './maioridade.html',
  styleUrl: './maioridade.css',
})
export class Maioridade {
  //Variaveis
  idade: number = 0;
  resultado: String = '';

  MaiorMenor() {

    if (this.idade >= 18) {
      this.resultado = "Você é maior de idade!"
    } else if (this.idade <= 17 && this.idade >= 0) {
      this.resultado = "Você é menor de idade!"
    } else {
      this.resultado = "Erro valor inválido!"
    }
  }
}
