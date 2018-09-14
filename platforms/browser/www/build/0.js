webpackJsonp([0],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, Bar, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Bar = Bar;
        this.http = http;
        this.companyName = '';
        this.msg = "";
        this.btnLoginhide = false;
        Bar.show();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad LoginPage');
        this.btnLoginhide = !this.btnLoginhide;
    };
    LoginPage.prototype.checkLogin = function () {
        var _this = this;
        this.msg = 'Loading';
        this.btnLoginhide = !this.btnLoginhide;
        this.http.post('http://dippinno.hr:8000/api/apiCheckCompanyExist.is', { 'name': this.companyName }, {})
            .then(function (data) {
            // ต่อ API ได้
            var jsonobject = JSON.parse(data.data);
            var findCompany = jsonobject['success'];
            console.log(findCompany);
            if (findCompany == true) {
                _this.msg = 'หาเจอ ทำต่อไป';
            }
            else {
                _this.msg = 'That doesn\'t look like a valid Dippinno domain.';
                _this.btnLoginhide = !_this.btnLoginhide;
            }
        })
            .catch(function (error) {
            // ต่อ API ไม่ได้
            _this.btnLoginhide = !_this.btnLoginhide;
            _this.msg = error.error;
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/kanapos/Documents/work4/Project/dippinno_ionic2/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton *navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg-login">\n  <div text-center>\n      <img id="Logo" src="assets/imgs/Human.png" width=50% style="margin-top:60px;" > \n  </div>\n\n  <ion-list >\n    <ion-item id="inputCompany">\n      <!-- <ion-label > Company </ion-label> -->\n      <ion-input text-center type="text" value="" placeholder="Company" [(ngModel)]="companyName"></ion-input>\n    </ion-item>\n    <p text-center style="color: whitesmoke">.dippinno.com</p>\n    <div>\n      <button ion-button id="button-login" (click)="checkLogin()" *ngIf="btnLoginhide">Next</button>\n    </div>\n    <div class="msg" text-center>\n      <p>{{msg}}</p>\n    </div>\n\n  </ion-list>\n    \n</ion-content>\n\n\n<style type="text/css">\n  .bg-login{\n    background-image: linear-gradient(45deg, #ea6c6e 0%, #f6bd74 100%) !important;\n  }\n\n  </style>\n\n'/*ion-inline-end:"/Users/kanapos/Documents/work4/Project/dippinno_ionic2/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=0.js.map