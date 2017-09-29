import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class PopoverPage {

  constructor(public navCtrl: NavController, 
              public popoverCtrl: PopoverController) {

  }
  
  presentPopover() {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present();
  }
}
