import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarTodosDeputadosComponent } from './mostrar-todos-deputados.component';

describe('MostrarTodosDeputadosComponent', () => {
  let component: MostrarTodosDeputadosComponent;
  let fixture: ComponentFixture<MostrarTodosDeputadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MostrarTodosDeputadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarTodosDeputadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
