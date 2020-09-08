import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkgHistoryComponent } from './pkg-history.component';

describe('PkgHistoryComponent', () => {
  let component: PkgHistoryComponent;
  let fixture: ComponentFixture<PkgHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkgHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkgHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
