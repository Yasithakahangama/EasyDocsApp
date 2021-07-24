import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemGenerateComponent } from './tem-generate.component';

describe('TemGenerateComponent', () => {
  let component: TemGenerateComponent;
  let fixture: ComponentFixture<TemGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemGenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
