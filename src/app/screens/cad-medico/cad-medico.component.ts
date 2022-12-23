import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Route, Router} from '@angular/router';
@Component({
  selector: 'app-cad-medico',
  templateUrl: './cad-medico.component.html',
  styleUrls: ['./cad-medico.component.css']
})
export class CadMedicoComponent {

   router: Router;

  checked: boolean;

  constructor(private http: HttpClient, r:Router) {
    this.checked = false;
     this.router = r
  }

  onChange($event: any): void {
    this.checked = $event.checked
  }


  onSubmit($event: any): void {
    $event.preventDefault()

    let values = {
      nome: $event.target.inputName.value,
      cpf: $event.target.inputCPF.value,
      telefone:  $event.target.inputTel.value,
      endereco:   $event.target.inputEndereco.value,
      ativo: this.checked,
    }


      console.log(values, 'values')
      this.saveUser(values).subscribe()
      this.router.navigate(['/'])
  }

  public saveUser(data: any): Observable<any>{
    console.log(data, 'data')
    return this.http
          .post("https://localhost:7251/api/Profissional/api/Cadastrar", data)
  }
}

