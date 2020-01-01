import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEssentialsComponent } from './profile-essentials.component';

describe('ProfileEssentialsComponent', () => {
  let component: ProfileEssentialsComponent;
  let fixture: ComponentFixture<ProfileEssentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEssentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEssentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
