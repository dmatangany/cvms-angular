import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditsListUiComponent } from './audits-list-ui.component';

describe('AuditsListUiComponent', () => {
  let component: AuditsListUiComponent;
  let fixture: ComponentFixture<AuditsListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuditsListUiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditsListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
