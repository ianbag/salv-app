import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFamiliarResidenteComponent } from './editar-familiar-residente.component';

describe('FamiliarResidenteComponent', () => {
  let component: EditarFamiliarResidenteComponent;
  let fixture: ComponentFixture<EditarFamiliarResidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarFamiliarResidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFamiliarResidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
