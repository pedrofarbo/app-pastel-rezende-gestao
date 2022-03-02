import { Component, OnInit } from '@angular/core';
import { ModalController, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-painel',
  templateUrl: 'painel.page.html',
  styleUrls: ['painel.page.scss']
})
export class PainelPage implements OnInit {

  isModalFeirasOpened: boolean;
  isModalVendasOpened: boolean;
  isModalFuncionariosOpened: boolean;
  isModalCategoriasOpened: boolean;
  isModalEstoqueOpened: boolean;
  isModalHorariosOpened: boolean;

  constructor(public routerOutlet: IonRouterOutlet, private modalController: ModalController) {
  }

  ngOnInit() {
    this.resetState();
  }

  navigation(page: string) {
    this.resetState();

    console.log(page);
    console.log(this.isModalFeirasOpened);

    if (page === 'feiras') {
      this.isModalFeirasOpened = true;
    } else if (page === 'vendas') {
      this.isModalVendasOpened = true;
    } else if (page === 'funcionarios') {
      this.isModalFuncionariosOpened = true;
    } else if (page === 'categorias') {
      this.isModalCategoriasOpened = true;
    } else if (page === 'estoque') {
      this.isModalEstoqueOpened = true;
    } else if (page === 'horarios') {
      this.isModalHorariosOpened = true;
    }
  }

  resetState() {
    this.isModalFeirasOpened = false;
    this.isModalVendasOpened = false;
    this.isModalFuncionariosOpened = false;
    this.isModalCategoriasOpened = false;
    this.isModalEstoqueOpened = false;
    this.isModalHorariosOpened = false;
  }

  closeModal() {
    this.modalController.dismiss();
    this.resetState();
  }

  ionViewDidLeave() {
    this.resetState();

    if(this.modalController.getTop() !== null) {
      this.modalController.dismiss();
    }
  }

}
