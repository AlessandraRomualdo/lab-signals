import { Component, effect, signal } from '@angular/core';

interface Elemento {
  nome: string;
  simbolo: string;
  numeroMassa: number;
  pontoFusao: number;
  pontoEbulicao: number;
}

@Component({
  selector: 'app-effects',
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.css'
})
export class EffectsComponent {

  elementoSelecionado = signal<Elemento | null>(null);
  temperatura = signal<number>(25);
  estadoFisico = signal<string>('');
  

  elementos: Elemento[] = [
    { nome: 'Hidrogênio', simbolo: 'H', numeroMassa: 1, pontoFusao: -259, pontoEbulicao: -253 },
    { nome: 'Carbono', simbolo: 'C', numeroMassa: 12, pontoFusao: 3550, pontoEbulicao: 4027 },
    { nome: 'Nitrogênio', simbolo: 'N', numeroMassa: 14, pontoFusao: -210, pontoEbulicao: -196 },
    { nome: 'Oxigênio', simbolo: 'O', numeroMassa: 16, pontoFusao: -218, pontoEbulicao: -183 },
    { nome: 'Sódio', simbolo: 'Na', numeroMassa: 23, pontoFusao: 98, pontoEbulicao: 883 },
    { nome: 'Cloro', simbolo: 'Cl', numeroMassa: 35, pontoFusao: -101, pontoEbulicao: -34 }
  ];

  constructor() {
    // A função `effect` é executada sempre que um dos sinais que ela lê (`elementoSelecionado` ou `temperatura`) muda.
    // É ideal para executar efeitos colaterais, como atualizar o estado de um sinal com base em outros.
    effect(() => {
      const elemento = this.elementoSelecionado();
      const temp = this.temperatura();

      // Só executa a lógica se um elemento estiver selecionado.
      if (elemento) {
        let estadoFisico = ''; 
        if (temp < elemento.pontoFusao) {
          estadoFisico = 'Sólido';
        } else if (temp >= elemento.pontoFusao && temp < elemento.pontoEbulicao) {
          estadoFisico = 'Líquido';
        } else {
          estadoFisico = 'Gasoso';
        }
        // Atualiza o sinal `estadoFisico`. Essa escrita só é permitida por causa da opção `allowSignalWrites`.
        this.estadoFisico.set(estadoFisico);
      }
    },
      // Por padrão, não é permitido escrever em sinais dentro de um `effect` para evitar loops infinitos.
      // `allowSignalWrites: true` autoriza explicitamente a escrita, pois sabemos que é um efeito colateral seguro e intencional.
      { allowSignalWrites: true }
    )
  }

  selecionarElemento(elemento: Elemento) {
    this.elementoSelecionado.set(elemento);
  }

  ajustarTemperatura(novaTemperatura: number) {
    this.temperatura.set(novaTemperatura);
  }
}
