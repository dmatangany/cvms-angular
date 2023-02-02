import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoritiesFormComponent } from './authorities-form.component';

describe('AuthoritiesFormComponent', () => {
  let component: AuthoritiesFormComponent;
  let fixture: ComponentFixture<AuthoritiesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthoritiesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthoritiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
