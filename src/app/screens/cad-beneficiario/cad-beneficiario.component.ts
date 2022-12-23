import { IBeneficiarioDto } from './../../interface/IBeneficiarioDto';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-cad-beneficiario',
  templateUrl: './cad-beneficiario.component.html',
  styleUrls: ['./cad-beneficiario.component.css']
})

export class CadBeneficiarioComponent {
  beneficiario!: IBeneficiarioDto;
  idRecebido!: number;

  constructor(private http: HttpClient, private router: Router) {
    this.cadastrarbeneficiario();
    /*this.router.paramMap.subscribe(params => {
      this.idRecebido = Number(params.get('id'));
    });*/
  }

  ngOnInit(): void {
    this.beneficiario = {
      idBeneficiario: this.idRecebido ?? 0,
      nome: '',
      cpf: '',
      telefone: '',
      endereco: '',
      carteira: ''
    };
  }

  validarInformacoes(): boolean {
    if (this.beneficiario.nome == '') {
      return false;
    }
    return true;
  }

  cadastrarbeneficiario() {
    if (this.validarInformacoes()) {
      if (this.beneficiario.idBeneficiario == 0) {
        this.http.post('https://localhost:7251/api/Beneficiario/api/Cadastrar', this.beneficiario)
        .subscribe((data) => {
          this.router.navigate(['cadastro-beneficiario']);
       });
      } else {
        console.log('Erro na validação');
      }
    }
  }

  onSubmit($event: any): void {
    $event.preventDefault()
    console.log(
      [
        $event.target.inputName.value,
        $event.target.inputCPF.value,
        $event.target.inputTel.value,
        $event.target.inputEndereco.value,
        $event.target.inputCarteira.value
      ]
    );
  }
}








/*cadastrar() {
  if (this.validarInformacoes()){
    if (this.beneficiario.idBeneficiario == 0){
      this.http
      .post(' ', this.beneficiario)
      .subscribe((data) => {
        this.router.navigate(['beneficiario']);
        this.mensagemErro = false;
        this.mensagemSucesso = true;
      });
    } else {
      this.http
      .patch(' ', this.beneficiario)
      .subscribe((data) => {
        this.router.navigate(['beneficiario']);
      });
    }
  } else {
    this.mensagemErro = false;
    this.mensagemSucesso = true;
  }
}
export class CadBeneficiarioComponent {
  onSubmit($event: any): void {
    $event.preventDefault()
    console.log(
      [
        $event.target.inputName.value,
        $event.target.inputCPF.value,
        $event.target.inputTel.value,
        $event.target.inputEndereco.value,
        $event.target.inputCarteira.value
      ]
    );
  }
}*/
