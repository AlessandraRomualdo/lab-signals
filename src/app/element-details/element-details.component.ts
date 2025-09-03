import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ElementoService } from '../elemento.service';

@Component({
  selector: 'app-element-details',
  templateUrl: './element-details.component.html',
  styleUrl: './element-details.component.css',
  // `ChangeDetectionStrategy.OnPush` é uma estratégia de otimização de performance.
  //
  // 1. **Modo Tradicional (sem Signals):** O Angular só verifica e atualiza este componente
  //    se uma de suas propriedades @Input() mudar, se um evento (como um clique) for disparado
  //    dentro dele, ou se for marcado manualmente para verificação.
  //
  // 2. **Com Signals:** A mágica acontece aqui! Quando o template deste componente lê um
  //    sinal (por exemplo, `elementoService.elementoSelecionado()`), o Angular cria uma
  //    ligação direta entre o sinal e o componente.
  //
  //    Quando o valor desse sinal muda em qualquer parte da aplicação, o Angular sabe
  //    exatamente que *este* componente precisa ser atualizado. Ele agenda a detecção
  //    de mudanças de forma automática e precisa, tornando o `OnPush` ainda mais eficiente
  //    e fácil de usar.
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementDetailsComponent {

  constructor(
    // O serviço que contém os sinais que este componente irá consumir no template.
    public elementoService: ElementoService
  ){}

}
