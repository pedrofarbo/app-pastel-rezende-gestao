import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
    selector: 'app-painel-feiras',
    templateUrl: './painel-feiras.html',
    styleUrls: ['./painel-feiras.scss']
})

export class PainelFeirasComponent implements OnInit {
    feiras: any[];

    constructor(private router: Router, private modalController: ModalController, private alertController: AlertController) { }

    ngOnInit() {
        this.feiras = [
            { status: "Montada", nome: "Feira Geral de Cajamar", descricao: "", endereco: "Rua das lebres, n° 145 - Cajamar", responsavel: "Pedro Rezende", obs: "Única barraca de pastel da feira." },
            { status: "Montando", nome: "Feira Geral de Santana de Parnaíba", descricao: "", endereco: "Rua dos jardins, n° 3145 - Santana de Parnaíba", responsavel: "João da Silva", obs: "" },
            { status: "Aguardando montagem", nome: "Feira do Polvilho", descricao: "", endereco: "Rua das saracuras, n° 2011 - Cajamar", responsavel: "Carlos Rezende", obs: "" }
        ]
    }

    getColor(feira: any) {
        if (feira.status === 'Montada') {
            return '#126834';
        } else if (feira.status === 'Montando') {
            return '#be9612';
        } else {
            return '#eb445a';
        }
    }

    goToCadastro(feira: any) {
        this.router.navigate(['/tabs/tab2']);
    }

    openAlert(feira: any) {
        this.presentAlertRadio(feira);
    }

    async presentAlertRadio(feira: any) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Escolha o novo status da feira:',
            inputs: [
                {
                    name: 'montada',
                    type: 'radio',
                    label: 'Montada',
                    value: 'Montada',
                    handler: () => {
                    },
                    checked: feira.status === 'Montada'
                },
                {
                    name: 'montando',
                    type: 'radio',
                    label: 'Montando',
                    value: 'Montando',
                    handler: () => {
                    },
                    checked: feira.status === 'Montando'
                },
                {
                    name: 'aguardando-montagem',
                    type: 'radio',
                    label: 'Aguardando montagem',
                    value: 'Aguardando montagem',
                    handler: () => {
                    },
                    checked: feira.status === 'Aguardando montagem'
                }
            ],
            buttons: [
                {
                    text: 'Fechar',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Salvar',
                    handler: (value) => {
                        this.feiras.forEach(f => {
                            if(f.nome === feira.nome) {
                                f.status = value;
                            }
                        })
                    }
                }
            ]
        });

        await alert.present();
    }
}