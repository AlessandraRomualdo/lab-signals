import { Component } from '@angular/core';
import { Elemento, ElementoService } from '../elemento.service';

@Component({
  selector: 'app-computed-signal',
  templateUrl: './computed-signal.component.html',
  styleUrl: './computed-signal.component.css'
})
export class ComputedSignalComponent {

  elementos: Elemento[];

  constructor(
    public elementoService: ElementoService
  ) {
    this.elementos = this.elementoService.elementos;
  }

  selecionarElemento1(elemento: Elemento) {
    this.elementoService.selecionarElemento1(elemento);
  }

  selecionarElemento2(elemento: Elemento) {
    this.elementoService.selecionarElemento2(elemento);
  }

  elementoCalculado1() {
    return this.elementoService.elementoCalculado1();
  }

  elementoCalculado2() {
    return this.elementoService.elementoCalculado2();
  }

  massaAtomicaTotal() {
    return this.elementoService.massaAtomicaTotal();
  }


}
