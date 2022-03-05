import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-painel-funcionarios',
    templateUrl: 'painel-funcionarios.html',
    styleUrls: ['./painel-funcionarios.scss']
})

export class PainelFuncionariosComponent implements OnInit {
    funcionarios: any[];

    constructor() { }

    ngOnInit() { 
        this.funcionarios = [
            {
                nome: "Carlos Ruff",
                descricao: "Ajudante de montagem",
                freela: true
            },
            {
                nome: "Pedro Resende",
                descricao: "Administrador",
                freela: false
            },
            {
                nome: "João da Silva",
                descricao: "Atendimento",
                freela: false
            },
            {
                nome: "Jéssica Moreira",
                descricao: "Atendimento",
                freela: true
            }
        ]
    }
}