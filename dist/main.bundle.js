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

/***/ "../../../../../src/app/alunos/alunos.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Empty*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alunos/alunos.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n  <h2 class=\"jumbotron\">Alunos</h2>\r\n</div>\r\n<div class=\"container-fluid mt-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-aluno-cria></app-aluno-cria>\r\n    </div>\r\n    <div class=\"col\">\r\n      <app-aluno-lista></app-aluno-lista>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/alunos/alunos.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_aluno_service__ = __webpack_require__("../../../../../src/app/alunos/crud/aluno.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlunosComponent = (function () {
    function AlunosComponent(alunoService) {
        this.alunoService = alunoService;
    }
    AlunosComponent.prototype.ngOnInit = function () {
    };
    AlunosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alunos',
            template: __webpack_require__("../../../../../src/app/alunos/alunos.html"),
            styles: [__webpack_require__("../../../../../src/app/alunos/alunos.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__crud_aluno_service__["a" /* AlunoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crud_aluno_service__["a" /* AlunoService */]])
    ], AlunosComponent);
    return AlunosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/alunos/cria/aluno-cria.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Empty*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alunos/cria/aluno-cria.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"text-center\">Cadastrar aluno</h6><br/>\r\n<form #alunoForm=\"ngForm\" (ngSubmit)=\"submitarFormulario(alunoForm)\">\r\n    <input #idAluno type=\"hidden\" name=\"$codigo\" #$key=\"ngModel\" [(ngModel)]=\"alunoService.alunoSelecionado.$codigo\">\r\n  <div class=\"form-group\">\r\n    <label>Nome *</label>\r\n    <input class=\"form-control\" name=\"nome\" #name=\"ngModel\" [(ngModel)]=\"alunoService.alunoSelecionado.nome\" placeholder=\"Informe o nome\" required>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Sobrenome *</label>\r\n    <input class=\"form-control\" name=\"sobrenome\" #position=\"ngModel\" [(ngModel)]=\"alunoService.alunoSelecionado.sobrenome\" placeholder=\"Informe o sobrenome\" required>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Idade *</label>\r\n    <input class=\"form-control\" name=\"idade\" #office=\"ngModel\" [(ngModel)]=\"alunoService.alunoSelecionado.idade\" placeholder=\"Informe a idade\" required>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!alunoForm.valid\">\r\n      <i class=\"fa fa-check\"></i>\r\n       {{ nameButtonSave }}\r\n      </button>\r\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"resetarFomulario(alunoForm)\">\r\n      <i class=\"fa fa-repeat\"></i>\r\n       Limpar\r\n    </button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/alunos/cria/aluno-cria.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunoCriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_aluno_service__ = __webpack_require__("../../../../../src/app/alunos/crud/aluno.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlunoCriaComponent = (function () {
    function AlunoCriaComponent(alunoService, tostr) {
        this.alunoService = alunoService;
        this.tostr = tostr;
        this.nameButtonSave = 'Salvar';
        // if (this.idAluno.nativeElement.$codigo === null) {
        //   this.nameButtonSave = 'Cadastrar';
        // } else {
        //   this.nameButtonSave = 'Salvar alterações';
        // }
    }
    AlunoCriaComponent.prototype.ngOnInit = function () {
        this.resetarFomulario();
    };
    AlunoCriaComponent.prototype.submitarFormulario = function (alunoForm) {
        console.log(alunoForm);
        // se não tiver id do aluno será um novo cadastro
        if (alunoForm.value.$codigo == null) {
            // insere e retorna mensagem
            this.alunoService.inserirAluno(alunoForm.value);
            this.tostr.success('Aluno cadastrado com sucesso.');
        }
        else {
            // altera e retorna mensagem
            this.alunoService.alteraAluno(alunoForm.value);
            this.tostr.success('Aluno alterado.');
        }
        // reseta formulário
        this.resetarFomulario(alunoForm);
    };
    AlunoCriaComponent.prototype.resetarFomulario = function (alunoForm) {
        // reseta formulário
        alunoForm.reset();
        this.alunoService.alunoSelecionado = {
            $codigo: null,
            nome: '',
            sobrenome: '',
            idade: ''
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('idAluno'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AlunoCriaComponent.prototype, "idAluno", void 0);
    AlunoCriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aluno-cria',
            template: __webpack_require__("../../../../../src/app/alunos/cria/aluno-cria.html"),
            styles: [__webpack_require__("../../../../../src/app/alunos/cria/aluno-cria.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crud_aluno_service__["a" /* AlunoService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], AlunoCriaComponent);
    return AlunoCriaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/alunos/crud/aluno.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aluno; });
var Aluno = (function () {
    function Aluno() {
    }
    return Aluno;
}());



/***/ }),

/***/ "../../../../../src/app/alunos/crud/aluno.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aluno_model__ = __webpack_require__("../../../../../src/app/alunos/crud/aluno.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlunoService = (function () {
    function AlunoService(firebase) {
        this.firebase = firebase;
        this.alunoSelecionado = new __WEBPACK_IMPORTED_MODULE_2__aluno_model__["a" /* Aluno */]();
    }
    AlunoService.prototype.getData = function () {
        this.alunosLista = this.firebase.list('Alunos');
        return this.alunosLista;
    };
    AlunoService.prototype.inserirAluno = function (aluno) {
        this.alunosLista.push({
            nome: aluno.nome,
            sobrenome: aluno.sobrenome,
            idade: aluno.idade
        });
    };
    AlunoService.prototype.alteraAluno = function (aluno) {
        this.alunosLista.update(aluno.$codigo, {
            nome: aluno.nome,
            sobrenome: aluno.sobrenome,
            idade: aluno.idade
        });
    };
    AlunoService.prototype.deletaAluno = function ($codigo) {
        this.alunosLista.remove($codigo);
    };
    AlunoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AlunoService);
    return AlunoService;
}());



/***/ }),

/***/ "../../../../../src/app/alunos/lista/aluno-lista.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Empty*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alunos/lista/aluno-lista.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"text-center\">Lista de alunos</h6><br/>\r\n<table class=\"ui very basic table\">\r\n  <thead>\r\n    <tr>\r\n      <th>Nome</th>\r\n      <th>Sobrenome</th>\r\n      <th>Idade</th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let a of alunosLista\">\r\n      <td> {{ a.nome }} </td>\r\n      <td> {{ a.sobrenome }} </td>\r\n      <td> {{ a.idade }} </td>\r\n      <td class=\"right aligned\">\r\n        <button class=\"ui blue button\" (click)=\"editaAluno(a)\">\r\n          <i class=\"fa fa-pencil\"></i>\r\n        </button>\r\n        <button class=\"ui red button\" (click)=\"deletaAluno(a.$codigo)\">\r\n          <i class=\"fa fa-trash-o\"></i>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/alunos/lista/aluno-lista.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunoListaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_aluno_service__ = __webpack_require__("../../../../../src/app/alunos/crud/aluno.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlunoListaComponent = (function () {
    function AlunoListaComponent(alunoService, tostr) {
        this.alunoService = alunoService;
        this.tostr = tostr;
        this.listaAlunos();
    }
    AlunoListaComponent.prototype.ngOnInit = function () {
    };
    AlunoListaComponent.prototype.editaAluno = function (aluno) {
        this.alunoService.alunoSelecionado = Object.assign({}, aluno);
    };
    AlunoListaComponent.prototype.deletaAluno = function (codigo) {
        if (confirm('Deseja realmente excluir este registro?') === true) {
            this.alunoService.deletaAluno(codigo);
            this.tostr.success('Aluno deletado.');
        }
    };
    AlunoListaComponent.prototype.listaAlunos = function () {
        var _this = this;
        var x = this.alunoService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.alunosLista = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['$codigo'] = element.key;
                _this.alunosLista.push(y);
            });
        });
    };
    AlunoListaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aluno-lista',
            template: __webpack_require__("../../../../../src/app/alunos/lista/aluno-lista.html"),
            styles: [__webpack_require__("../../../../../src/app/alunos/lista/aluno-lista.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crud_aluno_service__["a" /* AlunoService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], AlunoListaComponent);
    return AlunoListaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Empty*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-tabs></app-tabs> -->\r\n<app-nav (logged)=\"logado($event)\"></app-nav>\r\n<!-- <app-tabs *ngIf=\"isLogged\"></app-tabs> -->\r\n<router-outlet></router-outlet>\r\n<!-- <app-registrar *ngIf=\"!isLogged && isRegistro()\" (logged)=\"logado($event)\"></app-registrar>\r\n<app-login *ngIf=\"!isLogged && isLogin()\" (logged)=\"logado($event)\"></app-login> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(routerAngular) {
        this.routerAngular = routerAngular;
        this.title = 'app';
        this.isLogged = false;
        this.verificarLogin();
    }
    AppComponent.prototype.isLogin = function () {
        return this.routerAngular.url === '/login';
    };
    AppComponent.prototype.isRegistro = function () {
        return this.routerAngular.url === '/registro';
    };
    AppComponent.prototype.logado = function (event) {
        this.isLogged = event;
    };
    AppComponent.prototype.verificarLogin = function () {
        var user = localStorage.getItem('user_school@user');
        if (user) {
            this.isLogged = true;
            return;
        }
        if (!this.isLogin() || !this.isRegistro) {
            this.routerAngular.navigate(['/']);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__alunos_alunos__ = __webpack_require__("../../../../../src/app/alunos/alunos.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__alunos_cria_aluno_cria__ = __webpack_require__("../../../../../src/app/alunos/cria/aluno-cria.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__alunos_lista_aluno_lista__ = __webpack_require__("../../../../../src/app/alunos/lista/aluno-lista.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__alunos_crud_aluno_service__ = __webpack_require__("../../../../../src/app/alunos/crud/aluno.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__professores_professores__ = __webpack_require__("../../../../../src/app/professores/professores.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__professores_cria_professor_cria__ = __webpack_require__("../../../../../src/app/professores/cria/professor-cria.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__professores_lista_professor_lista__ = __webpack_require__("../../../../../src/app/professores/lista/professor-lista.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__professores_crud_professor_service__ = __webpack_require__("../../../../../src/app/professores/crud/professor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__disciplinas_disciplinas__ = __webpack_require__("../../../../../src/app/disciplinas/disciplinas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__disciplinas_cria_disciplina_cria__ = __webpack_require__("../../../../../src/app/disciplinas/cria/disciplina-cria.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__disciplinas_lista_disciplina_lista__ = __webpack_require__("../../../../../src/app/disciplinas/lista/disciplina-lista.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__disciplinas_crud_disciplina_service__ = __webpack_require__("../../../../../src/app/disciplinas/crud/disciplina.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__turmas_turmas__ = __webpack_require__("../../../../../src/app/turmas/turmas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__turmas_cria_turma_cria__ = __webpack_require__("../../../../../src/app/turmas/cria/turma-cria.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__turmas_lista_turma_lista__ = __webpack_require__("../../../../../src/app/turmas/lista/turma-lista.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__turmas_crud_turma_service__ = __webpack_require__("../../../../../src/app/turmas/crud/turma.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sala_de_aula_sala_de_aula__ = __webpack_require__("../../../../../src/app/sala-de-aula/sala-de-aula.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__sala_de_aula_cria_sala_de_aula_cria__ = __webpack_require__("../../../../../src/app/sala-de-aula/cria/sala-de-aula-cria.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__sala_de_aula_lista_sala_de_aula_lista__ = __webpack_require__("../../../../../src/app/sala-de-aula/lista/sala-de-aula-lista.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__tabs_tabs_component__ = __webpack_require__("../../../../../src/app/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__registrar_registrar_component__ = __webpack_require__("../../../../../src/app/registrar/registrar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pagina_not_found_pagina_not_found_component__ = __webpack_require__("../../../../../src/app/pagina-not-found/pagina-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/esm5/angular-2-dropdown-multiselect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// alunos




// professores




// disciplinas




// turmas




// Sala de aula




// routes

// material angular















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__alunos_alunos__["a" /* AlunosComponent */],
                __WEBPACK_IMPORTED_MODULE_10__alunos_cria_aluno_cria__["a" /* AlunoCriaComponent */],
                __WEBPACK_IMPORTED_MODULE_11__alunos_lista_aluno_lista__["a" /* AlunoListaComponent */],
                __WEBPACK_IMPORTED_MODULE_13__professores_professores__["a" /* ProfessoresComponent */],
                __WEBPACK_IMPORTED_MODULE_14__professores_cria_professor_cria__["a" /* ProfessorCriaComponent */],
                __WEBPACK_IMPORTED_MODULE_15__professores_lista_professor_lista__["a" /* ProfessorListaComponent */],
                __WEBPACK_IMPORTED_MODULE_17__disciplinas_disciplinas__["a" /* DisciplinasComponent */],
                __WEBPACK_IMPORTED_MODULE_18__disciplinas_cria_disciplina_cria__["a" /* DisciplinaCriaComponent */],
                __WEBPACK_IMPORTED_MODULE_19__disciplinas_lista_disciplina_lista__["a" /* DisciplinaListaComponent */],
                __WEBPACK_IMPORTED_MODULE_21__turmas_turmas__["a" /* TurmasComponent */],
                __WEBPACK_IMPORTED_MODULE_22__turmas_cria_turma_cria__["a" /* TurmaCriaComponent */],
                __WEBPACK_IMPORTED_MODULE_23__turmas_lista_turma_lista__["a" /* TurmaListaComponent */],
                __WEBPACK_IMPORTED_MODULE_25__sala_de_aula_sala_de_aula__["a" /* SalaComponent */],
                __WEBPACK_IMPORTED_MODULE_26__sala_de_aula_cria_sala_de_aula_cria__["a" /* SalaCriaComponent */],
                __WEBPACK_IMPORTED_MODULE_27__sala_de_aula_lista_sala_de_aula_lista__["a" /* SalaListaComponent */],
                __WEBPACK_IMPORTED_MODULE_34__tabs_tabs_component__["a" /* TabsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_36__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_37__registrar_registrar_component__["a" /* RegistrarComponent */],
                __WEBPACK_IMPORTED_MODULE_38__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_39__pagina_not_found_pagina_not_found_component__["a" /* PaginaNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_28_ngx_toastr__["a" /* ToastrModule */].forRoot({ positionClass: 'toast-top-center', progressBar: true }),
                __WEBPACK_IMPORTED_MODULE_29__app_routes__["a" /* AppRouter */],
                __WEBPACK_IMPORTED_MODULE_30__angular_material__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_31__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_41_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_42_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_43_angularfire2_firestore__["b" /* AngularFirestoreModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__professores_crud_professor_service__["a" /* ProfessorService */],
                __WEBPACK_IMPORTED_MODULE_20__disciplinas_crud_disciplina_service__["a" /* DisciplinaService */],
                __WEBPACK_IMPORTED_MODULE_40__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_41_angular2_flash_messages__["FlashMessagesService"],
                __WEBPACK_IMPORTED_MODULE_12__alunos_crud_aluno_service__["a" /* AlunoService */],
                __WEBPACK_IMPORTED_MODULE_24__turmas_crud_turma_service__["a" /* TurmaService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alunos_alunos__ = __webpack_require__("../../../../../src/app/alunos/alunos.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__professores_professores__ = __webpack_require__("../../../../../src/app/professores/professores.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__disciplinas_disciplinas__ = __webpack_require__("../../../../../src/app/disciplinas/disciplinas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__turmas_turmas__ = __webpack_require__("../../../../../src/app/turmas/turmas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__registrar_registrar_component__ = __webpack_require__("../../../../../src/app/registrar/registrar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pagina_not_found_pagina_not_found_component__ = __webpack_require__("../../../../../src/app/pagina-not-found/pagina-not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/registro', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'registro', component: __WEBPACK_IMPORTED_MODULE_8__registrar_registrar_component__["a" /* RegistrarComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
    { path: 'alunos', component: __WEBPACK_IMPORTED_MODULE_2__alunos_alunos__["a" /* AlunosComponent */] },
    { path: 'professores', component: __WEBPACK_IMPORTED_MODULE_3__professores_professores__["a" /* ProfessoresComponent */] },
    { path: 'disciplinas', component: __WEBPACK_IMPORTED_MODULE_4__disciplinas_disciplinas__["a" /* DisciplinasComponent */] },
    { path: 'turmas', component: __WEBPACK_IMPORTED_MODULE_5__turmas_turmas__["a" /* TurmasComponent */] },
    // { path: 'criar-sala', component: SalaComponent },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__pagina_not_found_pagina_not_found_component__["a" /* PaginaNotFoundComponent */] }
];
var AppRouter = (function () {
    function AppRouter() {
    }
    AppRouter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRouter);
    return AppRouter;
}());



/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(afAuth, firebase) {
        this.afAuth = afAuth;
        this.firebase = firebase;
    }
    AuthService.prototype.registro = function (email, senha) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, senha)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.verificaSeExisteCadastro = function (email, senha) {
        // const user = this.firebase.database.ref('/users/' + email);
        // user.subscribe(data => {
        //   if (data.$value !== null) {
        //     console.log('Usuário não existe');
        //   } else {
        //     console.log('Usuário já existe');
        //   }
        // });
    };
    AuthService.prototype.logar = function (email, senha) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, senha)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.logarGoogle = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider();
        __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInWithRedirect(provider);
    };
    AuthService.prototype.usuarioLogado = function () {
        return this.afAuth.authState.map(function (auth) { return auth; });
    };
    AuthService.prototype.sair = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/disciplinas/cria/disciplina-cria.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Empty*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/disciplinas/cria/disciplina-cria.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"text-center\">Cadastrar Disciplina</h6><br/>\r\n<form #disciplinaForm=\"ngForm\" (ngSubmit)=\"submitarFormulario(disciplinaForm)\">\r\n    <input type=\"hidden\" name=\"$codigoDisciplina\" #$key=\"ngModel\" [(ngModel)]=\"disciplinaService.disciplinaSelecionada.$codigoDisciplina\">\r\n  <div class=\"form-group\">\r\n    <label>Nome *</label>\r\n    <input class=\"form-control\" name=\"nome\" #name=\"ngModel\" [(ngModel)]=\"disciplinaService.disciplinaSelecionada.nome\" placeholder=\"Informe o nome\" required>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Media *</label>\r\n    <input class=\"form-control\" name=\"media\" #position=\"ngModel\" [(ngModel)]=\"disciplinaService.disciplinaSelecionada.media\" placeholder=\"Informe a média\" required>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!disciplinaForm.valid\">\r\n      <i class=\"fa fa-check\"></i>\r\n       Cadastrar\r\n      </button>\r\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"resetarFomulario(disciplinaForm)\">\r\n      <i class=\"fa fa-repeat\"></i>\r\n       Limpar\r\n      </button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/disciplinas/cria/disciplina-cria.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisciplinaCriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_disciplina_service__ = __webpack_require__("../../../../../src/app/disciplinas/crud/disciplina.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisciplinaCriaComponent = (function () {
    function DisciplinaCriaComponent(disciplinaService, tostr) {
        this.disciplinaService = disciplinaService;
        this.tostr = tostr;
    }
    DisciplinaCriaComponent.prototype.ngOnInit = function () {
        this.resetarFormulario();
    };
    DisciplinaCriaComponent.prototype.submitarFormulario = function (disciplinaForm) {
        if (disciplinaForm.value.$codigoDisciplina == null) {
            this.disciplinaService.inserirDisciplina(disciplinaForm.value);
            this.tostr.success('Disciplina salva com sucesso.');
        }
        else {
            this.disciplinaService.alterarDisciplina(disciplinaForm.value);
            this.tostr.success('Alteração salva.');
        }
        this.resetarFormulario(disciplinaForm);
    };
    DisciplinaCriaComponent.prototype.resetarFormulario = function (disciplinaForm) {
        disciplinaForm.reset();
        this.disciplinaService.disciplinaSelecionada = {
            $codigoDisciplina: null,
            nome: '',
            media: ''
        };
    };
    DisciplinaCriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-disciplina-cria',
            template: __webpack_require__("../../../../../src/app/disciplinas/cria/disciplina-cria.html"),
            styles: [__webpack_require__("../../../../../src/app/disciplinas/cria/disciplina-cria.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crud_disciplina_service__["a" /* DisciplinaService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], DisciplinaCriaComponent);
    return DisciplinaCriaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/disciplinas/crud/disciplina.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Disciplina; });
var Disciplina = (function () {
    function Disciplina() {
    }
    return Disciplina;
}());



/***/ }),

/***/ "../../../../../src/app/disciplinas/crud/disciplina.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisciplinaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__disciplina_model__ = __webpack_require__("../../../../../src/app/disciplinas/crud/disciplina.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisciplinaService = (function () {
    function DisciplinaService(firebase) {
        this.firebase = firebase;
        this.disciplinaSelecionada = new __WEBPACK_IMPORTED_MODULE_2__disciplina_model__["a" /* Disciplina */]();
    }
    DisciplinaService.prototype.getData = function () {
        this.disciplinasLista = this.firebase.list('Disciplina');
        return this.disciplinasLista;
    };
    DisciplinaService.prototype.disciplinaById = function (idDisciplina) {
        return this.firebase.database.ref('/Disciplina/' + idDisciplina).once('value');
    };
    DisciplinaService.prototype.inserirDisciplina = function (disciplina) {
        this.disciplinasLista.push({
            nome: disciplina.nome,
            media: disciplina.media,
        });
    };
    DisciplinaService.prototype.alterarDisciplina = function (disciplina) {
        this.disciplinasLista.update(disciplina.$codigoDisciplina, {
            nome: disciplina.nome,
            media: disciplina.media
        });
    };
    DisciplinaService.prototype.deletarDisciplina = function ($codigoDisciplina) {
        this.disciplinasLista.remove($codigoDisciplina);
    };
    DisciplinaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DisciplinaService);
    return DisciplinaService;
}());



/***/ }),

/***/ "../../../../../src/app/disciplinas/disciplinas.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Empty*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/disciplinas/disciplinas.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n  <h2 class=\"jumbotron\">Disciplinas</h2>\r\n</div>\r\n<div class=\"container-fluid mt-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-disciplina-cria></app-disciplina-cria>\r\n    </div>\r\n    <div class=\"col\">\r\n      <app-disciplina-lista></app-disciplina-lista>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/disciplinas/disciplinas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisciplinasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_disciplina_service__ = __webpack_require__("../../../../../src/app/disciplinas/crud/disciplina.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisciplinasComponent = (function () {
    function DisciplinasComponent(disciplinaService) {
        this.disciplinaService = disciplinaService;
    }
    DisciplinasComponent.prototype.ngOnInit = function () {
    };
    DisciplinasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-disciplinas',
            template: __webpack_require__("../../../../../src/app/disciplinas/disciplinas.html"),
            styles: [__webpack_require__("../../../../../src/app/disciplinas/disciplinas.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__crud_disciplina_service__["a" /* DisciplinaService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crud_disciplina_service__["a" /* DisciplinaService */]])
    ], DisciplinasComponent);
    return DisciplinasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/disciplinas/lista/disciplina-lista.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Empty*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/disciplinas/lista/disciplina-lista.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"text-center\">Lista de disciplinas</h6><br/>\r\n<table class=\"ui very basic table\">\r\n  <thead>\r\n    <tr>\r\n      <th>Nome</th>\r\n      <th>Média</th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let d of disciplinasLista\">\r\n        <td> {{ d.nome }} </td>\r\n        <td> {{ d.media }} </td>\r\n        <td class=\"right aligned\">\r\n          <button class=\"ui blue button\" (click)=\"editarDisciplina(d)\">\r\n            <i class=\"fa fa-pencil\"></i>\r\n          </button>\r\n          <button class=\"ui red button\" (click)=\"deletarDisciplina(d.$codigoDisciplina)\">\r\n            <i class=\"fa fa-trash-o\"></i>\r\n          </button>\r\n        </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/disciplinas/lista/disciplina-lista.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisciplinaListaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_disciplina_service__ = __webpack_require__("../../../../../src/app/disciplinas/crud/disciplina.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DisciplinaListaComponent = (function () {
    function DisciplinaListaComponent(disciplinaService, tostr) {
        this.disciplinaService = disciplinaService;
        this.tostr = tostr;
        this.listaDisciplinas();
    }
    DisciplinaListaComponent.prototype.ngOnInit = function () {
    };
    DisciplinaListaComponent.prototype.editarDisciplina = function (disciplina) {
        this.disciplinaService.disciplinaSelecionada = Object.assign({}, disciplina);
    };
    DisciplinaListaComponent.prototype.deletarDisciplina = function (codigoDisciplina) {
        if (confirm('Deseja realmente excluir este registro?') === true) {
            this.disciplinaService.deletarDisciplina(codigoDisciplina);
            this.tostr.success('Registro deletado.');
        }
    };
    DisciplinaListaComponent.prototype.listaDisciplinas = function () {
        var _this = this;
        var x = this.disciplinaService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.disciplinasLista = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['$codigoDisciplina'] = element.key;
                _this.disciplinasLista.push(y);
            });
        });
    };
    DisciplinaListaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-disciplina-lista',
            template: __webpack_require__("../../../../../src/app/disciplinas/lista/disciplina-lista.html"),
            styles: [__webpack_require__("../../../../../src/app/disciplinas/lista/disciplina-lista.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crud_disciplina_service__["a" /* DisciplinaService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], DisciplinaListaComponent);
    return DisciplinaListaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-tabs></app-tabs>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-facebook, .btn-google, .btn-twitter {\r\n    width: 32%;\r\n}\r\n\r\n.btn-facebook {\r\n    background: #3b5998;\r\n    color: #fff;\r\n}\r\n\r\n.btn-google {\r\n    background: #dd4b49;\r\n    color: #fff\r\n}\r\n\r\n.btn-twitter {\r\n    background: #55acee;\r\n    color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 mx-auto mt-5\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h2 class=\"text-center\">Login</h2>\n        <form (submit)=\"logar()\">\n          <div class=\"form-group\">\n            <label for=\"email\">E-mail</label>\n            <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"email\" class=\"form-control\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"senha\">Senha</label>\n            <input type=\"password\" name=\"senha\" id=\"senha\" [(ngModel)]=\"senha\" class=\"form-control\">\n          </div>\n          <button class=\"btn btn-success btn-block btn-lg\" type=\"submit\">Acessar</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4 mx-auto mt-2\">\n    <div class=\"card\">\n      <div class=\"card-body d-flex justify-content-around\">\n        <button class=\"btn btn-lg btn-facebook\"><i class=\"fa fa-facebook-official\"></i> Facebook</button>\n        <button class=\"btn btn-lg btn-google\"><i class=\"fa fa-google-plus\" (click)=\"logarComGoogle()\"></i> Google</button>\n        <button class=\"btn btn-lg btn-twitter\"><i class=\"fa fa-twitter\"></i> Twitter</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, angularRouter) {
        this.authService = authService;
        this.angularRouter = angularRouter;
        this.logged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.logar = function () {
        var _this = this;
        this.authService.logar(this.email, this.email)
            .then(function (res) {
            localStorage.setItem('user_school@user', JSON.stringify(res));
            _this.angularRouter.navigate(['/alunos']);
            _this.logged.emit(true);
        }).catch(function (err) {
            console.log('Erro ao autenticar usuário');
            console.log(err);
            _this.angularRouter.navigate(['/login']);
        });
    };
    LoginComponent.prototype.logarComGoogle = function () {
        this.authService.logarGoogle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "logged", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Login <span class=\"text-danger\">School</span></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav mr-auto\" *ngIf=\"logado\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/alunos\">Alunos</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/professores\">Professores</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/disciplinas\">Disciplinas</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/turmas\">Turmas</a>\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/criar-sala\">Sala de aula</a>\n        </li> -->\n      </ul>\n      <ul class=\"navbar-nav mx-auto\" *ngIf=\"!logado\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/registro\">Registrar-se</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav mx-auto\" *ngIf=\"logado\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"sair()\">Sair</a>\n        </li>\n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = (function () {
    function NavComponent(authService, routerAngular) {
        this.authService = authService;
        this.routerAngular = routerAngular;
        this.logado = false;
        this.logged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.usuarioLogado().subscribe(function (auth) {
            if (auth) {
                _this.logado = true;
                _this.nomeUsuario = auth.displayName;
                _this.emailUsuario = auth.email;
            }
            else {
                _this.logado = false;
            }
        });
    };
    NavComponent.prototype.sair = function () {
        this.logged.emit(false);
        localStorage.removeItem('user');
        this.authService.sair();
        this.routerAngular.navigate(['/registro']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NavComponent.prototype, "logged", void 0);
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pagina-not-found/pagina-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pagina-not-found/pagina-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto text-center\">\n    <div class=\"card\">\n      <h1><span class=\"text-danger\">Ops!</span></h1>\n      <h2>404 Página não encontrada</h2>\n      <div class=\"card-body\">\n        <a href=\"/\" class=\"btn btn-primary btn-lg\">\n          <i class=\"fa fa-home\"></i>\n          Voltar para home\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pagina-not-found/pagina-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginaNotFoundComponent; });
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

var PaginaNotFoundComponent = (function () {
    function PaginaNotFoundComponent() {
    }
    PaginaNotFoundComponent.prototype.ngOnInit = function () {
    };
    PaginaNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagina-not-found',
            template: __webpack_require__("../../../../../src/app/pagina-not-found/pagina-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pagina-not-found/pagina-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginaNotFoundComponent);
    return PaginaNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/professores/cria/professor-cria.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Empty*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/professores/cria/professor-cria.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"text-center\">Cadastrar professor</h6><br/>\r\n<form #professorForm=\"ngForm\" (ngSubmit)=\"submitarFormulario(professorForm)\">\r\n    <input type=\"hidden\" name=\"$codigoProfessor\" #$key=\"ngModel\" [(ngModel)]=\"professorService.professorSelecionado.$codigoProfessor\">\r\n  <div class=\"form-group\">\r\n    <label>Nome</label>\r\n    <input class=\"form-control\" name=\"nome\" #name=\"ngModel\" [(ngModel)]=\"professorService.professorSelecionado.nome\" placeholder=\"Informe o nome\" required>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Sobrenome</label>\r\n    <input class=\"form-control\" name=\"sobrenome\" #position=\"ngModel\" [(ngModel)]=\"professorService.professorSelecionado.sobrenome\" placeholder=\"Informe o sobrenome\" required>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Idade</label>\r\n    <input class=\"form-control\" name=\"idade\" #office=\"ngModel\" [(ngModel)]=\"professorService.professorSelecionado.idade\" placeholder=\"Informe a idade\" required>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!professorForm.valid\">\r\n      <i class=\"fa fa-check\"></i>\r\n       Cadastrar\r\n      </button>\r\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"resetarFormulario(professorForm)\">\r\n      <i class=\"fa fa-tr\"></i>\r\n       Limpar\r\n      </button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/professores/cria/professor-cria.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorCriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_professor_service__ = __webpack_require__("../../../../../src/app/professores/crud/professor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfessorCriaComponent = (function () {
    function ProfessorCriaComponent(professorService, tostr) {
        this.professorService = professorService;
        this.tostr = tostr;
    }
    ProfessorCriaComponent.prototype.ngOnInit = function () {
        this.resetarFormulario();
    };
    ProfessorCriaComponent.prototype.submitarFormulario = function (professorForm) {
        if (professorForm.value.$codigoProfessor == null) {
            this.professorService.inserirProfessor(professorForm.value);
            this.tostr.success('Professor salvo com sucesso.');
        }
        else {
            this.professorService.alterarProfessor(professorForm.value);
            this.tostr.success('Alteração salva.');
        }
        this.resetarFormulario(professorForm);
    };
    ProfessorCriaComponent.prototype.resetarFormulario = function (professorForm) {
        professorForm.reset();
        this.professorService.professorSelecionado = {
            $codigoProfessor: null,
            nome: '',
            sobrenome: '',
            idade: ''
        };
    };
    ProfessorCriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-professor-cria',
            template: __webpack_require__("../../../../../src/app/professores/cria/professor-cria.html"),
            styles: [__webpack_require__("../../../../../src/app/professores/cria/professor-cria.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crud_professor_service__["a" /* ProfessorService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], ProfessorCriaComponent);
    return ProfessorCriaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/professores/crud/professor.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Professor; });
var Professor = (function () {
    function Professor() {
    }
    return Professor;
}());



/***/ }),

/***/ "../../../../../src/app/professores/crud/professor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__professor_model__ = __webpack_require__("../../../../../src/app/professores/crud/professor.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfessorService = (function () {
    function ProfessorService(firebase) {
        this.firebase = firebase;
        this.professorSelecionado = new __WEBPACK_IMPORTED_MODULE_2__professor_model__["a" /* Professor */]();
    }
    ProfessorService.prototype.getData = function () {
        this.professoresLista = this.firebase.list('Professor');
        return this.professoresLista;
    };
    ProfessorService.prototype.professorById = function (idProfessor) {
        return this.firebase.database.ref('/Professor/' + idProfessor).once('value');
    };
    ProfessorService.prototype.inserirProfessor = function (professor) {
        this.professoresLista.push({
            nome: professor.nome,
            sobrenome: professor.sobrenome,
            idade: professor.idade
        });
    };
    ProfessorService.prototype.alterarProfessor = function (professor) {
        this.professoresLista.update(professor.$codigoProfessor, {
            nome: professor.nome,
            sobrenome: professor.sobrenome,
            idade: professor.idade
        });
    };
    ProfessorService.prototype.deletarProfessor = function ($key) {
        this.professoresLista.remove($key);
    };
    ProfessorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProfessorService);
    return ProfessorService;
}());



/***/ }),

/***/ "../../../../../src/app/professores/lista/professor-lista.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Empty*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/professores/lista/professor-lista.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"text-center\">Lista de professores</h6><br/>\r\n<table class=\"ui very basic table\">\r\n  <thead>\r\n    <tr>\r\n      <th>Nome</th>\r\n      <th>Sobrenome</th>\r\n      <th>Idade</th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let p of professoresLista\">\r\n        <td> {{ p.nome }} </td>\r\n        <td> {{ p.sobrenome }} </td>\r\n        <td> {{ p.idade }} </td>\r\n        <td class=\"right aligned\">\r\n          <button class=\"ui blue button\" (click)=\"editarProfessor(p)\">\r\n            <i class=\"fa fa-pencil\"></i>\r\n          </button>\r\n          <button class=\"ui red button\" (click)=\"deletarProfessor(p.$codigoProfessor)\">\r\n            <i class=\"fa fa-trash-o\"></i>\r\n          </button>\r\n        </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/professores/lista/professor-lista.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorListaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_professor_service__ = __webpack_require__("../../../../../src/app/professores/crud/professor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfessorListaComponent = (function () {
    function ProfessorListaComponent(professorService, tostr) {
        this.professorService = professorService;
        this.tostr = tostr;
        this.listaProfessores();
    }
    ProfessorListaComponent.prototype.ngOnInit = function () {
    };
    ProfessorListaComponent.prototype.editarProfessor = function (professor) {
        this.professorService.professorSelecionado = Object.assign({}, professor);
    };
    ProfessorListaComponent.prototype.deletarProfessor = function (codigoProfessor) {
        if (confirm('Deseja realmente excluir este registro?') === true) {
            this.professorService.deletarProfessor(codigoProfessor);
            this.tostr.success('Registro deletado.');
        }
    };
    ProfessorListaComponent.prototype.listaProfessores = function () {
        var _this = this;
        var x = this.professorService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.professoresLista = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['$codigoProfessor'] = element.key;
                _this.professoresLista.push(y);
            });
        });
    };
    ProfessorListaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-professor-lista',
            template: __webpack_require__("../../../../../src/app/professores/lista/professor-lista.html"),
            styles: [__webpack_require__("../../../../../src/app/professores/lista/professor-lista.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crud_professor_service__["a" /* ProfessorService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], ProfessorListaComponent);
    return ProfessorListaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/professores/professores.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Empty*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/professores/professores.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n  <h2 class=\"jumbotron\">Professores</h2>\r\n</div>\r\n<div class=\"container-fluid mt-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-professor-cria></app-professor-cria>\r\n    </div>\r\n    <div class=\"col\">\r\n      <app-professor-lista></app-professor-lista>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/professores/professores.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessoresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_professor_service__ = __webpack_require__("../../../../../src/app/professores/crud/professor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfessoresComponent = (function () {
    function ProfessoresComponent(professorService) {
        this.professorService = professorService;
    }
    ProfessoresComponent.prototype.ngOnInit = function () {
    };
    ProfessoresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-professores',
            template: __webpack_require__("../../../../../src/app/professores/professores.html"),
            styles: [__webpack_require__("../../../../../src/app/professores/professores.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__crud_professor_service__["a" /* ProfessorService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crud_professor_service__["a" /* ProfessorService */]])
    ], ProfessoresComponent);
    return ProfessoresComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registrar/registrar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registrar/registrar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 mx-auto mt-5\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h2 class=\"text-center\">Registro</h2>\n        <form (submit)=\"registrarUsuario()\">\n          <div class=\"form-group\">\n            <label for=\"email\">E-mail</label>\n            <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"email\" class=\"form-control\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"senha\">Senha</label>\n            <input type=\"password\" name=\"senha\" id=\"senha\" [(ngModel)]=\"senha\" class=\"form-control\">\n          </div>\n          <button #btnRegistro class=\"btn btn-success btn-block btn-lg\" type=\"submit\">Registrar</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/registrar/registrar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrarComponent = (function () {
    function RegistrarComponent(authService, angularRouter, message, toastr) {
        this.authService = authService;
        this.angularRouter = angularRouter;
        this.message = message;
        this.toastr = toastr;
        this.logged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    RegistrarComponent.prototype.ngOnInit = function () {
    };
    RegistrarComponent.prototype.registrarUsuario = function () {
        var _this = this;
        this.authService.registro(this.email, this.email)
            .then(function (res) {
            // this.message.show('Usuário criando com sucesso', {cssClass: 'alert-success', timeout: 4000});
            _this.angularRouter.navigate(['/alunos']);
            _this.logged.emit(true);
        }).catch(function (err) {
            console.log('Erro ao inserir usuário');
            console.log(err);
            _this.toastr.warning(err.message);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], RegistrarComponent.prototype, "logged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btnRegistro'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RegistrarComponent.prototype, "btnRegistrar", void 0);
    RegistrarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registrar',
            template: __webpack_require__("../../../../../src/app/registrar/registrar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registrar/registrar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], RegistrarComponent);
    return RegistrarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sala-de-aula/cria/sala-de-aula-cria.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Empty*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sala-de-aula/cria/sala-de-aula-cria.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"text-center\">Criar sala de aula</h6><br/>\r\n<form #salaForm=\"ngForm\" (ngSubmit)=\"submitarFormulario(salaForm)\">\r\n  <input type=\"hidden\" name=\"$codigoSala\" #$key=\"ngModel\" [(ngModel)]=\"salaService.salaSelecionada.$codigoSala\">\r\n  <div class=\"form-group\">\r\n    <div class=\"form-group\">\r\n      <label>Turma *</label>\r\n      <select name=\"turmaId\" [(ngModel)]=\"salaService.salaSelecionada.turmaId\" class=\"form-control\">\r\n        <option value=\"\" selected> Selecione </option>\r\n        <!-- <option *ngIf=\"listaProfessores.length == 0\"><i>Nenhum professor cadastrado</i></option> -->\r\n        <option *ngFor=\"let t of listaTurmas\" value=\"{{ t.$codigoTurma }}\"> {{ t.nome }} </option>\r\n      </select>\r\n    </div>\r\n    <label>Alunos *</label>\r\n    <select name=\"alunoId\" multiple=\"\" [(ngModel)]=\"salaService.salaSelecionada.alunoId\" class=\"selectpicker show-menu-arrow form-control\">\r\n      <!-- <option *ngIf=\"listaProfessores.length == 0\"><i>Nenhum professor cadastrado</i></option> -->\r\n      <option *ngFor=\"let a of listaAlunos\" value=\"{{ a.$codigo }}\"> {{ a.nome }} </option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <ss-multiselect-dropdown [options]=\"myOptions\" [(ngModel)]=\"optionsModel\" (ngModelChange)=\"onChange($event)\"></ss-multiselect-dropdown>\r\n\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!salaForm.valid\">\r\n      <i class=\"fa fa-check\"></i>\r\n       Cadastrar\r\n    </button>\r\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"resetarFormulario(salaForm)\">\r\n      <i class=\"fa fa-tr\"></i>\r\n       Limpar\r\n    </button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/sala-de-aula/cria/sala-de-aula-cria.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalaCriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_sala_de_aula_service__ = __webpack_require__("../../../../../src/app/sala-de-aula/crud/sala-de-aula.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alunos_crud_aluno_service__ = __webpack_require__("../../../../../src/app/alunos/crud/aluno.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__turmas_crud_turma_service__ = __webpack_require__("../../../../../src/app/turmas/crud/turma.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SalaCriaComponent = (function () {
    function SalaCriaComponent(salaService, tostr, alunoService, turmaService, dropdown) {
        var _this = this;
        this.salaService = salaService;
        this.tostr = tostr;
        this.alunoService = alunoService;
        this.turmaService = turmaService;
        this.dropdown = dropdown;
        var dadosAluno = this.alunoService.getData();
        dadosAluno.snapshotChanges().subscribe(function (item) {
            _this.listaAlunos = [];
            item.forEach(function (element) {
                var dadosAlunoJson = element.payload.toJSON();
                dadosAlunoJson['$codigo'] = element.key;
                _this.listaAlunos.push(dadosAlunoJson);
            });
        });
        var dadosTurma = this.turmaService.getData();
        dadosTurma.snapshotChanges().subscribe(function (item) {
            _this.listaTurmas = [];
            item.forEach(function (element) {
                var dadosTurmaJson = element.payload.toJSON();
                dadosTurmaJson['$codigoTurma'] = element.key;
                _this.listaTurmas.push(dadosTurmaJson);
            });
        });
    }
    SalaCriaComponent.prototype.ngOnInit = function () {
        this.resetarFormulário();
        this.myOptions = [
            { id: 1, name: 'Option 1' },
            { id: 2, name: 'Option 2' },
        ];
    };
    SalaCriaComponent.prototype.onChange = function () {
        console.log(this.optionsModel);
    };
    SalaCriaComponent.prototype.submitarFormulário = function (salaForm) {
        if (salaForm.value.$key == null) {
            this.salaService.criarSala(salaForm.value);
            this.tostr.success('Disciplina salva com sucesso.');
        }
        else {
            this.salaService.alterarSala(salaForm.value);
            this.tostr.success('Alteração salva.');
        }
        this.resetarFormulário(salaForm);
    };
    SalaCriaComponent.prototype.resetarFormulário = function (salaForm) {
        salaForm.reset();
        this.salaService.salaSelecionada = {
            $codigoSala: null,
            turmaId: '',
            alunoId: ''
        };
    };
    SalaCriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sala-cria',
            template: __webpack_require__("../../../../../src/app/sala-de-aula/cria/sala-de-aula-cria.html"),
            styles: [__webpack_require__("../../../../../src/app/sala-de-aula/cria/sala-de-aula-cria.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crud_sala_de_aula_service__["a" /* SalaService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__alunos_crud_aluno_service__["a" /* AlunoService */],
            __WEBPACK_IMPORTED_MODULE_3__turmas_crud_turma_service__["a" /* TurmaService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], SalaCriaComponent);
    return SalaCriaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sala-de-aula/crud/sala-de-aula.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sala; });
var Sala = (function () {
    function Sala() {
    }
    return Sala;
}());



/***/ }),

/***/ "../../../../../src/app/sala-de-aula/crud/sala-de-aula.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sala_de_aula_model__ = __webpack_require__("../../../../../src/app/sala-de-aula/crud/sala-de-aula.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalaService = (function () {
    function SalaService(firebase) {
        this.firebase = firebase;
        this.salaSelecionada = new __WEBPACK_IMPORTED_MODULE_2__sala_de_aula_model__["a" /* Sala */]();
    }
    SalaService.prototype.getData = function () {
        this.salaDados = this.firebase.list('Sala');
        return this.salaDados;
    };
    SalaService.prototype.criarSala = function (sala) {
        this.salaDados.push({
            turmaId: sala.turmaId,
            alunoId: sala.turmaId,
        });
    };
    SalaService.prototype.alterarSala = function (sala) {
        this.salaDados.update(sala.$codigoSala, {
            turmaId: sala.turmaId,
            alunoId: sala.alunoId
        });
    };
    SalaService.prototype.deletarSala = function ($codigoSala) {
        this.salaDados.remove($codigoSala);
    };
    SalaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SalaService);
    return SalaService;
}());



/***/ }),

/***/ "../../../../../src/app/sala-de-aula/lista/sala-de-aula-lista.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Empty*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sala-de-aula/lista/sala-de-aula-lista.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"text-center\">Salas de aula</h6><br/>\r\n<table class=\"ui very basic table\">\r\n  <thead>\r\n    <tr>\r\n      <th>Sala</th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tr *ngFor=\"let s of salasLista\">\r\n      <td> {{ s.nome }} </td>\r\n      <td class=\"right aligned\">\r\n        <button class=\"ui blue button\" (click)=\"editarSala(s)\">\r\n          <i class=\"fa fa-pencil\"></i>\r\n        </button>\r\n        <button class=\"ui red button\" (click)=\"deletarSala(s.$codigoSala)\">\r\n          <i class=\"fa fa-trash-o\"></i>\r\n        </button>\r\n      </td>\r\n  </tr>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/sala-de-aula/lista/sala-de-aula-lista.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalaListaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_sala_de_aula_service__ = __webpack_require__("../../../../../src/app/sala-de-aula/crud/sala-de-aula.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalaListaComponent = (function () {
    function SalaListaComponent(salaService, tostr) {
        this.salaService = salaService;
        this.tostr = tostr;
    }
    SalaListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var x = this.salaService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.salasLista = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['$codigoSala'] = element.key;
                _this.salasLista.push(y);
            });
        });
    };
    SalaListaComponent.prototype.editarDisciplina = function (sala) {
        this.salaService.salaSelecionada = Object.assign({}, sala);
    };
    SalaListaComponent.prototype.deletarDisciplina = function (codigoSala) {
        if (confirm('Deseja realmente excluir este registro?') === true) {
            this.salaService.deletarSala(codigoSala);
            this.tostr.success('Registro deletado.');
        }
    };
    SalaListaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sala-lista',
            template: __webpack_require__("../../../../../src/app/sala-de-aula/lista/sala-de-aula-lista.html"),
            styles: [__webpack_require__("../../../../../src/app/sala-de-aula/lista/sala-de-aula-lista.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crud_sala_de_aula_service__["a" /* SalaService */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */]])
    ], SalaListaComponent);
    return SalaListaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sala-de-aula/sala-de-aula.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Empty*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sala-de-aula/sala-de-aula.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n  <h2 class=\"jumbotron\">Sala de aula</h2>\r\n</div>\r\n<div class=\"container-fluid mt-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-sala-cria></app-sala-cria>\r\n    </div>\r\n    <div class=\"col\">\r\n      <app-sala-lista></app-sala-lista>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/sala-de-aula/sala-de-aula.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_sala_de_aula_service__ = __webpack_require__("../../../../../src/app/sala-de-aula/crud/sala-de-aula.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalaComponent = (function () {
    function SalaComponent(salaService) {
        this.salaService = salaService;
    }
    SalaComponent.prototype.ngOnInit = function () {
    };
    SalaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sala',
            template: __webpack_require__("../../../../../src/app/sala-de-aula/sala-de-aula.html"),
            styles: [__webpack_require__("../../../../../src/app/sala-de-aula/sala-de-aula.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__crud_sala_de_aula_service__["a" /* SalaService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crud_sala_de_aula_service__["a" /* SalaService */]])
    ], SalaComponent);
    return SalaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tabs/tabs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-tab-body {\r\n    transition: none !important;\r\n    -webkit-transform: none !important;\r\n            transform: none !important;\r\n}\r\n\r\n.mat-tab-body-content {\r\n    transition: none !important;\r\n    -webkit-transform: none !important;\r\n            transform: none !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<mat-tab-group (selectedIndexChange)=\"trocar($event)\">\r\n  <mat-tab *ngFor=\"let rota of navLinks; let i = index\" [routerLink]=\"rota.link\" [label]=\"rota.label\" style=\"transition: none !important;\">\r\n    <router-outlet *ngIf=\"tabIndex == i\"></router-outlet>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsComponent = (function () {
    function TabsComponent(router, routerAngular) {
        this.router = router;
        this.routerAngular = routerAngular;
        this.tabIndex = 0;
        this.navLinks = [
            {
                label: 'Alunos',
                link: '/alunos',
                index: 0
            },
            {
                label: 'Professores',
                link: '/professores',
                index: 1
            },
            {
                label: 'Disciplinas',
                link: '/disciplinas',
                index: 2
            },
            {
                label: 'Turmas',
                link: '/turmas',
                index: 3
            },
            {
                label: 'Criar sala de aula',
                link: '/criar-sala',
                index: 4
            }
        ];
        this.trocar(this.tabIndex);
    }
    TabsComponent.prototype.ngOnInit = function () {
        this.routerAngular.events.subscribe(function () {
            // alert('teste');
        });
    };
    TabsComponent.prototype.trocar = function (tab) {
        this.tabIndex = tab;
        this.routerAngular.navigateByUrl(this.navLinks[tab].link);
    };
    TabsComponent.prototype.tabChanged = function (tabChangeEvent) {
        console.log('tabChangeEvent =>', tabChangeEvent);
    };
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__("../../../../../src/app/tabs/tabs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tabs/tabs.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* AppRouter */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/turmas/cria/turma-cria.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Empty*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/turmas/cria/turma-cria.html":
/***/ (function(module, exports) {

module.exports = "<form #turmaForm=\"ngForm\" (ngSubmit)=\"submitarFormulario(turmaForm)\">\r\n    <input type=\"hidden\" name=\"$codigoTurma\" #$key=\"ngModel\" [(ngModel)]=\"turmaService.turmaSelecionada.$codigoTurma\">\r\n  <div class=\"form-group\">\r\n    <label>Nome</label>\r\n    <input class=\"form-control\" name=\"nome\" #name=\"ngModel\" [(ngModel)]=\"turmaService.turmaSelecionada.nome\" placeholder=\"Informe o nome da turma\" required>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Professor da turma *</label>\r\n    <select name=\"professorId\" [(ngModel)]=\"turmaService.turmaSelecionada.professorId\" class=\"form-control\">\r\n      <option value=\"\" selected> Selecione </option>\r\n      <!-- <option *ngIf=\"listaProfessores.length == 0\"><i>Nenhum professor cadastrado</i></option> -->\r\n      <option *ngFor=\"let p of listaProfessores\" value=\"{{ p.$codigoProfessor }}\"> {{ p.nome }} </option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label>Disciplina da turma *</label>\r\n    <select name=\"disciplinaId\" [(ngModel)]=\"turmaService.turmaSelecionada.disciplinaId\" class=\"form-control\">\r\n      <option value=\"\" selected> Selecione </option>\r\n      <!-- <option *ngIf=\"listaProfessores.length == 0\"><i>Nenhum professor cadastrado</i></option> -->\r\n      <option *ngFor=\"let d of listaDisciplinas\" value=\"{{ d.$codigoDisciplina }}\"> {{ d.nome }} </option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <button class=\"btn btn-success\" type=\"submit\" [disabled]=\"!turmaForm.valid\">\r\n      <i class=\"fa fa-check\"></i>\r\n       Cadastrar\r\n    </button>\r\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"resetarFormulario(turmaForm)\">\r\n      <i class=\"fa fa-tr\"></i>\r\n       Limpar\r\n    </button>\r\n  </div>\r\n</form>\r\n\r\n<table class=\"ui very basic table\" *ngIf=\"turmaService.turmaSelecionada.$codigoTurma\">\r\n  <thead>\r\n    <tr>\r\n      <th>Nome</th>\r\n      <th>Sobrenome</th>\r\n      <th>Idade</th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let a of listaAlunos\">\r\n      <td> {{ a.nome }} </td>\r\n      <td> {{ a.sobrenome }} </td>\r\n      <td> {{ a.idade }} </td>\r\n      <td class=\"right aligned\">\r\n        <span *ngIf=\"isAlocado(a.$codigoAluno)\">Alocado</span>\r\n        <button *ngIf=\"!isAlocado(a.$codigoAluno)\" class=\"ui green button\" (click)=\"alocarAluno(a, turmaService.turmaSelecionada.$codigoTurma)\">\r\n          <i class=\"fa fa-arrow-right\"></i>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<!-- <table class=\"ui very basic table\" *ngIf=\"turmaService.turmaSelecionada.$codigoTurma\">\r\n    <thead>\r\n      <tr>\r\n        <th>Nome</th>\r\n        <th>Sobrenome</th>\r\n        <th>Idade</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let a of turmaService.turmaSelecionada.listaAlunos\">\r\n        <td> {{ a.nome }} </td>\r\n        <td> {{ a.sobrenome }} </td>\r\n        <td> {{ a.idade }} </td>\r\n        <td class=\"right aligned\">\r\n          <button class=\"ui green button\" (click)=\"alocarAluno(a, turmaService.turmaSelecionada.$codigoTurma)\">\r\n            <i class=\"fa fa-pencil\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table> -->"

/***/ }),

/***/ "../../../../../src/app/turmas/cria/turma-cria.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmaCriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_turma_service__ = __webpack_require__("../../../../../src/app/turmas/crud/turma.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alunos_crud_aluno_service__ = __webpack_require__("../../../../../src/app/alunos/crud/aluno.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__professores_crud_professor_service__ = __webpack_require__("../../../../../src/app/professores/crud/professor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__disciplinas_crud_disciplina_service__ = __webpack_require__("../../../../../src/app/disciplinas/crud/disciplina.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TurmaCriaComponent = (function () {
    // @ViewChild('idTurma') idTurma: ElementRef;
    function TurmaCriaComponent(turmaService, tostr, professorService, disciplinaService, alunoService) {
        var _this = this;
        this.turmaService = turmaService;
        this.tostr = tostr;
        this.professorService = professorService;
        this.disciplinaService = disciplinaService;
        this.alunoService = alunoService;
        this.isEdicao = false;
        this.listaProfessores = professorService.getData();
        this.listaDisciplinas = disciplinaService.getData();
        var dadosAluno = this.alunoService.getData();
        dadosAluno.snapshotChanges().subscribe(function (item) {
            _this.listaAlunos = [];
            item.forEach(function (element) {
                var dadosAlunoJson = element.payload.toJSON();
                dadosAlunoJson['$codigoAluno'] = element.key;
                _this.listaAlunos.push(dadosAlunoJson);
            });
        });
        var dadosProfessor = this.professorService.getData();
        dadosProfessor.snapshotChanges().subscribe(function (item) {
            _this.listaProfessores = [];
            item.forEach(function (element) {
                var dadosProfessorJson = element.payload.toJSON();
                dadosProfessorJson['$codigoProfessor'] = element.key;
                _this.listaProfessores.push(dadosProfessorJson);
            });
        });
        var dadosDisciplina = this.disciplinaService.getData();
        dadosDisciplina.snapshotChanges().subscribe(function (item) {
            _this.listaDisciplinas = [];
            item.forEach(function (element) {
                var dadosDisciplinaJson = element.payload.toJSON();
                dadosDisciplinaJson['$codigoDisciplina'] = element.key;
                _this.listaDisciplinas.push(dadosDisciplinaJson);
            });
        });
    }
    TurmaCriaComponent.prototype.ngOnInit = function () {
        this.resetarFormulario();
    };
    TurmaCriaComponent.prototype.submitarFormulario = function (turmaForm) {
        if (turmaForm.value.$codigoTurma == null) {
            this.turmaService.inserirTurma(turmaForm.value);
            this.tostr.success('Turma salva com sucesso.');
        }
        else {
            this.turmaService.alterarTurma(turmaForm.value);
            this.tostr.success('Alteração salva.');
        }
        this.resetarFormulario(turmaForm);
    };
    TurmaCriaComponent.prototype.resetarFormulario = function (turmaForm) {
        turmaForm.reset();
        this.turmaService.turmaSelecionada = {
            $codigoTurma: null,
            nome: '',
            professorId: null,
            disciplinaId: null,
            listaAlunos: null
        };
    };
    TurmaCriaComponent.prototype.isAlocado = function (alunoId) {
        var listaDaTurma = this.turmaService.turmaSelecionada.listaAlunos;
        if (listaDaTurma.indexOf(alunoId) !== -1) {
            return true;
        }
        return false;
    };
    TurmaCriaComponent.prototype.alocarAluno = function (aluno, idTurma) {
        var alunoId = aluno.$codigoAluno;
        this.turmaService.alocarAlunoTurma(alunoId, idTurma);
        this.turmaService.turmaSelecionada.listaAlunos.push(aluno.$codigoAluno);
    };
    TurmaCriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-turma-cria',
            template: __webpack_require__("../../../../../src/app/turmas/cria/turma-cria.html"),
            styles: [__webpack_require__("../../../../../src/app/turmas/cria/turma-cria.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crud_turma_service__["a" /* TurmaService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__professores_crud_professor_service__["a" /* ProfessorService */],
            __WEBPACK_IMPORTED_MODULE_5__disciplinas_crud_disciplina_service__["a" /* DisciplinaService */],
            __WEBPACK_IMPORTED_MODULE_3__alunos_crud_aluno_service__["a" /* AlunoService */]])
    ], TurmaCriaComponent);
    return TurmaCriaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/turmas/crud/turma.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Turma; });
var Turma = (function () {
    function Turma() {
    }
    return Turma;
}());



/***/ }),

/***/ "../../../../../src/app/turmas/crud/turma.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turma_model__ = __webpack_require__("../../../../../src/app/turmas/crud/turma.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TurmaService = (function () {
    function TurmaService(firebase, afs) {
        this.firebase = firebase;
        this.afs = afs;
        this.turmaSelecionada = new __WEBPACK_IMPORTED_MODULE_2__turma_model__["a" /* Turma */]();
        this.listaTurmaAluno = this.firebase.list('TurmaAluno');
    }
    TurmaService.prototype.getData = function () {
        this.turmasLista = this.firebase.list('Turmas');
        return this.turmasLista;
    };
    TurmaService.prototype.inserirTurma = function (turma) {
        this.turmasLista.push({
            nome: turma.nome,
            professorId: turma.professorId,
            disciplinaId: turma.disciplinaId
        });
    };
    TurmaService.prototype.alunoByTurma = function () {
        return this.firebase.database.ref('/TurmaAluno/').once('value');
    };
    TurmaService.prototype.alocarAlunoTurma = function (idAluno, idTurma) {
        this.listaTurmaAluno.push({
            alunoId: idAluno,
            turmaId: idTurma
        });
    };
    TurmaService.prototype.alterarTurma = function (turma) {
        this.turmasLista.update(turma.$codigoTurma, {
            nome: turma.nome,
            professorId: turma.professorId,
            disciplinaId: turma.disciplinaId
        });
    };
    TurmaService.prototype.deletarTurma = function ($codigoTurma) {
        this.turmasLista.remove($codigoTurma);
    };
    TurmaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], TurmaService);
    return TurmaService;
}());



/***/ }),

/***/ "../../../../../src/app/turmas/lista/turma-lista.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Empty*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/turmas/lista/turma-lista.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"text-center\">Lista de Turmas</h6><br/>\r\n<table class=\"ui very basic table\">\r\n  <thead>\r\n    <tr>\r\n      <th>Turma</th>\r\n      <th>Professor</th>\r\n      <th>Disciplina</th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let t of turmasLista\">\r\n        <td> {{ t.nome }} </td>\r\n        <td> {{ t.dadosProfessor.nome }} </td>\r\n        <td> {{ t.dadosDisciplina.nome }} </td>\r\n        <td class=\"right aligned\">\r\n          <button class=\"ui green button\" (click)=\"alocarAluno(t)\">\r\n            <i class=\"fa fa-user\"></i>\r\n          </button>\r\n          <button class=\"ui blue button\" (click)=\"editarTurma(t)\">\r\n            <i class=\"fa fa-pencil\"></i>\r\n          </button>\r\n          <button class=\"ui red button\" (click)=\"deletarTurma(t.$codigoTurma)\">\r\n            <i class=\"fa fa-trash-o\"></i>\r\n          </button>\r\n        </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/turmas/lista/turma-lista.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmaListaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_turma_service__ = __webpack_require__("../../../../../src/app/turmas/crud/turma.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__professores_crud_professor_service__ = __webpack_require__("../../../../../src/app/professores/crud/professor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__disciplinas_crud_disciplina_service__ = __webpack_require__("../../../../../src/app/disciplinas/crud/disciplina.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var TurmaListaComponent = (function () {
    function TurmaListaComponent(turmaService, professorService, disciplinaService, tostr) {
        this.turmaService = turmaService;
        this.professorService = professorService;
        this.disciplinaService = disciplinaService;
        this.tostr = tostr;
        this.listaTurmas();
    }
    TurmaListaComponent.prototype.ngOnInit = function () {
    };
    TurmaListaComponent.prototype.editarTurma = function (turma) {
        this.turmaService.turmaSelecionada = Object.assign({}, turma);
    };
    TurmaListaComponent.prototype.deletarTurma = function (codigoTurma) {
        if (confirm('Deseja realmente excluir este registro?') === true) {
            this.turmaService.deletarTurma(codigoTurma);
            this.tostr.success('Registro deletado.');
        }
    };
    TurmaListaComponent.prototype.listaTurmas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var x;
            return __generator(this, function (_a) {
                x = this.turmaService.getData();
                x.snapshotChanges().subscribe(function (item) {
                    _this.turmasLista = [];
                    item.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                        var y, p, d, t, listaDeAlunos, valores, key;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    y = element.payload.toJSON();
                                    return [4 /*yield*/, this.professorService.professorById(y['professorId'])];
                                case 1:
                                    p = _a.sent();
                                    return [4 /*yield*/, this.disciplinaService.disciplinaById(y['disciplinaId'])];
                                case 2:
                                    d = _a.sent();
                                    return [4 /*yield*/, this.turmaService.alunoByTurma()];
                                case 3:
                                    t = _a.sent();
                                    listaDeAlunos = [];
                                    valores = t.val();
                                    for (key in valores) {
                                        if (valores[key].turmaId === element.key) {
                                            listaDeAlunos.push(valores[key].alunoId);
                                        }
                                    }
                                    y['$codigoTurma'] = element.key;
                                    y['dadosProfessor'] = p.val();
                                    y['dadosDisciplina'] = d.val();
                                    y['listaAlunos'] = listaDeAlunos;
                                    console.log(y);
                                    this.turmasLista.push(y);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                });
                return [2 /*return*/];
            });
        });
    };
    TurmaListaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-turma-lista',
            template: __webpack_require__("../../../../../src/app/turmas/lista/turma-lista.html"),
            styles: [__webpack_require__("../../../../../src/app/turmas/lista/turma-lista.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crud_turma_service__["a" /* TurmaService */],
            __WEBPACK_IMPORTED_MODULE_2__professores_crud_professor_service__["a" /* ProfessorService */],
            __WEBPACK_IMPORTED_MODULE_3__disciplinas_crud_disciplina_service__["a" /* DisciplinaService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["b" /* ToastrService */]])
    ], TurmaListaComponent);
    return TurmaListaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/turmas/turmas.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Empty*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/turmas/turmas.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n  <h2 class=\"jumbotron\">Turmas</h2>\r\n</div>\r\n<div class=\"container-fluid mt-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <app-turma-cria></app-turma-cria>\r\n    </div>\r\n    <div class=\"col\">\r\n      <app-turma-lista></app-turma-lista>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/turmas/turmas.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__crud_turma_service__ = __webpack_require__("../../../../../src/app/turmas/crud/turma.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TurmasComponent = (function () {
    function TurmasComponent(turmaService) {
        this.turmaService = turmaService;
    }
    TurmasComponent.prototype.ngOnInit = function () {
    };
    TurmasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-turmas',
            template: __webpack_require__("../../../../../src/app/turmas/turmas.html"),
            styles: [__webpack_require__("../../../../../src/app/turmas/turmas.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__crud_turma_service__["a" /* TurmaService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__crud_turma_service__["a" /* TurmaService */]])
    ], TurmasComponent);
    return TurmasComponent;
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
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyCCkDAB0z7oKW4lrj1YmBERwh9k6bUA688',
        authDomain: 'sistema-login-w.firebaseapp.com',
        databaseURL: 'https://sistema-login-w.firebaseio.com',
        projectId: 'sistema-login-w',
        storageBucket: 'sistema-login-w.appspot.com',
        messagingSenderId: '636939460632'
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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