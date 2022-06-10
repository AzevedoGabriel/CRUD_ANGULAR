import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import {User} from 'src/app/Model/User';
import {
	MatTableDataSource
} from '@angular/material/table';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  users:User[] = [];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'cidade', 'telefone', 'acoes'];
  dataSource!: MatTableDataSource<any>;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.service.getUsers()
    .subscribe(data =>  {
      this.users=data;
      this.dataSource = new MatTableDataSource(this.users);
    })
  }

  deletar(userId: Number) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não conseguirá reverter!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteUser(userId).subscribe(
          (result) => {
            Swal.fire('Deletado!', 'O usuário foi deletado.', 'success');
            this.listar();
          }
        );
      }
    });
  }
}
