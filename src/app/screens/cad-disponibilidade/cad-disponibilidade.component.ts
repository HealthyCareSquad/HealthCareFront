import { Component } from '@angular/core';
import { Especialidades, iEspecialidades } from 'src/mock/especialidades';
import { Hospitais, iHospitais } from 'src/mock/hospitais';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-cad-disponibilidade',
  templateUrl: './cad-disponibilidade.component.html',
  styleUrls: ['./cad-disponibilidade.component.css']
})


export class CadDisponibilidadeComponent {

  numberHour: number = 12;

  toDay: Date = new Date()

  value: any = '';

  especialidades: iEspecialidades[] = []

  hospitais: iHospitais[] = Hospitais

  constructor(private http: HttpClient){
    this.listarTodasEspecialidades();
  }

  listarTodasEspecialidades(){
    this.http
    .get('https://localhost:7088/ListarTodas')
    .pipe(
      map((response: any) => {
        return Object.values(response);
      })
    )
    .subscribe((data) => {
      for (let index = 0; index < data.length; index++) {
        let conteudoJson: any = data[index];
        this.especialidades.push(conteudoJson as iEspecialidades);
      }
    });
  }

}
