(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_bid-module_bid-module_module_ts"], {
    /***/
    63929:
    /*!***************************************************************!*\
      !*** ./src/app/pages/bid-module/bid-module-routing.module.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BidModuleRoutingModule": function BidModuleRoutingModule() {
          return (
            /* binding */
            _BidModuleRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _new_bid_client_new_bid_client_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./new-bid-client/new-bid-client.component */
      62082);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _new_bid_client_new_bid_client_component__WEBPACK_IMPORTED_MODULE_0__.NewBidClientComponent
      }];

      var _BidModuleRoutingModule = /*#__PURE__*/_createClass(function _BidModuleRoutingModule() {
        _classCallCheck(this, _BidModuleRoutingModule);
      });

      _BidModuleRoutingModule.ɵfac = function BidModuleRoutingModule_Factory(t) {
        return new (t || _BidModuleRoutingModule)();
      };

      _BidModuleRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _BidModuleRoutingModule
      });
      _BidModuleRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_BidModuleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    78753:
    /*!*******************************************************!*\
      !*** ./src/app/pages/bid-module/bid-module.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BidModuleModule": function BidModuleModule() {
          return (
            /* binding */
            _BidModuleModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _bid_module_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bid-module-routing.module */
      63929);
      /* harmony import */


      var _new_bid_client_new_bid_client_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./new-bid-client/new-bid-client.component */
      62082);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _new_add_bid_client_new_add_bid_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-add-bid-client/new-add-bid-client.component */
      86868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _BidModuleModule = /*#__PURE__*/_createClass(function _BidModuleModule() {
        _classCallCheck(this, _BidModuleModule);
      });

      _BidModuleModule.ɵfac = function BidModuleModule_Factory(t) {
        return new (t || _BidModuleModule)();
      };

      _BidModuleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _BidModuleModule
      });
      _BidModuleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _bid_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.BidModuleRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__.BsDatepickerModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_BidModuleModule, {
          declarations: [_new_bid_client_new_bid_client_component__WEBPACK_IMPORTED_MODULE_1__.NewBidClientComponent, _new_add_bid_client_new_add_bid_client_component__WEBPACK_IMPORTED_MODULE_3__.NewAddBidClientComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _bid_module_routing_module__WEBPACK_IMPORTED_MODULE_0__.BidModuleRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialExampleModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__.BsDatepickerModule]
        });
      })();
      /***/

    },

    /***/
    86868:
    /*!*************************************************************************************!*\
      !*** ./src/app/pages/bid-module/new-add-bid-client/new-add-bid-client.component.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewAddBidClientComponent": function NewAddBidClientComponent() {
          return (
            /* binding */
            _NewAddBidClientComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      1143);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_bidding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/bidding.service */
      56889);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
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


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/core */
      32220);

      function NewAddBidClientComponent_mat_option_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onSelectionChange", function NewAddBidClientComponent_mat_option_22_Template_mat_option_onSelectionChange_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);

            var option_r8 = restoredCtx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r9.selectedProduct(option_r8.itemName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r8.itemName);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, option_r8.itemName), " ");
        }
      }

      function NewAddBidClientComponent_mat_error_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Product Name Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewAddBidClientComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Selected Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h5", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.prodName);
        }
      }

      function NewAddBidClientComponent_mat_error_32_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Seller Range Is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewAddBidClientComponent_mat_error_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NewAddBidClientComponent_mat_error_32_div_1_Template, 2, 0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.f.sellerRange.errors.required);
        }
      }

      function NewAddBidClientComponent_div_41_mat_error_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Delivery Charge Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function NewAddBidClientComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Delivery Charge");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-form-field", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, NewAddBidClientComponent_div_41_mat_error_5_Template, 2, 0, "mat-error", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c0, ctx_r5.f.deleveryCharge.invalid && ctx_r5.f.deleveryCharge.touched && ctx_r5.submitted));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx_r5.submitted || ctx_r5.f.deleveryCharge.touched) && (ctx_r5.f.deleveryCharge.errors == null ? null : ctx_r5.f.deleveryCharge.errors.required));
        }
      }

      function NewAddBidClientComponent_mat_error_48_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Expected Delivery Date Is Required!");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function NewAddBidClientComponent_mat_error_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, NewAddBidClientComponent_mat_error_48_div_1_Template, 2, 0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.f.deliveryDate.errors.required);
        }
      }

      function NewAddBidClientComponent_mat_error_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Description Is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return {
          containerClass: "theme-dark-blue",
          dateInputFormat: "DD MMM YYYY",
          showWeekNumbers: false
        };
      };

      var _NewAddBidClientComponent = /*#__PURE__*/function () {
        function _NewAddBidClientComponent(bidDetails, biddingService, commonService, formBuilder, productService, toastService, titleCasePipe, dialog, dialogRef) {
          _classCallCheck(this, _NewAddBidClientComponent);

          this.bidDetails = bidDetails;
          this.biddingService = biddingService;
          this.commonService = commonService;
          this.formBuilder = formBuilder;
          this.productService = productService;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.dialog = dialog;
          this.dialogRef = dialogRef;
          this.submitted = false;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
          this.p = 1;
          this.currentPageNo = 0;
          this.partyPageSize = 5;
          this.quotePriceForm = this.formBuilder.group({
            description: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            deliveryDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            sellerRange: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            prodName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            homeDelivery: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            deleveryCharge: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
          });
        }

        _createClass(_NewAddBidClientComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllBiddings();
            this.getGoodsbyUser();
            this.todaysDate = new Date();
            console.log(this.bidDetails.wishlistId); // this.interval = setInterval(() => {
            //   this.getExpiryTime();
            // }, 1000)
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }, {
          key: "showHomeDelevery",
          value: function showHomeDelevery(checked) {
            this.isHome = checked;
          }
        }, {
          key: "postClientQuotePrice",
          value: function postClientQuotePrice() {
            var _this = this;

            this.submitted = true;

            if (this.quotePriceForm.invalid) {
              this.toastService.openErrorSnackBar("Please Fill Mandatory Fields!!!");
              return false;
            } else {
              var data = {
                "wishlistId": this.bidDetails.wishlistId,
                "userId": this.currentUser.id,
                "price": this.quotePriceForm.controls.sellerRange.value,
                "description": this.quotePriceForm.controls.description.value,
                "productId": this.prodId,
                "deliveryDate": this.todaysDate,
                "homeDelivery": this.quotePriceForm.controls.homeDelivery.value,
                "deliveryCharge": this.quotePriceForm.controls.deleveryCharge.value
              };
              this.biddingService.postClientQuotePrice(data).then(function (res) {
                _this.toastService.openSnackBar("Price Quoted Successfully!!!");

                _this.quotePriceForm.reset();

                _this.searchedProduct = [];

                _this.dialogRef.close();
              }, function (err) {
                _this.toastService.openErrorSnackBar("Please Try Again Later!!!");
              });
            }
          }
        }, {
          key: "getAllBiddings",
          value: function getAllBiddings() {
            var _this2 = this;

            this.biddingService.getAllBiddings({}, this.currentUser.id).then(function (res) {
              // this.bidData = res.data.pageData;
              _this2.totalrow = res.data.totalrows;
              var bid = res.data.pageData;
              bid.forEach(function (element) {
                var createDate = new Date(element.createdAt).getTime();
                var lastDate = new Date(moment__WEBPACK_IMPORTED_MODULE_0__(createDate).add(7, 'days').format("YYYY-MM-DD HH:mm:ss")).getTime();
                var todaysDate = new Date().getTime();
                _this2.difference = lastDate - todaysDate; // Time calculations for days, hours, minutes and seconds

                var days = Math.floor(_this2.difference / (1000 * 60 * 60 * 24));
                var hours = Math.floor(_this2.difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                var minutes = Math.floor(_this2.difference % (1000 * 60 * 60) / (1000 * 60));
                var seconds = Math.floor(_this2.difference % (1000 * 60) / 1000);
                _this2.showTimeInterval = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

                if (element.product) {
                  var data = {
                    itemName: element.product ? element.product.itemName : "-",
                    id: element.product ? element.product.id : "-",
                    publish: element.publish ? element.publish : "-",
                    description: element.product ? element.product.description : "-",
                    budgetMin: element.budgetMin ? element.budgetMin : "-",
                    budgetMax: element.budgetMax ? element.budgetMax : "-",
                    pincode: element.pincode ? element.pincode : "-",
                    location: element.location ? element.location : "-",
                    approxCompletedDate: element.approxCompletedDate ? element.approxCompletedDate : "-",
                    price: element.product ? element.product.salePrice : "-",
                    showTimeInterval: _this2.showTimeInterval ? _this2.showTimeInterval : "",
                    biddings: element.biddings ? element.biddings : "-",
                    createdAt: element.createdAt ? element.createdAt : "",
                    wishlistId: element.id,
                    coverPic: element.product ? element.product.coverImage : ""
                  };

                  _this2.bidData.push(data);
                } // If the count down is over, write some text 


                if (_this2.difference < 0) {
                  clearInterval(_this2.interval);
                  _this2.showTimeInterval = "EXPIRED";
                }
              });
            }, function (err) {
              if (err.error.expose) {
                _this2.toastService.openErrorSnackBar(_this2.titleCasePipe.transform(err.error.error_message));
              } else {
                _this2.toastService.openErrorSnackBar("Something Went Wrong.");
              }
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.quotePriceForm.controls;
          }
        }, {
          key: "searchProduct",
          value: function searchProduct() {
            var _this3 = this;

            this.biddingService.getAllProductsByUserSearch({}, this.currentUser.id, this.myControl.value, this.partyPageSize, this.currentPageNo + 1).then(function (res) {
              _this3.toatlPages = res.data.totalPages;
              _this3.totalrow = res.data.totalRows;
              _this3.p = res.data.currentPage;
              _this3.searchedProduct = res.data.pageData;
              _this3.prodName = _this3.searchedProduct[0].itemName;
              _this3.prodId = _this3.searchedProduct[0].id, _this3.quotePriceForm.patchValue({
                prodName: _this3.prodName
              });
            });
          }
        }, {
          key: "selectedProduct",
          value: function selectedProduct(itemName) {
            var _this4 = this;

            this.biddingService.getAllProductsByUserSearch({}, this.currentUser.id, itemName, this.partyPageSize, this.currentPageNo + 1).then(function (res) {
              _this4.toatlPages = res.data.totalPages;
              _this4.totalrow = res.data.totalRows;
              _this4.p = res.data.currentPage;
              _this4.searchedProduct = res.data.pageData;
              _this4.prodName = res.data.pageData[0].itemName;
              _this4.prodId = res.data.pageData[0].id;

              _this4.quotePriceForm.patchValue({
                prodName: _this4.prodName
              });
            });
          }
        }, {
          key: "getGoodsbyUser",
          value: function getGoodsbyUser() {
            var _this5 = this;

            this.productService.getGoodsProductByUser_Type({}, this.currentUser.id, "goods", "DESC", this.partyPageSize, this.currentPageNo + 1).then(function (res) {
              _this5.goodsData = res.data.pageData;
              _this5.filteredOptions = _this5.myControl.valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (name) {
                return name ? _this5.filterNames(name) : _this5.goodsData.slice();
              }));
            }, function (err) {
              if (err.error.status == 404) {}
            });
          }
        }, {
          key: "filterNames",
          value: function filterNames(name) {
            return this.goodsData.filter(function (goods) {
              return goods.itemName.toLowerCase().indexOf(name.toLowerCase()) === 0;
            });
          }
        }]);

        return _NewAddBidClientComponent;
      }();

      _NewAddBidClientComponent.ɵfac = function NewAddBidClientComponent_Factory(t) {
        return new (t || _NewAddBidClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_bidding_service__WEBPACK_IMPORTED_MODULE_1__.BiddingService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_4__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef));
      };

      _NewAddBidClientComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _NewAddBidClientComponent,
        selectors: [["app-new-add-bid-client"]],
        decls: 56,
        vars: 26,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [1, "container-fluid", "px-2"], [3, "formGroup"], [1, "p-4", "pb-0", "mb-2"], [1, "row"], [1, "col-12"], [1, "form-label"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "placeholder", "Product Name", "aria-label", "Select Product Name", "matInput", "", 3, "formControl", "matAutocomplete", "input"], ["matSuffix", "", 1, "m-2"], ["auto", "matAutocomplete"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["matNativeControl", "", "type", "text", "required", "", "matInput", "", "ngxOnlyNumbers", "", "placeholder", "Seller Range", "formControlName", "sellerRange", "value", "", 3, "ngClass"], [1, "d-flex", 2, "font-size", "12px"], [1, "text-nowrap"], [1, "form-check", "form-switch"], ["id", "inlineCheckbox1", "type", "checkbox", "formControlName", "homeDelivery", 1, "form-check-input", "toggleB", "text-warning", 2, "margin-left", "3px!important", 3, "checked", "change"], ["class", "col-12", 4, "ngIf"], [1, "col-sm-12"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "formControlName", "deliveryDate", "id", "datePicker", "bsDatepicker", "", 2, "text-transform", "uppercase!important", 3, "minDate", "ngModel", "bsConfig", "ngClass", "ngModelChange"], ["matInput", "", "rows", "5", "required", "", "placeholder", "Description", "formControlName", "description", 3, "ngClass"], [3, "value", "onSelectionChange"], ["width", "50", "height", "50", "src", "../../../assets/img/products/2.jpg", "alt", "", 1, "img-circle", "m-1", "imageRound"], [1, "invalid-feedback"], [1, "text-capitalize", "fw-bold"], ["class", "error-font", 4, "ngIf"], [1, "error-font"], ["matNativeControl", "", "type", "number", "required", "", "matInput", "", "formControlName", "deleveryCharge", "placeholder", "Delivery Charge", "min", "0", "oninput", "this.value = Math.abs(this.value)", "value", "deleveryCharge", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]],
        template: function NewAddBidClientComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Accept Bid");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewAddBidClientComponent_Template_button_click_4_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NewAddBidClientComponent_Template_button_click_6_listener() {
              return ctx.postClientQuotePrice();
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

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Product Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function NewAddBidClientComponent_Template_input_input_17_listener() {
              return ctx.searchProduct();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-autocomplete", null, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, NewAddBidClientComponent_mat_option_22_Template, 5, 4, "mat-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, NewAddBidClientComponent_mat_error_24_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, NewAddBidClientComponent_div_25_Template, 8, 1, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Seller Range");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, NewAddBidClientComponent_mat_error_32_Template, 2, 1, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Home Delivery");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function NewAddBidClientComponent_Template_input_change_39_listener($event) {
              return ctx.showHomeDelevery($event.target.checked);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, NewAddBidClientComponent_div_41_Template, 6, 4, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Expected Delivery Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function NewAddBidClientComponent_Template_input_ngModelChange_47_listener($event) {
              return ctx.todaysDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, NewAddBidClientComponent_mat_error_48_Template, 2, 1, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "textarea", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, NewAddBidClientComponent_mat_error_55_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.quotePriceForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.myControl)("matAutocomplete", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 17, ctx.filteredOptions));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.myControl.touched) && ctx.myControl.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.searchedProduct);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c0, ctx.f.sellerRange.invalid && ctx.f.sellerRange.touched && ctx.f.sellerRange.pristine));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.sellerRange.touched) && ctx.f.sellerRange.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.isHome);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isHome);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("minDate", ctx.todaysDate)("ngModel", ctx.todaysDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](21, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c0, ctx.f.deliveryDate.invalid && ctx.f.deliveryDate.touched && ctx.f.deliveryDate.pristine));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.f.deliveryDate.invalid && ctx.f.deliveryDate.touched && ctx.f.deliveryDate.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](24, _c0, ctx.f.description.invalid && ctx.f.description.touched && ctx.f.description.pristine));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.description.touched) && ctx.f.description.pristine);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerInputDirective, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_15__.BsDatepickerDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.TitleCasePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXctYWRkLWJpZC1jbGllbnQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    62082:
    /*!*****************************************************************************!*\
      !*** ./src/app/pages/bid-module/new-bid-client/new-bid-client.component.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewBidClientComponent": function NewBidClientComponent() {
          return (
            /* binding */
            _NewBidClientComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _new_add_bid_client_new_add_bid_client_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../new-add-bid-client/new-add-bid-client.component */
      86868);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_bidding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/bidding.service */
      56889);
      /* harmony import */


      var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/common.service */
      50690);
      /* harmony import */


      var src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/product.service */
      3560);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/paginator */
      38021);

      function NewBidClientComponent_div_12_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.showTimeInterval);
        }
      }

      function NewBidClientComponent_div_12_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h6", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Days : Hours : Mins : Secs");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.showTimeInterval);
        }
      }

      function NewBidClientComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, NewBidClientComponent_div_12_div_7_Template, 4, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, NewBidClientComponent_div_12_div_9_Template, 6, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NewBidClientComponent_div_12_Template_button_click_26_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);

            var item_r3 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r6.AddOpenDialog(item_r3.wishlistId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Accept");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Reject");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r3.itemName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showTimeInterval == "EXPIRED");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showTimeInterval != "EXPIRED");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r3.coverPic, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Delevery code : ", item_r3.pincode, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("City : ", item_r3.location, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Expected Delivery : ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 12, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](19, 14, item_r3.approxCompletedDate, "dd MMM YYYY")), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("Expected Range : (\u20B9", item_r3.budgetMin, " - \u20B9", item_r3.budgetMax, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u20B9", item_r3.price, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.showTimeInterval == "EXPIRED");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.showTimeInterval == "EXPIRED");
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20, 30];
      };

      function NewBidClientComponent_mat_paginator_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-paginator", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function NewBidClientComponent_mat_paginator_13_Template_mat_paginator_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r8.handlePage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", ctx_r1.partyPageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c0))("length", ctx_r1.totalrow)("pageIndex", ctx_r1.currentPageNo);
        }
      }

      function NewBidClientComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "h5", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "No Bid Details Added. Please Add Bid Details To Be Displayed Here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      var _NewBidClientComponent = /*#__PURE__*/function () {
        function _NewBidClientComponent(biddingService, commonService, formBuilder, productService, toastService, titleCasePipe, dialog) {
          _classCallCheck(this, _NewBidClientComponent);

          this.biddingService = biddingService;
          this.commonService = commonService;
          this.formBuilder = formBuilder;
          this.productService = productService;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.dialog = dialog;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.bidData = [];
          this.goodsData = [];
          this.searchedProduct = [];
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl();
          this.p = 1;
          this.currentPageNo = 0;
          this.partyPageSize = 5;
          this.pagesize = 1;
          this.count = 0;
          this.submitted = false;
        }

        _createClass(_NewBidClientComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.getAllBiddings();
            this.todaysDate = new Date();
            this.interval = setInterval(function () {
              _this6.getExpiryTime();
            }, 1000);
          }
        }, {
          key: "getAllBiddings",
          value: function getAllBiddings() {
            var _this7 = this;

            this.biddingService.getAllBiddings({}, this.currentUser.id).then(function (res) {
              //this.bidData = res.data.pageData;
              _this7.totalrow = res.data.totalrows;
              var bid = res.data.pageData;
              bid.forEach(function (element) {
                var createDate = new Date(element.createdAt).getTime();
                var lastDate = new Date(moment__WEBPACK_IMPORTED_MODULE_0__(createDate).add(7, 'days').format("YYYY-MM-DD HH:mm:ss")).getTime();
                var todaysDate = new Date().getTime();
                _this7.difference = lastDate - todaysDate; // Time calculations for days, hours, minutes and seconds

                var days = Math.floor(_this7.difference / (1000 * 60 * 60 * 24));
                var hours = Math.floor(_this7.difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
                var minutes = Math.floor(_this7.difference % (1000 * 60 * 60) / (1000 * 60));
                var seconds = Math.floor(_this7.difference % (1000 * 60) / 1000);
                _this7.showTimeInterval = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

                if (element.product) {
                  var data = {
                    itemName: element.product ? element.product.itemName : "-",
                    id: element.product ? element.product.id : "-",
                    publish: element.publish ? element.publish : "-",
                    description: element.product ? element.product.description : "-",
                    budgetMin: element.budgetMin ? element.budgetMin : "-",
                    budgetMax: element.budgetMax ? element.budgetMax : "-",
                    pincode: element.pincode ? element.pincode : "-",
                    location: element.location ? element.location : "-",
                    approxCompletedDate: element.approxCompletedDate ? element.approxCompletedDate : "-",
                    price: element.product ? element.product.salePrice : "-",
                    showTimeInterval: _this7.showTimeInterval ? _this7.showTimeInterval : "",
                    biddings: element.biddings ? element.biddings : "-",
                    createdAt: element.createdAt ? element.createdAt : "",
                    wishlistId: element.id,
                    coverPic: element.product ? element.product.coverImage : ""
                  };

                  _this7.bidData.push(data);
                } // If the count down is over, write some text 


                if (_this7.difference < 0) {
                  clearInterval(_this7.interval);
                  _this7.showTimeInterval = "EXPIRED";
                }
              });
            }, function (err) {
              if (err.error.expose) {
                _this7.toastService.openErrorSnackBar(_this7.titleCasePipe.transform(err.error.error_message));
              } else {
                _this7.toastService.openErrorSnackBar("Something Went Wrong.");
              }
            });
          }
        }, {
          key: "getExpiryTime",
          value: function getExpiryTime() {
            var _this8 = this;

            this.bidData.forEach(function (element) {
              var createDate = new Date(element.createdAt).getTime();
              var lastDate = new Date(moment__WEBPACK_IMPORTED_MODULE_0__(createDate).add(7, 'days').format("YYYY-MM-DD HH:mm:ss")).getTime();
              var todaysDate = new Date().getTime();
              _this8.difference = lastDate - todaysDate; // Time calculations for days, hours, minutes and seconds

              var days = Math.floor(_this8.difference / (1000 * 60 * 60 * 24));
              var hours = Math.floor(_this8.difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
              var minutes = Math.floor(_this8.difference % (1000 * 60 * 60) / (1000 * 60));
              var seconds = Math.floor(_this8.difference % (1000 * 60) / 1000);
              _this8.showTimeInterval = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
              element.showTimeInterval = _this8.showTimeInterval;
            });

            if (this.difference < 0) {
              clearInterval(this.interval);
              this.showTimeInterval = "EXPIRED";
            }
          }
          /**
           * Filter customer name search
           * @param name
           * @returns
           */

        }, {
          key: "filterNames",
          value: function filterNames(name) {
            return this.goodsData.filter(function (goods) {
              return goods.itemName.toLowerCase().indexOf(name.toLowerCase()) === 0;
            });
          }
        }, {
          key: "handlePage",
          value: function handlePage(e) {
            this.currentPageNo = e.pageIndex;
            this.pagesize = e.pageSize;

            if (this.bidData.length > 0) {
              this.partyPageSize = e.pageSize;
              this.getAllBiddings();
            }
          }
        }, {
          key: "AddOpenDialog",
          value: function AddOpenDialog(wishlistId) {
            var dialogRef = this.dialog.open(_new_add_bid_client_new_add_bid_client_component__WEBPACK_IMPORTED_MODULE_1__.NewAddBidClientComponent, {
              width: '50%',
              height: '100vh',
              data: {
                wishlistId: wishlistId
              },
              panelClass: 'custom-dialog-AddReject-class',
              disableClose: true,
              position: {
                right: '0'
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }]);

        return _NewBidClientComponent;
      }();

      _NewBidClientComponent.ɵfac = function NewBidClientComponent_Factory(t) {
        return new (t || _NewBidClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_bidding_service__WEBPACK_IMPORTED_MODULE_2__.BiddingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_5__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog));
      };

      _NewBidClientComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _NewBidClientComponent,
        selectors: [["app-new-bid-client"]],
        decls: 15,
        vars: 3,
        consts: [[1, "card", "mb-3", "component-container", "container-fluid", "p-4"], ["id", "navPanel", 1, "row"], [1, "navOptions", "col-xxl-6", "col-xl-6", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "page-nav-link", "mt-3"], [1, "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-6", "links"], [1, "mt-3", "pb-1", "ps-1", "text-nowrap", "fw-bold"], [1, "col-lg-6"], [1, "card-body"], [1, "container"], [1, "row"], ["class", "col-md-4 col-sm-12 col-lg-4 col-xl-4 mb-3", 4, "ngFor", "ngForOf"], ["class", "float-right mt-2", "showFirstLastButtons", "", "aria-label", "Select page", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page", 4, "ngIf"], ["class", "card-body p-0 overflow-hidden m-2 p-2", 4, "ngIf"], [1, "col-md-4", "col-sm-12", "col-lg-4", "col-xl-4", "mb-3"], [1, "card"], [1, "mt-3", "mt-sm-0", "text-center", "mt-2"], [1, "text-dark", "fs-0", "fs-lg-1", "fw-bold"], ["class", "d-grid", "style", "position: absolute; transform: rotate(-45deg);margin:10px ", 4, "ngIf"], [1, "card-image", "margin:4px"], ["class", "d-grid", "style", "position: absolute;margin-top: 35%;", 4, "ngIf"], ["height", "150", "width", "200", "onerror", "this.src='../../../assets/img/products/2.jpg';", "alt", "Image", 2, "margin-top", "20px", 3, "src"], [1, "ms-5", "container", "mt-3"], [1, "p-1"], [1, "ms-7", "mb-3", "container", "p-1", "fw-bold", "text-warning"], [1, "card-image"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-save", 2, "margin-right", "10px !important", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-cancel", 3, "disabled"], [1, "d-grid", 2, "position", "absolute", "transform", "rotate(-45deg)", "margin", "10px"], [1, "btn", "btn-warning", "rounded-0", "diagonal-button"], [1, "text-white", "text-bold", "mb-0"], [1, "d-grid", 2, "position", "absolute", "margin-top", "35%"], [1, "btn", "btn-warning", "rounded-0"], ["showFirstLastButtons", "", "aria-label", "Select page", 1, "float-right", "mt-2", 3, "pageSize", "pageSizeOptions", "length", "pageIndex", "page"], [1, "card-body", "p-0", "overflow-hidden", "m-2", "p-2"], [1, "text-center"], ["colspan", "10"], [1, "text-nowrap"]],
        template: function NewBidClientComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "All Bid Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, NewBidClientComponent_div_12_Template, 30, 17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, NewBidClientComponent_mat_paginator_13_Template, 1, 5, "mat-paginator", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, NewBidClientComponent_div_14_Template, 6, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.bidData);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.bidData == null ? null : ctx.bidData.length) > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.bidData == 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginator],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
        styles: [".card-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.custom-dialog-AddReject-class[_ngcontent-%COMP%] {\n  margin-left: 50% !important;\n  height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1iaWQtY2xpZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBQ0U7RUFDRSwyQkFBQTtFQUVBLHdCQUFBO0FBQ0oiLCJmaWxlIjoibmV3LWJpZC1jbGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1pbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5jdXN0b20tZGlhbG9nLUFkZFJlamVjdC1jbGFzc3tcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCUgIWltcG9ydGFudDtcclxuICAgLy8gb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50OyAgXHJcbiAgICAvL21hcmdpbi1yaWdodDogMHB4IWltcG9ydGFudDtcclxuICB9XHJcbiAiXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_bid-module_bid-module_module_ts-es5.js.map