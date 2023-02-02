import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEventsPackagesComponent } from './update-events-packages.component';

describe('UpdateEventsPackagesComponent', () => {
  let component: UpdateEventsPackagesComponent;
  let fixture: ComponentFixture<UpdateEventsPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEventsPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEventsPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
