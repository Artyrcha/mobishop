import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileApplicationsComponent } from './mobile-applications.component';

describe('MobileApplicationsComponent', () => {
  let component: MobileApplicationsComponent;
  let fixture: ComponentFixture<MobileApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
