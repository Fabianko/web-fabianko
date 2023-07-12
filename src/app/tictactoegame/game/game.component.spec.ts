import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTicTacToeComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameTicTacToeComponent;
  let fixture: ComponentFixture<GameTicTacToeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTicTacToeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTicTacToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Test for win moviment', ()=> {
    let component: GameTicTacToeComponent = new GameTicTacToeComponent();
    //derecha
    it(
      'case 1 vertical', ()=> {
        expect(component.validWin(
          {board:[[1,1,1],[0,0,0],[0,0,0]], nowPlayer:1}
        ))
        .toEqual(true);
      }
    );
    it(
      'case 2 vertical contrario', ()=> {
        expect(component.validWin(
          {board:[[2,2,2],[0,0,0],[0,0,0]], nowPlayer:1}
        ))
        .toEqual(false);
      }
    );
    it(
      'case 3 vertical win', ()=> {
        expect(component.validWin(
          {board:[[2,1,2],[0,1,0],[0,1,0]], nowPlayer:1}
        ))
        .toEqual(true);
      }
    );
    it(
      'case 4 diagonal win', ()=> {
        expect(component.validWin(
          {board:[[1,1,2],[0,1,0],[0,2,1]], nowPlayer:1}
        ))
        .toEqual(true);
      }
    );
    it(
      'case 5', ()=> {
        expect(component.validWin(
          {board:[[1,1,2],[0,1,0],[0,2,1]], nowPlayer:1}
        ))
        .toEqual(true);
      }
    );
    it(
      'case 6 end game', ()=> {
        expect(component.validEndGame(
          [[1,1,2],[2,1,1],[1,2,2]]
        ))
        .toEqual(true);
      }
    );


});

});