import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model';
import { TutorialService } from '../../services/tutorial.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { PeriodicElement } from '../../models/periodic-element';



const ELEMENT_DATA: PeriodicElement[] = [
  {nome: 1, email: 'Hydrogen', senha: 1.0079, cpf: 'H'},
  {nome: 2, email: 'Helium', senha: 4.0026, cpf: 'He'},
  {nome: 3, email: 'Lithium', senha: 6.941, cpf: 'Li'},
  {nome: 4, email: 'Beryllium', senha: 9.0122, cpf: 'Be'},
  {nome: 5, email: 'Boron', senha: 10.811, cpf: 'B'},
  {nome: 6, email: 'Carbon', senha: 12.0107, cpf: 'C'},
  {nome: 7, email: 'Nitrogen', senha: 14.0067, cpf: 'N'},
  {nome: 8, email: 'Oxygen', senha: 15.9994, cpf: 'O'},
  {nome: 9, email: 'Fluorine', senha: 18.9984, cpf: 'F'},
  {nome: 10, email: 'Neon', senha: 20.1797, cpf: 'Ne'},
];

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css'],
})


export class TutorialsListComponent implements OnInit {
  tutorials?: Tutorial[];
  usuarios:Usuario[] = []; 
  currentTutorial: Tutorial = {};
  currentUsuario: Usuario = {};
  currentIndex = -1;
  title = '';
  dataSource = []; 
  

  displayedColumns: string[] = ['nome', 'email','cpf', 'opcoes'];
  

  constructor(
    private tutorialService: TutorialService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.recuperarUsuarios();
  }

  recuperarUsuarios(): void {
    this.usuarioService.getAll().subscribe({
      next: (data) => {
        this.usuarios = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.recuperarUsuarios();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  setActiveUsuario(usuario: Usuario, index: number): void {
    this.currentUsuario = usuario;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.tutorialService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.tutorials = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}
