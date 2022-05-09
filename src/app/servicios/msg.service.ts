import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MsgService {
  public text: string = "hola mundo ";
  public icon: string = "warning"
  public hide: boolean = true
  constructor(
    private ToastrService : ToastrService
  ) { }


  openMensage(tipoMensage: number, mensageText: string) {
    if (tipoMensage === 1) {
      this.ToastrService.success(mensageText);
    } else if (tipoMensage === 2) {
      this.ToastrService.info(mensageText);
    } else {
      this.ToastrService.error(mensageText);
    }


  
  
  }

  private iconMensage(tipoMensage: number) {
    

  }

}
