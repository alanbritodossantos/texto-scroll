import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaScrowComponent } from './caixa-scrow.component';

describe('CaixaScrowComponent', () => {
  let component: CaixaScrowComponent;
  let fixture: ComponentFixture<CaixaScrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixaScrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixaScrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
