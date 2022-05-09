import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  public text: string = "";
  public icon: string = ""
  public hide: boolean = true
  constructor() { }


  openMensage(tipoMensage: number, mensageText: string) {

    this.icon = this.iconMensage(tipoMensage);
    this.text = mensageText;
    this.hide = false;

  }

  private iconMensage(tipoMensage: number) {
    if (tipoMensage === 1) {
      return "info";
    } else if (tipoMensage === 2) {
      return "warning";
    } else {
      return "error";
    }


  }

}
