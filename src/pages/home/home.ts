import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              public popoverCtrl: PopoverController) {

  }
  
  presentPopover() {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present();
  }
}
