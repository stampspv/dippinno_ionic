import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the EmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-email',
  templateUrl: 'email.html',
})
export class EmailPage {

  @ViewChild("inputEmail") checkEmail;
  @ViewChild("inputPassword") checkPassword;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmailPage');
  }

  checkLogin(){
    if (this.checkEmail.value=="company@dippinno.com" &&
    this.checkPassword.value=="admin") {
      console.log('true');
      this.navCtrl.push("DashboardPage");
    }else{
      console.log('$$$');
      if (this.checkEmail.value!="company@dippinno.com"){
        this.alertCtrl.create({
          title: "Try again",
          subTitle: this.checkEmail.value + " Email not found.",
          buttons: ["ok"]
        }).present();
      }
      else if (this.checkPassword.value!="admin"){
        this.alertCtrl.create({
          title: "Try again",
          subTitle: "Password uncorrect.",
          buttons: ["ok"]
        }).present();
      }
      
    }
  }

}
