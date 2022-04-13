import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-painel-horarios',
    templateUrl: 'painel-horarios.html',
    styleUrls: ['./painel-horarios.scss']
})

export class PainelHorariosComponent implements OnInit {
    horarios: any[];
    isHorariosFiltered = false;

    constructor() { }

    ngOnInit() { 
        this.loadHorarios();
    }

    loadHorarios() {
        this.isHorariosFiltered = false;

        this.horarios = [
            { feira: {id: "3", nome: "Feira noturna do Polvilho"},  descricao: "Início Montagem", hora: '17', minuto: '00'},
            { feira: {id: "3", nome: "Feira noturna do Polvilho"},  descricao: "Fim Montagem", hora: '17', minuto: '30'},
            { feira: {id: "3", nome: "Feira noturna do Polvilho"},  descricao: "Início Operação", hora: '18', minuto: '00'},
            { feira: {id: "3", nome: "Feira noturna do Polvilho"},  descricao: "Fim Operação", hora: '22', minuto: '00'},
            { feira: {id: "2", nome: "Feira geral de Santana de Parnaíba"},  descricao: "Início Montagem", hora: '04', minuto: '00'},
            { feira: {id: "2", nome: "Feira geral de Santana de Parnaíba"},  descricao: "Fim Montagem", hora: '04', minuto: '30'},
            { feira: {id: "2", nome: "Feira geral de Santana de Parnaíba"},  descricao: "Início Operação", hora: '06', minuto: '00'},
            { feira: {id: "2", nome: "Feira geral de Santana de Parnaíba"},  descricao: "Fim Operação", hora: '14', minuto: '00'},
            { feira: {id: "1", nome: "Feira geral de Cajamar"},  descricao: "Início Montagem", hora: '04', minuto: '00'},
            { feira: {id: "1", nome: "Feira geral de Cajamar"},  descricao: "Fim Montagem", hora: '04', minuto: '30'},
            { feira: {id: "1", nome: "Feira geral de Cajamar"},  descricao: "Início Operação", hora: '06', minuto: '00'},
            { feira: {id: "1", nome: "Feira geral de Cajamar"},  descricao: "Fim Operação", hora: '14', minuto: '00'},
        ]
    }

    filtrarHorarios(value: string) {
        if (value !== 'todos') {
            this.loadHorarios();

            this.isHorariosFiltered = true;
            this.horarios = this.horarios.filter(f => f.feira.id === value);
        } else {
            this.loadHorarios();
        }
    }
}