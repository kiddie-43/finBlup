import { Component, OnInit } from '@angular/core';
import { MsgService } from '../../../servicios/msg.service';
MsgService
@Component({
  selector: 'app-mensage',
  templateUrl: './mensage.component.html',
  styleUrls: ['./mensage.component.scss']
})
export class MensageComponent implements OnInit {

  
  constructor(
    public msg : MsgService

  ) { }

  ngOnInit(): void {
  }




}
