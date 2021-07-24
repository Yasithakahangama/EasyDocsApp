import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClintFillFormComponent } from './clint-fill-form.component';

describe('ClintFillFormComponent', () => {
  let component: ClintFillFormComponent;
  let fixture: ComponentFixture<ClintFillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClintFillFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClintFillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
