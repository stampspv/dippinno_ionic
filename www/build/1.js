webpackJsonp([1],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailPageModule", function() { return EmailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmailPageModule = /** @class */ (function () {
    function EmailPageModule() {
    }
    EmailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__email__["a" /* EmailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__email__["a" /* EmailPage */]),
            ],
        })
    ], EmailPageModule);
    return EmailPageModule;
}());

//# sourceMappingURL=email.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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
 * Generated class for the EmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailPage = /** @class */ (function () {
    function EmailPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    EmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmailPage');
    };
    EmailPage.prototype.checkLogin = function () {
        if (this.checkEmail.value == "company@dippinno.com" &&
            this.checkPassword.value == "admin") {
            console.log('true');
            this.navCtrl.push("DashboardPage");
        }
        else {
            console.log('$$$');
            if (this.checkEmail.value != "company@dippinno.com") {
                this.alertCtrl.create({
                    title: "Try again",
                    subTitle: this.checkEmail.value + " Email not found.",
                    buttons: ["ok"]
                }).present();
            }
            else if (this.checkPassword.value != "admin") {
                this.alertCtrl.create({
                    title: "Try again",
                    subTitle: "Password uncorrect.",
                    buttons: ["ok"]
                }).present();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("inputEmail"),
        __metadata("design:type", Object)
    ], EmailPage.prototype, "checkEmail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("inputPassword"),
        __metadata("design:type", Object)
    ], EmailPage.prototype, "checkPassword", void 0);
    EmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-email',template:/*ion-inline-start:"/Users/kanapos/Documents/work4/Project/dippinno_ionic2/src/pages/email/email.html"*/'<!--\n  Generated template for the EmailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar hideBackButton *navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="email">\n  <div text-center>\n      <img src="assets/imgs/Human.png" width=50% style="margin-top:60px;" > \n  </div>\n\n  <ion-list>\n    <ion-item id="inputEmail">\n      <ion-input #inputEmail type="email" value="" placeholder="Email"></ion-input>\n    </ion-item>\n\n    <ion-item id="inputPassword">\n        <ion-input #inputPassword type="password" value="" placeholder="Password"></ion-input>\n      </ion-item>\n  </ion-list>\n\n  <div>\n    <button (click)="checkLogin()" ion-button id="btn-confirm">Confirm</button>\n  </div>\n    \n</ion-content>\n\n\n<style type="text/css">\n  .email{\n    background-image: linear-gradient(45deg, #ea6c6e 0%, #f6bd74 100%) !important;\n  }\n\n  </style>\n'/*ion-inline-end:"/Users/kanapos/Documents/work4/Project/dippinno_ionic2/src/pages/email/email.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EmailPage);
    return EmailPage;
}());

//# sourceMappingURL=email.js.map

/***/ })

});
//# sourceMappingURL=1.js.map