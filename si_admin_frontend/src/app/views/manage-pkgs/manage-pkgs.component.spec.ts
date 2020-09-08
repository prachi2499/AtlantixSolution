import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePkgsComponent } from './manage-pkgs.component';

describe('ManagePkgsComponent', () => {
  let component: ManagePkgsComponent;
  let fixture: ComponentFixture<ManagePkgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePkgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePkgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
