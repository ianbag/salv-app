import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaDeVidaComponent } from './prova-de-vida.component';

describe('ProvaDeVidaComponent', () => {
  let component: ProvaDeVidaComponent;
  let fixture: ComponentFixture<ProvaDeVidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvaDeVidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvaDeVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
