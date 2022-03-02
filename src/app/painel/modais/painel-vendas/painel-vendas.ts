import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, IonRouterOutlet } from '@ionic/angular';

@Component({
    selector: 'app-painel-vendas',
    templateUrl: './painel-vendas.html',
    styleUrls: ['./painel-vendas.scss']
})

export class PainelVendasComponent implements OnInit {
    vendas: any[];
    isVendasFiltered: boolean = false;
    isModalProdutosOpened: boolean = false;
    venda: any;

    constructor(public routerOutlet: IonRouterOutlet, private router: Router, private alertController: AlertController, private modalController: ModalController) { }

    ngOnInit() {
        this.loadVendas();
    }

    getColor(venda: any) {
        if (venda.status === 'Pago') {
            return '#126834';
        } else if (venda.status === 'Aguardando pagamento') {
            return '#be9612';
        } else {
            return '#eb445a';
        }
    }

    loadVendas() {
        this.isVendasFiltered = false;
        this.vendas = [
            { id: "21", status: "Pago", feira: { id: "1", nome: "Feira geral de Cajamar" }, produtos: [{ nome: "Pastel de Queijo", quantidade: 2, valor: 12.00 }, { nome: "Pastel de Carne", quantidade: 1, valor: 5.99 }], total: 251.25 },
            { id: "22", status: "Aguardando pagamento", feira: { id: "2", nome: "Feira geral de Santana de Parnaíba" }, produtos: [{ nome: "Pastel de Queijo", quantidade: 5, valor: 39.90 }, { nome: "Pastel de Carne", quantidade: 5, valor: 30.00 }], total: 123.10 },
            { id: "23", status: "Aguardando retirada", feira: { id: "3", nome: "Feira noturna do Polvilho" }, produtos: [{ nome: "Pastel de Queijo", quantidade: 10, valor: 88.90 }, { nome: "Pastel de Carne", quantidade: 3, valor: 38.00 }], total: 85.30 }
        ]
    }

    goToCadastro() {
        this.router.navigate(['/tabs/tab2']);
    }

    openAlert(venda: any) {
        this.presentAlertRadio(venda);
    }

    filtrarVendas(value: string) {
        console.log(value);

        if (value !== 'todos') {
            this.loadVendas();

            this.isVendasFiltered = true;
            this.vendas = this.vendas.filter(f => f.feira.id === value);
        } else {
            this.loadVendas();
        }
    }

    async presentAlertRadio(venda: any) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Escolha o novo status da venda:',
            inputs: [
                {
                    name: 'pago',
                    type: 'radio',
                    label: 'Pago',
                    value: 'Pago',
                    handler: () => {
                    },
                    checked: venda.status === 'Pago'
                },
                {
                    name: 'aguardando-retirada',
                    type: 'radio',
                    label: 'Aguardando retirada',
                    value: 'Aguardando retirada',
                    handler: () => {
                    },
                    checked: venda.status === 'Aguardando retirada'
                },
                {
                    name: 'aguardando-pagamento',
                    type: 'radio',
                    label: 'Aguardando pagamento',
                    value: 'Aguardando pagamento',
                    handler: () => {
                    },
                    checked: venda.status === 'Aguardando pagamento'
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
                        this.vendas.forEach(f => {
                            if (f.id === venda.id) {
                                f.status = value;
                            }
                        })
                    }
                }
            ]
        });

        await alert.present();
    }

    openModalProdutos(venda: any) {
        this.venda = venda;
        this.isModalProdutosOpened = true;
    }

    closeModal() {
        this.isModalProdutosOpened = false;
        this.modalController.dismiss();
    }
}