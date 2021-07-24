import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClintViewCategoryComponent } from './clint-view-category.component';

describe('ClintViewCategoryComponent', () => {
  let component: ClintViewCategoryComponent;
  let fixture: ComponentFixture<ClintViewCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClintViewCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClintViewCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
