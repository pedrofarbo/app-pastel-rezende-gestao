import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-cadastrar-categorias',
    templateUrl: 'cadastrar-categorias.html',
    styleUrls: ['cadastrar-categorias.scss']
})
export class CadastrarCategorias implements OnInit {
    categoria: any;

    constructor(private modalController: ModalController, public toastController: ToastController) { }

    ngOnInit() {
        this.categoria = { nome: "", descricao: "" }
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Categoria criada com sucesso!',
            duration: 2000,
            color: 'primary',
            icon: 'thumbs-up-outline'
        });

        toast.present();
    }

    save() {
        console.log(this.categoria);
        this.presentToast();;
        this.modalController.dismiss();
    }
}
