import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosFuncionaisComponent } from './infos-funcionais.component';

describe('InfosFuncionaisComponent', () => {
  let component: InfosFuncionaisComponent;
  let fixture: ComponentFixture<InfosFuncionaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosFuncionaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosFuncionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
