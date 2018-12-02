import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoResidenteComponent } from './novo-residente.component';

describe('NovoResidenteComponent', () => {
  let component: NovoResidenteComponent;
  let fixture: ComponentFixture<NovoResidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoResidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoResidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
