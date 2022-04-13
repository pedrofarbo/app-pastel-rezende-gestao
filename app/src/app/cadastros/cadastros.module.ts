import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CadastrosPage } from './cadastros.page';

import { CadastrosPageRoutingModule } from './cadastros-routing.module';
import { EditarFeira } from './modais/editar-feira/editar-feira';
import { DeletarFeira } from './modais/deletar-feira/deletar-feira';
import { CadastrarFeira } from './modais/cadastrar-feira/cadastrar-feira';
import { CadastrarVendas } from './modais/cadastrar-vendas/cadastrar-vendas';
import { CadastrarFuncionarios } from './modais/cadastrar-funcionarios/cadastrar-funcionarios';
import { CadastrarCategorias } from './modais/cadastrar-categorias/cadastrar-categorias';
import { CadastrarHorarios } from './modais/cadastrar-horarios/cadastrar-horarios';
import { CadastrarEstoque } from './modais/cadastrar-estoque/cadastrar-estoque';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CadastrosPageRoutingModule
  ],
  declarations: [CadastrosPage, EditarFeira, DeletarFeira, CadastrarFeira, CadastrarVendas, CadastrarFuncionarios, CadastrarCategorias, CadastrarEstoque, CadastrarHorarios]
})
export class CadastrosPageModule {}
