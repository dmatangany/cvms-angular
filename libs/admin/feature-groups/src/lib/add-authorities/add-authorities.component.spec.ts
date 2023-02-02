import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuthoritiesComponent } from './add-authorities.component';

describe('AddAuthoritiesComponent', () => {
  let component: AddAuthoritiesComponent;
  let fixture: ComponentFixture<AddAuthoritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAuthoritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuthoritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
