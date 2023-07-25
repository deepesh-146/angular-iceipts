(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_bank-module_bank-module_module_ts"], {
    /***/
    43701:
    /*!******************************************************************!*\
      !*** ./src/app/pages/bank-module/add-bank/add-bank.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddBankComponent": function AddBankComponent() {
          return (
            /* binding */
            _AddBankComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_helpers_confirmed_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_helpers/confirmed.validators */
      93483);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var src_app_core_services_bank_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/bank-service.service */
      91068);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_cash_in_hand_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/cash-in-hand-service.service */
      70039);
      /* harmony import */


      var src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/sale-invoice.service */
      26287);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      65924);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/core */
      32220);

      function AddBankComponent_mat_error_22_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " IFSC Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AddBankComponent_mat_error_22_mat_error_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " IFSC required MAHB0001115 format! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AddBankComponent_mat_error_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddBankComponent_mat_error_22_mat_error_1_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddBankComponent_mat_error_22_mat_error_2_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.f.IFSC.errors == null ? null : ctx_r0.f.IFSC.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.f.IFSC.errors == null ? null : ctx_r0.f.IFSC.errors.pattern);
        }
      }

      function AddBankComponent_mat_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r9.bankName);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r9.bankName, " ");
        }
      }

      function AddBankComponent_mat_error_32_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " BankName Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AddBankComponent_mat_error_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddBankComponent_mat_error_32_mat_error_1_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.f.BankName.errors == null ? null : ctx_r3.f.BankName.errors.required);
        }
      }

      function AddBankComponent_mat_error_38_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Branch Name Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AddBankComponent_mat_error_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddBankComponent_mat_error_38_mat_error_1_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.f.Branch.errors == null ? null : ctx_r4.f.Branch.errors.required);
        }
      }

      function AddBankComponent_mat_error_46_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Account Number Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AddBankComponent_mat_error_46_mat_error_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Account Number Required Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AddBankComponent_mat_error_46_mat_error_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Account Number Required Min Length 9 ! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AddBankComponent_mat_error_46_mat_error_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Account Number Required Max Length 19! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AddBankComponent_mat_error_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddBankComponent_mat_error_46_mat_error_1_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddBankComponent_mat_error_46_mat_error_2_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddBankComponent_mat_error_46_mat_error_3_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddBankComponent_mat_error_46_mat_error_4_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.f.AccountNumber.errors == null ? null : ctx_r5.f.AccountNumber.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.f.AccountNumber.errors == null ? null : ctx_r5.f.AccountNumber.errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.f.AccountNumber.errors == null ? null : ctx_r5.f.AccountNumber.errors.minLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.f.AccountNumber.errors == null ? null : ctx_r5.f.AccountNumber.errors.maxLength);
        }
      }

      function AddBankComponent_mat_error_52_mat_error_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Confirm Account Number Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AddBankComponent_mat_error_52_mat_error_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Confirm Account Number Required Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AddBankComponent_mat_error_52_mat_error_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Confirm Account Number Required Min Length 9 ! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AddBankComponent_mat_error_52_mat_error_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Confirm Account Number Required Max Length 19! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AddBankComponent_mat_error_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddBankComponent_mat_error_52_mat_error_1_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddBankComponent_mat_error_52_mat_error_2_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddBankComponent_mat_error_52_mat_error_3_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddBankComponent_mat_error_52_mat_error_4_Template, 2, 0, "mat-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.f.ConfirmAccountNumber.errors == null ? null : ctx_r6.f.ConfirmAccountNumber.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.f.ConfirmAccountNumber.errors == null ? null : ctx_r6.f.ConfirmAccountNumber.errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.f.ConfirmAccountNumber.errors == null ? null : ctx_r6.f.ConfirmAccountNumber.errors.minLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.f.ConfirmAccountNumber.errors == null ? null : ctx_r6.f.ConfirmAccountNumber.errors.maxLength);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _AddBankComponent = /*#__PURE__*/function () {
        function _AddBankComponent(formBuilder, router, toastService, bankService, http, titleCasePipe, cashInHandService, saleInvoiceService, dialog, dialogRef) {
          _classCallCheck(this, _AddBankComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.toastService = toastService;
          this.bankService = bankService;
          this.http = http;
          this.titleCasePipe = titleCasePipe;
          this.cashInHandService = cashInHandService;
          this.saleInvoiceService = saleInvoiceService;
          this.dialog = dialog;
          this.dialogRef = dialogRef;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.hide = true;
        }

        _createClass(_AddBankComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.bankForm = this.formBuilder.group({
              IFSC: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[A-Za-z]{4}0[0-9]{6}$')]],
              AccountHolderName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              BankName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              AccountNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(19)]],
              ConfirmAccountNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(19)]],
              Branch: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
            }, {
              validator: (0, src_app_helpers_confirmed_validators__WEBPACK_IMPORTED_MODULE_0__.ConfirmedValidators)('AccountNumber', 'ConfirmAccountNumber')
            });
          }
        }, {
          key: "BankDatasave",
          value: function BankDatasave() {
            var _this = this;

            this.submitted = true;
            this.isEdit = false;

            if (this.bankForm.invalid) {
              this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
              return false;
            } else {
              var body = {
                "bankDetails": {
                  "bankName": this.bankForm.controls.BankName.value,
                  "branchCode": this.bankForm.controls.Branch.value,
                  "accountNumber": this.bankForm.controls.AccountNumber.value,
                  "ifscCode": this.bankForm.controls.IFSC.value.toUpperCase(),
                  "accountHolderName": this.bankForm.controls.AccountHolderName.value
                }
              };

              if (this.bankForm.valid) {
                this.bankService.postBankDetails(body, this.currentUser.id).then(function (res) {
                  if (res) {
                    _this.toastService.openSnackBar("Bank Record Added Successfully!!!");

                    _this.router.navigate(["/pages/Bank-page"]);

                    _this.bankService.notifyPartyAdded();

                    _this.dialogRef.close();
                  }
                }, function (err) {
                  _this.toastService.openErrorSnackBar(_this.titleCasePipe.transform(err.error.error_message));
                });
              }
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.bankForm.reset();
            this.submitted = false;
            this.dialogRef.close();
          }
        }, {
          key: "f",
          get: function get() {
            return this.bankForm.controls;
          }
        }, {
          key: "numberOnly",
          value: function numberOnly(event) {
            var charCode = event.which ? event.which : event.keyCode;

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
              return false;
            }

            return true;
          }
        }, {
          key: "getIFSCCode",
          value: function getIFSCCode(ifscCode) {
            var _this2 = this;

            if (ifscCode) {
              var body = {
                "bankDetails": {
                  "ifscCode": this.bankForm.controls.IFSC.value
                }
              };
              this.bankService.getBankDetailsByIFSC(body, this.currentUser.id).then(function (res) {
                _this2.bankForm.patchValue({
                  'BankName': res.data.bankName,
                  'Branch': _this2.titleCasePipe.transform(res.data.branchCode)
                });

                _this2.toastService.openSnackBar("IFSC Code Validated Successfully!!!");
              }, function (err) {
                _this2.toastService.openErrorSnackBar(_this2.titleCasePipe.transform(err.error.error_message));
              });
            }
          }
        }]);

        return _AddBankComponent;
      }();

      _AddBankComponent.ɵfac = function AddBankComponent_Factory(t) {
        return new (t || _AddBankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_bank_service_service__WEBPACK_IMPORTED_MODULE_2__.BankServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_cash_in_hand_service_service__WEBPACK_IMPORTED_MODULE_3__.CashInHandServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_4__.SaleInvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef));
      };

      _AddBankComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _AddBankComponent,
        selectors: [["app-add-bank"]],
        decls: 53,
        vars: 27,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "row"], [1, "col-sm-12", "col-md-12", "col-lg-12", "mb-3"], ["appearance", "outline", 1, "example-full-width", 2, "font-size", "12px"], ["matInput", "", "placeholder", "Account Holder Name", "autocomplete", "off", "formControlName", "AccountHolderName", 1, "text-uppercase"], ["matInput", "", "placeholder", "IFSC", "formControlName", "IFSC", "autocomplete", "new-password", "value", "", 1, "text-uppercase", 3, "ngClass", "change"], ["class", "text-danger", 4, "ngIf"], [1, "col-md-6"], ["type", "text", "placeholder", "Bank Name", "formControlName", "BankName", "aria-label", "Select Party Name", "matInput", "", "autocomplete", "new-password", "readonly", "", 3, "matAutocomplete", "ngClass"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "placeholder", "Branch", "formControlName", "Branch", "value", "", "readonly", "", 1, "text-capitalize", 3, "ngClass"], ["matInput", "", "placeholder", "Account Number", "formControlName", "AccountNumber", "minlength", "9", "autocomplete", "new-password", "maxlength", "19", "value", "", "autocomplete", "off", 3, "type", "ngClass", "keypress"], ["matSuffix", "", 3, "click"], ["matInput", "", "type", "text", "placeholder", "Re Enter Account Number", "formControlName", "ConfirmAccountNumber", "minlength", "9", "maxlength", "19", "autocomplete", "new-password", "value", "", 3, "ngClass"], [1, "text-danger"], [4, "ngIf"], [3, "value"]],
        template: function AddBankComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Add Bank");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddBankComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddBankComponent_Template_button_click_6_listener() {
              return ctx.BankDatasave();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Account Holder Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "IFSC");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddBankComponent_Template_input_change_21_listener($event) {
              return ctx.getIFSCCode($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AddBankComponent_mat_error_22_Template, 3, 2, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Bank Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-autocomplete", null, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, AddBankComponent_mat_option_30_Template, 2, 2, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, AddBankComponent_mat_error_32_Template, 2, 1, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, " Branch Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, AddBankComponent_mat_error_38_Template, 2, 1, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Account Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function AddBankComponent_Template_input_keypress_43_listener($event) {
              return ctx.numberOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "mat-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddBankComponent_Template_mat_icon_click_44_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, AddBankComponent_mat_error_46_Template, 5, 4, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, " Re-Enter Account Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, AddBankComponent_mat_error_52_Template, 5, 4, "mat-error", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.bankForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](17, _c0, ctx.f.IFSC.invalid && ctx.f.IFSC.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.IFSC.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matAutocomplete", _r1)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c0, ctx.f.BankName.invalid && ctx.f.BankName.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 15, ctx.filteredOptions));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.BankName.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](21, _c0, ctx.f.Branch.invalid && ctx.f.Branch.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.Branch.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](23, _c0, ctx.f.AccountNumber.invalid && ctx.f.AccountNumber.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.hide ? "visibility_off" : "visibility", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.AccountNumber.touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](25, _c0, ctx.f.ConfirmAccountNumber.invalid && ctx.f.ConfirmAccountNumber.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.submitted || ctx.f.ConfirmAccountNumber.touched);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteTrigger, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
        styles: [".iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -22px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1iYW5rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSw0QkFBQTtBQUNKIiwiZmlsZSI6ImFkZC1iYW5rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25jYWxlbmRlcntcclxuICAgIGZsb2F0OiByaWdodCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjJweCFpbXBvcnRhbnQ7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    73106:
    /*!******************************************************************!*\
      !*** ./src/app/pages/bank-module/add-cash/add-cash.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddCashComponent": function AddCashComponent() {
          return (
            /* binding */
            _AddCashComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var src_app_core_services_bank_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/bank-service.service */
      91068);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_cash_in_hand_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/cash-in-hand-service.service */
      70039);
      /* harmony import */


      var src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/sale-invoice.service */
      26287);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);

      function AddCashComponent_mat_error_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Enter Amount Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AddCashComponent_mat_error_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " New Balance Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          containerClass: "theme-dark-blue",
          dateInputFormat: "DD MMM YYYY",
          showWeekNumbers: false
        };
      };

      var _c1 = function _c1(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _AddCashComponent = /*#__PURE__*/function () {
        function _AddCashComponent(formBuilder, router, toastService, bankService, http, titleCasePipe, cashInHandService, saleInvoiceService, dialog, dialogRef) {
          _classCallCheck(this, _AddCashComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.toastService = toastService;
          this.bankService = bankService;
          this.http = http;
          this.titleCasePipe = titleCasePipe;
          this.cashInHandService = cashInHandService;
          this.saleInvoiceService = saleInvoiceService;
          this.dialog = dialog;
          this.dialogRef = dialogRef;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        }

        _createClass(_AddCashComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.todaysDate = new Date();
            this.getCurrentBal();
            this.CashInHandForm = this.formBuilder.group({
              currentBal: [],
              date: [],
              saleInvoiceNo: [null],
              enterAmount: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              NewBalance: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              formRemark: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
            });
          }
        }, {
          key: "f1",
          get: function get() {
            return this.CashInHandForm.controls;
          }
        }, {
          key: "calculateValues",
          value: function calculateValues() {
            if (this.paymentType == "PAYMENT") {
              this.CashInHandForm.patchValue({
                NewBalance: +this.CashInHandForm.controls.currentBal.value + +this.CashInHandForm.controls.enterAmount.value
              });
            } else {
              this.CashInHandForm.patchValue({
                NewBalance: +this.CashInHandForm.controls.currentBal.value - +this.CashInHandForm.controls.enterAmount.value
              });
            }
          }
        }, {
          key: "GetpartyId",
          value: function GetpartyId(e) {
            var _this3 = this;

            if (e) {
              this.saleInvoiceService.getsaleInvoiceByIncoice({}, this.currentUser.id, e).then(function (res) {
                _this3.partyId = res.data.pageData[0].partyId;
                _this3.saleInvoiceId = res.data.pageData[0].id;
              });
            }
          }
        }, {
          key: "addMoney",
          value: function addMoney() {
            this.paymentType = "PAYMENT";
            console.log("payment", this.paymentType);
          }
        }, {
          key: "reduceMoney",
          value: function reduceMoney() {
            this.paymentType = "RECEIPT";
            console.log("receipt", this.paymentType);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }, {
          key: "cashSave",
          value: function cashSave() {
            var _this4 = this;

            this.submitted = true;

            if (this.CashInHandForm.invalid) {
              this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
              return false;
            } else {
              var body = {
                "cashadjustments": {
                  "paymentType": this.paymentType,
                  "saleInvoiceId": this.saleInvoiceId ? this.saleInvoiceId : null,
                  "date": moment__WEBPACK_IMPORTED_MODULE_0__(this.CashInHandForm.controls.date.value, "DD MMM YYYY").format("YYYY-MM-DD"),
                  "enterAmount": this.CashInHandForm.controls.enterAmount.value,
                  "remark": this.CashInHandForm.controls.formRemark.value,
                  "userId": this.currentUser.id
                }
              };
              this.cashInHandService.cashInHandpost(body).then(function (res) {
                _this4.toastService.openSnackBar("Cash In Hand Updated");

                _this4.CashInHandForm.reset();

                _this4.submitted = false;

                _this4.dialogRef.close();

                _this4.getCurrentBal();
              }, function (err) {
                if (err.error.expose) {
                  _this4.toastService.openErrorSnackBar(_this4.titleCasePipe.transform(err.error.error_message));
                } else {
                  _this4.toastService.openErrorSnackBar("Something Went Wrong.");
                }
              });
            }
          }
        }, {
          key: "getCurrentBal",
          value: function getCurrentBal() {
            var _this5 = this;

            this.cashInHandService.getCurrentBalance({}, this.currentUser.id).then(function (res) {
              _this5.CashInHandForm.patchValue({
                currentBal: res.data[0].currentBalance
              });
            }, function (err) {
              if (err.error.expose) {
                _this5.toastService.openErrorSnackBar(_this5.titleCasePipe.transform(err.error.error_message));
              } else {
                _this5.toastService.openErrorSnackBar("Something Went Wrong.");
              }
            });
          }
        }]);

        return _AddCashComponent;
      }();

      _AddCashComponent.ɵfac = function AddCashComponent_Factory(t) {
        return new (t || _AddCashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_1__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_bank_service_service__WEBPACK_IMPORTED_MODULE_2__.BankServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_cash_in_hand_service_service__WEBPACK_IMPORTED_MODULE_3__.CashInHandServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_4__.SaleInvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef));
      };

      _AddCashComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _AddCashComponent,
        selectors: [["app-add-cash"]],
        decls: 54,
        vars: 12,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "mb-5"], [1, "btn", "btn-add-cash", 2, "border-radius", "10px", 3, "click"], [1, "fas", "fa-plus", "me-2"], [1, "btn", "btn-reduce-cash", 2, "border-radius", "10px", "margin-left", "10px", 3, "click"], [1, "fas", "fa-minus", "me-2"], [1, "row"], [1, "col-sm-12", "col-md-12", "col-lg-6", "mb-3"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Current Balance", "formControlName", "currentBal", 3, "change"], ["type", "text", "matInput", "", "placeholder", "Sale Invoice No", "formControlName", "saleInvoiceNo", 3, "change"], ["for", "Date"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "formControlName", "date", "placeholder", "Date", "id", "datePicker", "bsDatepicker", "", 2, "text-transform", "uppercase !important", 3, "ngModel", "bsConfig", "ngModelChange"], [1, "iconcalender"], ["type", "number", "matInput", "", "placeholder", "Enter Amount", "formControlName", "enterAmount", "min", "0", "oninput", "this.value = Math.abs(this.value)", 3, "ngClass", "change"], ["class", "text-danger", 4, "ngIf"], [1, "col-sm-12", "col-md-12", "col-lg-12", "mb-3"], ["type", "number", "matInput", "", "placeholder", "New balance", "formControlName", "NewBalance", "min", "0", "oninput", "this.value = Math.abs(this.value)", "readonly", "", 3, "ngClass"], ["matInput", "", "required", "", "rows", "3", "placeholder", "Enter Item Description", "formControlName", "formRemark"], [1, "text-danger"]],
        template: function AddCashComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Add Cash in hand");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCashComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCashComponent_Template_button_click_6_listener() {
              return ctx.cashSave();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCashComponent_Template_button_click_12_listener() {
              return ctx.addMoney();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Add Money ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddCashComponent_Template_button_click_15_listener() {
              return ctx.reduceMoney();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Reduce Cash ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Current Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddCashComponent_Template_input_change_23_listener() {
              return ctx.calculateValues();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Sale Invoice No");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddCashComponent_Template_input_change_28_listener($event) {
              return ctx.GetpartyId($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AddCashComponent_Template_input_ngModelChange_33_listener($event) {
              return ctx.todaysDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-icon", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "date_range");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "New Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddCashComponent_Template_input_change_41_listener() {
              return ctx.calculateValues();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, AddCashComponent_mat_error_42_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "New Balance");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, AddCashComponent_mat_error_48_Template, 2, 0, "mat-error", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Item Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "textarea", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.CashInHandForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.todaysDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c1, ctx.f1.enterAmount.invalid && ctx.f1.enterAmount.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f1.enterAmount.touched) && (ctx.f1.enterAmount.errors == null ? null : ctx.f1.enterAmount.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c1, ctx.f1.NewBalance.invalid && ctx.f1.NewBalance.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f1.NewBalance.touched) && (ctx.f1.NewBalance.errors == null ? null : ctx.f1.NewBalance.errors.required));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError],
        styles: [".btn-reduce-cash[_ngcontent-%COMP%] {\n  border: 1px solid #979797;\n  color: #000;\n}\n\n.btn-reduce-cash[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #979797;\n}\n\n.btn-add-cash[_ngcontent-%COMP%] {\n  border: 1px solid #fc7643;\n  color: #fc7643;\n}\n\n.btn-add-cash[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #fc7643;\n}\n\n.iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -22px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jYXNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBRUU7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0FBQ0oiLCJmaWxlIjoiYWRkLWNhc2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJ0bi1yZWR1Y2UtY2FzaCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTc5Nzk3O1xyXG4gICAgY29sb3I6IzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1yZWR1Y2UtY2FzaDpob3ZlciB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Nzk3OTc7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tYWRkLWNhc2gge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZjNzY0MztcclxuICAgIGNvbG9yOiNmYzc2NDM7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tYWRkLWNhc2g6aG92ZXIge1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmM3NjQzO1xyXG4gIH1cclxuICAuaWNvbmNhbGVuZGVye1xyXG4gICAgZmxvYXQ6IHJpZ2h0IWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0yMnB4IWltcG9ydGFudDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    68811:
    /*!**************************************************************************!*\
      !*** ./src/app/pages/bank-module/ban-kdetails/ban-kdetails.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BanKDetailsComponent": function BanKDetailsComponent() {
          return (
            /* binding */
            _BanKDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../add-bank/add-bank.component */
      43701);
      /* harmony import */


      var _add_cash_add_cash_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../add-cash/add-cash.component */
      73106);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var src_app_core_services_bank_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/bank-service.service */
      91068);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      81288);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_core_services_cash_in_hand_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/cash-in-hand-service.service */
      70039);
      /* harmony import */


      var src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/sale-invoice.service */
      26287);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);

      function BanKDetailsComponent_tbody_37_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BanKDetailsComponent_tbody_37_tr_1_Template_td_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);

            var bankData_r2 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

            return ctx_r4.getbankdetailsById(bankData_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "20000");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var bankData_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](bankData_r2.bankName);
        }
      }

      function BanKDetailsComponent_tbody_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BanKDetailsComponent_tbody_37_tr_1_Template, 8, 1, "tr", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.bankApiResponse);
        }
      }

      var _BanKDetailsComponent = /*#__PURE__*/function () {
        function _BanKDetailsComponent(formBuilder, router, toastService, bankService, http, modal, titleCasePipe, cashInHandService, saleInvoiceService, dialog) {
          _classCallCheck(this, _BanKDetailsComponent);

          this.formBuilder = formBuilder;
          this.router = router;
          this.toastService = toastService;
          this.bankService = bankService;
          this.http = http;
          this.modal = modal;
          this.titleCasePipe = titleCasePipe;
          this.cashInHandService = cashInHandService;
          this.saleInvoiceService = saleInvoiceService;
          this.dialog = dialog;
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl();
          this.color = 'black';
          this.isEdit = false;
          this.isDisabled = false;
          this.isShowButton = false;
          this.isShown = false;
          this.isShownm = false;
          this.bname = "";
          this.formData = [];
          this.hide = true;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.paymentType = "";
        }

        _createClass(_BanKDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.getbankdetails();
            this.bankService.partyAdded$.subscribe(function () {
              _this6.getbankdetails();
            });
          }
          /**
           * Filter customer name search
           * @param name
           * @returns
           */

        }, {
          key: "filterBankNames",
          value: function filterBankNames(name) {
            return this.bankdetails.filter(function (x) {
              return x.bankName.toLowerCase().indexOf(name.toLowerCase()) === 0;
            });
          }
        }, {
          key: "getbankdetails",
          value: function getbankdetails() {
            var _this7 = this;

            this.bankService.getBankDetails({}, this.currentUser.id).then(function (res) {
              _this7.bankApiResponse = res.data;

              _this7.bankApiResponse.forEach(function (ele) {
                ele.isEnable = false;
              });
            }, function (err) {
              if (err.error.expose) {
                //   this.bankApiResponse = [];
                _this7.toastService.openErrorSnackBar(_this7.titleCasePipe.transform(err.error.error_message));
              } else {
                _this7.toastService.openErrorSnackBar("Something Went Wrong.");
              }
            });
          }
        }, {
          key: "getbankdetailsById",
          value: function getbankdetailsById(id) {
            var _this8 = this;

            // <p class="mb-1 mt-2"><span class="me-3">Bank Name :</span>ICICI Bank</p>
            // <p class="mb-2 mt-1">Account Number: 30002000668888</p>
            // <p class="mb-1 mt-1">IFSC Code: ICI2004300</p>
            // <p class="mb-1 mt-1 d-flex flex-row" style="justify-content: end">
            //   Balance: 200000.00
            // </p>
            this.bankService.getBankDetailsById({}, this.currentUser.id, id).then(function (res) {
              _this8.singleBankRecord = res.data;
              _this8.singleBankName = _this8.singleBankRecord.bankName;
              _this8.singleBankAcc = _this8.singleBankRecord.accountNumber;
              _this8.singleIfscCode = _this8.singleBankRecord.ifscCode;
            });
          }
        }, {
          key: "removeBanK",
          value: function removeBanK() {
            var _this9 = this;

            this.bankService.deleteBankAccNo({}, this.accoutNumber).then(function (res) {
              _this9.toastService.openSnackBar("Bank Record Deleted Successfully!!!");

              _this9.getbankdetails();
            });
          }
        }, {
          key: "myClickHandler",
          value: function myClickHandler(bankDetails) {
            this.bankApiResponse.forEach(function (element) {
              if (element.id == bankDetails.id) {
                element.isEnable = true;
              } else {
                element.isEnable = false;
              }
            });
          }
        }, {
          key: "modalDismiss",
          value: function modalDismiss() {
            this.bankForm.reset();
            this.modal.dismissAll();
            this.isEdit = false;
          }
        }, {
          key: "openDialogBank",
          value: function openDialogBank() {
            var dialogRef = this.dialog.open(_add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_0__.AddBankComponent, {
              width: 'auto',
              height: '700px',
              data: {},
              panelClass: 'custom-dialog-expense-class',
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }, {
          key: "openDialogCash",
          value: function openDialogCash() {
            var dialogRef = this.dialog.open(_add_cash_add_cash_component__WEBPACK_IMPORTED_MODULE_1__.AddCashComponent, {
              width: 'auto',
              height: '700px',
              data: {},
              panelClass: 'custom-dialog-expense-class',
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }]);

        return _BanKDetailsComponent;
      }();

      _BanKDetailsComponent.ɵfac = function BanKDetailsComponent_Factory(t) {
        return new (t || _BanKDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_2__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_bank_service_service__WEBPACK_IMPORTED_MODULE_3__.BankServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_cash_in_hand_service_service__WEBPACK_IMPORTED_MODULE_4__.CashInHandServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_5__.SaleInvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog));
      };

      _BanKDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _BanKDetailsComponent,
        selectors: [["app-ban-kdetails"]],
        decls: 138,
        vars: 4,
        consts: [["id", "errorDelete-modal", "tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", 2, "max-width", "350px"], [1, "modal-content", "position-relative"], [1, "position-absolute", "top-0", "end-0", "mt-2", "me-2", "z-index-1"], ["data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close", "btn", "btn-sm", "btn-circle", "d-flex", "flex-center", "transition-base"], [1, "modal-body", "p-0"], [1, "rounded-top-lg", "py-3", "ps-4", "pe-6", "bg-light"], ["id", "modalExampleDemoLabel", 1, "mb-1", "text-center", "font-weight-bold", 2, "font-weight", "800"], [1, "text-center"], [1, "modal-footer", "justify-content-center"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary"], ["data-bs-dismiss", "modal", 1, "btn", "btn-outline-primary", 3, "click"], [1, "container-fluid", "p-2", 2, "height", "100vh !important"], [1, "row", "card-header", "bg-white"], [1, "col-lg-12", "navOption-btns"], ["type", "button", 1, "btn", "m-1", 2, "float", "right !important", 3, "click"], [1, "fas", "fa-plus", "me-2"], [1, "row", "mt-1"], [1, "col-lg-3", "bg-light", "mt-2"], [1, "m-3", 2, "font-weight", "bolder"], [1, "table", "table-responsive", "fs--1", "mb-0"], [1, "text-600"], [1, "text-nowrap"], [4, "ngIf"], [1, "mb-3", "mx-3", 2, "margin-top", "100px"], [2, "font-weight", "bolder"], [1, "col-lg-9"], [1, "row", "bg-light", "m-2"], [1, "mb-1", "mt-2"], [1, "me-3"], [1, "mb-2", "mt-1"], [1, "mb-1", "mt-1"], [1, "mb-1", "mt-1", "d-flex", "flex-row", 2, "justify-content", "end"], [1, "m-3"], [2, "vertical-align", "middle"], [4, "ngFor", "ngForOf"], [2, "vertical-align", "middle", 3, "click"], [2, "float", "left"], ["src", "../../../../assets/images/bank_logo.png"], [2, "float", "left", "padding-left", "10px", "padding-top", "5px", "color", "#000"], [2, "vertical-align", "middle", "color", "#000"]],
        template: function BanKDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Delete Bank Account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h4", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Are You Sure To Delete this Bank Account?");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BanKDetailsComponent_Template_a_click_14_listener() {
              return ctx.removeBanK();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Delete ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BanKDetailsComponent_Template_button_click_19_listener() {
              return ctx.openDialogCash();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Add Cash in hand ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BanKDetailsComponent_Template_button_click_22_listener() {
              return ctx.openDialogBank();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Add Bank ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "p", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Bank Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "table", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "thead", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, BanKDetailsComponent_tbody_37_Template, 2, 1, "tbody", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Cash In Hand");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "p", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Bank Name :");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, " Balance: 200000.00 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "p", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "Transactions");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "table", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "thead", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Date of Payment");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "Remarks");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "9-June-2023");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "Vishal");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Payment-In");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "2000.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "Excellent");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "10-June-2023");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Vishwas");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Payment-In");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "20007.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "Excellent");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, "10-June-2023");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "Vishwas");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, "Payment-In");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, "20007.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "Excellent");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "10-June-2023");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "Vishwas");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, "Payment-In");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, "20007.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "Excellent");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](118, "10-June-2023");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "Vishwas");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122, "Payment-In");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](124, "20007.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126, "Excellent");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "10-June-2023");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, "Vishwas");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "Payment-In");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](135, "20007.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "td", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](137, "Excellent");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.bankApiResponse);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.singleBankName ? ctx.singleBankName : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Account Number: ", ctx.singleBankAcc ? ctx.singleBankAcc : "", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("IFSC Code: ", ctx.singleIfscCode ? ctx.singleIfscCode : "", "");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf],
        styles: [".custom-dialog-expense-class {\n  margin-left: 50%;\n  overflow: hidden !important;\n  height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbi1rZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQUNKIiwiZmlsZSI6ImJhbi1rZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuY3VzdG9tLWRpYWxvZy1leHBlbnNlLWNsYXNzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"]
      });
      /***/
    },

    /***/
    50041:
    /*!*****************************************************************!*\
      !*** ./src/app/pages/bank-module/bank-module-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BankModuleRoutingModule": function BankModuleRoutingModule() {
          return (
            /* binding */
            _BankModuleRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ban_kdetails_ban_kdetails_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./ban-kdetails/ban-kdetails.component */
      68811);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _ban_kdetails_ban_kdetails_component__WEBPACK_IMPORTED_MODULE_0__.BanKDetailsComponent
      }];

      var _BankModuleRoutingModule = /*#__PURE__*/_createClass(function _BankModuleRoutingModule() {
        _classCallCheck(this, _BankModuleRoutingModule);
      });

      _BankModuleRoutingModule.ɵfac = function BankModuleRoutingModule_Factory(t) {
        return new (t || _BankModuleRoutingModule)();
      };

      _BankModuleRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _BankModuleRoutingModule
      });
      _BankModuleRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_BankModuleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    68991:
    /*!*********************************************************!*\
      !*** ./src/app/pages/bank-module/bank-module.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BankModuleModule": function BankModuleModule() {
          return (
            /* binding */
            _BankModuleModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _bank_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bank-module-routing.module */
      50041);
      /* harmony import */


      var _ban_kdetails_ban_kdetails_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ban-kdetails/ban-kdetails.component */
      68811);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-bank/add-bank.component */
      43701);
      /* harmony import */


      var _add_cash_add_cash_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-cash/add-cash.component */
      73106);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _BankModuleModule = /*#__PURE__*/_createClass(function _BankModuleModule() {
        _classCallCheck(this, _BankModuleModule);
      });

      _BankModuleModule.ɵfac = function BankModuleModule_Factory(t) {
        return new (t || _BankModuleModule)();
      };

      _BankModuleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _BankModuleModule
      });
      _BankModuleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _bank_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.BankModuleRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_BankModuleModule, {
          declarations: [_ban_kdetails_ban_kdetails_component__WEBPACK_IMPORTED_MODULE_1__.BanKDetailsComponent, _add_bank_add_bank_component__WEBPACK_IMPORTED_MODULE_3__.AddBankComponent, _add_cash_add_cash_component__WEBPACK_IMPORTED_MODULE_4__.AddCashComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _bank_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.BankModuleRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_pages_bank-module_bank-module_module_ts-es5.js.map