(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _a, _b;

exports.__esModule = true;

var cookies_1 = require("./shared/cookies");

var menu = document.getElementById('menu');
var dropdown = document.getElementById('dropdown');
var overlay = document.getElementById('blocking-overlay');
var toggled = false;

if (menu && dropdown && overlay) {
  menu.addEventListener('click', function () {
    if (toggled) {
      menu.classList.remove('toggled');
      dropdown.classList.remove('toggled');
      overlay.classList.remove('toggled');
    } else {
      menu.classList.add('toggled');
      dropdown.classList.add('toggled');
      overlay.classList.add('toggled');
    }

    toggled = !toggled;
  });
  document.addEventListener('scroll', function () {
    if (toggled) {
      menu.classList.remove('toggled');
      dropdown.classList.remove('toggled');
      overlay.classList.remove('toggled');
      toggled = false;
    }
  });
}

var login = document.getElementById('login');
var logout = document.getElementById('logout');

if (login && logout) {
  MemberStack.onReady.then(function (member) {
    if (member.loggedIn) {
      login.style.display = 'none';
      logout.style.display = 'flex';
    } else {
      login.style.display = 'flex';
      logout.style.display = 'none';
    }
  });
}

var langMenuVisible = false;
var globe = document.getElementById('globe');

if (globe) {
  globe.addEventListener('click', function () {
    if (langMenuVisible) {
      globe.classList.remove('selected');
      langMenuVisible = false;
    } else {
      globe.classList.add('selected');
      langMenuVisible = true;
    }
  });
}

(_a = document.getElementById('lang-de')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
  (0, cookies_1.removeCookie)('lang');
  (0, cookies_1.setCookie)('lang', 'de');
  var event = new Event('langchange');
  document.dispatchEvent(event);
});
(_b = document.getElementById('lang-en')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
  (0, cookies_1.removeCookie)('lang');
  (0, cookies_1.setCookie)('lang', 'en');
  var event = new Event('langchange');
  document.dispatchEvent(event);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYSIsIl9iIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJjb29raWVzXzEiLCJyZXF1aXJlIiwibWVudSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkcm9wZG93biIsIm92ZXJsYXkiLCJ0b2dnbGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImxvZ2luIiwibG9nb3V0IiwiTWVtYmVyU3RhY2siLCJvblJlYWR5IiwidGhlbiIsIm1lbWJlciIsImxvZ2dlZEluIiwic3R5bGUiLCJkaXNwbGF5IiwibGFuZ01lbnVWaXNpYmxlIiwiZ2xvYmUiLCJyZW1vdmVDb29raWUiLCJzZXRDb29raWUiLCJldmVudCIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCJdLCJzb3VyY2VzIjpbImZha2VfMzBlNDYwYjQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2EsIF9iO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjb29raWVzXzEgPSByZXF1aXJlKFwiLi9zaGFyZWQvY29va2llc1wiKTtcbnZhciBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcbnZhciBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcm9wZG93bicpO1xudmFyIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmxvY2tpbmctb3ZlcmxheScpO1xudmFyIHRvZ2dsZWQgPSBmYWxzZTtcbmlmIChtZW51ICYmIGRyb3Bkb3duICYmIG92ZXJsYXkpIHtcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodG9nZ2xlZCkge1xuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGVkJyk7XG4gICAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGVkJyk7XG4gICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgndG9nZ2xlZCcpO1xuICAgICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgndG9nZ2xlZCcpO1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd0b2dnbGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdG9nZ2xlZCA9ICF0b2dnbGVkO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRvZ2dsZWQpIHtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlZCcpO1xuICAgICAgICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlZCcpO1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGVkJyk7XG4gICAgICAgICAgICB0b2dnbGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbnZhciBsb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpO1xudmFyIGxvZ291dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvdXQnKTtcbmlmIChsb2dpbiAmJiBsb2dvdXQpIHtcbiAgICBNZW1iZXJTdGFjay5vblJlYWR5LnRoZW4oZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICBpZiAobWVtYmVyLmxvZ2dlZEluKSB7XG4gICAgICAgICAgICBsb2dpbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgbG9nb3V0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsb2dpbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgbG9nb3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbnZhciBsYW5nTWVudVZpc2libGUgPSBmYWxzZTtcbnZhciBnbG9iZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnbG9iZScpO1xuaWYgKGdsb2JlKSB7XG4gICAgZ2xvYmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChsYW5nTWVudVZpc2libGUpIHtcbiAgICAgICAgICAgIGdsb2JlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBsYW5nTWVudVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBsYW5nTWVudVZpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4oX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFuZy1kZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgKDAsIGNvb2tpZXNfMS5yZW1vdmVDb29raWUpKCdsYW5nJyk7XG4gICAgKDAsIGNvb2tpZXNfMS5zZXRDb29raWUpKCdsYW5nJywgJ2RlJyk7XG4gICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdsYW5nY2hhbmdlJyk7XG4gICAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59KTtcbihfYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYW5nLWVuJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAoMCwgY29va2llc18xLnJlbW92ZUNvb2tpZSkoJ2xhbmcnKTtcbiAgICAoMCwgY29va2llc18xLnNldENvb2tpZSkoJ2xhbmcnLCAnZW4nKTtcbiAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2xhbmdjaGFuZ2UnKTtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQSxJQUFJQSxFQUFKLEVBQVFDLEVBQVI7O0FBQ0FDLE9BQU8sQ0FBQ0MsVUFBUixHQUFxQixJQUFyQjs7QUFDQSxJQUFJQyxTQUFTLEdBQUdDLE9BQU8sQ0FBQyxrQkFBRCxDQUF2Qjs7QUFDQSxJQUFJQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFYO0FBQ0EsSUFBSUMsUUFBUSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLElBQUlFLE9BQU8sR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixDQUFkO0FBQ0EsSUFBSUcsT0FBTyxHQUFHLEtBQWQ7O0FBQ0EsSUFBSUwsSUFBSSxJQUFJRyxRQUFSLElBQW9CQyxPQUF4QixFQUFpQztFQUM3QkosSUFBSSxDQUFDTSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFZO0lBQ3ZDLElBQUlELE9BQUosRUFBYTtNQUNUTCxJQUFJLENBQUNPLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixTQUF0QjtNQUNBTCxRQUFRLENBQUNJLFNBQVQsQ0FBbUJDLE1BQW5CLENBQTBCLFNBQTFCO01BQ0FKLE9BQU8sQ0FBQ0csU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsU0FBekI7SUFDSCxDQUpELE1BS0s7TUFDRFIsSUFBSSxDQUFDTyxTQUFMLENBQWVFLEdBQWYsQ0FBbUIsU0FBbkI7TUFDQU4sUUFBUSxDQUFDSSxTQUFULENBQW1CRSxHQUFuQixDQUF1QixTQUF2QjtNQUNBTCxPQUFPLENBQUNHLFNBQVIsQ0FBa0JFLEdBQWxCLENBQXNCLFNBQXRCO0lBQ0g7O0lBQ0RKLE9B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
},{"./shared/cookies":2}],2:[function(require,module,exports){
"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true;
exports.removeCookie = exports.setCookie = exports.getCookie = void 0;
var daysPower = 24 * 60 * 60 * 1000;

function getExpirationDateStr(value) {
  if (typeof value !== 'number') {
    return value.toUTCString();
  }

  return new Date(Date.now() + value * daysPower).toUTCString();
}

function getCookie(name) {
  var cookieStrings = document.cookie.split(/;\s*/);
  var cookies = cookieStrings.reduce(function (sum, cookie) {
    var _a;

    var _b = cookie.split('='),
        cookieName = _b[0],
        value = _b[1];

    return __assign(__assign({}, sum), (_a = {}, _a[cookieName] = decodeURIComponent(value), _a));
  }, {});
  return cookies[name];
}

exports.getCookie = getCookie;

function setCookie(name, value, options) {
  if (options === void 0) {
    options = {};
  }

  var cookieString = ["".concat(name, "=").concat(encodeURIComponent(value)), "path=".concat(options.path), options.domain ? "domain=".concat(options.domain) : undefined, options.maxAge ? "max-age=".concat(options.maxAge) : undefined, options.expires ? "expires=".concat(getExpirationDateStr(options.expires)) : undefined, options.secure ? 'secure' : undefined, options.samesite ? "samesite=".concat(options.samesite) : undefined].filter(function (el) {
    return !!el;
  }).join('; ');
  document.cookie = cookieString;
}

exports.setCookie = setCookie;

function removeCookie(name) {
  document.cookie = "".concat(name, "=;expires=").concat(new Date(0).toUTCString(), ";max-age=-99999999");
}

exports.removeCookie = removeCookie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiYXBwbHkiLCJleHBvcnRzIiwiX19lc01vZHVsZSIsInJlbW92ZUNvb2tpZSIsInNldENvb2tpZSIsImdldENvb2tpZSIsImRheXNQb3dlciIsImdldEV4cGlyYXRpb25EYXRlU3RyIiwidmFsdWUiLCJ0b1VUQ1N0cmluZyIsIkRhdGUiLCJub3ciLCJuYW1lIiwiY29va2llU3RyaW5ncyIsImRvY3VtZW50IiwiY29va2llIiwic3BsaXQiLCJjb29raWVzIiwicmVkdWNlIiwic3VtIiwiX2EiLCJfYiIsImNvb2tpZU5hbWUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJvcHRpb25zIiwiY29va2llU3RyaW5nIiwiY29uY2F0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicGF0aCIsImRvbWFpbiIsInVuZGVmaW5lZCIsIm1heEFnZSIsImV4cGlyZXMiLCJzZWN1cmUiLCJzYW1lc2l0ZSIsImZpbHRlciIsImVsIiwiam9pbiJdLCJzb3VyY2VzIjpbImNvb2tpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucmVtb3ZlQ29va2llID0gZXhwb3J0cy5zZXRDb29raWUgPSBleHBvcnRzLmdldENvb2tpZSA9IHZvaWQgMDtcbnZhciBkYXlzUG93ZXIgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuZnVuY3Rpb24gZ2V0RXhwaXJhdGlvbkRhdGVTdHIodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9VVENTdHJpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKERhdGUubm93KCkgKyB2YWx1ZSAqIGRheXNQb3dlcikudG9VVENTdHJpbmcoKTtcbn1cbmZ1bmN0aW9uIGdldENvb2tpZShuYW1lKSB7XG4gICAgdmFyIGNvb2tpZVN0cmluZ3MgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoLztcXHMqLyk7XG4gICAgdmFyIGNvb2tpZXMgPSBjb29raWVTdHJpbmdzLnJlZHVjZShmdW5jdGlvbiAoc3VtLCBjb29raWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgX2IgPSBjb29raWUuc3BsaXQoJz0nKSwgY29va2llTmFtZSA9IF9iWzBdLCB2YWx1ZSA9IF9iWzFdO1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHN1bSksIChfYSA9IHt9LCBfYVtjb29raWVOYW1lXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSksIF9hKSk7XG4gICAgfSwge30pO1xuICAgIHJldHVybiBjb29raWVzW25hbWVdO1xufVxuZXhwb3J0cy5nZXRDb29raWUgPSBnZXRDb29raWU7XG5mdW5jdGlvbiBzZXRDb29raWUobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBjb29raWVTdHJpbmcgPSBbXG4gICAgICAgIFwiXCIuY29uY2F0KG5hbWUsIFwiPVwiKS5jb25jYXQoZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSksXG4gICAgICAgIFwicGF0aD1cIi5jb25jYXQob3B0aW9ucy5wYXRoKSxcbiAgICAgICAgb3B0aW9ucy5kb21haW4gPyBcImRvbWFpbj1cIi5jb25jYXQob3B0aW9ucy5kb21haW4pIDogdW5kZWZpbmVkLFxuICAgICAgICBvcHRpb25zLm1heEFnZSA/IFwibWF4LWFnZT1cIi5jb25jYXQob3B0aW9ucy5tYXhBZ2UpIDogdW5kZWZpbmVkLFxuICAgICAgICBvcHRpb25zLmV4cGlyZXMgPyBcImV4cGlyZXM9XCIuY29uY2F0KGdldEV4cGlyYXRpb25EYXRlU3RyKG9wdGlvbnMuZXhwaXJlcykpIDogdW5kZWZpbmVkLFxuICAgICAgICBvcHRpb25zLnNlY3VyZSA/ICdzZWN1cmUnIDogdW5kZWZpbmVkLFxuICAgICAgICBvcHRpb25zLnNhbWVzaXRlID8gXCJzYW1lc2l0ZT1cIi5jb25jYXQob3B0aW9ucy5zYW1lc2l0ZSkgOiB1bmRlZmluZWQsXG4gICAgXS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiAhIWVsOyB9KS5qb2luKCc7ICcpO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZVN0cmluZztcbn1cbmV4cG9ydHMuc2V0Q29va2llID0gc2V0Q29va2llO1xuZnVuY3Rpb24gcmVtb3ZlQ29va2llKG5hbWUpIHtcbiAgICBkb2N1bWVudC5jb29raWUgPSBcIlwiLmNvbmNhdChuYW1lLCBcIj07ZXhwaXJlcz1cIikuY29uY2F0KG5ldyBEYXRlKDApLnRvVVRDU3RyaW5nKCksIFwiO21heC1hZ2U9LTk5OTk5OTk5XCIpO1xufVxuZXhwb3J0cy5yZW1vdmVDb29raWUgPSByZW1vdmVDb29raWU7XG4iXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBLElBQUlBLFFBQVEsR0FBSSxV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
},{}]},{},[1])