import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConvenioResidenteComponent } from './editar-convenio-residente.component';

describe('ConvenioResidenteComponent', () => {
  let component: EditarConvenioResidenteComponent;
  let fixture: ComponentFixture<EditarConvenioResidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarConvenioResidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarConvenioResidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
