import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadBeneficiarioComponent} from './screens/cad-beneficiario/cad-beneficiario.component';
import { CadMedicoComponent } from './screens/cad-medico/cad-medico.component';
import {HomeComponent} from './screens/home/home.component'
import { CadHospitalComponent } from './screens/cad-hospital/cad-hospital.component';
import { CadEspecialidadeComponent } from './screens/cad-especialidade/cad-especialidade.component';
import { CadDisponibilidadeComponent } from './screens/cad-disponibilidade/cad-disponibilidade.component';
import { AgendamentoConsultaComponent } from './screens/agendamento-consulta/agendamento-consulta.component';

const routes: Routes = [
  {path: 'cadastro-beneficiario', component:CadBeneficiarioComponent},
  {path: '', component:HomeComponent},
  {path: 'painel/cadastro-medico', component:CadMedicoComponent},
  {path: 'painel/cadastro-hospital', component:CadHospitalComponent},
  {path: 'painel/cadastro-especialidade', component:CadEspecialidadeComponent},
  {path: 'painel/cadastro-disponibilidade', component: CadDisponibilidadeComponent},
  {path: 'agendamento-consulta', component: AgendamentoConsultaComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
