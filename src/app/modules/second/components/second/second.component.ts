import { Component, OnInit } from '@angular/core';
import { CompartidoService } from '../../../../services/compartido.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(public shareS: CompartidoService) { }

  ngOnInit(): void { 
    this.updateData();
  }

  data(){
    let inputName: HTMLInputElement = <HTMLInputElement> document.getElementById('name'); //<HTMLInputElement> sera deprecado, usar as HTMLInputElement en su lugar
    let inputEmail: HTMLInputElement = document.getElementById('email') as HTMLInputElement;

     inputName.value = this.shareS.name;
     inputEmail.value = this.shareS.email;
     console.log(inputName, inputEmail)
  }

  updateData(){
    let btn = document.getElementById('btn-update');
    btn?.addEventListener('click', () => {
      this.data();
    })
  }

}
