"use strict";
(self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["common"],{

/***/ 93483:
/*!**************************************************!*\
  !*** ./src/app/_helpers/confirmed.validators.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmedValidators": function() { return /* binding */ ConfirmedValidators; }
/* harmony export */ });
function ConfirmedValidators(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map