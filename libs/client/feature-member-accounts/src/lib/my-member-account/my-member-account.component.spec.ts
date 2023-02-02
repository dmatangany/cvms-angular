import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMemberAccountComponent } from './my-member-account.component';

describe('MyMemberAccountComponent', () => {
  let component: MyMemberAccountComponent;
  let fixture: ComponentFixture<MyMemberAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyMemberAccountComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyMemberAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
