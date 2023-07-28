(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkweb_app"] = self["webpackChunkweb_app"] || []).push([["src_app_pages_crmmodule_crmmodule_module_ts"], {
    /***/
    45488:
    /*!**********************************************!*\
      !*** ./src/app/core/services/crm.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CrmService": function CrmService() {
          return (
            /* binding */
            _CrmService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_helpers/url-constants */
      16393);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./http.service */
      72229);

      var _CrmService = /*#__PURE__*/function () {
        function _CrmService(httpClient) {
          _classCallCheck(this, _CrmService);

          this.httpClient = httpClient;
          this.leadAddedSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          this.leadAdded$ = this.leadAddedSource.asObservable();
        }

        _createClass(_CrmService, [{
          key: "notifyLeadAdded",
          value: function notifyLeadAdded() {
            this.leadAddedSource.next();
          } //add Lead

        }, {
          key: "postLead",
          value: function postLead(data, id) {
            var _this = this;

            return new Promise(function (resolve, reject) {
              _this.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.addLead + id, 'POST').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          } //Lead list

        }, {
          key: "getAllLeadList",
          value: function getAllLeadList(data, id, size, page) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              _this2.httpClient.inventory(data, src_app_helpers_url_constants__WEBPACK_IMPORTED_MODULE_0__.UrlConstants.leadList + id + "?size=" + size + "&page=" + page, 'GET').subscribe(function (res) {
                return resolve(res);
              }, function (err) {
                return reject(err);
              });
            });
          }
        }]);

        return _CrmService;
      }();

      _CrmService.ɵfac = function CrmService_Factory(t) {
        return new (t || _CrmService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService));
      };

      _CrmService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _CrmService,
        factory: _CrmService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    35044:
    /*!****************************************************************!*\
      !*** ./src/app/pages/crmmodule/add-lead/add-lead.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddLeadComponent": function AddLeadComponent() {
          return (
            /* binding */
            _AddLeadComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      80639);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/services/toast-notification.service */
      96636);
      /* harmony import */


      var src_app_core_services_crm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/crm.service */
      45488);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/services/roles-permissions.service */
      30438);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      64742);
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/select */
      37007);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/core */
      32220);

      function AddLeadComponent_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddLeadComponent_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r18.deleteProfilePic();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_mat_error_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Full Name is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_mat_error_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Only Alphabets are allowed. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_mat_error_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Email must be a valid email address. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_mat_error_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mobile Number is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_mat_error_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mobile Number must be 10-digits only ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_mat_error_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Mobile Number must be 10-digits only ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_mat_error_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Address is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_mat_error_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Pincode is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_mat_error_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Pincode should be only digits ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_mat_error_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " City is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_mat_error_67_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " State is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_mat_error_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Country is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_mat_error_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Status is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_mat_error_106_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Contact Type is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_mat_error_116_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Type is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_div_117_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Hours is Required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddLeadComponent_div_117_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Hours");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddLeadComponent_div_117_mat_error_6_Template, 2, 0, "mat-error", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r17.submitted || ctx_r17.f.hours.touched) && (ctx_r17.f.hours.errors == null ? null : ctx_r17.f.hours.errors.required));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var _AddLeadComponent = /*#__PURE__*/function () {
        function _AddLeadComponent(formBuilder, dialogRef, toastService, crmservice, titleCasePipe, router, rolesPermissionsService) {
          _classCallCheck(this, _AddLeadComponent);

          this.formBuilder = formBuilder;
          this.dialogRef = dialogRef;
          this.toastService = toastService;
          this.crmservice = crmservice;
          this.titleCasePipe = titleCasePipe;
          this.router = router;
          this.rolesPermissionsService = rolesPermissionsService;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.submitted = false;
          this.profilePic = '';
          this.dragging = false;
          this.imageLoaded = false;
          this.loaded = false;
          this.profilePicUrl = '';
          this.isProfilePicSelects = false;
          this.activeColor = 'green';
          this.baseColor = '#ccc';
        }

        _createClass(_AddLeadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.LeadForm = this.formBuilder.group({
              firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
              mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
              address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              pincode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              product: ["P1"],
              status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              hours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            });
            this.LeadForm.get('pincode').valueChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(500)).subscribe(function (pincode) {
              _this3.getPincodeDetails(pincode);
            });
          }
        }, {
          key: "clearInput",
          value: function clearInput() {
            this.dialogRef.close();
          }
        }, {
          key: "f",
          get: function get() {
            return this.LeadForm.controls;
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
          key: "getPincodeDetails",
          value: function getPincodeDetails(pin) {
            var _this4 = this;

            this.rolesPermissionsService.getEmployeePincode({}, pin).then(function (res) {
              _this4.pinDetails = res;
              console.log("this.pinDetails", _this4.pinDetails);

              _this4.LeadForm.patchValue({
                state: res.data.stateName,
                city: res.data.districtName
              });
            });
          }
        }, {
          key: "onSaveLead",
          value: function onSaveLead() {
            var _this5 = this;

            this.submitted = true;

            if (this.LeadForm.invalid) {
              console.log("this.LeadForm", this.LeadForm);
              this.toastService.openErrorSnackBar("Fill all required fields.");
              return false;
            } else {
              var data = {
                "userId": this.currentUser.id,
                "name": this.LeadForm.value.firstName,
                "email": this.LeadForm.value.email,
                "mobile": this.LeadForm.value.mobile,
                //"website": "examplewebsite.com",
                //"fiscalInformation": "ABC123XYZ",
                "projects": this.LeadForm.value.product,
                "contactType": this.LeadForm.value.contact,
                "status": this.LeadForm.value.status,
                "image": this.profilePicUrl,
                "address": this.LeadForm.value.address,
                "country": this.LeadForm.value.country,
                "pincode": this.LeadForm.value.pincode,
                "city": this.LeadForm.value.city,
                "state": this.LeadForm.value.state,
                "type": this.LeadForm.value.type,
                "hours": this.LeadForm.value.hours
              };
              this.crmservice.postLead(data, this.currentUser.id).then(function (res) {
                if (res) {
                  _this5.toastService.openSnackBar("Lead added Successfully");

                  _this5.router.navigate(["/pages/crm/lead-list"]);

                  _this5.crmservice.notifyLeadAdded();

                  _this5.dialogRef.close();
                }
              }, function (err) {
                if (err.error.expose) {
                  _this5.toastService.openErrorSnackBar(_this5.titleCasePipe.transform(err.error.error_message));
                } else {
                  _this5.toastService.openErrorSnackBar("Something Went To Wrong");
                }
              });
            }
          }
        }, {
          key: "getOfferType",
          value: function getOfferType(event) {
            this.type = event.source.value;
            console.log(this.type);
          }
        }, {
          key: "handleDragEnter",
          value: function handleDragEnter() {
            this.dragging = true;
          }
        }, {
          key: "handleDragLeave",
          value: function handleDragLeave() {
            this.dragging = false;
          }
        }, {
          key: "handleDrop",
          value: function handleDrop(e) {
            e.preventDefault();
            this.dragging = false;
            this.handleInputChange(e);
          }
        }, {
          key: "handleImageLoad",
          value: function handleImageLoad() {
            this.imageLoaded = true;
          }
        }, {
          key: "handleInputChange",
          value: function handleInputChange(e) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this6 = this;

              var pattern, formdata, reader, file, fileSizeLimit;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      pattern = /image-*/;
                      formdata = new FormData();
                      reader = new FileReader();
                      file = e.target.files[0];

                      if (file.type.match(pattern)) {
                        _context.next = 7;
                        break;
                      }

                      this.toastService.openErrorSnackBar("Invalid format. Please select an image file.");
                      return _context.abrupt("return");

                    case 7:
                      fileSizeLimit = 1 * 1024 * 1024; // 6 MB

                      if (!(file.size > fileSizeLimit)) {
                        _context.next = 11;
                        break;
                      }

                      alert("File size exceeds the limit. Please select a smaller image (up to 1 MB).");
                      return _context.abrupt("return");

                    case 11:
                      this.loaded = false;

                      if (e.target.files && e.target.files[0]) {
                        reader.readAsDataURL(file);

                        reader.onload = function () {
                          _this6.profilePic = reader.result;
                        };

                        if (file == null) {
                          this.toastService.openErrorSnackBar("Please Select Image To Upload.");
                        } else {
                          formdata.set("upload", file);
                          this.rolesPermissionsService.uploadImage(formdata).then(function (res) {
                            console.log("image Upload", res);
                            _this6.profilePicUrl = res.data.location;
                            _this6.isProfilePicSelects = true;

                            _this6.toastService.openSnackBar("Image Uploaded Successfully");
                          });
                          this.loaded = true;
                        }
                      }

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "deleteProfilePic",
          value: function deleteProfilePic() {// this.profileService.deleteProfileImg({}, this.employeeId)
            // .then((res) => {
            //   console.log(res)
            //   this.toastService.openSnackBar("Image deleted successfully");
            //   this.profilePic = '';
            //   this.profilePicUrl = null; // Clear the profilePic value
            //   this.isProfilePicSelects = false
            //   this.loaded = true;
            // })
            // .catch((error) => {
            //   console.log(error);
            // });
          }
        }]);

        return _AddLeadComponent;
      }();

      _AddLeadComponent.ɵfac = function AddLeadComponent_Factory(t) {
        return new (t || _AddLeadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_toast_notification_service__WEBPACK_IMPORTED_MODULE_0__.ToastNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_crm_service__WEBPACK_IMPORTED_MODULE_1__.CrmService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_roles_permissions_service__WEBPACK_IMPORTED_MODULE_2__.RolesPermissionsService));
      };

      _AddLeadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AddLeadComponent,
        selectors: [["app-add-lead"]],
        decls: 118,
        vars: 38,
        consts: [[1, "modal-header", "pt-0"], [1, "modal-title", "mb-0", 2, "color", "#EB8B3F", "font-weight", "bolder"], [1, "addProductButtons"], ["type", "button", 1, "btn", "btn-cancel", 2, "margin-right", "10px !important", 3, "click"], ["type", "button", 1, "btn", "btn-save", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "row"], [1, "mb-3", "col-lg-6"], [1, "image-wrapper"], ["ondragover", "return false;", 1, "profile-pic", 3, "dragenter", "dragleave", "drop"], [1, "shadow-sm", 3, "src", "load"], ["type", "file", "name", "file", "accept", "image/*", 3, "change"], ["class", "delete-button", 3, "click", 4, "ngIf"], [1, "form-label"], ["appearance", "outline", 1, "example-full-width"], ["type", "text", "matInput", "", "formControlName", "firstName", "autocomplete", "off", "placeholder", "full Name", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], [1, "col-lg-6"], ["type", "text", "matInput", "", "formControlName", "email", "placeholder", "Email", "disabled", "", "autocomplete", "off", 3, "ngClass"], ["type", "text", "matInput", "", "formControlName", "mobile", "minlength", "10", "maxlength", "10", "placeholder", "Mobile Number", "autocomplete", "off", 3, "ngClass", "keypress"], [1, "col-sm-12", "col-md-12", "col-lg-12"], ["matInput", "", "rows", "1", "placeholder", "Enter Address", "formControlName", "address", "autocomplete", "off"], ["type", "text", "matInput", "", "ngModel", "", "formControlName", "pincode", "placeholder", "Pincode", "autocomplete", "off", 3, "ngClass"], ["type", "text", "matInput", "", "ngModel", "", "formControlName", "city", "disabled", "", "placeholder", "City", "autocomplete", "off"], ["type", "text", "matInput", "", "ngModel", "", "formControlName", "state", "disabled", "", "placeholder", "State", "autocomplete", "off"], ["type", "text", "matInput", "", "ngModel", "", "formControlName", "country", "placeholder", "Country", "autocomplete", "off"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], ["formControlName", "product", "matNativeControl", "", "disableOptionCentering", "", "placeholder", "Select Support Type", "autocomplete", "off"], ["value", "P1"], ["formControlName", "status", "matNativeControl", "", "disableOptionCentering", "", "placeholder", "Select Support Type", "autocomplete", "off"], ["value", "FOLLOWUP"], ["value", "REJECT"], ["value", "CLOSE"], ["formControlName", "contact", "matNativeControl", "", "disableOptionCentering", "", "placeholder", "Select Contact Type", "autocomplete", "off"], ["value", "CLIENT"], ["value", "CUSTOMER"], ["value", "LEAD"], ["formControlName", "type", "matNativeControl", "", "disableOptionCentering", "", "placeholder", "Select Type", "autocomplete", "off", 3, "selectionChange"], ["value", "HOURS"], ["value", "COST"], ["class", "row", 4, "ngIf"], [1, "delete-button", 3, "click"], [1, "bi", "bi-x", "bi-sm"], [1, "text-danger"], ["type", "number", "min", "0", "matInput", "", "ngModel", "", "formControlName", "hours", "placeholder", "Enter Hours", "autocomplete", "off"]],
        template: function AddLeadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add Lead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddLeadComponent_Template_button_click_4_listener() {
              return ctx.clearInput();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddLeadComponent_Template_button_click_6_listener() {
              return ctx.onSaveLead();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dragenter", function AddLeadComponent_Template_label_dragenter_13_listener() {
              return ctx.handleDragEnter();
            })("dragleave", function AddLeadComponent_Template_label_dragleave_13_listener() {
              return ctx.handleDragLeave();
            })("drop", function AddLeadComponent_Template_label_drop_13_listener($event) {
              return ctx.handleDrop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("load", function AddLeadComponent_Template_img_load_14_listener() {
              return ctx.handleImageLoad();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddLeadComponent_Template_input_change_15_listener($event) {
              return ctx.handleInputChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AddLeadComponent_button_16_Template, 2, 0, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Full Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, AddLeadComponent_mat_error_22_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, AddLeadComponent_mat_error_23_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddLeadComponent_mat_error_30_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddLeadComponent_mat_error_31_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keypress", function AddLeadComponent_Template_input_keypress_36_listener($event) {
              return ctx.numberOnly($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, AddLeadComponent_mat_error_37_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, AddLeadComponent_mat_error_38_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, AddLeadComponent_mat_error_39_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "textarea", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, AddLeadComponent_mat_error_46_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "pincode");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, AddLeadComponent_mat_error_53_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, AddLeadComponent_mat_error_54_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, AddLeadComponent_mat_error_60_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "State");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, AddLeadComponent_mat_error_67_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Country");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, AddLeadComponent_mat_error_73_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "mat-select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "mat-option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "P1");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "mat-select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "mat-option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "FollowUp");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "mat-option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Reject");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "mat-option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](93, AddLeadComponent_mat_error_93_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Contact Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "mat-select", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "mat-option", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Client");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "mat-option", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Customer");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "mat-option", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Lead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](106, AddLeadComponent_mat_error_106_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "mat-form-field", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "mat-select", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function AddLeadComponent_Template_mat_select_selectionChange_111_listener($event) {
              return ctx.getOfferType($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "mat-option", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Hours");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "mat-option", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Cost");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](116, AddLeadComponent_mat_error_116_Template, 2, 0, "mat-error", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](117, AddLeadComponent_div_117_Template, 7, 1, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.LeadForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("outline-color", ctx.dragging ? ctx.activeColor : ctx.baseColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("loaded", ctx.loaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("loaded", ctx.imageLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.profilePic ? ctx.profilePic : "/assets/images/default-profile-pic.JPG", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.profilePic);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](30, _c0, ctx.f.firstName.invalid && ctx.f.firstName.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.firstName.touched) && (ctx.f.firstName.errors == null ? null : ctx.f.firstName.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.firstName.touched) && (ctx.f.firstName.errors == null ? null : ctx.f.firstName.errors.alphabeticOnly) && !(ctx.f.firstName.errors == null ? null : ctx.f.firstName.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](32, _c0, ctx.f.email.invalid && ctx.f.email.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.email.touched) && (ctx.f.email.errors == null ? null : ctx.f.email.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.email.touched) && (ctx.f.email.errors == null ? null : ctx.f.email.errors.pattern));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](34, _c0, ctx.f.mobile.invalid && ctx.f.mobile.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.mobile.touched) && (ctx.f.mobile.errors == null ? null : ctx.f.mobile.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.mobile.touched) && (ctx.f.mobile.errors == null ? null : ctx.f.mobile.errors.minlength));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.mobile.touched) && (ctx.f.mobile.errors == null ? null : ctx.f.mobile.errors.maxlength));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.address.touched) && (ctx.f.address.errors == null ? null : ctx.f.address.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](36, _c0, ctx.f.pincode.invalid && ctx.f.pincode.touched && ctx.submitted));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.pincode.touched) && (ctx.f.pincode.errors == null ? null : ctx.f.pincode.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.pincode.touched) && (ctx.f.pincode.errors == null ? null : ctx.f.pincode.errors.pattern));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.city.touched) && (ctx.f.city.errors == null ? null : ctx.f.city.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.state.touched) && (ctx.f.state.errors == null ? null : ctx.f.state.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.country.touched) && (ctx.f.country.errors == null ? null : ctx.f.country.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.status.touched) && (ctx.f.status.errors == null ? null : ctx.f.status.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.contact.touched) && (ctx.f.contact.errors == null ? null : ctx.f.contact.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.submitted || ctx.f.type.touched) && (ctx.f.type.errors == null ? null : ctx.f.type.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.type == "HOURS" || ctx.type == "COST");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor],
        styles: [".modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  height: 88%;\n  overflow-y: auto;\n}\n\n.addProductButtons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-left: auto;\n}\n\n.profile-pic[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  width: 150px;\n  height: 150px;\n  border: 2px solid #ccc;\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.profile-pic[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border: 2px solid #000;\n  border-radius: 10px;\n  pointer-events: none;\n}\n\n.profile-pic.loaded[_ngcontent-%COMP%] {\n  border-color: #ff8800;\n}\n\n.profile-pic[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  font-size: 2rem;\n  color: #333;\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.profile-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.profile-pic[_ngcontent-%COMP%]   .dummy-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.profile-pic[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.profile-pic[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n.delete-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background-color: white;\n  border: 1px solid red;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.delete-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1sZWFkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdFO0VBQ0UscUJBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtBQUFKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUU7RUFDRSxVQUFBO0FBREoiLCJmaWxlIjoiYWRkLWxlYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gICAgaGVpZ2h0OiA4OCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuYWRkUHJvZHVjdEJ1dHRvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbiAgXHJcblxyXG4gIC5wcm9maWxlLXBpYyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtcGljOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXBpYy5sb2FkZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY4ODAwO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS1waWMgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAucHJvZmlsZS1waWMgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXBpYyAuZHVtbXktaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbiAgXHJcbiAgLnByb2ZpbGUtcGljIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5wcm9maWxlLXBpYyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmRlbGV0ZS1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIHJpZ2h0OiAtMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuZGVsZXRlLWJ1dHRvbiBpIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICJdfQ== */"]
      });
      /***/
    },

    /***/
    72240:
    /*!**************************************************************!*\
      !*** ./src/app/pages/crmmodule/crmmain/crmmain.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CrmmainComponent": function CrmmainComponent() {
          return (
            /* binding */
            _CrmmainComponent
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

      var _CrmmainComponent = /*#__PURE__*/function () {
        function _CrmmainComponent() {
          _classCallCheck(this, _CrmmainComponent);
        }

        _createClass(_CrmmainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _CrmmainComponent;
      }();

      _CrmmainComponent.ɵfac = function CrmmainComponent_Factory(t) {
        return new (t || _CrmmainComponent)();
      };

      _CrmmainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CrmmainComponent,
        selectors: [["app-crmmain"]],
        decls: 10,
        vars: 0,
        consts: [[1, "container-fluid", "bg-white", "p-4"], [1, "row", "mt-2"], [1, "col-xxl-12", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "row", "mt-3", "page-nav-link"], ["id", "productlistLink", 1, "links", "col-xxl-1", "col-xl-1", "col-lg-2", "col-md-3", "col-sm-4", "col-xs-4"], ["routerLink", "./lead-list", "routerLinkActive", "active", 1, "mt-3", "pb-1", "text-nowrap", "productLink"], [1, "mt-1"]],
        template: function CrmmainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lead List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm1tYWluLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    26725:
    /*!*************************************************************!*\
      !*** ./src/app/pages/crmmodule/crmmodule-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CrmmoduleRoutingModule": function CrmmoduleRoutingModule() {
          return (
            /* binding */
            _CrmmoduleRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _crmmain_crmmain_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./crmmain/crmmain.component */
      72240);
      /* harmony import */


      var _lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lead-list/lead-list.component */
      67387);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _crmmain_crmmain_component__WEBPACK_IMPORTED_MODULE_0__.CrmmainComponent,
        children: [{
          path: '',
          redirectTo: 'lead-list',
          pathMatch: 'full'
        }, {
          path: 'lead-list',
          component: _lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_1__.LeadListComponent
        }],
        pathMatch: 'prefix',
        data: {
          routerLinkActiveOptions: {
            exact: true,
            pathMatch: 'full'
          }
        }
      }];

      var _CrmmoduleRoutingModule = /*#__PURE__*/_createClass(function _CrmmoduleRoutingModule() {
        _classCallCheck(this, _CrmmoduleRoutingModule);
      });

      _CrmmoduleRoutingModule.ɵfac = function CrmmoduleRoutingModule_Factory(t) {
        return new (t || _CrmmoduleRoutingModule)();
      };

      _CrmmoduleRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _CrmmoduleRoutingModule
      });
      _CrmmoduleRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_CrmmoduleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    62755:
    /*!*****************************************************!*\
      !*** ./src/app/pages/crmmodule/crmmodule.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CrmmoduleModule": function CrmmoduleModule() {
          return (
            /* binding */
            _CrmmoduleModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _crmmodule_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./crmmodule-routing.module */
      26725);
      /* harmony import */


      var _crmmain_crmmain_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./crmmain/crmmain.component */
      72240);
      /* harmony import */


      var _add_lead_add_lead_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-lead/add-lead.component */
      35044);
      /* harmony import */


      var _edit_lead_edit_lead_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-lead/edit-lead.component */
      58865);
      /* harmony import */


      var _view_lead_view_lead_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./view-lead/view-lead.component */
      78184);
      /* harmony import */


      var _lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lead-list/lead-list.component */
      67387);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/material.module */
      63806);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _CrmmoduleModule = /*#__PURE__*/_createClass(function _CrmmoduleModule() {
        _classCallCheck(this, _CrmmoduleModule);
      });

      _CrmmoduleModule.ɵfac = function CrmmoduleModule_Factory(t) {
        return new (t || _CrmmoduleModule)();
      };

      _CrmmoduleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _CrmmoduleModule
      });
      _CrmmoduleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _crmmodule_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrmmoduleRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialExampleModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_CrmmoduleModule, {
          declarations: [_crmmain_crmmain_component__WEBPACK_IMPORTED_MODULE_1__.CrmmainComponent, _add_lead_add_lead_component__WEBPACK_IMPORTED_MODULE_2__.AddLeadComponent, _edit_lead_edit_lead_component__WEBPACK_IMPORTED_MODULE_3__.EditLeadComponent, _view_lead_view_lead_component__WEBPACK_IMPORTED_MODULE_4__.ViewLeadComponent, _lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_5__.LeadListComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _crmmodule_routing_module__WEBPACK_IMPORTED_MODULE_0__.CrmmoduleRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, src_app_material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialExampleModule]
        });
      })();
      /***/

    },

    /***/
    58865:
    /*!******************************************************************!*\
      !*** ./src/app/pages/crmmodule/edit-lead/edit-lead.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditLeadComponent": function EditLeadComponent() {
          return (
            /* binding */
            _EditLeadComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _EditLeadComponent = /*#__PURE__*/function () {
        function _EditLeadComponent() {
          _classCallCheck(this, _EditLeadComponent);
        }

        _createClass(_EditLeadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _EditLeadComponent;
      }();

      _EditLeadComponent.ɵfac = function EditLeadComponent_Factory(t) {
        return new (t || _EditLeadComponent)();
      };

      _EditLeadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _EditLeadComponent,
        selectors: [["app-edit-lead"]],
        decls: 2,
        vars: 0,
        template: function EditLeadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "edit-lead works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWxlYWQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    67387:
    /*!******************************************************************!*\
      !*** ./src/app/pages/crmmodule/lead-list/lead-list.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LeadListComponent": function LeadListComponent() {
          return (
            /* binding */
            _LeadListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _add_lead_add_lead_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../add-lead/add-lead.component */
      35044);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var src_app_core_services_crm_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/crm.service */
      45488);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function LeadListComponent_tr_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.mobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.projects);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.status);
        }
      }

      var _LeadListComponent = /*#__PURE__*/function () {
        function _LeadListComponent(dialog, crmservice) {
          _classCallCheck(this, _LeadListComponent);

          this.dialog = dialog;
          this.crmservice = crmservice;
          this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
          this.currentPageNo = 0;
          this.partyPageSize = 10;
        }

        _createClass(_LeadListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.getLeadList();
            this.crmservice.leadAdded$.subscribe(function () {
              // Fetch the updated list of users
              _this7.getLeadList();
            });
          }
        }, {
          key: "getLeadList",
          value: function getLeadList() {
            var _this8 = this;

            this.crmservice.getAllLeadList({}, this.currentUser.id, this.partyPageSize, this.currentPageNo + 1).then(function (res) {
              console.log("lead list data", res);
              _this8.leadlistData = res.data.pageData;
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var dialogRef = this.dialog.open(_add_lead_add_lead_component__WEBPACK_IMPORTED_MODULE_0__.AddLeadComponent, {
              width: '700px',
              height: '730px',
              data: {},
              panelClass: 'custom-dialog-lead-class',
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }]);

        return _LeadListComponent;
      }();

      _LeadListComponent.ɵfac = function LeadListComponent_Factory(t) {
        return new (t || _LeadListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_services_crm_service__WEBPACK_IMPORTED_MODULE_1__.CrmService));
      };

      _LeadListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _LeadListComponent,
        selectors: [["app-lead-list"]],
        decls: 34,
        vars: 1,
        consts: [[1, "container-fluid", "bg-white", "p-0"], [1, "row", "d-flex", "flex-center", "mb-3"], [1, "col-md-1", "col-lg-5", "col-xl-6"], [1, "col-sm-4", "col-md-3", "col-lg-3", "col-xl-3", "mt-2"], ["type", "search", "id", "searchInput", "placeholder", "search", 1, "form-control", "pe-5"], [1, "navOption-btns", "col-sm-8", "col-md-8", "col-lg-4", "col-xl-3", "mt-2", 2, "display", "flex", "justify-content", "space-around !important", "align-items", "center"], ["type", "button", 1, "btn", "text-nowrap", 3, "click"], [1, "fas", "fa-plus", "me-2"], [1, "btn", "text-nowrap"], [1, "fas", "fa-upload"], [1, "fas", "fa-download"], [1, "my-0", "py-0"], [2, "width", "100%", "overflow-x", "scroll"], [1, "table", "table-responsive", "table-bordered", "fs--1", "mb-0"], [1, "text-600"], [1, "text-nowrap", "col-1", 2, "vertical-align", "middle"], ["type", "checkbox", 1, "mt-2"], [1, "text-nowrap"], ["class", "btn-reveal-trigger text-left", "style", "color: #676398!important;", 4, "ngFor", "ngForOf"], [1, "btn-reveal-trigger", "text-left", 2, "color", "#676398!important"], ["scope", "row", 2, "vertical-align", "middle"], ["type", "checkbox", 1, "form-check-input"], [1, "name", "text-nowrap", 2, "vertical-align", "middle"], [1, "mobile", "text-nowrap", 2, "vertical-align", "middle"], [1, "email", "text-nowrap", 2, "vertical-align", "middle"], [1, "product", "text-nowrap", 2, "vertical-align", "middle"], [1, "status", "text-nowrap", 2, "vertical-align", "middle"], [2, "vertical-align", "middle", "width", "20%!important", "white-space", "nowrap"], [1, "", 2, "padding-left", "10%"], ["type", "button", 1, "btn", "btnp", "me-4"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "View", 1, "bi", "bi-eye", "icon-color", "iconFontSize"], [1, "btn", "btnp", "me-4"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Edit", 1, "bi-pencil-square", "icon-color", "iconFontSize"], ["data-bs-toggle", "modal", "data-bs-target", "#errorDelete-modal", 1, "btn", "btnp", "me-4"], ["data-bs-toggle", "tooltip", "data-bs-placement", "top", "title", "Delete", 1, "bi-trash", "icon-color", "iconFontSize", 2, "color", "red"]],
        template: function LeadListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LeadListComponent_Template_button_click_6_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Add Lead ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Import ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "hr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "table", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "thead", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Mobile No");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Product");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "th", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, LeadListComponent_tr_33_Template, 21, 5, "tr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.leadlistData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
        styles: ["tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #F8F8F8;\n}\n\n.table-responsive[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.table-responsive[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  height: auto !important;\n}\n\n.table-responsive[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n  border-style: none !important;\n}\n\n.thdata[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 20px !important;\n}\n\n.containerSearchBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  padding-right: 0px !important;\n  width: 250px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  color: #555;\n  display: flex;\n  padding: 2px;\n  border: 1px solid currentColor;\n  border-radius: 5px;\n  margin: 0 0 30px;\n  width: 100%;\n}\n\ninput[type=search][_ngcontent-%COMP%] {\n  background: transparent;\n  margin: 0;\n  padding: 7px 8px;\n  font-size: 14px;\n  outline: none;\n  height: 75%;\n  background-position: right;\n  background-repeat: no-repeat;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E\");\n  background-origin: content-box;\n  background-position-x: calc(100% + 20px);\n  \n}\n\ninput[type=search][_ngcontent-%COMP%]::-moz-placeholder {\n  color: #bbb;\n}\n\ninput[type=search][_ngcontent-%COMP%]::placeholder {\n  color: #bbb;\n}\n\n  .custom-dialog-lead-class {\n  margin-left: 53%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtFQUFBLDRCQUFBO0VBQUEsdUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtBQUNGOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUdFO0VBRUUsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFLQSwwQkFBQTtFQUNGLDRCQUFBO0VBQ0EscVhBQUE7RUFDQSw4QkFBQTtFQUNBLHdDQUFBO0VBQTBDLCtCQUFBO0FBSjVDOztBQVFFO0VBQ0UsV0FBQTtBQUxKOztBQUlFO0VBQ0UsV0FBQTtBQUxKOztBQVFFO0VBQ0UsZ0JBQUE7QUFMSiIsImZpbGUiOiJsZWFkLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0Ym9keSB0cjpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUgdGhlYWQgdGgge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB0Ym9keSB0ciwgdGQge1xyXG4gIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB0aCwgdGQsIHRyIHtcclxuICBib3JkZXItc3R5bGU6IG5vbmUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGhkYXRhe1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRoLCB0ZCB7XHJcbiAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lclNlYXJjaEJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjI1MHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMCAwIDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgICAvLyBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogN3B4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIC8vIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICAvL2NvbG9yOiBpbmhlcml0O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAvL2JvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGNsYXNzPSdiaSBiaS1zZWFyY2gnIHZpZXdCb3g9JzAgMCAxNiAxNiclM0UlM0NwYXRoIGQ9J00xMS43NDIgMTAuMzQ0YTYuNSA2LjUgMCAxIDAtMS4zOTcgMS4zOThoLS4wMDFjLjAzLjA0LjA2Mi4wNzguMDk4LjExNWwzLjg1IDMuODVhMSAxIDAgMCAwIDEuNDE1LTEuNDE0bC0zLjg1LTMuODVhMS4wMDcgMS4wMDcgMCAwIDAtLjExNS0uMXpNMTIgNi41YTUuNSA1LjUgMCAxIDEtMTEgMCA1LjUgNS41IDAgMCAxIDExIDB6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRVwiKTtcclxuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjYWxjKDEwMCUgKyAyMHB4KTsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cclxuICBcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLmN1c3RvbS1kaWFsb2ctbGVhZC1jbGFzcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTMlO1xyXG4gIH0iXX0= */"]
      });
      /***/
    },

    /***/
    78184:
    /*!******************************************************************!*\
      !*** ./src/app/pages/crmmodule/view-lead/view-lead.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewLeadComponent": function ViewLeadComponent() {
          return (
            /* binding */
            _ViewLeadComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ViewLeadComponent = /*#__PURE__*/function () {
        function _ViewLeadComponent() {
          _classCallCheck(this, _ViewLeadComponent);
        }

        _createClass(_ViewLeadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ViewLeadComponent;
      }();

      _ViewLeadComponent.ɵfac = function ViewLeadComponent_Factory(t) {
        return new (t || _ViewLeadComponent)();
      };

      _ViewLeadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ViewLeadComponent,
        selectors: [["app-view-lead"]],
        decls: 2,
        vars: 0,
        template: function ViewLeadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view-lead works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWxlYWQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_crmmodule_crmmodule_module_ts-es5.js.map