import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cad-hospital',
  templateUrl: './cad-hospital.component.html',
  styleUrls: ['./cad-hospital.component.css']
})
export class CadHospitalComponent {

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
      nome: $event.target.inputNameHospital.value,
      cnpj: $event.target.inputCnpjHospital.value,
      telefone:  $event.target.inputTelefoneHospital.value,
      endereco:   $event.target.inputEnderecoHospital.value,
      cnes:  $event.target.inputCnesHospital.value,
      ativo: this.checked,
    }

      console.log(values, 'values')
      this.saveUser(values).subscribe()
  }

  public saveUser(data: any): Observable<any>{
    console.log(data, 'data')
    return this.http
          .post("https://localhost:7251/api/Hospital/api/Cadastrar", data)
  }
}
