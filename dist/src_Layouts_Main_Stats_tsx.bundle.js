"use strict";
(self["webpackChunk_9_crowdfunding_page"] = self["webpackChunk_9_crowdfunding_page"] || []).push([["src_Layouts_Main_Stats_tsx"],{

/***/ "./src/Components/Paragraph.tsx":
/*!**************************************!*\
  !*** ./src/Components/Paragraph.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Paragraph)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

function Paragraph(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
    className: "text-sm text-gray leading-6 mb-4",
    children: props.children
  });
}

/***/ }),

/***/ "./src/Components/SmallDivide.tsx":
/*!****************************************!*\
  !*** ./src/Components/SmallDivide.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SmallDivide)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

function SmallDivide() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "h-[1px] mx-auto bg-gray opacity-20 w-1/4 mb-4"
  });
}

/***/ }),

/***/ "./src/Layouts/Main/Stats.tsx":
/*!************************************!*\
  !*** ./src/Layouts/Main/Stats.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Stats)
/* harmony export */ });
/* harmony import */ var _Components_Paragraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Components/Paragraph */ "./src/Components/Paragraph.tsx");
/* harmony import */ var _Components_SmallDivide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/SmallDivide */ "./src/Components/SmallDivide.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var totalRaised = 89914,
    totalGoal = 100000,
    totalBackers = 5007,
    daysLeft = 56;

function strNum(num) {
  return num.toLocaleString("en-US");
}

function StatHeading(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    className: "text-3xl font-bold block text-black mb-2",
    children: props.children
  });
}

