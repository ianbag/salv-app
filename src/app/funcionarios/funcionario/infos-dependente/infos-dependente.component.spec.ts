import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosDependenteComponent } from './infos-dependente.component';

describe('InfosDependenteComponent', () => {
  let component: InfosDependenteComponent;
  let fixture: ComponentFixture<InfosDependenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosDependenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosDependenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
