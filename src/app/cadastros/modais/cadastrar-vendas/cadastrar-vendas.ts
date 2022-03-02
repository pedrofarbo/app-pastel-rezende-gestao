import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-cadastrar-vendas',
    templateUrl: 'cadastrar-vendas.html',
    styleUrls: ['cadastrar-vendas.scss']
})
export class CadastrarVendas implements OnInit {
    venda: any;
    vendaItem: any;
    itensToSelect: any[];
    isAddItemModalOpened: boolean = false;
    totalPedido: number = 0;

    constructor(private modalController: ModalController, public toastController: ToastController) { }

    ngOnInit() {
        this.vendaItem = { item: { id: 0, nome: "", descricao: "", categoria: "", estoque: 0, valor: 0, obs: "" }, quantidade: 0 }
        this.itensToSelect = [{ id: 0, nome: "Pastel de Carne", descricao: "", categoria: "Pastéis", estoque: 5, valor: 5.99, obs: "" }, { nome: "Pastel de Queijo", descricao: "", categoria: "Pastéis", estoque: 5, valor: 5.99, obs: "" }]
        this.venda = { feira: "", formaPagamento: "", itens: [] }
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Venda criada com sucesso!',
            duration: 2000,
            color: 'primary',
            icon: 'thumbs-up-outline'
        });

        toast.present();
    }

    save() {
        console.log(this.venda);
        this.presentToast();
        this.modalController.dismiss();
    }

    deleteItemFromSale(position) {
        console.log(position);

        for( var i = 0; i < this.venda.itens.length; i++){
            console.log(this.venda.itens) 
            if (i === position) { 
                this.totalPedido = this.totalPedido - (this.venda.itens[i].item.valor * this.venda.itens[i].quantidade);
                this.venda.itens.splice(i, 1); 
            }
        }
    }

    generateRandomIntegerInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    addItemToSale() {
        this.vendaItem.item.id = this.generateRandomIntegerInRange(0, 100000);

        this.venda.itens.push(this.vendaItem);

        this.modalController.dismiss();

        this.totalPedido = (this.totalPedido + (this.vendaItem.item.valor * this.vendaItem.quantidade));

        console.log(this.totalPedido);
        console.log(this.vendaItem);

        this.vendaItem = { item: { id: 0, nome: "", descricao: "", categoria: "", estoque: 0, valor: 0, obs: "" }, quantidade: 0 };
    }

    showModal() {
        if (!this.isAddItemModalOpened) {
            this.isAddItemModalOpened = true;
        } else {
            this.isAddItemModalOpened = false;
        }
    }

    closeModal() {
        this.modalController.dismiss();
    }
}
