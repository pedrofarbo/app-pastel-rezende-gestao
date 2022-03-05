import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-cadastrar-estoque',
    templateUrl: 'cadastrar-estoque.html',
    styleUrls: ['cadastrar-estoque.scss']
})
export class CadastrarEstoque implements OnInit {
    estoque: any;

    constructor(private modalController: ModalController, public toastController: ToastController) { }

    ngOnInit() {
        this.estoque = { feira: "", categoria: "", produto: "", descricao: "", valor: 0.00, quantidade: 0 }
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Estoque criado com sucesso!',
            duration: 2000,
            color: 'primary',
            icon: 'thumbs-up-outline'
        });

        toast.present();
    }

    save() {
        this.presentToast();
        this.modalController.dismiss();
    }

    validateNumber(type: any, n: number) {
        if(type == 'valor' && n < 0) {
            this.estoque.valor = null;
        } else if(type == 'quantidade' && n < 0) {
            this.estoque.quantidade = null;
        }
    }
}
