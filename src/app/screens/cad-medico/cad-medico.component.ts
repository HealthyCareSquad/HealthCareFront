import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
@Component({
  selector: 'app-cad-medico',
  templateUrl: './cad-medico.component.html',
  styleUrls: ['./cad-medico.component.css']
})
export class CadMedicoComponent {

  checked: boolean;

  constructor(private http: HttpClient) {
    this.checked = false;
  }

  onChange($event: any): void {
    this.checked = $event.checked
  }


  onSubmit($event: any): void {
    $event.preventDefault()

  }
}
