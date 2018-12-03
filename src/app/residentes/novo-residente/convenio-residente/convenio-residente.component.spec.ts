import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvenioResidenteComponent } from './convenio-residente.component';

describe('ConvenioResidenteComponent', () => {
  let component: ConvenioResidenteComponent;
  let fixture: ComponentFixture<ConvenioResidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvenioResidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvenioResidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
