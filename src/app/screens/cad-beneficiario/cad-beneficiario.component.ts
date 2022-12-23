import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cad-beneficiario',
  templateUrl: './cad-beneficiario.component.html',
  styleUrls: ['./cad-beneficiario.component.css']
})

export class CadBeneficiarioComponent {

  router: Router;

  checked: boolean;

  constructor(private http: HttpClient, r:Router) {
    this.checked = false
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
      numeroCarteirinha:  $event.target.inputCarteira.value,
      ativo: this.checked,
      email: "email@email.com",
      senha: "string"
    }


      console.log(values, 'values')
      this.saveUser(values).subscribe()
      this.router.navigate(['/'])
  }
  public saveUser(data: any): Observable<any>{
    console.log(data, 'data')
    return this.http
          .post("https://localhost:7251/api/Beneficiario/api/Cadastrar", data)
  }
}
