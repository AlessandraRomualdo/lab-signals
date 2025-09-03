import { Component, signal, computed } from '@angular/core';

interface Elemento {
  nome: string;
  simbolo: string;
  numeroMassa: number;
}

@Component({
  selector: 'app-signals-intro',
  templateUrl: './signals-intro.component.html',
  styleUrls: ['./signals-intro.component.css']
})
export class SignalsIntroComponent {

  elementoSelecionado = signal<Elemento | null>(null);

  elementos: Elemento[] = [
    { nome: 'Hidrogênio', simbolo: 'H', numeroMassa: 1 },
    { nome: 'Carbono', simbolo: 'C', numeroMassa: 12 },
    { nome: 'Nitrogênio', simbolo: 'N', numeroMassa: 14 },
    { nome: 'Oxigênio', simbolo: 'O', numeroMassa: 16 },
    { nome: 'Sódio', simbolo: 'Na', numeroMassa: 23 },
    { nome: 'Cloro', simbolo: 'Cl', numeroMassa: 35 }
  ];

  selecionarElemento(elemento: Elemento) {
    this.elementoSelecionado.set(elemento);
  }
  
  elementoInfo = computed(() => {
    const elemento = this.elementoSelecionado();
    return elemento ? `Nome: ${elemento.nome}, Símbolo: ${elemento.simbolo}, Número de Massa: ${elemento.numeroMassa}` : `Nenhum elemento selecionado.}`
  })
}
