(function () {
  "use strict";

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["common"], {
    /***/
    93483:
    /*!**************************************************!*\
      !*** ./src/app/_helpers/confirmed.validators.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ConfirmedValidators": function ConfirmedValidators() {
          return (
            /* binding */
            _ConfirmedValidators
          );
        }
        /* harmony export */

      });

      function _ConfirmedValidators(controlName, matchingControlName) {
        return function (formGroup) {
          var control = formGroup.controls[controlName];
          var matchingControl = formGroup.controls[matchingControlName];

          if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
          }

          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({
              confirmedValidator: true
            });
          } else {
            matchingControl.setErrors(null);
          }
        };
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map