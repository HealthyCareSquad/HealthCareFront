import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoConsultaComponent } from './agendamento-consulta.component';

describe('AgendamentoConsultaComponent', () => {
  let Component: AgendamentoConsultaComponent;
  let fixture: ComponentFixture<AgendamentoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentoConsultaComponent);
    Component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(Component).toBeTruthy();
  });
});
