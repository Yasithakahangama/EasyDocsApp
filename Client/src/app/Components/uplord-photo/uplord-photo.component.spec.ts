import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplordPhotoComponent } from './uplord-photo.component';

describe('UplordPhotoComponent', () => {
  let component: UplordPhotoComponent;
  let fixture: ComponentFixture<UplordPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UplordPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UplordPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
