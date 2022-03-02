import { Component } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-deletar-feira',
  templateUrl: 'deletar-feira.html',
  styleUrls: ['deletar-feira.scss']
})
export class DeletarFeira {
  constructor(private modalController: ModalController) {}
}
