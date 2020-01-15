import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLevelCategoriesComponent } from './second-level-categories.component';

describe('SecondLevelCategoriesComponent', () => {
  let component: SecondLevelCategoriesComponent;
  let fixture: ComponentFixture<SecondLevelCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondLevelCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondLevelCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
