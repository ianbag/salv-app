import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosConvenioComponent } from './infos-convenio.component';

describe('InfosConvenioComponent', () => {
  let component: InfosConvenioComponent;
  let fixture: ComponentFixture<InfosConvenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosConvenioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
