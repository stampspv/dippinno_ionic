import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController , private statusBar: StatusBar) {
    
    statusBar.hide();

    setTimeout( () => {
      console.log('pass');
      this.navCtrl.push('LoginPage');
     }, 3000);

  }

 
}
