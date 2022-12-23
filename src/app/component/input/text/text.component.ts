import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  @Input('inputId') inputId:string = "";
  @Input('nameInput') nameInput:string = "";
  @Input('typeInput') typeInput:string = "";
  @Input('placeholder') placeholder:string = "";
  @Input('valor') valorTexto:string = "";
}
