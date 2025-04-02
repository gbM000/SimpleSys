import { Livro } from './../model/Livro';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LivroService } from '../servico/livro.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-core-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './core-component.component.html',
  styleUrl: './core-component.component.css'
})
export class CoreComponentComponent {
  livro = new Livro();

  imagePath: string = "images/estante.png"

  buttonCad:boolean = true;

  books:Livro[] = [];

  tabela:boolean = true;

  constructor(private servico:LivroService){}

  read():void{
    this.servico.read().subscribe(ret => this.books = ret);
  }

  create():void{
    this.servico.create(this.livro).subscribe(ret => {

      this.books.push(ret);
      this.livro = new Livro();
      alert("Cadastro concluido.")
    });
  }

  selectOne(pos:number):void{
    this.livro = this.books[pos];

    this.buttonCad = false;
    this.tabela = false;
  }

  update():void{
    this.servico.update(this.livro).subscribe(ret => {
      let pos = this.books.findIndex(obj => {
        return obj.codigo == ret.codigo;
      });

      this.books[pos] = ret;

      this.livro = new Livro();

      this.buttonCad = true;
      this.tabela = true;
      alert("Alteração concluida")

    });
  }

  remove():void{
    this.servico.remove(this.livro.codigo).subscribe(ret => {
      let pos = this.books.findIndex(obj => {
        return obj.codigo == this.livro.codigo;
      });

      this.books.splice(pos,1);

      this.livro = new Livro();

      this.buttonCad = true;
      this.tabela = true;
      alert("Remoção concluida")

    });
  }

  cancel():void{
    this.livro = new Livro();
    this.buttonCad = true;
    this.tabela = true;
  }

  ngOnInit(){
    this.read();
  }

}
