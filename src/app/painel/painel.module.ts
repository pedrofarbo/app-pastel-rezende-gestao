import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PainelPage } from './painel.page';

import { PainelPageRoutingModule } from './painel-routing.module';
import { PainelFeirasComponent } from './modais/painel-feiras/painel-feiras';
import { PainelVendasComponent } from './modais/painel-vendas/painel-vendas';
import { PainelFuncionariosComponent } from './modais/painel-funcionarios/painel-funcionarios';
import { PainelCategoriasComponent } from './modais/painel-categorias/painel-categorias';
import { PainelEstoqueComponent } from './modais/painel-estoque/painel-estoque';
import { PainelHorariosComponent } from './modais/painel-horarios/painel-horarios';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PainelPageRoutingModule
  ],
  declarations: [PainelPage, PainelFeirasComponent, PainelVendasComponent, PainelFuncionariosComponent, PainelCategoriasComponent, PainelEstoqueComponent, PainelHorariosComponent]
})
export class PainelPageModule {}
