import { Component } from '@angular/core';
import { Elemento, ElementoService } from '../elemento.service';


@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.css'
})
export class EffectsComponent {

  constructor(
    public elementoService: ElementoService
  ) {
    
  }

  selecionarElemento(elemento: Elemento) {
    this.elementoService.selecionarElemento(elemento);
  }

  ajustarTemperatura(novaTemperatura: number) {
    this.elementoService.ajustarTemperatura(novaTemperatura);
  }
}
