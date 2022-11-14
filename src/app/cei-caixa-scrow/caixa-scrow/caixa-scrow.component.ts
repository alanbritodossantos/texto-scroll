import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-caixa-scrow',
  templateUrl: './caixa-scrow.component.html',
  styleUrls: ['./caixa-scrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CaixaScrowComponent implements OnInit {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);


  constructor() { }

  ngOnInit(): void {
  }

}
