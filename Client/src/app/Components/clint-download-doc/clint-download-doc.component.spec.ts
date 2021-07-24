import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClintDownloadDocComponent } from './clint-download-doc.component';

describe('ClintDownloadDocComponent', () => {
  let component: ClintDownloadDocComponent;
  let fixture: ComponentFixture<ClintDownloadDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClintDownloadDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClintDownloadDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
