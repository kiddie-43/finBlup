import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
environment
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
urlLogo = environment.urlServer + "/img/logos/logoBlupNegro.png"


  constructor(
    

  ) { }



  ngOnInit(): void {
  }

}
