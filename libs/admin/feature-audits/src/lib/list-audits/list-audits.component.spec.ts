import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAuditsComponent } from './list-audits.component';

describe('ListAuditsComponent', () => {
  let component: ListAuditsComponent;
  let fixture: ComponentFixture<ListAuditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListAuditsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAuditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
