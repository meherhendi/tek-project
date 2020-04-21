import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifFormsComponent } from './certif-forms.component';

describe('CertifFormsComponent', () => {
  let component: CertifFormsComponent;
  let fixture: ComponentFixture<CertifFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
