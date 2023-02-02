import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAttributesComponent } from './list-attributes.component';

describe('ListAttributesComponent', () => {
  let component: ListAttributesComponent;
  let fixture: ComponentFixture<ListAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
