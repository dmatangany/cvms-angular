import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPackagesListUiComponent } from './member-packages-list-ui.component';

describe('MemberPackagesListUiComponent', () => {
  let component: MemberPackagesListUiComponent;
  let fixture: ComponentFixture<MemberPackagesListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberPackagesListUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPackagesListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
