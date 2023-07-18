"use strict";
(self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_Employee_employee_module_ts"],{

/***/ 84891:
/*!***********************************************************!*\
  !*** ./src/app/pages/Employee/employee-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeRoutingModule": function() { return /* binding */ EmployeeRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee.component */ 22133);
/* harmony import */ var _Employees_employee_roles_employee_roles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Employees/employee-roles/employee-roles.component */ 66181);
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-details/employee-details.component */ 6290);
/* harmony import */ var _add_role_based_users_add_role_based_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-role-based-users/add-role-based-users.component */ 26480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    {
        path: '',
        component: _employee_component__WEBPACK_IMPORTED_MODULE_0__.EmployeeComponent,
        children: [
            {
                path: '',
                redirectTo: 'allEmployees',
                pathMatch: 'full'
            },
            {
                path: "allEmployees",
                component: _Employees_employee_roles_employee_roles_component__WEBPACK_IMPORTED_MODULE_1__.EmployeeRolesComponent
            },
            {
                path: "viewEmployee/:id",
                component: _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeDetailsComponent
            },
            {
                path: "add-roleUsers",
                component: _add_role_based_users_add_role_based_users_component__WEBPACK_IMPORTED_MODULE_3__.AddRoleBasedUsersComponent
            },
        ],
        pathMatch: 'prefix',
        data: {
            routerLinkActiveOptions: { exact: true, pathMatch: 'full' }
        }
    },
];
class EmployeeRoutingModule {
}
EmployeeRoutingModule.ɵfac = function EmployeeRoutingModule_Factory(t) { return new (t || EmployeeRoutingModule)(); };
EmployeeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EmployeeRoutingModule });
EmployeeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 13093:
/*!***************************************************!*\
  !*** ./src/app/pages/Employee/employee.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmployeeModule": function() { return /* binding */ EmployeeModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee-routing.module */ 84891);
/* harmony import */ var _view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-employee/view-employee.component */ 33490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class EmployeeModule {
}
EmployeeModule.ɵfac = function EmployeeModule_Factory(t) { return new (t || EmployeeModule)(); };
EmployeeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EmployeeModule });
EmployeeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmployeeModule, { declarations: [_view_employee_view_employee_component__WEBPACK_IMPORTED_MODULE_1__.ViewEmployeeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _employee_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmployeeRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_Employee_employee_module_ts-es2015.js.map