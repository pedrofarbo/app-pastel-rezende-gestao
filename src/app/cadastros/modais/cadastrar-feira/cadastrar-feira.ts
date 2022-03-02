import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-cadastrar-feira',
    templateUrl: 'cadastrar-feira.html',
    styleUrls: ['cadastrar-feira.scss']
})
export class CadastrarFeira implements OnInit {
    feira: any;

    constructor(private modalController: ModalController, public toastController: ToastController) { }

    ngOnInit() {
        this.feira = { nome: "", descricao: "", endereco: "", responsavel: "", obs: "" }
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Feira criada com sucesso!',
            duration: 2000,
            color: 'primary',
            icon: 'thumbs-up-outline'
        });

        toast.present();
    }

    save() {
        console.log(this.feira);
        this.presentToast();;
        this.modalController.dismiss();
    }
}
