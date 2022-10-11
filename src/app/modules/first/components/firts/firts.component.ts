import { Component, OnInit } from '@angular/core';
import { CompartidoService } from '../../../../services/compartido.service';

@Component({
  selector: 'app-firts',
  templateUrl: './firts.component.html',
  styleUrls: ['./firts.component.scss']
})
export class FirtsComponent implements OnInit {

  constructor(public shareS: CompartidoService) { }

  ngOnInit(): void {
    this.fillForm();
  }


  public fillForm(){

    let boton = document.getElementById('btn-1');
    boton?.addEventListener("click", () => {
      this.shareS.name = 'Chris';
      this.shareS.email = 'example@example.com';
      console.log('1st Component: ')
      console.log(this.shareS);
    })


  }


}
