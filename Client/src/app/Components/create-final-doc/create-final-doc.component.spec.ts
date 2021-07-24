import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFinalDocComponent } from './create-final-doc.component';

describe('CreateFinalDocComponent', () => {
  let component: CreateFinalDocComponent;
  let fixture: ComponentFixture<CreateFinalDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFinalDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFinalDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
