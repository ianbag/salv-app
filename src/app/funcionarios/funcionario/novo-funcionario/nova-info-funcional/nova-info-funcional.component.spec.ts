import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaInfoFuncionalComponent } from './nova-info-funcional.component';

describe('NovaInfoFuncionalComponent', () => {
  let component: NovaInfoFuncionalComponent;
  let fixture: ComponentFixture<NovaInfoFuncionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaInfoFuncionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaInfoFuncionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
