webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-side-menu></app-side-menu>\n<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n\n<div id=\"burger\" [ngClass]=\"{'open' : sideMenuIsOpen}\" (click)=\"toggleSideMenu()\"><span></span></div>\n<!-- <app-footer></app-footer> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  width: calc(100% - 300px);\n  float: right;\n  min-height: 100vh; }\n\n@media only screen and (max-width: 669px) {\n  .content {\n    width: 100%; }\n  #burger {\n    z-index: 2;\n    position: fixed;\n    top: 8px;\n    right: 8px;\n    width: 50px;\n    height: 50px; }\n    #burger span {\n      width: calc(100% - 15px);\n      height: 7.5px;\n      background: #ee4649;\n      position: absolute;\n      top: calc(50% - 3.75px);\n      left: 7.5px;\n      border-radius: 2px;\n      transition: background .15s .15s ease; }\n    #burger span::before {\n      content: \"\";\n      position: inherit;\n      background: #ee4649;\n      height: inherit;\n      width: 100%;\n      border-radius: inherit;\n      top: -13px;\n      transition: top 250ms 250ms ease,-webkit-transform 250ms ease;\n      transition: transform 250ms ease,top 250ms 250ms ease;\n      transition: transform 250ms ease,top 250ms 250ms ease,-webkit-transform 250ms ease; }\n    #burger span::after {\n      content: \"\";\n      position: inherit;\n      background: #ee4649;\n      height: inherit;\n      width: 100%;\n      border-radius: inherit;\n      top: 13px;\n      transition: top 250ms 250ms ease,-webkit-transform 250ms ease;\n      transition: transform 250ms ease,top 250ms 250ms ease;\n      transition: transform 250ms ease,top 250ms 250ms ease,-webkit-transform 250ms ease; }\n  #burger.open span {\n    background: transparent; }\n  #burger.open span::before {\n    top: 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    transition: top 250ms ease,-webkit-transform 250ms 250ms ease;\n    transition: top 250ms ease,transform 250ms 250ms ease;\n    transition: top 250ms ease,transform 250ms 250ms ease,-webkit-transform 250ms 250ms ease; }\n  #burger.open span::after {\n    top: 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    transition: top 250ms ease,-webkit-transform 250ms 250ms ease;\n    transition: top 250ms ease,transform 250ms 250ms ease;\n    transition: top 250ms ease,transform 250ms 250ms ease,-webkit-transform 250ms 250ms ease; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toggle_side_menu_toggle_side_menu_service__ = __webpack_require__("../../../../../src/app/services/toggle-side-menu/toggle-side-menu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppComponent = (function () {
    /**
     * Constructor
     * @param {ToggleSideMenuService} _toggleSideMenuService
     */
    function AppComponent(_toggleSideMenuService) {
        this._toggleSideMenuService = _toggleSideMenuService;
        // Subscribe to side menu toggle service
        this._subscribeToToggle();
    }
    /**
     * Subscribe to sideMenuToggle
     * @private
     */
    AppComponent.prototype._subscribeToToggle = function () {
        var _this = this;
        this._toggleSideMenuService.sideMenuIsOpen.subscribe(function (sideMenuIsOpen) {
            _this.sideMenuIsOpen = sideMenuIsOpen;
        });
    };
    /**
     * Toggle side menu
     */
    AppComponent.prototype.toggleSideMenu = function () {
        this._toggleSideMenuService.toggleSideMenu();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__services_toggle_side_menu_toggle_side_menu_service__["a" /* ToggleSideMenuService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_toggle_side_menu_toggle_side_menu_service__["a" /* ToggleSideMenuService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_side_menu_side_menu_component__ = __webpack_require__("../../../../../src/app/components/side-menu/side-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/pages/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_privacy_policy_privacy_policy_component__ = __webpack_require__("../../../../../src/app/pages/privacy-policy/privacy-policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_how_to_play_how_to_play_component__ = __webpack_require__("../../../../../src/app/pages/how-to-play/how-to-play.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_us_about_us_component__ = __webpack_require__("../../../../../src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_toggle_side_menu_toggle_side_menu_service__ = __webpack_require__("../../../../../src/app/services/toggle-side-menu/toggle-side-menu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Core Angular modules
 */




/**
 * Components
 */

/**
 * Pages
 */




/**
 * Side menu service
 */

/**
 * App routes
 * @type {[{path: string; component: WelcomeComponent} , {path: string; component: HowToPlayComponent} , {path: string; component: PrivacyPolicyComponent} , {path: string; component: AboutUsComponent}]}
 */
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'how-to-play', component: __WEBPACK_IMPORTED_MODULE_7__pages_how_to_play_how_to_play_component__["a" /* HowToPlayComponent */] },
    { path: 'privacy-policy', component: __WEBPACK_IMPORTED_MODULE_6__pages_privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */] },
    { path: 'about-us', component: __WEBPACK_IMPORTED_MODULE_8__pages_about_us_about_us_component__["a" /* AboutUsComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_side_menu_side_menu_component__["a" /* SideMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_how_to_play_how_to_play_component__["a" /* HowToPlayComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_us_about_us_component__["a" /* AboutUsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_toggle_side_menu_toggle_side_menu_service__["a" /* ToggleSideMenuService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/side-menu/side-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"side-menu\" [ngClass]=\"{'open': open}\">\n  <!-- Logo, title and subtitle -->\n  <div (click)=\"toggleSideMenu()\" class=\"flex-item logo\" routerLink=\"/\">\n    <img src=\"../../../assets/img/logo.svg\" />\n  </div>\n\n  <!-- Button -->\n  <div (click)=\"toggleSideMenu()\" class=\"flex-item button how-to-play\" routerLink=\"/how-to-play\" routerLinkActive=\"active\">\n    <span>how to play</span>\n  </div>\n\n  <!-- Button -->\n  <div (click)=\"toggleSideMenu()\" class=\"flex-item button privacy-policy\" routerLink=\"/privacy-policy\" routerLinkActive=\"active\">\n    <span>privacy policy</span>\n  </div>\n\n  <!-- Button -->\n  <div (click)=\"toggleSideMenu()\" class=\"flex-item button contact-us\" routerLink=\"/about-us\" routerLinkActive=\"active\">\n    <span>about us</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/side-menu/side-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-menu {\n  width: 300px;\n  height: 100vh;\n  display: flex;\n  background: #ee4649;\n  color: white;\n  float: left;\n  position: fixed;\n  top: 0;\n  left: 0;\n  transition: 0.25s ease;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n  .side-menu .flex-item {\n    -ms-flex: 1 1 auto;\n        flex: 1 1 auto;\n    justify-content: center;\n    text-align: center;\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -moz-box-flex: 1;\n    -ms-flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -moz-box-pack: center;\n    -ms-flex-pack: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n\n.flex-item:hover {\n  cursor: pointer; }\n\n.button {\n  font-family: 'Changa One', \"Helvetica Neue\", Helvetica Neue, Arial, sans-serif;\n  font-size: 21px;\n  transition: .25s ease; }\n  .button span {\n    transition: .15s ease; }\n\n.button:hover span {\n  -webkit-transform: scale3d(1.05, 1.05, 1);\n          transform: scale3d(1.05, 1.05, 1); }\n\n.button.active {\n  background: rgba(0, 0, 0, 0.08); }\n\n.logo img {\n  height: 180px; }\n\n.logo .title {\n  font-family: 'Changa One', 'Helvetica Neue', Helvetica Neue, Arial, sans-serif; }\n\n.logo .subtitle {\n  font-style: italic; }\n\n@media only screen and (max-width: 669px) {\n  .side-menu {\n    width: calc(100% - 66px);\n    z-index: 1;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  .side-menu.open {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/side-menu/side-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toggle_side_menu_toggle_side_menu_service__ = __webpack_require__("../../../../../src/app/services/toggle-side-menu/toggle-side-menu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SideMenuComponent = (function () {
    function SideMenuComponent(_toggleSideMenuService) {
        this._toggleSideMenuService = _toggleSideMenuService;
        // Subscribe to side menu toggle service
        this._subscribeToToggle();
    }
    /**
     * Subscribe to sideMenuToggle
     * @private
     */
    SideMenuComponent.prototype._subscribeToToggle = function () {
        var _this = this;
        this._toggleSideMenuService.sideMenuIsOpen.subscribe(function (sideMenuIsOpen) {
            _this.open = sideMenuIsOpen;
        });
    };
    /**
     * Toggle side menu
     */
    SideMenuComponent.prototype.toggleSideMenu = function () {
        this._toggleSideMenuService.toggleSideMenu();
    };
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    SideMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-side-menu',
            template: __webpack_require__("../../../../../src/app/components/side-menu/side-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/side-menu/side-menu.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__services_toggle_side_menu_toggle_side_menu_service__["a" /* ToggleSideMenuService */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_toggle_side_menu_toggle_side_menu_service__["a" /* ToggleSideMenuService */]])
    ], SideMenuComponent);
    return SideMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <h1>About Us</h1>\n  <blockquote>We are committed to creating the best bite-size basketball fantasy experience possible</blockquote>\n\n  <!-- Social -->\n  <h3>Social</h3>\n  <ul>\n    <li>\n      <a target=\"_blank\" href=\"https://www.instagram.com/hoopbot/\">\n        <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>Instagram\n      </a>\n    </li>\n    <li>\n      <a target=\"_blank\" href=\"https://www.youtube.com/user/hoopbot\">\n        <i class=\"fa fa-youtube-play\" aria-hidden=\"true\"></i>YouTube\n      </a>\n    </li>\n    <li>\n      <a target=\"_blank\" href=\"https://www.facebook.com/hoopbot\">\n        <i class=\"fa fa-facebook-square\" aria-hidden=\"true\"></i>Facebook\n      </a>\n    </li>\n    <li>\n      <a target=\"_blank\" href=\"https://twitter.com/hoopbot\">\n        <i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i>Twitter\n      </a>\n    </li>\n  </ul>\n\n  <!-- Contact -->\n  <h3>Contact</h3>\n  <p>hoopbot@gmail.com</p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/about-us/about-us.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("../../../../../src/app/pages/about-us/about-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/how-to-play/how-to-play.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <h1>How to Play</h1>\n  <blockquote>Get ahead on the leaderboard with these helpful tips</blockquote>\n\n  <!-- Predicting games -->\n  <h3>1. Predicting games</h3>\n  <p>Simply tap on the team you think is going to win. To remove your prediction, tap on the same team again. To change your prediction, tap on the other team. That's all there is to it.</p>\n\n  <!-- How scores are calculated -->\n  <h3>2. How scores are calculated</h3>\n  <p>For each game, all predictions are put into 'the pot', which is then split amongst the winners.</p>\n  <h5>Example 1</h5>\n  <p class=\"italic\">If 100 players make a game prediction, and 80 players get it right, they will each be rewarded 1.25 points (100 divided by 80).</p>\n  <h5>Example 2</h5>\n  <p class=\"italic\">If 100 players make a game prediction, and only 20 players get it right, they will each be rewarded 5 points (100 divided by 20).</p>\n  <p>This means that, in some cases, you will be better off placing your prediction on the 'underdog'. <b>Make sure you click 'View Prediction Stats' to take advantage of this.</b></p>\n  <p>You do not lose any points for getting a prediction wrong, so it is recommended that you make a prediction on every game!</p>\n\n  <!-- Choosing a hero -->\n  <h3>3. Choosing a hero</h3>\n  <p>Your hero does not affect your score, but is how you are seen on the leaderboard. <b>You will automatically unlock new heroes the more you win</b>. To change your hero at any time, head to your account tab - this change will take effect on the leaderboard immediately.</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/how-to-play/how-to-play.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/how-to-play/how-to-play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowToPlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowToPlayComponent = (function () {
    function HowToPlayComponent() {
    }
    HowToPlayComponent.prototype.ngOnInit = function () {
    };
    HowToPlayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-how-to-play',
            template: __webpack_require__("../../../../../src/app/pages/how-to-play/how-to-play.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/how-to-play/how-to-play.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HowToPlayComponent);
    return HowToPlayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/privacy-policy/privacy-policy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <h1>Privacy Policy</h1>\n  <blockquote>This describes the ways we collect, store, use, and manage the information you provide</blockquote>\n  <p class=\"italic half-opacity\">Last updated: Saturday, 8th November 2017</p>\n\n  <!-- Sharing data -->\n  <h3>1. Sharing data</h3>\n  <p>We do not share your personal information with anyone, but every players' game statistics are added to a global leadboard</p>\n  <h5>Facebook login</h5>\n  <p>We do not post to Facebook. We do not share your email or any account information provided to us by Facebook - this is used for login purposes only.</p>\n\n  <!-- Advertisements -->\n  <h5>Advertisements</h5>\n  <p>We do not share your personal information with any third-parties. We may, however, block unsuitable advertiser content if you are under 18.</p>\n\n  <!-- Game statistics -->\n  <h5>Game statistics</h5>\n  <p>We share game data on a global leaderboard which is viewable by the public. This includes your username, selected 'hero', your score, your game prediction wins and losses tally, your game prediction win percentage, your highest win streak, current win streak, accolades and any other data related to accruing a score within the game.</p>\n  <p><b>We do not recommend using your full name as your username.</b></p>\n\n  <!-- Storing data -->\n  <h3>2. Storing data</h3>\n  <p>Hoopbot only stores data it needs to function properly, which will be wiped if you choose to delete the app. This is a very </p>\n  <h5>Authentication</h5>\n  <p>Hoopbot saves only the authentication information it needs to so that you don't have to keep logging in on the device you've used to install the app, in accordance with OAuth authentication policy, which you can read <a href=\"https://docs.apigee.com/api-services/content/oauthv2-policy\" target=\"_blank\">here</a>.</p>\n  <h5>Offline experience</h5>\n  <p>In order to provide (limited) offline functionality, Hoopbot may store some game data on your device, which is updated when you are back online. This includes: the daily schedule, Hoopbot leaderboards, basketball standings and your game data statistics. This does not include any rich media such as images or videos.</p>\n\n  <!-- Deleting data -->\n  <h3>3. Deleting data</h3>\n  <p>We reserve the right to keep any game statistics data you have accrued while playing Hoopbot. To delete your account, please <a routerLink=\"/about-us\">contact us.</a></p>\n\n  <!-- Changes -->\n  <h3>Changes to this Privacy Policy</h3>\n  <p>We will occasionally update this Privacy Policy to reflect changes in the law, our data collection and use practices, the features of our Service, or advances in technology. When we post changes to this Privacy Policy, we will revise the “last updated” date at the top of this Privacy Policy. You should regularly check for the most recent version, which is the version that applies. If we make any material changes to this Privacy Policy, we will notify you of the changes by reasonable means, which could include notifications through the Services or via email. Please review the changes carefully. Your continued use of the Services following the posting of changes to this policy will mean you consent to and accept those changes. If you do not consent to such changes you can delete your account by following the instructions under Settings.</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/privacy-policy/privacy-policy.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/privacy-policy/privacy-policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyPolicyComponent = (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-privacy-policy',
            template: __webpack_require__("../../../../../src/app/pages/privacy-policy/privacy-policy.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/privacy-policy/privacy-policy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome-page\">\n  <h1>Hoopbot</h1>\n  <h2>Predict NBA Games</h2>\n  <p>bite-sized fantasy basketball</p>\n  <div class=\"download-icons\">\n    <div class=\"android\" (click)=\"openAndroid()\">\n      <img src=\"../../../assets/img/badge-google-play.svg\" />\n    </div>\n    <div class=\"ios\" (click)=\"openiOS()\">\n      <img src=\"../../../assets/img/badge-app-store.svg\" />\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/welcome/welcome.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".welcome-page {\n  width: 100%;\n  text-align: center;\n  padding: 32px 0; }\n\nh1 {\n  font-family: 'Changa One', \"Helvetica Neue\", Helvetica Neue, Arial, sans-serif;\n  font-size: 32px; }\n\nh2 {\n  margin-top: 0;\n  font-style: italic; }\n\n.download-icons {\n  max-width: 600px;\n  max-height: 200px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto; }\n  .download-icons div {\n    padding: 16px;\n    -webkit-box-flex: 1;\n        -ms-flex: auto;\n            flex: auto;\n    width: 100%; }\n    .download-icons div img {\n      width: 100%;\n      height: 100%; }\n  .download-icons .android:hover {\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    /**
     * Open Google Play store link
     */
    WelcomeComponent.prototype.openAndroid = function () {
        window.open('https://play.google.com/store/apps/details?id=neverland.hoopbot');
    };
    /**
     * Open iOS App store link
     */
    WelcomeComponent.prototype.openiOS = function () {
        window.open('https://itunes.apple.com/us/app/hoopbot/id1313728649');
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/pages/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/toggle-side-menu/toggle-side-menu.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleSideMenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleSideMenuService = (function () {
    /**
     * Constructor
     */
    function ToggleSideMenuService() {
        this._sideMenuIsOpen = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    /**
     * Toggle side menu
     */
    ToggleSideMenuService.prototype.toggleSideMenu = function () {
        if (this._sideMenuIsOpen.getValue() === true) {
            this._sideMenuIsOpen.next(false);
        }
        else {
            this._sideMenuIsOpen.next(true);
        }
    };
    Object.defineProperty(ToggleSideMenuService.prototype, "sideMenuIsOpen", {
        /**
         * Getter for sideMenuIsOpen boolean
         * @returns {BehaviorSubject<boolean>}
         */
        get: function () {
            return this._sideMenuIsOpen;
        },
        enumerable: true,
        configurable: true
    });
    ToggleSideMenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ToggleSideMenuService);
    return ToggleSideMenuService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map