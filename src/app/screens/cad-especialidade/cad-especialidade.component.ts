import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cad-especialidade',
  templateUrl: './cad-especialidade.component.html',
  styleUrls: ['./cad-especialidade.component.css']
})
export class CadEspecialidadeComponent {

  checked: boolean;

  constructor(private http: HttpClient) {
    this.checked = false
  }

  onChange($event: any): void {
    this.checked = $event.checked
  }

  onSubmit($event: any): void {
    $event.preventDefault()

    let values = {
      nome: $event.target.inputNameEspecialidade.value,
      descricao: $event.target.inputDescricaoEspecialidade.value,
      ativo: this.checked,
    }

    console.log(values, 'values')
    this.saveUser(values).subscribe()
}

public saveUser(data: any): Observable<any>{
  console.log(data, 'data')
  return this.http
        .post("https://localhost:7251/api/Especialidade/api/Cadastrar", data)
}

}
