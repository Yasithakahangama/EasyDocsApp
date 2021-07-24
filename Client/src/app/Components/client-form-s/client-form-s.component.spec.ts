import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormSComponent } from './client-form-s.component';

describe('ClientFormSComponent', () => {
  let component: ClientFormSComponent;
  let fixture: ComponentFixture<ClientFormSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFormSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
