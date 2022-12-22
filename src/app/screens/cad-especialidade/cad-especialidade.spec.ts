import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEspecialidadeComponent } from './cad-especialidade.component';

describe('CadEspecialidadeComponent', () => {
  let Component: CadEspecialidadeComponent;
  let fixture: ComponentFixture<CadEspecialidadeComponent>;
  // especialidade!: IEspecialidade;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadEspecialidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadEspecialidadeComponent);
    Component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(Component).toBeTruthy();
  });
});
