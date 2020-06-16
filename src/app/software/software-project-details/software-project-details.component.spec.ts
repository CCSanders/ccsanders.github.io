import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareProjectDetailsComponent } from './software-project-details.component';

describe('SoftwareProjectDetailsComponent', () => {
  let component: SoftwareProjectDetailsComponent;
  let fixture: ComponentFixture<SoftwareProjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareProjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
