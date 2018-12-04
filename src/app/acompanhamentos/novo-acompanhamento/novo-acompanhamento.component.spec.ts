import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoAcompanhamentoComponent } from './novo-acompanhamento.component';

describe('NovoAcompanhamentoComponent', () => {
  let component: NovoAcompanhamentoComponent;
  let fixture: ComponentFixture<NovoAcompanhamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoAcompanhamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoAcompanhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
