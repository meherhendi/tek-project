import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifDetailsComponent } from './certif-details.component';

describe('CertifDetailsComponent', () => {
  let component: CertifDetailsComponent;
  let fixture: ComponentFixture<CertifDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
