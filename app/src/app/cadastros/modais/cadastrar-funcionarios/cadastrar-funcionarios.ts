import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-cadastrar-funcionarios',
    templateUrl: 'cadastrar-funcionarios.html',
    styleUrls: ['cadastrar-funcionarios.scss']
})
export class CadastrarFuncionarios implements OnInit {
    funcionario: any;

    constructor(private modalController: ModalController, public toastController: ToastController) { }

    ngOnInit() {
        this.funcionario = { nome: "", descricao: "", freela: false }
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Funcionário criado com sucesso!',
            duration: 2000,
            color: 'primary',
            icon: 'thumbs-up-outline'
        });

        toast.present();
    }

    save() {
        console.log(this.funcionario);
        this.presentToast();;
        this.modalController.dismiss();
    }
}