function Stats() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h2", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StatHeading, {
        children: ["$", strNum(totalRaised)]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Components_Paragraph__WEBPACK_IMPORTED_MODULE_0__["default"], {
        children: ["of $", strNum(totalGoal), " backed"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Components_SmallDivide__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Components_Paragraph__WEBPACK_IMPORTED_MODULE_0__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(StatHeading, {
        children: ["$", strNum(totalBackers)]
      }), " total backers"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Components_SmallDivide__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Components_Paragraph__WEBPACK_IMPORTED_MODULE_0__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StatHeading, {
        children: strNum(daysLeft)
      }), " days left"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "bg-gray bg-opacity-20 h-3 w-full rounded-full mt-6",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "bg-cyan h-full rounded-full",
        style: {
          width: "".concat(totalRaised / totalGoal * 100, "%")
        }
      })
    })]
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX0xheW91dHNfTWFpbl9TdGF0c190c3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFjLFNBQVVBLFNBQVYsQ0FBb0JDLEtBQXBCLEVBQTRFO0FBQ3hGLHNCQUNFO0FBQUcsYUFBUyxFQUFDLGtDQUFiO0FBQUEsY0FBaURBLEtBQUssQ0FBQ0M7QUFBdkQsSUFERjtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDSmEsU0FBVUMsV0FBVixHQUFxQjtBQUNqQyxzQkFBTztBQUFLLGFBQVMsRUFBQztBQUFmLElBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGRDtBQUNBOzs7O0FBRUEsSUFBSUUsV0FBVyxHQUFHLEtBQWxCO0FBQUEsSUFDRUMsU0FBUyxHQUFHLE1BRGQ7QUFBQSxJQUVFQyxZQUFZLEdBQUcsSUFGakI7QUFBQSxJQUdFQyxRQUFRLEdBQUcsRUFIYjs7QUFLQSxTQUFTQyxNQUFULENBQWdCQyxHQUFoQixFQUEyQjtBQUN6QixTQUFPQSxHQUFHLENBQUNDLGNBQUosQ0FBbUIsT0FBbkIsQ0FBUDtBQUNEOztBQUVELFNBQVNDLFdBQVQsQ0FBcUJYLEtBQXJCLEVBRUM7QUFDQyxzQkFDRTtBQUFNLGFBQVMsRUFBQywwQ0FBaEI7QUFBQSxjQUNHQSxLQUFLLENBQUNDO0FBRFQsSUFERjtBQUtEOztBQUVhLFNBQVVXLEtBQVYsR0FBZTtBQUMzQixzQkFDRTtBQUFBLDRCQUNFO0FBQUEsOEJBQ0Usd0RBQUMsV0FBRDtBQUFBLHdCQUFlSixNQUFNLENBQUNKLFdBQUQsQ0FBckI7QUFBQSxRQURGLGVBRUUsd0RBQUMsNkRBQUQ7QUFBQSwyQkFBUUksTUFBTSxDQUFDSCxTQUFELENBQWQ7QUFBQSxRQUZGO0FBQUEsTUFERixlQUtFLHVEQUFDLCtEQUFELEtBTEYsZUFPRSx3REFBQyw2REFBRDtBQUFBLDhCQUNFLHdEQUFDLFdBQUQ7QUFBQSx3QkFBZUcsTUFBTSxDQUFDRixZQUFELENBQXJCO0FBQUEsUUFERjtBQUFBLE1BUEYsZUFVRSx1REFBQywrREFBRCxLQVZGLGVBV0Usd0RBQUMsNkRBQUQ7QUFBQSw4QkFDRSx1REFBQyxXQUFEO0FBQUEsa0JBQWNFLE1BQU0sQ0FBQ0QsUUFBRDtBQUFwQixRQURGO0FBQUEsTUFYRixlQWVFO0FBQUssZUFBUyxFQUFDLG9EQUFmO0FBQUEsNkJBQ0U7QUFDRSxpQkFBUyxFQUFFLDZCQURiO0FBRUUsYUFBSyxFQUFFO0FBQUVNLGVBQUssRUFBRSxVQUFJVCxXQUFXLEdBQUdDLFNBQWYsR0FBNEIsR0FBL0IsRUFBa0MsR0FBbEM7QUFBVDtBQUZUO0FBREYsTUFmRjtBQUFBLElBREY7QUF3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly85LWNyb3dkZnVuZGluZy1wYWdlLy4vc3JjL0NvbXBvbmVudHMvUGFyYWdyYXBoLnRzeCIsIndlYnBhY2s6Ly85LWNyb3dkZnVuZGluZy1wYWdlLy4vc3JjL0NvbXBvbmVudHMvU21hbGxEaXZpZGUudHN4Iiwid2VicGFjazovLzktY3Jvd2RmdW5kaW5nLXBhZ2UvLi9zcmMvTGF5b3V0cy9NYWluL1N0YXRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJhZ3JhcGgocHJvcHM6IHtjaGlsZHJlbjogUmVhY3QuUmVhY3RDaGlsZCB8IFJlYWN0LlJlYWN0Q2hpbGRbXX0pIHtcbiAgcmV0dXJuIChcbiAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheSBsZWFkaW5nLTYgbWItNFwiPntwcm9wcy5jaGlsZHJlbn08L3A+XG4gICk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU21hbGxEaXZpZGUoKSB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImgtWzFweF0gbXgtYXV0byBiZy1ncmF5IG9wYWNpdHktMjAgdy0xLzQgbWItNFwiPjwvZGl2Pjtcbn0iLCJpbXBvcnQgUCBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9QYXJhZ3JhcGhcIjtcbmltcG9ydCBTbWFsbERpdmlkZSBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9TbWFsbERpdmlkZVwiO1xuXG5sZXQgdG90YWxSYWlzZWQgPSA4OTkxNCxcbiAgdG90YWxHb2FsID0gMTAwMDAwLFxuICB0b3RhbEJhY2tlcnMgPSA1MDA3LFxuICBkYXlzTGVmdCA9IDU2O1xuXG5mdW5jdGlvbiBzdHJOdW0obnVtOiBudW1iZXIpIHtcbiAgcmV0dXJuIG51bS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIpO1xufVxuXG5mdW5jdGlvbiBTdGF0SGVhZGluZyhwcm9wczoge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3RDaGlsZCB8IFJlYWN0LlJlYWN0Q2hpbGRbXTtcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgYmxvY2sgdGV4dC1ibGFjayBtYi0yXCI+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9zcGFuPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGF0cygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgyPlxuICAgICAgICA8U3RhdEhlYWRpbmc+JHtzdHJOdW0odG90YWxSYWlzZWQpfTwvU3RhdEhlYWRpbmc+XG4gICAgICAgIDxQPm9mICR7c3RyTnVtKHRvdGFsR29hbCl9IGJhY2tlZDwvUD5cbiAgICAgIDwvaDI+XG4gICAgICA8U21hbGxEaXZpZGUgLz5cblxuICAgICAgPFA+XG4gICAgICAgIDxTdGF0SGVhZGluZz4ke3N0ck51bSh0b3RhbEJhY2tlcnMpfTwvU3RhdEhlYWRpbmc+IHRvdGFsIGJhY2tlcnNcbiAgICAgIDwvUD5cbiAgICAgIDxTbWFsbERpdmlkZSAvPlxuICAgICAgPFA+XG4gICAgICAgIDxTdGF0SGVhZGluZz57c3RyTnVtKGRheXNMZWZ0KX08L1N0YXRIZWFkaW5nPiBkYXlzIGxlZnRcbiAgICAgIDwvUD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5IGJnLW9wYWNpdHktMjAgaC0zIHctZnVsbCByb3VuZGVkLWZ1bGwgbXQtNlwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgYmctY3lhbiBoLWZ1bGwgcm91bmRlZC1mdWxsYH1cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7KHRvdGFsUmFpc2VkIC8gdG90YWxHb2FsKSAqIDEwMH0lYCB9fVxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJQYXJhZ3JhcGgiLCJwcm9wcyIsImNoaWxkcmVuIiwiU21hbGxEaXZpZGUiLCJQIiwidG90YWxSYWlzZWQiLCJ0b3RhbEdvYWwiLCJ0b3RhbEJhY2tlcnMiLCJkYXlzTGVmdCIsInN0ck51bSIsIm51bSIsInRvTG9jYWxlU3RyaW5nIiwiU3RhdEhlYWRpbmciLCJTdGF0cyIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==