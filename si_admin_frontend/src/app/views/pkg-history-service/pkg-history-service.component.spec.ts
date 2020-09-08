import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkgHistoryServiceComponent } from './pkg-history-service.component';

describe('PkgHistoryServiceComponent', () => {
  let component: PkgHistoryServiceComponent;
  let fixture: ComponentFixture<PkgHistoryServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkgHistoryServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkgHistoryServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
