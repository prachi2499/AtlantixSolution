import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServiceImagesComponent } from './view-service-images.component';

describe('ViewServiceImagesComponent', () => {
  let component: ViewServiceImagesComponent;
  let fixture: ComponentFixture<ViewServiceImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewServiceImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewServiceImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
