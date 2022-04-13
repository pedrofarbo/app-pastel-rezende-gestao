import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-painel-categorias',
    templateUrl: 'painel-categorias.html',
    styleUrls: ['./painel-categorias.scss']
})

export class PainelCategoriasComponent implements OnInit {
    categorias: any[];

    constructor() { }

    ngOnInit() { 
        this.categorias = [
            {
                nome: "Pastéis",
                descricao: "Doces, salgados e especiais"
            },
            {
                nome: "Bebidas",
                descricao: "refrigerantes, águas e afins não alcólicos"
            },
            {
                nome: "Salgadinhos",
                descricao: "salgados rápidos e fritos"
            },
            {
                nome: "Ingredientes",
                descricao: "componentes para montagem dos pastéis e salgadinhos"
            }
        ]
    }
}