import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareProjectCardComponent } from './software-project-card.component';

describe('SoftwareProjectCardComponent', () => {
  let component: SoftwareProjectCardComponent;
  let fixture: ComponentFixture<SoftwareProjectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareProjectCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
