import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public loading: boolean = false;

  constructor(
   

  ) { }


  getStatus() {


    return this.loading;
  }



  public loadingScreen() {
    setTimeout(() => {
      this.loading = true;
    }, 1);
  }

  public disabledLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 1);
  }
}
