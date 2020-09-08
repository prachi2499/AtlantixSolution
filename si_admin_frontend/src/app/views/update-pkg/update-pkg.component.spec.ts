import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePkgComponent } from './update-pkg.component';

describe('UpdatePkgComponent', () => {
  let component: UpdatePkgComponent;
  let fixture: ComponentFixture<UpdatePkgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePkgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePkgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
