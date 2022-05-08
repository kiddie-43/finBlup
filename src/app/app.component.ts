import { Component } from '@angular/core';
import { LoadingService } from './servicios/loading.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blup';


constructor(
  public loading : LoadingService
){

}

}
