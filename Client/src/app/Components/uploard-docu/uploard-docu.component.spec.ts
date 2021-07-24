import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploardDocuComponent } from './uploard-docu.component';

describe('UploardDocuComponent', () => {
  let component: UploardDocuComponent;
  let fixture: ComponentFixture<UploardDocuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploardDocuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploardDocuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
