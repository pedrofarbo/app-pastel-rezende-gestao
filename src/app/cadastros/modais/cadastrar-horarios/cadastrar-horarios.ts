import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
    selector: 'app-cadastrar-horarios',
    templateUrl: 'cadastrar-horarios.html',
    styleUrls: ['cadastrar-horarios.scss']
})
export class CadastrarHorarios implements OnInit {
    horario: any;

    constructor(private modalController: ModalController, public toastController: ToastController) { }

    ngOnInit() {
        this.horario = { feira: {nome: ''}, descricao: "", hora: '', minuto: ''}
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Horário criado com sucesso!',
            duration: 2000,
            color: 'primary',
            icon: 'thumbs-up-outline'
        });

        toast.present();
    }

    save() {
        console.log(this.horario);
        this.presentToast();;
        this.modalController.dismiss();
    }
}
