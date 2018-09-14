import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP } from '@ionic-native/http';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public companyName = '';
  public msg = "";
  public btnLoginhide:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private Bar: StatusBar,private http: HTTP) {
    Bar.show();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
    this.btnLoginhide = !this.btnLoginhide;
  }

  checkLogin(){
    this.msg = 'Loading';
    this.btnLoginhide = !this.btnLoginhide;
    this.http.post('http://dippinno.hr:8000/api/apiCheckCompanyExist.is', {'name':this.companyName}, {})
      .then(data => {
        // ต่อ API ได้
        var jsonobject = JSON.parse(data.data)
        var findCompany = jsonobject['success'];
        console.log(findCompany);
        if (findCompany == true){ // หาบริษัทเจอ
          this.msg = 'หาเจอ ทำต่อไป';
        }else{
          this.msg = 'That doesn\'t look like a valid Dippinno domain.';
          this.btnLoginhide = !this.btnLoginhide;
        }
      })
      .catch(error => {
        // ต่อ API ไม่ได้
        this.btnLoginhide = !this.btnLoginhide;
        this.msg = error.error;
      });
  }

}
