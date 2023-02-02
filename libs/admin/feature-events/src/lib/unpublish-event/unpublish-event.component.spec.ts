import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnpublishEventComponent } from './unpublish-event.component';

describe('UnpublishEventComponent', () => {
  let component: UnpublishEventComponent;
  let fixture: ComponentFixture<UnpublishEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnpublishEventComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UnpublishEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
