import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-caixa-scrow',
  templateUrl: './caixa-scrow.component.html',
  styleUrls: ['./caixa-scrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaixaScrowComponent implements OnInit{
  @ViewChild('scroll', { read: ElementRef })
  public scroll!: ElementRef<any>;

  scrollUp = true;
  scrollDown = true;

  reduzTamanhoAlturaScrollBotaoDescer = 276; //reduz o tamanho do scroll
  reduzTamanhoAlturaScrollBotaoSubir = 20;

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.


  this.scrollUp = false;
}

//botão subir
  public onPreviousSearchPosition(): void {
    this.scrollUp = true;
    this.scrollDown = true;

    if (this.scroll.nativeElement.scrollTop <= this.reduzTamanhoAlturaScrollBotaoSubir) {
      this.scrollUp = false;
      console.log("botão subir desativado");
    }

    this.scroll.nativeElement.scrollTop -= 20;
  }

  //botão descer
  public onNextSearchPosition(): void {
    this.scrollDown = true;
    this.scrollUp = true;

    if (this.scroll.nativeElement.scrollTop >= this.scroll.nativeElement.scrollHeight - this.reduzTamanhoAlturaScrollBotaoDescer) {
      this.scrollDown = false;
      console.log("botão descer desativado");

    }

    this.scroll.nativeElement.scrollTop += 40;
  }

}
