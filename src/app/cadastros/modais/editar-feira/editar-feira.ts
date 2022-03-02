import { Component } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-editar-feira',
  templateUrl: 'editar-feira.html',
  styleUrls: ['editar-feira.scss']
})
export class EditarFeira {
  constructor(private modalController: ModalController) {}
}
