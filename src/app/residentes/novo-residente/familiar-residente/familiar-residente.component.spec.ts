import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliarResidenteComponent } from './familiar-residente.component';

describe('FamiliarResidenteComponent', () => {
  let component: FamiliarResidenteComponent;
  let fixture: ComponentFixture<FamiliarResidenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamiliarResidenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliarResidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
