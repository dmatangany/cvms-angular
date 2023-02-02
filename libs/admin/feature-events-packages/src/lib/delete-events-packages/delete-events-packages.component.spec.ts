import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEventsPackagesComponent } from './delete-events-packages.component';

describe('DeleteEventsPackagesComponent', () => {
  let component: DeleteEventsPackagesComponent;
  let fixture: ComponentFixture<DeleteEventsPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteEventsPackagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEventsPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
