import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudUser';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }

  Cadastrar(){
    this.router.navigate(["adicionar"]);
  }
}
