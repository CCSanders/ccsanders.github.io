import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDevelopmentComponent } from './game-development.component';

describe('GameDevelopmentComponent', () => {
  let component: GameDevelopmentComponent;
  let fixture: ComponentFixture<GameDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
