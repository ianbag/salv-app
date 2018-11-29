import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosFamiliarComponent } from './infos-familiar.component';

describe('InfosFamiliarComponent', () => {
  let component: InfosFamiliarComponent;
  let fixture: ComponentFixture<InfosFamiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosFamiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
