import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game2048Component } from './game2048.component';

describe('Game2048Component', () => {
  let component: Game2048Component;
  let fixture: ComponentFixture<Game2048Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game2048Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game2048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Test for game component init',()=> {
  let component: Game2048Component = new Game2048Component();
  it(
    'validar creacion matriz', ()=> {
      expect(component.createArray(2)).toEqual([[0,0],[0,0]]);
    }
  );
  it(
    'validar creacion matriz con negativos', ()=> {
      expect(component.createArray(-1)).toEqual([]);
    }
  );
}
);

describe('Test for movements game', ()=> {
  let component: Game2048Component = new Game2048Component();
  //derecha
  it(
    'derecha simple 1', ()=> {
      expect(component.moveRight([[2,0],[0,0]]))
      .toEqual([[0,2],[0,0]]);
    }
  );
  it(
    'derecha simple 2', ()=> {
      expect(component.moveRight([[2,2],[0,0]]))
      .toEqual([[0,4],[0,0]]);
    }
  );
  it(
    'derecha simple 3', ()=> {
      expect(component.moveRight([[2,2],[2,2]]))
      .toEqual([[0,4],[0,4]]);
    }
  );
  it(
    'derecha simple 4', ()=> {
      expect(component.moveRight([[2,4],[2,4]]))
      .toEqual([[2,4],[2,4]]);
    }
  );
  it(
    'trivial derecha ceros', ()=> {
      expect(component.moveRightRow([0,0,0,0,0]))
      .toEqual([0,0,0,0,0]);
    }
  );
  it(
    'derecha fila simple 1', ()=> {
      expect(component.moveRightRow([0,2,4,0,4]))
      .toEqual([0,0,0,2,8]);
    }
  );
  it(
    'derecha fila simple 2', ()=> {
      expect(component.moveRightRow([0,2,2,4,4]))
      .toEqual([0,0,0,4,8]);
    }
  );
  it(
    'derecha fila simple 3', ()=> {
      expect(component.moveRightRow([0,4,4,4,4]))
      .toEqual([0,0,0,8,8]);
    }
  );
  it(
    'derecha fila simple 4', ()=> {
      expect(component.moveRightRow([0,0,4,4,4]))
      .toEqual([0,0,0,4,8]);
    }
  );
  it(
    'derecha fila simple 5', ()=> {
      expect(component.moveRightRow([0,0,4,4,8]))
      .toEqual([0,0,0,8,8]);
    }
  );
  it(
    'derecha fila simple 6', ()=> {
      expect(component.moveRightRow([4,0,0,4,8]))
      .toEqual([0,0,0,8,8]);
    }
  );

  //izquierda
  it(
    'izquierda simple 1', ()=> {
      expect(component.moveLeft([[2,0],[0,0]]))
      .toEqual([[2,0],[0,0]]);
    }
  );
  it(
    'izquierda simple 2', ()=> {
      expect(component.moveLeft([[2,2],[0,0]]))
      .toEqual([[4,0],[0,0]]);
    }
  );
  it(
    'izquierda simple 3', ()=> {
      expect(component.moveLeft([[2,2],[2,2]]))
      .toEqual([[4,0],[4,0]]);
    }
  );
  it(
    'izquierda simple 4', ()=> {
      expect(component.moveLeft([[2,4],[2,4]]))
      .toEqual([[2,4],[2,4]]);
    }
  );
  it(
    'trivial izquierda ceros', ()=> {
      expect(component.moveLeftRow([0,0,0,0,0]))
      .toEqual([0,0,0,0,0]);
    }
  );
  it(
    'izquierda fila simple 1', ()=> {
      expect(component.moveLeftRow([0,2,4,0,4]))
      .toEqual([2,8,0,0,0]);
    }
  );
  it(
    'izquierda fila simple 2', ()=> {
      expect(component.moveLeftRow([0,2,2,4,4]))
      .toEqual([4,8,0,0,0]);
    }
  );
  it(
    'izquierda fila simple 3', ()=> {
      expect(component.moveLeftRow([0,4,4,4,4]))
      .toEqual([8,8,0,0,0]);
    }
  );
  it(
    'izquierda fila simple 4', ()=> {
      expect(component.moveLeftRow([0,0,4,4,4]))
      .toEqual([8,4,0,0,0]);
    }
  );
  it(
    'izquierda fila simple 5', ()=> {
      expect(component.moveLeftRow([0,0,4,4,8]))
      .toEqual([8,8,0,0,0]);
    }
  );
  it(
    'izquierda fila simple 6', ()=> {
      expect(component.moveLeftRow([4,0,0,4,8]))
      .toEqual([8,8,0,0,0]);
    }
  );
  //Arriba
  it(
    'arriba simple 1', ()=> {
      expect(component.moveUp([[0,2,0],[0,0,2],[0,2,0]]))
      .toEqual([[0,4,2],[0,0,0],[0,0,0]]);
    }
  );
  it(
    'arriba simple 2', ()=> {
      expect(component.moveUp([[2,2,4],[4,0,2],[0,2,2]]))
      .toEqual([[2,4,4],[4,0,4],[0,0,0]]);
    }
  );
  it(
    'randomCeros simple 1', ()=> {
      expect(component.randomInCeros([[0,2],[2,2]],2))
      .toEqual([[2,2],[2,2]]);
    }
  );
  it(
    'randomCeros simple 2', ()=> {
      expect(component.randomInCeros([[2,2],[2,2]],2))
      .toEqual([[2,2],[2,2]]);
    }
  );
  it(
    'definición de termino 1', ()=> {
      expect(component.isEnd([[2,4],[8,16]],2))
      .toEqual(true);
    }
  );
  it(
    'definición de termino 2', ()=> {
      expect(component.isEnd([[2,2],[8,16]],2))
      .toEqual(false);
    }
  );
});
