(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_new-remote-shopping_new-remote-shopping_module_ts"], {
    /***/
    77706:
    /*!******************************************************************************************!*\
      !*** ./src/app/pages/new-remote-shopping/generate-receipt/generate-receipt.component.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "GenerateReceiptComponent": function GenerateReceiptComponent() {
          return (
            /* binding */
            _GenerateReceiptComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_remote_shop_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/remote-shop.service */
      9579);
      /* harmony import */


      var src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/sale-invoice.service */
      26287);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      function GenerateReceiptComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GenerateReceiptComponent_tr_21_Template_button_click_20_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var item_r2 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r4.getReceiptById(item_r2.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](25, _c0, item_r2.isDeleted ? "#c7c2de" : i_r3 % 2 === 0 ? "#f2f2f2" : "#ffffff"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r3 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, item_r2.customerName));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.billingAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](12, 10, item_r2.totalBillAmount - item_r2.billGstAmount, "INR", "symbol", "1.2-2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](15, 15, item_r2.billGstAmount, "INR", "symbol", "1.2-2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind4"](18, 20, item_r2.totalBillAmount, "INR", "symbol", "1.2-2"));
        }
      }

      function GenerateReceiptComponent_tbody_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "No Order Generated Receipts Added. Please Add Generated Receipts To Be Displayed Here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _GenerateReceiptComponent = /*#__PURE__*/function () {
        function _GenerateReceiptComponent(remotShopService, saleInvoiceService) {
          _classCallCheck(this, _GenerateReceiptComponent);

          this.remotShopService = remotShopService;
          this.saleInvoiceService = saleInvoiceService;
          this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
          this.saleProductData = [];
        }

        _createClass(_GenerateReceiptComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getGeneratedOrder();
          }
        }, {
          key: "getGeneratedOrder",
          value: function getGeneratedOrder() {
            var _this = this;

            this.remotShopService.getGeneratedOrder({}, this.currentUser.id, 1).then(function (res) {
              console.log(res);
              _this.generatedReceiptsData = res.data;
            });
          }
        }, {
          key: "getReceiptById",
          value: function getReceiptById(receiptId) {
            var _this2 = this;

            this.saleInvoiceService.getSaleInvoiceById({}, receiptId).then(function (res) {
              _this2.saleProductData = res.data.sales_products;
              _this2.invoiceNo = res.data.invoiceNo;
              _this2.billGstAmount = res.data.billGstAmount;
              _this2.totalBillAmount = res.data.totalBillAmount;
            });
          }
        }]);

        return _GenerateReceiptComponent;
      }();

      _GenerateReceiptComponent.ɵfac = function GenerateReceiptComponent_Factory(t) {
        return new (t || _GenerateReceiptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_remote_shop_service__WEBPACK_IMPORTED_MODULE_0__.RemoteShopService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_1__.SaleInvoiceService));
      };

      _GenerateReceiptComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _GenerateReceiptComponent,
        selectors: [["app-generate-receipt"]],
        decls: 23,
        vars: 2,
        consts: [[1, "container-fluid"], [1, "row", 2, "width", "100%", "overflow-x", "scroll"], [1, "table", "table-responsive", "table-bordered", "fs--1", "mb-0"], [1, "text-900", "text-center"], [1, "btn-reveal-trigger"], ["scope", "col"], [1, "text-nowrap"], [1, "text-center"], ["style", "color: #676398 !important", 3, "ngStyle", 4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "color", "#676398 !important", 3, "ngStyle"], ["data-bs-toggle", "modal", "data-bs-target", "#invoice-modal", 1, "btn", "btnp", 3, "click"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "print", 1, "bi-printer", "icon-color", "fs-1"], ["colspan", "12"], ["src", "assets/img/icons/spot-illustrations/GST No Transaction.png", "width", "124", "height", "142", "alt", "", 1, "image-responsive"], [1, "text-nowrap", "pt-2", 2, "font-weight", "600", "color", "#000000"]],
        template: function GenerateReceiptComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "table", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "thead", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "tr", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Customer Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Total Bill");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " GST Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Payable Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "th", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tbody", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, GenerateReceiptComponent_tr_21_Template, 22, 27, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, GenerateReceiptComponent_tbody_22_Template, 6, 0, "tbody", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.generatedReceiptsData);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.generatedReceiptsData == 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
        styles: [".btnp[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  line-height: 20px !important;\n}\n\n.icon-color[_ngcontent-%COMP%] {\n  color: #b8babd;\n}\n\n.icon-color[_ngcontent-%COMP%]:hover {\n  color: #2c7be5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRlLXJlY2VpcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiZ2VuZXJhdGUtcmVjZWlwdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5wIHtcclxuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbi1jb2xvciB7XHJcbiAgY29sb3I6ICNiOGJhYmQ7XHJcbn1cclxuXHJcbi5pY29uLWNvbG9yOmhvdmVyIHtcclxuICBjb2xvcjogIzJjN2JlNTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    22503:
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/new-remote-shopping/new-remote-shopping-routing.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewRemoteShoppingRoutingModule": function NewRemoteShoppingRoutingModule() {
          return (
            /* binding */
            _NewRemoteShoppingRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _remote_order_remote_order_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./remote-order/remote-order.component */
      79735);
      /* harmony import */


      var _generate_receipt_generate_receipt_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./generate-receipt/generate-receipt.component */
      77706);
      /* harmony import */


      var _remote_shopping_remote_shopping_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./remote-shopping/remote-shopping.component */
      46069);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _remote_shopping_remote_shopping_component__WEBPACK_IMPORTED_MODULE_2__.RemoteShoppingComponent,
        children: [{
          path: '',
          redirectTo: 'remote-order',
          pathMatch: 'full'
        }, {
          path: 'remote-order',
          component: _remote_order_remote_order_component__WEBPACK_IMPORTED_MODULE_0__.RemoteOrderComponent
        }, {
          path: 'generate-receipt',
          component: _generate_receipt_generate_receipt_component__WEBPACK_IMPORTED_MODULE_1__.GenerateReceiptComponent
        }],
        pathMatch: 'prefix',
        data: {
          routerLinkActiveOptions: {
            exact: true,
            pathMatch: 'full'
          }
        }
      }];

      var _NewRemoteShoppingRoutingModule = /*#__PURE__*/_createClass(function _NewRemoteShoppingRoutingModule() {
        _classCallCheck(this, _NewRemoteShoppingRoutingModule);
      });

      _NewRemoteShoppingRoutingModule.ɵfac = function NewRemoteShoppingRoutingModule_Factory(t) {
        return new (t || _NewRemoteShoppingRoutingModule)();
      };

      _NewRemoteShoppingRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _NewRemoteShoppingRoutingModule
      });
      _NewRemoteShoppingRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_NewRemoteShoppingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    37872:
    /*!*************************************************************************!*\
      !*** ./src/app/pages/new-remote-shopping/new-remote-shopping.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewRemoteShoppingModule": function NewRemoteShoppingModule() {
          return (
            /* binding */
            _NewRemoteShoppingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);
      /* harmony import */


      var _new_remote_shopping_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./new-remote-shopping-routing.module */
      22503);
      /* harmony import */


      var _remote_order_remote_order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./remote-order/remote-order.component */
      79735);
      /* harmony import */


      var _generate_receipt_generate_receipt_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./generate-receipt/generate-receipt.component */
      77706);
      /* harmony import */


      var _remote_shopping_remote_shopping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./remote-shopping/remote-shopping.component */
      46069);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _sales_new_invoice_sales_new_invoice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sales-new-invoice/sales-new-invoice.component */
      5743);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _NewRemoteShoppingModule = /*#__PURE__*/_createClass(function _NewRemoteShoppingModule() {
        _classCallCheck(this, _NewRemoteShoppingModule);
      });

      _NewRemoteShoppingModule.ɵfac = function NewRemoteShoppingModule_Factory(t) {
        return new (t || _NewRemoteShoppingModule)();
      };

      _NewRemoteShoppingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: _NewRemoteShoppingModule
      });
      _NewRemoteShoppingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _new_remote_shopping_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewRemoteShoppingRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialExampleModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](_NewRemoteShoppingModule, {
          declarations: [_remote_order_remote_order_component__WEBPACK_IMPORTED_MODULE_1__.RemoteOrderComponent, _generate_receipt_generate_receipt_component__WEBPACK_IMPORTED_MODULE_2__.GenerateReceiptComponent, _remote_shopping_remote_shopping_component__WEBPACK_IMPORTED_MODULE_3__.RemoteShoppingComponent, _sales_new_invoice_sales_new_invoice_component__WEBPACK_IMPORTED_MODULE_5__.SalesNewInvoiceComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _new_remote_shopping_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewRemoteShoppingRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialExampleModule, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__.BsDatepickerModule]
        });
      })();
      /***/

    },

    /***/
    79735:
    /*!**********************************************************************************!*\
      !*** ./src/app/pages/new-remote-shopping/remote-order/remote-order.component.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RemoteOrderComponent": function RemoteOrderComponent() {
          return (
            /* binding */
            _RemoteOrderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_helpers_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_helpers/constant */
      22336);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      2281);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _sales_new_invoice_sales_new_invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../sales-new-invoice/sales-new-invoice.component */
      5743);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/services/sale-invoice.service */
      26287);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_remote_shop_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/remote-shop.service */
      9579);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap/datepicker */
      84461);

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      function RemoteOrderComponent_tr_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RemoteOrderComponent_tr_40_Template_i_click_26_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);

            var item_r2 = restoredCtx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r4.toGenerateReceipt(item_r2.orderId);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](31, _c0, item_r2.isDeleted ? "#c7c2de" : i_r3 % 2 === 0 ? "#f2f2f2" : "#ffffff"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r3 + 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](8, 11, item_r2.createdAt, "dd MMM YYYY")));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 14, item_r2.customerName));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r2.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r2.billingAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind4"](18, 16, item_r2.totalBillAmount - item_r2.billGstAmount, "INR", "symbol", "1.2-2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind4"](21, 21, item_r2.billGstAmount, "INR", "symbol", "1.2-2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind4"](24, 26, item_r2.totalBillAmount, "INR", "symbol", "1.2-2"));
        }
      }

      function RemoteOrderComponent_tbody_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h5", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Remote orders will be Displayed Here, Once Generated.");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1() {
        return {
          containerClass: "theme-dark-blue",
          dateInputFormat: "DD MMM YYYY",
          showWeekNumbers: false
        };
      };

      var _c2 = function _c2() {
        return {
          standalone: true
        };
      };

      var _RemoteOrderComponent = /*#__PURE__*/function () {
        function _RemoteOrderComponent(saleInvoiceService, dialog, remoteShopService, toastService, titleCasePipe) {
          _classCallCheck(this, _RemoteOrderComponent);

          this.saleInvoiceService = saleInvoiceService;
          this.dialog = dialog;
          this.remoteShopService = remoteShopService;
          this.toastService = toastService;
          this.titleCasePipe = titleCasePipe;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.getClientPendingOrder();
        }

        _createClass(_RemoteOrderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.todaysDate = new Date(new Date().setDate(new Date().getDate()));
            this.getClientPendingOrder();
          }
        }, {
          key: "getClientPendingOrder",
          value: function getClientPendingOrder() {
            var _this3 = this;

            this.remoteShopService.getGeneratedOrder({}, src_app_helpers_constant__WEBPACK_IMPORTED_MODULE_0__.Constants.currentUser.id, 0).then(function (res) {
              console.log(res);
              _this3.orderData = res.data;
            });
          }
        }, {
          key: "getAllclientPendingOrderSearch1",
          value: function getAllclientPendingOrderSearch1() {
            var _this4 = this;

            this.remoteShopService.getRemoteOrder1({}, src_app_helpers_constant__WEBPACK_IMPORTED_MODULE_0__.Constants.currentUser.id, 0, moment__WEBPACK_IMPORTED_MODULE_1__(this.todaysDate, "DD-MMM-YYYY").format("YYYY-MM-DD")).then(function (res) {
              console.log(res);
              _this4.orderData1 = res.data;

              if (_this4.orderData1.length > 0) {
                _this4.orderData = res.data;
              } else {
                _this4.getClientPendingOrder();
              }
            });
          }
        }, {
          key: "getAllRemoteOrderSearch",
          value: function getAllRemoteOrderSearch(searchkey) {
            var _this5 = this;

            console.log(this.searchKey);

            if (this.searchKey == "") {
              this.toastService.openErrorSnackBar("Please enter Party name!!!");
              this.remoteShopService.getRemoteOrdersearch({}, this.currentUser.id, 0, searchkey).then(function (res) {
                console.log(res);
                _this5.orderData = res.data;
              });
            } else {
              this.remoteShopService.getRemoteOrdersearch({}, this.currentUser.id, 0, searchkey).then(function (res) {
                console.log(res);
                _this5.orderData1 = res.data;

                if (_this5.orderData1.length > 0) {
                  _this5.orderData = res.data; // this.toastService.openSnackBar("Record Found Successfully!!!");
                } else {
                  _this5.toastService.openErrorSnackBar("Record Not Found!!!");
                }
              }, function (err) {
                if (err.error.expose) {
                  _this5.toastService.openErrorSnackBar(_this5.titleCasePipe.transform(err.error.error_message));
                } else {
                  _this5.toastService.openErrorSnackBar("Something Went Wrong.");
                }
              });
            }
          }
        }, {
          key: "changeDate",
          value: function changeDate(e) {
            this.getAllclientPendingOrderSearch1();
          }
        }, {
          key: "toGenerateReceipt",
          value: function toGenerateReceipt(itemId) {
            //this.router.navigate(["/pages/edit-offer/" + id]);
            var dialogRef = this.dialog.open(_sales_new_invoice_sales_new_invoice_component__WEBPACK_IMPORTED_MODULE_2__.SalesNewInvoiceComponent, {
              // width: '1050px',
              height: '730px',
              data: {
                itemId: itemId
              },
              panelClass: 'custom-Modal-sale-invoice',
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }]);

        return _RemoteOrderComponent;
      }();

      _RemoteOrderComponent.ɵfac = function RemoteOrderComponent_Factory(t) {
        return new (t || _RemoteOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_sale_invoice_service__WEBPACK_IMPORTED_MODULE_3__.SaleInvoiceService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_remote_shop_service__WEBPACK_IMPORTED_MODULE_4__.RemoteShopService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_5__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe));
      };

      _RemoteOrderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _RemoteOrderComponent,
        selectors: [["app-remote-order"]],
        decls: 42,
        vars: 9,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col"], [1, "col", "headerAlignment"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "matInput", "", "placeholder", "Party Name", 3, "ngModel", "ngModelChange", "change"], [1, "iconcalender", "p-1"], ["appearance", "outline", 1, "example-full-width", 2, "font-size", "12px"], ["matInput", "", "required", "", "ngModel", "", "bsDatepicker", "", "placeholder", "Receipt Date.", "id", "datePicker", "bsDatepicker", "", 2, "text-transform", "uppercase!important", "height", "22px", 3, "maxDate", "ngModel", "bsConfig", "ngModelOptions", "ngModelChange"], [1, "my-0", "py-0"], [1, "row", 2, "width", "100%", "overflow-x", "scroll"], [1, "table", "table-responsive", "table-bordered", "fs--1", "mb-0"], [1, "text-900", "text-center"], [1, "btn-reveal-trigger"], ["scope", "col"], ["type", "checkbox"], [1, "text-nowrap"], [1, "text-center"], ["style", "color: #676398 !important", 3, "ngStyle", 4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "color", "#676398 !important", 3, "ngStyle"], ["scope", "row", 2, "vertical-align", "middle"], [2, "vertical-align", "middle"], [1, "text-nowrap", 2, "vertical-align", "middle"], [1, "text-center", 2, "vertical-align", "middle"], [1, "fas", "fa-receipt", 3, "click"], ["colspan", "12"], ["src", "assets/img/icons/spot-illustrations/GST No Transaction.png", "width", "124", "height", "142", "alt", "", 1, "image-responsive"], [1, "text-nowrap", "pt-2", 2, "font-weight", "600", "color", "#000000"]],
        template: function RemoteOrderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RemoteOrderComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.searchKey = $event;
            })("change", function RemoteOrderComponent_Template_input_change_5_listener() {
              return ctx.getAllRemoteOrderSearch(ctx.searchKey);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function RemoteOrderComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.todaysDate = $event;
            })("ngModelChange", function RemoteOrderComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.changeDate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "date_range");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "hr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "thead", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "#");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Created On");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Party Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Base Amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "GST");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Invoice Value");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "th", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "tbody", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, RemoteOrderComponent_tr_40_Template, 27, 33, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, RemoteOrderComponent_tbody_41_Template, 6, 0, "tbody", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchKey);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("maxDate", ctx.today)("ngModel", ctx.todaysDate)("bsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c1))("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.orderData);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.orderData == 0);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__.BsDatepickerDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.UpperCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe],
        styles: [".iconcalender[_ngcontent-%COMP%] {\n  float: right !important;\n  margin-top: -25px !important;\n  margin-right: 7px !important;\n}\n\n.inputsearch[_ngcontent-%COMP%] {\n  padding-left: -10px !important;\n}\n\n  .custom-Modal-sale-invoice {\n  margin-left: 66%;\n}\n\n.headerAlignment[_ngcontent-%COMP%] {\n  max-width: 300px;\n  margin-left: auto;\n}\n\n@media screen and (max-width: 670px) {\n  .headerAlignment[_ngcontent-%COMP%] {\n    min-width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW90ZS1vcmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBR0E7RUFFRTtJQUNFLGdCQUFBO0VBREY7QUFDRiIsImZpbGUiOiJyZW1vdGUtb3JkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbmNhbGVuZGVye1xyXG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IC0yNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0c2VhcmNoe1xyXG4gIHBhZGRpbmctbGVmdDogLTEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jdXN0b20tTW9kYWwtc2FsZS1pbnZvaWNle1xyXG4gIG1hcmdpbi1sZWZ0OiA2NiU7XHJcbn1cclxuXHJcblxyXG4uaGVhZGVyQWxpZ25tZW50IHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY3MHB4KSB7XHJcblxyXG4gIC5oZWFkZXJBbGlnbm1lbnQge1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    46069:
    /*!****************************************************************************************!*\
      !*** ./src/app/pages/new-remote-shopping/remote-shopping/remote-shopping.component.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RemoteShoppingComponent": function RemoteShoppingComponent() {
          return (
            /* binding */
            _RemoteShoppingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _RemoteShoppingComponent = /*#__PURE__*/function () {
        function _RemoteShoppingComponent() {
          _classCallCheck(this, _RemoteShoppingComponent);
        }

        _createClass(_RemoteShoppingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _RemoteShoppingComponent;
      }();

      _RemoteShoppingComponent.ɵfac = function RemoteShoppingComponent_Factory(t) {
        return new (t || _RemoteShoppingComponent)();
      };

      _RemoteShoppingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _RemoteShoppingComponent,
        selectors: [["app-remote-shopping"]],
        decls: 14,
        vars: 0,
        consts: [[1, "container-fluid", "bg-white", "p-4"], [1, "row", "mt-2"], [1, "col-xxl-12", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "mt-3", "page-nav-link"], ["id", "productlistLink", 1, "links", "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-4", "col-xs-4"], ["routerLink", "./remote-order", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], [1, "links", "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-4", "col-xs-4"], ["routerLink", "./generate-receipt", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], [1, "col-xxl-10", "col-xl-10", "col-lg-11", "col-md-6", "col-sm-4", "col-xs-4"], [1, "mt-1"]],
        template: function RemoteShoppingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Remote Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Generated Receipt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["@media screen and (max-width: 575px) {\n  .links[_ngcontent-%COMP%] {\n    margin-top: 0.7rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW90ZS1zaG9wcGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFO0lBQ0Usa0JBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InJlbW90ZS1zaG9wcGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTc1cHgpIHtcclxuXHJcbiAgLmxpbmtzIHtcclxuICAgIG1hcmdpbi10b3A6IDAuN3JlbTtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    5743:
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/new-remote-shopping/sales-new-invoice/sales-new-invoice.component.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SalesNewInvoiceComponent": function SalesNewInvoiceComponent() {
          return (
            /* binding */
            _SalesNewInvoiceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _SalesNewInvoiceComponent = /*#__PURE__*/function () {
        function _SalesNewInvoiceComponent() {
          _classCallCheck(this, _SalesNewInvoiceComponent);
        }

        _createClass(_SalesNewInvoiceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _SalesNewInvoiceComponent;
      }();

      _SalesNewInvoiceComponent.ɵfac = function SalesNewInvoiceComponent_Factory(t) {
        return new (t || _SalesNewInvoiceComponent)();
      };

      _SalesNewInvoiceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _SalesNewInvoiceComponent,
        selectors: [["app-sales-new-invoice"]],
        decls: 2,
        vars: 0,
        consts: [[1, "custom-Modal-sale-invoice"]],
        template: function SalesNewInvoiceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sales-new-invoice works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy1uZXctaW52b2ljZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_new-remote-shopping_new-remote-shopping_module_ts-es5.js.map