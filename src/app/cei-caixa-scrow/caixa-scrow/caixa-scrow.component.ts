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
export class CaixaScrowComponent {
  @ViewChild('scroll', { read: ElementRef })
  public scroll!: ElementRef<any>;

  scrollUp = true;
  scrollDown = true;

  public onPreviousSearchPosition(): void {
    this.scrollUp = true;
    this.scrollDown = true;

    if (this.scroll.nativeElement.scrollTop <= 20) {
      this.scrollUp = false;
    }

    this.scroll.nativeElement.scrollTop -= 20;
  }

  public onNextSearchPosition(): void {
    this.scrollDown = true;
    this.scrollUp = true;

    if (
      this.scroll.nativeElement.scrollTop >=
      this.scroll.nativeElement.offsetHeight - 20
    ) {
      this.scrollDown = false;
    }

    this.scroll.nativeElement.scrollTop += 20;
  }

}
