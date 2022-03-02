import { Component } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cadastros',
  templateUrl: 'cadastros.page.html',
  styleUrls: ['cadastros.page.scss']
})
export class CadastrosPage {

  totalFeiras: number = 0;
  feiras: any[];
  isFeirasOpened: boolean = false;
  isFeiraAddModalOpened: boolean = false;
  isFeiraEditModalOpened: boolean = false;
  isFeiraDeleteModalOpened: boolean = false;

  totalVendas: number = 0;
  vendas: any[];
  isVendasOpened: boolean = false;
  isVendasAddModalOpened: boolean = false;

  totalFuncionarios: number = 0;
  funcionarios: any[];
  isFuncionariosOpened: boolean = false;
  isFuncionariosAddModalOpened: boolean = false;

  totalCategorias: number = 0;
  categorias: any[];
  isCategoriasOpened: boolean = false;
  isCategoriasAddModalOpened: boolean = false;

  totalEstoque: number = 0;
  estoque: any[];
  isEstoqueOpened: boolean = false;
  isEstoqueAddModalOpened: boolean = false;

  totalHorarios: number = 0;
  horarios: any[];
  isHorariosOpened: boolean = false;
  isHorariosAddModalOpened: boolean = false;


  constructor(public routerOutlet: IonRouterOutlet, private modalController: ModalController) {}

  showFeiras() {
    if (!this.isFeirasOpened) {
      this.isFeirasOpened = true;
    } else {
      this.isFeirasOpened = false;
    }
  }

  showVendas() {
    if (!this.isVendasOpened) {
      this.isVendasOpened = true;
    } else {
      this.isVendasOpened = false;
    }
  }

  showFuncionarios() {
    if (!this.isFuncionariosOpened) {
      this.isFuncionariosOpened = true;
    } else {
      this.isFuncionariosOpened = false;
    }
  }

  showCategorias() {
    if (!this.isCategoriasOpened) {
      this.isCategoriasOpened = true;
    } else {
      this.isCategoriasOpened = false;
    }
  }

  showEstoque() {
    if (!this.isEstoqueOpened) {
      this.isEstoqueOpened = true;
    } else {
      this.isEstoqueOpened = false;
    }
  }

  showHorarios() {
    if (!this.isHorariosOpened) {
      this.isHorariosOpened = true;
    } else {
      this.isHorariosOpened = false;
    }
  }

  showFeiraAddModal() {
    if (!this.isFeiraAddModalOpened) {
      this.isFeiraAddModalOpened = true;
    } else {
      this.isFeiraAddModalOpened = false;
    }
  }

  showFeiraEditModal() {
    if (!this.isFeiraEditModalOpened) {
      this.isFeiraEditModalOpened = true;
    } else {
      this.isFeiraEditModalOpened = false;
    }
  }

  showFeiraDeleteModal() {
    if (!this.isFeiraDeleteModalOpened) {
      this.isFeiraDeleteModalOpened = true;
    } else {
      this.isFeiraDeleteModalOpened = false;
    }
  }

  showVendasAddModal() {
    if (!this.isVendasAddModalOpened) {
      this.isVendasAddModalOpened = true;
    } else {
      this.isVendasAddModalOpened = false;
    }
  }

  showFuncionariosAddModal() {
    if (!this.isFuncionariosAddModalOpened) {
      this.isFuncionariosAddModalOpened = true;
    } else {
      this.isFuncionariosAddModalOpened = false;
    }
  }

  showCategoriasAddModal() {
    if (!this.isCategoriasAddModalOpened) {
      this.isCategoriasAddModalOpened = true;
    } else {
      this.isCategoriasAddModalOpened = false;
    }
  }

  showEstoqueAddModal() {
    if (!this.isEstoqueAddModalOpened) {
      this.isEstoqueAddModalOpened = true;
    } else {
      this.isEstoqueAddModalOpened = false;
    }
  }

  showHorariosAddModal() {
    if (!this.isHorariosAddModalOpened) {
      this.isHorariosAddModalOpened = true;
    } else {
      this.isHorariosAddModalOpened = false;
    }
  }

  closeModal() {
    this.modalController.dismiss();
    this.isFeiraAddModalOpened = false;
    this.isFeiraDeleteModalOpened = false;
    this.isFeiraEditModalOpened = false;
    this.isVendasAddModalOpened = false;
    this.isFuncionariosAddModalOpened = false;
    this.isCategoriasAddModalOpened = false;
    this.isEstoqueAddModalOpened = false;
    this.isHorariosAddModalOpened = false;
  }
}
