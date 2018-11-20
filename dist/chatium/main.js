(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .navbar-wrapper {\n  position: absolute;\n  padding-top: 56px;\n  height: 100%;\n  width: 300px;\n  box-shadow: 1px 1px 5px #444;\n  background-color: white;\n  top: 0;\n  z-index: -1; }\n\n::ng-deep .navbar-content-wrapper {\n  position: absolute;\n  padding-top: 56px;\n  padding-left: 300px;\n  background-color: #eee;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  z-index: -2; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeW1iNGQvRGV2L2NoYXRpdW0vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc3ltYjRkL0Rldi9jaGF0aXVtL3NyYy9hcHAvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxtQkFBa0I7RUFDbEIsa0JDTHdCO0VETXhCLGFBQVk7RUFDWixhQ05pQjtFRE9qQiw2QkFBNEI7RUFDNUIsd0JBQXVCO0VBQ3ZCLE9BQU07RUFDTixZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsa0JDaEJ3QjtFRGlCeEIsb0JDaEJpQjtFRGlCakIsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixZQUFXO0VBQ1gsT0FBTTtFQUNOLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ3VzdG9tIGZvcm0gY2xhc2VzXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG46Om5nLWRlZXAgLm5hdmJhci13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcGFkZGluZy10b3A6ICRuYXZiYXItaGVpZ2h0O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogJHNpZGViYXItd2lkdGg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzQ0NDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogLTE7XG59XG5cbjo6bmctZGVlcCAubmF2YmFyLWNvbnRlbnQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmctdG9wOiAkbmF2YmFyLWhlaWdodDtcbiAgICBwYWRkaW5nLWxlZnQ6ICRzaWRlYmFyLXdpZHRoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAtMjtcbn1cblxuIiwiJG5hdmJhci1oZWlnaHQ6IDQwcHgrOHB4KzhweDsgLy9IZWlnaHQgKyBwYWRkaW5ndG9wICsgcGFkZGluZ2JvdHRvbVxuJHNpZGViYXItd2lkdGg6IDMwMHB4OyJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_session_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/session-service.service */ "./src/app/services/session-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, sessionService) {
        this.router = router;
        this.sessionService = sessionService;
        this.title = 'chatium';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.verifySession();
        /*this.router.events.subscribe( (val) => {
          this.verifySession();
        });*/
    };
    AppComponent.prototype.verifySession = function () {
        var _this = this;
        this.sessionService.getUserInfo().subscribe(function (data) {
            console.log("Data: ", data);
            if (data && data.state === 'OFFLINE') {
                _this.router.navigate(['/login']);
            }
            else if (data && data.state == 'ONLINE' && data.setup == true) {
                if (_this.router.url === '/login' || _this.router.url === '/setup')
                    _this.router.navigate(['/home']);
            }
            else if (data && data.state == 'ONLINE' && data.setup == false) {
                _this.router.navigate(['/setup']);
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_session_service_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _services_session_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/session-service.service */ "./src/app/services/session-service.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _components_setup_user_setup_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/setup-user/setup-user.component */ "./src/app/components/setup-user/setup-user.component.ts");
/* harmony import */ var _services_country_language_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/country-language.service */ "./src/app/services/country-language.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/shared/sidebar/sidebar.component */ "./src/app/components/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _components_connectpeople_connectpeople_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/connectpeople/connectpeople.component */ "./src/app/components/connectpeople/connectpeople.component.ts");
/* harmony import */ var _pipes_friends_filter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/friends-filter.pipe */ "./src/app/pipes/friends-filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_setup_user_setup_user_component__WEBPACK_IMPORTED_MODULE_11__["SetupUserComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _components_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["SidebarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_18__["ChatComponent"],
                _components_connectpeople_connectpeople_component__WEBPACK_IMPORTED_MODULE_19__["ConnectpeopleComponent"],
                _pipes_friends_filter_pipe__WEBPACK_IMPORTED_MODULE_20__["FriendsFilterPipe"],
                _components_connectpeople_connectpeople_component__WEBPACK_IMPORTED_MODULE_19__["DialogOverviewExampleDialog"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _core_material_module__WEBPACK_IMPORTED_MODULE_8__["CustomMaterialModule"]
            ],
            providers: [
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
                _services_session_service_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"],
                _services_chat_service__WEBPACK_IMPORTED_MODULE_10__["ChatService"],
                _services_country_language_service__WEBPACK_IMPORTED_MODULE_12__["CountryLanguageService"],
                _services_search_service__WEBPACK_IMPORTED_MODULE_13__["SearchService"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [
                _components_connectpeople_connectpeople_component__WEBPACK_IMPORTED_MODULE_19__["DialogOverviewExampleDialog"]
            ],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_setup_user_setup_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/setup-user/setup-user.component */ "./src/app/components/setup-user/setup-user.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_connectpeople_connectpeople_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/connectpeople/connectpeople.component */ "./src/app/components/connectpeople/connectpeople.component.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'setup', component: _components_setup_user_setup_user_component__WEBPACK_IMPORTED_MODULE_3__["SetupUserComponent"] },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        children: [
            { path: 'chat/:type/:id', component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_7__["ChatComponent"] },
            { path: 'connect', component: _components_connectpeople_connectpeople_component__WEBPACK_IMPORTED_MODULE_6__["ConnectpeopleComponent"] },
            { path: '**', component: _components_connectpeople_connectpeople_component__WEBPACK_IMPORTED_MODULE_6__["ConnectpeopleComponent"] }
        ]
    },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-window\">\n  <div class=\"user-secccion sticky-top\">\n    <mat-card class=\"animated fadeIn fast\">\n      <mat-card-header>\n        <img mat-card-avatar [src]=\" mockup_user.profile_pic\" *ngIf=\"chatType == 'user'\">\n        <mat-card-title>\n          <!--<i *ngIf=\"mockup_user.status\" class=\"fas fa-circle fa-xs mx-1\" style=\"color:#2EFE2E\"></i>\n          <i *ngIf=\"!mockup_user.status\" class=\"fas fa-circle fa-xs mx-1\" style=\"color:#585858\"></i>-->\n          {{chatTitle}}\n        </mat-card-title>\n      </mat-card-header>\n    </mat-card>\n  </div>\n\n  <div #messagesContainer class=\"messages-section\">\n\n    <!--Diseño para mensajes recibidos 1-1-->\n\n    <span *ngFor=\"let mensaje of mensajes; let last = last\">\n      <div class=\"received-message message-text\" *ngIf=\"chatType == 'user' && mensaje.emisor == friendId\">\n        <mat-card>\n          {{mensaje.text}}\n        </mat-card>\n      </div>\n\n\n      <!--Diseño mensaje recibidos rooms-->\n      <div class=\"received-message message-text\" *ngIf=\"chatType == 'room' && mensaje.emisor != userId\">\n      <mat-card>\n        <mat-card-subtitle>\n          <strong>\n            {{mensaje.emisorName ? mensaje.emisorName : mensaje.emisor}}\n          </strong>\n          <!--{{new Date() | date :medium}}-->\n          {{mensaje.date | date :medium}}\n        </mat-card-subtitle>\n        {{mensaje.text}}\n      </mat-card>\n    </div>\n\n\n      <!--Diseño para mensaje enviado-->\n      <div class=\"sent-message message-text\" *ngIf=\"mensaje.emisor == userId\">\n        <mat-card>\n          {{mensaje.text}}\n        </mat-card>\n      </div>\n      <span *ngIf=\"last\">{{scrollDownChatContainer()}}</span>\n    </span>\n  </div>\n\n  <div class=\"input-form\">\n    <div class=\"input-area\">\n      <form [formGroup]=\"forma\">\n        <textarea (keyup.enter)=\"enviar()\" placeholder=\"Escribe aqui tu mensaje\" class=\"mat-input mt-3\" formControlName=\"mensaje\"></textarea>\n      </form>\n    </div>\n    <div class=\"send-button-area\">\n      <button mat-fab color='primary' (click)=\" enviar()\">\n        <i class=\"fas fa-paper-plane fa-lg \"></i>\n        <!--\n          <mat-icon>send</mat-icon>\n          -->\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/chat/chat.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body::-webkit-scrollbar {\n  width: 0.5em; }\n\nbody::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); }\n\nbody::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  outline: 1px solid slategrey; }\n\n.chat-window {\n  width: 100%;\n  height: 100%;\n  /*background-color: green;*/ }\n\n.user-secccion {\n  width: 100%;\n  max-height: 10%; }\n\n.messages-section {\n  padding: 1rem;\n  background-color: #CBF5FF;\n  width: 100%;\n  height: 80%;\n  overflow: auto; }\n\n.message-text {\n  font-size: 11pt;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; }\n\n.received-message {\n  margin-bottom: 1rem;\n  margin-top: 1rem;\n  max-width: 70%;\n  min-width: 10%; }\n\n.received-message mat-card {\n    background-color: #EFFBEF; }\n\n.sent-message {\n  margin-top: 1rem;\n  max-width: 70%;\n  margin-left: 33.3%; }\n\n.sent-message mat-card {\n    background-color: #CED8F6; }\n\n.input-form {\n  width: 100%;\n  height: 10%;\n  bottom: 0;\n  background-color: #EFEFEF;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start; }\n\n.input-area {\n  width: calc(100% - 100px);\n  /*height: 100%;*/\n  /*background-color: chartreuse;*/\n  /*display: inline-block;*/ }\n\n.send-button-area {\n  width: 100px;\n  height: 100%;\n  /*background-color: aqua;*/\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\ntextarea {\n  resize: none; }\n\n.mat-input {\n  margin-left: 10px;\n  width: 100%;\n  height: 39px;\n  border: none;\n  border-bottom: 1px;\n  border-bottom-color: #3f51b5;\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\n.mat-form-field {\n  display: inline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeW1iNGQvRGV2L2NoYXRpdW0vc3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVksRUFDZjs7QUFFRDtFQUNJLHFEQUFpRCxFQUNwRDs7QUFFRDtFQUNFLDJCQUEwQjtFQUMxQiw2QkFBNEIsRUFDN0I7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsYUFBWTtFQUNaLDRCQUE0QixFQUMvQjs7QUFHRDtFQUNJLFlBQVc7RUFDWCxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGNBQWE7RUFDYiwwQkFBeUI7RUFDekIsWUFBVztFQUNYLFlBQVc7RUFDWCxlQUFjLEVBQ2pCOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZix1SEFDSixFQUFDOztBQUNEO0VBQ0ksb0JBQW1CO0VBQ25CLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsZUFBYyxFQUlqQjs7QUFSRDtJQU1RLDBCQUF3QixFQUMzQjs7QUFHTDtFQUNJLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsbUJBQWtCLEVBS3JCOztBQVJEO0lBS1EsMEJBQXlCLEVBRTVCOztBQUdMO0VBQ0ksWUFBVztFQUNYLFlBQVc7RUFDWCxVQUFTO0VBQ1QsMEJBQXlCO0VBQ3pCLGNBQWE7RUFDYiw0QkFBMkI7RUFDM0Isd0JBQXVCLEVBQzFCOztBQUdEO0VBQ0ksMEJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsMEJBQTBCLEVBRTdCOztBQUVEO0VBQ0ksYUFBWTtFQUNaLGFBQVk7RUFDWiwyQkFBMkI7RUFDM0IsY0FBWTtFQUNaLG9CQUFtQjtFQUNuQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFDSSxhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxrQkFBaUI7RUFDakIsWUFBVztFQUNYLGFBQVk7RUFDWixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLDZCQUE0QjtFQUM1QixtQkFBa0I7RUFDbEIsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixnREFBK0MsRUFLbEQ7O0FBR0Q7RUFDSSxnQkFDSixFQUFDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDAuNWVtO1xufVxuIFxuYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XG59XG4gXG5ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xuICBvdXRsaW5lOiAxcHggc29saWQgc2xhdGVncmV5O1xufVxuXG4uY2hhdC13aW5kb3d7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47Ki9cbn1cblxuXG4udXNlci1zZWNjY2lvbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMCU7XG59XG5cbi5tZXNzYWdlcy1zZWN0aW9ue1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NCRjVGRjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1lc3NhZ2UtdGV4dHtcbiAgICBmb250LXNpemU6IDExcHQ7XG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZlxufVxuLnJlY2VpdmVkLW1lc3NhZ2V7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1heC13aWR0aDogNzAlO1xuICAgIG1pbi13aWR0aDogMTAlO1xuICAgIG1hdC1jYXJke1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFRkZCRUY7ICAgICAgICBcbiAgICB9XG59XG5cbi5zZW50LW1lc3NhZ2V7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBtYXJnaW4tbGVmdDogMzMuMyU7ICAgXG4gICAgbWF0LWNhcmR7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDRUQ4RjY7XG4gICAgICAgIFxuICAgIH1cbn1cblxuLmlucHV0LWZvcm17XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgYm90dG9tOiAwOyAgICAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVGO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG5cbi5pbnB1dC1hcmVhe1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gICAgLypoZWlnaHQ6IDEwMCU7Ki9cbiAgICAvKmJhY2tncm91bmQtY29sb3I6IGNoYXJ0cmV1c2U7Ki9cbiAgICAvKmRpc3BsYXk6IGlubGluZS1ibG9jazsqL1xuICAgIFxufVxuXG4uc2VuZC1idXR0b24tYXJlYXtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogYXF1YTsqL1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xufVxuLm1hdC1pbnB1dHsgXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7ICAgIFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzlweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMzZjUxYjU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTI1O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7XG5cbiAgICA6Zm9jdXN7XG4gICAgICAgXG4gICAgfVxufVxuXG5cbi5tYXQtZm9ybS1maWVsZHtcbiAgICBkaXNwbGF5OiBpbmxpbmVcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var src_app_services_session_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/session-service.service */ "./src/app/services/session-service.service.ts");
/* harmony import */ var src_app_components_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/shared/sidebar/sidebar.component */ "./src/app/components/shared/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatComponent = /** @class */ (function () {
    function ChatComponent(router, searchService, chatService, routerer, sessionService, sidebarComponent) {
        var _this = this;
        this.router = router;
        this.searchService = searchService;
        this.chatService = chatService;
        this.routerer = routerer;
        this.sessionService = sessionService;
        this.sidebarComponent = sidebarComponent;
        this.previousLoaded = false;
        this.CHAT_TYPES = {
            USER: 'user',
            ROOM: 'room'
        };
        this.chatTitle = "";
        this.mockup_user = {
            name: "User",
            profile_pic: "assets/images/default_profile_pic.png",
            status: true
        };
        this.mensajes = [];
        this.messageReceived = function (msg) {
            if (_this.previousLoaded) {
                _this.mensajes.push(msg);
                console.log("MENSAJES (messageReceived): ", msg);
            }
        };
        this.previousMessages = function (chat) {
            if (chat.messages)
                _this.mensajes = chat.messages;
            console.log(_this.mensajes);
            _this.previousLoaded = true;
        };
    }
    ChatComponent.prototype.scrollDownChatContainer = function () {
        this.messagesContainer.nativeElement.scrollTo(0, this.messagesContainer.nativeElement.scrollHeight + 1000);
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mensajes = [];
        this.userId = this.sessionService.getCookieUserId();
        console.log(this.userId);
        this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'mensaje': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.router.params.subscribe(function (map) {
            if (map.type != _this.CHAT_TYPES.USER && map.type != _this.CHAT_TYPES.ROOM) {
                _this.routerer.navigate(['/home/connect']);
                return;
            }
            _this.chatType = map.type;
            _this.chatService.getConnection().removeEventListener('message received', _this.messageReceived);
            if (map.type == _this.CHAT_TYPES.USER) {
                _this.friendId = map.id;
                _this.searchService.getUserInfoById(map.id).subscribe(function (userInfo) {
                    _this.userInfo = userInfo;
                    _this.chatTitle = userInfo['name'];
                    _this.sessionService.getUserInfo().subscribe(function (user) {
                        //BEGIN CHAT
                        var chatconfig = {
                            type: map.type
                        };
                        chatconfig['ops'] = {
                            emisor: user['_id'],
                            receptor: map.id,
                            receptorName: _this.userInfo.name
                        };
                        if (user['state'] == 'ONLINE') {
                            _this.chatService.getConnection().on('previous messages', _this.previousMessages);
                            _this.chatService.getConnection().on('message received', _this.messageReceived);
                            _this.chatService.beginChat(chatconfig);
                        }
                    });
                });
            }
            else if (map.type == _this.CHAT_TYPES.ROOM) {
                _this.sessionService.getUserInfo().subscribe(function (user) {
                    _this.searchService.getRoomById(map.id).subscribe(function (room) {
                        _this.chatTitle = room['name'];
                        console.log("ROOOM", room);
                        _this.chatService.beginChat({
                            type: map.type,
                            ops: {
                                chatid: room['chatid'],
                                emisor: user['_id'],
                                emisorName: user['name'],
                                roomid: room['_id']
                            }
                        });
                        _this.chatService.getConnection().on('previous messages', _this.previousMessages);
                        _this.chatService.getConnection().on('message received', _this.messageReceived);
                    });
                });
            }
        });
    };
    ChatComponent.prototype.enviar = function () {
        if (this.forma.controls.mensaje.value && this.forma.controls.mensaje.value.trim() != "") {
            this.chatService.sendMessage(this.forma.controls.mensaje.value);
            this.mensajes.push({
                text: this.forma.controls.mensaje.value,
                emisor: this.userId
            });
            console.log("MENSAJES (enviar): ", this.mensajes);
            this.forma.reset();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('messagesContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatComponent.prototype, "messagesContainer", void 0);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            providers: [src_app_components_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]],
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/components/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"],
            src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_session_service_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            src_app_components_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/components/connectpeople/connectpeople.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/connectpeople/connectpeople.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\" [(ngModel)]=\"searchMode\">\n  <mat-button-toggle value=\"users\">Users</mat-button-toggle>\n  <mat-button-toggle value=\"rooms\">Rooms</mat-button-toggle>\n</mat-button-toggle-group>\n<section class=\"connect-search-params\" *ngIf=\"searchMode == 'users'\">\n  <h5>Looking for people with:</h5>\n  <div class=\"row\">\n    <div class=\"col col-xs-3\">\n      <div class=\"form-group\">\n        <mat-form-field class=\"form-field-fullwidth\">\n          <mat-select placeholder=\"Knowledge in\" [(ngModel)]=\"searchParams.nativeLanguage\" (ngModelChange)=\"refreshResults()\">\n            <mat-option *ngFor=\"let language of supportedLanguages\" [value]=\"language.code\">\n              {{language.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col col-xs-3\">\n      <div class=\"form-group\">\n        <mat-form-field class=\"form-field-fullwidth\">\n          <mat-select placeholder=\"Looking to learn\" [(ngModel)]=\"searchParams.learningLanguage\" (ngModelChange)=\"refreshResults()\">\n            <mat-option *ngFor=\"let language of supportedLanguages\" [value]=\"language.code\">\n              {{language.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </div>\n    <div class=\"col col-xs-3\">\n      <div class=\"form-group\">\n        <mat-form-field class=\"form-field-fullwidth\">\n          <mat-select placeholder=\"Gender\" [(ngModel)]=\"searchParams.gender\" (ngModelChange)=\"refreshResults()\">\n            <mat-option *ngFor=\"let gender of GENDERS\" [value]=\"gender.code\">\n              {{gender.name}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"connect-search-params\" *ngIf=\"searchMode == 'rooms'\">\n  <h5>Looking for rooms:</h5>\n  <div class=\"row\">\n    <div class=\"col col-xs-3\">\n      <mat-form-field class=\"form-field-fullwidth\" class=\"roomSearchLangBox\">\n        <mat-select placeholder=\"Room Language\" [(ngModel)]=\"roomSearchParams.langCode\" (ngModelChange)=\"roomRefreshResults()\">\n          <mat-option *ngFor=\"let language of supportedLanguages\" [value]=\"language.code\">\n            {{language.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div class=\"col col-xs-3\">\n      <button mat-raised-button color=\"primary\" (click)=\"openNewRoomDialog()\">Create a new room</button>\n    </div>\n  </div>\n</section>\n<section class=\"connect-search-results\" *ngIf=\"searchMode == 'users'\">\n  <div class=\"row\">\n    <div class=\"suggestion-item col col-md-4\" *ngFor=\"let user of foundUsers\">\n      <div class=\"roundcard\">\n        <div class=\"cover\">\n          <button mat-mini-fab color=\"primary\" title=\"Send message\" routerLink='/home/chat/user/{{user._id}}'>\n            <i class=\"fas fa-comment fa-x2\"></i>\n          </button>\n        </div>\n        <div class=\"userinfo\">\n          <div class=\"userinfo-username\">\n            <h5>{{\n              ((user.name.length > 20)?\n              (user.name | slice:0:20)+'...':user.name) | uppercase\n              }}</h5>\n          </div>\n          <div class=\"row\">\n            <div class=\"userinfo-nativelang col col-xs-6\">\n              <div class=\"row\"><b>Native</b></div>\n              <div class=\"row\">{{\n                countryLanguage.getLanguageByCode(user.languageConfiguration.nativeLanguage).name}}</div>\n            </div>\n            <div class=\"userinfo-learninglang col col-xs-6\">\n              <div class=\"row\"><b>Learning</b></div>\n              <div class=\"row\">{{\n                countryLanguage.getLanguageByCode(user.languageConfiguration.learningLanguage).name}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"connect-search-results\" *ngIf=\"searchMode == 'rooms'\">\n  <div class=\"container\" style=\"text-align: center\" *ngIf=\"!foundRooms\">\n    <h6>Select a language to search rooms</h6>\n  </div>\n  <div class=\"container\" style=\"text-align: center\" *ngIf=\"foundRooms\">\n      <div class=\"roomResultItem\">\n          <button class=\"headerButton\" mat-stroked-button disabled>\n            <div class=\"row\">\n                <div class=\"rightSeparator\" style=\"width: 25%\">No. of members</div>\n\n                <div class=\"rightSeparator\" style=\"width: 60%\">Name</div>\n\n                <div class=\"\" style=\"width: 15%\">Language</div>\n            </div>\n          </button>\n      </div>\n      <div class=\"roomResultItem roomItemBody\" *ngFor=\"let room of foundRooms\">\n          <button mat-raised-button (click)=\"joinRoom(room._id)\">\n            <div class=\"row\">\n                <div class=\"rightSeparator\" style=\"width: 25%\">{{room.members.length}}</div>\n                <div class=\"rightSeparator\" style=\"width: 60%\">{{room.name}}</div>\n                <div class=\"\" style=\"width: 15%\">{{\n                    countryLanguage\n                       .getLanguageByCode(\n                         room.langCode).name\n                }}</div>\n            </div>\n          </button>\n      </div>\n\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/connectpeople/connectpeople.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/connectpeople/connectpeople.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".connect-search-params {\n  min-width: 748px;\n  height: 150px;\n  box-shadow: 0 4px 2px -2px gray; }\n  .connect-search-params .col {\n    padding-top: 20px;\n    padding-left: 40px;\n    padding-right: 30px; }\n  .connect-search-params h5 {\n    padding-top: 10px;\n    padding-left: 20px; }\n  .connect-search-results {\n  padding-top: 20px;\n  margin-top: 5px;\n  overflow: auto;\n  overflow-x: hidden;\n  height: calc(100% - 230px); }\n  .connect-search-results .suggestion-item {\n    text-align: center; }\n  .connect-search-results .suggestion-item .roundcard {\n      margin: 0 auto;\n      box-shadow: 1px 2px 6px -1px #333;\n      height: 300px;\n      width: 300px;\n      border-radius: 100%;\n      margin-bottom: 40px;\n      overflow: hidden;\n      background-image: url('default_profile_pic.png');\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: cover; }\n  .connect-search-results .suggestion-item .roundcard:hover > .cover {\n        display: block; }\n  .connect-search-results .suggestion-item .roundcard .cover {\n        display: none;\n        width: 300px;\n        height: 300px;\n        top: 0;\n        left: 0;\n        background-color: rgba(0, 0, 0, 0.5);\n        border-radius: 100%; }\n  .connect-search-results .suggestion-item .roundcard .cover button {\n          margin-top: 120px;\n          width: 80px;\n          height: 80px; }\n  .connect-search-results .suggestion-item .roundcard .userinfo {\n        height: 90px;\n        margin-top: 210px;\n        background-color: #eee;\n        width: 100%; }\n  .connect-search-results .suggestion-item .roundcard .userinfo .userinfo-nativelang {\n          padding-left: 80px; }\n  .connect-search-results .suggestion-item .roundcard .userinfo .userinfo-nativelang div:last-child {\n            padding-left: 30px; }\n  .connect-search-results .suggestion-item .roundcard .userinfo .userinfo-learninglang {\n          padding-right: 20px; }\n  .connect-search-results .suggestion-item .roundcard .userinfo .userinfo-learninglang div:last-child {\n            margin-left: -38px; }\n  mat-button-toggle-group {\n  margin-left: 20px;\n  margin-top: 10px; }\n  .roomSearchLangBox {\n  margin-left: 50px; }\n  .roomResultItem {\n  width: 100%; }\n  .roomResultItem button {\n    min-width: 650px; }\n  @media screen and (max-width: 1033px) {\n      .roomResultItem button {\n        width: 100%; } }\n  .roomResultItem .headerButton {\n    background-color: white;\n    color: black !important; }\n  .roomResultItem .rightSeparator {\n    border-right: solid black 1px; }\n  .roomItemBody {\n  margin-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeW1iNGQvRGV2L2NoYXRpdW0vc3JjL2FwcC9jb21wb25lbnRzL2Nvbm5lY3RwZW9wbGUvY29ubmVjdHBlb3BsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQjtFQUNoQixjQUFhO0VBQ2IsZ0NBQStCLEVBV2xDO0VBZEQ7SUFLUSxrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLG9CQUFtQixFQUN0QjtFQVJMO0lBVVEsa0JBQWlCO0lBQ2pCLG1CQUFrQixFQUVyQjtFQUVMO0VBQ0ksa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsZUFBYztFQUNkLG1CQUFrQjtFQUNsQiwyQkFBMEIsRUF1RDdCO0VBNUREO0lBT1EsbUJBQWtCLEVBb0RyQjtFQTNETDtNQTBCWSxlQUFjO01BQ2Qsa0NBQWlDO01BQ2pDLGNBQWE7TUFDYixhQUFZO01BQ1osb0JBQW1CO01BQ25CLG9CQUFtQjtNQUNuQixpQkFBZ0I7TUFFaEIsaURBQXVFO01BQ3ZFLDRCQUEyQjtNQUMzQiw2QkFBNEI7TUFDNUIsdUJBQXNCLEVBcUJ6QjtFQTFEVDtRQVVnQixlQUFjLEVBQ2pCO0VBWGI7UUFhZ0IsY0FBYTtRQUNiLGFBQVk7UUFDWixjQUFhO1FBQ2IsT0FBTTtRQUNOLFFBQU87UUFDUCxxQ0FBc0M7UUFDdEMsb0JBQW1CLEVBTXRCO0VBekJiO1VBcUJvQixrQkFBaUI7VUFDakIsWUFBVztVQUNYLGFBQVksRUFDZjtFQXhCakI7UUF3Q2dCLGFBQVk7UUFDWixrQkFBaUI7UUFDakIsdUJBQXNCO1FBQ3RCLFlBQVcsRUFjZDtFQXpEYjtVQTZDb0IsbUJBQWtCLEVBSXJCO0VBakRqQjtZQStDd0IsbUJBQWtCLEVBQ3JCO0VBaERyQjtVQW9Eb0Isb0JBQW1CLEVBSXRCO0VBeERqQjtZQXNEd0IsbUJBQWtCLEVBQ3JCO0VBTXJCO0VBQ0ksa0JBQWdCO0VBQ2hCLGlCQUFnQixFQUNuQjtFQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCO0VBQ0Q7RUFDSSxZQUFXLEVBY2Q7RUFmRDtJQUdRLGlCQUFnQixFQUluQjtFQUhHO01BSlI7UUFLWSxZQUFZLEVBRW5CLEVBQUE7RUFQTDtJQVNRLHdCQUF1QjtJQUN2Qix3QkFBdUIsRUFDMUI7RUFYTDtJQWFRLDhCQUE2QixFQUNoQztFQUdMO0VBQ0ksZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nvbm5lY3RwZW9wbGUvY29ubmVjdHBlb3BsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25uZWN0LXNlYXJjaC1wYXJhbXMge1xuICAgIG1pbi13aWR0aDogNzQ4cHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCAycHggLTJweCBncmF5O1xuICAgIC5jb2wge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIH1cbiAgICBoNSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIFxuICAgIH1cbn1cbi5jb25uZWN0LXNlYXJjaC1yZXN1bHRzIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjMwcHgpO1xuICAgIC5zdWdnZXN0aW9uLWl0ZW0ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5yb3VuZGNhcmQge1xuICAgICAgICAgICAgJjpob3ZlciA+IC5jb3ZlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY292ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogLjUpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTIwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDZweCAtMXB4ICMzMzM7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGVmYXVsdF9wcm9maWxlX3BpYy5wbmcnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgICAgICAgICAudXNlcmluZm8ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIC51c2VyaW5mby1uYXRpdmVsYW5nIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudXNlcmluZm8tbGVhcm5pbmdsYW5nIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZGl2Omxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zOHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnJvb21TZWFyY2hMYW5nQm94IHtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbn1cbi5yb29tUmVzdWx0SXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgbWluLXdpZHRoOiA2NTBweDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAzM3B4KSB7XG4gICAgICAgICAgICB3aWR0aDogIDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmhlYWRlckJ1dHRvbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAucmlnaHRTZXBhcmF0b3Ige1xuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIGJsYWNrIDFweDtcbiAgICB9XG59XG5cbi5yb29tSXRlbUJvZHkge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/connectpeople/connectpeople.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/connectpeople/connectpeople.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConnectpeopleComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectpeopleComponent", function() { return ConnectpeopleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_country_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/country-language.service */ "./src/app/services/country-language.service.ts");
/* harmony import */ var src_app_services_session_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/session-service.service */ "./src/app/services/session-service.service.ts");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/shared/sidebar/sidebar.component */ "./src/app/components/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var ConnectpeopleComponent = /** @class */ (function () {
    function ConnectpeopleComponent(sessionService, _formBuilder, countryLanguage, searchService, newRoomDialog, chatService, router, sidebarComponent) {
        this.sessionService = sessionService;
        this._formBuilder = _formBuilder;
        this.countryLanguage = countryLanguage;
        this.searchService = searchService;
        this.newRoomDialog = newRoomDialog;
        this.chatService = chatService;
        this.router = router;
        this.sidebarComponent = sidebarComponent;
        this.searchMode = "users";
        this.GENDERS = [
            { code: "male", name: "Male" },
            { code: "female", name: "Female" }
        ];
        //Default params
        this.searchParams = {
            "nativeLanguage": "en",
            "learningLanguage": "es",
            "gender": "female"
        };
        this.roomSearchParams = {};
    }
    ConnectpeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.supportedLanguages = this.countryLanguage.getSupportedLanguages();
        this.languageLevels = this.countryLanguage.getLanguageLevelValues();
        this.sessionService.getUserInfo().subscribe(function (resp) {
            if (resp) {
                _this.userInfo = resp;
                _this.searchParams.nativeLanguage = _this.userInfo.languageConfiguration.learningLanguage;
                _this.searchParams.learningLanguage = _this.userInfo.languageConfiguration.nativeLanguage;
                _this.searchParams.gender = _this.userInfo.gender == 'male' ? 'female' : 'male';
                _this.refreshResults();
            }
        });
    };
    ConnectpeopleComponent.prototype.refreshResults = function () {
        var _this = this;
        this.searchService.getResultsByLanguagePreferences(this.searchParams).subscribe(function (res) {
            _this.foundUsers = res;
        });
    };
    ConnectpeopleComponent.prototype.roomRefreshResults = function () {
        var _this = this;
        this.searchService.getRoomsByLanguage(this.roomSearchParams.langCode).subscribe(function (res) {
            _this.foundRooms = res;
        });
    };
    ConnectpeopleComponent.prototype.joinRoom = function (roomId) {
        var _this = this;
        this.searchService.getRoomById(roomId).subscribe(function (room) {
            console.log(_this.sessionService.getCookieUserId(), room['members']);
            if (~room['members'].indexOf(_this.sessionService.getCookieUserId())) {
                console.log("Member already in room");
                _this.router.navigate(['home', 'chat', 'room', room['_id']]);
            }
            else {
                _this.chatService.joinRoom(_this.sessionService.getCookieUserId(), room['_id']).subscribe(function (res) {
                    _this.router.navigate(['home', 'chat', 'room', room['_id']]);
                });
            }
        });
    };
    ConnectpeopleComponent.prototype.openNewRoomDialog = function () {
        var _this = this;
        var dialogRef = this.newRoomDialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            result.members = [_this.sessionService.getCookieUserId()];
            console.log('The dialog was close', result);
            if (result && result.name && result.langCode) {
                _this.chatService.getConnection().on('my new room', function (roomInfo) {
                    console.log("NEW ROOM INFO RECEIVED", roomInfo);
                    _this.router.navigate(['home', 'chat', 'room', roomInfo['_id']]);
                });
                _this.chatService.createRoom(result);
            }
        });
    };
    ConnectpeopleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            providers: [src_app_components_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]],
            selector: 'app-connectpeople',
            template: __webpack_require__(/*! ./connectpeople.component.html */ "./src/app/components/connectpeople/connectpeople.component.html"),
            styles: [__webpack_require__(/*! ./connectpeople.component.scss */ "./src/app/components/connectpeople/connectpeople.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_session_service_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_country_language_service__WEBPACK_IMPORTED_MODULE_2__["CountryLanguageService"],
            src_app_services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"],
            src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_components_shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]])
    ], ConnectpeopleComponent);
    return ConnectpeopleComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data, countryLanguage) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.countryLanguage = countryLanguage;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog.prototype.ngOnInit = function () {
        this.supportedLanguages = this.countryLanguage.getSupportedLanguages();
    };
    DialogOverviewExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: "\n  <h1 mat-dialog-title>NEW ROOM</h1>\n  <div mat-dialog-content>\n    <p>Name of the room</p>\n    <input type=\"text\" style=\"margin-bottom: 10px\" [(ngModel)]='data.name'>\n    <mat-form-field>\n    <mat-select placeholder=\"Room language\" [(ngModel)]='data.langCode'>\n      <mat-option *ngFor=\"let language of supportedLanguages\" [value]=\"language.code\">\n        {{language.name}}\n      </mat-option>\n    </mat-select>\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">Cancel</button>\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Create</button>\n  </div>\n  ",
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"], Object, src_app_services_country_language_service__WEBPACK_IMPORTED_MODULE_2__["CountryLanguageService"]])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"navbar-wrapper\">\n  <app-sidebar></app-sidebar>\n</div>\n<div class=\"navbar-content-wrapper\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Wellcome to chatium</mat-card-title>\n    </mat-card-header>\n    <mat-card-content *ngIf=\"!waitingSessionResponse\">\n      <mat-tab-group mat-stretch-tabs>\n        <mat-tab label=\"Login\">\n          \n            <mat-form-field class=\"form-field-fullwidth\">\n            <input matInput [(ngModel)]=\"email\" placeholder=\"Email\">\n            </mat-form-field>\n            <mat-form-field class=\"form-field-fullwidth\">\n            <input matInput [(ngModel)]=\"password\" placeholder=\"Password\" type=\"password\">\n            </mat-form-field>\n\n            <button mat-button (click)=\"doLogin()\">Login</button>\n\n          </mat-tab>\n        <mat-tab label=\"Sign up\">\n\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"doCreateAccount()\">\n            <mat-form-field class=\"form-field-fullwidth\">\n            <input matInput placeholder=\"Name\" formControlName=\"name\">\n            </mat-form-field>\n\n            <mat-form-field class=\"form-field-fullwidth\">\n            <input matInput placeholder=\"Email\" type=\"email\" formControlName=\"email\">\n            </mat-form-field>\n\n            <mat-form-field class=\"form-field-fullwidth\">\n              <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\">\n            </mat-form-field>\n            <div class=\"form-field-fullwidth\">\n              <span class=\"genderLabel\">Gender:</span>\n              <mat-form-field>\n                <select matNativeControl required formControlName=\"gender\">\n                  <option value=\"male\">Male</option>\n                  <option value=\"female\">Female</option>\n                </select>\n              </mat-form-field>\n            </div>\n\n            <button mat-button>Register</button>\n          </form>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-card-content>\n    <div class=\"center\">\n      <mat-progress-spinner mode=\"indeterminate\" *ngIf=\"waitingSessionResponse\"></mat-progress-spinner>\n    </div>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container {\n  width: 600px;\n  margin: auto auto;\n  margin-top: 100px; }\n  @media screen and (max-width: 700px) {\n    .login-container {\n      width: 100%; } }\n  .genderLabel {\n  margin-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeW1iNGQvRGV2L2NoYXRpdW0vc3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixrQkFBaUIsRUFJcEI7RUFIRztJQUpKO01BS1EsWUFBVyxFQUVsQixFQUFBO0VBQ0Q7RUFDSSxtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbjogYXV0byBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH0gICBcbn1cbi5nZW5kZXJMYWJlbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_session_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/session-service.service */ "./src/app/services/session-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, sessionService, formBuilder) {
        this.router = router;
        this.sessionService = sessionService;
        this.formBuilder = formBuilder;
        this.LOGIN_SUCCESSFUL = 1;
        this.LOGIN_FAILED = 0;
        this.waitingSessionResponse = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.doLogin = function () {
        var _this = this;
        console.log("doLogin clicked");
        this.sessionService.beginSession(this.email, this.password).subscribe(function (data) {
            console.log("Respuesta: ", data.status);
            if (data.status == _this.LOGIN_SUCCESSFUL) {
                _this.router.navigate(['/home']);
            }
            else {
                alert("User/Pass incorrects");
            }
            console.log("Response:", data);
        });
    };
    LoginComponent.prototype.doCreateAccount = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.waitingSessionResponse = true;
            this.sessionService.createUser(new _services_session_service_service__WEBPACK_IMPORTED_MODULE_3__["NewUser"](this.registerForm.controls.name.value, this.registerForm.controls.email.value, this.registerForm.controls.password.value, this.registerForm.controls.gender.value)).subscribe(function (data) {
                _this.waitingSessionResponse = false;
                console.log(data);
                alert("Wellcome to chatium");
                //if(is an new user):
                _this.router.navigate(['/setup']);
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_session_service_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".editSexBtn{\n    width:\"25px\"!important;\n    height: \"25px\"!important;\n\n}\n\nimg[mat-card-avatar]{\n    width: 60px;\n    height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7O0NBRTVCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXRTZXhCdG57XG4gICAgd2lkdGg6XCIyNXB4XCIhaW1wb3J0YW50O1xuICAgIGhlaWdodDogXCIyNXB4XCIhaW1wb3J0YW50O1xuXG59XG5cbmltZ1ttYXQtY2FyZC1hdmF0YXJde1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"mt-5  mx-5\">\n  <mat-card>\n    <mat-card-header>\n      <img mat-card-avatar [src]=\"profile_data.profile_pic\" width=\"50\" height=\"50\" class=\" rounded-circle d-inline-block align-top\" alt=\"\">\n      <mat-card-title>\n        {{profile_data.name}}\n      </mat-card-title>\n      <mat-card-subtitle>\n        <i *ngIf=\"profile_data.sex=='male'\" class=\"fas fa-mars\" style=\"color:#0040FF; font-size: 2rem\"></i>\n        <i *ngIf=\"profile_data.sex=='female'\" class=\"fas fa-venus\" style=\"color:#FF00FF; font-size: 2rem\"></i>\n        \n        <button mat-mini-fab class=\"mx-2\" style=\"background:#3F51B5\" (click)=\"changeSex()\">\n            <mat-icon aria-label=\"\" >edit</mat-icon>\n        </button>\n        \n        <div *ngIf=\"flag_ChangeSex\">\n         <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"profile_data.sex\">\n              <mat-radio-button class=\"example-radio-button\" \n                                name=\"sex\" \n                                value=\"male\">male</mat-radio-button>\n              <mat-radio-button class=\"example-radio-button\" \n                                name=\"sex\" \n                                value=\"female\">female</mat-radio-button>\n          </mat-radio-group>\n        </div>\n\n      </mat-card-subtitle>\n    </mat-card-header>\n    <pre>Sexo:{{profile_data.sex}}</pre>\n    <mat-divider></mat-divider>\n\n    <mat-card-content class=\"mt-3\">\n      <h4>LANGUAGES</h4>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <h5>Native</h5>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <mat-chip-list>\n                <mat-chip color=\"primary\" \n                          selected>\n                    {{profile_data.native_leng}}\n                </mat-chip>\n              </mat-chip-list>\n            </div>\n            <div class=\"col-6\">\n              <button mat-mini-fab style=\"background:#3F51B5\" (click)=\"changeNativeL()\">\n                <mat-icon aria-label=\"\">edit</mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-6\">\n          <h5>Learning</h5>\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <mat-chip-list>\n                <mat-chip color=\"primary\"\n                          selected\n                          *ngFor=\"let item of learnPills\"\n                          [selectable]=\"selectable\"\n                          [removable]=\"removable\" \n                          (removed)=\"remove(item)\">\n                  {{item.name}}\n                  <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                </mat-chip>\n              </mat-chip-list>\n            </div>\n            <div class=\"col-6\">\n              <button mat-mini-fab style=\"background:#3F51B5\" (click)=\"changeLearningL()\">\n                <mat-icon aria-label=\"\">edit</mat-icon>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-card-content>\n\n    <!--Here goes the code from sublime-->\n\n    <div class=\"row\">\n        <form [formGroup]=\"formSelectNative\">\n          <div class=\"col-6\" *ngIf=\"flag_changeNativeL\">\n              <!--*ngIf=\"flag_changeNativeL\"-->\n            <mat-form-field>\n              <mat-select placeholder=\"Select Native\" formControlName=\"selectNative\">\n                <mat-option  [value]=\"lenguages.code\" *ngFor=\"let lenguages of supportedLanguages\">{{lenguages.name}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <button mat-raised-button (click)=\"changeNative()\">Change</button>\n          </div>\n        </form>\n\n        <form [formGroup]=\"formSelectLearn\">\n          <div class=\"col-6\" *ngIf=\"flag_changeLearningL\">\n            <!-- \n              *ngIf=\"flag_changeLearningL\"\n            -->\n            <mat-form-field>\n               <mat-select placeholder=\"Select a new lenguage\" formControlName=\"selectNew\">\n                 <mat-option  [value]=\"lenguage.code\" *ngFor=\"let lenguage of supportedLanguages\">{{lenguage.name}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <button mat-raised-button (click)=\"addLearning()\">Add</button>\n          </div>\n        </form>\n    </div>\n\n\n\n\n\n\n\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_country_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/country-language.service */ "./src/app/services/country-language.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(countryLanguage) {
        this.countryLanguage = countryLanguage;
        this.flag_changeNativeL = false;
        this.flag_changeLearningL = false;
        this.flag_ChangeSex = false;
        this.removable = true;
        this.profile_data = {
            name: "User",
            profile_pic: "assets/images/default_profile_pic.png",
            sex: "female",
            native_leng: "Español",
            secundaryLenguages: [],
            learning: ["es", "en", "fr"]
        };
        this.learnPills = [];
        this.formSelectNative = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'selectNative': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.formSelectLearn = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'selectNew': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        //Obtiene del servicio todos los idiomas soportados
        this.supportedLanguages = this.countryLanguage.getSupportedLanguages();
        console.log("Lenguajes Soportados", this.supportedLanguages);
        //Obtiene los nombres de los idiomas en base al codigo para mostrarlos en los chips
        for (var index = 0; index < this.profile_data.learning.length; index++) {
            this.learnPills.push(this.countryLanguage.getLanguageByCode(this.profile_data.learning[index]));
        }
    };
    ProfileComponent.prototype.changeNativeL = function () {
        this.flag_changeNativeL = !this.flag_changeNativeL;
    };
    ProfileComponent.prototype.changeLearningL = function () {
        this.flag_changeLearningL = !this.flag_changeLearningL;
    };
    ProfileComponent.prototype.remove = function (fruit) {
        var index = this.learnPills.indexOf(fruit);
        if (index >= 0) {
            this.learnPills.splice(index, 1);
        }
        console.log(this.learnPills);
    };
    ProfileComponent.prototype.changeNative = function () {
        console.log(this.formSelectNative.controls);
        var code = this.formSelectNative.controls.selectNative.value;
        if (code) {
            this.profile_data.native_leng = this.countryLanguage.getLanguageByCode(code).name;
        }
    };
    ProfileComponent.prototype.changeSex = function () {
        this.flag_ChangeSex = !this.flag_ChangeSex;
    };
    ProfileComponent.prototype.addLearning = function () {
        console.log(this.formSelectLearn.controls);
        var code = this.formSelectLearn.controls.selectNew.value;
        if (code) {
            var idiom = this.countryLanguage.getLanguageByCode(code);
            this.learnPills.push(idiom);
            console.log("idiom", idiom);
            console.log("learnPills", this.learnPills);
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_country_language_service__WEBPACK_IMPORTED_MODULE_1__["CountryLanguageService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/setup-user/setup-user.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/setup-user/setup-user.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>Settup your account</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n        <mat-step [stepControl]=\"firstFormGroup\">\n          <form [formGroup]=\"firstFormGroup\">\n            <ng-template matStepLabel>Native language</ng-template>\n            <div class=\"row fields-container\">\n              <div class=\"col col-sm-12 col-md-4 offset-md-1 offset-md-0\">\n                <h5>Select your native language</h5>\n                <mat-form-field class=\"form-field-fullwidth\">\n                  <mat-select placeholder=\"Native Language\" formControlName=\"nativeLanguage\">\n                    <mat-option *ngFor=\"let language of supportedLanguages\" [value]=\"language.code\">\n                      {{language.name}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n              <div class=\"col col-sm-12 col-md-4 offset-md-1 offset-md-0\">\n                <h5>Select your country</h5>\n                <mat-form-field class=\"form-field-fullwidth\">\n                  <mat-select placeholder=\"Country\" formControlName=\"country\">\n                    <mat-option *ngFor=\"let country of supportedCountries\" [value]=\"country.code\">\n                      <img class=\"country-flag-img\" [src]=\"country.icon\">\n                      <span class=\"country-name\">{{country.name}}</span>\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            </div>\n            <div>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step [stepControl]=\"secondFormGroup\">\n          <form [formGroup]=\"secondFormGroup\">\n            <ng-template matStepLabel>Secondary</ng-template>\n\n            <h5>Add the seconday languages that you speak </h5>\n            <div class=\"row fields-container\">\n              <div class=\"col col-md-3 col-sm-12 offset-md-3 offset-sm-0\">\n                <mat-form-field class=\"form-field-fullwidth\">\n                  <mat-select placeholder=\"Language\" formControlName=\"newLanguage\">\n                    <mat-option *ngFor=\"let language of supportedLanguages\" [value]=\"language.code\">\n                      <span>{{language.name}}</span>\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n              <div class=\"col col-md-2 col-sm-3\">\n                <mat-slider min=\"1\" max=\"5\" step=\"1\" value=\"1\" formControlName=\"newLanguageLevel\"></mat-slider>\n              </div>\n              <div class=\"col col-md-1 col-sm-3\">\n                <label>Level: <strong>{{languageLevelValues[secondFormGroup.controls.newLanguageLevel.value]}}</strong></label>\n              </div>\n              <div class=\"col col-md-1 col-sm-3\">\n                <button mat-fab color=\"accent\" (click)=\"addSecondaryLanguage()\">Add</button>\n              </div>\n            </div>\n            <br />\n            <div class=\"row\" *ngIf=\"secondaryLanguagesArr.length > 0\">\n              <div class=\"col col-md-8 col-sm-12 offset-md-2 offset-sm-0\">\n                <table class=\"table table-dark\">\n                  <thead>\n                    <tr>\n                      <th>Language</th>\n                      <th>Level</th>\n                      <th>Remove</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let secondaryLanguage of secondaryLanguagesArr\">\n                      <td>{{countryLanguage.getLanguageByCode(secondaryLanguage.language).name}}</td>\n                      <td>{{languageLevelValues[secondaryLanguage.level]}} ({{secondaryLanguage.level}})</td>\n                      <td><button mat-fab color=\"warn\" (click)=\"removeCurrentSecondaryLanguage(secondaryLanguage.language)\">Remove</button></td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext>Next</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step>\n          <ng-template matStepLabel>Learning</ng-template>\n          <form [formGroup]=\"lastFormGroup\">\n            <ng-template matStepLabel>Secondary</ng-template>\n\n            <h5>Select the language you are currently learning</h5>\n            <div class=\"row fields-container\">\n              <div class=\"col col-md-4 col-sm-12 offset-md-4 offset-sm-0\">\n                <mat-form-field class=\"form-field-fullwidth\">\n                  <mat-select placeholder=\"Language\" formControlName=\"learningLanguage\">\n                    <mat-option *ngFor=\"let language of supportedLanguages\" [value]=\"language.code\">\n                      <span>{{language.name}}</span>\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n            </div>\n            <div>\n              <button mat-button matStepperPrevious>Back</button>\n              <button mat-button matStepperNext (click)=\"sendUserLanguageConfig()\">Finish</button>\n            </div>\n          </form>\n        </mat-step>\n      </mat-horizontal-stepper>\n    </mat-card-content>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/setup-user/setup-user.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/setup-user/setup-user.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 80px; }\n\n.country-flag-img {\n  width: 30px; }\n\n.country-name {\n  margin-left: 10px; }\n\nmat-slider {\n  width: 100%; }\n\ntable {\n  width: 100%; }\n\ntable th, table td {\n    text-align: center !important; }\n\ntable td {\n    vertical-align: text-bottom; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zeW1iNGQvRGV2L2NoYXRpdW0vc3JjL2FwcC9jb21wb25lbnRzL3NldHVwLXVzZXIvc2V0dXAtdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLFlBQVcsRUFDZDs7QUFFRDtFQUNJLFlBQVcsRUFRZDs7QUFURDtJQUdRLDhCQUE2QixFQUNoQzs7QUFKTDtJQU9RLDRCQUEyQixFQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dXAtdXNlci9zZXR1cC11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuLmNvdW50cnktZmxhZy1pbWcge1xuICAgIHdpZHRoOiAzMHB4O1xufVxuXG4uY291bnRyeS1uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbm1hdC1zbGlkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG50YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGgsIHRkIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgdGQge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/setup-user/setup-user.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/setup-user/setup-user.component.ts ***!
  \***************************************************************/
/*! exports provided: SetupUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupUserComponent", function() { return SetupUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_country_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/country-language.service */ "./src/app/services/country-language.service.ts");
/* harmony import */ var src_app_services_session_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/session-service.service */ "./src/app/services/session-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SetupUserComponent = /** @class */ (function () {
    function SetupUserComponent(router, _formBuilder, countryLanguage, sessionService) {
        this.router = router;
        this._formBuilder = _formBuilder;
        this.countryLanguage = countryLanguage;
        this.sessionService = sessionService;
        this.isLinear = true;
    }
    SetupUserComponent.prototype.ngOnInit = function () {
        this.secondaryLanguagesArr = [];
        this.firstFormGroup = this._formBuilder.group({
            nativeLanguage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            newLanguage: [''],
            newLanguageLevel: [1]
        });
        this.lastFormGroup = this._formBuilder.group({
            learningLanguage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.supportedLanguages = this.countryLanguage.getSupportedLanguages();
        this.supportedCountries = this.countryLanguage.getSupportedCountries();
        this.languageLevelValues = this.countryLanguage.getLanguageLevelValues();
    };
    SetupUserComponent.prototype.addSecondaryLanguage = function () {
        var _this = this;
        if (this.secondFormGroup.controls.newLanguage.value !== '' &&
            !this.secondaryLanguagesArr.some(function (e) { return e.language === _this.secondFormGroup.controls.newLanguage.value; })) {
            this.secondaryLanguagesArr.push({
                language: this.secondFormGroup.controls.newLanguage.value,
                level: this.secondFormGroup.controls.newLanguageLevel.value
            });
        }
    };
    SetupUserComponent.prototype.removeCurrentSecondaryLanguage = function (language) {
        var _this = this;
        var index = this.secondaryLanguagesArr.findIndex(function (e) { return e.language === _this.secondFormGroup.controls.newLanguage.value; });
        this.secondaryLanguagesArr.splice(index);
    };
    SetupUserComponent.prototype.sendUserLanguageConfig = function () {
        var _this = this;
        var userLanguageConfig = {
            nativeLanguage: this.firstFormGroup.controls.nativeLanguage.value,
            country: this.firstFormGroup.controls.country.value,
            secondaryLanguages: this.secondaryLanguagesArr,
            learningLanguage: this.lastFormGroup.controls.learningLanguage.value
        };
        this.sessionService.setupUserLanguages(userLanguageConfig).subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['/home']);
        });
    };
    SetupUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup-user',
            template: __webpack_require__(/*! ./setup-user.component.html */ "./src/app/components/setup-user/setup-user.component.html"),
            styles: [__webpack_require__(/*! ./setup-user.component.scss */ "./src/app/components/setup-user/setup-user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_country_language_service__WEBPACK_IMPORTED_MODULE_2__["CountryLanguageService"], src_app_services_session_service_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
    ], SetupUserComponent);
    return SetupUserComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-primary {\n    background-color: #3F51B5!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0NBQW9DO0NBQ3ZDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjUxQjUhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary\">\n\n  <a class=\"navbar-brand\" routerLink='/home/connect'>\n    <img src=\"\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\"> Chatium\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink='/profile'>Profile\n\n        </a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink='/home/connect'>Connect</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" (click)=\"signout()\">Sign out</a>\n      </li>\n\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_session_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/session-service.service */ "./src/app/services/session-service.service.ts");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(sessionService, route, chatService) {
        this.sessionService = sessionService;
        this.route = route;
        this.chatService = chatService;
        this.SIGNOUT_SUCCESSFUL = 1;
        this.SIGNOUT_FAILED = 0;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.signout = function () {
        var _this = this;
        this.sessionService.signOut().subscribe(function (data) {
            _this.chatService.closeConnection();
            console.log(data);
            if (data.state == _this.SIGNOUT_SUCCESSFUL) {
                _this.route.navigate(['/login']);
                window.location.reload();
            }
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_session_service_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/sidebar/sidebar.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/sidebar/sidebar.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-content\">\n  <div class=\"sidebar-userinfo\">\n    <div class=\"settings-cta\">\n      <a routerLink = '/profile' title=\"Go to profile settings\">\n        <i class=\"fas fa-cog fa-2x\"></i>\n      </a>\n      <a routerLink = 'connect' title=\"Connect and learn\">\n        <i class=\"fas fa-users fa-2x\"></i>\n      </a>\n    </div>\n    <img class=\"userinfo-image\" src=\"/assets/images/default_profile_pic.png\" alt=\"\">\n    <div class=\" userinfo-name\">\n      <h5>{{userInfo?.name}}</h5>\n    </div>\n  </div>\n  <hr />\n  <div class=\"sidebar-friends\">\n    <div class=\"search-friends\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"findName\">\n    </div>\n    <div class=\"friends-list\">\n      <div class=\"friend-item-wrapper\" *ngFor=\"let chat of (chatList.reverse() | friendsFilter: findName) \">\n        <a routerLink=\"chat/{{ chat.isRoom?'room':'user' }}/{{chat.userid}}\">\n          <mat-card>\n            <div class=\"friend-card\">\n              <img class=\"friend-card-image\" src=\"/assets/images/default_profile_pic.png\" alt=\"\" *ngIf=\"!chat.isRoom\">\n              <span *ngIf=\"chat.isRoom\">(ROOM) </span>\n            </div>\n            <div class=\"friend-card\">\n              <div class=\"friend-card friend-card-name\">{{chat.name}}</div>\n            </div>\n          </mat-card>\n        </a>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/shared/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.sidebar-content {\n  height: 100%;\n  width: 100%;\n  overflow: auto; }\n.sidebar-userinfo {\n  width: 100%;\n  text-align: center;\n  padding-top: 10px; }\n.sidebar-userinfo .settings-cta {\n    width: 100%;\n    padding-top: 15px;\n    padding-left: 25px;\n    padding-right: 25px; }\n.sidebar-userinfo .settings-cta i {\n      color: #999; }\n.sidebar-userinfo .settings-cta a:first-child {\n      float: left; }\n.sidebar-userinfo .settings-cta a:last-child {\n      float: right; }\n.sidebar-userinfo .settings-cta i:hover {\n      cursor: pointer; }\n.sidebar-userinfo .settings-cta i:active {\n      color: #444; }\n.sidebar-userinfo .userinfo-image {\n    width: 90px;\n    border-radius: 100%; }\n.sidebar-userinfo .userinfo-name {\n    margin-top: 10px; }\n.sidebar-userinfo .userinfo-name .status-symbol {\n      background-color: lime;\n      width: 10px;\n      height: 10px;\n      margin-top: 10px;\n      border-radius: 100%; }\n.sidebar-friends .search-friends {\n  padding-left: 5px;\n  padding-right: 5px; }\n.sidebar-friends .friends-list  {\n  padding-top: 5px; }\n.sidebar-friends .friends-list  .friend-item-wrapper {\n    margin: 10px; }\n.sidebar-friends .friends-list  .friend-item-wrapper mat-card {\n      overflow: hidden;\n      padding-right: 10px; }\n.sidebar-friends .friends-list  .friend-item-wrapper mat-card .friend-card-image {\n        width: 30px; }\n.sidebar-friends .friends-list  .friend-item-wrapper mat-card .friend-card-name {\n        padding-left: 10px;\n        white-space: nowrap;\n        word-break: break-all; }\n.sidebar-friends .friends-list  .friend-item-wrapper mat-card .friend-card {\n        float: left; }\n.sidebar-friends .friends-list  .friend-item-wrapper mat-card:hover {\n        cursor: pointer; }\n.sidebar-friends .friends-list  .friend-item-wrapper mat-card:active {\n        background-color: #bbb; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3N5bWI0ZC9EZXYvY2hhdGl1bS9zcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7RUFDSSxhQUFZO0VBQ1osWUFBVztFQUNYLGVBQWMsRUFDakI7QUFFRDtFQUNJLFlBQVc7RUFDWCxtQkFBa0I7RUFDbEIsa0JBQWlCLEVBc0NwQjtBQXpDRDtJQUtRLFlBQVc7SUFDWCxrQkFBaUI7SUFDakIsbUJBQWtCO0lBQ2xCLG9CQUFtQixFQWlCdEI7QUF6Qkw7TUFVWSxZQUFXLEVBQ2Q7QUFYVDtNQWFZLFlBQVcsRUFDZDtBQWRUO01BZ0JZLGFBQVksRUFDZjtBQWpCVDtNQW1CWSxnQkFBZSxFQUNsQjtBQXBCVDtNQXVCWSxZQUFXLEVBQ2Q7QUF4QlQ7SUEyQlEsWUFBVztJQUNYLG9CQUFtQixFQUN0QjtBQTdCTDtJQStCUSxpQkFBZ0IsRUFTbkI7QUF4Q0w7TUFpQ1ksdUJBQXNCO01BQ3RCLFlBQVc7TUFDWCxhQUFZO01BQ1osaUJBQWdCO01BQ2hCLG9CQUFtQixFQUN0QjtBQUtUO0VBRVEsa0JBQWlCO0VBQ2pCLG1CQUFrQixFQUNyQjtBQUpMO0VBTVEsaUJBQWdCLEVBMEJuQjtBQWhDTDtJQVFZLGFBQVksRUF1QmY7QUEvQlQ7TUFXZ0IsaUJBQWdCO01BQ2hCLG9CQUFtQixFQWtCdEI7QUE5QmI7UUFjb0IsWUFBVyxFQUNkO0FBZmpCO1FBaUJvQixtQkFBa0I7UUFDbEIsb0JBQW1CO1FBQ25CLHNCQUNKLEVBQUM7QUFwQmpCO1FBc0JvQixZQUFXLEVBQ2Q7QUF2QmpCO1FBeUJvQixnQkFBZSxFQUNsQjtBQTFCakI7UUE0Qm9CLHVCQUFzQixFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5zaWRlYmFyLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG4uc2lkZWJhci11c2VyaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB4OyB9XG4gIC5zaWRlYmFyLXVzZXJpbmZvIC5zZXR0aW5ncy1jdGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4OyB9XG4gICAgLnNpZGViYXItdXNlcmluZm8gLnNldHRpbmdzLWN0YSBpIHtcbiAgICAgIGNvbG9yOiAjOTk5OyB9XG4gICAgLnNpZGViYXItdXNlcmluZm8gLnNldHRpbmdzLWN0YSBhOmZpcnN0LWNoaWxkIHtcbiAgICAgIGZsb2F0OiBsZWZ0OyB9XG4gICAgLnNpZGViYXItdXNlcmluZm8gLnNldHRpbmdzLWN0YSBhOmxhc3QtY2hpbGQge1xuICAgICAgZmxvYXQ6IHJpZ2h0OyB9XG4gICAgLnNpZGViYXItdXNlcmluZm8gLnNldHRpbmdzLWN0YSBpOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIC5zaWRlYmFyLXVzZXJpbmZvIC5zZXR0aW5ncy1jdGEgaTphY3RpdmUge1xuICAgICAgY29sb3I6ICM0NDQ7IH1cbiAgLnNpZGViYXItdXNlcmluZm8gLnVzZXJpbmZvLWltYWdlIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlOyB9XG4gIC5zaWRlYmFyLXVzZXJpbmZvIC51c2VyaW5mby1uYW1lIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XG4gICAgLnNpZGViYXItdXNlcmluZm8gLnVzZXJpbmZvLW5hbWUgLnN0YXR1cy1zeW1ib2wge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGltZTtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7IH1cblxuLnNpZGViYXItZnJpZW5kcyAuc2VhcmNoLWZyaWVuZHMge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4OyB9XG5cbi5zaWRlYmFyLWZyaWVuZHMgLmZyaWVuZHMtbGlzdMKgIHtcbiAgcGFkZGluZy10b3A6IDVweDsgfVxuICAuc2lkZWJhci1mcmllbmRzIC5mcmllbmRzLWxpc3TCoCAuZnJpZW5kLWl0ZW0td3JhcHBlciB7XG4gICAgbWFyZ2luOiAxMHB4OyB9XG4gICAgLnNpZGViYXItZnJpZW5kcyAuZnJpZW5kcy1saXN0wqAgLmZyaWVuZC1pdGVtLXdyYXBwZXIgbWF0LWNhcmQge1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cbiAgICAgIC5zaWRlYmFyLWZyaWVuZHMgLmZyaWVuZHMtbGlzdMKgIC5mcmllbmQtaXRlbS13cmFwcGVyIG1hdC1jYXJkIC5mcmllbmQtY2FyZC1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAzMHB4OyB9XG4gICAgICAuc2lkZWJhci1mcmllbmRzIC5mcmllbmRzLWxpc3TCoCAuZnJpZW5kLWl0ZW0td3JhcHBlciBtYXQtY2FyZCAuZnJpZW5kLWNhcmQtbmFtZSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsOyB9XG4gICAgICAuc2lkZWJhci1mcmllbmRzIC5mcmllbmRzLWxpc3TCoCAuZnJpZW5kLWl0ZW0td3JhcHBlciBtYXQtY2FyZCAuZnJpZW5kLWNhcmQge1xuICAgICAgICBmbG9hdDogbGVmdDsgfVxuICAgICAgLnNpZGViYXItZnJpZW5kcyAuZnJpZW5kcy1saXN0wqAgLmZyaWVuZC1pdGVtLXdyYXBwZXIgbWF0LWNhcmQ6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5zaWRlYmFyLWZyaWVuZHMgLmZyaWVuZHMtbGlzdMKgIC5mcmllbmQtaXRlbS13cmFwcGVyIG1hdC1jYXJkOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7IH1cbiIsIi5zaWRlYmFyLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNpZGViYXItdXNlcmluZm8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAuc2V0dGluZ3MtY3RhIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgIH1cbiAgICAgICAgYTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBhOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGk6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaTphY3RpdmUge1xuICAgICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnVzZXJpbmZvLWltYWdlIHtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgfVxuICAgIC51c2VyaW5mby1uYW1lIHsgXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIC5zdGF0dXMtc3ltYm9sIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpbWU7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbi5zaWRlYmFyLWZyaWVuZHMge1xuICAgIC5zZWFyY2gtZnJpZW5kcyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgfVxuICAgIC5mcmllbmRzLWxpc3TCoHtcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDsgXG4gICAgICAgIC5mcmllbmQtaXRlbS13cmFwcGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIG1hdC1jYXJkIHtcblxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAuZnJpZW5kLWNhcmQtaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZyaWVuZC1jYXJkLW5hbWUge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZnJpZW5kLWNhcmQge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/shared/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_session_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/session-service.service */ "./src/app/services/session-service.service.ts");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(sessionService, chatService, searchService, ngZone) {
        this.sessionService = sessionService;
        this.chatService = chatService;
        this.searchService = searchService;
        this.ngZone = ngZone;
        this.chatList = [];
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionService.getUserInfo().subscribe(function (resp) {
            _this.userInfo = resp;
            _this.chatService.initConnection(_this.userInfo);
            _this.refreshFriendsList();
            _this.chatService.getConnection().on('new chat created', function (_) {
                console.log('New user has started a chat with you or you has began a new chat', _);
                _this.refreshFriendsList();
            });
        });
    };
    SidebarComponent.prototype.refreshFriendsList = function () {
        var _this = this;
        this.ngZone.run(function () {
            _this.chatList = [];
            _this.sessionService.getUserInfo().subscribe(function (user) {
                if (user && user.hasOwnProperty('chats')) {
                    user['chats'].forEach(function (chat) {
                        if (chat && chat.type == 'room') {
                            _this.searchService.getRoomById(chat.chatid).subscribe(function (room) {
                                _this.chatList.push({
                                    isRoom: true,
                                    name: room['name'],
                                    userid: room['_id']
                                });
                            });
                        }
                        else {
                            _this.searchService.getUserInfoById(chat.receptor).subscribe(function (receptorUser) {
                                _this.chatList.push({
                                    isRoom: false,
                                    userid: receptorUser['_id'],
                                    name: receptorUser['name']
                                });
                            });
                        }
                    });
                }
            });
        });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/shared/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_session_service_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"],
            src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"],
            src_app_services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ]
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/pipes/friends-filter.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/friends-filter.pipe.ts ***!
  \**********************************************/
/*! exports provided: FriendsFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsFilterPipe", function() { return FriendsFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FriendsFilterPipe = /** @class */ (function () {
    function FriendsFilterPipe() {
    }
    FriendsFilterPipe.prototype.transform = function (items, args) {
        args = args || "";
        //console.log(items.filter(item => item.name.toUpperCase().indexOf(args.findName.toUpperCase()) > -1));
        return items.filter(function (item) { return item.name.toUpperCase().startsWith(args.toUpperCase()); });
    };
    FriendsFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'friendsFilter',
            pure: false
        })
    ], FriendsFilterPipe);
    return FriendsFilterPipe;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_session_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/session-service.service */ "./src/app/services/session-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatService = /** @class */ (function () {
    function ChatService(searchService, httpService, sessionService) {
        this.searchService = searchService;
        this.httpService = httpService;
        this.sessionService = sessionService;
        this.PORT = 3000;
        this.DOMAIN = 'http://localhost:';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__('http://localhost:3000');
    }
    ChatService.prototype.initConnection = function (currentUser) {
        if (currentUser.state == 'ONLINE')
            this.socket.emit('start connection', currentUser);
    };
    ChatService.prototype.closeConnection = function () {
        this.socket.close();
    };
    ChatService.prototype.beginChat = function (chatconfig) {
        this.socket.emit('chat started', chatconfig);
    };
    ChatService.prototype.clearListeners = function () {
        this.socket.removeAllListeners();
    };
    ChatService.prototype.createRoom = function (roomDetails) {
        this.socket.emit('create room', roomDetails, this.sessionService.getCookieUserId());
    };
    ChatService.prototype.closeChat = function () {
        this.socket.emit('close chat');
    };
    ChatService.prototype.sendMessage = function (message) {
        this.socket.emit('send message', message);
    };
    ChatService.prototype.getConnection = function () {
        return this.socket;
    };
    ChatService.prototype.joinRoom = function (userid, roomid) {
        var data = {
            userid: userid,
            roomid: roomid
        };
        return this.httpService.post(this.DOMAIN + this.PORT + '/joinRoom', data, { withCredentials: true });
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_services_session_service_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/country-language.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/country-language.service.ts ***!
  \******************************************************/
/*! exports provided: CountryLanguageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryLanguageService", function() { return CountryLanguageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryLanguageService = /** @class */ (function () {
    function CountryLanguageService() {
        this.supportedLanguages = [
            { name: "English", code: 'en' },
            { name: "Spanish", code: 'es' },
            { name: "French", code: 'fr' }
        ];
        this.supportedCountried = [
            {
                name: "United States",
                icon: '/assets/countryflags/us.png',
                code: 'us'
            }, {
                name: "México",
                icon: '/assets/countryflags/mx.png',
                code: 'mx'
            }, {
                name: "Spain",
                icon: '/assets/countryflags/es.png',
                code: 'es'
            }
        ];
        this.languageLevelValues = {
            1: "Newbie",
            2: "Beginner",
            3: "Intermediate",
            4: "Advanced",
            5: "Teacher"
        };
    }
    CountryLanguageService.prototype.getLanguageByCode = function (code) {
        return this.supportedLanguages.find(function (e) { return e.code == code; });
    };
    CountryLanguageService.prototype.getSupportedLanguages = function () {
        return this.supportedLanguages;
    };
    CountryLanguageService.prototype.getSupportedCountries = function () {
        return this.supportedCountried;
    };
    CountryLanguageService.prototype.getLanguageLevelValues = function () {
        return this.languageLevelValues;
    };
    CountryLanguageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CountryLanguageService);
    return CountryLanguageService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = /** @class */ (function () {
    function SearchService(httpClient) {
        this.httpClient = httpClient;
        this.PORT = 3000;
        this.DOMAIN = 'http://localhost:';
    }
    SearchService.prototype.getResultsByLanguagePreferences = function (languagePreferences) {
        return this.httpClient.post(this.DOMAIN + this.PORT + '/searchConnections', languagePreferences, { withCredentials: true });
    };
    SearchService.prototype.getUserInfoById = function (id) {
        var data = {
            id: id
        };
        return this.httpClient.post(this.DOMAIN + this.PORT + '/getUserInfoById', data);
    };
    SearchService.prototype.getRoomsByLanguage = function (langCode) {
        var data = {
            langCode: langCode
        };
        return this.httpClient.post(this.DOMAIN + this.PORT + '/getRoomsByLanguage', data);
    };
    SearchService.prototype.getRoomById = function (id) {
        var data = {
            id: id
        };
        return this.httpClient.post(this.DOMAIN + this.PORT + '/getRoomById', data);
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/services/session-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/session-service.service.ts ***!
  \*****************************************************/
/*! exports provided: NewUser, SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUser", function() { return NewUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewUser = /** @class */ (function () {
    function NewUser(name, email, pass, gender) {
        this.name = name;
        this.email = email;
        this.password = pass;
        this.gender = gender;
    }
    return NewUser;
}());

var SessionService = /** @class */ (function () {
    function SessionService(httpClient, cookieService) {
        this.httpClient = httpClient;
        this.cookieService = cookieService;
        this.PORT = 3000;
        this.DOMAIN = 'http://localhost:';
        this.MOCK_USER = {
            name: "User",
            profile_pic: "assets/images/default_profile_pic.png",
            sex: "female",
            native_lang: "es",
            secundaryLenguages: []
        };
        this.currentUserInfo = {};
    }
    SessionService.prototype.beginSession = function (email, passwd) {
        console.log(email, passwd);
        return this.httpClient.post(this.DOMAIN + this.PORT + '/login', {
            email: email,
            password: passwd
        }, { withCredentials: true });
    };
    SessionService.prototype.createUser = function (newUser) {
        console.log(newUser);
        return this.httpClient.post(this.DOMAIN + this.PORT + '/regist', newUser, { withCredentials: true });
    };
    SessionService.prototype.setupUserLanguages = function (userLanguagesConifg) {
        console.log(userLanguagesConifg);
        return this.httpClient.post(this.DOMAIN + this.PORT + '/setupLanguages', userLanguagesConifg, { withCredentials: true });
    };
    SessionService.prototype.getUserInfo = function () {
        return this.httpClient.get(this.DOMAIN + this.PORT + '/getUserInfo', { withCredentials: true });
    };
    SessionService.prototype.signOut = function () {
        return this.httpClient.get(this.DOMAIN + this.PORT + '/singOut', { withCredentials: true });
    };
    SessionService.prototype.getCookieUserId = function () {
        return this.cookieService.get('userid');
    };
    SessionService.prototype.getCookieUserName = function () {
        return this.cookieService.get('username');
    };
    SessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/symb4d/Dev/chatium/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map