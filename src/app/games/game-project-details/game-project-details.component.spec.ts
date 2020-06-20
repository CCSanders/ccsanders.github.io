import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProjectDetailsComponent } from './game-project-details.component';

describe('GameProjectDetailsComponent', () => {
  let component: GameProjectDetailsComponent;
  let fixture: ComponentFixture<GameProjectDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameProjectDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
