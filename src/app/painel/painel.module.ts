import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PainelPage } from './painel.page';

import { PainelPageRoutingModule } from './painel-routing.module';
import { PainelFeirasComponent } from './modais/painel-feiras/painel-feiras';
import { PainelVendasComponent } from './modais/painel-vendas/painel-vendas';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PainelPageRoutingModule
  ],
  declarations: [PainelPage, PainelFeirasComponent, PainelVendasComponent]
})
export class PainelPageModule {}
