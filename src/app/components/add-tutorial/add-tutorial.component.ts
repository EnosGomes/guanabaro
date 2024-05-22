import { Component } from '@angular/core';
import { Tutorial } from '../../models/tutorial.model';
import { TutorialService } from '../../services/tutorial.service';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css'],
})
export class AddTutorialComponent {
  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };

  usuario: Usuario = {
    nomeUser: '',
    emailUser: '',
    senhaUser: '',
    cpf: ''
  }
  submitted = false;

  constructor(private tutorialService: TutorialService,
    private usuarioService: UsuarioService
  ) {}

  salvarUsuario(): void {
    const data = {
      nomeUser: this.usuario.nomeUser,
      emailUser: this.usuario.emailUser,
      senhaUser: this.usuario.senhaUser,
      cpf: this.usuario.cpf
    };
    
    this.usuarioService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.tutorialService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }

  novoUsuario(): void {
    this.submitted = false;
    this.usuario = {
      nomeUser: '',
      emailUser: '',
      senhaUser: '',
      cpf: ''
    };
  }
}
