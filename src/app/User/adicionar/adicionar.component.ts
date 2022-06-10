import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { ServiceService } from 'src/app/Service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {
  formValue: FormGroup = new FormGroup({
    id: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    cidade: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', Validators.required),
  });
  mode: string = '';
  constructor(private service:ServiceService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (Number(id)) {
      this.mode = "Editado";
      this.service.getUserById(Number(id)).subscribe(result => {
        this.setForm(result);
      });
    } else {
      this.mode = "Cadastrado";
    }  
  }

  setForm(user: User) {
    this.formValue =  new FormGroup({
      id: new FormControl(user.id),
      firstName: new FormControl(user.firstName, Validators.required),
      lastName: new FormControl(user.lastName, Validators.required),
      cidade: new FormControl(user.cidade, [Validators.required, Validators.email]),
      telefone: new FormControl(user.telefone, Validators.required),
    });
  }


  enviar() {
    const user: User = this.formValue.value;
    this.service.createUser(user).subscribe(result => {      
      Swal.fire(`${this.mode} com sucesso!`, 'Sucesso','success');
      this.router.navigate(['/listar']);
    });
  }

}
