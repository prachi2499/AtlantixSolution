import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPkgComponent } from './add-pkg.component';

describe('AddPkgComponent', () => {
  let component: AddPkgComponent;
  let fixture: ComponentFixture<AddPkgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPkgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPkgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
