import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAcompanhamentoComponent } from './editar-acompanhamento.component';

describe('EditarAcompanhamentoComponent', () => {
  let component: EditarAcompanhamentoComponent;
  let fixture: ComponentFixture<EditarAcompanhamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAcompanhamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAcompanhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
