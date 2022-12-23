import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cad-hospital',
  templateUrl: './cad-hospital.component.html',
  styleUrls: ['./cad-hospital.component.css']
})

export class CadHospitalComponent {

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
      nome: $event.target.inputNameHospital.value,
      cnpj: $event.target.inputCnpjHospital.value,
      telefone:  $event.target.inputTelefoneHospital.value,
      endereco:   $event.target.inputEnderecoHospital.value,
      cnes:  $event.target.inputCnesHospital.value,
      ativo: this.checked,
    }
      console.log(values, 'values')
      this.saveUser(values).subscribe()
      this.router.navigate(['/'])
  }
  public saveUser(data: any): Observable<any>{
    console.log(data, 'data')
    return this.http
          .post("https://localhost:7251/api/Hospital/api/Cadastrar", data)
  }
}


