import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadDisponibilidadeComponent } from './cad-disponibilidade.component';

describe('CadDisponibilidadeComponent', () => {
  let component: CadDisponibilidadeComponent;
  let fixture: ComponentFixture<CadDisponibilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadDisponibilidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadDisponibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
