import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Maioridade } from './maioridade/maioridade';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Maioridade],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MaiorOuMenorDeIdade');
}
