import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosBeneficiosComponent } from './infos-beneficios.component';

describe('InfosConvenioComponent', () => {
  let component: InfosBeneficiosComponent;
  let fixture: ComponentFixture<InfosBeneficiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosBeneficiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
