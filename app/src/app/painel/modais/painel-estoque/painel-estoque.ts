import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-painel-estoque',
    templateUrl: 'painel-estoque.html',
    styleUrls: ['./painel-estoque.scss']
})

export class PainelEstoqueComponent implements OnInit {
    estoqueList: any[];
    isEstoqueFiltered = false;

    constructor() { }

    ngOnInit() { 
        this.loadEstoque();
    }

    loadEstoque() {
        this.isEstoqueFiltered = false;

        this.estoqueList = [
            { feira: {id: "3", nome: "Feira noturna do Polvilho"}, categoria: {nome: "Pastéis"}, produto: {nome: "Pastel de Carne"}, valor: 5.99, quantidade: 0 },
            { feira: {id: "3", nome: "Feira noturna do Polvilho"}, categoria: {nome: "Pastéis"}, produto: {nome: "Pastel de Queijo"}, valor: 5.99, quantidade: 10 },
            { feira: {id: "3", nome: "Feira noturna do Polvilho"}, categoria: {nome: "Bebidas"}, produto: {nome: "Coca Cola"}, valor: 4.99, quantidade: 10 },
            { feira: {id: "3", nome: "Feira noturna do Polvilho"}, categoria: {nome: "Bebidas"}, produto: {nome: "Água s/ gás"}, valor: 2.99, quantidade: 10 },
            { feira: {id: "2", nome: "Feira geral de Santana de Parnaíba"}, categoria: {nome: "Pastéis"}, produto: {nome: "Pastel de Carne"}, valor: 5.99, quantidade: 15 },
            { feira: {id: "2", nome: "Feira geral de Santana de Parnaíba"}, categoria: {nome: "Pastéis"}, produto: {nome: "Pastel de Queijo"}, valor: 5.99, quantidade: 0 },
            { feira: {id: "2", nome: "Feira geral de Santana de Parnaíba"}, categoria: {nome: "Bebidas"}, produto: {nome: "Coca Cola"}, valor: 4.99, quantidade: 10 },
            { feira: {id: "2", nome: "Feira geral de Santana de Parnaíba"}, categoria: {nome: "Bebidas"}, produto: {nome: "Água s/ gás"}, valor: 2.99, quantidade: 10 },
            { feira: {id: "1", nome: "Feira geral de Santana de Cajamar"}, categoria: {nome: "Pastéis"}, produto: {nome: "Pastel de Carne"}, valor: 5.99, quantidade: 4 },
            { feira: {id: "1", nome: "Feira geral de Santana de Cajamar"}, categoria: {nome: "Pastéis"}, produto: {nome: "Pastel de Queijo"}, valor: 5.99, quantidade: 10 },
            { feira: {id: "1", nome: "Feira geral de Santana de Cajamar"}, categoria: {nome: "Bebidas"}, produto: {nome: "Coca Cola"}, valor: 4.99, quantidade: 10 },
            { feira: {id: "1", nome: "Feira geral de Santana de Cajamar"}, categoria: {nome: "Bebidas"}, produto: {nome: "Água s/ gás"}, valor: 2.99, quantidade: 10 },
        ]
    }

    getColor(estoque: any) {
        if (estoque.quantidade >= 10 ) {
            return '#126834';
        } else if (estoque.quantidade < 10 && estoque.quantidade > 0) {
            return '#be9612';
        } else if(estoque.quantidade === 0) {
            return '#eb445a';
        }
    }

    filtrarEstoque(value: string) {
        if (value !== 'todos') {
            this.loadEstoque();

            this.isEstoqueFiltered = true;
            this.estoqueList = this.estoqueList.filter(f => f.feira.id === value);
        } else {
            this.loadEstoque();
        }
    }
}