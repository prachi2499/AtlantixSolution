import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceportfolioComponent } from './serviceportfolio.component';

describe('ServiceportfolioComponent', () => {
  let component: ServiceportfolioComponent;
  let fixture: ComponentFixture<ServiceportfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceportfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
