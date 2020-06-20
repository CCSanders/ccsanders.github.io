import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProjectCardComponent } from './game-project-card.component';

describe('GameProjectCardComponent', () => {
  let component: GameProjectCardComponent;
  let fixture: ComponentFixture<GameProjectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameProjectCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
