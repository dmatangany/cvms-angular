import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemberTypesComponent } from './list-member-types.component';

describe('ListMemberTypesComponent', () => {
  let component: ListMemberTypesComponent;
  let fixture: ComponentFixture<ListMemberTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMemberTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMemberTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
