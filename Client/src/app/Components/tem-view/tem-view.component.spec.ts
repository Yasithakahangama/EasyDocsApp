import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemViewComponent } from './tem-view.component';

describe('TemViewComponent', () => {
  let component: TemViewComponent;
  let fixture: ComponentFixture<TemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
