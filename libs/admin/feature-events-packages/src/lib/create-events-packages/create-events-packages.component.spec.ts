import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventsPackagesComponent } from './create-events-packages.component';

describe('CreateEventsPackagesComponent', () => {
  let component: CreateEventsPackagesComponent;
  let fixture: ComponentFixture<CreateEventsPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEventsPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventsPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
