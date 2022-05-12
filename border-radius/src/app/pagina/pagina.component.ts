import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  constructor() { }

  esquerdaCima = "";
  esquerdaBaixo = "";
  direitaCima = "";
  direitaBaixo = "";

  esquerdaCimaFinal = "0px ";
  esquerdaBaixoFinal = "0px ";
  direitaCimaFinal = "0px ";
  direitaBaixoFinal = "0px ";

  bordaTotal = "0px ;";

  ngOnInit() {
  }

  mudarBorda(numero) {

    let quadrado = document.querySelector('#quadrado') as HTMLDivElement;

    switch (numero) {
      case 1:
        quadrado.style.borderTopLeftRadius = this.esquerdaCima + "px";
        if (this.esquerdaCima != '') {
          this.esquerdaCimaFinal = this.esquerdaCima + "px "
        } else {
          this.esquerdaCimaFinal = '0px '
        }
        break;
      case 2:
        quadrado.style.borderTopRightRadius = this.direitaCima + "px";
        if (this.direitaCima != '') {
          this.direitaCimaFinal = this.direitaCima + "px "
        } else {
          this.direitaCimaFinal = '0px '
        }
        break;
      case 3:
        quadrado.style.borderBottomLeftRadius = this.esquerdaBaixo + "px";
        if (this.esquerdaBaixo != '') {
          this.esquerdaBaixoFinal = this.esquerdaBaixo + "px "
        } else {
          this.esquerdaBaixoFinal = '0px '
        }
        break;
      case 4:
        quadrado.style.borderBottomRightRadius = this.direitaBaixo + "px";
        if (this.direitaBaixo != '') {
          this.direitaBaixoFinal = this.direitaBaixo + "px "
        } else {
          this.direitaBaixoFinal = '0px '
        }
        break;
    }

    this.bordaTotal = this.esquerdaCimaFinal + this.direitaCimaFinal + this.direitaBaixoFinal + this.esquerdaBaixoFinal + ";";

    if (this.esquerdaCimaFinal == this.direitaCimaFinal && this.direitaCimaFinal == this.direitaBaixoFinal && this.direitaBaixoFinal == this.esquerdaBaixoFinal) {
      this.bordaTotal = this.esquerdaCimaFinal + ";"
    }
  }

}
