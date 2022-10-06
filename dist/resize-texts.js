(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var rxjs_1 = require("rxjs");

var window_events_1 = require("./shared/window-events");

var downloadTexts = document.getElementsByClassName("resize-text");
var origTexts = [];

for (var i = 0; i < downloadTexts.length; i++) {
  origTexts.push(downloadTexts[i].innerText);
}

var onclick$ = (0, window_events_1.getOnclick$)();
var onresize$ = (0, window_events_1.getOnresize$)();
onclick$.pipe((0, rxjs_1.delay)(50)).subscribe(function () {
  checkForOverflows();
});
onresize$.subscribe(function () {
  checkForOverflows();
});

function checkForOverflows() {
  for (var i = 0; i < downloadTexts.length; i++) {
    downloadTexts[i].innerText = origTexts[i];
    var parent_1 = downloadTexts[i].parentElement;

    if (parent_1 && isOverflown(parent_1)) {
      resizeText(i);
    }
  }
}

function isOverflown(el) {
  return el.scrollWidth > el.clientWidth;
}

function resizeText(index) {
  var text = origTexts[index];
  var element = downloadTexts[index];
  var parent = element.parentElement;
  var chunk = Math.floor(text.length / 2);

  while (parent && isOverflown(parent)) {
    if (chunk < 3) break;
    element.innerText = text.slice(0, chunk) + '...' + text.slice(-chunk);
    chunk -= 1;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHBvcnRzIiwiX19lc01vZHVsZSIsInJ4anNfMSIsInJlcXVpcmUiLCJ3aW5kb3dfZXZlbnRzXzEiLCJkb3dubG9hZFRleHRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3JpZ1RleHRzIiwiaSIsImxlbmd0aCIsInB1c2giLCJpbm5lclRleHQiLCJvbmNsaWNrJCIsImdldE9uY2xpY2skIiwib25yZXNpemUkIiwiZ2V0T25yZXNpemUkIiwicGlwZSIsImRlbGF5Iiwic3Vic2NyaWJlIiwiY2hlY2tGb3JPdmVyZmxvd3MiLCJwYXJlbnRfMSIsInBhcmVudEVsZW1lbnQiLCJpc092ZXJmbG93biIsInJlc2l6ZVRleHQiLCJlbCIsInNjcm9sbFdpZHRoIiwiY2xpZW50V2lkdGgiLCJpbmRleCIsInRleHQiLCJlbGVtZW50IiwicGFyZW50IiwiY2h1bmsiLCJNYXRoIiwiZmxvb3IiLCJzbGljZSJdLCJzb3VyY2VzIjpbImZha2VfZTk2MWI1MDQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHJ4anNfMSA9IHJlcXVpcmUoXCJyeGpzXCIpO1xudmFyIHdpbmRvd19ldmVudHNfMSA9IHJlcXVpcmUoXCIuL3NoYXJlZC93aW5kb3ctZXZlbnRzXCIpO1xudmFyIGRvd25sb2FkVGV4dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmVzaXplLXRleHRcIik7XG52YXIgb3JpZ1RleHRzID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IGRvd25sb2FkVGV4dHMubGVuZ3RoOyBpKyspIHtcbiAgICBvcmlnVGV4dHMucHVzaChkb3dubG9hZFRleHRzW2ldLmlubmVyVGV4dCk7XG59XG52YXIgb25jbGljayQgPSAoMCwgd2luZG93X2V2ZW50c18xLmdldE9uY2xpY2skKSgpO1xudmFyIG9ucmVzaXplJCA9ICgwLCB3aW5kb3dfZXZlbnRzXzEuZ2V0T25yZXNpemUkKSgpO1xub25jbGljayQucGlwZSgoMCwgcnhqc18xLmRlbGF5KSg1MCkpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgY2hlY2tGb3JPdmVyZmxvd3MoKTtcbn0pO1xub25yZXNpemUkLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgY2hlY2tGb3JPdmVyZmxvd3MoKTtcbn0pO1xuZnVuY3Rpb24gY2hlY2tGb3JPdmVyZmxvd3MoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb3dubG9hZFRleHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRvd25sb2FkVGV4dHNbaV0uaW5uZXJUZXh0ID0gb3JpZ1RleHRzW2ldO1xuICAgICAgICB2YXIgcGFyZW50XzEgPSBkb3dubG9hZFRleHRzW2ldLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmIChwYXJlbnRfMSAmJiBpc092ZXJmbG93bihwYXJlbnRfMSkpIHtcbiAgICAgICAgICAgIHJlc2l6ZVRleHQoaSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBpc092ZXJmbG93bihlbCkge1xuICAgIHJldHVybiBlbC5zY3JvbGxXaWR0aCA+IGVsLmNsaWVudFdpZHRoO1xufVxuZnVuY3Rpb24gcmVzaXplVGV4dChpbmRleCkge1xuICAgIHZhciB0ZXh0ID0gb3JpZ1RleHRzW2luZGV4XTtcbiAgICB2YXIgZWxlbWVudCA9IGRvd25sb2FkVGV4dHNbaW5kZXhdO1xuICAgIHZhciBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgdmFyIGNodW5rID0gTWF0aC5mbG9vcih0ZXh0Lmxlbmd0aCAvIDIpO1xuICAgIHdoaWxlIChwYXJlbnQgJiYgaXNPdmVyZmxvd24ocGFyZW50KSkge1xuICAgICAgICBpZiAoY2h1bmsgPCAzKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGVsZW1lbnQuaW5uZXJUZXh0ID0gdGV4dC5zbGljZSgwLCBjaHVuaykgKyAnLi4uJyArIHRleHQuc2xpY2UoLWNo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
},{"./shared/window-events":2,"rxjs":3}],2:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.getOnscroll$ = exports.getOnresize$ = exports.getOnload$ = exports.getOnclick$ = void 0;

var rxjs_1 = require("rxjs");

var onclick$ = window.onclick$;
var onload$ = window.onload$;
var onresize$ = window.onresize$;
var onscroll$ = window.onscroll$;

function init() {
  var onclick$$ = new rxjs_1.Subject();
  var onload$$ = new rxjs_1.Subject();
  var onresize$$ = new rxjs_1.Subject();
  var onscroll$$ = new rxjs_1.Subject();
  onclick$ = onclick$$.asObservable();
  onload$ = onload$$.asObservable();
  onresize$ = onresize$$.asObservable();
  onscroll$ = onscroll$$.asObservable();
  window.onclick$ = onclick$;
  window.onload$ = onload$;
  window.onresize$ = onresize$;
  window.onscroll$ = onscroll$;
  window.addEventListener('click', function (ev) {
    onclick$$.next(ev);
  });
  window.addEventListener('load', function (ev) {
    onload$$.next(ev);
  });
  window.addEventListener('resize', function (ev) {
    onresize$$.next(ev);
  });
  window.addEventListener('scroll', function (ev) {
    onscroll$$.next(ev);
  });
}

function getOnclick$() {
  if (!onclick$) {
    init();
  }

  return window.onclick$;
}

exports.getOnclick$ = getOnclick$;

function getOnload$() {
  if (!onload$) {
    init();
  }

  return window.onload$;
}

exports.getOnload$ = getOnload$;

function getOnresize$() {
  if (!onresize$) {
    init();
  }

  return window.onresize$;
}

exports.getOnresize$ = getOnresize$;

function getOnscroll$() {
  if (!onscroll$) {
    init();
  }

  return window.onscroll$;
}

exports.getOnscroll$ = getOnscroll$;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHBvcnRzIiwiX19lc01vZHVsZSIsImdldE9uc2Nyb2xsJCIsImdldE9ucmVzaXplJCIsImdldE9ubG9hZCQiLCJnZXRPbmNsaWNrJCIsInJ4anNfMSIsInJlcXVpcmUiLCJvbmNsaWNrJCIsIndpbmRvdyIsIm9ubG9hZCQiLCJvbnJlc2l6ZSQiLCJvbnNjcm9sbCQiLCJpbml0Iiwib25jbGljayQkIiwiU3ViamVjdCIsIm9ubG9hZCQkIiwib25yZXNpemUkJCIsIm9uc2Nyb2xsJCQiLCJhc09ic2VydmFibGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJuZXh0Il0sInNvdXJjZXMiOlsid2luZG93LWV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldE9uc2Nyb2xsJCA9IGV4cG9ydHMuZ2V0T25yZXNpemUkID0gZXhwb3J0cy5nZXRPbmxvYWQkID0gZXhwb3J0cy5nZXRPbmNsaWNrJCA9IHZvaWQgMDtcbnZhciByeGpzXzEgPSByZXF1aXJlKFwicnhqc1wiKTtcbnZhciBvbmNsaWNrJCA9IHdpbmRvdy5vbmNsaWNrJDtcbnZhciBvbmxvYWQkID0gd2luZG93Lm9ubG9hZCQ7XG52YXIgb25yZXNpemUkID0gd2luZG93Lm9ucmVzaXplJDtcbnZhciBvbnNjcm9sbCQgPSB3aW5kb3cub25zY3JvbGwkO1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgb25jbGljayQkID0gbmV3IHJ4anNfMS5TdWJqZWN0KCk7XG4gICAgdmFyIG9ubG9hZCQkID0gbmV3IHJ4anNfMS5TdWJqZWN0KCk7XG4gICAgdmFyIG9ucmVzaXplJCQgPSBuZXcgcnhqc18xLlN1YmplY3QoKTtcbiAgICB2YXIgb25zY3JvbGwkJCA9IG5ldyByeGpzXzEuU3ViamVjdCgpO1xuICAgIG9uY2xpY2skID0gb25jbGljayQkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIG9ubG9hZCQgPSBvbmxvYWQkJC5hc09ic2VydmFibGUoKTtcbiAgICBvbnJlc2l6ZSQgPSBvbnJlc2l6ZSQkLmFzT2JzZXJ2YWJsZSgpO1xuICAgIG9uc2Nyb2xsJCA9IG9uc2Nyb2xsJCQuYXNPYnNlcnZhYmxlKCk7XG4gICAgd2luZG93Lm9uY2xpY2skID0gb25jbGljayQ7XG4gICAgd2luZG93Lm9ubG9hZCQgPSBvbmxvYWQkO1xuICAgIHdpbmRvdy5vbnJlc2l6ZSQgPSBvbnJlc2l6ZSQ7XG4gICAgd2luZG93Lm9uc2Nyb2xsJCA9IG9uc2Nyb2xsJDtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgb25jbGljayQkLm5leHQoZXYpO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIG9ubG9hZCQkLm5leHQoZXYpO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgb25yZXNpemUkJC5uZXh0KGV2KTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIG9uc2Nyb2xsJCQubmV4dChldik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRPbmNsaWNrJCgpIHtcbiAgICBpZiAoIW9uY2xpY2skKSB7XG4gICAgICAgIGluaXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHdpbmRvdy5vbmNsaWNrJDtcbn1cbmV4cG9ydHMuZ2V0T25jbGljayQgPSBnZXRPbmNsaWNrJDtcbmZ1bmN0aW9uIGdldE9ubG9hZCQoKSB7XG4gICAgaWYgKCFvbmxvYWQkKSB7XG4gICAgICAgIGluaXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHdpbmRvdy5vbmxvYWQkO1xufVxuZXhwb3J0cy5nZXRPbmxvYWQkID0gZ2V0T25sb2FkJDtcbmZ1bmN0aW9uIGdldE9ucmVzaXplJCgpIHtcbiAgICBpZiAoIW9ucmVzaXplJCkge1xuICAgICAgICBpbml0KCk7XG4gICAgfVxuICAgIHJldHVybiB3aW5kb3cub25yZXNpemUkO1xufVxuZXhwb3J0cy5nZXRPbnJlc2l6ZSQgPSBnZXRPbnJlc2l6ZSQ7XG5mdW5jdGlvbiBnZXRPbnNjcm9sbCQoKSB7XG4gICAgaWYgKCFvbnNjcm9sbCQpIHtcbiAgICAgICAgaW5pdCgpO1xuICAgIH1cbiAgICByZXR1cm4gd2luZG93Lm9uc2Nyb2xsJDtcbn1cbmV4cG9ydHMuZ2V0T25zY3JvbGwkID0gZ2V0T25zY3JvbGwkO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBTyxDQUFDQyxVQUFSLEdBQXFCLElBQXJCO0FBQ0FELE9BQU8sQ0FBQ0UsWUFBUixHQUF1QkYsT0FBTyxDQUFDRyxZQUFSLEdBQXVCSCxPQUFPLENBQUNJLFVBQVIsR0FBcUJKLE9BQU8sQ0FBQ0ssV0FBUixHQUFzQixLQUFLLENBQTlGOztBQUNBLElBQUlDLE1BQU0sR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHQyxNQUFNLENBQUNELFFBQXRCO0FBQ0EsSUFBSUUsT0FBTyxHQUFHRCxNQUFNLENBQUNDLE9BQXJCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHRixNQUFNLENBQUNFLFNBQXZCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHSCxNQUFNLENBQUNHLFNBQXZCOztBQUNBLFNBQVNDLElBQVQsR0FBZ0I7RUFDWixJQUFJQyxTQUFTLEdBQUcsSUFBSVIsTUFBTSxDQUFDUyxPQUFYLEVBQWhCO0VBQ0EsSUFBSUMsUUFBUSxHQUFHLElBQUlWLE1BQU0sQ0FBQ1MsT0FBWCxFQUFmO0VBQ0EsSUFBSUUsVUFBVSxHQUFHLElBQUlYLE1BQU0sQ0FBQ1MsT0FBWCxFQUFqQjtFQUNBLElBQUlHLFVBQVUsR0FBRyxJQUFJWixNQUFNLENBQUNTLE9BQVgsRUFBakI7RUFDQVAsUUFBUSxHQUFHTSxTQUFTLENBQUNLLFlBQVYsRUFBWDtFQUNBVCxPQUFPLEdBQUdNLFFBQVEsQ0FBQ0csWUFBVCxFQUFWO0VBQ0FSLFNBQVMsR0FBR00sVUFBVSxDQUFDRSxZQUFYLEVBQVo7RUFDQVAsU0FBUyxHQUFHTSxVQUFVLENBQUNDLFlBQVgsRUFBWjtFQUNBVixNQUFNLENBQUNELFFBQVAsR0FBa0JBLFFBQWxCO0VBQ0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkEsT0FBakI7RUFDQUQsTUFBTSxDQUFDRSxTQUFQLEdBQW1CQSxTQUFuQjtFQUNBRixNQUFNLENBQUNHLFNBQVAsR0FBbUJBLFNBQW5CO0VBQ0FILE1BQU0sQ0FBQ1csZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBVUMsRUFBVixFQUFjO0lBQzNDUCxTQUFTLENBQUNRLElBQVYsQ0FBZUQsRUFBZjtFQUNILENBRkQ7RUFHQVosTUFBTSxDQUFDVyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxVQUFVQyxFQUFWLEVBQWM7SUFDMUNMLFFBQVEsQ0FBQ00sSUFBVCxDQUFjRCxFQUFkO0VBQ0gsQ0FGRDtFQUdBWixNQUFNLENBQUNXLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFVBQVVDLEVBQVYsRUFBYztJQUM1Q0osVUFBVSxDQUFDSyxJQUFYLENBQWdCRCxFQUFoQjtFQUNILENBRkQ7RUFHQVosTUFBTSxDQUFDVyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxVQUFVQyxFQUFWLEVBQWM7SUFDNUNILFVBQVUsQ0FBQ0ksSUFBWCxDQUFnQkQsRUFBaEI7RUFDSCxDQUZEO0FBR0g7O0FBQ0QsU0FBU2hCLFdBQVQsR0FBdUI7RUFDbkIsSUFBSSxDQUFDRyxRQUFMLEVBQWU7SUFDWEssSUFBSTtFQUNQOztFQUNELE9BQU9KLE1BQU0sQ0FBQ0QsUUFBZDtBQUNIOztBQUNEUixPQUFPLENBQUNLLFdBQVIsR0FBc0JBLFdBQXRCOztBQUNBLFNBQVNELFVBQVQsR0FBc0I7RUFDbEIsSUFBSSxDQUFDTSxPQUFMLEVBQWM7SUFDVkcsSUFBSTtFQUNQOztFQUNELE9BQU9KLE1BQU0sQ0FBQ0MsT0FBZDtBQUNIOztBQUNEVixPQUFPLENBQUNJLFVBQVIsR0FBcUJBLFVBQXJCOztBQUNBLFNBQVNELFlBQVQsR0FBd0I7RUFDcEIsSUFBSSxDQUFDUSxTQUFMLEVBQWdCO0lBQ1pFLElBQUk7RUFDUDs7RUFDRCxPQUFPSixNQUFNLENBQUNFLFNBQWQ7QUFDSDs7QUFDRFgsT0FBTyxDQUFDRyxZQUFSLEdBQXVCQSxZQUF2Qjs7QUFDQSxTQUFTRCxZQUFULEdBQXdCO0VBQ3BCLElBQUksQ0FBQ1UsU0FBTCxFQUFnQjtJQUNaQyxJQUFJO0VBQ1A7O0VBQ0QsT0FBT0osTUFBTSxDQUFDRyxTQUFkO0FBQ0g7O0FBQ0RaLE9BQU8sQ0FBQ0UsWUFBUixHQUF1QkEsWUFBdkIifQ==
},{"rxjs":3}],3:[function(require,module,exports){
"use strict";

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = void 0 && (void 0).__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interval = exports.iif = exports.generate = exports.fromEventPattern = exports.fromEvent = exports.from = exports.forkJoin = exports.empty = exports.defer = exports.connectable = exports.concat = exports.combineLatest = exports.bindNodeCallback = exports.bindCallback = exports.UnsubscriptionError = exports.TimeoutError = exports.SequenceError = exports.ObjectUnsubscribedError = exports.NotFoundError = exports.EmptyError = exports.ArgumentOutOfRangeError = exports.firstValueFrom = exports.lastValueFrom = exports.isObservable = exports.identity = exports.noop = exports.pipe = exports.NotificationKind = exports.Notification = exports.Subscriber = exports.Subscription = exports.Scheduler = exports.VirtualAction = exports.VirtualTimeScheduler = exports.animationFrameScheduler = exports.animationFrame = exports.queueScheduler = exports.queue = exports.asyncScheduler = exports.async = exports.asapScheduler = exports.asap = exports.AsyncSubject = exports.ReplaySubject = exports.BehaviorSubject = exports.Subject = exports.animationFrames = exports.observable = exports.ConnectableObservable = exports.Observable = void 0;
exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.combineLatestWith = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = exports.config = exports.NEVER = exports.EMPTY = exports.scheduled = exports.zip = exports.using = exports.timer = exports.throwError = exports.range = exports.race = exports.partition = exports.pairs = exports.onErrorResumeNext = exports.of = exports.never = exports.merge = void 0;
exports.switchMapTo = exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.pairwise = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = exports.mergeAll = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = void 0;
exports.zipWith = exports.zipAll = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = void 0;

var Observable_1 = require("./internal/Observable");

Object.defineProperty(exports, "Observable", {
  enumerable: true,
  get: function get() {
    return Observable_1.Observable;
  }
});

var ConnectableObservable_1 = require("./internal/observable/ConnectableObservable");

Object.defineProperty(exports, "ConnectableObservable", {
  enumerable: true,
  get: function get() {
    return ConnectableObservable_1.ConnectableObservable;
  }
});

var observable_1 = require("./internal/symbol/observable");

Object.defineProperty(exports, "observable", {
  enumerable: true,
  get: function get() {
    return observable_1.observable;
  }
});

var animationFrames_1 = require("./internal/observable/dom/animationFrames");

Object.defineProperty(exports, "animationFrames", {
  enumerable: true,
  get: function get() {
    return animationFrames_1.animationFrames;
  }
});

var Subject_1 = require("./internal/Subject");

Object.defineProperty(exports, "Subject", {
  enumerable: true,
  get: function get() {
    return Subject_1.Subject;
  }
});

var BehaviorSubject_1 = require("./internal/BehaviorSubject");

Object.defineProperty(exports, "BehaviorSubject", {
  enumerable: true,
  get: function get() {
    return BehaviorSubject_1.BehaviorSubject;
  }
});

var ReplaySubject_1 = require("./internal/ReplaySubject");

Object.defineProperty(exports, "ReplaySubject", {
  enumerable: true,
  get: function get() {
    return ReplaySubject_1.ReplaySubject;
  }
});

var AsyncSubject_1 = require("./internal/AsyncSubject");

Object.defineProperty(exports, "AsyncSubject", {
  enumerable: true,
  get: function get() {
    return AsyncSubject_1.AsyncSubject;
  }
});

var asap_1 = require("./internal/scheduler/asap");

Object.defineProperty(exports, "asap", {
  enumerable: true,
  get: function get() {
    return asap_1.asap;
  }
});
Object.defineProperty(exports, "asapScheduler", {
  enumerable: true,
  get: function get() {
    return asap_1.asapScheduler;
  }
});

var async_1 = require("./internal/scheduler/async");

Object.defineProperty(exports, "async", {
  enumerable: true,
  get: function get() {
    return async_1.async;
  }
});
Object.defineProperty(exports, "asyncScheduler", {
  enumerable: true,
  get: function get() {
    return async_1.asyncScheduler;
  }
});

var queue_1 = require("./internal/scheduler/queue");

Object.defineProperty(exports, "queue", {
  enumerable: true,
  get: function get() {
    return queue_1.queue;
  }
});
Object.defineProperty(exports, "queueScheduler", {
  enumerable: true,
  get: function get() {
    return queue_1.queueScheduler;
  }
});

var animationFrame_1 = require("./internal/scheduler/animationFrame");

Object.defineProperty(exports, "animationFrame", {
  enumerable: true,
  get: function get() {
    return animationFrame_1.animationFrame;
  }
});
Object.defineProperty(exports, "animationFrameScheduler", {
  enumerable: true,
  get: function get() {
    return animationFrame_1.animationFrameScheduler;
  }
});

var VirtualTimeScheduler_1 = require("./internal/scheduler/VirtualTimeScheduler");

Object.defineProperty(exports, "VirtualTimeScheduler", {
  enumerable: true,
  get: function get() {
    return VirtualTimeScheduler_1.VirtualTimeScheduler;
  }
});
Object.defineProperty(exports, "VirtualAction", {
  enumerable: true,
  get: function get() {
    return VirtualTimeScheduler_1.VirtualAction;
  }
});

var Scheduler_1 = require("./internal/Scheduler");

Object.defineProperty(exports, "Scheduler", {
  enumerable: true,
  get: function get() {
    return Scheduler_1.Scheduler;
  }
});

var Subscription_1 = require("./internal/Subscription");

Object.defineProperty(exports, "Subscription", {
  enumerable: true,
  get: function get() {
    return Subscription_1.Subscription;
  }
});

var Subscriber_1 = require("./internal/Subscriber");

Object.defineProperty(exports, "Subscriber", {
  enumerable: true,
  get: function get() {
    return Subscriber_1.Subscriber;
  }
});

var Notification_1 = require("./internal/Notification");

Object.defineProperty(exports, "Notification", {
  enumerable: true,
  get: function get() {
    return Notification_1.Notification;
  }
});
Object.defineProperty(exports, "NotificationKind", {
  enumerable: true,
  get: function get() {
    return Notification_1.NotificationKind;
  }
});

var pipe_1 = require("./internal/util/pipe");

Object.defineProperty(exports, "pipe", {
  enumerable: true,
  get: function get() {
    return pipe_1.pipe;
  }
});

var noop_1 = require("./internal/util/noop");

Object.defineProperty(exports, "noop", {
  enumerable: true,
  get: function get() {
    return noop_1.noop;
  }
});

var identity_1 = require("./internal/util/identity");

Object.defineProperty(exports, "identity", {
  enumerable: true,
  get: function get() {
    return identity_1.identity;
  }
});

var isObservable_1 = require("./internal/util/isObservable");

Object.defineProperty(exports, "isObservable", {
  enumerable: true,
  get: function get() {
    return isObservable_1.isObservable;
  }
});

var lastValueFrom_1 = require("./internal/lastValueFrom");

Object.defineProperty(exports, "lastValueFrom", {
  enumerable: true,
  get: function get() {
    return lastValueFrom_1.lastValueFrom;
  }
});

var firstValueFrom_1 = require("./internal/firstValueFrom");

Object.defineProperty(exports, "firstValueFrom", {
  enumerable: true,
  get: function get() {
    return firstValueFrom_1.firstValueFrom;
  }
});

var ArgumentOutOfRangeError_1 = require("./internal/util/ArgumentOutOfRangeError");

Object.defineProperty(exports, "ArgumentOutOfRangeError", {
  enumerable: true,
  get: function get() {
    return ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
  }
});

var EmptyError_1 = require("./internal/util/EmptyError");

Object.defineProperty(exports, "EmptyError", {
  enumerable: true,
  get: function get() {
    return EmptyError_1.EmptyError;
  }
});

var NotFoundError_1 = require("./internal/util/NotFoundError");

Object.defineProperty(exports, "NotFoundError", {
  enumerable: true,
  get: function get() {
    return NotFoundError_1.NotFoundError;
  }
});

var ObjectUnsubscribedError_1 = require("./internal/util/ObjectUnsubscribedError");

Object.defineProperty(exports, "ObjectUnsubscribedError", {
  enumerable: true,
  get: function get() {
    return ObjectUnsubscribedError_1.ObjectUnsubscribedError;
  }
});

var SequenceError_1 = require("./internal/util/SequenceError");

Object.defineProperty(exports, "SequenceError", {
  enumerable: true,
  get: function get() {
    return SequenceError_1.SequenceError;
  }
});

var timeout_1 = require("./internal/operators/timeout");

Object.defineProperty(exports, "TimeoutError", {
  enumerable: true,
  get: function get() {
    return timeout_1.TimeoutError;
  }
});

var UnsubscriptionError_1 = require("./internal/util/UnsubscriptionError");

Object.defineProperty(exports, "UnsubscriptionError", {
  enumerable: true,
  get: function get() {
    return UnsubscriptionError_1.UnsubscriptionError;
  }
});

var bindCallback_1 = require("./internal/observable/bindCallback");

Object.defineProperty(exports, "bindCallback", {
  enumerable: true,
  get: function get() {
    return bindCallback_1.bindCallback;
  }
});

var bindNodeCallback_1 = require("./internal/observable/bindNodeCallback");

Object.defineProperty(exports, "bindNodeCallback", {
  enumerable: true,
  get: function get() {
    return bindNodeCallback_1.bindNodeCallback;
  }
});

var combineLatest_1 = require("./internal/observable/combineLatest");

Object.defineProperty(exports, "combineLatest", {
  enumerable: true,
  get: function get() {
    return combineLatest_1.combineLatest;
  }
});

var concat_1 = require("./internal/observable/concat");

Object.defineProperty(exports, "concat", {
  enumerable: true,
  get: function get() {
    return concat_1.concat;
  }
});

var connectable_1 = require("./internal/observable/connectable");

Object.defineProperty(exports, "connectable", {
  enumerable: true,
  get: function get() {
    return connectable_1.connectable;
  }
});

var defer_1 = require("./internal/observable/defer");

Object.defineProperty(exports, "defer", {
  enumerable: true,
  get: function get() {
    return defer_1.defer;
  }
});

var empty_1 = require("./internal/observable/empty");

Object.defineProperty(exports, "empty", {
  enumerable: true,
  get: function get() {
    return empty_1.empty;
  }
});

var forkJoin_1 = require("./internal/observable/forkJoin");

Object.defineProperty(exports, "forkJoin", {
  enumerable: true,
  get: function get() {
    return forkJoin_1.forkJoin;
  }
});

var from_1 = require("./internal/observable/from");

Object.defineProperty(exports, "from", {
  enumerable: true,
  get: function get() {
    return from_1.from;
  }
});

var fromEvent_1 = require("./internal/observable/fromEvent");

Object.defineProperty(exports, "fromEvent", {
  enumerable: true,
  get: function get() {
    return fromEvent_1.fromEvent;
  }
});

var fromEventPattern_1 = require("./internal/observable/fromEventPattern");

Object.defineProperty(exports, "fromEventPattern", {
  enumerable: true,
  get: function get() {
    return fromEventPattern_1.fromEventPattern;
  }
});

var generate_1 = require("./internal/observable/generate");

Object.defineProperty(exports, "generate", {
  enumerable: true,
  get: function get() {
    return generate_1.generate;
  }
});

var iif_1 = require("./internal/observable/iif");

Object.defineProperty(exports, "iif", {
  enumerable: true,
  get: function get() {
    return iif_1.iif;
  }
});

var interval_1 = require("./internal/observable/interval");

Object.defineProperty(exports, "interval", {
  enumerable: true,
  get: function get() {
    return interval_1.interval;
  }
});

var merge_1 = require("./internal/observable/merge");

Object.defineProperty(exports, "merge", {
  enumerable: true,
  get: function get() {
    return merge_1.merge;
  }
});

var never_1 = require("./internal/observable/never");

Object.defineProperty(exports, "never", {
  enumerable: true,
  get: function get() {
    return never_1.never;
  }
});

var of_1 = require("./internal/observable/of");

Object.defineProperty(exports, "of", {
  enumerable: true,
  get: function get() {
    return of_1.of;
  }
});

var onErrorResumeNext_1 = require("./internal/observable/onErrorResumeNext");

Object.defineProperty(exports, "onErrorResumeNext", {
  enumerable: true,
  get: function get() {
    return onErrorResumeNext_1.onErrorResumeNext;
  }
});

var pairs_1 = require("./internal/observable/pairs");

Object.defineProperty(exports, "pairs", {
  enumerable: true,
  get: function get() {
    return pairs_1.pairs;
  }
});

var partition_1 = require("./internal/observable/partition");

Object.defineProperty(exports, "partition", {
  enumerable: true,
  get: function get() {
    return partition_1.partition;
  }
});

var race_1 = require("./internal/observable/race");

Object.defineProperty(exports, "race", {
  enumerable: true,
  get: function get() {
    return race_1.race;
  }
});

var range_1 = require("./internal/observable/range");

Object.defineProperty(exports, "range", {
  enumerable: true,
  get: function get() {
    return range_1.range;
  }
});

var throwError_1 = require("./internal/observable/throwError");

Object.defineProperty(exports, "throwError", {
  enumerable: true,
  get: function get() {
    return throwError_1.throwError;
  }
});

var timer_1 = require("./internal/observable/timer");

Object.defineProperty(exports, "timer", {
  enumerable: true,
  get: function get() {
    return timer_1.timer;
  }
});

var using_1 = require("./internal/observable/using");

Object.defineProperty(exports, "using", {
  enumerable: true,
  get: function get() {
    return using_1.using;
  }
});

var zip_1 = require("./internal/observable/zip");

Object.defineProperty(exports, "zip", {
  enumerable: true,
  get: function get() {
    return zip_1.zip;
  }
});

var scheduled_1 = require("./internal/scheduled/scheduled");

Object.defineProperty(exports, "scheduled", {
  enumerable: true,
  get: function get() {
    return scheduled_1.scheduled;
  }
});

var empty_2 = require("./internal/observable/empty");

Object.defineProperty(exports, "EMPTY", {
  enumerable: true,
  get: function get() {
    return empty_2.EMPTY;
  }
});

var never_2 = require("./internal/observable/never");

Object.defineProperty(exports, "NEVER", {
  enumerable: true,
  get: function get() {
    return never_2.NEVER;
  }
});

__exportStar(require("./internal/types"), exports);

var config_1 = require("./internal/config");

Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function get() {
    return config_1.config;
  }
});

var audit_1 = require("./internal/operators/audit");

Object.defineProperty(exports, "audit", {
  enumerable: true,
  get: function get() {
    return audit_1.audit;
  }
});

var auditTime_1 = require("./internal/operators/auditTime");

Object.defineProperty(exports, "auditTime", {
  enumerable: true,
  get: function get() {
    return auditTime_1.auditTime;
  }
});

var buffer_1 = require("./internal/operators/buffer");

Object.defineProperty(exports, "buffer", {
  enumerable: true,
  get: function get() {
    return buffer_1.buffer;
  }
});

var bufferCount_1 = require("./internal/operators/bufferCount");

Object.defineProperty(exports, "bufferCount", {
  enumerable: true,
  get: function get() {
    return bufferCount_1.bufferCount;
  }
});

var bufferTime_1 = require("./internal/operators/bufferTime");

Object.defineProperty(exports, "bufferTime", {
  enumerable: true,
  get: function get() {
    return bufferTime_1.bufferTime;
  }
});

var bufferToggle_1 = require("./internal/operators/bufferToggle");

Object.defineProperty(exports, "bufferToggle", {
  enumerable: true,
  get: function get() {
    return bufferToggle_1.bufferToggle;
  }
});

var bufferWhen_1 = require("./internal/operators/bufferWhen");

Object.defineProperty(exports, "bufferWhen", {
  enumerable: true,
  get: function get() {
    return bufferWhen_1.bufferWhen;
  }
});

var catchError_1 = require("./internal/operators/catchError");

Object.defineProperty(exports, "catchError", {
  enumerable: true,
  get: function get() {
    return catchError_1.catchError;
  }
});

var combineAll_1 = require("./internal/operators/combineAll");

Object.defineProperty(exports, "combineAll", {
  enumerable: true,
  get: function get() {
    return combineAll_1.combineAll;
  }
});

var combineLatestAll_1 = require("./internal/operators/combineLatestAll");

Object.defineProperty(exports, "combineLatestAll", {
  enumerable: true,
  get: function get() {
    return combineLatestAll_1.combineLatestAll;
  }
});

var combineLatestWith_1 = require("./internal/operators/combineLatestWith");

Object.defineProperty(exports, "combineLatestWith", {
  enumerable: true,
  get: function get() {
    return combineLatestWith_1.combineLatestWith;
  }
});

var concatAll_1 = require("./internal/operators/concatAll");

Object.defineProperty(exports, "concatAll", {
  enumerable: true,
  get: function get() {
    return concatAll_1.concatAll;
  }
});

var concatMap_1 = require("./internal/operators/concatMap");

Object.defineProperty(exports, "concatMap", {
  enumerable: true,
  get: function get() {
    return concatMap_1.concatMap;
  }
});

var concatMapTo_1 = require("./internal/operators/concatMapTo");

Object.defineProperty(exports, "concatMapTo", {
  enumerable: true,
  get: function get() {
    return concatMapTo_1.concatMapTo;
  }
});

var concatWith_1 = require("./internal/operators/concatWith");

Object.defineProperty(exports, "concatWith", {
  enumerable: true,
  get: function get() {
    return concatWith_1.concatWith;
  }
});

var connect_1 = require("./internal/operators/connect");

Object.defineProperty(exports, "connect", {
  enumerable: true,
  get: function get() {
    return connect_1.connect;
  }
});

var count_1 = require("./internal/operators/count");

Object.defineProperty(exports, "count", {
  enumerable: true,
  get: function get() {
    return count_1.count;
  }
});

var debounce_1 = require("./internal/operators/debounce");

Object.defineProperty(exports, "debounce", {
  enumerable: true,
  get: function get() {
    return debounce_1.debounce;
  }
});

var debounceTime_1 = require("./internal/operators/debounceTime");

Object.defineProperty(exports, "debounceTime", {
  enumerable: true,
  get: function get() {
    return debounceTime_1.debounceTime;
  }
});

var defaultIfEmpty_1 = require("./internal/operators/defaultIfEmpty");

Object.defineProperty(exports, "defaultIfEmpty", {
  enumerable: true,
  get: function get() {
    return defaultIfEmpty_1.defaultIfEmpty;
  }
});

var delay_1 = require("./internal/operators/delay");

Object.defineProperty(exports, "delay", {
  enumerable: true,
  get: function get() {
    return delay_1.delay;
  }
});

var delayWhen_1 = require("./internal/operators/delayWhen");

Object.defineProperty(exports, "delayWhen", {
  enumerable: true,
  get: function get() {
    return delayWhen_1.delayWhen;
  }
});

var dematerialize_1 = require("./internal/operators/dematerialize");

Object.defineProperty(exports, "dematerialize", {
  enumerable: true,
  get: function get() {
    return dematerialize_1.dematerialize;
  }
});

var distinct_1 = require("./internal/operators/distinct");

Object.defineProperty(exports, "distinct", {
  enumerable: true,
  get: function get() {
    return distinct_1.distinct;
  }
});

var distinctUntilChanged_1 = require("./internal/operators/distinctUntilChanged");

Object.defineProperty(exports, "distinctUntilChanged", {
  enumerable: true,
  get: function get() {
    return distinctUntilChanged_1.distinctUntilChanged;
  }
});

var distinctUntilKeyChanged_1 = require("./internal/operators/distinctUntilKeyChanged");

Object.defineProperty(exports, "distinctUntilKeyChanged", {
  enumerable: true,
  get: function get() {
    return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
  }
});

var elementAt_1 = require("./internal/operators/elementAt");

Object.defineProperty(exports, "elementAt", {
  enumerable: true,
  get: function get() {
    return elementAt_1.elementAt;
  }
});

var endWith_1 = require("./internal/operators/endWith");

Object.defineProperty(exports, "endWith", {
  enumerable: true,
  get: function get() {
    return endWith_1.endWith;
  }
});

var every_1 = require("./internal/operators/every");

Object.defineProperty(exports, "every", {
  enumerable: true,
  get: function get() {
    return every_1.every;
  }
});

var exhaust_1 = require("./internal/operators/exhaust");

Object.defineProperty(exports, "exhaust", {
  enumerable: true,
  get: function get() {
    return exhaust_1.exhaust;
  }
});

var exhaustAll_1 = require("./internal/operators/exhaustAll");

Object.defineProperty(exports, "exhaustAll", {
  enumerable: true,
  get: function get() {
    return exhaustAll_1.exhaustAll;
  }
});

var exhaustMap_1 = require("./internal/operators/exhaustMap");

Object.defineProperty(exports, "exhaustMap", {
  enumerable: true,
  get: function get() {
    return exhaustMap_1.exhaustMap;
  }
});

var expand_1 = require("./internal/operators/expand");

Object.defineProperty(exports, "expand", {
  enumerable: true,
  get: function get() {
    return expand_1.expand;
  }
});

var filter_1 = require("./internal/operators/filter");

Object.defineProperty(exports, "filter", {
  enumerable: true,
  get: function get() {
    return filter_1.filter;
  }
});

var finalize_1 = require("./internal/operators/finalize");

Object.defineProperty(exports, "finalize", {
  enumerable: true,
  get: function get() {
    return finalize_1.finalize;
  }
});

var find_1 = require("./internal/operators/find");

Object.defineProperty(exports, "find", {
  enumerable: true,
  get: function get() {
    return find_1.find;
  }
});

var findIndex_1 = require("./internal/operators/findIndex");

Object.defineProperty(exports, "findIndex", {
  enumerable: true,
  get: function get() {
    return findIndex_1.findIndex;
  }
});

var first_1 = require("./internal/operators/first");

Object.defineProperty(exports, "first", {
  enumerable: true,
  get: function get() {
    return first_1.first;
  }
});

var groupBy_1 = require("./internal/operators/groupBy");

Object.defineProperty(exports, "groupBy", {
  enumerable: true,
  get: function get() {
    return groupBy_1.groupBy;
  }
});

var ignoreElements_1 = require("./internal/operators/ignoreElements");

Object.defineProperty(exports, "ignoreElements", {
  enumerable: true,
  get: function get() {
    return ignoreElements_1.ignoreElements;
  }
});

var isEmpty_1 = require("./internal/operators/isEmpty");

Object.defineProperty(exports, "isEmpty", {
  enumerable: true,
  get: function get() {
    return isEmpty_1.isEmpty;
  }
});

var last_1 = require("./internal/operators/last");

Object.defineProperty(exports, "last", {
  enumerable: true,
  get: function get() {
    return last_1.last;
  }
});

var map_1 = require("./internal/operators/map");

Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function get() {
    return map_1.map;
  }
});

var mapTo_1 = require("./internal/operators/mapTo");

Object.defineProperty(exports, "mapTo", {
  enumerable: true,
  get: function get() {
    return mapTo_1.mapTo;
  }
});

var materialize_1 = require("./internal/operators/materialize");

Object.defineProperty(exports, "materialize", {
  enumerable: true,
  get: function get() {
    return materialize_1.materialize;
  }
});

var max_1 = require("./internal/operators/max");

Object.defineProperty(exports, "max", {
  enumerable: true,
  get: function get() {
    return max_1.max;
  }
});

var mergeAll_1 = require("./internal/operators/mergeAll");

Object.defineProperty(exports, "mergeAll", {
  enumerable: true,
  get: function get() {
    return mergeAll_1.mergeAll;
  }
});

var flatMap_1 = require("./internal/operators/flatMap");

Object.defineProperty(exports, "flatMap", {
  enumerable: true,
  get: function get() {
    return flatMap_1.flatMap;
  }
});

var mergeMap_1 = require("./internal/operators/mergeMap");

Object.defineProperty(exports, "mergeMap", {
  enumerable: true,
  get: function get() {
    return mergeMap_1.mergeMap;
  }
});

var mergeMapTo_1 = require("./internal/operators/mergeMapTo");

Object.defineProperty(exports, "mergeMapTo", {
  enumerable: true,
  get: function get() {
    return mergeMapTo_1.mergeMapTo;
  }
});

var mergeScan_1 = require("./internal/operators/mergeScan");

Object.defineProperty(exports, "mergeScan", {
  enumerable: true,
  get: function get() {
    return mergeScan_1.mergeScan;
  }
});

var mergeWith_1 = require("./internal/operators/mergeWith");

Object.defineProperty(exports, "mergeWith", {
  enumerable: true,
  get: function get() {
    return mergeWith_1.mergeWith;
  }
});

var min_1 = require("./internal/operators/min");

Object.defineProperty(exports, "min", {
  enumerable: true,
  get: function get() {
    return min_1.min;
  }
});

var multicast_1 = require("./internal/operators/multicast");

Object.defineProperty(exports, "multicast", {
  enumerable: true,
  get: function get() {
    return multicast_1.multicast;
  }
});

var observeOn_1 = require("./internal/operators/observeOn");

Object.defineProperty(exports, "observeOn", {
  enumerable: true,
  get: function get() {
    return observeOn_1.observeOn;
  }
});

var pairwise_1 = require("./internal/operators/pairwise");

Object.defineProperty(exports, "pairwise", {
  enumerable: true,
  get: function get() {
    return pairwise_1.pairwise;
  }
});

var pluck_1 = require("./internal/operators/pluck");

Object.defineProperty(exports, "pluck", {
  enumerable: true,
  get: function get() {
    return pluck_1.pluck;
  }
});

var publish_1 = require("./internal/operators/publish");

Object.defineProperty(exports, "publish", {
  enumerable: true,
  get: function get() {
    return publish_1.publish;
  }
});

var publishBehavior_1 = require("./internal/operators/publishBehavior");

Object.defineProperty(exports, "publishBehavior", {
  enumerable: true,
  get: function get() {
    return publishBehavior_1.publishBehavior;
  }
});

var publishLast_1 = require("./internal/operators/publishLast");

Object.defineProperty(exports, "publishLast", {
  enumerable: true,
  get: function get() {
    return publishLast_1.publishLast;
  }
});

var publishReplay_1 = require("./internal/operators/publishReplay");

Object.defineProperty(exports, "publishReplay", {
  enumerable: true,
  get: function get() {
    return publishReplay_1.publishReplay;
  }
});

var raceWith_1 = require("./internal/operators/raceWith");

Object.defineProperty(exports, "raceWith", {
  enumerable: true,
  get: function get() {
    return raceWith_1.raceWith;
  }
});

var reduce_1 = require("./internal/operators/reduce");

Object.defineProperty(exports, "reduce", {
  enumerable: true,
  get: function get() {
    return reduce_1.reduce;
  }
});

var repeat_1 = require("./internal/operators/repeat");

Object.defineProperty(exports, "repeat", {
  enumerable: true,
  get: function get() {
    return repeat_1.repeat;
  }
});

var repeatWhen_1 = require("./internal/operators/repeatWhen");

Object.defineProperty(exports, "repeatWhen", {
  enumerable: true,
  get: function get() {
    return repeatWhen_1.repeatWhen;
  }
});

var retry_1 = require("./internal/operators/retry");

Object.defineProperty(exports, "retry", {
  enumerable: true,
  get: function get() {
    return retry_1.retry;
  }
});

var retryWhen_1 = require("./internal/operators/retryWhen");

Object.defineProperty(exports, "retryWhen", {
  enumerable: true,
  get: function get() {
    return retryWhen_1.retryWhen;
  }
});

var refCount_1 = require("./internal/operators/refCount");

Object.defineProperty(exports, "refCount", {
  enumerable: true,
  get: function get() {
    return refCount_1.refCount;
  }
});

var sample_1 = require("./internal/operators/sample");

Object.defineProperty(exports, "sample", {
  enumerable: true,
  get: function get() {
    return sample_1.sample;
  }
});

var sampleTime_1 = require("./internal/operators/sampleTime");

Object.defineProperty(exports, "sampleTime", {
  enumerable: true,
  get: function get() {
    return sampleTime_1.sampleTime;
  }
});

var scan_1 = require("./internal/operators/scan");

Object.defineProperty(exports, "scan", {
  enumerable: true,
  get: function get() {
    return scan_1.scan;
  }
});

var sequenceEqual_1 = require("./internal/operators/sequenceEqual");

Object.defineProperty(exports, "sequenceEqual", {
  enumerable: true,
  get: function get() {
    return sequenceEqual_1.sequenceEqual;
  }
});

var share_1 = require("./internal/operators/share");

Object.defineProperty(exports, "share", {
  enumerable: true,
  get: function get() {
    return share_1.share;
  }
});

var shareReplay_1 = require("./internal/operators/shareReplay");

Object.defineProperty(exports, "shareReplay", {
  enumerable: true,
  get: function get() {
    return shareReplay_1.shareReplay;
  }
});

var single_1 = require("./internal/operators/single");

Object.defineProperty(exports, "single", {
  enumerable: true,
  get: function get() {
    return single_1.single;
  }
});

var skip_1 = require("./internal/operators/skip");

Object.defineProperty(exports, "skip", {
  enumerable: true,
  get: function get() {
    return skip_1.skip;
  }
});

var skipLast_1 = require("./internal/operators/skipLast");

Object.defineProperty(exports, "skipLast", {
  enumerable: true,
  get: function get() {
    return skipLast_1.skipLast;
  }
});

var skipUntil_1 = require("./internal/operators/skipUntil");

Object.defineProperty(exports, "skipUntil", {
  enumerable: true,
  get: function get() {
    return skipUntil_1.skipUntil;
  }
});

var skipWhile_1 = require("./internal/operators/skipWhile");

Object.defineProperty(exports, "skipWhile", {
  enumerable: true,
  get: function get() {
    return skipWhile_1.skipWhile;
  }
});

var startWith_1 = require("./internal/operators/startWith");

Object.defineProperty(exports, "startWith", {
  enumerable: true,
  get: function get() {
    return startWith_1.startWith;
  }
});

var subscribeOn_1 = require("./internal/operators/subscribeOn");

Object.defineProperty(exports, "subscribeOn", {
  enumerable: true,
  get: function get() {
    return subscribeOn_1.subscribeOn;
  }
});

var switchAll_1 = require("./internal/operators/switchAll");

Object.defineProperty(exports, "switchAll", {
  enumerable: true,
  get: function get() {
    return switchAll_1.switchAll;
  }
});

var switchMap_1 = require("./internal/operators/switchMap");

Object.defineProperty(exports, "switchMap", {
  enumerable: true,
  get: function get() {
    return switchMap_1.switchMap;
  }
});

var switchMapTo_1 = require("./internal/operators/switchMapTo");

Object.defineProperty(exports, "switchMapTo", {
  enumerable: true,
  get: function get() {
    return switchMapTo_1.switchMapTo;
  }
});

var switchScan_1 = require("./internal/operators/switchScan");

Object.defineProperty(exports, "switchScan", {
  enumerable: true,
  get: function get() {
    return switchScan_1.switchScan;
  }
});

var take_1 = require("./internal/operators/take");

Object.defineProperty(exports, "take", {
  enumerable: true,
  get: function get() {
    return take_1.take;
  }
});

var takeLast_1 = require("./internal/operators/takeLast");

Object.defineProperty(exports, "takeLast", {
  enumerable: true,
  get: function get() {
    return takeLast_1.takeLast;
  }
});

var takeUntil_1 = require("./internal/operators/takeUntil");

Object.defineProperty(exports, "takeUntil", {
  enumerable: true,
  get: function get() {
    return takeUntil_1.takeUntil;
  }
});

var takeWhile_1 = require("./internal/operators/takeWhile");

Object.defineProperty(exports, "takeWhile", {
  enumerable: true,
  get: function get() {
    return takeWhile_1.takeWhile;
  }
});

var tap_1 = require("./internal/operators/tap");

Object.defineProperty(exports, "tap", {
  enumerable: true,
  get: function get() {
    return tap_1.tap;
  }
});

var throttle_1 = require("./internal/operators/throttle");

Object.defineProperty(exports, "throttle", {
  enumerable: true,
  get: function get() {
    return throttle_1.throttle;
  }
});

var throttleTime_1 = require("./internal/operators/throttleTime");

Object.defineProperty(exports, "throttleTime", {
  enumerable: true,
  get: function get() {
    return throttleTime_1.throttleTime;
  }
});

var throwIfEmpty_1 = require("./internal/operators/throwIfEmpty");

Object.defineProperty(exports, "throwIfEmpty", {
  enumerable: true,
  get: function get() {
    return throwIfEmpty_1.throwIfEmpty;
  }
});

var timeInterval_1 = require("./internal/operators/timeInterval");

Object.defineProperty(exports, "timeInterval", {
  enumerable: true,
  get: function get() {
    return timeInterval_1.timeInterval;
  }
});

var timeout_2 = require("./internal/operators/timeout");

Object.defineProperty(exports, "timeout", {
  enumerable: true,
  get: function get() {
    return timeout_2.timeout;
  }
});

var timeoutWith_1 = require("./internal/operators/timeoutWith");

Object.defineProperty(exports, "timeoutWith", {
  enumerable: true,
  get: function get() {
    return timeoutWith_1.timeoutWith;
  }
});

var timestamp_1 = require("./internal/operators/timestamp");

Object.defineProperty(exports, "timestamp", {
  enumerable: true,
  get: function get() {
    return timestamp_1.timestamp;
  }
});

var toArray_1 = require("./internal/operators/toArray");

Object.defineProperty(exports, "toArray", {
  enumerable: true,
  get: function get() {
    return toArray_1.toArray;
  }
});

var window_1 = require("./internal/operators/window");

Object.defineProperty(exports, "window", {
  enumerable: true,
  get: function get() {
    return window_1.window;
  }
});

var windowCount_1 = require("./internal/operators/windowCount");

Object.defineProperty(exports, "windowCount", {
  enumerable: true,
  get: function get() {
    return windowCount_1.windowCount;
  }
});

var windowTime_1 = require("./internal/operators/windowTime");

Object.defineProperty(exports, "windowTime", {
  enumerable: true,
  get: function get() {
    return windowTime_1.windowTime;
  }
});

var windowToggle_1 = require("./internal/operators/windowToggle");

Object.defineProperty(exports, "windowToggle", {
  enumerable: true,
  get: function get() {
    return windowToggle_1.windowToggle;
  }
});

var windowWhen_1 = require("./internal/operators/windowWhen");

Object.defineProperty(exports, "windowWhen", {
  enumerable: true,
  get: function get() {
    return windowWhen_1.windowWhen;
  }
});

var withLatestFrom_1 = require("./internal/operators/withLatestFrom");

Object.defineProperty(exports, "withLatestFrom", {
  enumerable: true,
  get: function get() {
    return withLatestFrom_1.withLatestFrom;
  }
});

var zipAll_1 = require("./internal/operators/zipAll");

Object.defineProperty(exports, "zipAll", {
  enumerable: true,
  get: function get() {
    return zipAll_1.zipAll;
  }
});

var zipWith_1 = require("./internal/operators/zipWith");

Object.defineProperty(exports, "zipWith", {
  enumerable: true,
  get: function get() {
    return zipWith_1.zipWith;
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFBU0E7RUFBQUM7RUFBQUM7SUFBQTtFQUFVO0FBQVY7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBcUI7QUFBckI7O0FBR1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBVTtBQUFWOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQWU7QUFBZjs7QUFHVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFPO0FBQVA7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBZTtBQUFmOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQWE7QUFBYjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFZO0FBQVo7O0FBR1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBSTtBQUFKO0FBQU1GO0VBQUFDO0VBQUFDO0lBQUE7RUFBYTtBQUFiOztBQUNmOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQUs7QUFBTDtBQUFPRjtFQUFBQztFQUFBQztJQUFBO0VBQWM7QUFBZDs7QUFDaEI7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBSztBQUFMO0FBQU9GO0VBQUFDO0VBQUFDO0lBQUE7RUFBYztBQUFkOztBQUNoQjs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFjO0FBQWQ7QUFBZ0JGO0VBQUFDO0VBQUFDO0lBQUE7RUFBdUI7QUFBdkI7O0FBQ3pCOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQW9CO0FBQXBCO0FBQXNCRjtFQUFBQztFQUFBQztJQUFBO0VBQWE7QUFBYjs7QUFDL0I7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBUztBQUFUOztBQUdUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVk7QUFBWjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFVO0FBQVY7O0FBR1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBWTtBQUFaO0FBQWNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBZ0I7QUFBaEI7O0FBR3ZCOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQUk7QUFBSjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFJO0FBQUo7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBUTtBQUFSOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVk7QUFBWjs7QUFHVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFhO0FBQWI7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBYztBQUFkOztBQUdUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQXVCO0FBQXZCOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVU7QUFBVjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFhO0FBQWI7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBdUI7QUFBdkI7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBYTtBQUFiOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVk7QUFBWjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFtQjtBQUFuQjs7QUFHVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFZO0FBQVo7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBZ0I7QUFBaEI7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBYTtBQUFiOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQU07QUFBTjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFXO0FBQVg7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBSztBQUFMOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQUs7QUFBTDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFRO0FBQVI7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBSTtBQUFKOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVM7QUFBVDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFnQjtBQUFoQjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFRO0FBQVI7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBRztBQUFIOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVE7QUFBUjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFLO0FBQUw7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBSztBQUFMOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQUU7QUFBRjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFpQjtBQUFqQjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFLO0FBQUw7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBUztBQUFUOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQUk7QUFBSjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFLO0FBQUw7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBVTtBQUFWOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQUs7QUFBTDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFLO0FBQUw7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBRztBQUFIOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVM7QUFBVDs7QUFHVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFLO0FBQUw7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBSztBQUFMOztBQUdUQzs7QUFHQTs7QUFBU0g7RUFBQUM7RUFBQUM7SUFBQTtFQUFNO0FBQU47O0FBR1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBSztBQUFMOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVM7QUFBVDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFNO0FBQU47O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBVztBQUFYOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVU7QUFBVjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFZO0FBQVo7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBVTtBQUFWOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVU7QUFBVjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFVO0FBQVY7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBZ0I7QUFBaEI7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBaUI7QUFBakI7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBUztBQUFUOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVM7QUFBVDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFXO0FBQVg7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBVTtBQUFWOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQU87QUFBUDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFLO0FBQUw7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBUTtBQUFSOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVk7QUFBWjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFjO0FBQWQ7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBSztBQUFMOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVM7QUFBVDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFhO0FBQWI7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBUTtBQUFSOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQW9CO0FBQXBCOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQXVCO0FBQXZCOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVM7QUFBVDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFPO0FBQVA7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBSztBQUFMOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQU87QUFBUDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFVO0FBQVY7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBVTtBQUFWOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQU07QUFBTjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFNO0FBQU47O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBUTtBQUFSOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQUk7QUFBSjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFTO0FBQVQ7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBSztBQUFMOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQU87QUFBUDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFjO0FBQWQ7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBTztBQUFQOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQUk7QUFBSjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFHO0FBQUg7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBSztBQUFMOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVc7QUFBWDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFHO0FBQUg7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBUTtBQUFSOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQU87QUFBUDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFRO0FBQVI7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBVTtBQUFWOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVM7QUFBVDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFTO0FBQVQ7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBRztBQUFIOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVM7QUFBVDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFTO0FBQVQ7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBUTtBQUFSOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQUs7QUFBTDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFPO0FBQVA7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBZTtBQUFmOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVc7QUFBWDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFhO0FBQWI7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBUTtBQUFSOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQU07QUFBTjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFNO0FBQU47O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBVTtBQUFWOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQUs7QUFBTDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFTO0FBQVQ7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBUTtBQUFSOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQU07QUFBTjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFVO0FBQVY7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBSTtBQUFKOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQWE7QUFBYjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFLO0FBQUw7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBVztBQUFYOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQU07QUFBTjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFJO0FBQUo7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBUTtBQUFSOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVM7QUFBVDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFTO0FBQVQ7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBUztBQUFUOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVc7QUFBWDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFTO0FBQVQ7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBUztBQUFUOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVc7QUFBWDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFVO0FBQVY7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBSTtBQUFKOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVE7QUFBUjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFTO0FBQVQ7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBUztBQUFUOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQUc7QUFBSDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFRO0FBQVI7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBWTtBQUFaOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVk7QUFBWjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFZO0FBQVo7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBTztBQUFQOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVc7QUFBWDs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFTO0FBQVQ7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBTztBQUFQOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQU07QUFBTjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFXO0FBQVg7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBVTtBQUFWOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQVk7QUFBWjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFVO0FBQVY7O0FBQ1Q7O0FBQVNGO0VBQUFDO0VBQUFDO0lBQUE7RUFBYztBQUFkOztBQUNUOztBQUFTRjtFQUFBQztFQUFBQztJQUFBO0VBQU07QUFBTjs7QUFDVDs7QUFBU0Y7RUFBQUM7RUFBQUM7SUFBQTtFQUFPO0FBQVAiLCJuYW1lcyI6WyJPYmplY3QiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiX19leHBvcnRTdGFyIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./internal/AsyncSubject":4,"./internal/BehaviorSubject":5,"./internal/Notification":6,"./internal/Observable":8,"./internal/ReplaySubject":9,"./internal/Scheduler":10,"./internal/Subject":11,"./internal/Subscriber":12,"./internal/Subscription":13,"./internal/config":14,"./internal/firstValueFrom":15,"./internal/lastValueFrom":16,"./internal/observable/ConnectableObservable":17,"./internal/observable/bindCallback":18,"./internal/observable/bindNodeCallback":20,"./internal/observable/combineLatest":21,"./internal/observable/concat":22,"./internal/observable/connectable":23,"./internal/observable/defer":24,"./internal/observable/dom/animationFrames":25,"./internal/observable/empty":26,"./internal/observable/forkJoin":27,"./internal/observable/from":28,"./internal/observable/fromEvent":29,"./internal/observable/fromEventPattern":30,"./internal/observable/generate":32,"./internal/observable/iif":33,"./internal/observable/interval":35,"./internal/observable/merge":36,"./internal/observable/never":37,"./internal/observable/of":38,"./internal/observable/onErrorResumeNext":39,"./internal/observable/pairs":40,"./internal/observable/partition":41,"./internal/observable/race":42,"./internal/observable/range":43,"./internal/observable/throwError":44,"./internal/observable/timer":45,"./internal/observable/using":46,"./internal/observable/zip":47,"./internal/operators/audit":49,"./internal/operators/auditTime":50,"./internal/operators/buffer":51,"./internal/operators/bufferCount":52,"./internal/operators/bufferTime":53,"./internal/operators/bufferToggle":54,"./internal/operators/bufferWhen":55,"./internal/operators/catchError":56,"./internal/operators/combineAll":57,"./internal/operators/combineLatestAll":59,"./internal/operators/combineLatestWith":60,"./internal/operators/concatAll":62,"./internal/operators/concatMap":63,"./internal/operators/concatMapTo":64,"./internal/operators/concatWith":65,"./internal/operators/connect":66,"./internal/operators/count":67,"./internal/operators/debounce":68,"./internal/operators/debounceTime":69,"./internal/operators/defaultIfEmpty":70,"./internal/operators/delay":71,"./internal/operators/delayWhen":72,"./internal/operators/dematerialize":73,"./internal/operators/distinct":74,"./internal/operators/distinctUntilChanged":75,"./internal/operators/distinctUntilKeyChanged":76,"./internal/operators/elementAt":77,"./internal/operators/endWith":78,"./internal/operators/every":79,"./internal/operators/exhaust":80,"./internal/operators/exhaustAll":81,"./internal/operators/exhaustMap":82,"./internal/operators/expand":83,"./internal/operators/filter":84,"./internal/operators/finalize":85,"./internal/operators/find":86,"./internal/operators/findIndex":87,"./internal/operators/first":88,"./internal/operators/flatMap":89,"./internal/operators/groupBy":90,"./internal/operators/ignoreElements":91,"./internal/operators/isEmpty":92,"./internal/operators/last":94,"./internal/operators/map":95,"./internal/operators/mapTo":96,"./internal/operators/materialize":97,"./internal/operators/max":98,"./internal/operators/mergeAll":100,"./internal/operators/mergeMap":102,"./internal/operators/mergeMapTo":103,"./internal/operators/mergeScan":104,"./internal/operators/mergeWith":105,"./internal/operators/min":106,"./internal/operators/multicast":107,"./internal/operators/observeOn":108,"./internal/operators/pairwise":110,"./internal/operators/pluck":111,"./internal/operators/publish":112,"./internal/operators/publishBehavior":113,"./internal/operators/publishLast":114,"./internal/operators/publishReplay":115,"./internal/operators/raceWith":116,"./internal/operators/reduce":117,"./internal/operators/refCount":118,"./internal/operators/repeat":119,"./internal/operators/repeatWhen":120,"./internal/operators/retry":121,"./internal/operators/retryWhen":122,"./internal/operators/sample":123,"./internal/operators/sampleTime":124,"./internal/operators/scan":125,"./internal/operators/sequenceEqual":127,"./internal/operators/share":128,"./internal/operators/shareReplay":129,"./internal/operators/single":130,"./internal/operators/skip":131,"./internal/operators/skipLast":132,"./internal/operators/skipUntil":133,"./internal/operators/skipWhile":134,"./internal/operators/startWith":135,"./internal/operators/subscribeOn":136,"./internal/operators/switchAll":137,"./internal/operators/switchMap":138,"./internal/operators/switchMapTo":139,"./internal/operators/switchScan":140,"./internal/operators/take":141,"./internal/operators/takeLast":142,"./internal/operators/takeUntil":143,"./internal/operators/takeWhile":144,"./internal/operators/tap":145,"./internal/operators/throttle":146,"./internal/operators/throttleTime":147,"./internal/operators/throwIfEmpty":148,"./internal/operators/timeInterval":149,"./internal/operators/timeout":150,"./internal/operators/timeoutWith":151,"./internal/operators/timestamp":152,"./internal/operators/toArray":153,"./internal/operators/window":154,"./internal/operators/windowCount":155,"./internal/operators/windowTime":156,"./internal/operators/windowToggle":157,"./internal/operators/windowWhen":158,"./internal/operators/withLatestFrom":159,"./internal/operators/zipAll":161,"./internal/operators/zipWith":162,"./internal/scheduled/scheduled":169,"./internal/scheduler/VirtualTimeScheduler":179,"./internal/scheduler/animationFrame":180,"./internal/scheduler/asap":182,"./internal/scheduler/async":183,"./internal/scheduler/queue":188,"./internal/symbol/observable":191,"./internal/types":192,"./internal/util/ArgumentOutOfRangeError":193,"./internal/util/EmptyError":194,"./internal/util/NotFoundError":196,"./internal/util/ObjectUnsubscribedError":197,"./internal/util/SequenceError":198,"./internal/util/UnsubscriptionError":199,"./internal/util/identity":208,"./internal/util/isObservable":215,"./internal/util/noop":221,"./internal/util/pipe":223}],4:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncSubject = void 0;

var Subject_1 = require("./Subject");

var AsyncSubject = function (_super) {
  __extends(AsyncSubject, _super);

  function AsyncSubject() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this._value = null;
    _this._hasValue = false;
    _this._isComplete = false;
    return _this;
  }

  AsyncSubject.prototype._checkFinalizedStatuses = function (subscriber) {
    var _a = this,
        hasError = _a.hasError,
        _hasValue = _a._hasValue,
        _value = _a._value,
        thrownError = _a.thrownError,
        isStopped = _a.isStopped,
        _isComplete = _a._isComplete;

    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped || _isComplete) {
      _hasValue && subscriber.next(_value);
      subscriber.complete();
    }
  };

  AsyncSubject.prototype.next = function (value) {
    if (!this.isStopped) {
      this._value = value;
      this._hasValue = true;
    }
  };

  AsyncSubject.prototype.complete = function () {
    var _a = this,
        _hasValue = _a._hasValue,
        _value = _a._value,
        _isComplete = _a._isComplete;

    if (!_isComplete) {
      this._isComplete = true;
      _hasValue && _super.prototype.next.call(this, _value);

      _super.prototype.complete.call(this);
    }
  };

  return AsyncSubject;
}(Subject_1.Subject);

exports.AsyncSubject = AsyncSubject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFTQTtFQUFxQ0E7O0VBQXJDO0lBQUE7O0lBQ1VDLGVBQW1CLElBQW5CO0lBQ0FBLGtCQUFZLEtBQVo7SUFDQUEsb0JBQWMsS0FBZDs7RUE0QlQ7O0VBekJXQyxpREFBVixVQUFrQ0MsVUFBbEMsRUFBMkQ7SUFDbkQsU0FBdUUsSUFBdkU7SUFBQSxJQUFFQyxRQUFRLGNBQVY7SUFBQSxJQUFZQyxTQUFTLGVBQXJCO0lBQUEsSUFBdUJDLE1BQU0sWUFBN0I7SUFBQSxJQUErQkMsV0FBVyxpQkFBMUM7SUFBQSxJQUE0Q0MsU0FBUyxlQUFyRDtJQUFBLElBQXVEQyxXQUFXLGlCQUFsRTs7SUFDTixJQUFJTCxRQUFKLEVBQWM7TUFDWkQsVUFBVSxDQUFDTyxLQUFYLENBQWlCSCxXQUFqQjtJQUNELENBRkQsTUFFTyxJQUFJQyxTQUFTLElBQUlDLFdBQWpCLEVBQThCO01BQ25DSixTQUFTLElBQUlGLFVBQVUsQ0FBQ1EsSUFBWCxDQUFnQkwsTUFBaEIsQ0FBYjtNQUNBSCxVQUFVLENBQUNTLFFBQVg7SUFDRDtFQUNGLENBUlM7O0VBVVZWLHdDQUFLVyxLQUFMLEVBQWE7SUFDWCxJQUFJLENBQUMsS0FBS0wsU0FBVixFQUFxQjtNQUNuQixLQUFLRixNQUFMLEdBQWNPLEtBQWQ7TUFDQSxLQUFLUixTQUFMLEdBQWlCLElBQWpCO0lBQ0Q7RUFDRixDQUxEOztFQU9BSDtJQUNRLFNBQXFDLElBQXJDO0lBQUEsSUFBRUcsU0FBUyxlQUFYO0lBQUEsSUFBYUMsTUFBTSxZQUFuQjtJQUFBLElBQXFCRyxXQUFXLGlCQUFoQzs7SUFDTixJQUFJLENBQUNBLFdBQUwsRUFBa0I7TUFDaEIsS0FBS0EsV0FBTCxHQUFtQixJQUFuQjtNQUNBSixTQUFTLElBQUlTLGlCQUFNSCxJQUFOLENBQVVJLElBQVYsQ0FBVSxJQUFWLEVBQVdULE1BQVgsQ0FBYjs7TUFDQVEsaUJBQU1GLFFBQU4sQ0FBY0csSUFBZCxDQUFjLElBQWQ7SUFDRDtFQUNGLENBUEQ7O0VBUUY7QUFBQyxDQS9CRCxDQUFxQ0MsaUJBQXJDOztBQUFhQyIsIm5hbWVzIjpbIl9fZXh0ZW5kcyIsIl90aGlzIiwiQXN5bmNTdWJqZWN0Iiwic3Vic2NyaWJlciIsImhhc0Vycm9yIiwiX2hhc1ZhbHVlIiwiX3ZhbHVlIiwidGhyb3duRXJyb3IiLCJpc1N0b3BwZWQiLCJfaXNDb21wbGV0ZSIsImVycm9yIiwibmV4dCIsImNvbXBsZXRlIiwidmFsdWUiLCJfc3VwZXIiLCJjYWxsIiwiU3ViamVjdF8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW50ZXJuYWwvQXN5bmNTdWJqZWN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"./Subject":11}],5:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BehaviorSubject = void 0;

var Subject_1 = require("./Subject");

var BehaviorSubject = function (_super) {
  __extends(BehaviorSubject, _super);

  function BehaviorSubject(_value) {
    var _this = _super.call(this) || this;

    _this._value = _value;
    return _this;
  }

  Object.defineProperty(BehaviorSubject.prototype, "value", {
    get: function get() {
      return this.getValue();
    },
    enumerable: false,
    configurable: true
  });

  BehaviorSubject.prototype._subscribe = function (subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);

    !subscription.closed && subscriber.next(this._value);
    return subscription;
  };

  BehaviorSubject.prototype.getValue = function () {
    var _a = this,
        hasError = _a.hasError,
        thrownError = _a.thrownError,
        _value = _a._value;

    if (hasError) {
      throw thrownError;
    }

    this._throwIfClosed();

    return _value;
  };

  BehaviorSubject.prototype.next = function (value) {
    _super.prototype.next.call(this, this._value = value);
  };

  return BehaviorSubject;
}(Subject_1.Subject);

exports.BehaviorSubject = BehaviorSubject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFVQTtFQUF3Q0E7O0VBQ3RDLHlCQUFvQkMsTUFBcEIsRUFBNkI7SUFBN0IsWUFDRUMscUJBQU8sSUFEVDs7SUFBb0JDOztFQUVuQjs7RUFFREMsc0JBQUlDLHlCQUFKLEVBQUksT0FBSixFQUFTO1NBQVQ7TUFDRSxPQUFPLEtBQUtDLFFBQUwsRUFBUDtJQUNELENBRlE7cUJBQUE7O0VBQUEsQ0FBVDs7RUFLVUQsdUNBQVYsVUFBcUJFLFVBQXJCLEVBQThDO0lBQzVDLElBQU1DLFlBQVksR0FBR04saUJBQU1PLFVBQU4sQ0FBZ0JDLElBQWhCLENBQWdCLElBQWhCLEVBQWlCSCxVQUFqQixDQUFyQjs7SUFDQSxDQUFDQyxZQUFZLENBQUNHLE1BQWQsSUFBd0JKLFVBQVUsQ0FBQ0ssSUFBWCxDQUFnQixLQUFLWCxNQUFyQixDQUF4QjtJQUNBLE9BQU9PLFlBQVA7RUFDRCxDQUpTOztFQU1WSDtJQUNRLFNBQW9DLElBQXBDO0lBQUEsSUFBRVEsUUFBUSxjQUFWO0lBQUEsSUFBWUMsV0FBVyxpQkFBdkI7SUFBQSxJQUF5QmIsTUFBTSxZQUEvQjs7SUFDTixJQUFJWSxRQUFKLEVBQWM7TUFDWixNQUFNQyxXQUFOO0lBQ0Q7O0lBQ0QsS0FBS0MsY0FBTDs7SUFDQSxPQUFPZCxNQUFQO0VBQ0QsQ0FQRDs7RUFTQUksMkNBQUtXLEtBQUwsRUFBYTtJQUNYZCxpQkFBTVUsSUFBTixDQUFVRixJQUFWLENBQVUsSUFBVixFQUFZLEtBQUtULE1BQUwsR0FBY2UsS0FBMUI7RUFDRCxDQUZEOztFQUdGO0FBQUMsQ0E1QkQsQ0FBd0NDLGlCQUF4Qzs7QUFBYUMiLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJfdmFsdWUiLCJfc3VwZXIiLCJfdGhpcyIsIk9iamVjdCIsIkJlaGF2aW9yU3ViamVjdCIsImdldFZhbHVlIiwic3Vic2NyaWJlciIsInN1YnNjcmlwdGlvbiIsIl9zdWJzY3JpYmUiLCJjYWxsIiwiY2xvc2VkIiwibmV4dCIsImhhc0Vycm9yIiwidGhyb3duRXJyb3IiLCJfdGhyb3dJZkNsb3NlZCIsInZhbHVlIiwiU3ViamVjdF8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"./Subject":11}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeNotification = exports.Notification = exports.NotificationKind = void 0;

var empty_1 = require("./observable/empty");

var of_1 = require("./observable/of");

var throwError_1 = require("./observable/throwError");

var isFunction_1 = require("./util/isFunction");

var NotificationKind;

(function (NotificationKind) {
  NotificationKind["NEXT"] = "N";
  NotificationKind["ERROR"] = "E";
  NotificationKind["COMPLETE"] = "C";
})(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));

var Notification = function () {
  function Notification(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === 'N';
  }

  Notification.prototype.observe = function (observer) {
    return observeNotification(this, observer);
  };

  Notification.prototype["do"] = function (nextHandler, errorHandler, completeHandler) {
    var _a = this,
        kind = _a.kind,
        value = _a.value,
        error = _a.error;

    return kind === 'N' ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === 'E' ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
  };

  Notification.prototype.accept = function (nextOrObserver, error, complete) {
    var _a;

    return isFunction_1.isFunction((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next) ? this.observe(nextOrObserver) : this["do"](nextOrObserver, error, complete);
  };

  Notification.prototype.toObservable = function () {
    var _a = this,
        kind = _a.kind,
        value = _a.value,
        error = _a.error;

    var result = kind === 'N' ? of_1.of(value) : kind === 'E' ? throwError_1.throwError(function () {
      return error;
    }) : kind === 'C' ? empty_1.EMPTY : 0;

    if (!result) {
      throw new TypeError("Unexpected notification kind " + kind);
    }

    return result;
  };

  Notification.createNext = function (value) {
    return new Notification('N', value);
  };

  Notification.createError = function (err) {
    return new Notification('E', undefined, err);
  };

  Notification.createComplete = function () {
    return Notification.completeNotification;
  };

  Notification.completeNotification = new Notification('C');
  return Notification;
}();

exports.Notification = Notification;

function observeNotification(notification, observer) {
  var _a, _b, _c;

  var _d = notification,
      kind = _d.kind,
      value = _d.value,
      error = _d.error;

  if (typeof kind !== 'string') {
    throw new TypeError('Invalid notification, missing "kind"');
  }

  kind === 'N' ? (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, value) : kind === 'E' ? (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
}

exports.observeNotification = observeNotification;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0YsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtJQUM1QixNQUFNLElBQUlvQixTQUFKLENBQWMsc0NBQWQsQ0FBTjtFQUNEOztFQUNEcEIsSUFBSSxLQUFLLEdBQVQsR0FBZSxjQUFRLENBQUNjLElBQVQsTUFBYSxJQUFiLElBQWFELGFBQWIsR0FBYSxNQUFiLEdBQWFBLFFBQWJSLFFBQWEsRUFBR0osS0FBSCxDQUE1QixHQUF5Q0QsSUFBSSxLQUFLLEdBQVQsR0FBZSxjQUFRLENBQUNFLEtBQVQsTUFBYyxJQUFkLElBQWN1QixhQUFkLEdBQWMsTUFBZCxHQUFjQSxRQUFkcEIsUUFBYyxFQUFHSCxLQUFILENBQTdCLEdBQXlDLGNBQVEsQ0FBQ1MsUUFBVCxNQUFpQixJQUFqQixJQUFpQmUsYUFBakIsR0FBaUIsTUFBakIsR0FBaUJBLFFBQWpCckIsUUFBaUIsQ0FBbkc7QUFDRDs7QUFORE4iLCJuYW1lcyI6WyJOb3RpZmljYXRpb25LaW5kIiwiZXhwb3J0cyIsImtpbmQiLCJ2YWx1ZSIsImVycm9yIiwiaGFzVmFsdWUiLCJOb3RpZmljYXRpb24iLCJvYnNlcnZlciIsIm9ic2VydmVOb3RpZmljYXRpb24iLCJuZXh0SGFuZGxlciIsImVycm9ySGFuZGxlciIsImNvbXBsZXRlSGFuZGxlciIsIm5leHRPck9ic2VydmVyIiwiY29tcGxldGUiLCJpc0Z1bmN0aW9uXzEiLCJfYSIsIm5leHQiLCJvYnNlcnZlIiwicmVzdWx0Iiwib2ZfMSIsInRocm93RXJyb3JfMSIsImVtcHR5XzEiLCJUeXBlRXJyb3IiLCJlcnIiLCJ1bmRlZmluZWQiLCJjb21wbGV0ZU5vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbiIsIl9iIiwiX2MiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ludGVybmFsL05vdGlmaWNhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./observable/empty":26,"./observable/of":38,"./observable/throwError":44,"./util/isFunction":212}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNotification = exports.nextNotification = exports.errorNotification = exports.COMPLETE_NOTIFICATION = void 0;

exports.COMPLETE_NOTIFICATION = function () {
  return createNotification('C', undefined, undefined);
}();

function errorNotification(error) {
  return createNotification('E', undefined, error);
}

exports.errorNotification = errorNotification;

function nextNotification(value) {
  return createNotification('N', value, undefined);
}

exports.nextNotification = nextNotification;

function createNotification(kind, value, error) {
  return {
    kind: kind,
    value: value,
    error: error
  };
}

exports.createNotification = createNotification;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9hQSxnQ0FBeUI7RUFBTSx5QkFBa0IsQ0FBQyxHQUFELEVBQU1DLFNBQU4sRUFBaUJBLFNBQWpCLENBQWxCO0FBQXFFLENBQTVFLEVBQXhCOztBQU9iLFNBQWdCQyxpQkFBaEIsQ0FBa0NDLEtBQWxDLEVBQTRDO0VBQzFDLE9BQU9DLGtCQUFrQixDQUFDLEdBQUQsRUFBTUgsU0FBTixFQUFpQkUsS0FBakIsQ0FBekI7QUFDRDs7QUFGREg7O0FBU0EsU0FBZ0JLLGdCQUFoQixDQUFvQ0MsS0FBcEMsRUFBNEM7RUFDMUMsT0FBT0Ysa0JBQWtCLENBQUMsR0FBRCxFQUFNRSxLQUFOLEVBQWFMLFNBQWIsQ0FBekI7QUFDRDs7QUFGREQ7O0FBVUEsU0FBZ0JJLGtCQUFoQixDQUFtQ0csSUFBbkMsRUFBMERELEtBQTFELEVBQXNFSCxLQUF0RSxFQUFnRjtFQUM5RSxPQUFPO0lBQ0xJLElBQUksTUFEQztJQUVMRCxLQUFLLE9BRkE7SUFHTEgsS0FBSztFQUhBLENBQVA7QUFLRDs7QUFOREgiLCJuYW1lcyI6WyJleHBvcnRzIiwidW5kZWZpbmVkIiwiZXJyb3JOb3RpZmljYXRpb24iLCJlcnJvciIsImNyZWF0ZU5vdGlmaWNhdGlvbiIsIm5leHROb3RpZmljYXRpb24iLCJ2YWx1ZSIsImtpbmQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ludGVybmFsL05vdGlmaWNhdGlvbkZhY3Rvcmllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Observable = void 0;

var Subscriber_1 = require("./Subscriber");

var Subscription_1 = require("./Subscription");

var observable_1 = require("./symbol/observable");

var pipe_1 = require("./util/pipe");

var config_1 = require("./config");

var isFunction_1 = require("./util/isFunction");

var errorContext_1 = require("./util/errorContext");

var Observable = function () {
  function Observable(subscribe) {
    if (subscribe) {
      this._subscribe = subscribe;
    }
  }

  Observable.prototype.lift = function (operator) {
    var observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  };

  Observable.prototype.subscribe = function (observerOrNext, error, complete) {
    var _this = this;

    var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new Subscriber_1.SafeSubscriber(observerOrNext, error, complete);
    errorContext_1.errorContext(function () {
      var _a = _this,
          operator = _a.operator,
          source = _a.source;
      subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
    });
    return subscriber;
  };

  Observable.prototype._trySubscribe = function (sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      sink.error(err);
    }
  };

  Observable.prototype.forEach = function (_next, promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var subscriber = new Subscriber_1.SafeSubscriber({
        next: function next(value) {
          try {
            _next(value);
          } catch (err) {
            reject(err);
            subscriber.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });

      _this.subscribe(subscriber);
    });
  };

  Observable.prototype._subscribe = function (subscriber) {
    var _a;

    return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
  };

  Observable.prototype[observable_1.observable] = function () {
    return this;
  };

  Observable.prototype.pipe = function () {
    var operations = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }

    return pipe_1.pipeFromArray(operations)(this);
  };

  Observable.prototype.toPromise = function (promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var value;

      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  };

  Observable.create = function (subscribe) {
    return new Observable(subscribe);
  };

  return Observable;
}();

exports.Observable = Observable;

function getPromiseCtor(promiseCtor) {
  var _a;

  return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config_1.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}

function isObserver(value) {
  return value && isFunction_1.isFunction(value.next) && isFunction_1.isFunction(value.error) && isFunction_1.isFunction(value.complete);
}

function isSubscriber(value) {
  return value && value instanceof Subscriber_1.Subscriber || isObserver(value) && Subscription_1.isSubscription(value);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVQyxNQUFWLEVBQWdCO01BQ3JDLElBQUlDLEtBQUo7O01BQ0FYLEtBQUksQ0FBQ2IsU0FBTCxDQUNFLFVBQUM4QixDQUFELEVBQUs7UUFBSyxPQUFDTixLQUFLLEdBQUdNLENBQVQ7TUFBVyxDQUR2QixFQUVFLFVBQUNaLEdBQUQsRUFBUztRQUFLLGFBQU0sQ0FBQ0EsR0FBRCxDQUFOO01BQVcsQ0FGM0IsRUFHRTtRQUFNLGNBQU8sQ0FBQ00sS0FBRCxDQUFQO01BQWMsQ0FIdEI7SUFLRCxDQVBNLENBQVA7RUFRRCxDQVhEOztFQWhhT3RCLG9CQUFrQyxVQUFJRixTQUFKLEVBQTREO0lBQ25HLE9BQU8sSUFBSUUsVUFBSixDQUFrQkYsU0FBbEIsQ0FBUDtFQUNELENBRk07O0VBNGFUO0FBQUMsQ0EvY0Q7O0FBQWErQjs7QUF3ZGIsU0FBU1YsY0FBVCxDQUF3QkQsV0FBeEIsRUFBdUU7OztFQUNyRSxPQUFPLGlCQUFXLFNBQVgsZUFBVyxXQUFYLGlCQUFlWSxnQkFBT0MsT0FBdEIsTUFBNkIsSUFBN0IsSUFBNkJQLGFBQTdCLEdBQTZCQSxFQUE3QixHQUFpQ08sT0FBeEM7QUFDRDs7QUFFRCxTQUFTQyxVQUFULENBQXVCVixLQUF2QixFQUFpQztFQUMvQixPQUFPQSxLQUFLLElBQUlXLHdCQUFXWCxLQUFLLENBQUNMLElBQWpCLENBQVQsSUFBbUNnQix3QkFBV1gsS0FBSyxDQUFDakIsS0FBakIsQ0FBbkMsSUFBOEQ0Qix3QkFBV1gsS0FBSyxDQUFDaEIsUUFBakIsQ0FBckU7QUFDRDs7QUFFRCxTQUFTRSxZQUFULENBQXlCYyxLQUF6QixFQUFtQztFQUNqQyxPQUFRQSxLQUFLLElBQUlBLEtBQUssWUFBWWIsdUJBQTNCLElBQTJDdUIsVUFBVSxDQUFDVixLQUFELENBQVYsSUFBcUJZLDhCQUFlWixLQUFmLENBQXZFO0FBQ0QiLCJuYW1lcyI6WyJzdWJzY3JpYmUiLCJfc3Vic2NyaWJlIiwiT2JzZXJ2YWJsZSIsIm9wZXJhdG9yIiwib2JzZXJ2YWJsZSIsInNvdXJjZSIsIm9ic2VydmVyT3JOZXh0IiwiZXJyb3IiLCJjb21wbGV0ZSIsInN1YnNjcmliZXIiLCJpc1N1YnNjcmliZXIiLCJTdWJzY3JpYmVyXzEiLCJlcnJvckNvbnRleHRfMSIsIl90aGlzIiwiYWRkIiwiY2FsbCIsIl90cnlTdWJzY3JpYmUiLCJzaW5rIiwiZXJyIiwibmV4dCIsInByb21pc2VDdG9yIiwiZ2V0UHJvbWlzZUN0b3IiLCJyZXNvbHZlIiwicmVqZWN0IiwidmFsdWUiLCJ1bnN1YnNjcmliZSIsIl9hIiwib2JzZXJ2YWJsZV8xIiwib3BlcmF0aW9ucyIsInBpcGVfMSIsIngiLCJleHBvcnRzIiwiY29uZmlnXzEiLCJQcm9taXNlIiwiaXNPYnNlcnZlciIsImlzRnVuY3Rpb25fMSIsIlN1YnNjcmlwdGlvbl8xIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnRlcm5hbC9PYnNlcnZhYmxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"./Subscriber":12,"./Subscription":13,"./config":14,"./symbol/observable":191,"./util/errorContext":206,"./util/isFunction":212,"./util/pipe":223}],9:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReplaySubject = void 0;

var Subject_1 = require("./Subject");

var dateTimestampProvider_1 = require("./scheduler/dateTimestampProvider");

var ReplaySubject = function (_super) {
  __extends(ReplaySubject, _super);

  function ReplaySubject(_bufferSize, _windowTime, _timestampProvider) {
    if (_bufferSize === void 0) {
      _bufferSize = Infinity;
    }

    if (_windowTime === void 0) {
      _windowTime = Infinity;
    }

    if (_timestampProvider === void 0) {
      _timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
    }

    var _this = _super.call(this) || this;

    _this._bufferSize = _bufferSize;
    _this._windowTime = _windowTime;
    _this._timestampProvider = _timestampProvider;
    _this._buffer = [];
    _this._infiniteTimeWindow = true;
    _this._infiniteTimeWindow = _windowTime === Infinity;
    _this._bufferSize = Math.max(1, _bufferSize);
    _this._windowTime = Math.max(1, _windowTime);
    return _this;
  }

  ReplaySubject.prototype.next = function (value) {
    var _a = this,
        isStopped = _a.isStopped,
        _buffer = _a._buffer,
        _infiniteTimeWindow = _a._infiniteTimeWindow,
        _timestampProvider = _a._timestampProvider,
        _windowTime = _a._windowTime;

    if (!isStopped) {
      _buffer.push(value);

      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }

    this._trimBuffer();

    _super.prototype.next.call(this, value);
  };

  ReplaySubject.prototype._subscribe = function (subscriber) {
    this._throwIfClosed();

    this._trimBuffer();

    var subscription = this._innerSubscribe(subscriber);

    var _a = this,
        _infiniteTimeWindow = _a._infiniteTimeWindow,
        _buffer = _a._buffer;

    var copy = _buffer.slice();

    for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }

    this._checkFinalizedStatuses(subscriber);

    return subscription;
  };

  ReplaySubject.prototype._trimBuffer = function () {
    var _a = this,
        _bufferSize = _a._bufferSize,
        _timestampProvider = _a._timestampProvider,
        _buffer = _a._buffer,
        _infiniteTimeWindow = _a._infiniteTimeWindow;

    var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);

    if (!_infiniteTimeWindow) {
      var now = _timestampProvider.now();

      var last = 0;

      for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last = i;
      }

      last && _buffer.splice(0, last + 1);
    }
  };

  return ReplaySubject;
}(Subject_1.Subject);

exports.ReplaySubject = ReplaySubject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxDQUFYOztNQUdBLEtBQUssSUFBSU4sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osT0FBTyxDQUFDYSxNQUFaLElBQXVCYixPQUFPLENBQUNZLENBQUQsQ0FBUCxJQUF5QlYsR0FBaEUsRUFBcUVVLENBQUMsSUFBSSxDQUExRSxFQUE2RTtRQUMzRU0sSUFBSSxHQUFHTixDQUFQO01BQ0Q7O01BQ0RNLElBQUksSUFBSWxCLE9BQU8sQ0FBQ2lCLE1BQVIsQ0FBZSxDQUFmLEVBQWtCQyxJQUFJLEdBQUcsQ0FBekIsQ0FBUjtJQUNEO0VBQ0YsQ0FyQk87O0VBc0JWO0FBQUMsQ0F6RUQsQ0FBc0NDLGlCQUF0Qzs7QUFBYUMiLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJfYnVmZmVyU2l6ZSIsIl93aW5kb3dUaW1lIiwiX3RpbWVzdGFtcFByb3ZpZGVyIiwiZGF0ZVRpbWVzdGFtcFByb3ZpZGVyXzEiLCJfc3VwZXIiLCJfdGhpcyIsIl9pbmZpbml0ZVRpbWVXaW5kb3ciLCJJbmZpbml0eSIsIk1hdGgiLCJtYXgiLCJSZXBsYXlTdWJqZWN0IiwidmFsdWUiLCJpc1N0b3BwZWQiLCJfYnVmZmVyIiwicHVzaCIsIm5vdyIsIl90cmltQnVmZmVyIiwibmV4dCIsImNhbGwiLCJzdWJzY3JpYmVyIiwiX3Rocm93SWZDbG9zZWQiLCJzdWJzY3JpcHRpb24iLCJfaW5uZXJTdWJzY3JpYmUiLCJjb3B5Iiwic2xpY2UiLCJpIiwibGVuZ3RoIiwiY2xvc2VkIiwiX2NoZWNrRmluYWxpemVkU3RhdHVzZXMiLCJhZGp1c3RlZEJ1ZmZlclNpemUiLCJzcGxpY2UiLCJsYXN0IiwiU3ViamVjdF8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW50ZXJuYWwvUmVwbGF5U3ViamVjdC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./Subject":11,"./scheduler/dateTimestampProvider":184}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scheduler = void 0;

var dateTimestampProvider_1 = require("./scheduler/dateTimestampProvider");

var Scheduler = function () {
  function Scheduler(schedulerActionCtor, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }

    this.schedulerActionCtor = schedulerActionCtor;
    this.now = now;
  }

  Scheduler.prototype.schedule = function (work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }

    return new this.schedulerActionCtor(this, work).schedule(state, delay);
  };

  Scheduler.now = dateTimestampProvider_1.dateTimestampProvider.now;
  return Scheduler;
}();

exports.Scheduler = Scheduler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQXFCQTtFQUdFLG1CQUFvQkEsbUJBQXBCLEVBQXdEQyxHQUF4RCxFQUF5RjtJQUFqQztNQUFBQSxNQUFvQkMsU0FBUyxDQUFDRCxHQUE5QjtJQUFpQzs7SUFBckU7SUFDbEIsS0FBS0EsR0FBTCxHQUFXQSxHQUFYO0VBQ0Q7O0VBNkJNQywrQkFBUCxVQUFtQkMsSUFBbkIsRUFBd0VDLEtBQXhFLEVBQTJGQyxLQUEzRixFQUFvRztJQUE1QjtNQUFBRDtJQUFpQjs7SUFDdkYsT0FBTyxJQUFJLEtBQUtKLG1CQUFULENBQWdDLElBQWhDLEVBQXNDRyxJQUF0QyxFQUE0Q0csUUFBNUMsQ0FBcURELEtBQXJELEVBQTRERCxLQUE1RCxDQUFQO0VBQ0QsQ0FGTTs7RUFqQ09GLGdCQUFvQkssOENBQXNCTixHQUExQztFQW9DaEI7QUFBQyxDQXJDRDs7QUFBYU8iLCJuYW1lcyI6WyJzY2hlZHVsZXJBY3Rpb25DdG9yIiwibm93IiwiU2NoZWR1bGVyIiwid29yayIsImRlbGF5Iiwic3RhdGUiLCJzY2hlZHVsZSIsImRhdGVUaW1lc3RhbXBQcm92aWRlcl8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW50ZXJuYWwvU2NoZWR1bGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"./scheduler/dateTimestampProvider":184}],11:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnonymousSubject = exports.Subject = void 0;

var Observable_1 = require("./Observable");

var Subscription_1 = require("./Subscription");

var ObjectUnsubscribedError_1 = require("./util/ObjectUnsubscribedError");

var arrRemove_1 = require("./util/arrRemove");

var errorContext_1 = require("./util/errorContext");

var Subject = function (_super) {
  __extends(Subject, _super);

  function Subject() {
    var _this = _super.call(this) || this;

    _this.closed = false;
    _this.currentObservers = null;
    _this.observers = [];
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }

  Subject.prototype.lift = function (operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };

  Subject.prototype._throwIfClosed = function () {
    if (this.closed) {
      throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    }
  };

  Subject.prototype.next = function (value) {
    var _this = this;

    errorContext_1.errorContext(function () {
      var e_1, _a;

      _this._throwIfClosed();

      if (!_this.isStopped) {
        if (!_this.currentObservers) {
          _this.currentObservers = Array.from(_this.observers);
        }

        try {
          for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var observer = _c.value;
            observer.next(value);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
    });
  };

  Subject.prototype.error = function (err) {
    var _this = this;

    errorContext_1.errorContext(function () {
      _this._throwIfClosed();

      if (!_this.isStopped) {
        _this.hasError = _this.isStopped = true;
        _this.thrownError = err;
        var observers = _this.observers;

        while (observers.length) {
          observers.shift().error(err);
        }
      }
    });
  };

  Subject.prototype.complete = function () {
    var _this = this;

    errorContext_1.errorContext(function () {
      _this._throwIfClosed();

      if (!_this.isStopped) {
        _this.isStopped = true;
        var observers = _this.observers;

        while (observers.length) {
          observers.shift().complete();
        }
      }
    });
  };

  Subject.prototype.unsubscribe = function () {
    this.isStopped = this.closed = true;
    this.observers = this.currentObservers = null;
  };

  Object.defineProperty(Subject.prototype, "observed", {
    get: function get() {
      var _a;

      return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
    },
    enumerable: false,
    configurable: true
  });

  Subject.prototype._trySubscribe = function (subscriber) {
    this._throwIfClosed();

    return _super.prototype._trySubscribe.call(this, subscriber);
  };

  Subject.prototype._subscribe = function (subscriber) {
    this._throwIfClosed();

    this._checkFinalizedStatuses(subscriber);

    return this._innerSubscribe(subscriber);
  };

  Subject.prototype._innerSubscribe = function (subscriber) {
    var _this = this;

    var _a = this,
        hasError = _a.hasError,
        isStopped = _a.isStopped,
        observers = _a.observers;

    if (hasError || isStopped) {
      return Subscription_1.EMPTY_SUBSCRIPTION;
    }

    this.currentObservers = null;
    observers.push(subscriber);
    return new Subscription_1.Subscription(function () {
      _this.currentObservers = null;
      arrRemove_1.arrRemove(observers, subscriber);
    });
  };

  Subject.prototype._checkFinalizedStatuses = function (subscriber) {
    var _a = this,
        hasError = _a.hasError,
        thrownError = _a.thrownError,
        isStopped = _a.isStopped;

    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped) {
      subscriber.complete();
    }
  };

  Subject.prototype.asObservable = function () {
    var observable = new Observable_1.Observable();
    observable.source = this;
    return observable;
  };

  Subject.create = function (destination, source) {
    return new AnonymousSubject(destination, source);
  };

  return Subject;
}(Observable_1.Observable);

exports.Subject = Subject;

var AnonymousSubject = function (_super) {
  __extends(AnonymousSubject, _super);

  function AnonymousSubject(destination, source) {
    var _this = _super.call(this) || this;

    _this.destination = destination;
    _this.source = source;
    return _this;
  }

  AnonymousSubject.prototype.next = function (value) {
    var _a, _b;

    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
  };

  AnonymousSubject.prototype.error = function (err) {
    var _a, _b;

    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
  };

  AnonymousSubject.prototype.complete = function () {
    var _a, _b;

    (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
  };

  AnonymousSubject.prototype._subscribe = function (subscriber) {
    var _a, _b;

    return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : Subscription_1.EMPTY_SUBSCRIPTION;
  };

  return AnonymousSubject;
}(Subject);

exports.AnonymousSubject = AnonymousSubject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQVNBO0VBQWdDQTs7RUF3QjlCO0lBQUEsWUFFRUMscUJBQU8sSUFGVDs7SUF2QkFDLGVBQVMsS0FBVDtJQUVRQSx5QkFBeUMsSUFBekM7SUFHUkEsa0JBQTJCLEVBQTNCO0lBRUFBLGtCQUFZLEtBQVo7SUFFQUEsaUJBQVcsS0FBWDtJQUVBQSxvQkFBbUIsSUFBbkI7O0VBZUM7O0VBR0RDLG1DQUFRQyxRQUFSLEVBQWdDO0lBQzlCLElBQU1DLE9BQU8sR0FBRyxJQUFJQyxnQkFBSixDQUFxQixJQUFyQixFQUEyQixJQUEzQixDQUFoQjtJQUNBRCxPQUFPLENBQUNELFFBQVIsR0FBbUJBLFFBQW5CO0lBQ0EsT0FBT0MsT0FBUDtFQUNELENBSkQ7O0VBT1VGLG1DQUFWO0lBQ0UsSUFBSSxLQUFLSSxNQUFULEVBQWlCO01BQ2YsTUFBTSxJQUFJQyxpREFBSixFQUFOO0lBQ0Q7RUFDRixDQUpTOztFQU1WTCxtQ0FBS00sS0FBTCxFQUFhO0lBQWI7O0lBQ0VDLDRCQUFhOzs7TUFDWFIsS0FBSSxDQUFDUyxjQUFMOztNQUNBLElBQUksQ0FBQ1QsS0FBSSxDQUFDVSxTQUFWLEVBQXFCO1FBQ25CLElBQUksQ0FBQ1YsS0FBSSxDQUFDVyxnQkFBVixFQUE0QjtVQUMxQlgsS0FBSSxDQUFDVyxnQkFBTCxHQUF3QkMsS0FBSyxDQUFDQyxJQUFOLENBQVdiLEtBQUksQ0FBQ2MsU0FBaEIsQ0FBeEI7UUFDRDs7O1VBQ0QsS0FBdUIsdUJBQUksQ0FBQ0gsZ0JBQUwsR0FBcUJJLGNBQTVDLEVBQTRDLFFBQTVDLEVBQTRDQSxjQUE1QyxFQUE4QztZQUF6QyxJQUFNQyxRQUFRLFdBQWQ7WUFDSEEsUUFBUSxDQUFDQyxJQUFULENBQWNWLEtBQWQ7VUFDRDs7Ozs7Ozs7Ozs7O01BQ0Y7SUFDRixDQVZEO0VBV0QsQ0FaRDs7RUFjQU4sb0NBQU1pQixHQUFOLEVBQWM7SUFBZDs7SUFDRVYsNEJBQWE7TUFDWFIsS0FBSSxDQUFDUyxjQUFMOztNQUNBLElBQUksQ0FBQ1QsS0FBSSxDQUFDVSxTQUFWLEVBQXFCO1FBQ25CVixLQUFJLENBQUNtQixRQUFMLEdBQWdCbkIsS0FBSSxDQUFDVSxTQUFMLEdBQWlCLElBQWpDO1FBQ0FWLEtBQUksQ0FBQ29CLFdBQUwsR0FBbUJGLEdBQW5CO1FBQ1EsYUFBUyxHQUFLbEIsS0FBSSxVQUFsQjs7UUFDUixPQUFPYyxTQUFTLENBQUNPLE1BQWpCLEVBQXlCO1VBQ3ZCUCxTQUFTLENBQUNRLEtBQVYsR0FBbUJDLEtBQW5CLENBQXlCTCxHQUF6QjtRQUNEO01BQ0Y7SUFDRixDQVZEO0VBV0QsQ0FaRDs7RUFjQWpCO0lBQUE7O0lBQ0VPLDRCQUFhO01BQ1hSLEtBQUksQ0FBQ1MsY0FBTDs7TUFDQSxJQUFJLENBQUNULEtBQUksQ0FBQ1UsU0FBVixFQUFxQjtRQUNuQlYsS0FBSSxDQUFDVSxTQUFMLEdBQWlCLElBQWpCO1FBQ1EsYUFBUyxHQUFLVixLQUFJLFVBQWxCOztRQUNSLE9BQU9jLFNBQVMsQ0FBQ08sTUFBakIsRUFBeUI7VUFDdkJQLFNBQVMsQ0FBQ1EsS0FBVixHQUFtQkUsUUFBbkI7UUFDRDtNQUNGO0lBQ0YsQ0FURDtFQVVELENBWEQ7O0VBYUF2QjtJQUNFLEtBQUtTLFNBQUwsR0FBaUIsS0FBS0wsTUFBTCxHQUFjLElBQS9CO0lBQ0EsS0FBS1MsU0FBTCxHQUFpQixLQUFLSCxnQkFBTCxHQUF3QixJQUF6QztFQUNELENBSEQ7O0VBS0FjLHNCQUFJeEIsaUJBQUosRUFBSSxVQUFKLEVBQVk7U0FBWjs7O01BQ0UsT0FBTyxZQUFLYSxTQUFMLE1BQWMsSUFBZCxJQUFjWSxhQUFkLEdBQWMsTUFBZCxHQUFjQSxHQUFFTCxNQUFoQixJQUF5QixDQUFoQztJQUNELENBRlc7cUJBQUE7O0VBQUEsQ0FBWjs7RUFLVXBCLGtDQUFWLFVBQXdCMEIsVUFBeEIsRUFBaUQ7SUFDL0MsS0FBS2xCLGNBQUw7O0lBQ0EsT0FBT1YsaUJBQU02QixhQUFOLENBQW1CQyxJQUFuQixDQUFtQixJQUFuQixFQUFvQkYsVUFBcEIsQ0FBUDtFQUNELENBSFM7O0VBTUExQiwrQkFBVixVQUFxQjBCLFVBQXJCLEVBQThDO0lBQzVDLEtBQUtsQixjQUFMOztJQUNBLEtBQUtxQix1QkFBTCxDQUE2QkgsVUFBN0I7O0lBQ0EsT0FBTyxLQUFLSSxlQUFMLENBQXFCSixVQUFyQixDQUFQO0VBQ0QsQ0FKUzs7RUFPQTFCLG9DQUFWLFVBQTBCMEIsVUFBMUIsRUFBcUQ7SUFBckQ7O0lBQ1EsU0FBcUMsSUFBckM7SUFBQSxJQUFFUixRQUFRLGNBQVY7SUFBQSxJQUFZVCxTQUFTLGVBQXJCO0lBQUEsSUFBdUJJLFNBQVMsZUFBaEM7O0lBQ04sSUFBSUssUUFBUSxJQUFJVCxTQUFoQixFQUEyQjtNQUN6QixPQUFPc0IsaUNBQVA7SUFDRDs7SUFDRCxLQUFLckIsZ0JBQUwsR0FBd0IsSUFBeEI7SUFDQUcsU0FBUyxDQUFDbUIsSUFBVixDQUFlTixVQUFmO0lBQ0EsT0FBTyxJQUFJSywyQkFBSixDQUFpQjtNQUN0QmhDLEtBQUksQ0FBQ1csZ0JBQUwsR0FBd0IsSUFBeEI7TUFDQXVCLHNCQUFVcEIsU0FBVixFQUFxQmEsVUFBckI7SUFDRCxDQUhNLENBQVA7RUFJRCxDQVhTOztFQWNBMUIsNENBQVYsVUFBa0MwQixVQUFsQyxFQUE2RDtJQUNyRCxTQUF1QyxJQUF2QztJQUFBLElBQUVSLFFBQVEsY0FBVjtJQUFBLElBQVlDLFdBQVcsaUJBQXZCO0lBQUEsSUFBeUJWLFNBQVMsZUFBbEM7O0lBQ04sSUFBSVMsUUFBSixFQUFjO01BQ1pRLFVBQVUsQ0FBQ0osS0FBWCxDQUFpQkgsV0FBakI7SUFDRCxDQUZELE1BRU8sSUFBSVYsU0FBSixFQUFlO01BQ3BCaUIsVUFBVSxDQUFDSCxRQUFYO0lBQ0Q7RUFDRixDQVBTOztFQWVWdkI7SUFDRSxJQUFNa0MsVUFBVSxHQUFRLElBQUlDLHVCQUFKLEVBQXhCO0lBQ0FELFVBQVUsQ0FBQ0UsTUFBWCxHQUFvQixJQUFwQjtJQUNBLE9BQU9GLFVBQVA7RUFDRCxDQUpEOztFQXBIT2xDLGlCQUFrQyxVQUFJcUMsV0FBSixFQUE4QkQsTUFBOUIsRUFBbUQ7SUFDMUYsT0FBTyxJQUFJakMsZ0JBQUosQ0FBd0JrQyxXQUF4QixFQUFxQ0QsTUFBckMsQ0FBUDtFQUNELENBRk07O0VBeUhUO0FBQUMsQ0E3SUQsQ0FBZ0NELHVCQUFoQzs7QUFBYUc7O0FBa0piO0VBQXlDekM7O0VBQ3ZDLDBCQUVTd0MsV0FGVCxFQUdFRCxNQUhGLEVBR3dCO0lBSHhCLFlBS0V0QyxxQkFBTyxJQUxUOztJQUVTQztJQUlQQSxLQUFJLENBQUNxQyxNQUFMLEdBQWNBLE1BQWQ7O0VBQ0Q7O0VBRURqQyw0Q0FBS0csS0FBTCxFQUFhOzs7SUFDWCxpQkFBSytCLFdBQUwsTUFBZ0IsSUFBaEIsSUFBZ0JaLGFBQWhCLEdBQWdCLE1BQWhCLEdBQWdCQSxHQUFFVCxJQUFsQixNQUFzQixJQUF0QixJQUFzQnVCLGFBQXRCLEdBQXNCLE1BQXRCLEdBQXNCQSxZQUFHakMsS0FBSCxDQUF0QjtFQUNELENBRkQ7O0VBSUFILDZDQUFNYyxHQUFOLEVBQWM7OztJQUNaLGlCQUFLb0IsV0FBTCxNQUFnQixJQUFoQixJQUFnQlosYUFBaEIsR0FBZ0IsTUFBaEIsR0FBZ0JBLEdBQUVILEtBQWxCLE1BQXVCLElBQXZCLElBQXVCaUIsYUFBdkIsR0FBdUIsTUFBdkIsR0FBdUJBLFlBQUd0QixHQUFILENBQXZCO0VBQ0QsQ0FGRDs7RUFJQWQ7OztJQUNFLGlCQUFLa0MsV0FBTCxNQUFnQixJQUFoQixJQUFnQlosYUFBaEIsR0FBZ0IsTUFBaEIsR0FBZ0JBLEdBQUVGLFFBQWxCLE1BQTBCLElBQTFCLElBQTBCZ0IsYUFBMUIsR0FBMEIsTUFBMUIsR0FBMEJBLFdBQTFCO0VBQ0QsQ0FGRDs7RUFLVXBDLHdDQUFWLFVBQXFCdUIsVUFBckIsRUFBOEM7OztJQUM1QyxPQUFPLGlCQUFLVSxNQUFMLE1BQVcsSUFBWCxJQUFXWCxhQUFYLEdBQVcsTUFBWCxHQUFXQSxHQUFFZSxTQUFGLENBQVlkLFVBQVosQ0FBWCxNQUFrQyxJQUFsQyxJQUFrQ2EsYUFBbEMsR0FBa0NBLEVBQWxDLEdBQXNDUixpQ0FBN0M7RUFDRCxDQUZTOztFQUdaO0FBQUMsQ0ExQkQsQ0FBeUMvQixPQUF6Qzs7QUFBYXNDIiwibmFtZXMiOlsiX19leHRlbmRzIiwiX3N1cGVyIiwiX3RoaXMiLCJTdWJqZWN0Iiwib3BlcmF0b3IiLCJzdWJqZWN0IiwiQW5vbnltb3VzU3ViamVjdCIsImNsb3NlZCIsIk9iamVjdFVuc3Vic2NyaWJlZEVycm9yXzEiLCJ2YWx1ZSIsImVycm9yQ29udGV4dF8xIiwiX3Rocm93SWZDbG9zZWQiLCJpc1N0b3BwZWQiLCJjdXJyZW50T2JzZXJ2ZXJzIiwiQXJyYXkiLCJmcm9tIiwib2JzZXJ2ZXJzIiwiX2MiLCJvYnNlcnZlciIsIm5leHQiLCJlcnIiLCJoYXNFcnJvciIsInRocm93bkVycm9yIiwibGVuZ3RoIiwic2hpZnQiLCJlcnJvciIsImNvbXBsZXRlIiwiT2JqZWN0IiwiX2EiLCJzdWJzY3JpYmVyIiwiX3RyeVN1YnNjcmliZSIsImNhbGwiLCJfY2hlY2tGaW5hbGl6ZWRTdGF0dXNlcyIsIl9pbm5lclN1YnNjcmliZSIsIlN1YnNjcmlwdGlvbl8xIiwicHVzaCIsImFyclJlbW92ZV8xIiwib2JzZXJ2YWJsZSIsIk9ic2VydmFibGVfMSIsInNvdXJjZSIsImRlc3RpbmF0aW9uIiwiZXhwb3J0cyIsIl9iIiwic3Vic2NyaWJlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnRlcm5hbC9TdWJqZWN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"./Observable":8,"./Subscription":13,"./util/ObjectUnsubscribedError":197,"./util/arrRemove":203,"./util/errorContext":206}],12:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EMPTY_OBSERVER = exports.SafeSubscriber = exports.Subscriber = void 0;

var isFunction_1 = require("./util/isFunction");

var Subscription_1 = require("./Subscription");

var config_1 = require("./config");

var reportUnhandledError_1 = require("./util/reportUnhandledError");

var noop_1 = require("./util/noop");

var NotificationFactories_1 = require("./NotificationFactories");

var timeoutProvider_1 = require("./scheduler/timeoutProvider");

var errorContext_1 = require("./util/errorContext");

var Subscriber = function (_super) {
  __extends(Subscriber, _super);

  function Subscriber(destination) {
    var _this = _super.call(this) || this;

    _this.isStopped = false;

    if (destination) {
      _this.destination = destination;

      if (Subscription_1.isSubscription(destination)) {
        destination.add(_this);
      }
    } else {
      _this.destination = exports.EMPTY_OBSERVER;
    }

    return _this;
  }

  Subscriber.create = function (next, error, complete) {
    return new SafeSubscriber(next, error, complete);
  };

  Subscriber.prototype.next = function (value) {
    if (this.isStopped) {
      handleStoppedNotification(NotificationFactories_1.nextNotification(value), this);
    } else {
      this._next(value);
    }
  };

  Subscriber.prototype.error = function (err) {
    if (this.isStopped) {
      handleStoppedNotification(NotificationFactories_1.errorNotification(err), this);
    } else {
      this.isStopped = true;

      this._error(err);
    }
  };

  Subscriber.prototype.complete = function () {
    if (this.isStopped) {
      handleStoppedNotification(NotificationFactories_1.COMPLETE_NOTIFICATION, this);
    } else {
      this.isStopped = true;

      this._complete();
    }
  };

  Subscriber.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.isStopped = true;

      _super.prototype.unsubscribe.call(this);

      this.destination = null;
    }
  };

  Subscriber.prototype._next = function (value) {
    this.destination.next(value);
  };

  Subscriber.prototype._error = function (err) {
    try {
      this.destination.error(err);
    } finally {
      this.unsubscribe();
    }
  };

  Subscriber.prototype._complete = function () {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  };

  return Subscriber;
}(Subscription_1.Subscription);

exports.Subscriber = Subscriber;
var _bind = Function.prototype.bind;

function bind(fn, thisArg) {
  return _bind.call(fn, thisArg);
}

var ConsumerObserver = function () {
  function ConsumerObserver(partialObserver) {
    this.partialObserver = partialObserver;
  }

  ConsumerObserver.prototype.next = function (value) {
    var partialObserver = this.partialObserver;

    if (partialObserver.next) {
      try {
        partialObserver.next(value);
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };

  ConsumerObserver.prototype.error = function (err) {
    var partialObserver = this.partialObserver;

    if (partialObserver.error) {
      try {
        partialObserver.error(err);
      } catch (error) {
        handleUnhandledError(error);
      }
    } else {
      handleUnhandledError(err);
    }
  };

  ConsumerObserver.prototype.complete = function () {
    var partialObserver = this.partialObserver;

    if (partialObserver.complete) {
      try {
        partialObserver.complete();
      } catch (error) {
        handleUnhandledError(error);
      }
    }
  };

  return ConsumerObserver;
}();

var SafeSubscriber = function (_super) {
  __extends(SafeSubscriber, _super);

  function SafeSubscriber(observerOrNext, error, complete) {
    var _this = _super.call(this) || this;

    var partialObserver;

    if (isFunction_1.isFunction(observerOrNext) || !observerOrNext) {
      partialObserver = {
        next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined,
        error: error !== null && error !== void 0 ? error : undefined,
        complete: complete !== null && complete !== void 0 ? complete : undefined
      };
    } else {
      var context_1;

      if (_this && config_1.config.useDeprecatedNextContext) {
        context_1 = Object.create(observerOrNext);

        context_1.unsubscribe = function () {
          return _this.unsubscribe();
        };

        partialObserver = {
          next: observerOrNext.next && bind(observerOrNext.next, context_1),
          error: observerOrNext.error && bind(observerOrNext.error, context_1),
          complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
        };
      } else {
        partialObserver = observerOrNext;
      }
    }

    _this.destination = new ConsumerObserver(partialObserver);
    return _this;
  }

  return SafeSubscriber;
}(Subscriber);

exports.SafeSubscriber = SafeSubscriber;

function handleUnhandledError(error) {
  if (config_1.config.useDeprecatedSynchronousErrorHandling) {
    errorContext_1.captureError(error);
  } else {
    reportUnhandledError_1.reportUnhandledError(error);
  }
}

function defaultErrorHandler(err) {
  throw err;
}

function handleStoppedNotification(notification, subscriber) {
  var onStoppedNotification = config_1.config.onStoppedNotification;
  onStoppedNotification && timeoutProvider_1.timeoutProvider.setTimeout(function () {
    return onStoppedNotification(notification, subscriber);
  });
}

exports.EMPTY_OBSERVER = {
  closed: true,
  next: noop_1.noop,
  error: defaultErrorHandler,
  complete: noop_1.noop
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXFDO0VBQ25DLE1BQU1BLEdBQU47QUFDRDs7QUFPRCxTQUFTSCx5QkFBVCxDQUFtQzhCLFlBQW5DLEVBQThFQyxVQUE5RSxFQUF5RztFQUMvRix5QkFBcUIsR0FBS1QsZ0JBQU1VLHFCQUFoQztFQUNSQSxxQkFBcUIsSUFBSUMsa0NBQWdCQyxVQUFoQixDQUEyQjtJQUFNLDRCQUFxQixDQUFDSixZQUFELEVBQWVDLFVBQWYsQ0FBckI7RUFBK0MsQ0FBaEYsQ0FBekI7QUFDRDs7QUFPWXZDLHlCQUE2RDtFQUN4RWMsTUFBTSxFQUFFLElBRGdFO0VBRXhFWixJQUFJLEVBQUV5QyxXQUZrRTtFQUd4RXhDLEtBQUssRUFBRWtDLG1CQUhpRTtFQUl4RWpDLFFBQVEsRUFBRXVDO0FBSjhELENBQTdEIiwibmFtZXMiOlsiX19leHRlbmRzIiwiZGVzdGluYXRpb24iLCJfc3VwZXIiLCJfdGhpcyIsIlN1YnNjcmlwdGlvbl8xIiwiYWRkIiwiZXhwb3J0cyIsIlN1YnNjcmliZXIiLCJuZXh0IiwiZXJyb3IiLCJjb21wbGV0ZSIsIlNhZmVTdWJzY3JpYmVyIiwidmFsdWUiLCJpc1N0b3BwZWQiLCJoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uIiwiTm90aWZpY2F0aW9uRmFjdG9yaWVzXzEiLCJfbmV4dCIsImVyciIsIl9lcnJvciIsIl9jb21wbGV0ZSIsImNsb3NlZCIsInVuc3Vic2NyaWJlIiwiY2FsbCIsIl9iaW5kIiwiRnVuY3Rpb24iLCJwcm90b3R5cGUiLCJiaW5kIiwiZm4iLCJ0aGlzQXJnIiwicGFydGlhbE9ic2VydmVyIiwiQ29uc3VtZXJPYnNlcnZlciIsImhhbmRsZVVuaGFuZGxlZEVycm9yIiwib2JzZXJ2ZXJPck5leHQiLCJpc0Z1bmN0aW9uXzEiLCJ1bmRlZmluZWQiLCJjb250ZXh0XzEiLCJjb25maWdfMSIsInVzZURlcHJlY2F0ZWROZXh0Q29udGV4dCIsIk9iamVjdCIsImNyZWF0ZSIsInVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmciLCJlcnJvckNvbnRleHRfMSIsInJlcG9ydFVuaGFuZGxlZEVycm9yXzEiLCJkZWZhdWx0RXJyb3JIYW5kbGVyIiwibm90aWZpY2F0aW9uIiwic3Vic2NyaWJlciIsIm9uU3RvcHBlZE5vdGlmaWNhdGlvbiIsInRpbWVvdXRQcm92aWRlcl8xIiwic2V0VGltZW91dCIsIm5vb3BfMSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW50ZXJuYWwvU3Vic2NyaWJlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./NotificationFactories":7,"./Subscription":13,"./config":14,"./scheduler/timeoutProvider":189,"./util/errorContext":206,"./util/isFunction":212,"./util/noop":221,"./util/reportUnhandledError":224}],13:[function(require,module,exports){
"use strict";

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSubscription = exports.EMPTY_SUBSCRIPTION = exports.Subscription = void 0;

var isFunction_1 = require("./util/isFunction");

var UnsubscriptionError_1 = require("./util/UnsubscriptionError");

var arrRemove_1 = require("./util/arrRemove");

var Subscription = function () {
  function Subscription(initialTeardown) {
    this.initialTeardown = initialTeardown;
    this.closed = false;
    this._parentage = null;
    this._finalizers = null;
  }

  Subscription.prototype.unsubscribe = function () {
    var e_1, _a, e_2, _b;

    var errors;

    if (!this.closed) {
      this.closed = true;
      var _parentage = this._parentage;

      if (_parentage) {
        this._parentage = null;

        if (Array.isArray(_parentage)) {
          try {
            for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
              var parent_1 = _parentage_1_1.value;
              parent_1.remove(this);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1["return"])) _a.call(_parentage_1);
            } finally {
              if (e_1) throw e_1.error;
            }
          }
        } else {
          _parentage.remove(this);
        }
      }

      var initialFinalizer = this.initialTeardown;

      if (isFunction_1.isFunction(initialFinalizer)) {
        try {
          initialFinalizer();
        } catch (e) {
          errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? e.errors : [e];
        }
      }

      var _finalizers = this._finalizers;

      if (_finalizers) {
        this._finalizers = null;

        try {
          for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
            var finalizer = _finalizers_1_1.value;

            try {
              execFinalizer(finalizer);
            } catch (err) {
              errors = errors !== null && errors !== void 0 ? errors : [];

              if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
              } else {
                errors.push(err);
              }
            }
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1["return"])) _b.call(_finalizers_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }

      if (errors) {
        throw new UnsubscriptionError_1.UnsubscriptionError(errors);
      }
    }
  };

  Subscription.prototype.add = function (teardown) {
    var _a;

    if (teardown && teardown !== this) {
      if (this.closed) {
        execFinalizer(teardown);
      } else {
        if (teardown instanceof Subscription) {
          if (teardown.closed || teardown._hasParent(this)) {
            return;
          }

          teardown._addParent(this);
        }

        (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
      }
    }
  };

  Subscription.prototype._hasParent = function (parent) {
    var _parentage = this._parentage;
    return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
  };

  Subscription.prototype._addParent = function (parent) {
    var _parentage = this._parentage;
    this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
  };

  Subscription.prototype._removeParent = function (parent) {
    var _parentage = this._parentage;

    if (_parentage === parent) {
      this._parentage = null;
    } else if (Array.isArray(_parentage)) {
      arrRemove_1.arrRemove(_parentage, parent);
    }
  };

  Subscription.prototype.remove = function (teardown) {
    var _finalizers = this._finalizers;
    _finalizers && arrRemove_1.arrRemove(_finalizers, teardown);

    if (teardown instanceof Subscription) {
      teardown._removeParent(this);
    }
  };

  Subscription.EMPTY = function () {
    var empty = new Subscription();
    empty.closed = true;
    return empty;
  }();

  return Subscription;
}();

exports.Subscription = Subscription;
exports.EMPTY_SUBSCRIPTION = Subscription.EMPTY;

function isSubscription(value) {
  return value instanceof Subscription || value && 'closed' in value && isFunction_1.isFunction(value.remove) && isFunction_1.isFunction(value.add) && isFunction_1.isFunction(value.unsubscribe);
}

exports.isSubscription = isSubscription;

function execFinalizer(finalizer) {
  if (isFunction_1.isFunction(finalizer)) {
    finalizer();
  } else {
    finalizer.unsubscribe();
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixFQUFkO0lBQ0E0QixLQUFLLENBQUMxQixNQUFOLEdBQWUsSUFBZjtJQUNBLE9BQU8wQixLQUFQO0VBQ0QsQ0FKcUIsRUFBUjs7RUFtTGhCO0FBQUMsQ0FyTEQ7O0FBQWFDO0FBdUxBQSw2QkFBcUI3QixZQUFZLENBQUM4QixLQUFsQzs7QUFFYixTQUFnQkMsY0FBaEIsQ0FBK0JDLEtBQS9CLEVBQXlDO0VBQ3ZDLE9BQ0VBLEtBQUssWUFBWWhDLFlBQWpCLElBQ0NnQyxLQUFLLElBQUksWUFBWUEsS0FBckIsSUFBOEJ0Qix3QkFBV3NCLEtBQUssQ0FBQ3hCLE1BQWpCLENBQTlCLElBQTBERSx3QkFBV3NCLEtBQUssQ0FBQ0MsR0FBakIsQ0FBMUQsSUFBbUZ2Qix3QkFBV3NCLEtBQUssQ0FBQ0UsV0FBakIsQ0FGdEY7QUFJRDs7QUFMREw7O0FBT0EsU0FBU2IsYUFBVCxDQUF1QkQsU0FBdkIsRUFBK0Q7RUFDN0QsSUFBSUwsd0JBQVdLLFNBQVgsQ0FBSixFQUEyQjtJQUN6QkEsU0FBUztFQUNWLENBRkQsTUFFTztJQUNMQSxTQUFTLENBQUNtQixXQUFWO0VBQ0Q7QUFDRiIsIm5hbWVzIjpbImluaXRpYWxUZWFyZG93biIsIlN1YnNjcmlwdGlvbiIsImVycm9ycyIsImNsb3NlZCIsIl9wYXJlbnRhZ2UiLCJBcnJheSIsImlzQXJyYXkiLCJfcGFyZW50YWdlXzFfMSIsInBhcmVudF8xIiwicmVtb3ZlIiwiaW5pdGlhbEZpbmFsaXplciIsImlzRnVuY3Rpb25fMSIsImUiLCJVbnN1YnNjcmlwdGlvbkVycm9yXzEiLCJfZmluYWxpemVycyIsIl9maW5hbGl6ZXJzXzFfMSIsImZpbmFsaXplciIsImV4ZWNGaW5hbGl6ZXIiLCJlcnIiLCJfX3JlYWQiLCJwdXNoIiwidGVhcmRvd24iLCJfaGFzUGFyZW50IiwiX2FkZFBhcmVudCIsIl9hIiwicGFyZW50IiwiaW5jbHVkZXMiLCJhcnJSZW1vdmVfMSIsIl9yZW1vdmVQYXJlbnQiLCJlbXB0eSIsImV4cG9ydHMiLCJFTVBUWSIsImlzU3Vic2NyaXB0aW9uIiwidmFsdWUiLCJhZGQiLCJ1bnN1YnNjcmliZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW50ZXJuYWwvU3Vic2NyaXB0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"./util/UnsubscriptionError":199,"./util/arrRemove":203,"./util/isFunction":212}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
exports.config = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: undefined,
  useDeprecatedSynchronousErrorHandling: false,
  useDeprecatedNextContext: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT2FBLGlCQUF1QjtFQUNsQ0MsZ0JBQWdCLEVBQUUsSUFEZ0I7RUFFbENDLHFCQUFxQixFQUFFLElBRlc7RUFHbENDLE9BQU8sRUFBRUMsU0FIeUI7RUFJbENDLHFDQUFxQyxFQUFFLEtBSkw7RUFLbENDLHdCQUF3QixFQUFFO0FBTFEsQ0FBdkIiLCJuYW1lcyI6WyJleHBvcnRzIiwib25VbmhhbmRsZWRFcnJvciIsIm9uU3RvcHBlZE5vdGlmaWNhdGlvbiIsIlByb21pc2UiLCJ1bmRlZmluZWQiLCJ1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nIiwidXNlRGVwcmVjYXRlZE5leHRDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnRlcm5hbC9jb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{}],15:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firstValueFrom = void 0;

var EmptyError_1 = require("./util/EmptyError");

var Subscriber_1 = require("./Subscriber");

function firstValueFrom(source, config) {
  var hasConfig = _typeof(config) === 'object';
  return new Promise(function (resolve, reject) {
    var subscriber = new Subscriber_1.SafeSubscriber({
      next: function next(value) {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: function complete() {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new EmptyError_1.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

exports.firstValueFrom = firstValueFrom;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBcURBLFNBQWdCQSxjQUFoQixDQUFxQ0MsTUFBckMsRUFBNERDLE1BQTVELEVBQTRGO0VBQzFGLElBQU1DLFNBQVMsR0FBRyxRQUFPRCxNQUFQLE1BQWtCLFFBQXBDO0VBQ0EsT0FBTyxJQUFJRSxPQUFKLENBQW1CLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFnQjtJQUN4QyxJQUFNQyxVQUFVLEdBQUcsSUFBSUMsMkJBQUosQ0FBc0I7TUFDdkNDLElBQUksRUFBRSxjQUFDQyxLQUFELEVBQU07UUFDVkwsT0FBTyxDQUFDSyxLQUFELENBQVA7UUFDQUgsVUFBVSxDQUFDSSxXQUFYO01BQ0QsQ0FKc0M7TUFLdkNDLEtBQUssRUFBRU4sTUFMZ0M7TUFNdkNPLFFBQVEsRUFBRTtRQUNSLElBQUlWLFNBQUosRUFBZTtVQUNiRSxPQUFPLENBQUNILE1BQU8sQ0FBQ1ksWUFBVCxDQUFQO1FBQ0QsQ0FGRCxNQUVPO1VBQ0xSLE1BQU0sQ0FBQyxJQUFJUyx1QkFBSixFQUFELENBQU47UUFDRDtNQUNGO0lBWnNDLENBQXRCLENBQW5CO0lBY0FkLE1BQU0sQ0FBQ2UsU0FBUCxDQUFpQlQsVUFBakI7RUFDRCxDQWhCTSxDQUFQO0FBaUJEOztBQW5CRFUiLCJuYW1lcyI6WyJmaXJzdFZhbHVlRnJvbSIsInNvdXJjZSIsImNvbmZpZyIsImhhc0NvbmZpZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3Vic2NyaWJlciIsIlN1YnNjcmliZXJfMSIsIm5leHQiLCJ2YWx1ZSIsInVuc3Vic2NyaWJlIiwiZXJyb3IiLCJjb21wbGV0ZSIsImRlZmF1bHRWYWx1ZSIsIkVtcHR5RXJyb3JfMSIsInN1YnNjcmliZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ludGVybmFsL2ZpcnN0VmFsdWVGcm9tLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"./Subscriber":12,"./util/EmptyError":194}],16:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastValueFrom = void 0;

var EmptyError_1 = require("./util/EmptyError");

function lastValueFrom(source, config) {
  var hasConfig = _typeof(config) === 'object';
  return new Promise(function (resolve, reject) {
    var _hasValue = false;

    var _value;

    source.subscribe({
      next: function next(value) {
        _value = value;
        _hasValue = true;
      },
      error: reject,
      complete: function complete() {
        if (_hasValue) {
          resolve(_value);
        } else if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new EmptyError_1.EmptyError());
        }
      }
    });
  });
}

exports.lastValueFrom = lastValueFrom;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBb0RBLFNBQWdCQSxhQUFoQixDQUFvQ0MsTUFBcEMsRUFBMkRDLE1BQTNELEVBQTBGO0VBQ3hGLElBQU1DLFNBQVMsR0FBRyxRQUFPRCxNQUFQLE1BQWtCLFFBQXBDO0VBQ0EsT0FBTyxJQUFJRSxPQUFKLENBQW1CLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFnQjtJQUN4QyxJQUFJQyxTQUFTLEdBQUcsS0FBaEI7O0lBQ0EsSUFBSUMsTUFBSjs7SUFDQVAsTUFBTSxDQUFDUSxTQUFQLENBQWlCO01BQ2ZDLElBQUksRUFBRSxjQUFDQyxLQUFELEVBQU07UUFDVkgsTUFBTSxHQUFHRyxLQUFUO1FBQ0FKLFNBQVMsR0FBRyxJQUFaO01BQ0QsQ0FKYztNQUtmSyxLQUFLLEVBQUVOLE1BTFE7TUFNZk8sUUFBUSxFQUFFO1FBQ1IsSUFBSU4sU0FBSixFQUFlO1VBQ2JGLE9BQU8sQ0FBQ0csTUFBRCxDQUFQO1FBQ0QsQ0FGRCxNQUVPLElBQUlMLFNBQUosRUFBZTtVQUNwQkUsT0FBTyxDQUFDSCxNQUFPLENBQUNZLFlBQVQsQ0FBUDtRQUNELENBRk0sTUFFQTtVQUNMUixNQUFNLENBQUMsSUFBSVMsdUJBQUosRUFBRCxDQUFOO1FBQ0Q7TUFDRjtJQWRjLENBQWpCO0VBZ0JELENBbkJNLENBQVA7QUFvQkQ7O0FBdEJEQyIsIm5hbWVzIjpbImxhc3RWYWx1ZUZyb20iLCJzb3VyY2UiLCJjb25maWciLCJoYXNDb25maWciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIl9oYXNWYWx1ZSIsIl92YWx1ZSIsInN1YnNjcmliZSIsIm5leHQiLCJ2YWx1ZSIsImVycm9yIiwiY29tcGxldGUiLCJkZWZhdWx0VmFsdWUiLCJFbXB0eUVycm9yXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9pbnRlcm5hbC9sYXN0VmFsdWVGcm9tLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"./util/EmptyError":194}],17:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectableObservable = void 0;

var Observable_1 = require("../Observable");

var Subscription_1 = require("../Subscription");

var refCount_1 = require("../operators/refCount");

var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");

var lift_1 = require("../util/lift");

var ConnectableObservable = function (_super) {
  __extends(ConnectableObservable, _super);

  function ConnectableObservable(source, subjectFactory) {
    var _this = _super.call(this) || this;

    _this.source = source;
    _this.subjectFactory = subjectFactory;
    _this._subject = null;
    _this._refCount = 0;
    _this._connection = null;

    if (lift_1.hasLift(source)) {
      _this.lift = source.lift;
    }

    return _this;
  }

  ConnectableObservable.prototype._subscribe = function (subscriber) {
    return this.getSubject().subscribe(subscriber);
  };

  ConnectableObservable.prototype.getSubject = function () {
    var subject = this._subject;

    if (!subject || subject.isStopped) {
      this._subject = this.subjectFactory();
    }

    return this._subject;
  };

  ConnectableObservable.prototype._teardown = function () {
    this._refCount = 0;
    var _connection = this._connection;
    this._subject = this._connection = null;
    _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
  };

  ConnectableObservable.prototype.connect = function () {
    var _this = this;

    var connection = this._connection;

    if (!connection) {
      connection = this._connection = new Subscription_1.Subscription();
      var subject_1 = this.getSubject();
      connection.add(this.source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subject_1, undefined, function () {
        _this._teardown();

        subject_1.complete();
      }, function (err) {
        _this._teardown();

        subject_1.error(err);
      }, function () {
        return _this._teardown();
      })));

      if (connection.closed) {
        this._connection = null;
        connection = Subscription_1.Subscription.EMPTY;
      }
    }

    return connection;
  };

  ConnectableObservable.prototype.refCount = function () {
    return refCount_1.refCount()(this);
  };

  return ConnectableObservable;
}(Observable_1.Observable);

exports.ConnectableObservable = ConnectableObservable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFTQTtFQUE4Q0E7O0VBZ0I1QywrQkFBbUJDLE1BQW5CLEVBQW9EQyxjQUFwRCxFQUFvRjtJQUFwRixZQUNFQyxxQkFBTyxJQURUOztJQUFtQkM7SUFBaUNBO0lBZjFDQSxpQkFBOEIsSUFBOUI7SUFDQUEsa0JBQW9CLENBQXBCO0lBQ0FBLG9CQUFtQyxJQUFuQzs7SUFrQlIsSUFBSUMsZUFBUUosTUFBUixDQUFKLEVBQXFCO01BQ25CRyxLQUFJLENBQUNFLElBQUwsR0FBWUwsTUFBTSxDQUFDSyxJQUFuQjtJQUNEOzs7RUFDRjs7RUFHU0MsNkNBQVYsVUFBcUJDLFVBQXJCLEVBQThDO0lBQzVDLE9BQU8sS0FBS0MsVUFBTCxHQUFrQkMsU0FBbEIsQ0FBNEJGLFVBQTVCLENBQVA7RUFDRCxDQUZTOztFQUlBRCw2Q0FBVjtJQUNFLElBQU1JLE9BQU8sR0FBRyxLQUFLQyxRQUFyQjs7SUFDQSxJQUFJLENBQUNELE9BQUQsSUFBWUEsT0FBTyxDQUFDRSxTQUF4QixFQUFtQztNQUNqQyxLQUFLRCxRQUFMLEdBQWdCLEtBQUtWLGNBQUwsRUFBaEI7SUFDRDs7SUFDRCxPQUFPLEtBQUtVLFFBQVo7RUFDRCxDQU5TOztFQVFBTCw0Q0FBVjtJQUNFLEtBQUtPLFNBQUwsR0FBaUIsQ0FBakI7SUFDUSxlQUFXLEdBQUssS0FBSUMsV0FBcEI7SUFDUixLQUFLSCxRQUFMLEdBQWdCLEtBQUtHLFdBQUwsR0FBbUIsSUFBbkM7SUFDQUEsV0FBVyxTQUFYLGVBQVcsV0FBWCxHQUFXLE1BQVgsY0FBVyxDQUFFQyxXQUFiO0VBQ0QsQ0FMUzs7RUFXVlQ7SUFBQTs7SUFDRSxJQUFJVSxVQUFVLEdBQUcsS0FBS0YsV0FBdEI7O0lBQ0EsSUFBSSxDQUFDRSxVQUFMLEVBQWlCO01BQ2ZBLFVBQVUsR0FBRyxLQUFLRixXQUFMLEdBQW1CLElBQUlHLDJCQUFKLEVBQWhDO01BQ0EsSUFBTUMsU0FBTyxHQUFHLEtBQUtWLFVBQUwsRUFBaEI7TUFDQVEsVUFBVSxDQUFDRyxHQUFYLENBQ0UsS0FBS25CLE1BQUwsQ0FBWVMsU0FBWixDQUNFVyw4Q0FDRUYsU0FERixFQUVFRyxTQUZGLEVBR0U7UUFDRWxCLEtBQUksQ0FBQ21CLFNBQUw7O1FBQ0FKLFNBQU8sQ0FBQ0ssUUFBUjtNQUNELENBTkgsRUFPRSxVQUFDQyxHQUFELEVBQUk7UUFDRnJCLEtBQUksQ0FBQ21CLFNBQUw7O1FBQ0FKLFNBQU8sQ0FBQ08sS0FBUixDQUFjRCxHQUFkO01BQ0QsQ0FWSCxFQVdFO1FBQU0sWUFBSSxDQUFDRixTQUFMO01BQWdCLENBWHhCLENBREYsQ0FERjs7TUFrQkEsSUFBSU4sVUFBVSxDQUFDVSxNQUFmLEVBQXVCO1FBQ3JCLEtBQUtaLFdBQUwsR0FBbUIsSUFBbkI7UUFDQUUsVUFBVSxHQUFHQyw0QkFBYVUsS0FBMUI7TUFDRDtJQUNGOztJQUNELE9BQU9YLFVBQVA7RUFDRCxDQTdCRDs7RUFtQ0FWO0lBQ0UsT0FBT3NCLHNCQUFzQixJQUF0QixDQUFQO0VBQ0QsQ0FGRDs7RUFHRjtBQUFDLENBeEZELENBQThDQyx1QkFBOUM7O0FBQWFDIiwibmFtZXMiOlsiX19leHRlbmRzIiwic291cmNlIiwic3ViamVjdEZhY3RvcnkiLCJfc3VwZXIiLCJfdGhpcyIsImxpZnRfMSIsImxpZnQiLCJDb25uZWN0YWJsZU9ic2VydmFibGUiLCJzdWJzY3JpYmVyIiwiZ2V0U3ViamVjdCIsInN1YnNjcmliZSIsInN1YmplY3QiLCJfc3ViamVjdCIsImlzU3RvcHBlZCIsIl9yZWZDb3VudCIsIl9jb25uZWN0aW9uIiwidW5zdWJzY3JpYmUiLCJjb25uZWN0aW9uIiwiU3Vic2NyaXB0aW9uXzEiLCJzdWJqZWN0XzEiLCJhZGQiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInVuZGVmaW5lZCIsIl90ZWFyZG93biIsImNvbXBsZXRlIiwiZXJyIiwiZXJyb3IiLCJjbG9zZWQiLCJFTVBUWSIsInJlZkNvdW50XzEiLCJPYnNlcnZhYmxlXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL0Nvbm5lY3RhYmxlT2JzZXJ2YWJsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../Observable":8,"../Subscription":13,"../operators/OperatorSubscriber":48,"../operators/refCount":118,"../util/lift":219}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindCallback = void 0;

var bindCallbackInternals_1 = require("./bindCallbackInternals");

function bindCallback(callbackFunc, resultSelector, scheduler) {
  return bindCallbackInternals_1.bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
}

exports.bindCallback = bindCallback;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQXVJQSxTQUFnQkEsWUFBaEIsQ0FDRUMsWUFERixFQUVFQyxjQUZGLEVBR0VDLFNBSEYsRUFHMkI7RUFFekIsT0FBT0MsOENBQXNCLEtBQXRCLEVBQTZCSCxZQUE3QixFQUEyQ0MsY0FBM0MsRUFBMkRDLFNBQTNELENBQVA7QUFDRDs7QUFOREUiLCJuYW1lcyI6WyJiaW5kQ2FsbGJhY2siLCJjYWxsYmFja0Z1bmMiLCJyZXN1bHRTZWxlY3RvciIsInNjaGVkdWxlciIsImJpbmRDYWxsYmFja0ludGVybmFsc18xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9iaW5kQ2FsbGJhY2sudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./bindCallbackInternals":19}],19:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindCallbackInternals = void 0;

var isScheduler_1 = require("../util/isScheduler");

var Observable_1 = require("../Observable");

var subscribeOn_1 = require("../operators/subscribeOn");

var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");

var observeOn_1 = require("../operators/observeOn");

var AsyncSubject_1 = require("../AsyncSubject");

function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if (isScheduler_1.isScheduler(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
      };
    }
  }

  if (scheduler) {
    return function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
    };
  }

  return function () {
    var _this = this;

    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var subject = new AsyncSubject_1.AsyncSubject();
    var uninitialized = true;
    return new Observable_1.Observable(function (subscriber) {
      var subs = subject.subscribe(subscriber);

      if (uninitialized) {
        uninitialized = false;
        var isAsync_1 = false;
        var isComplete_1 = false;
        callbackFunc.apply(_this, __spreadArray(__spreadArray([], __read(args)), [function () {
          var results = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            results[_i] = arguments[_i];
          }

          if (isNodeStyle) {
            var err = results.shift();

            if (err != null) {
              subject.error(err);
              return;
            }
          }

          subject.next(1 < results.length ? results : results[0]);
          isComplete_1 = true;

          if (isAsync_1) {
            subject.complete();
          }
        }]));

        if (isComplete_1) {
          subject.complete();
        }

        isAsync_1 = true;
      }

      return subs;
    });
  };
}

exports.bindCallbackInternals = bindCallbackInternals;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsU0FBZ0JBLHFCQUFoQixDQUNFQyxXQURGLEVBRUVDLFlBRkYsRUFHRUMsY0FIRixFQUlFQyxTQUpGLEVBSTJCO0VBRXpCLElBQUlELGNBQUosRUFBb0I7SUFDbEIsSUFBSUUsMEJBQVlGLGNBQVosQ0FBSixFQUFpQztNQUMvQkMsU0FBUyxHQUFHRCxjQUFaO0lBQ0QsQ0FGRCxNQUVPO01BRUwsT0FBTztRQUFxQjs7YUFBQSx5Q0FBYztVQUFkRzs7O1FBQzFCLE9BQVFOLHFCQUFxQixDQUFDQyxXQUFELEVBQWNDLFlBQWQsRUFBNEJFLFNBQTVCLENBQXJCLENBQ0xHLEtBREssQ0FDQyxJQURELEVBQ09ELElBRFAsRUFFTEUsSUFGSyxDQUVBQyxvQ0FBaUJOLGNBQWpCLENBRkEsQ0FBUjtNQUdELENBSkQ7SUFLRDtFQUNGOztFQUlELElBQUlDLFNBQUosRUFBZTtJQUNiLE9BQU87TUFBcUI7O1dBQUEseUNBQWM7UUFBZEU7OztNQUMxQixPQUFRTixxQkFBcUIsQ0FBQ0MsV0FBRCxFQUFjQyxZQUFkLENBQXJCLENBQ0xLLEtBREssQ0FDQyxJQURELEVBQ09ELElBRFAsRUFFTEUsSUFGSyxDQUVBRSwwQkFBWU4sU0FBWixDQUZBLEVBRXlCTyxzQkFBVVAsU0FBVixDQUZ6QixDQUFSO0lBR0QsQ0FKRDtFQUtEOztFQUVELE9BQU87SUFBQTs7SUFBcUI7O1NBQUEseUNBQWM7TUFBZEU7OztJQUcxQixJQUFNTSxPQUFPLEdBQUcsSUFBSUMsMkJBQUosRUFBaEI7SUFHQSxJQUFJQyxhQUFhLEdBQUcsSUFBcEI7SUFDQSxPQUFPLElBQUlDLHVCQUFKLENBQWUsVUFBQ0MsVUFBRCxFQUFXO01BRS9CLElBQU1DLElBQUksR0FBR0wsT0FBTyxDQUFDTSxTQUFSLENBQWtCRixVQUFsQixDQUFiOztNQUVBLElBQUlGLGFBQUosRUFBbUI7UUFDakJBLGFBQWEsR0FBRyxLQUFoQjtRQU1BLElBQUlLLFNBQU8sR0FBRyxLQUFkO1FBR0EsSUFBSUMsWUFBVSxHQUFHLEtBQWpCO1FBS0FsQixZQUFZLENBQUNLLEtBQWIsQ0FFRWMsS0FGRixFQUVNQyx1Q0FHQ2hCLElBSEQsSUFHSyxDQUVQO1VBQUM7O2VBQUEseUNBQWlCO1lBQWpCaUI7OztVQUNDLElBQUl0QixXQUFKLEVBQWlCO1lBSWYsSUFBTXVCLEdBQUcsR0FBR0QsT0FBTyxDQUFDRSxLQUFSLEVBQVo7O1lBQ0EsSUFBSUQsR0FBRyxJQUFJLElBQVgsRUFBaUI7Y0FDZlosT0FBTyxDQUFDYyxLQUFSLENBQWNGLEdBQWQ7Y0FHQTtZQUNEO1VBQ0Y7O1VBS0RaLE9BQU8sQ0FBQ2UsSUFBUixDQUFhLElBQUlKLE9BQU8sQ0FBQ0ssTUFBWixHQUFxQkwsT0FBckIsR0FBK0JBLE9BQU8sQ0FBQyxDQUFELENBQW5EO1VBR0FILFlBQVUsR0FBRyxJQUFiOztVQU1BLElBQUlELFNBQUosRUFBYTtZQUNYUCxPQUFPLENBQUNpQixRQUFSO1VBQ0Q7UUFDRixDQS9CTSxDQUhMLENBRk47O1FBMENBLElBQUlULFlBQUosRUFBZ0I7VUFDZFIsT0FBTyxDQUFDaUIsUUFBUjtRQUNEOztRQUlEVixTQUFPLEdBQUcsSUFBVjtNQUNEOztNQUdELE9BQU9GLElBQVA7SUFDRCxDQXhFTSxDQUFQO0VBeUVELENBaEZEO0FBaUZEOztBQTlHRGEiLCJuYW1lcyI6WyJiaW5kQ2FsbGJhY2tJbnRlcm5hbHMiLCJpc05vZGVTdHlsZSIsImNhbGxiYWNrRnVuYyIsInJlc3VsdFNlbGVjdG9yIiwic2NoZWR1bGVyIiwiaXNTY2hlZHVsZXJfMSIsImFyZ3MiLCJhcHBseSIsInBpcGUiLCJtYXBPbmVPck1hbnlBcmdzXzEiLCJzdWJzY3JpYmVPbl8xIiwib2JzZXJ2ZU9uXzEiLCJzdWJqZWN0IiwiQXN5bmNTdWJqZWN0XzEiLCJ1bmluaXRpYWxpemVkIiwiT2JzZXJ2YWJsZV8xIiwic3Vic2NyaWJlciIsInN1YnMiLCJzdWJzY3JpYmUiLCJpc0FzeW5jXzEiLCJpc0NvbXBsZXRlXzEiLCJfdGhpcyIsIl9fc3ByZWFkQXJyYXkiLCJyZXN1bHRzIiwiZXJyIiwic2hpZnQiLCJlcnJvciIsIm5leHQiLCJsZW5ndGgiLCJjb21wbGV0ZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvYmluZENhbGxiYWNrSW50ZXJuYWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../AsyncSubject":4,"../Observable":8,"../operators/observeOn":108,"../operators/subscribeOn":136,"../util/isScheduler":218,"../util/mapOneOrManyArgs":220}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindNodeCallback = void 0;

var bindCallbackInternals_1 = require("./bindCallbackInternals");

function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
  return bindCallbackInternals_1.bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
}

exports.bindNodeCallback = bindNodeCallback;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQXNIQSxTQUFnQkEsZ0JBQWhCLENBQ0VDLFlBREYsRUFFRUMsY0FGRixFQUdFQyxTQUhGLEVBRzJCO0VBRXpCLE9BQU9DLDhDQUFzQixJQUF0QixFQUE0QkgsWUFBNUIsRUFBMENDLGNBQTFDLEVBQTBEQyxTQUExRCxDQUFQO0FBQ0Q7O0FBTkRFIiwibmFtZXMiOlsiYmluZE5vZGVDYWxsYmFjayIsImNhbGxiYWNrRnVuYyIsInJlc3VsdFNlbGVjdG9yIiwic2NoZWR1bGVyIiwiYmluZENhbGxiYWNrSW50ZXJuYWxzXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2JpbmROb2RlQ2FsbGJhY2sudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./bindCallbackInternals":19}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineLatestInit = exports.combineLatest = void 0;

var Observable_1 = require("../Observable");

var argsArgArrayOrObject_1 = require("../util/argsArgArrayOrObject");

var from_1 = require("./from");

var identity_1 = require("../util/identity");

var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");

var args_1 = require("../util/args");

var createObject_1 = require("../util/createObject");

var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");

var executeSchedule_1 = require("../util/executeSchedule");

function combineLatest() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var scheduler = args_1.popScheduler(args);
  var resultSelector = args_1.popResultSelector(args);

  var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args),
      observables = _a.args,
      keys = _a.keys;

  if (observables.length === 0) {
    return from_1.from([], scheduler);
  }

  var result = new Observable_1.Observable(combineLatestInit(observables, scheduler, keys ? function (values) {
    return createObject_1.createObject(keys, values);
  } : identity_1.identity));
  return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
}

exports.combineLatest = combineLatest;

function combineLatestInit(observables, scheduler, valueTransform) {
  if (valueTransform === void 0) {
    valueTransform = identity_1.identity;
  }

  return function (subscriber) {
    maybeSchedule(scheduler, function () {
      var length = observables.length;
      var values = new Array(length);
      var active = length;
      var remainingFirstValues = length;

      var _loop_1 = function _loop_1(i) {
        maybeSchedule(scheduler, function () {
          var source = from_1.from(observables[i], scheduler);
          var hasFirstValue = false;
          source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
            values[i] = value;

            if (!hasFirstValue) {
              hasFirstValue = true;
              remainingFirstValues--;
            }

            if (!remainingFirstValues) {
              subscriber.next(valueTransform(values.slice()));
            }
          }, function () {
            if (! --active) {
              subscriber.complete();
            }
          }));
        }, subscriber);
      };

      for (var i = 0; i < length; i++) {
        _loop_1(i);
      }
    }, subscriber);
  };
}

exports.combineLatestInit = combineLatestInit;

function maybeSchedule(scheduler, execute, subscription) {
  if (scheduler) {
    executeSchedule_1.executeSchedule(subscription, scheduler, execute);
  } else {
    execute();
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ImNvbWJpbmVMYXRlc3QiLCJhcmdzIiwic2NoZWR1bGVyIiwiYXJnc18xIiwicmVzdWx0U2VsZWN0b3IiLCJhcmdzQXJnQXJyYXlPck9iamVjdF8xIiwib2JzZXJ2YWJsZXMiLCJrZXlzIiwibGVuZ3RoIiwiZnJvbV8xIiwicmVzdWx0IiwiT2JzZXJ2YWJsZV8xIiwiY29tYmluZUxhdGVzdEluaXQiLCJ2YWx1ZXMiLCJpZGVudGl0eV8xIiwicGlwZSIsIm1hcE9uZU9yTWFueUFyZ3NfMSIsImV4cG9ydHMiLCJ2YWx1ZVRyYW5zZm9ybSIsInN1YnNjcmliZXIiLCJtYXliZVNjaGVkdWxlIiwiQXJyYXkiLCJhY3RpdmUiLCJyZW1haW5pbmdGaXJzdFZhbHVlcyIsImkiLCJzb3VyY2UiLCJoYXNGaXJzdFZhbHVlIiwic3Vic2NyaWJlIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJ2YWx1ZSIsIm5leHQiLCJzbGljZSIsImNvbXBsZXRlIiwiZXhlY3V0ZSIsInN1YnNjcmlwdGlvbiIsImV4ZWN1dGVTY2hlZHVsZV8xIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3QudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../Observable":8,"../operators/OperatorSubscriber":48,"../util/args":200,"../util/argsArgArrayOrObject":201,"../util/createObject":205,"../util/executeSchedule":207,"../util/identity":208,"../util/mapOneOrManyArgs":220,"./from":28}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concat = void 0;

var concatAll_1 = require("../operators/concatAll");

var args_1 = require("../util/args");

var from_1 = require("./from");

function concat() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return concatAll_1.concatAll()(from_1.from(args, args_1.popScheduler(args)));
}

exports.concat = concat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQTRHQSxTQUFnQkEsTUFBaEIsR0FBc0I7RUFBQzs7T0FBQSx5Q0FBYztJQUFkQzs7O0VBQ3JCLE9BQU9DLHdCQUFZQyxZQUFLRixJQUFMLEVBQVdHLG9CQUFhSCxJQUFiLENBQVgsQ0FBWixDQUFQO0FBQ0Q7O0FBRkRJIiwibmFtZXMiOlsiY29uY2F0IiwiYXJncyIsImNvbmNhdEFsbF8xIiwiZnJvbV8xIiwiYXJnc18xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9jb25jYXQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../operators/concatAll":62,"../util/args":200,"./from":28}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectable = void 0;

var Subject_1 = require("../Subject");

var Observable_1 = require("../Observable");

var defer_1 = require("./defer");

var DEFAULT_CONFIG = {
  connector: function connector() {
    return new Subject_1.Subject();
  },
  resetOnDisconnect: true
};

function connectable(source, config) {
  if (config === void 0) {
    config = DEFAULT_CONFIG;
  }

  var connection = null;
  var connector = config.connector,
      _a = config.resetOnDisconnect,
      resetOnDisconnect = _a === void 0 ? true : _a;
  var subject = connector();
  var result = new Observable_1.Observable(function (subscriber) {
    return subject.subscribe(subscriber);
  });

  result.connect = function () {
    if (!connection || connection.closed) {
      connection = defer_1.defer(function () {
        return source;
      }).subscribe(subject);

      if (resetOnDisconnect) {
        connection.add(function () {
          return subject = connector();
        });
      }
    }

    return connection;
  };

  return result;
}

exports.connectable = connectable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUVBOztBQUNBOztBQXNCQSxJQUFNQSxjQUFjLEdBQStCO0VBQ2pEQyxTQUFTLEVBQUU7SUFBTSxXQUFJQyxpQkFBSjtFQUFzQixDQURVO0VBRWpEQyxpQkFBaUIsRUFBRTtBQUY4QixDQUFuRDs7QUFhQSxTQUFnQkMsV0FBaEIsQ0FBK0JDLE1BQS9CLEVBQTJEQyxNQUEzRCxFQUF3RztFQUE3QztJQUFBQTtFQUE2Qzs7RUFFdEcsSUFBSUMsVUFBVSxHQUF3QixJQUF0QztFQUNRLGFBQVMsR0FBK0JELE1BQU0sVUFBOUM7RUFBQSxJQUFXRSxLQUE2QkYsTUFBTSxrQkFBOUM7RUFBQSxJQUFXSCxpQkFBaUIsbUJBQUcsSUFBSCxHQUFPSyxFQUFuQztFQUNSLElBQUlDLE9BQU8sR0FBR1IsU0FBUyxFQUF2QjtFQUVBLElBQU1TLE1BQU0sR0FBUSxJQUFJQyx1QkFBSixDQUFrQixVQUFDQyxVQUFELEVBQVc7SUFDL0MsT0FBT0gsT0FBTyxDQUFDSSxTQUFSLENBQWtCRCxVQUFsQixDQUFQO0VBQ0QsQ0FGbUIsQ0FBcEI7O0VBT0FGLE1BQU0sQ0FBQ0ksT0FBUCxHQUFpQjtJQUNmLElBQUksQ0FBQ1AsVUFBRCxJQUFlQSxVQUFVLENBQUNRLE1BQTlCLEVBQXNDO01BQ3BDUixVQUFVLEdBQUdTLGNBQU07UUFBTTtNQUFNLENBQWxCLEVBQW9CSCxTQUFwQixDQUE4QkosT0FBOUIsQ0FBYjs7TUFDQSxJQUFJTixpQkFBSixFQUF1QjtRQUNyQkksVUFBVSxDQUFDVSxHQUFYLENBQWU7VUFBTSxPQUFDUixPQUFPLEdBQUdSLFNBQVMsRUFBcEI7UUFBdUIsQ0FBNUM7TUFDRDtJQUNGOztJQUNELE9BQU9NLFVBQVA7RUFDRCxDQVJEOztFQVVBLE9BQU9HLE1BQVA7QUFDRDs7QUF4QkRRIiwibmFtZXMiOlsiREVGQVVMVF9DT05GSUciLCJjb25uZWN0b3IiLCJTdWJqZWN0XzEiLCJyZXNldE9uRGlzY29ubmVjdCIsImNvbm5lY3RhYmxlIiwic291cmNlIiwiY29uZmlnIiwiY29ubmVjdGlvbiIsIl9hIiwic3ViamVjdCIsInJlc3VsdCIsIk9ic2VydmFibGVfMSIsInN1YnNjcmliZXIiLCJzdWJzY3JpYmUiLCJjb25uZWN0IiwiY2xvc2VkIiwiZGVmZXJfMSIsImFkZCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvY29ubmVjdGFibGUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../Observable":8,"../Subject":11,"./defer":24}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defer = void 0;

var Observable_1 = require("../Observable");

var innerFrom_1 = require("./innerFrom");

function defer(observableFactory) {
  return new Observable_1.Observable(function (subscriber) {
    innerFrom_1.innerFrom(observableFactory()).subscribe(subscriber);
  });
}

exports.defer = defer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQWtEQSxTQUFnQkEsS0FBaEIsQ0FBc0RDLGlCQUF0RCxFQUFnRjtFQUM5RSxPQUFPLElBQUlDLHVCQUFKLENBQW1DLFVBQUNDLFVBQUQsRUFBVztJQUNuREMsc0JBQVVILGlCQUFpQixFQUEzQixFQUErQkksU0FBL0IsQ0FBeUNGLFVBQXpDO0VBQ0QsQ0FGTSxDQUFQO0FBR0Q7O0FBSkRHIiwibmFtZXMiOlsiZGVmZXIiLCJvYnNlcnZhYmxlRmFjdG9yeSIsIk9ic2VydmFibGVfMSIsInN1YnNjcmliZXIiLCJpbm5lckZyb21fMSIsInN1YnNjcmliZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvZGVmZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../Observable":8,"./innerFrom":34}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationFrames = void 0;

var Observable_1 = require("../../Observable");

var Subscription_1 = require("../../Subscription");

var performanceTimestampProvider_1 = require("../../scheduler/performanceTimestampProvider");

var animationFrameProvider_1 = require("../../scheduler/animationFrameProvider");

function animationFrames(timestampProvider) {
  return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
}

exports.animationFrames = animationFrames;

function animationFramesFactory(timestampProvider) {
  var schedule = animationFrameProvider_1.animationFrameProvider.schedule;
  return new Observable_1.Observable(function (subscriber) {
    var subscription = new Subscription_1.Subscription();
    var provider = timestampProvider || performanceTimestampProvider_1.performanceTimestampProvider;
    var start = provider.now();

    var run = function run(timestamp) {
      var now = provider.now();
      subscriber.next({
        timestamp: timestampProvider ? now : timestamp,
        elapsed: now - start
      });

      if (!subscriber.closed) {
        subscription.add(schedule(run));
      }
    };

    subscription.add(schedule(run));
    return subscription;
  });
}

var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQXVFQSxTQUFnQkEsZUFBaEIsQ0FBZ0NDLGlCQUFoQyxFQUFxRTtFQUNuRSxPQUFPQSxpQkFBaUIsR0FBR0Msc0JBQXNCLENBQUNELGlCQUFELENBQXpCLEdBQStDRSx3QkFBdkU7QUFDRDs7QUFGREM7O0FBUUEsU0FBU0Ysc0JBQVQsQ0FBZ0NELGlCQUFoQyxFQUFxRTtFQUMzRCxZQUFRLEdBQUtJLGdEQUFzQkMsUUFBbkM7RUFDUixPQUFPLElBQUlDLHVCQUFKLENBQXVELFVBQUNDLFVBQUQsRUFBVztJQUN2RSxJQUFNQyxZQUFZLEdBQUcsSUFBSUMsMkJBQUosRUFBckI7SUFJQSxJQUFNQyxRQUFRLEdBQUdWLGlCQUFpQixJQUFJVywyREFBdEM7SUFLQSxJQUFNQyxLQUFLLEdBQUdGLFFBQVEsQ0FBQ0csR0FBVCxFQUFkOztJQUNBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLFNBQUQsRUFBd0M7TUFRbEQsSUFBTUYsR0FBRyxHQUFHSCxRQUFRLENBQUNHLEdBQVQsRUFBWjtNQUNBTixVQUFVLENBQUNTLElBQVgsQ0FBZ0I7UUFDZEQsU0FBUyxFQUFFZixpQkFBaUIsR0FBR2EsR0FBSCxHQUFTRSxTQUR2QjtRQUVkRSxPQUFPLEVBQUVKLEdBQUcsR0FBR0Q7TUFGRCxDQUFoQjs7TUFJQSxJQUFJLENBQUNMLFVBQVUsQ0FBQ1csTUFBaEIsRUFBd0I7UUFDdEJWLFlBQVksQ0FBQ1csR0FBYixDQUFpQmQsUUFBUSxDQUFDUyxHQUFELENBQXpCO01BQ0Q7SUFDRixDQWhCRDs7SUFpQkFOLFlBQVksQ0FBQ1csR0FBYixDQUFpQmQsUUFBUSxDQUFDUyxHQUFELENBQXpCO0lBQ0EsT0FBT04sWUFBUDtFQUNELENBOUJNLENBQVA7QUErQkQ7O0FBTUQsSUFBTU4sd0JBQXdCLEdBQUdELHNCQUFzQixFQUF2RCIsIm5hbWVzIjpbImFuaW1hdGlvbkZyYW1lcyIsInRpbWVzdGFtcFByb3ZpZGVyIiwiYW5pbWF0aW9uRnJhbWVzRmFjdG9yeSIsIkRFRkFVTFRfQU5JTUFUSU9OX0ZSQU1FUyIsImV4cG9ydHMiLCJhbmltYXRpb25GcmFtZVByb3ZpZGVyXzEiLCJzY2hlZHVsZSIsIk9ic2VydmFibGVfMSIsInN1YnNjcmliZXIiLCJzdWJzY3JpcHRpb24iLCJTdWJzY3JpcHRpb25fMSIsInByb3ZpZGVyIiwicGVyZm9ybWFuY2VUaW1lc3RhbXBQcm92aWRlcl8xIiwic3RhcnQiLCJub3ciLCJydW4iLCJ0aW1lc3RhbXAiLCJuZXh0IiwiZWxhcHNlZCIsImNsb3NlZCIsImFkZCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9kb20vYW5pbWF0aW9uRnJhbWVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../../Observable":8,"../../Subscription":13,"../../scheduler/animationFrameProvider":181,"../../scheduler/performanceTimestampProvider":187}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.empty = exports.EMPTY = void 0;

var Observable_1 = require("../Observable");

exports.EMPTY = new Observable_1.Observable(function (subscriber) {
  return subscriber.complete();
});

function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}

exports.empty = empty;

function emptyScheduled(scheduler) {
  return new Observable_1.Observable(function (subscriber) {
    return scheduler.schedule(function () {
      return subscriber.complete();
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQWlFYUEsZ0JBQVEsSUFBSUMsdUJBQUosQ0FBc0IsVUFBQ0MsVUFBRCxFQUFXO0VBQUssaUJBQVUsQ0FBQ0MsUUFBWDtBQUFxQixDQUEzRCxDQUFSOztBQU9iLFNBQWdCQyxLQUFoQixDQUFzQkMsU0FBdEIsRUFBK0M7RUFDN0MsT0FBT0EsU0FBUyxHQUFHQyxjQUFjLENBQUNELFNBQUQsQ0FBakIsR0FBK0JMLGFBQS9DO0FBQ0Q7O0FBRkRBOztBQUlBLFNBQVNNLGNBQVQsQ0FBd0JELFNBQXhCLEVBQWdEO0VBQzlDLE9BQU8sSUFBSUosdUJBQUosQ0FBc0IsVUFBQ0MsVUFBRCxFQUFXO0lBQUssZ0JBQVMsQ0FBQ0ssUUFBVixDQUFtQjtNQUFNLGlCQUFVLENBQUNKLFFBQVg7SUFBcUIsQ0FBOUM7RUFBK0MsQ0FBckYsQ0FBUDtBQUNEIiwibmFtZXMiOlsiZXhwb3J0cyIsIk9ic2VydmFibGVfMSIsInN1YnNjcmliZXIiLCJjb21wbGV0ZSIsImVtcHR5Iiwic2NoZWR1bGVyIiwiZW1wdHlTY2hlZHVsZWQiLCJzY2hlZHVsZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9lbXB0eS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../Observable":8}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forkJoin = void 0;

var Observable_1 = require("../Observable");

var argsArgArrayOrObject_1 = require("../util/argsArgArrayOrObject");

var innerFrom_1 = require("./innerFrom");

var args_1 = require("../util/args");

var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");

var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");

var createObject_1 = require("../util/createObject");

function forkJoin() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var resultSelector = args_1.popResultSelector(args);

  var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args),
      sources = _a.args,
      keys = _a.keys;

  var result = new Observable_1.Observable(function (subscriber) {
    var length = sources.length;

    if (!length) {
      subscriber.complete();
      return;
    }

    var values = new Array(length);
    var remainingCompletions = length;
    var remainingEmissions = length;

    var _loop_1 = function _loop_1(sourceIndex) {
      var hasValue = false;
      innerFrom_1.innerFrom(sources[sourceIndex]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
        if (!hasValue) {
          hasValue = true;
          remainingEmissions--;
        }

        values[sourceIndex] = value;
      }, function () {
        return remainingCompletions--;
      }, undefined, function () {
        if (!remainingCompletions || !hasValue) {
          if (!remainingEmissions) {
            subscriber.next(keys ? createObject_1.createObject(keys, values) : values);
          }

          subscriber.complete();
        }
      }));
    };

    for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) {
      _loop_1(sourceIndex);
    }
  });
  return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
}

exports.forkJoin = forkJoin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQTJJQSxTQUFnQkEsUUFBaEIsR0FBd0I7RUFBQzs7T0FBQSx5Q0FBYztJQUFkQzs7O0VBQ3ZCLElBQU1DLGNBQWMsR0FBR0MseUJBQWtCRixJQUFsQixDQUF2Qjs7RUFDTSxTQUEwQkcsNENBQXFCSCxJQUFyQixDQUExQjtFQUFBLElBQVFJLE9BQU8sVUFBZjtFQUFBLElBQWlCQyxJQUFJLFVBQXJCOztFQUNOLElBQU1DLE1BQU0sR0FBRyxJQUFJQyx1QkFBSixDQUFlLFVBQUNDLFVBQUQsRUFBVztJQUMvQixVQUFNLEdBQUtKLE9BQU8sT0FBbEI7O0lBQ1IsSUFBSSxDQUFDSyxNQUFMLEVBQWE7TUFDWEQsVUFBVSxDQUFDRSxRQUFYO01BQ0E7SUFDRDs7SUFDRCxJQUFNQyxNQUFNLEdBQUcsSUFBSUMsS0FBSixDQUFVSCxNQUFWLENBQWY7SUFDQSxJQUFJSSxvQkFBb0IsR0FBR0osTUFBM0I7SUFDQSxJQUFJSyxrQkFBa0IsR0FBR0wsTUFBekI7O21DQUNTTSxhQUFXO01BQ2xCLElBQUlDLFFBQVEsR0FBRyxLQUFmO01BQ0FDLHNCQUFVYixPQUFPLENBQUNXLFdBQUQsQ0FBakIsRUFBZ0NHLFNBQWhDLENBQ0VDLDhDQUNFWCxVQURGLEVBRUUsVUFBQ1ksS0FBRCxFQUFNO1FBQ0osSUFBSSxDQUFDSixRQUFMLEVBQWU7VUFDYkEsUUFBUSxHQUFHLElBQVg7VUFDQUYsa0JBQWtCO1FBQ25COztRQUNESCxNQUFNLENBQUNJLFdBQUQsQ0FBTixHQUFzQkssS0FBdEI7TUFDRCxDQVJILEVBU0U7UUFBTSwyQkFBb0IsRUFBcEI7TUFBc0IsQ0FUOUIsRUFVRUMsU0FWRixFQVdFO1FBQ0UsSUFBSSxDQUFDUixvQkFBRCxJQUF5QixDQUFDRyxRQUE5QixFQUF3QztVQUN0QyxJQUFJLENBQUNGLGtCQUFMLEVBQXlCO1lBQ3ZCTixVQUFVLENBQUNjLElBQVgsQ0FBZ0JqQixJQUFJLEdBQUdrQiw0QkFBYWxCLElBQWIsRUFBbUJNLE1BQW5CLENBQUgsR0FBZ0NBLE1BQXBEO1VBQ0Q7O1VBQ0RILFVBQVUsQ0FBQ0UsUUFBWDtRQUNEO01BQ0YsQ0FsQkgsQ0FERjs7O0lBRkYsS0FBSyxJQUFJSyxXQUFXLEdBQUcsQ0FBdkIsRUFBMEJBLFdBQVcsR0FBR04sTUFBeEMsRUFBZ0RNLFdBQVcsRUFBM0QsRUFBNkQ7Y0FBcERBO0lBd0JSO0VBQ0YsQ0FsQ2MsQ0FBZjtFQW1DQSxPQUFPZCxjQUFjLEdBQUdLLE1BQU0sQ0FBQ2tCLElBQVAsQ0FBWUMsb0NBQWlCeEIsY0FBakIsQ0FBWixDQUFILEdBQW1ESyxNQUF4RTtBQUNEOztBQXZDRG9CIiwibmFtZXMiOlsiZm9ya0pvaW4iLCJhcmdzIiwicmVzdWx0U2VsZWN0b3IiLCJhcmdzXzEiLCJhcmdzQXJnQXJyYXlPck9iamVjdF8xIiwic291cmNlcyIsImtleXMiLCJyZXN1bHQiLCJPYnNlcnZhYmxlXzEiLCJzdWJzY3JpYmVyIiwibGVuZ3RoIiwiY29tcGxldGUiLCJ2YWx1ZXMiLCJBcnJheSIsInJlbWFpbmluZ0NvbXBsZXRpb25zIiwicmVtYWluaW5nRW1pc3Npb25zIiwic291cmNlSW5kZXgiLCJoYXNWYWx1ZSIsImlubmVyRnJvbV8xIiwic3Vic2NyaWJlIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsIm5leHQiLCJjcmVhdGVPYmplY3RfMSIsInBpcGUiLCJtYXBPbmVPck1hbnlBcmdzXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2ZvcmtKb2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../Observable":8,"../operators/OperatorSubscriber":48,"../util/args":200,"../util/argsArgArrayOrObject":201,"../util/createObject":205,"../util/mapOneOrManyArgs":220,"./innerFrom":34}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.from = void 0;

var scheduled_1 = require("../scheduled/scheduled");

var innerFrom_1 = require("./innerFrom");

function from(input, scheduler) {
  return scheduler ? scheduled_1.scheduled(input, scheduler) : innerFrom_1.innerFrom(input);
}

exports.from = from;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQWtHQSxTQUFnQkEsSUFBaEIsQ0FBd0JDLEtBQXhCLEVBQW1EQyxTQUFuRCxFQUE0RTtFQUMxRSxPQUFPQSxTQUFTLEdBQUdDLHNCQUFVRixLQUFWLEVBQWlCQyxTQUFqQixDQUFILEdBQWlDRSxzQkFBVUgsS0FBVixDQUFqRDtBQUNEOztBQUZESSIsIm5hbWVzIjpbImZyb20iLCJpbnB1dCIsInNjaGVkdWxlciIsInNjaGVkdWxlZF8xIiwiaW5uZXJGcm9tXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb20udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../scheduled/scheduled":169,"./innerFrom":34}],29:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEvent = void 0;

var innerFrom_1 = require("../observable/innerFrom");

var Observable_1 = require("../Observable");

var mergeMap_1 = require("../operators/mergeMap");

var isArrayLike_1 = require("../util/isArrayLike");

var isFunction_1 = require("../util/isFunction");

var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");

var nodeEventEmitterMethods = ['addListener', 'removeListener'];
var eventTargetMethods = ['addEventListener', 'removeEventListener'];
var jqueryMethods = ['on', 'off'];

function fromEvent(target, eventName, options, resultSelector) {
  if (isFunction_1.isFunction(options)) {
    resultSelector = options;
    options = undefined;
  }

  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
  }

  var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function (methodName) {
    return function (handler) {
      return target[methodName](eventName, handler, options);
    };
  }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2),
      add = _a[0],
      remove = _a[1];

  if (!add) {
    if (isArrayLike_1.isArrayLike(target)) {
      return mergeMap_1.mergeMap(function (subTarget) {
        return fromEvent(subTarget, eventName, options);
      })(innerFrom_1.innerFrom(target));
    }
  }

  if (!add) {
    throw new TypeError('Invalid event target');
  }

  return new Observable_1.Observable(function (subscriber) {
    var handler = function handler() {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return subscriber.next(1 < args.length ? args : args[0]);
    };

    add(handler);
    return function () {
      return remove(handler);
    };
  });
}

exports.fromEvent = fromEvent;

function toCommonHandlerRegistry(target, eventName) {
  return function (methodName) {
    return function (handler) {
      return target[methodName](eventName, handler);
    };
  };
}

function isNodeStyleEventEmitter(target) {
  return isFunction_1.isFunction(target.addListener) && isFunction_1.isFunction(target.removeListener);
}

function isJQueryStyleEventEmitter(target) {
  return isFunction_1.isFunction(target.on) && isFunction_1.isFunction(target.off);
}

function isEventTarget(target) {
  return isFunction_1.isFunction(target.addEventListener) && isFunction_1.isFunction(target.removeEventListener);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU9JLHdCQUFXSixNQUFNLENBQUM0QixXQUFsQixLQUFrQ3hCLHdCQUFXSixNQUFNLENBQUM2QixjQUFsQixDQUF6QztBQUNEOztBQU9ELFNBQVNmLHlCQUFULENBQW1DZCxNQUFuQyxFQUE4QztFQUM1QyxPQUFPSSx3QkFBV0osTUFBTSxDQUFDOEIsRUFBbEIsS0FBeUIxQix3QkFBV0osTUFBTSxDQUFDK0IsR0FBbEIsQ0FBaEM7QUFDRDs7QUFPRCxTQUFTdkIsYUFBVCxDQUF1QlIsTUFBdkIsRUFBa0M7RUFDaEMsT0FBT0ksd0JBQVdKLE1BQU0sQ0FBQ2dDLGdCQUFsQixLQUF1QzVCLHdCQUFXSixNQUFNLENBQUNpQyxtQkFBbEIsQ0FBOUM7QUFDRCIsIm5hbWVzIjpbIm5vZGVFdmVudEVtaXR0ZXJNZXRob2RzIiwiZXZlbnRUYXJnZXRNZXRob2RzIiwianF1ZXJ5TWV0aG9kcyIsImZyb21FdmVudCIsInRhcmdldCIsImV2ZW50TmFtZSIsIm9wdGlvbnMiLCJyZXN1bHRTZWxlY3RvciIsImlzRnVuY3Rpb25fMSIsInVuZGVmaW5lZCIsInBpcGUiLCJtYXBPbmVPck1hbnlBcmdzXzEiLCJpc0V2ZW50VGFyZ2V0IiwibWFwIiwibWV0aG9kTmFtZSIsImhhbmRsZXIiLCJpc05vZGVTdHlsZUV2ZW50RW1pdHRlciIsInRvQ29tbW9uSGFuZGxlclJlZ2lzdHJ5IiwiaXNKUXVlcnlTdHlsZUV2ZW50RW1pdHRlciIsImFkZCIsInJlbW92ZSIsImlzQXJyYXlMaWtlXzEiLCJtZXJnZU1hcF8xIiwic3ViVGFyZ2V0IiwiaW5uZXJGcm9tXzEiLCJUeXBlRXJyb3IiLCJPYnNlcnZhYmxlXzEiLCJzdWJzY3JpYmVyIiwiYXJncyIsIm5leHQiLCJsZW5ndGgiLCJleHBvcnRzIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsIm9uIiwib2ZmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvZnJvbUV2ZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../Observable":8,"../observable/innerFrom":34,"../operators/mergeMap":102,"../util/isArrayLike":209,"../util/isFunction":212,"../util/mapOneOrManyArgs":220}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEventPattern = void 0;

var Observable_1 = require("../Observable");

var isFunction_1 = require("../util/isFunction");

var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");

function fromEventPattern(addHandler, removeHandler, resultSelector) {
  if (resultSelector) {
    return fromEventPattern(addHandler, removeHandler).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
  }

  return new Observable_1.Observable(function (subscriber) {
    var handler = function handler() {
      var e = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
      }

      return subscriber.next(e.length === 1 ? e[0] : e);
    };

    var retValue = addHandler(handler);
    return isFunction_1.isFunction(removeHandler) ? function () {
      return removeHandler(handler, retValue);
    } : undefined;
  });
}

exports.fromEventPattern = fromEventPattern;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQXlJQSxTQUFnQkEsZ0JBQWhCLENBQ0VDLFVBREYsRUFFRUMsYUFGRixFQUdFQyxjQUhGLEVBR3dDO0VBRXRDLElBQUlBLGNBQUosRUFBb0I7SUFDbEIsT0FBT0gsZ0JBQWdCLENBQUlDLFVBQUosRUFBZ0JDLGFBQWhCLENBQWhCLENBQStDRSxJQUEvQyxDQUFvREMsb0NBQWlCRixjQUFqQixDQUFwRCxDQUFQO0VBQ0Q7O0VBRUQsT0FBTyxJQUFJRyx1QkFBSixDQUF3QixVQUFDQyxVQUFELEVBQVc7SUFDeEMsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7TUFBQzs7V0FBQSx5Q0FBUztRQUFUQzs7O01BQWMsaUJBQVUsQ0FBQ0MsSUFBWCxDQUFnQkQsQ0FBQyxDQUFDRSxNQUFGLEtBQWEsQ0FBYixHQUFpQkYsQ0FBQyxDQUFDLENBQUQsQ0FBbEIsR0FBd0JBLENBQXhDO0lBQTBDLENBQXpFOztJQUNBLElBQU1HLFFBQVEsR0FBR1gsVUFBVSxDQUFDTyxPQUFELENBQTNCO0lBQ0EsT0FBT0ssd0JBQVdYLGFBQVgsSUFBNEI7TUFBTSxvQkFBYSxDQUFDTSxPQUFELEVBQVVJLFFBQVYsQ0FBYjtJQUFnQyxDQUFsRSxHQUFxRUUsU0FBNUU7RUFDRCxDQUpNLENBQVA7QUFLRDs7QUFkREMiLCJuYW1lcyI6WyJmcm9tRXZlbnRQYXR0ZXJuIiwiYWRkSGFuZGxlciIsInJlbW92ZUhhbmRsZXIiLCJyZXN1bHRTZWxlY3RvciIsInBpcGUiLCJtYXBPbmVPck1hbnlBcmdzXzEiLCJPYnNlcnZhYmxlXzEiLCJzdWJzY3JpYmVyIiwiaGFuZGxlciIsImUiLCJuZXh0IiwibGVuZ3RoIiwicmV0VmFsdWUiLCJpc0Z1bmN0aW9uXzEiLCJ1bmRlZmluZWQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb21FdmVudFBhdHRlcm4udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../Observable":8,"../util/isFunction":212,"../util/mapOneOrManyArgs":220}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromSubscribable = void 0;

var Observable_1 = require("../Observable");

function fromSubscribable(subscribable) {
  return new Observable_1.Observable(function (subscriber) {
    return subscribable.subscribe(subscriber);
  });
}

exports.fromSubscribable = fromSubscribable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQWNBLFNBQWdCQSxnQkFBaEIsQ0FBb0NDLFlBQXBDLEVBQWlFO0VBQy9ELE9BQU8sSUFBSUMsdUJBQUosQ0FBZSxVQUFDQyxVQUFELEVBQTBCO0lBQUssbUJBQVksQ0FBQ0MsU0FBYixDQUF1QkQsVUFBdkI7RUFBa0MsQ0FBaEYsQ0FBUDtBQUNEOztBQUZERSIsIm5hbWVzIjpbImZyb21TdWJzY3JpYmFibGUiLCJzdWJzY3JpYmFibGUiLCJPYnNlcnZhYmxlXzEiLCJzdWJzY3JpYmVyIiwic3Vic2NyaWJlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9mcm9tU3Vic2NyaWJhYmxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../Observable":8}],32:[function(require,module,exports){
"use strict";

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate = void 0;

var identity_1 = require("../util/identity");

var isScheduler_1 = require("../util/isScheduler");

var defer_1 = require("./defer");

var scheduleIterable_1 = require("../scheduled/scheduleIterable");

function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
  var _a, _b;

  var resultSelector;
  var initialState;

  if (arguments.length === 1) {
    _a = initialStateOrOptions, initialState = _a.initialState, condition = _a.condition, iterate = _a.iterate, _b = _a.resultSelector, resultSelector = _b === void 0 ? identity_1.identity : _b, scheduler = _a.scheduler;
  } else {
    initialState = initialStateOrOptions;

    if (!resultSelectorOrScheduler || isScheduler_1.isScheduler(resultSelectorOrScheduler)) {
      resultSelector = identity_1.identity;
      scheduler = resultSelectorOrScheduler;
    } else {
      resultSelector = resultSelectorOrScheduler;
    }
  }

  function gen() {
    var state;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          state = initialState;
          _a.label = 1;

        case 1:
          if (!(!condition || condition(state))) return [3, 4];
          return [4, resultSelector(state)];

        case 2:
          _a.sent();

          _a.label = 3;

        case 3:
          state = iterate(state);
          return [3, 1];

        case 4:
          return [2];
      }
    });
  }

  return defer_1.defer(scheduler ? function () {
    return scheduleIterable_1.scheduleIterable(gen(), scheduler);
  } : gen);
}

exports.generate = generate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQXVVQSxTQUFnQkEsUUFBaEIsQ0FDRUMscUJBREYsRUFFRUMsU0FGRixFQUdFQyxPQUhGLEVBSUVDLHlCQUpGLEVBS0VDLFNBTEYsRUFLMkI7OztFQUV6QixJQUFJQyxjQUFKO0VBQ0EsSUFBSUMsWUFBSjs7RUFJQSxJQUFJQyxTQUFTLENBQUNDLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7SUFHekJDLEtBTUdULHFCQU5ILEVBQ0NNLFlBQVksa0JBRGIsRUFFQ0wsU0FBUyxlQUZWLEVBR0NDLE9BQU8sYUFIUixFQUlDUSxzQkFKRCxFQUlDTCxjQUFjLG1CQUFHTSxtQkFBSCxHQUErQkQsRUFKOUMsRUFLQ04sU0FBUyxlQUxYO0VBT0QsQ0FWRCxNQVVPO0lBR0xFLFlBQVksR0FBR04scUJBQWY7O0lBQ0EsSUFBSSxDQUFDRyx5QkFBRCxJQUE4QlMsMEJBQVlULHlCQUFaLENBQWxDLEVBQTBFO01BQ3hFRSxjQUFjLEdBQUdNLG1CQUFqQjtNQUNBUCxTQUFTLEdBQUdELHlCQUFaO0lBQ0QsQ0FIRCxNQUdPO01BQ0xFLGNBQWMsR0FBR0YseUJBQWpCO0lBQ0Q7RUFDRjs7RUFHRCxTQUFVVSxHQUFWLEdBQWE7Ozs7O1VBQ0ZDLEtBQUssR0FBR1IsWUFBUjs7OztnQkFBc0IsQ0FBQ0wsU0FBRCxJQUFjQSxTQUFTLENBQUNhLEtBQUQsSUFBTztVQUMzRCxXQUFNVCxjQUFjLENBQUNTLEtBQUQsQ0FBcEI7OztVQUFBTDs7Ozs7VUFENkRLLEtBQUssR0FBR1osT0FBUSxDQUFDWSxLQUFELENBQWhCOzs7Ozs7O0VBR2hFOztFQUdELE9BQU9DLGNBQ0pYLFNBQVMsR0FHTjtJQUFNLDJDQUFpQlMsR0FBRyxFQUFwQixFQUF3QlQsU0FBeEI7RUFBbUMsQ0FIbkMsR0FNTlMsR0FQQyxDQUFQO0FBU0Q7O0FBbkRERyIsIm5hbWVzIjpbImdlbmVyYXRlIiwiaW5pdGlhbFN0YXRlT3JPcHRpb25zIiwiY29uZGl0aW9uIiwiaXRlcmF0ZSIsInJlc3VsdFNlbGVjdG9yT3JTY2hlZHVsZXIiLCJzY2hlZHVsZXIiLCJyZXN1bHRTZWxlY3RvciIsImluaXRpYWxTdGF0ZSIsImFyZ3VtZW50cyIsImxlbmd0aCIsIl9hIiwiX2IiLCJpZGVudGl0eV8xIiwiaXNTY2hlZHVsZXJfMSIsImdlbiIsInN0YXRlIiwiZGVmZXJfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvZ2VuZXJhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../scheduled/scheduleIterable":165,"../util/identity":208,"../util/isScheduler":218,"./defer":24}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iif = void 0;

var defer_1 = require("./defer");

function iif(condition, trueResult, falseResult) {
  return defer_1.defer(function () {
    return condition() ? trueResult : falseResult;
  });
}

exports.iif = iif;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQWlGQSxTQUFnQkEsR0FBaEIsQ0FBMEJDLFNBQTFCLEVBQW9EQyxVQUFwRCxFQUFvRkMsV0FBcEYsRUFBbUg7RUFDakgsT0FBT0MsY0FBTTtJQUFNLE9BQUNILFNBQVMsS0FBS0MsVUFBTCxHQUFrQkMsV0FBNUI7RUFBd0MsQ0FBcEQsQ0FBUDtBQUNEOztBQUZERSIsIm5hbWVzIjpbImlpZiIsImNvbmRpdGlvbiIsInRydWVSZXN1bHQiLCJmYWxzZVJlc3VsdCIsImRlZmVyXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2lpZi50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./defer":24}],34:[function(require,module,exports){
"use strict";

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __asyncValues = void 0 && (void 0).__asyncValues || function (o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
};

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromReadableStreamLike = exports.fromAsyncIterable = exports.fromIterable = exports.fromPromise = exports.fromArrayLike = exports.fromInteropObservable = exports.innerFrom = void 0;

var isArrayLike_1 = require("../util/isArrayLike");

var isPromise_1 = require("../util/isPromise");

var Observable_1 = require("../Observable");

var isInteropObservable_1 = require("../util/isInteropObservable");

var isAsyncIterable_1 = require("../util/isAsyncIterable");

var throwUnobservableError_1 = require("../util/throwUnobservableError");

var isIterable_1 = require("../util/isIterable");

var isReadableStreamLike_1 = require("../util/isReadableStreamLike");

var isFunction_1 = require("../util/isFunction");

var reportUnhandledError_1 = require("../util/reportUnhandledError");

var observable_1 = require("../symbol/observable");

function innerFrom(input) {
  if (input instanceof Observable_1.Observable) {
    return input;
  }

  if (input != null) {
    if (isInteropObservable_1.isInteropObservable(input)) {
      return fromInteropObservable(input);
    }

    if (isArrayLike_1.isArrayLike(input)) {
      return fromArrayLike(input);
    }

    if (isPromise_1.isPromise(input)) {
      return fromPromise(input);
    }

    if (isAsyncIterable_1.isAsyncIterable(input)) {
      return fromAsyncIterable(input);
    }

    if (isIterable_1.isIterable(input)) {
      return fromIterable(input);
    }

    if (isReadableStreamLike_1.isReadableStreamLike(input)) {
      return fromReadableStreamLike(input);
    }
  }

  throw throwUnobservableError_1.createInvalidObservableTypeError(input);
}

exports.innerFrom = innerFrom;

function fromInteropObservable(obj) {
  return new Observable_1.Observable(function (subscriber) {
    var obs = obj[observable_1.observable]();

    if (isFunction_1.isFunction(obs.subscribe)) {
      return obs.subscribe(subscriber);
    }

    throw new TypeError('Provided object does not correctly implement Symbol.observable');
  });
}

exports.fromInteropObservable = fromInteropObservable;

function fromArrayLike(array) {
  return new Observable_1.Observable(function (subscriber) {
    for (var i = 0; i < array.length && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }

    subscriber.complete();
  });
}

exports.fromArrayLike = fromArrayLike;

function fromPromise(promise) {
  return new Observable_1.Observable(function (subscriber) {
    promise.then(function (value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function (err) {
      return subscriber.error(err);
    }).then(null, reportUnhandledError_1.reportUnhandledError);
  });
}

exports.fromPromise = fromPromise;

function fromIterable(iterable) {
  return new Observable_1.Observable(function (subscriber) {
    var e_1, _a;

    try {
      for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
        var value = iterable_1_1.value;
        subscriber.next(value);

        if (subscriber.closed) {
          return;
        }
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1["return"])) _a.call(iterable_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    subscriber.complete();
  });
}

exports.fromIterable = fromIterable;

function fromAsyncIterable(asyncIterable) {
  return new Observable_1.Observable(function (subscriber) {
    process(asyncIterable, subscriber)["catch"](function (err) {
      return subscriber.error(err);
    });
  });
}

exports.fromAsyncIterable = fromAsyncIterable;

function fromReadableStreamLike(readableStream) {
  return fromAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(readableStream));
}

exports.fromReadableStreamLike = fromReadableStreamLike;

function process(asyncIterable, subscriber) {
  var asyncIterable_1, asyncIterable_1_1;

  var e_2, _a;

  return __awaiter(this, void 0, void 0, function () {
    var value, e_2_1;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _b.trys.push([0, 5, 6, 11]);

          asyncIterable_1 = __asyncValues(asyncIterable);
          _b.label = 1;

        case 1:
          return [4, asyncIterable_1.next()];

        case 2:
          if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
          value = asyncIterable_1_1.value;
          subscriber.next(value);

          if (subscriber.closed) {
            return [2];
          }

          _b.label = 3;

        case 3:
          return [3, 1];

        case 4:
          return [3, 11];

        case 5:
          e_2_1 = _b.sent();
          e_2 = {
            error: e_2_1
          };
          return [3, 11];

        case 6:
          _b.trys.push([6,, 9, 10]);

          if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1["return"]))) return [3, 8];
          return [4, _a.call(asyncIterable_1)];

        case 7:
          _b.sent();

          _b.label = 8;

        case 8:
          return [3, 10];

        case 9:
          if (e_2) throw e_2.error;
          return [7];

        case 10:
          return [7];

        case 11:
          subscriber.complete();
          return [2];
      }
    });
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxNQUFmLEVBQXVCO1lBQ3JCO1VBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUVIVCxVQUFVLENBQUNXLFFBQVg7Ozs7O0FBQ0QiLCJuYW1lcyI6WyJpbm5lckZyb20iLCJpbnB1dCIsIk9ic2VydmFibGVfMSIsImlzSW50ZXJvcE9ic2VydmFibGVfMSIsImZyb21JbnRlcm9wT2JzZXJ2YWJsZSIsImlzQXJyYXlMaWtlXzEiLCJmcm9tQXJyYXlMaWtlIiwiaXNQcm9taXNlXzEiLCJmcm9tUHJvbWlzZSIsImlzQXN5bmNJdGVyYWJsZV8xIiwiZnJvbUFzeW5jSXRlcmFibGUiLCJpc0l0ZXJhYmxlXzEiLCJmcm9tSXRlcmFibGUiLCJpc1JlYWRhYmxlU3RyZWFtTGlrZV8xIiwiZnJvbVJlYWRhYmxlU3RyZWFtTGlrZSIsInRocm93VW5vYnNlcnZhYmxlRXJyb3JfMSIsImV4cG9ydHMiLCJvYmoiLCJzdWJzY3JpYmVyIiwib2JzIiwib2JzZXJ2YWJsZV8xIiwiaXNGdW5jdGlvbl8xIiwic3Vic2NyaWJlIiwiVHlwZUVycm9yIiwiYXJyYXkiLCJpIiwibGVuZ3RoIiwiY2xvc2VkIiwibmV4dCIsImNvbXBsZXRlIiwicHJvbWlzZSIsInRoZW4iLCJ2YWx1ZSIsImVyciIsImVycm9yIiwicmVwb3J0VW5oYW5kbGVkRXJyb3JfMSIsIml0ZXJhYmxlIiwiaXRlcmFibGVfMV8xIiwiYXN5bmNJdGVyYWJsZSIsInByb2Nlc3MiLCJyZWFkYWJsZVN0cmVhbSIsImFzeW5jSXRlcmFibGVfMSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9pbm5lckZyb20udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../Observable":8,"../symbol/observable":191,"../util/isArrayLike":209,"../util/isAsyncIterable":210,"../util/isFunction":212,"../util/isInteropObservable":213,"../util/isIterable":214,"../util/isPromise":216,"../util/isReadableStreamLike":217,"../util/reportUnhandledError":224,"../util/throwUnobservableError":225}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interval = void 0;

var async_1 = require("../scheduler/async");

var timer_1 = require("./timer");

function interval(period, scheduler) {
  if (period === void 0) {
    period = 0;
  }

  if (scheduler === void 0) {
    scheduler = async_1.asyncScheduler;
  }

  if (period < 0) {
    period = 0;
  }

  return timer_1.timer(period, period, scheduler);
}

exports.interval = interval;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUVBOztBQStDQSxTQUFnQkEsUUFBaEIsQ0FBeUJDLE1BQXpCLEVBQXFDQyxTQUFyQyxFQUE4RTtFQUFyRDtJQUFBRDtFQUFVOztFQUFFO0lBQUFDLFlBQTJCQyxzQkFBM0I7RUFBeUM7O0VBQzVFLElBQUlGLE1BQU0sR0FBRyxDQUFiLEVBQWdCO0lBRWRBLE1BQU0sR0FBRyxDQUFUO0VBQ0Q7O0VBRUQsT0FBT0csY0FBTUgsTUFBTixFQUFjQSxNQUFkLEVBQXNCQyxTQUF0QixDQUFQO0FBQ0Q7O0FBUERHIiwibmFtZXMiOlsiaW50ZXJ2YWwiLCJwZXJpb2QiLCJzY2hlZHVsZXIiLCJhc3luY18xIiwidGltZXJfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvaW50ZXJ2YWwudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../scheduler/async":183,"./timer":45}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = void 0;

var mergeAll_1 = require("../operators/mergeAll");

var innerFrom_1 = require("./innerFrom");

var empty_1 = require("./empty");

var args_1 = require("../util/args");

var from_1 = require("./from");

function merge() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var scheduler = args_1.popScheduler(args);
  var concurrent = args_1.popNumber(args, Infinity);
  var sources = args;
  return !sources.length ? empty_1.EMPTY : sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : mergeAll_1.mergeAll(concurrent)(from_1.from(sources, scheduler));
}

exports.merge = merge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQW1GQSxTQUFnQkEsS0FBaEIsR0FBcUI7RUFBQzs7T0FBQSx5Q0FBOEQ7SUFBOURDOzs7RUFDcEIsSUFBTUMsU0FBUyxHQUFHQyxvQkFBYUYsSUFBYixDQUFsQjtFQUNBLElBQU1HLFVBQVUsR0FBR0QsaUJBQVVGLElBQVYsRUFBZ0JJLFFBQWhCLENBQW5CO0VBQ0EsSUFBTUMsT0FBTyxHQUFHTCxJQUFoQjtFQUNBLE9BQU8sQ0FBQ0ssT0FBTyxDQUFDQyxNQUFULEdBRUhDLGFBRkcsR0FHSEYsT0FBTyxDQUFDQyxNQUFSLEtBQW1CLENBQW5CLEdBRUFFLHNCQUFVSCxPQUFPLENBQUMsQ0FBRCxDQUFqQixDQUZBLEdBSUFJLG9CQUFTTixVQUFULEVBQXFCTyxZQUFLTCxPQUFMLEVBQWNKLFNBQWQsQ0FBckIsQ0FQSjtBQVFEOztBQVpEVSIsIm5hbWVzIjpbIm1lcmdlIiwiYXJncyIsInNjaGVkdWxlciIsImFyZ3NfMSIsImNvbmN1cnJlbnQiLCJJbmZpbml0eSIsInNvdXJjZXMiLCJsZW5ndGgiLCJlbXB0eV8xIiwiaW5uZXJGcm9tXzEiLCJtZXJnZUFsbF8xIiwiZnJvbV8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9tZXJnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../operators/mergeAll":100,"../util/args":200,"./empty":26,"./from":28,"./innerFrom":34}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.never = exports.NEVER = void 0;

var Observable_1 = require("../Observable");

var noop_1 = require("../util/noop");

exports.NEVER = new Observable_1.Observable(noop_1.noop);

function never() {
  return exports.NEVER;
}

exports.never = never;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQW1DYUEsZ0JBQVEsSUFBSUMsdUJBQUosQ0FBc0JDLFdBQXRCLENBQVI7O0FBS2IsU0FBZ0JDLEtBQWhCLEdBQXFCO0VBQ25CLE9BQU9ILGFBQVA7QUFDRDs7QUFGREEiLCJuYW1lcyI6WyJleHBvcnRzIiwiT2JzZXJ2YWJsZV8xIiwibm9vcF8xIiwibmV2ZXIiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvbmV2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../Observable":8,"../util/noop":221}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.of = void 0;

var args_1 = require("../util/args");

var from_1 = require("./from");

function of() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var scheduler = args_1.popScheduler(args);
  return from_1.from(args, scheduler);
}

exports.of = of;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQTRFQSxTQUFnQkEsRUFBaEIsR0FBa0I7RUFBSTs7T0FBQSx5Q0FBaUM7SUFBakNDOzs7RUFDcEIsSUFBTUMsU0FBUyxHQUFHQyxvQkFBYUYsSUFBYixDQUFsQjtFQUNBLE9BQU9HLFlBQUtILElBQUwsRUFBa0JDLFNBQWxCLENBQVA7QUFDRDs7QUFIREciLCJuYW1lcyI6WyJvZiIsImFyZ3MiLCJzY2hlZHVsZXIiLCJhcmdzXzEiLCJmcm9tXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL29mLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/args":200,"./from":28}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onErrorResumeNext = void 0;

var empty_1 = require("./empty");

var onErrorResumeNext_1 = require("../operators/onErrorResumeNext");

var argsOrArgArray_1 = require("../util/argsOrArgArray");

function onErrorResumeNext() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  return onErrorResumeNext_1.onErrorResumeNext(argsOrArgArray_1.argsOrArgArray(sources))(empty_1.EMPTY);
}

exports.onErrorResumeNext = onErrorResumeNext;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQXNFQSxTQUFnQkEsaUJBQWhCLEdBQWlDO0VBQy9COztPQUFBLHlDQUF5RTtJQUF6RUM7OztFQUVBLE9BQU9DLHNDQUFzQkMsZ0NBQWVGLE9BQWYsQ0FBdEIsRUFBK0NHLGFBQS9DLENBQVA7QUFDRDs7QUFKREMiLCJuYW1lcyI6WyJvbkVycm9yUmVzdW1lTmV4dCIsInNvdXJjZXMiLCJvbkVycm9yUmVzdW1lTmV4dF8xIiwiYXJnc09yQXJnQXJyYXlfMSIsImVtcHR5XzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL29uRXJyb3JSZXN1bWVOZXh0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../operators/onErrorResumeNext":109,"../util/argsOrArgArray":202,"./empty":26}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pairs = void 0;

var from_1 = require("./from");

function pairs(obj, scheduler) {
  return from_1.from(Object.entries(obj), scheduler);
}

exports.pairs = pairs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQTZFQSxTQUFnQkEsS0FBaEIsQ0FBc0JDLEdBQXRCLEVBQWdDQyxTQUFoQyxFQUF5RDtFQUN2RCxPQUFPQyxZQUFLQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUosR0FBZixDQUFMLEVBQTBCQyxTQUExQixDQUFQO0FBQ0Q7O0FBRkRJIiwibmFtZXMiOlsicGFpcnMiLCJvYmoiLCJzY2hlZHVsZXIiLCJmcm9tXzEiLCJPYmplY3QiLCJlbnRyaWVzIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9wYWlycy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./from":28}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partition = void 0;

var not_1 = require("../util/not");

var filter_1 = require("../operators/filter");

var innerFrom_1 = require("./innerFrom");

function partition(source, predicate, thisArg) {
  return [filter_1.filter(predicate, thisArg)(innerFrom_1.innerFrom(source)), filter_1.filter(not_1.not(predicate, thisArg))(innerFrom_1.innerFrom(source))];
}

exports.partition = partition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUdBOztBQTBFQSxTQUFnQkEsU0FBaEIsQ0FDRUMsTUFERixFQUVFQyxTQUZGLEVBR0VDLE9BSEYsRUFHZTtFQUViLE9BQU8sQ0FBQ0MsZ0JBQU9GLFNBQVAsRUFBa0JDLE9BQWxCLEVBQTJCRSxzQkFBVUosTUFBVixDQUEzQixDQUFELEVBQWdERyxnQkFBT0UsVUFBSUosU0FBSixFQUFlQyxPQUFmLENBQVAsRUFBZ0NFLHNCQUFVSixNQUFWLENBQWhDLENBQWhELENBQVA7QUFJRDs7QUFURE0iLCJuYW1lcyI6WyJwYXJ0aXRpb24iLCJzb3VyY2UiLCJwcmVkaWNhdGUiLCJ0aGlzQXJnIiwiZmlsdGVyXzEiLCJpbm5lckZyb21fMSIsIm5vdF8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9wYXJ0aXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../operators/filter":84,"../util/not":222,"./innerFrom":34}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raceInit = exports.race = void 0;

var Observable_1 = require("../Observable");

var innerFrom_1 = require("./innerFrom");

var argsOrArgArray_1 = require("../util/argsOrArgArray");

var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");

function race() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  sources = argsOrArgArray_1.argsOrArgArray(sources);
  return sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : new Observable_1.Observable(raceInit(sources));
}

exports.race = race;

function raceInit(sources) {
  return function (subscriber) {
    var subscriptions = [];

    var _loop_1 = function _loop_1(i) {
      subscriptions.push(innerFrom_1.innerFrom(sources[i]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
        if (subscriptions) {
          for (var s = 0; s < subscriptions.length; s++) {
            s !== i && subscriptions[s].unsubscribe();
          }

          subscriptions = null;
        }

        subscriber.next(value);
      })));
    };

    for (var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) {
      _loop_1(i);
    }
  };
}

exports.raceInit = raceInit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUdBOztBQUNBOztBQTZDQSxTQUFnQkEsSUFBaEIsR0FBb0I7RUFBSTs7T0FBQSx5Q0FBeUQ7SUFBekRDOzs7RUFDdEJBLE9BQU8sR0FBR0MsZ0NBQWVELE9BQWYsQ0FBVjtFQUVBLE9BQU9BLE9BQU8sQ0FBQ0UsTUFBUixLQUFtQixDQUFuQixHQUF1QkMsc0JBQVVILE9BQU8sQ0FBQyxDQUFELENBQWpCLENBQXZCLEdBQXFFLElBQUlJLHVCQUFKLENBQWtCQyxRQUFRLENBQUNMLE9BQUQsQ0FBMUIsQ0FBNUU7QUFDRDs7QUFKRE07O0FBV0EsU0FBZ0JELFFBQWhCLENBQTRCTCxPQUE1QixFQUF5RDtFQUN2RCxPQUFPLFVBQUNPLFVBQUQsRUFBMEI7SUFDL0IsSUFBSUMsYUFBYSxHQUFtQixFQUFwQzs7bUNBTVNDLEdBQUM7TUFDUkQsYUFBYSxDQUFDRSxJQUFkLENBQ0VQLHNCQUFVSCxPQUFPLENBQUNTLENBQUQsQ0FBakIsRUFBNENFLFNBQTVDLENBQ0VDLDhDQUF5QkwsVUFBekIsRUFBcUMsVUFBQ00sS0FBRCxFQUFNO1FBQ3pDLElBQUlMLGFBQUosRUFBbUI7VUFHakIsS0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixhQUFhLENBQUNOLE1BQWxDLEVBQTBDWSxDQUFDLEVBQTNDLEVBQStDO1lBQzdDQSxDQUFDLEtBQUtMLENBQU4sSUFBV0QsYUFBYSxDQUFDTSxDQUFELENBQWIsQ0FBaUJDLFdBQWpCLEVBQVg7VUFDRDs7VUFDRFAsYUFBYSxHQUFHLElBQWhCO1FBQ0Q7O1FBQ0RELFVBQVUsQ0FBQ1MsSUFBWCxDQUFnQkgsS0FBaEI7TUFDRCxDQVZELENBREYsQ0FERjs7O0lBREYsS0FBSyxJQUFJSixDQUFDLEdBQUcsQ0FBYixFQUFnQkQsYUFBYSxJQUFJLENBQUNELFVBQVUsQ0FBQ1UsTUFBN0IsSUFBdUNSLENBQUMsR0FBR1QsT0FBTyxDQUFDRSxNQUFuRSxFQUEyRU8sQ0FBQyxFQUE1RSxFQUE4RTtjQUFyRUE7SUFnQlI7RUFDRixDQXhCRDtBQXlCRDs7QUExQkRIIiwibmFtZXMiOlsicmFjZSIsInNvdXJjZXMiLCJhcmdzT3JBcmdBcnJheV8xIiwibGVuZ3RoIiwiaW5uZXJGcm9tXzEiLCJPYnNlcnZhYmxlXzEiLCJyYWNlSW5pdCIsImV4cG9ydHMiLCJzdWJzY3JpYmVyIiwic3Vic2NyaXB0aW9ucyIsImkiLCJwdXNoIiwic3Vic2NyaWJlIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJ2YWx1ZSIsInMiLCJ1bnN1YnNjcmliZSIsIm5leHQiLCJjbG9zZWQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvcmFjZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../Observable":8,"../operators/OperatorSubscriber":48,"../util/argsOrArgArray":202,"./innerFrom":34}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = void 0;

var Observable_1 = require("../Observable");

var empty_1 = require("./empty");

function range(start, count, scheduler) {
  if (count == null) {
    count = start;
    start = 0;
  }

  if (count <= 0) {
    return empty_1.EMPTY;
  }

  var end = count + start;
  return new Observable_1.Observable(scheduler ? function (subscriber) {
    var n = start;
    return scheduler.schedule(function () {
      if (n < end) {
        subscriber.next(n++);
        this.schedule();
      } else {
        subscriber.complete();
      }
    });
  } : function (subscriber) {
    var n = start;

    while (n < end && !subscriber.closed) {
      subscriber.next(n++);
    }

    subscriber.complete();
  });
}

exports.range = range;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQXFEQSxTQUFnQkEsS0FBaEIsQ0FBc0JDLEtBQXRCLEVBQXFDQyxLQUFyQyxFQUFxREMsU0FBckQsRUFBOEU7RUFDNUUsSUFBSUQsS0FBSyxJQUFJLElBQWIsRUFBbUI7SUFFakJBLEtBQUssR0FBR0QsS0FBUjtJQUNBQSxLQUFLLEdBQUcsQ0FBUjtFQUNEOztFQUVELElBQUlDLEtBQUssSUFBSSxDQUFiLEVBQWdCO0lBRWQsT0FBT0UsYUFBUDtFQUNEOztFQUdELElBQU1DLEdBQUcsR0FBR0gsS0FBSyxHQUFHRCxLQUFwQjtFQUVBLE9BQU8sSUFBSUssdUJBQUosQ0FDTEgsU0FBUyxHQUVMLFVBQUNJLFVBQUQsRUFBVztJQUNULElBQUlDLENBQUMsR0FBR1AsS0FBUjtJQUNBLE9BQU9FLFNBQVMsQ0FBQ00sUUFBVixDQUFtQjtNQUN4QixJQUFJRCxDQUFDLEdBQUdILEdBQVIsRUFBYTtRQUNYRSxVQUFVLENBQUNHLElBQVgsQ0FBZ0JGLENBQUMsRUFBakI7UUFDQSxLQUFLQyxRQUFMO01BQ0QsQ0FIRCxNQUdPO1FBQ0xGLFVBQVUsQ0FBQ0ksUUFBWDtNQUNEO0lBQ0YsQ0FQTSxDQUFQO0VBUUQsQ0FaSSxHQWNMLFVBQUNKLFVBQUQsRUFBVztJQUNULElBQUlDLENBQUMsR0FBR1AsS0FBUjs7SUFDQSxPQUFPTyxDQUFDLEdBQUdILEdBQUosSUFBVyxDQUFDRSxVQUFVLENBQUNLLE1BQTlCLEVBQXNDO01BQ3BDTCxVQUFVLENBQUNHLElBQVgsQ0FBZ0JGLENBQUMsRUFBakI7SUFDRDs7SUFDREQsVUFBVSxDQUFDSSxRQUFYO0VBQ0QsQ0FyQkEsQ0FBUDtBQXVCRDs7QUF0Q0RFIiwibmFtZXMiOlsicmFuZ2UiLCJzdGFydCIsImNvdW50Iiwic2NoZWR1bGVyIiwiZW1wdHlfMSIsImVuZCIsIk9ic2VydmFibGVfMSIsInN1YnNjcmliZXIiLCJuIiwic2NoZWR1bGUiLCJuZXh0IiwiY29tcGxldGUiLCJjbG9zZWQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL3JhbmdlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../Observable":8,"./empty":26}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwError = void 0;

var Observable_1 = require("../Observable");

var isFunction_1 = require("../util/isFunction");

function throwError(errorOrErrorFactory, scheduler) {
  var errorFactory = isFunction_1.isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function () {
    return errorOrErrorFactory;
  };

  var init = function init(subscriber) {
    return subscriber.error(errorFactory());
  };

  return new Observable_1.Observable(scheduler ? function (subscriber) {
    return scheduler.schedule(init, 0, subscriber);
  } : init);
}

exports.throwError = throwError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQXFIQSxTQUFnQkEsVUFBaEIsQ0FBMkJDLG1CQUEzQixFQUFxREMsU0FBckQsRUFBOEU7RUFDNUUsSUFBTUMsWUFBWSxHQUFHQyx3QkFBV0gsbUJBQVgsSUFBa0NBLG1CQUFsQyxHQUF3RDtJQUFNO0VBQW1CLENBQXRHOztFQUNBLElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLFVBQUQsRUFBOEI7SUFBSyxpQkFBVSxDQUFDQyxLQUFYLENBQWlCSixZQUFZLEVBQTdCO0VBQWdDLENBQWhGOztFQUNBLE9BQU8sSUFBSUssdUJBQUosQ0FBZU4sU0FBUyxHQUFHLFVBQUNJLFVBQUQsRUFBVztJQUFLLGdCQUFTLENBQUNHLFFBQVYsQ0FBbUJKLElBQW5CLEVBQWdDLENBQWhDLEVBQW1DQyxVQUFuQztFQUE4QyxDQUFqRSxHQUFvRUQsSUFBNUYsQ0FBUDtBQUNEOztBQUpESyIsIm5hbWVzIjpbInRocm93RXJyb3IiLCJlcnJvck9yRXJyb3JGYWN0b3J5Iiwic2NoZWR1bGVyIiwiZXJyb3JGYWN0b3J5IiwiaXNGdW5jdGlvbl8xIiwiaW5pdCIsInN1YnNjcmliZXIiLCJlcnJvciIsIk9ic2VydmFibGVfMSIsInNjaGVkdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS90aHJvd0Vycm9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../Observable":8,"../util/isFunction":212}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timer = void 0;

var Observable_1 = require("../Observable");

var async_1 = require("../scheduler/async");

var isScheduler_1 = require("../util/isScheduler");

var isDate_1 = require("../util/isDate");

function timer(dueTime, intervalOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }

  if (scheduler === void 0) {
    scheduler = async_1.async;
  }

  var intervalDuration = -1;

  if (intervalOrScheduler != null) {
    if (isScheduler_1.isScheduler(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }

  return new Observable_1.Observable(function (subscriber) {
    var due = isDate_1.isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;

    if (due < 0) {
      due = 0;
    }

    var n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);

        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

exports.timer = timer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQWdJQSxTQUFnQkEsS0FBaEIsQ0FDRUMsT0FERixFQUVFQyxtQkFGRixFQUdFQyxTQUhGLEVBRzJDO0VBRnpDO0lBQUFGO0VBQTBCOztFQUUxQjtJQUFBRSxZQUEyQkMsYUFBM0I7RUFBeUM7O0VBSXpDLElBQUlDLGdCQUFnQixHQUFHLENBQUMsQ0FBeEI7O0VBRUEsSUFBSUgsbUJBQW1CLElBQUksSUFBM0IsRUFBaUM7SUFJL0IsSUFBSUksMEJBQVlKLG1CQUFaLENBQUosRUFBc0M7TUFDcENDLFNBQVMsR0FBR0QsbUJBQVo7SUFDRCxDQUZELE1BRU87TUFHTEcsZ0JBQWdCLEdBQUdILG1CQUFuQjtJQUNEO0VBQ0Y7O0VBRUQsT0FBTyxJQUFJSyx1QkFBSixDQUFlLFVBQUNDLFVBQUQsRUFBVztJQUkvQixJQUFJQyxHQUFHLEdBQUdDLHFCQUFZVCxPQUFaLElBQXVCLENBQUNBLE9BQUQsR0FBV0UsU0FBVSxDQUFDUSxHQUFYLEVBQWxDLEdBQXFEVixPQUEvRDs7SUFFQSxJQUFJUSxHQUFHLEdBQUcsQ0FBVixFQUFhO01BRVhBLEdBQUcsR0FBRyxDQUFOO0lBQ0Q7O0lBR0QsSUFBSUcsQ0FBQyxHQUFHLENBQVI7SUFHQSxPQUFPVCxTQUFTLENBQUNVLFFBQVYsQ0FBbUI7TUFDeEIsSUFBSSxDQUFDTCxVQUFVLENBQUNNLE1BQWhCLEVBQXdCO1FBRXRCTixVQUFVLENBQUNPLElBQVgsQ0FBZ0JILENBQUMsRUFBakI7O1FBRUEsSUFBSSxLQUFLUCxnQkFBVCxFQUEyQjtVQUd6QixLQUFLUSxRQUFMLENBQWNHLFNBQWQsRUFBeUJYLGdCQUF6QjtRQUNELENBSkQsTUFJTztVQUVMRyxVQUFVLENBQUNTLFFBQVg7UUFDRDtNQUNGO0lBQ0YsQ0FkTSxFQWNKUixHQWRJLENBQVA7RUFlRCxDQTlCTSxDQUFQO0FBK0JEOztBQXJERFMiLCJuYW1lcyI6WyJ0aW1lciIsImR1ZVRpbWUiLCJpbnRlcnZhbE9yU2NoZWR1bGVyIiwic2NoZWR1bGVyIiwiYXN5bmNfMSIsImludGVydmFsRHVyYXRpb24iLCJpc1NjaGVkdWxlcl8xIiwiT2JzZXJ2YWJsZV8xIiwic3Vic2NyaWJlciIsImR1ZSIsImlzRGF0ZV8xIiwibm93IiwibiIsInNjaGVkdWxlIiwiY2xvc2VkIiwibmV4dCIsInVuZGVmaW5lZCIsImNvbXBsZXRlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS90aW1lci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../Observable":8,"../scheduler/async":183,"../util/isDate":211,"../util/isScheduler":218}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.using = void 0;

var Observable_1 = require("../Observable");

var innerFrom_1 = require("./innerFrom");

var empty_1 = require("./empty");

function using(resourceFactory, observableFactory) {
  return new Observable_1.Observable(function (subscriber) {
    var resource = resourceFactory();
    var result = observableFactory(resource);
    var source = result ? innerFrom_1.innerFrom(result) : empty_1.EMPTY;
    source.subscribe(subscriber);
    return function () {
      if (resource) {
        resource.unsubscribe();
      }
    };
  });
}

exports.using = using;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQThCQSxTQUFnQkEsS0FBaEIsQ0FDRUMsZUFERixFQUVFQyxpQkFGRixFQUVrRTtFQUVoRSxPQUFPLElBQUlDLHVCQUFKLENBQW1DLFVBQUNDLFVBQUQsRUFBVztJQUNuRCxJQUFNQyxRQUFRLEdBQUdKLGVBQWUsRUFBaEM7SUFDQSxJQUFNSyxNQUFNLEdBQUdKLGlCQUFpQixDQUFDRyxRQUFELENBQWhDO0lBQ0EsSUFBTUUsTUFBTSxHQUFHRCxNQUFNLEdBQUdFLHNCQUFVRixNQUFWLENBQUgsR0FBdUJHLGFBQTVDO0lBQ0FGLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQk4sVUFBakI7SUFDQSxPQUFPO01BR0wsSUFBSUMsUUFBSixFQUFjO1FBQ1pBLFFBQVEsQ0FBQ00sV0FBVDtNQUNEO0lBQ0YsQ0FORDtFQU9ELENBWk0sQ0FBUDtBQWFEOztBQWpCREMiLCJuYW1lcyI6WyJ1c2luZyIsInJlc291cmNlRmFjdG9yeSIsIm9ic2VydmFibGVGYWN0b3J5IiwiT2JzZXJ2YWJsZV8xIiwic3Vic2NyaWJlciIsInJlc291cmNlIiwicmVzdWx0Iiwic291cmNlIiwiaW5uZXJGcm9tXzEiLCJlbXB0eV8xIiwic3Vic2NyaWJlIiwidW5zdWJzY3JpYmUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL3VzaW5nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../Observable":8,"./empty":26,"./innerFrom":34}],47:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = void 0;

var Observable_1 = require("../Observable");

var innerFrom_1 = require("./innerFrom");

var argsOrArgArray_1 = require("../util/argsOrArgArray");

var empty_1 = require("./empty");

var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");

var args_1 = require("../util/args");

function zip() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var resultSelector = args_1.popResultSelector(args);
  var sources = argsOrArgArray_1.argsOrArgArray(args);
  return sources.length ? new Observable_1.Observable(function (subscriber) {
    var buffers = sources.map(function () {
      return [];
    });
    var completed = sources.map(function () {
      return false;
    });
    subscriber.add(function () {
      buffers = completed = null;
    });

    var _loop_1 = function _loop_1(sourceIndex) {
      innerFrom_1.innerFrom(sources[sourceIndex]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
        buffers[sourceIndex].push(value);

        if (buffers.every(function (buffer) {
          return buffer.length;
        })) {
          var result = buffers.map(function (buffer) {
            return buffer.shift();
          });
          subscriber.next(resultSelector ? resultSelector.apply(void 0, __spreadArray([], __read(result))) : result);

          if (buffers.some(function (buffer, i) {
            return !buffer.length && completed[i];
          })) {
            subscriber.complete();
          }
        }
      }, function () {
        completed[sourceIndex] = true;
        !buffers[sourceIndex].length && subscriber.complete();
      }));
    };

    for (var sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++) {
      _loop_1(sourceIndex);
    }

    return function () {
      buffers = completed = null;
    };
  }) : empty_1.EMPTY;
}

exports.zip = zip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBNENBLFNBQWdCQSxHQUFoQixHQUFtQjtFQUFDOztPQUFBLHlDQUFrQjtJQUFsQkM7OztFQUNsQixJQUFNQyxjQUFjLEdBQUdDLHlCQUFrQkYsSUFBbEIsQ0FBdkI7RUFFQSxJQUFNRyxPQUFPLEdBQUdDLGdDQUFlSixJQUFmLENBQWhCO0VBRUEsT0FBT0csT0FBTyxDQUFDRSxNQUFSLEdBQ0gsSUFBSUMsdUJBQUosQ0FBMEIsVUFBQ0MsVUFBRCxFQUFXO0lBR25DLElBQUlDLE9BQU8sR0FBZ0JMLE9BQU8sQ0FBQ00sR0FBUixDQUFZO01BQU07SUFBRSxDQUFwQixDQUEzQjtJQUtBLElBQUlDLFNBQVMsR0FBR1AsT0FBTyxDQUFDTSxHQUFSLENBQVk7TUFBTTtJQUFLLENBQXZCLENBQWhCO0lBR0FGLFVBQVUsQ0FBQ0ksR0FBWCxDQUFlO01BQ2JILE9BQU8sR0FBR0UsU0FBUyxHQUFHLElBQXRCO0lBQ0QsQ0FGRDs7bUNBT1NFLGFBQVc7TUFDbEJDLHNCQUFVVixPQUFPLENBQUNTLFdBQUQsQ0FBakIsRUFBZ0NFLFNBQWhDLENBQ0VDLDhDQUNFUixVQURGLEVBRUUsVUFBQ1MsS0FBRCxFQUFNO1FBQ0pSLE9BQU8sQ0FBQ0ksV0FBRCxDQUFQLENBQXFCSyxJQUFyQixDQUEwQkQsS0FBMUI7O1FBSUEsSUFBSVIsT0FBTyxDQUFDVSxLQUFSLENBQWMsVUFBQ0MsTUFBRCxFQUFPO1VBQUssYUFBTSxDQUFDZCxNQUFQO1FBQWEsQ0FBdkMsQ0FBSixFQUE4QztVQUM1QyxJQUFNZSxNQUFNLEdBQVFaLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNVLE1BQUQsRUFBTztZQUFLLGFBQU0sQ0FBQ0UsS0FBUDtVQUFlLENBQXZDLENBQXBCO1VBRUFkLFVBQVUsQ0FBQ2UsSUFBWCxDQUFnQnJCLGNBQWMsR0FBR0EsY0FBYyxNQUFkLENBQWMsTUFBZCxFQUFjc0IseUJBQUlILE1BQUosRUFBZCxDQUFILEdBQStCQSxNQUE3RDs7VUFJQSxJQUFJWixPQUFPLENBQUNnQixJQUFSLENBQWEsVUFBQ0wsTUFBRCxFQUFTTSxDQUFULEVBQVU7WUFBSyxRQUFDTixNQUFNLENBQUNkLE1BQVIsSUFBa0JLLFNBQVMsQ0FBQ2UsQ0FBRCxDQUEzQjtVQUE4QixDQUExRCxDQUFKLEVBQWlFO1lBQy9EbEIsVUFBVSxDQUFDbUIsUUFBWDtVQUNEO1FBQ0Y7TUFDRixDQWxCSCxFQW1CRTtRQUdFaEIsU0FBUyxDQUFDRSxXQUFELENBQVQsR0FBeUIsSUFBekI7UUFJQSxDQUFDSixPQUFPLENBQUNJLFdBQUQsQ0FBUCxDQUFxQlAsTUFBdEIsSUFBZ0NFLFVBQVUsQ0FBQ21CLFFBQVgsRUFBaEM7TUFDRCxDQTNCSCxDQURGOzs7SUFERixLQUFLLElBQUlkLFdBQVcsR0FBRyxDQUF2QixFQUEwQixDQUFDTCxVQUFVLENBQUNvQixNQUFaLElBQXNCZixXQUFXLEdBQUdULE9BQU8sQ0FBQ0UsTUFBdEUsRUFBOEVPLFdBQVcsRUFBekYsRUFBMkY7Y0FBbEZBO0lBZ0NSOztJQUdELE9BQU87TUFDTEosT0FBTyxHQUFHRSxTQUFTLEdBQUcsSUFBdEI7SUFDRCxDQUZEO0VBR0QsQ0F4REQsQ0FERyxHQTBESGtCLGFBMURKO0FBMkREOztBQWhFREMiLCJuYW1lcyI6WyJ6aXAiLCJhcmdzIiwicmVzdWx0U2VsZWN0b3IiLCJhcmdzXzEiLCJzb3VyY2VzIiwiYXJnc09yQXJnQXJyYXlfMSIsImxlbmd0aCIsIk9ic2VydmFibGVfMSIsInN1YnNjcmliZXIiLCJidWZmZXJzIiwibWFwIiwiY29tcGxldGVkIiwiYWRkIiwic291cmNlSW5kZXgiLCJpbm5lckZyb21fMSIsInN1YnNjcmliZSIsIk9wZXJhdG9yU3Vic2NyaWJlcl8xIiwidmFsdWUiLCJwdXNoIiwiZXZlcnkiLCJidWZmZXIiLCJyZXN1bHQiLCJzaGlmdCIsIm5leHQiLCJfX3NwcmVhZEFycmF5Iiwic29tZSIsImkiLCJjb21wbGV0ZSIsImNsb3NlZCIsImVtcHR5XzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL3ppcC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../Observable":8,"../operators/OperatorSubscriber":48,"../util/args":200,"../util/argsOrArgArray":202,"./empty":26,"./innerFrom":34}],48:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OperatorSubscriber = exports.createOperatorSubscriber = void 0;

var Subscriber_1 = require("../Subscriber");

function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
  return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}

exports.createOperatorSubscriber = createOperatorSubscriber;

var OperatorSubscriber = function (_super) {
  __extends(OperatorSubscriber, _super);

  function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
    var _this = _super.call(this, destination) || this;

    _this.onFinalize = onFinalize;
    _this.shouldUnsubscribe = shouldUnsubscribe;
    _this._next = onNext ? function (value) {
      try {
        onNext(value);
      } catch (err) {
        destination.error(err);
      }
    } : _super.prototype._next;
    _this._error = onError ? function (err) {
      try {
        onError(err);
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._error;
    _this._complete = onComplete ? function () {
      try {
        onComplete();
      } catch (err) {
        destination.error(err);
      } finally {
        this.unsubscribe();
      }
    } : _super.prototype._complete;
    return _this;
  }

  OperatorSubscriber.prototype.unsubscribe = function () {
    var _a;

    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var closed_1 = this.closed;

      _super.prototype.unsubscribe.call(this);

      !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    }
  };

  return OperatorSubscriber;
}(Subscriber_1.Subscriber);

exports.OperatorSubscriber = OperatorSubscriber;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFjQSxTQUFnQkEsd0JBQWhCLENBQ0VDLFdBREYsRUFFRUMsTUFGRixFQUdFQyxVQUhGLEVBSUVDLE9BSkYsRUFLRUMsVUFMRixFQUt5QjtFQUV2QixPQUFPLElBQUlDLGtCQUFKLENBQXVCTCxXQUF2QixFQUFvQ0MsTUFBcEMsRUFBNENDLFVBQTVDLEVBQXdEQyxPQUF4RCxFQUFpRUMsVUFBakUsQ0FBUDtBQUNEOztBQVJERTs7QUFjQTtFQUEyQ0M7O0VBaUJ6Qyw0QkFDRVAsV0FERixFQUVFQyxNQUZGLEVBR0VDLFVBSEYsRUFJRUMsT0FKRixFQUtVQyxVQUxWLEVBTVVJLGlCQU5WLEVBTTJDO0lBTjNDLFlBb0JFQyxrQkFBTVQsV0FBTixLQUFrQixJQXBCcEI7O0lBS1VVO0lBQ0FBO0lBZVJBLEtBQUksQ0FBQ0MsS0FBTCxHQUFhVixNQUFNLEdBQ2YsVUFBdUNXLEtBQXZDLEVBQStDO01BQzdDLElBQUk7UUFDRlgsTUFBTSxDQUFDVyxLQUFELENBQU47TUFDRCxDQUZELENBRUUsT0FBT0MsR0FBUCxFQUFZO1FBQ1piLFdBQVcsQ0FBQ2MsS0FBWixDQUFrQkQsR0FBbEI7TUFDRDtJQUNGLENBUGMsR0FRZkosaUJBQU1FLEtBUlY7SUFTQUQsS0FBSSxDQUFDSyxNQUFMLEdBQWNaLE9BQU8sR0FDakIsVUFBdUNVLEdBQXZDLEVBQStDO01BQzdDLElBQUk7UUFDRlYsT0FBTyxDQUFDVSxHQUFELENBQVA7TUFDRCxDQUZELENBRUUsT0FBT0EsR0FBUCxFQUFZO1FBRVpiLFdBQVcsQ0FBQ2MsS0FBWixDQUFrQkQsR0FBbEI7TUFDRCxDQUxELFNBS1U7UUFFUixLQUFLRyxXQUFMO01BQ0Q7SUFDRixDQVhnQixHQVlqQlAsaUJBQU1NLE1BWlY7SUFhQUwsS0FBSSxDQUFDTyxTQUFMLEdBQWlCZixVQUFVLEdBQ3ZCO01BQ0UsSUFBSTtRQUNGQSxVQUFVO01BQ1gsQ0FGRCxDQUVFLE9BQU9XLEdBQVAsRUFBWTtRQUVaYixXQUFXLENBQUNjLEtBQVosQ0FBa0JELEdBQWxCO01BQ0QsQ0FMRCxTQUtVO1FBRVIsS0FBS0csV0FBTDtNQUNEO0lBQ0YsQ0FYc0IsR0FZdkJQLGlCQUFNUSxTQVpWOztFQWFEOztFQUVEWjs7O0lBQ0UsSUFBSSxDQUFDLEtBQUtHLGlCQUFOLElBQTJCLEtBQUtBLGlCQUFMLEVBQS9CLEVBQXlEO01BQy9DLFlBQU0sR0FBSyxLQUFJVSxNQUFmOztNQUNSVCxpQkFBTU8sV0FBTixDQUFpQkcsSUFBakIsQ0FBaUIsSUFBakI7O01BRUEsQ0FBQ0MsUUFBRCxLQUFXLFdBQUtoQixVQUFMLE1BQWUsSUFBZixJQUFlaUIsYUFBZixHQUFlLE1BQWYsR0FBZUEsUUFBZixJQUFlLENBQTFCO0lBQ0Q7RUFDRixDQVBEOztFQVFGO0FBQUMsQ0FuRkQsQ0FBMkNDLHVCQUEzQzs7QUFBYWhCIiwibmFtZXMiOlsiY3JlYXRlT3BlcmF0b3JTdWJzY3JpYmVyIiwiZGVzdGluYXRpb24iLCJvbk5leHQiLCJvbkNvbXBsZXRlIiwib25FcnJvciIsIm9uRmluYWxpemUiLCJPcGVyYXRvclN1YnNjcmliZXIiLCJleHBvcnRzIiwiX19leHRlbmRzIiwic2hvdWxkVW5zdWJzY3JpYmUiLCJfc3VwZXIiLCJfdGhpcyIsIl9uZXh0IiwidmFsdWUiLCJlcnIiLCJlcnJvciIsIl9lcnJvciIsInVuc3Vic2NyaWJlIiwiX2NvbXBsZXRlIiwiY2xvc2VkIiwiY2FsbCIsImNsb3NlZF8xIiwiX2EiLCJTdWJzY3JpYmVyXzEiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9PcGVyYXRvclN1YnNjcmliZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../Subscriber":12}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.audit = void 0;

var lift_1 = require("../util/lift");

var innerFrom_1 = require("../observable/innerFrom");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function audit(durationSelector) {
  return lift_1.operate(function (source, subscriber) {
    var hasValue = false;
    var lastValue = null;
    var durationSubscriber = null;
    var isComplete = false;

    var endDuration = function endDuration() {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      durationSubscriber = null;

      if (hasValue) {
        hasValue = false;
        var value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }

      isComplete && subscriber.complete();
    };

    var cleanupDuration = function cleanupDuration() {
      durationSubscriber = null;
      isComplete && subscriber.complete();
    };

    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      hasValue = true;
      lastValue = value;

      if (!durationSubscriber) {
        innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, endDuration, cleanupDuration));
      }
    }, function () {
      isComplete = true;
      (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
    }));
  });
}

exports.audit = audit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQUNBOztBQUNBOztBQStDQSxTQUFnQkEsS0FBaEIsQ0FBeUJDLGdCQUF6QixFQUE2RTtFQUMzRSxPQUFPQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUNoQyxJQUFJQyxRQUFRLEdBQUcsS0FBZjtJQUNBLElBQUlDLFNBQVMsR0FBYSxJQUExQjtJQUNBLElBQUlDLGtCQUFrQixHQUEyQixJQUFqRDtJQUNBLElBQUlDLFVBQVUsR0FBRyxLQUFqQjs7SUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztNQUNsQkYsa0JBQWtCLFNBQWxCLHNCQUFrQixXQUFsQixHQUFrQixNQUFsQixxQkFBa0IsQ0FBRUcsV0FBcEI7TUFDQUgsa0JBQWtCLEdBQUcsSUFBckI7O01BQ0EsSUFBSUYsUUFBSixFQUFjO1FBQ1pBLFFBQVEsR0FBRyxLQUFYO1FBQ0EsSUFBTU0sS0FBSyxHQUFHTCxTQUFkO1FBQ0FBLFNBQVMsR0FBRyxJQUFaO1FBQ0FGLFVBQVUsQ0FBQ1EsSUFBWCxDQUFnQkQsS0FBaEI7TUFDRDs7TUFDREgsVUFBVSxJQUFJSixVQUFVLENBQUNTLFFBQVgsRUFBZDtJQUNELENBVkQ7O0lBWUEsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQjtNQUN0QlAsa0JBQWtCLEdBQUcsSUFBckI7TUFDQUMsVUFBVSxJQUFJSixVQUFVLENBQUNTLFFBQVgsRUFBZDtJQUNELENBSEQ7O0lBS0FWLE1BQU0sQ0FBQ1ksU0FBUCxDQUNFQyw4Q0FDRVosVUFERixFQUVFLFVBQUNPLEtBQUQsRUFBTTtNQUNKTixRQUFRLEdBQUcsSUFBWDtNQUNBQyxTQUFTLEdBQUdLLEtBQVo7O01BQ0EsSUFBSSxDQUFDSixrQkFBTCxFQUF5QjtRQUN2QlUsc0JBQVVoQixnQkFBZ0IsQ0FBQ1UsS0FBRCxDQUExQixFQUFtQ0ksU0FBbkMsQ0FDR1Isa0JBQWtCLEdBQUdTLDhDQUF5QlosVUFBekIsRUFBcUNLLFdBQXJDLEVBQWtESyxlQUFsRCxDQUR4QjtNQUdEO0lBQ0YsQ0FWSCxFQVdFO01BQ0VOLFVBQVUsR0FBRyxJQUFiO01BQ0EsQ0FBQyxDQUFDSCxRQUFELElBQWEsQ0FBQ0Usa0JBQWQsSUFBb0NBLGtCQUFrQixDQUFDVyxNQUF4RCxLQUFtRWQsVUFBVSxDQUFDUyxRQUFYLEVBQW5FO0lBQ0QsQ0FkSCxDQURGO0VBa0JELENBekNNLENBQVA7QUEwQ0Q7O0FBM0NETSIsIm5hbWVzIjpbImF1ZGl0IiwiZHVyYXRpb25TZWxlY3RvciIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJoYXNWYWx1ZSIsImxhc3RWYWx1ZSIsImR1cmF0aW9uU3Vic2NyaWJlciIsImlzQ29tcGxldGUiLCJlbmREdXJhdGlvbiIsInVuc3Vic2NyaWJlIiwidmFsdWUiLCJuZXh0IiwiY29tcGxldGUiLCJjbGVhbnVwRHVyYXRpb24iLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsImlubmVyRnJvbV8xIiwiY2xvc2VkIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2F1ZGl0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../observable/innerFrom":34,"../util/lift":219,"./OperatorSubscriber":48}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auditTime = void 0;

var async_1 = require("../scheduler/async");

var audit_1 = require("./audit");

var timer_1 = require("../observable/timer");

function auditTime(duration, scheduler) {
  if (scheduler === void 0) {
    scheduler = async_1.asyncScheduler;
  }

  return audit_1.audit(function () {
    return timer_1.timer(duration, scheduler);
  });
}

exports.auditTime = auditTime;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQWtEQSxTQUFnQkEsU0FBaEIsQ0FBNkJDLFFBQTdCLEVBQStDQyxTQUEvQyxFQUF3RjtFQUF6QztJQUFBQSxZQUEyQkMsc0JBQTNCO0VBQXlDOztFQUN0RixPQUFPQyxjQUFNO0lBQU0scUJBQU1ILFFBQU4sRUFBZ0JDLFNBQWhCO0VBQTBCLENBQXRDLENBQVA7QUFDRDs7QUFGREciLCJuYW1lcyI6WyJhdWRpdFRpbWUiLCJkdXJhdGlvbiIsInNjaGVkdWxlciIsImFzeW5jXzEiLCJhdWRpdF8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2F1ZGl0VGltZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../observable/timer":45,"../scheduler/async":183,"./audit":49}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buffer = void 0;

var lift_1 = require("../util/lift");

var noop_1 = require("../util/noop");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function buffer(closingNotifier) {
  return lift_1.operate(function (source, subscriber) {
    var currentBuffer = [];
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      return currentBuffer.push(value);
    }, function () {
      subscriber.next(currentBuffer);
      subscriber.complete();
    }));
    closingNotifier.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
      var b = currentBuffer;
      currentBuffer = [];
      subscriber.next(b);
    }, noop_1.noop));
    return function () {
      currentBuffer = null;
    };
  });
}

exports.buffer = buffer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQXVDQSxTQUFnQkEsTUFBaEIsQ0FBMEJDLGVBQTFCLEVBQTBEO0VBQ3hELE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBRWhDLElBQUlDLGFBQWEsR0FBUSxFQUF6QjtJQUdBRixNQUFNLENBQUNHLFNBQVAsQ0FDRUMsOENBQ0VILFVBREYsRUFFRSxVQUFDSSxLQUFELEVBQU07TUFBSyxvQkFBYSxDQUFDQyxJQUFkLENBQW1CRCxLQUFuQjtJQUF5QixDQUZ0QyxFQUdFO01BQ0VKLFVBQVUsQ0FBQ00sSUFBWCxDQUFnQkwsYUFBaEI7TUFDQUQsVUFBVSxDQUFDTyxRQUFYO0lBQ0QsQ0FOSCxDQURGO0lBWUFWLGVBQWUsQ0FBQ0ssU0FBaEIsQ0FDRUMsOENBQ0VILFVBREYsRUFFRTtNQUVFLElBQU1RLENBQUMsR0FBR1AsYUFBVjtNQUNBQSxhQUFhLEdBQUcsRUFBaEI7TUFDQUQsVUFBVSxDQUFDTSxJQUFYLENBQWdCRSxDQUFoQjtJQUNELENBUEgsRUFRRUMsV0FSRixDQURGO0lBYUEsT0FBTztNQUVMUixhQUFhLEdBQUcsSUFBaEI7SUFDRCxDQUhEO0VBSUQsQ0FsQ00sQ0FBUDtBQW1DRDs7QUFwQ0RTIiwibmFtZXMiOlsiYnVmZmVyIiwiY2xvc2luZ05vdGlmaWVyIiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsImN1cnJlbnRCdWZmZXIiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwicHVzaCIsIm5leHQiLCJjb21wbGV0ZSIsImIiLCJub29wXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvYnVmZmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/lift":219,"../util/noop":221,"./OperatorSubscriber":48}],52:[function(require,module,exports){
"use strict";

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferCount = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var arrRemove_1 = require("../util/arrRemove");

function bufferCount(bufferSize, startBufferEvery) {
  if (startBufferEvery === void 0) {
    startBufferEvery = null;
  }

  startBufferEvery = startBufferEvery !== null && startBufferEvery !== void 0 ? startBufferEvery : bufferSize;
  return lift_1.operate(function (source, subscriber) {
    var buffers = [];
    var count = 0;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      var e_1, _a, e_2, _b;

      var toEmit = null;

      if (count++ % startBufferEvery === 0) {
        buffers.push([]);
      }

      try {
        for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
          var buffer = buffers_1_1.value;
          buffer.push(value);

          if (bufferSize <= buffer.length) {
            toEmit = toEmit !== null && toEmit !== void 0 ? toEmit : [];
            toEmit.push(buffer);
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1["return"])) _a.call(buffers_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      if (toEmit) {
        try {
          for (var toEmit_1 = __values(toEmit), toEmit_1_1 = toEmit_1.next(); !toEmit_1_1.done; toEmit_1_1 = toEmit_1.next()) {
            var buffer = toEmit_1_1.value;
            arrRemove_1.arrRemove(buffers, buffer);
            subscriber.next(buffer);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (toEmit_1_1 && !toEmit_1_1.done && (_b = toEmit_1["return"])) _b.call(toEmit_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
    }, function () {
      var e_3, _a;

      try {
        for (var buffers_2 = __values(buffers), buffers_2_1 = buffers_2.next(); !buffers_2_1.done; buffers_2_1 = buffers_2.next()) {
          var buffer = buffers_2_1.value;
          subscriber.next(buffer);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (buffers_2_1 && !buffers_2_1.done && (_a = buffers_2["return"])) _a.call(buffers_2);
        } finally {
          if (e_3) throw e_3.error;
        }
      }

      subscriber.complete();
    }, undefined, function () {
      buffers = null;
    }));
  });
}

exports.bufferCount = bufferCount;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBcURBLFNBQWdCQSxXQUFoQixDQUErQkMsVUFBL0IsRUFBbURDLGdCQUFuRCxFQUF5RjtFQUF0QztJQUFBQTtFQUFzQzs7RUFHdkZBLGdCQUFnQixHQUFHQSxnQkFBZ0IsU0FBaEIsb0JBQWdCLFdBQWhCLHNCQUFvQkQsVUFBdkM7RUFFQSxPQUFPRSxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUNoQyxJQUFJQyxPQUFPLEdBQVUsRUFBckI7SUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWjtJQUVBSCxNQUFNLENBQUNJLFNBQVAsQ0FDRUMsOENBQ0VKLFVBREYsRUFFRSxVQUFDSyxLQUFELEVBQU07OztNQUNKLElBQUlDLE1BQU0sR0FBaUIsSUFBM0I7O01BS0EsSUFBSUosS0FBSyxLQUFLTCxnQkFBVixLQUFnQyxDQUFwQyxFQUF1QztRQUNyQ0ksT0FBTyxDQUFDTSxJQUFSLENBQWEsRUFBYjtNQUNEOzs7UUFHRCxLQUFxQixtQ0FBT0MsOEJBQTVCLEVBQTRCLGlCQUE1QixFQUE0QkEsOEJBQTVCLEVBQThCO1VBQXpCLElBQU1DLE1BQU0sb0JBQVo7VUFDSEEsTUFBTSxDQUFDRixJQUFQLENBQVlGLEtBQVo7O1VBTUEsSUFBSVQsVUFBVSxJQUFJYSxNQUFNLENBQUNDLE1BQXpCLEVBQWlDO1lBQy9CSixNQUFNLEdBQUdBLE1BQU0sU0FBTixVQUFNLFdBQU4sWUFBVSxFQUFuQjtZQUNBQSxNQUFNLENBQUNDLElBQVAsQ0FBWUUsTUFBWjtVQUNEO1FBQ0Y7Ozs7Ozs7Ozs7Ozs7TUFFRCxJQUFJSCxNQUFKLEVBQVk7O1VBSVYsS0FBcUIsaUNBQU1LLDRCQUEzQixFQUEyQixnQkFBM0IsRUFBMkJBLDRCQUEzQixFQUE2QjtZQUF4QixJQUFNRixNQUFNLG1CQUFaO1lBQ0hHLHNCQUFVWCxPQUFWLEVBQW1CUSxNQUFuQjtZQUNBVCxVQUFVLENBQUNhLElBQVgsQ0FBZ0JKLE1BQWhCO1VBQ0Q7Ozs7Ozs7Ozs7OztNQUNGO0lBQ0YsQ0FuQ0gsRUFvQ0U7Ozs7UUFHRSxLQUFxQixtQ0FBT0ssOEJBQTVCLEVBQTRCLGlCQUE1QixFQUE0QkEsOEJBQTVCLEVBQThCO1VBQXpCLElBQU1MLE1BQU0sb0JBQVo7VUFDSFQsVUFBVSxDQUFDYSxJQUFYLENBQWdCSixNQUFoQjtRQUNEOzs7Ozs7Ozs7Ozs7O01BQ0RULFVBQVUsQ0FBQ2UsUUFBWDtJQUNELENBM0NILEVBNkNFQyxTQTdDRixFQThDRTtNQUVFZixPQUFPLEdBQUcsSUFBVjtJQUNELENBakRILENBREY7RUFxREQsQ0F6RE0sQ0FBUDtBQTBERDs7QUEvRERnQiIsIm5hbWVzIjpbImJ1ZmZlckNvdW50IiwiYnVmZmVyU2l6ZSIsInN0YXJ0QnVmZmVyRXZlcnkiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwiYnVmZmVycyIsImNvdW50Iiwic3Vic2NyaWJlIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJ2YWx1ZSIsInRvRW1pdCIsInB1c2giLCJidWZmZXJzXzFfMSIsImJ1ZmZlciIsImxlbmd0aCIsInRvRW1pdF8xXzEiLCJhcnJSZW1vdmVfMSIsIm5leHQiLCJidWZmZXJzXzJfMSIsImNvbXBsZXRlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2J1ZmZlckNvdW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/arrRemove":203,"../util/lift":219,"./OperatorSubscriber":48}],53:[function(require,module,exports){
"use strict";

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferTime = void 0;

var Subscription_1 = require("../Subscription");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var arrRemove_1 = require("../util/arrRemove");

var async_1 = require("../scheduler/async");

var args_1 = require("../util/args");

var executeSchedule_1 = require("../util/executeSchedule");

function bufferTime(bufferTimeSpan) {
  var _a, _b;

  var otherArgs = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    otherArgs[_i - 1] = arguments[_i];
  }

  var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
  var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
  var maxBufferSize = otherArgs[1] || Infinity;
  return lift_1.operate(function (source, subscriber) {
    var bufferRecords = [];
    var restartOnEmit = false;

    var emit = function emit(record) {
      var buffer = record.buffer,
          subs = record.subs;
      subs.unsubscribe();
      arrRemove_1.arrRemove(bufferRecords, record);
      subscriber.next(buffer);
      restartOnEmit && startBuffer();
    };

    var startBuffer = function startBuffer() {
      if (bufferRecords) {
        var subs = new Subscription_1.Subscription();
        subscriber.add(subs);
        var buffer = [];
        var record_1 = {
          buffer: buffer,
          subs: subs
        };
        bufferRecords.push(record_1);
        executeSchedule_1.executeSchedule(subs, scheduler, function () {
          return emit(record_1);
        }, bufferTimeSpan);
      }
    };

    if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
      executeSchedule_1.executeSchedule(subscriber, scheduler, startBuffer, bufferCreationInterval, true);
    } else {
      restartOnEmit = true;
    }

    startBuffer();
    var bufferTimeSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      var e_1, _a;

      var recordsCopy = bufferRecords.slice();

      try {
        for (var recordsCopy_1 = __values(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()) {
          var record = recordsCopy_1_1.value;
          var buffer = record.buffer;
          buffer.push(value);
          maxBufferSize <= buffer.length && emit(record);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a = recordsCopy_1["return"])) _a.call(recordsCopy_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }, function () {
      while (bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length) {
        subscriber.next(bufferRecords.shift().buffer);
      }

      bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 ? void 0 : bufferTimeSubscriber.unsubscribe();
      subscriber.complete();
      subscriber.unsubscribe();
    }, undefined, function () {
      return bufferRecords = null;
    });
    source.subscribe(bufferTimeSubscriber);
  });
}

exports.bufferTime = bufferTime;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFvQixNQUFwQix1QkFBb0IsQ0FBRVYsV0FBdEI7TUFDQU4sVUFBVSxDQUFDd0IsUUFBWDtNQUNBeEIsVUFBVSxDQUFDTSxXQUFYO0lBQ0QsQ0F6QjBCLEVBMkIzQm1CLFNBM0IyQixFQTZCM0I7TUFBTSxPQUFDeEIsYUFBYSxHQUFHLElBQWpCO0lBQXNCLENBN0JELENBQTdCO0lBZ0NBRixNQUFNLENBQUMyQixTQUFQLENBQWlCVixvQkFBakI7RUFDRCxDQXBGTSxDQUFQO0FBcUZEOztBQTFGRFciLCJuYW1lcyI6WyJidWZmZXJUaW1lIiwiYnVmZmVyVGltZVNwYW4iLCJvdGhlckFyZ3MiLCJzY2hlZHVsZXIiLCJfYSIsImFzeW5jXzEiLCJidWZmZXJDcmVhdGlvbkludGVydmFsIiwiX2IiLCJtYXhCdWZmZXJTaXplIiwiSW5maW5pdHkiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwiYnVmZmVyUmVjb3JkcyIsInJlc3RhcnRPbkVtaXQiLCJlbWl0IiwicmVjb3JkIiwic3VicyIsInVuc3Vic2NyaWJlIiwiYXJyUmVtb3ZlXzEiLCJuZXh0IiwiYnVmZmVyIiwic3RhcnRCdWZmZXIiLCJTdWJzY3JpcHRpb25fMSIsImFkZCIsInJlY29yZF8xIiwicHVzaCIsImV4ZWN1dGVTY2hlZHVsZV8xIiwiYnVmZmVyVGltZVN1YnNjcmliZXIiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwicmVjb3Jkc0NvcHkiLCJzbGljZSIsInJlY29yZHNDb3B5XzFfMSIsImxlbmd0aCIsInNoaWZ0IiwiY29tcGxldGUiLCJ1bmRlZmluZWQiLCJzdWJzY3JpYmUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvYnVmZmVyVGltZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../Subscription":13,"../scheduler/async":183,"../util/args":200,"../util/arrRemove":203,"../util/executeSchedule":207,"../util/lift":219,"./OperatorSubscriber":48}],54:[function(require,module,exports){
"use strict";

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferToggle = void 0;

var Subscription_1 = require("../Subscription");

var lift_1 = require("../util/lift");

var innerFrom_1 = require("../observable/innerFrom");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var noop_1 = require("../util/noop");

var arrRemove_1 = require("../util/arrRemove");

function bufferToggle(openings, closingSelector) {
  return lift_1.operate(function (source, subscriber) {
    var buffers = [];
    innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (openValue) {
      var buffer = [];
      buffers.push(buffer);
      var closingSubscription = new Subscription_1.Subscription();

      var emitBuffer = function emitBuffer() {
        arrRemove_1.arrRemove(buffers, buffer);
        subscriber.next(buffer);
        closingSubscription.unsubscribe();
      };

      closingSubscription.add(innerFrom_1.innerFrom(closingSelector(openValue)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, emitBuffer, noop_1.noop)));
    }, noop_1.noop));
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      var e_1, _a;

      try {
        for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
          var buffer = buffers_1_1.value;
          buffer.push(value);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1["return"])) _a.call(buffers_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }, function () {
      while (buffers.length > 0) {
        subscriber.next(buffers.shift());
      }

      subscriber.complete();
    }));
  });
}

exports.bufferToggle = bufferToggle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBNkNBLFNBQWdCQSxZQUFoQixDQUNFQyxRQURGLEVBRUVDLGVBRkYsRUFFcUQ7RUFFbkQsT0FBT0MsZUFBUSxVQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBbUI7SUFDaEMsSUFBTUMsT0FBTyxHQUFVLEVBQXZCO0lBR0FDLHNCQUFVTixRQUFWLEVBQW9CTyxTQUFwQixDQUNFQyw4Q0FDRUosVUFERixFQUVFLFVBQUNLLFNBQUQsRUFBVTtNQUNSLElBQU1DLE1BQU0sR0FBUSxFQUFwQjtNQUNBTCxPQUFPLENBQUNNLElBQVIsQ0FBYUQsTUFBYjtNQUdBLElBQU1FLG1CQUFtQixHQUFHLElBQUlDLDJCQUFKLEVBQTVCOztNQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO1FBQ2pCQyxzQkFBVVYsT0FBVixFQUFtQkssTUFBbkI7UUFDQU4sVUFBVSxDQUFDWSxJQUFYLENBQWdCTixNQUFoQjtRQUNBRSxtQkFBbUIsQ0FBQ0ssV0FBcEI7TUFDRCxDQUpEOztNQU9BTCxtQkFBbUIsQ0FBQ00sR0FBcEIsQ0FBd0JaLHNCQUFVTCxlQUFlLENBQUNRLFNBQUQsQ0FBekIsRUFBc0NGLFNBQXRDLENBQWdEQyw4Q0FBeUJKLFVBQXpCLEVBQXFDVSxVQUFyQyxFQUFpREssV0FBakQsQ0FBaEQsQ0FBeEI7SUFDRCxDQWpCSCxFQWtCRUEsV0FsQkYsQ0FERjtJQXVCQWhCLE1BQU0sQ0FBQ0ksU0FBUCxDQUNFQyw4Q0FDRUosVUFERixFQUVFLFVBQUNnQixLQUFELEVBQU07Ozs7UUFFSixLQUFxQixtQ0FBT0MsOEJBQTVCLEVBQTRCLGlCQUE1QixFQUE0QkEsOEJBQTVCLEVBQThCO1VBQXpCLElBQU1YLE1BQU0sb0JBQVo7VUFDSEEsTUFBTSxDQUFDQyxJQUFQLENBQVlTLEtBQVo7UUFDRDs7Ozs7Ozs7Ozs7O0lBQ0YsQ0FQSCxFQVFFO01BRUUsT0FBT2YsT0FBTyxDQUFDaUIsTUFBUixHQUFpQixDQUF4QixFQUEyQjtRQUN6QmxCLFVBQVUsQ0FBQ1ksSUFBWCxDQUFnQlgsT0FBTyxDQUFDa0IsS0FBUixFQUFoQjtNQUNEOztNQUNEbkIsVUFBVSxDQUFDb0IsUUFBWDtJQUNELENBZEgsQ0FERjtFQWtCRCxDQTdDTSxDQUFQO0FBOENEOztBQWxEREMiLCJuYW1lcyI6WyJidWZmZXJUb2dnbGUiLCJvcGVuaW5ncyIsImNsb3NpbmdTZWxlY3RvciIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJidWZmZXJzIiwiaW5uZXJGcm9tXzEiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsIm9wZW5WYWx1ZSIsImJ1ZmZlciIsInB1c2giLCJjbG9zaW5nU3Vic2NyaXB0aW9uIiwiU3Vic2NyaXB0aW9uXzEiLCJlbWl0QnVmZmVyIiwiYXJyUmVtb3ZlXzEiLCJuZXh0IiwidW5zdWJzY3JpYmUiLCJhZGQiLCJub29wXzEiLCJ2YWx1ZSIsImJ1ZmZlcnNfMV8xIiwibGVuZ3RoIiwic2hpZnQiLCJjb21wbGV0ZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9idWZmZXJUb2dnbGUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../Subscription":13,"../observable/innerFrom":34,"../util/arrRemove":203,"../util/lift":219,"../util/noop":221,"./OperatorSubscriber":48}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bufferWhen = void 0;

var lift_1 = require("../util/lift");

var noop_1 = require("../util/noop");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var innerFrom_1 = require("../observable/innerFrom");

function bufferWhen(closingSelector) {
  return lift_1.operate(function (source, subscriber) {
    var buffer = null;
    var closingSubscriber = null;

    var openBuffer = function openBuffer() {
      closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
      var b = buffer;
      buffer = [];
      b && subscriber.next(b);
      innerFrom_1.innerFrom(closingSelector()).subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openBuffer, noop_1.noop));
    };

    openBuffer();
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      return buffer === null || buffer === void 0 ? void 0 : buffer.push(value);
    }, function () {
      buffer && subscriber.next(buffer);
      subscriber.complete();
    }, undefined, function () {
      return buffer = closingSubscriber = null;
    }));
  });
}

exports.bufferWhen = bufferWhen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQXdDQSxTQUFnQkEsVUFBaEIsQ0FBOEJDLGVBQTlCLEVBQXlFO0VBQ3ZFLE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBRWhDLElBQUlDLE1BQU0sR0FBZSxJQUF6QjtJQUlBLElBQUlDLGlCQUFpQixHQUF5QixJQUE5Qzs7SUFNQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtNQUdqQkQsaUJBQWlCLFNBQWpCLHFCQUFpQixXQUFqQixHQUFpQixNQUFqQixvQkFBaUIsQ0FBRUUsV0FBbkI7TUFFQSxJQUFNQyxDQUFDLEdBQUdKLE1BQVY7TUFDQUEsTUFBTSxHQUFHLEVBQVQ7TUFDQUksQ0FBQyxJQUFJTCxVQUFVLENBQUNNLElBQVgsQ0FBZ0JELENBQWhCLENBQUw7TUFHQUUsc0JBQVVWLGVBQWUsRUFBekIsRUFBNkJXLFNBQTdCLENBQXdDTixpQkFBaUIsR0FBR08sOENBQXlCVCxVQUF6QixFQUFxQ0csVUFBckMsRUFBaURPLFdBQWpELENBQTVEO0lBQ0QsQ0FYRDs7SUFjQVAsVUFBVTtJQUdWSixNQUFNLENBQUNTLFNBQVAsQ0FDRUMsOENBQ0VULFVBREYsRUFHRSxVQUFDVyxLQUFELEVBQU07TUFBSyxhQUFNLFNBQU4sVUFBTSxXQUFOLEdBQU0sTUFBTixTQUFNLENBQUVDLElBQVIsQ0FBYUQsS0FBYjtJQUFtQixDQUhoQyxFQU1FO01BQ0VWLE1BQU0sSUFBSUQsVUFBVSxDQUFDTSxJQUFYLENBQWdCTCxNQUFoQixDQUFWO01BQ0FELFVBQVUsQ0FBQ2EsUUFBWDtJQUNELENBVEgsRUFXRUMsU0FYRixFQWFFO01BQU0sT0FBQ2IsTUFBTSxHQUFHQyxpQkFBaUIsR0FBRyxJQUE5QjtJQUFvQyxDQWI1QyxDQURGO0VBaUJELENBOUNNLENBQVA7QUErQ0Q7O0FBaEREYSIsIm5hbWVzIjpbImJ1ZmZlcldoZW4iLCJjbG9zaW5nU2VsZWN0b3IiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwiYnVmZmVyIiwiY2xvc2luZ1N1YnNjcmliZXIiLCJvcGVuQnVmZmVyIiwidW5zdWJzY3JpYmUiLCJiIiwibmV4dCIsImlubmVyRnJvbV8xIiwic3Vic2NyaWJlIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJub29wXzEiLCJ2YWx1ZSIsInB1c2giLCJjb21wbGV0ZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9idWZmZXJXaGVuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../observable/innerFrom":34,"../util/lift":219,"../util/noop":221,"./OperatorSubscriber":48}],56:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.catchError = void 0;

var innerFrom_1 = require("../observable/innerFrom");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var lift_1 = require("../util/lift");

function catchError(selector) {
  return lift_1.operate(function (source, subscriber) {
    var innerSub = null;
    var syncUnsub = false;
    var handledResult;
    innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, function (err) {
      handledResult = innerFrom_1.innerFrom(selector(err, catchError(selector)(source)));

      if (innerSub) {
        innerSub.unsubscribe();
        innerSub = null;
        handledResult.subscribe(subscriber);
      } else {
        syncUnsub = true;
      }
    }));

    if (syncUnsub) {
      innerSub.unsubscribe();
      innerSub = null;
      handledResult.subscribe(subscriber);
    }
  });
}

exports.catchError = catchError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOztBQUNBOztBQUNBOztBQW9HQSxTQUFnQkEsVUFBaEIsQ0FDRUMsUUFERixFQUNrRDtFQUVoRCxPQUFPQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUNoQyxJQUFJQyxRQUFRLEdBQXdCLElBQXBDO0lBQ0EsSUFBSUMsU0FBUyxHQUFHLEtBQWhCO0lBQ0EsSUFBSUMsYUFBSjtJQUVBRixRQUFRLEdBQUdGLE1BQU0sQ0FBQ0ssU0FBUCxDQUNUQyw4Q0FBeUJMLFVBQXpCLEVBQXFDTSxTQUFyQyxFQUFnREEsU0FBaEQsRUFBMkQsVUFBQ0MsR0FBRCxFQUFJO01BQzdESixhQUFhLEdBQUdLLHNCQUFVWCxRQUFRLENBQUNVLEdBQUQsRUFBTVgsVUFBVSxDQUFDQyxRQUFELENBQVYsQ0FBcUJFLE1BQXJCLENBQU4sQ0FBbEIsQ0FBaEI7O01BQ0EsSUFBSUUsUUFBSixFQUFjO1FBQ1pBLFFBQVEsQ0FBQ1EsV0FBVDtRQUNBUixRQUFRLEdBQUcsSUFBWDtRQUNBRSxhQUFhLENBQUNDLFNBQWQsQ0FBd0JKLFVBQXhCO01BQ0QsQ0FKRCxNQUlPO1FBR0xFLFNBQVMsR0FBRyxJQUFaO01BQ0Q7SUFDRixDQVhELENBRFMsQ0FBWDs7SUFlQSxJQUFJQSxTQUFKLEVBQWU7TUFNYkQsUUFBUSxDQUFDUSxXQUFUO01BQ0FSLFFBQVEsR0FBRyxJQUFYO01BQ0FFLGFBQWMsQ0FBQ0MsU0FBZixDQUF5QkosVUFBekI7SUFDRDtFQUNGLENBOUJNLENBQVA7QUErQkQ7O0FBbENEVSIsIm5hbWVzIjpbImNhdGNoRXJyb3IiLCJzZWxlY3RvciIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJpbm5lclN1YiIsInN5bmNVbnN1YiIsImhhbmRsZWRSZXN1bHQiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInVuZGVmaW5lZCIsImVyciIsImlubmVyRnJvbV8xIiwidW5zdWJzY3JpYmUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvY2F0Y2hFcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../observable/innerFrom":34,"../util/lift":219,"./OperatorSubscriber":48}],57:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineAll = void 0;

var combineLatestAll_1 = require("./combineLatestAll");

exports.combineAll = combineLatestAll_1.combineLatestAll;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUthQSxxQkFBYUMsbUNBQWIiLCJuYW1lcyI6WyJleHBvcnRzIiwiY29tYmluZUxhdGVzdEFsbF8xIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvY29tYmluZUFsbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./combineLatestAll":59}],58:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineLatest = void 0;

var combineLatest_1 = require("../observable/combineLatest");

var lift_1 = require("../util/lift");

var argsOrArgArray_1 = require("../util/argsOrArgArray");

var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");

var pipe_1 = require("../util/pipe");

var args_1 = require("../util/args");

function combineLatest() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var resultSelector = args_1.popResultSelector(args);
  return resultSelector ? pipe_1.pipe(combineLatest.apply(void 0, __spreadArray([], __read(args))), mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : lift_1.operate(function (source, subscriber) {
    combineLatest_1.combineLatestInit(__spreadArray([source], __read(argsOrArgArray_1.argsOrArgArray(args))))(subscriber);
  });
}

exports.combineLatest = combineLatest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBb0JBLFNBQWdCQSxhQUFoQixHQUE2QjtFQUFPOztPQUFBLHlDQUE2RDtJQUE3REM7OztFQUNsQyxJQUFNQyxjQUFjLEdBQUdDLHlCQUFrQkYsSUFBbEIsQ0FBdkI7RUFDQSxPQUFPQyxjQUFjLEdBQ2pCRSxZQUFLSixhQUFhLE1BQWIsQ0FBYSxNQUFiLEVBQWFLLHlCQUFLSixJQUFMLEVBQWIsQ0FBTCxFQUE4REssb0NBQWlCSixjQUFqQixDQUE5RCxDQURpQixHQUVqQkssZUFBUSxVQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBbUI7SUFDekJDLGtDQUFpQkwsZUFBRUcsTUFBRixHQUFRRyxPQUFLQyxnQ0FBZVgsSUFBZixDQUFMLENBQVIsQ0FBakIsRUFBcURRLFVBQXJEO0VBQ0QsQ0FGRCxDQUZKO0FBS0Q7O0FBUERJIiwibmFtZXMiOlsiY29tYmluZUxhdGVzdCIsImFyZ3MiLCJyZXN1bHRTZWxlY3RvciIsImFyZ3NfMSIsInBpcGVfMSIsIl9fc3ByZWFkQXJyYXkiLCJtYXBPbmVPck1hbnlBcmdzXzEiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwiY29tYmluZUxhdGVzdF8xIiwiX19yZWFkIiwiYXJnc09yQXJnQXJyYXlfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9jb21iaW5lTGF0ZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../observable/combineLatest":21,"../util/args":200,"../util/argsOrArgArray":202,"../util/lift":219,"../util/mapOneOrManyArgs":220,"../util/pipe":223}],59:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineLatestAll = void 0;

var combineLatest_1 = require("../observable/combineLatest");

var joinAllInternals_1 = require("./joinAllInternals");

function combineLatestAll(project) {
  return joinAllInternals_1.joinAllInternals(combineLatest_1.combineLatest, project);
}

exports.combineLatestAll = combineLatestAll;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQTZDQSxTQUFnQkEsZ0JBQWhCLENBQW9DQyxPQUFwQyxFQUEwRTtFQUN4RSxPQUFPQyxvQ0FBaUJDLDZCQUFqQixFQUFnQ0YsT0FBaEMsQ0FBUDtBQUNEOztBQUZERyIsIm5hbWVzIjpbImNvbWJpbmVMYXRlc3RBbGwiLCJwcm9qZWN0Iiwiam9pbkFsbEludGVybmFsc18xIiwiY29tYmluZUxhdGVzdF8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2NvbWJpbmVMYXRlc3RBbGwudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../observable/combineLatest":21,"./joinAllInternals":93}],60:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineLatestWith = void 0;

var combineLatest_1 = require("./combineLatest");

function combineLatestWith() {
  var otherSources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    otherSources[_i] = arguments[_i];
  }

  return combineLatest_1.combineLatest.apply(void 0, __spreadArray([], __read(otherSources)));
}

exports.combineLatestWith = combineLatestWith;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBMENBLFNBQWdCQSxpQkFBaEIsR0FBaUM7RUFDL0I7O09BQUEseUNBQTZDO0lBQTdDQzs7O0VBRUEsT0FBT0MsOEJBQWFDLEtBQWIsQ0FBYSxNQUFiLEVBQWFDLHlCQUFJSCxZQUFKLEVBQWIsQ0FBUDtBQUNEOztBQUpESSIsIm5hbWVzIjpbImNvbWJpbmVMYXRlc3RXaXRoIiwib3RoZXJTb3VyY2VzIiwiY29tYmluZUxhdGVzdF8xIiwiYXBwbHkiLCJfX3NwcmVhZEFycmF5IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2NvbWJpbmVMYXRlc3RXaXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"./combineLatest":58}],61:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concat = void 0;

var lift_1 = require("../util/lift");

var concatAll_1 = require("./concatAll");

var args_1 = require("../util/args");

var from_1 = require("../observable/from");

function concat() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var scheduler = args_1.popScheduler(args);
  return lift_1.operate(function (source, subscriber) {
    concatAll_1.concatAll()(from_1.from(__spreadArray([source], __read(args)), scheduler)).subscribe(subscriber);
  });
}

exports.concat = concat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBWUEsU0FBZ0JBLE1BQWhCLEdBQXNCO0VBQU87O09BQUEseUNBQWM7SUFBZEM7OztFQUMzQixJQUFNQyxTQUFTLEdBQUdDLG9CQUFhRixJQUFiLENBQWxCO0VBQ0EsT0FBT0csZUFBUSxVQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBbUI7SUFDaENDLHdCQUFZQyxZQUFJQyxlQUFFSixNQUFGLEdBQVFLLE9BQUtULElBQUwsQ0FBUixDQUFKLEVBQXdCQyxTQUF4QixDQUFaLEVBQWdEUyxTQUFoRCxDQUEwREwsVUFBMUQ7RUFDRCxDQUZNLENBQVA7QUFHRDs7QUFMRE0iLCJuYW1lcyI6WyJjb25jYXQiLCJhcmdzIiwic2NoZWR1bGVyIiwiYXJnc18xIiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsImNvbmNhdEFsbF8xIiwiZnJvbV8xIiwiX19zcHJlYWRBcnJheSIsIl9fcmVhZCIsInN1YnNjcmliZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9jb25jYXQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../observable/from":28,"../util/args":200,"../util/lift":219,"./concatAll":62}],62:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatAll = void 0;

var mergeAll_1 = require("./mergeAll");

function concatAll() {
  return mergeAll_1.mergeAll(1);
}

exports.concatAll = concatAll;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQTJEQSxTQUFnQkEsU0FBaEIsR0FBeUI7RUFDdkIsT0FBT0Msb0JBQVMsQ0FBVCxDQUFQO0FBQ0Q7O0FBRkRDIiwibmFtZXMiOlsiY29uY2F0QWxsIiwibWVyZ2VBbGxfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9jb25jYXRBbGwudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./mergeAll":100}],63:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatMap = void 0;

var mergeMap_1 = require("./mergeMap");

var isFunction_1 = require("../util/isFunction");

function concatMap(project, resultSelector) {
  return isFunction_1.isFunction(resultSelector) ? mergeMap_1.mergeMap(project, resultSelector, 1) : mergeMap_1.mergeMap(project, 1);
}

exports.concatMap = concatMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQTRFQSxTQUFnQkEsU0FBaEIsQ0FDRUMsT0FERixFQUVFQyxjQUZGLEVBRStHO0VBRTdHLE9BQU9DLHdCQUFXRCxjQUFYLElBQTZCRSxvQkFBU0gsT0FBVCxFQUFrQkMsY0FBbEIsRUFBa0MsQ0FBbEMsQ0FBN0IsR0FBb0VFLG9CQUFTSCxPQUFULEVBQWtCLENBQWxCLENBQTNFO0FBQ0Q7O0FBTERJIiwibmFtZXMiOlsiY29uY2F0TWFwIiwicHJvamVjdCIsInJlc3VsdFNlbGVjdG9yIiwiaXNGdW5jdGlvbl8xIiwibWVyZ2VNYXBfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9jb25jYXRNYXAudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../util/isFunction":212,"./mergeMap":102}],64:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatMapTo = void 0;

var concatMap_1 = require("./concatMap");

var isFunction_1 = require("../util/isFunction");

function concatMapTo(innerObservable, resultSelector) {
  return isFunction_1.isFunction(resultSelector) ? concatMap_1.concatMap(function () {
    return innerObservable;
  }, resultSelector) : concatMap_1.concatMap(function () {
    return innerObservable;
  });
}

exports.concatMapTo = concatMapTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQXVFQSxTQUFnQkEsV0FBaEIsQ0FDRUMsZUFERixFQUVFQyxjQUZGLEVBRStHO0VBRTdHLE9BQU9DLHdCQUFXRCxjQUFYLElBQTZCRSxzQkFBVTtJQUFNO0VBQWUsQ0FBL0IsRUFBaUNGLGNBQWpDLENBQTdCLEdBQWdGRSxzQkFBVTtJQUFNO0VBQWUsQ0FBL0IsQ0FBdkY7QUFDRDs7QUFMREMiLCJuYW1lcyI6WyJjb25jYXRNYXBUbyIsImlubmVyT2JzZXJ2YWJsZSIsInJlc3VsdFNlbGVjdG9yIiwiaXNGdW5jdGlvbl8xIiwiY29uY2F0TWFwXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvY29uY2F0TWFwVG8udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../util/isFunction":212,"./concatMap":63}],65:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatWith = void 0;

var concat_1 = require("./concat");

function concatWith() {
  var otherSources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    otherSources[_i] = arguments[_i];
  }

  return concat_1.concat.apply(void 0, __spreadArray([], __read(otherSources)));
}

exports.concatWith = concatWith;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBMENBLFNBQWdCQSxVQUFoQixHQUEwQjtFQUN4Qjs7T0FBQSx5Q0FBNkM7SUFBN0NDOzs7RUFFQSxPQUFPQyxnQkFBTUMsS0FBTixDQUFNLE1BQU4sRUFBTUMseUJBQUlILFlBQUosRUFBTixDQUFQO0FBQ0Q7O0FBSkRJIiwibmFtZXMiOlsiY29uY2F0V2l0aCIsIm90aGVyU291cmNlcyIsImNvbmNhdF8xIiwiYXBwbHkiLCJfX3NwcmVhZEFycmF5IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2NvbmNhdFdpdGgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./concat":61}],66:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = void 0;

var Subject_1 = require("../Subject");

var innerFrom_1 = require("../observable/innerFrom");

var lift_1 = require("../util/lift");

var fromSubscribable_1 = require("../observable/fromSubscribable");

var DEFAULT_CONFIG = {
  connector: function connector() {
    return new Subject_1.Subject();
  }
};

function connect(selector, config) {
  if (config === void 0) {
    config = DEFAULT_CONFIG;
  }

  var connector = config.connector;
  return lift_1.operate(function (source, subscriber) {
    var subject = connector();
    innerFrom_1.innerFrom(selector(fromSubscribable_1.fromSubscribable(subject))).subscribe(subscriber);
    subscriber.add(source.subscribe(subject));
  });
}

exports.connect = connect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQWdCQSxJQUFNQSxjQUFjLEdBQTJCO0VBQzdDQyxTQUFTLEVBQUU7SUFBTSxXQUFJQyxpQkFBSjtFQUFzQjtBQURNLENBQS9DOztBQTZFQSxTQUFnQkMsT0FBaEIsQ0FDRUMsUUFERixFQUVFQyxNQUZGLEVBRTJDO0VBQXpDO0lBQUFBO0VBQXlDOztFQUVqQyxhQUFTLEdBQUtBLE1BQU0sVUFBcEI7RUFDUixPQUFPQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUNoQyxJQUFNQyxPQUFPLEdBQUdSLFNBQVMsRUFBekI7SUFDQVMsc0JBQVVOLFFBQVEsQ0FBQ08sb0NBQWlCRixPQUFqQixDQUFELENBQWxCLEVBQStDRyxTQUEvQyxDQUF5REosVUFBekQ7SUFDQUEsVUFBVSxDQUFDSyxHQUFYLENBQWVOLE1BQU0sQ0FBQ0ssU0FBUCxDQUFpQkgsT0FBakIsQ0FBZjtFQUNELENBSk0sQ0FBUDtBQUtEOztBQVZESyIsIm5hbWVzIjpbIkRFRkFVTFRfQ09ORklHIiwiY29ubmVjdG9yIiwiU3ViamVjdF8xIiwiY29ubmVjdCIsInNlbGVjdG9yIiwiY29uZmlnIiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsInN1YmplY3QiLCJpbm5lckZyb21fMSIsImZyb21TdWJzY3JpYmFibGVfMSIsInN1YnNjcmliZSIsImFkZCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9jb25uZWN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../Subject":11,"../observable/fromSubscribable":31,"../observable/innerFrom":34,"../util/lift":219}],67:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.count = void 0;

var reduce_1 = require("./reduce");

function count(predicate) {
  return reduce_1.reduce(function (total, value, i) {
    return !predicate || predicate(value, i) ? total + 1 : total;
  }, 0);
}

exports.count = count;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQXlEQSxTQUFnQkEsS0FBaEIsQ0FBeUJDLFNBQXpCLEVBQXlFO0VBQ3ZFLE9BQU9DLGdCQUFPLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFlQyxDQUFmLEVBQWdCO0lBQUssT0FBQyxDQUFDSixTQUFELElBQWNBLFNBQVMsQ0FBQ0csS0FBRCxFQUFRQyxDQUFSLENBQXZCLEdBQW9DRixLQUFLLEdBQUcsQ0FBNUMsR0FBZ0RBLEtBQWpEO0VBQXVELENBQW5GLEVBQXFGLENBQXJGLENBQVA7QUFDRDs7QUFGREciLCJuYW1lcyI6WyJjb3VudCIsInByZWRpY2F0ZSIsInJlZHVjZV8xIiwidG90YWwiLCJ2YWx1ZSIsImkiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvY291bnQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./reduce":117}],68:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = void 0;

var lift_1 = require("../util/lift");

var noop_1 = require("../util/noop");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var innerFrom_1 = require("../observable/innerFrom");

function debounce(durationSelector) {
  return lift_1.operate(function (source, subscriber) {
    var hasValue = false;
    var lastValue = null;
    var durationSubscriber = null;

    var emit = function emit() {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      durationSubscriber = null;

      if (hasValue) {
        hasValue = false;
        var value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };

    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      hasValue = true;
      lastValue = value;
      durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, emit, noop_1.noop);
      innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber);
    }, function () {
      emit();
      subscriber.complete();
    }, undefined, function () {
      lastValue = durationSubscriber = null;
    }));
  });
}

exports.debounce = debounce;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQTREQSxTQUFnQkEsUUFBaEIsQ0FBNEJDLGdCQUE1QixFQUFnRjtFQUM5RSxPQUFPQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUNoQyxJQUFJQyxRQUFRLEdBQUcsS0FBZjtJQUNBLElBQUlDLFNBQVMsR0FBYSxJQUExQjtJQUVBLElBQUlDLGtCQUFrQixHQUEyQixJQUFqRDs7SUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztNQUlYRCxrQkFBa0IsU0FBbEIsc0JBQWtCLFdBQWxCLEdBQWtCLE1BQWxCLHFCQUFrQixDQUFFRSxXQUFwQjtNQUNBRixrQkFBa0IsR0FBRyxJQUFyQjs7TUFDQSxJQUFJRixRQUFKLEVBQWM7UUFFWkEsUUFBUSxHQUFHLEtBQVg7UUFDQSxJQUFNSyxLQUFLLEdBQUdKLFNBQWQ7UUFDQUEsU0FBUyxHQUFHLElBQVo7UUFDQUYsVUFBVSxDQUFDTyxJQUFYLENBQWdCRCxLQUFoQjtNQUNEO0lBQ0YsQ0FiRDs7SUFlQVAsTUFBTSxDQUFDUyxTQUFQLENBQ0VDLDhDQUNFVCxVQURGLEVBRUUsVUFBQ00sS0FBRCxFQUFTO01BSVBILGtCQUFrQixTQUFsQixzQkFBa0IsV0FBbEIsR0FBa0IsTUFBbEIscUJBQWtCLENBQUVFLFdBQXBCO01BQ0FKLFFBQVEsR0FBRyxJQUFYO01BQ0FDLFNBQVMsR0FBR0ksS0FBWjtNQUdBSCxrQkFBa0IsR0FBR00sOENBQXlCVCxVQUF6QixFQUFxQ0ksSUFBckMsRUFBMkNNLFdBQTNDLENBQXJCO01BRUFDLHNCQUFVZCxnQkFBZ0IsQ0FBQ1MsS0FBRCxDQUExQixFQUFtQ0UsU0FBbkMsQ0FBNkNMLGtCQUE3QztJQUNELENBZEgsRUFlRTtNQUdFQyxJQUFJO01BQ0pKLFVBQVUsQ0FBQ1ksUUFBWDtJQUNELENBcEJILEVBc0JFQyxTQXRCRixFQXVCRTtNQUVFWCxTQUFTLEdBQUdDLGtCQUFrQixHQUFHLElBQWpDO0lBQ0QsQ0ExQkgsQ0FERjtFQThCRCxDQW5ETSxDQUFQO0FBb0REOztBQXJERFciLCJuYW1lcyI6WyJkZWJvdW5jZSIsImR1cmF0aW9uU2VsZWN0b3IiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwiaGFzVmFsdWUiLCJsYXN0VmFsdWUiLCJkdXJhdGlvblN1YnNjcmliZXIiLCJlbWl0IiwidW5zdWJzY3JpYmUiLCJ2YWx1ZSIsIm5leHQiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsIm5vb3BfMSIsImlubmVyRnJvbV8xIiwiY29tcGxldGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvZGVib3VuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../observable/innerFrom":34,"../util/lift":219,"../util/noop":221,"./OperatorSubscriber":48}],69:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounceTime = void 0;

var async_1 = require("../scheduler/async");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function debounceTime(dueTime, scheduler) {
  if (scheduler === void 0) {
    scheduler = async_1.asyncScheduler;
  }

  return lift_1.operate(function (source, subscriber) {
    var activeTask = null;
    var lastValue = null;
    var lastTime = null;

    var emit = function emit() {
      if (activeTask) {
        activeTask.unsubscribe();
        activeTask = null;
        var value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    };

    function emitWhenIdle() {
      var targetTime = lastTime + dueTime;
      var now = scheduler.now();

      if (now < targetTime) {
        activeTask = this.schedule(undefined, targetTime - now);
        subscriber.add(activeTask);
        return;
      }

      emit();
    }

    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      lastValue = value;
      lastTime = scheduler.now();

      if (!activeTask) {
        activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        subscriber.add(activeTask);
      }
    }, function () {
      emit();
      subscriber.complete();
    }, undefined, function () {
      lastValue = activeTask = null;
    }));
  });
}

exports.debounceTime = debounceTime;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOztBQTJEQSxTQUFnQkEsWUFBaEIsQ0FBZ0NDLE9BQWhDLEVBQWlEQyxTQUFqRCxFQUEwRjtFQUF6QztJQUFBQSxZQUEyQkMsc0JBQTNCO0VBQXlDOztFQUN4RixPQUFPQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUNoQyxJQUFJQyxVQUFVLEdBQXdCLElBQXRDO0lBQ0EsSUFBSUMsU0FBUyxHQUFhLElBQTFCO0lBQ0EsSUFBSUMsUUFBUSxHQUFrQixJQUE5Qjs7SUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztNQUNYLElBQUlILFVBQUosRUFBZ0I7UUFFZEEsVUFBVSxDQUFDSSxXQUFYO1FBQ0FKLFVBQVUsR0FBRyxJQUFiO1FBQ0EsSUFBTUssS0FBSyxHQUFHSixTQUFkO1FBQ0FBLFNBQVMsR0FBRyxJQUFaO1FBQ0FGLFVBQVUsQ0FBQ08sSUFBWCxDQUFnQkQsS0FBaEI7TUFDRDtJQUNGLENBVEQ7O0lBVUEsU0FBU0UsWUFBVCxHQUFxQjtNQUluQixJQUFNQyxVQUFVLEdBQUdOLFFBQVMsR0FBR1IsT0FBL0I7TUFDQSxJQUFNZSxHQUFHLEdBQUdkLFNBQVMsQ0FBQ2MsR0FBVixFQUFaOztNQUNBLElBQUlBLEdBQUcsR0FBR0QsVUFBVixFQUFzQjtRQUVwQlIsVUFBVSxHQUFHLEtBQUtVLFFBQUwsQ0FBY0MsU0FBZCxFQUF5QkgsVUFBVSxHQUFHQyxHQUF0QyxDQUFiO1FBQ0FWLFVBQVUsQ0FBQ2EsR0FBWCxDQUFlWixVQUFmO1FBQ0E7TUFDRDs7TUFFREcsSUFBSTtJQUNMOztJQUVETCxNQUFNLENBQUNlLFNBQVAsQ0FDRUMsOENBQ0VmLFVBREYsRUFFRSxVQUFDTSxLQUFELEVBQVM7TUFDUEosU0FBUyxHQUFHSSxLQUFaO01BQ0FILFFBQVEsR0FBR1AsU0FBUyxDQUFDYyxHQUFWLEVBQVg7O01BR0EsSUFBSSxDQUFDVCxVQUFMLEVBQWlCO1FBQ2ZBLFVBQVUsR0FBR0wsU0FBUyxDQUFDZSxRQUFWLENBQW1CSCxZQUFuQixFQUFpQ2IsT0FBakMsQ0FBYjtRQUNBSyxVQUFVLENBQUNhLEdBQVgsQ0FBZVosVUFBZjtNQUNEO0lBQ0YsQ0FYSCxFQVlFO01BR0VHLElBQUk7TUFDSkosVUFBVSxDQUFDZ0IsUUFBWDtJQUNELENBakJILEVBbUJFSixTQW5CRixFQW9CRTtNQUVFVixTQUFTLEdBQUdELFVBQVUsR0FBRyxJQUF6QjtJQUNELENBdkJILENBREY7RUEyQkQsQ0ExRE0sQ0FBUDtBQTJERDs7QUE1RERnQiIsIm5hbWVzIjpbImRlYm91bmNlVGltZSIsImR1ZVRpbWUiLCJzY2hlZHVsZXIiLCJhc3luY18xIiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsImFjdGl2ZVRhc2siLCJsYXN0VmFsdWUiLCJsYXN0VGltZSIsImVtaXQiLCJ1bnN1YnNjcmliZSIsInZhbHVlIiwibmV4dCIsImVtaXRXaGVuSWRsZSIsInRhcmdldFRpbWUiLCJub3ciLCJzY2hlZHVsZSIsInVuZGVmaW5lZCIsImFkZCIsInN1YnNjcmliZSIsIk9wZXJhdG9yU3Vic2NyaWJlcl8xIiwiY29tcGxldGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvZGVib3VuY2VUaW1lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../scheduler/async":183,"../util/lift":219,"./OperatorSubscriber":48}],70:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultIfEmpty = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function defaultIfEmpty(defaultValue) {
  return lift_1.operate(function (source, subscriber) {
    var hasValue = false;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      hasValue = true;
      subscriber.next(value);
    }, function () {
      if (!hasValue) {
        subscriber.next(defaultValue);
      }

      subscriber.complete();
    }));
  });
}

exports.defaultIfEmpty = defaultIfEmpty;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQXFDQSxTQUFnQkEsY0FBaEIsQ0FBcUNDLFlBQXJDLEVBQW9EO0VBQ2xELE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBQ2hDLElBQUlDLFFBQVEsR0FBRyxLQUFmO0lBQ0FGLE1BQU0sQ0FBQ0csU0FBUCxDQUNFQyw4Q0FDRUgsVUFERixFQUVFLFVBQUNJLEtBQUQsRUFBTTtNQUNKSCxRQUFRLEdBQUcsSUFBWDtNQUNBRCxVQUFVLENBQUNLLElBQVgsQ0FBZ0JELEtBQWhCO0lBQ0QsQ0FMSCxFQU1FO01BQ0UsSUFBSSxDQUFDSCxRQUFMLEVBQWU7UUFDYkQsVUFBVSxDQUFDSyxJQUFYLENBQWdCUixZQUFoQjtNQUNEOztNQUNERyxVQUFVLENBQUNNLFFBQVg7SUFDRCxDQVhILENBREY7RUFlRCxDQWpCTSxDQUFQO0FBa0JEOztBQW5CREMiLCJuYW1lcyI6WyJkZWZhdWx0SWZFbXB0eSIsImRlZmF1bHRWYWx1ZSIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJoYXNWYWx1ZSIsInN1YnNjcmliZSIsIk9wZXJhdG9yU3Vic2NyaWJlcl8xIiwidmFsdWUiLCJuZXh0IiwiY29tcGxldGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvZGVmYXVsdElmRW1wdHkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../util/lift":219,"./OperatorSubscriber":48}],71:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delay = void 0;

var async_1 = require("../scheduler/async");

var delayWhen_1 = require("./delayWhen");

var timer_1 = require("../observable/timer");

function delay(due, scheduler) {
  if (scheduler === void 0) {
    scheduler = async_1.asyncScheduler;
  }

  var duration = timer_1.timer(due, scheduler);
  return delayWhen_1.delayWhen(function () {
    return duration;
  });
}

exports.delay = delay;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQTBEQSxTQUFnQkEsS0FBaEIsQ0FBeUJDLEdBQXpCLEVBQTZDQyxTQUE3QyxFQUFzRjtFQUF6QztJQUFBQSxZQUEyQkMsc0JBQTNCO0VBQXlDOztFQUNwRixJQUFNQyxRQUFRLEdBQUdDLGNBQU1KLEdBQU4sRUFBV0MsU0FBWCxDQUFqQjtFQUNBLE9BQU9JLHNCQUFVO0lBQU07RUFBUSxDQUF4QixDQUFQO0FBQ0Q7O0FBSERDIiwibmFtZXMiOlsiZGVsYXkiLCJkdWUiLCJzY2hlZHVsZXIiLCJhc3luY18xIiwiZHVyYXRpb24iLCJ0aW1lcl8xIiwiZGVsYXlXaGVuXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvZGVsYXkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../observable/timer":45,"../scheduler/async":183,"./delayWhen":72}],72:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayWhen = void 0;

var concat_1 = require("../observable/concat");

var take_1 = require("./take");

var ignoreElements_1 = require("./ignoreElements");

var mapTo_1 = require("./mapTo");

var mergeMap_1 = require("./mergeMap");

function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return function (source) {
      return concat_1.concat(subscriptionDelay.pipe(take_1.take(1), ignoreElements_1.ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
    };
  }

  return mergeMap_1.mergeMap(function (value, index) {
    return delayDurationSelector(value, index).pipe(take_1.take(1), mapTo_1.mapTo(value));
  });
}

exports.delayWhen = delayWhen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQW9FQSxTQUFnQkEsU0FBaEIsQ0FDRUMscUJBREYsRUFFRUMsaUJBRkYsRUFFcUM7RUFFbkMsSUFBSUEsaUJBQUosRUFBdUI7SUFFckIsT0FBTyxVQUFDQyxNQUFELEVBQXNCO01BQzNCLHVCQUFPRCxpQkFBaUIsQ0FBQ0UsSUFBbEIsQ0FBdUJDLFlBQUssQ0FBTCxDQUF2QixFQUFnQ0MsaUNBQWhDLENBQVAsRUFBMERILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSixTQUFTLENBQUNDLHFCQUFELENBQXJCLENBQTFEO0lBQXdHLENBRDFHO0VBRUQ7O0VBRUQsT0FBT00sb0JBQVMsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWE7SUFBSyw0QkFBcUIsQ0FBQ0QsS0FBRCxFQUFRQyxLQUFSLENBQXJCLENBQW9DTCxJQUFwQyxDQUF5Q0MsWUFBSyxDQUFMLENBQXpDLEVBQWtESyxjQUFNRixLQUFOLENBQWxEO0VBQStELENBQTFGLENBQVA7QUFDRDs7QUFYREciLCJuYW1lcyI6WyJkZWxheVdoZW4iLCJkZWxheUR1cmF0aW9uU2VsZWN0b3IiLCJzdWJzY3JpcHRpb25EZWxheSIsInNvdXJjZSIsInBpcGUiLCJ0YWtlXzEiLCJpZ25vcmVFbGVtZW50c18xIiwibWVyZ2VNYXBfMSIsInZhbHVlIiwiaW5kZXgiLCJtYXBUb18xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2RlbGF5V2hlbi50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../observable/concat":22,"./ignoreElements":91,"./mapTo":96,"./mergeMap":102,"./take":141}],73:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dematerialize = void 0;

var Notification_1 = require("../Notification");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function dematerialize() {
  return lift_1.operate(function (source, subscriber) {
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (notification) {
      return Notification_1.observeNotification(notification, subscriber);
    }));
  });
}

exports.dematerialize = dematerialize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQWtEQSxTQUFnQkEsYUFBaEIsR0FBNkI7RUFDM0IsT0FBT0MsZUFBUSxVQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBbUI7SUFDaENELE1BQU0sQ0FBQ0UsU0FBUCxDQUFpQkMsOENBQXlCRixVQUF6QixFQUFxQyxVQUFDRyxZQUFELEVBQWE7TUFBSywwQ0FBb0JBLFlBQXBCLEVBQWtDSCxVQUFsQztJQUE2QyxDQUFwRyxDQUFqQjtFQUNELENBRk0sQ0FBUDtBQUdEOztBQUpESSIsIm5hbWVzIjpbImRlbWF0ZXJpYWxpemUiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwic3Vic2NyaWJlIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJub3RpZmljYXRpb24iLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvZGVtYXRlcmlhbGl6ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../Notification":6,"../util/lift":219,"./OperatorSubscriber":48}],74:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distinct = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var noop_1 = require("../util/noop");

function distinct(keySelector, flushes) {
  return lift_1.operate(function (source, subscriber) {
    var distinctKeys = new Set();
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      var key = keySelector ? keySelector(value) : value;

      if (!distinctKeys.has(key)) {
        distinctKeys.add(key);
        subscriber.next(value);
      }
    }));
    flushes === null || flushes === void 0 ? void 0 : flushes.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
      return distinctKeys.clear();
    }, noop_1.noop));
  });
}

exports.distinct = distinct;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQTJEQSxTQUFnQkEsUUFBaEIsQ0FBK0JDLFdBQS9CLEVBQThEQyxPQUE5RCxFQUF1RjtFQUNyRixPQUFPQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUNoQyxJQUFNQyxZQUFZLEdBQUcsSUFBSUMsR0FBSixFQUFyQjtJQUNBSCxNQUFNLENBQUNJLFNBQVAsQ0FDRUMsOENBQXlCSixVQUF6QixFQUFxQyxVQUFDSyxLQUFELEVBQU07TUFDekMsSUFBTUMsR0FBRyxHQUFHVixXQUFXLEdBQUdBLFdBQVcsQ0FBQ1MsS0FBRCxDQUFkLEdBQXdCQSxLQUEvQzs7TUFDQSxJQUFJLENBQUNKLFlBQVksQ0FBQ00sR0FBYixDQUFpQkQsR0FBakIsQ0FBTCxFQUE0QjtRQUMxQkwsWUFBWSxDQUFDTyxHQUFiLENBQWlCRixHQUFqQjtRQUNBTixVQUFVLENBQUNTLElBQVgsQ0FBZ0JKLEtBQWhCO01BQ0Q7SUFDRixDQU5ELENBREY7SUFVQVIsT0FBTyxTQUFQLFdBQU8sV0FBUCxHQUFPLE1BQVAsVUFBTyxDQUFFTSxTQUFULENBQW1CQyw4Q0FBeUJKLFVBQXpCLEVBQXFDO01BQU0sbUJBQVksQ0FBQ1UsS0FBYjtJQUFvQixDQUEvRCxFQUFpRUMsV0FBakUsQ0FBbkI7RUFDRCxDQWJNLENBQVA7QUFjRDs7QUFmREMiLCJuYW1lcyI6WyJkaXN0aW5jdCIsImtleVNlbGVjdG9yIiwiZmx1c2hlcyIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJkaXN0aW5jdEtleXMiLCJTZXQiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwia2V5IiwiaGFzIiwiYWRkIiwibmV4dCIsImNsZWFyIiwibm9vcF8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2Rpc3RpbmN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/lift":219,"../util/noop":221,"./OperatorSubscriber":48}],75:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distinctUntilChanged = void 0;

var identity_1 = require("../util/identity");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function distinctUntilChanged(comparator, keySelector) {
  if (keySelector === void 0) {
    keySelector = identity_1.identity;
  }

  comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
  return lift_1.operate(function (source, subscriber) {
    var previousKey;
    var first = true;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      var currentKey = keySelector(value);

      if (first || !comparator(previousKey, currentKey)) {
        first = false;
        previousKey = currentKey;
        subscriber.next(value);
      }
    }));
  });
}

exports.distinctUntilChanged = distinctUntilChanged;

function defaultCompare(a, b) {
  return a === b;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQXVJQSxTQUFnQkEsb0JBQWhCLENBQ0VDLFVBREYsRUFFRUMsV0FGRixFQUU0RDtFQUExRDtJQUFBQSxjQUErQkMsbUJBQS9CO0VBQTBEOztFQUsxREYsVUFBVSxHQUFHQSxVQUFVLFNBQVYsY0FBVSxXQUFWLGdCQUFjRyxjQUEzQjtFQUVBLE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBR2hDLElBQUlDLFdBQUo7SUFFQSxJQUFJQyxLQUFLLEdBQUcsSUFBWjtJQUVBSCxNQUFNLENBQUNJLFNBQVAsQ0FDRUMsOENBQXlCSixVQUF6QixFQUFxQyxVQUFDSyxLQUFELEVBQU07TUFFekMsSUFBTUMsVUFBVSxHQUFHWCxXQUFXLENBQUNVLEtBQUQsQ0FBOUI7O01BS0EsSUFBSUgsS0FBSyxJQUFJLENBQUNSLFVBQVcsQ0FBQ08sV0FBRCxFQUFjSyxVQUFkLENBQXpCLEVBQW9EO1FBTWxESixLQUFLLEdBQUcsS0FBUjtRQUNBRCxXQUFXLEdBQUdLLFVBQWQ7UUFHQU4sVUFBVSxDQUFDTyxJQUFYLENBQWdCRixLQUFoQjtNQUNEO0lBQ0YsQ0FuQkQsQ0FERjtFQXNCRCxDQTdCTSxDQUFQO0FBOEJEOztBQXZDREc7O0FBeUNBLFNBQVNYLGNBQVQsQ0FBd0JZLENBQXhCLEVBQWdDQyxDQUFoQyxFQUFzQztFQUNwQyxPQUFPRCxDQUFDLEtBQUtDLENBQWI7QUFDRCIsIm5hbWVzIjpbImRpc3RpbmN0VW50aWxDaGFuZ2VkIiwiY29tcGFyYXRvciIsImtleVNlbGVjdG9yIiwiaWRlbnRpdHlfMSIsImRlZmF1bHRDb21wYXJlIiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsInByZXZpb3VzS2V5IiwiZmlyc3QiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwiY3VycmVudEtleSIsIm5leHQiLCJleHBvcnRzIiwiYSIsImIiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9kaXN0aW5jdFVudGlsQ2hhbmdlZC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../util/identity":208,"../util/lift":219,"./OperatorSubscriber":48}],76:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.distinctUntilKeyChanged = void 0;

var distinctUntilChanged_1 = require("./distinctUntilChanged");

function distinctUntilKeyChanged(key, compare) {
  return distinctUntilChanged_1.distinctUntilChanged(function (x, y) {
    return compare ? compare(x[key], y[key]) : x[key] === y[key];
  });
}

exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQW9FQSxTQUFnQkEsdUJBQWhCLENBQThEQyxHQUE5RCxFQUFzRUMsT0FBdEUsRUFBNkc7RUFDM0csT0FBT0MsNENBQXFCLFVBQUNDLENBQUQsRUFBT0MsQ0FBUCxFQUFXO0lBQUssY0FBTyxHQUFHSCxPQUFPLENBQUNFLENBQUMsQ0FBQ0gsR0FBRCxDQUFGLEVBQVNJLENBQUMsQ0FBQ0osR0FBRCxDQUFWLENBQVYsR0FBNkJHLENBQUMsQ0FBQ0gsR0FBRCxDQUFELEtBQVdJLENBQUMsQ0FBQ0osR0FBRCxDQUFoRDtFQUFxRCxDQUExRixDQUFQO0FBQ0Q7O0FBRkRLIiwibmFtZXMiOlsiZGlzdGluY3RVbnRpbEtleUNoYW5nZWQiLCJrZXkiLCJjb21wYXJlIiwiZGlzdGluY3RVbnRpbENoYW5nZWRfMSIsIngiLCJ5IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2Rpc3RpbmN0VW50aWxLZXlDaGFuZ2VkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"./distinctUntilChanged":75}],77:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementAt = void 0;

var ArgumentOutOfRangeError_1 = require("../util/ArgumentOutOfRangeError");

var filter_1 = require("./filter");

var throwIfEmpty_1 = require("./throwIfEmpty");

var defaultIfEmpty_1 = require("./defaultIfEmpty");

var take_1 = require("./take");

function elementAt(index, defaultValue) {
  if (index < 0) {
    throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
  }

  var hasDefaultValue = arguments.length >= 2;
  return function (source) {
    return source.pipe(filter_1.filter(function (v, i) {
      return i === index;
    }), take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () {
      return new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
    }));
  };
}

exports.elementAt = elementAt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQWtEQSxTQUFnQkEsU0FBaEIsQ0FBb0NDLEtBQXBDLEVBQW1EQyxZQUFuRCxFQUFtRTtFQUNqRSxJQUFJRCxLQUFLLEdBQUcsQ0FBWixFQUFlO0lBQ2IsTUFBTSxJQUFJRSxpREFBSixFQUFOO0VBQ0Q7O0VBQ0QsSUFBTUMsZUFBZSxHQUFHQyxTQUFTLENBQUNDLE1BQVYsSUFBb0IsQ0FBNUM7RUFDQSxPQUFPLFVBQUNDLE1BQUQsRUFBc0I7SUFDM0IsYUFBTSxDQUFDQyxJQUFQLENBQ0VDLGdCQUFPLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFLO01BQUssUUFBQyxLQUFLVixLQUFOO0lBQVcsQ0FBNUIsQ0FERixFQUVFVyxZQUFLLENBQUwsQ0FGRixFQUdFUixlQUFlLEdBQUdTLGdDQUFlWCxZQUFmLENBQUgsR0FBbUNZLDRCQUFhO01BQU0sV0FBSVgsaURBQUo7SUFBNkIsQ0FBaEQsQ0FIcEQ7RUFJQyxDQUxIO0FBTUQ7O0FBWERZIiwibmFtZXMiOlsiZWxlbWVudEF0IiwiaW5kZXgiLCJkZWZhdWx0VmFsdWUiLCJBcmd1bWVudE91dE9mUmFuZ2VFcnJvcl8xIiwiaGFzRGVmYXVsdFZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwicGlwZSIsImZpbHRlcl8xIiwidiIsImkiLCJ0YWtlXzEiLCJkZWZhdWx0SWZFbXB0eV8xIiwidGhyb3dJZkVtcHR5XzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvZWxlbWVudEF0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/ArgumentOutOfRangeError":193,"./defaultIfEmpty":70,"./filter":84,"./take":141,"./throwIfEmpty":148}],78:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endWith = void 0;

var concat_1 = require("../observable/concat");

var of_1 = require("../observable/of");

function endWith() {
  var values = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    values[_i] = arguments[_i];
  }

  return function (source) {
    return concat_1.concat(source, of_1.of.apply(void 0, __spreadArray([], __read(values))));
  };
}

exports.endWith = endWith;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBOERBLFNBQWdCQSxPQUFoQixHQUF1QjtFQUFJOztPQUFBLHlDQUFtQztJQUFuQ0M7OztFQUN6QixPQUFPLFVBQUNDLE1BQUQsRUFBc0I7SUFBSyx1QkFBT0EsTUFBUCxFQUFlQyxRQUFFQyxLQUFGLENBQUUsTUFBRixFQUFFQyx5QkFBSUosTUFBSixFQUFGLENBQWY7RUFBOEMsQ0FBaEY7QUFDRDs7QUFGREsiLCJuYW1lcyI6WyJlbmRXaXRoIiwidmFsdWVzIiwic291cmNlIiwib2ZfMSIsImFwcGx5IiwiX19zcHJlYWRBcnJheSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9lbmRXaXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../observable/concat":22,"../observable/of":38}],79:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.every = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function every(predicate, thisArg) {
  return lift_1.operate(function (source, subscriber) {
    var index = 0;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      if (!predicate.call(thisArg, value, index++, source)) {
        subscriber.next(false);
        subscriber.complete();
      }
    }, function () {
      subscriber.next(true);
      subscriber.complete();
    }));
  });
}

exports.every = every;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQXdDQSxTQUFnQkEsS0FBaEIsQ0FDRUMsU0FERixFQUVFQyxPQUZGLEVBRWU7RUFFYixPQUFPQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUNoQyxJQUFJQyxLQUFLLEdBQUcsQ0FBWjtJQUNBRixNQUFNLENBQUNHLFNBQVAsQ0FDRUMsOENBQ0VILFVBREYsRUFFRSxVQUFDSSxLQUFELEVBQU07TUFDSixJQUFJLENBQUNSLFNBQVMsQ0FBQ1MsSUFBVixDQUFlUixPQUFmLEVBQXdCTyxLQUF4QixFQUErQkgsS0FBSyxFQUFwQyxFQUF3Q0YsTUFBeEMsQ0FBTCxFQUFzRDtRQUNwREMsVUFBVSxDQUFDTSxJQUFYLENBQWdCLEtBQWhCO1FBQ0FOLFVBQVUsQ0FBQ08sUUFBWDtNQUNEO0lBQ0YsQ0FQSCxFQVFFO01BQ0VQLFVBQVUsQ0FBQ00sSUFBWCxDQUFnQixJQUFoQjtNQUNBTixVQUFVLENBQUNPLFFBQVg7SUFDRCxDQVhILENBREY7RUFlRCxDQWpCTSxDQUFQO0FBa0JEOztBQXRCREMiLCJuYW1lcyI6WyJldmVyeSIsInByZWRpY2F0ZSIsInRoaXNBcmciLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwiaW5kZXgiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwiY2FsbCIsIm5leHQiLCJjb21wbGV0ZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9ldmVyeS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../util/lift":219,"./OperatorSubscriber":48}],80:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exhaust = void 0;

var exhaustAll_1 = require("./exhaustAll");

exports.exhaust = exhaustAll_1.exhaustAll;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUthQSxrQkFBVUMsdUJBQVYiLCJuYW1lcyI6WyJleHBvcnRzIiwiZXhoYXVzdEFsbF8xIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvZXhoYXVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./exhaustAll":81}],81:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exhaustAll = void 0;

var exhaustMap_1 = require("./exhaustMap");

var identity_1 = require("../util/identity");

function exhaustAll() {
  return exhaustMap_1.exhaustMap(identity_1.identity);
}

exports.exhaustAll = exhaustAll;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQThDQSxTQUFnQkEsVUFBaEIsR0FBMEI7RUFDeEIsT0FBT0Msd0JBQVdDLG1CQUFYLENBQVA7QUFDRDs7QUFGREMiLCJuYW1lcyI6WyJleGhhdXN0QWxsIiwiZXhoYXVzdE1hcF8xIiwiaWRlbnRpdHlfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9leGhhdXN0QWxsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/identity":208,"./exhaustMap":82}],82:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exhaustMap = void 0;

var map_1 = require("./map");

var innerFrom_1 = require("../observable/innerFrom");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function exhaustMap(project, resultSelector) {
  if (resultSelector) {
    return function (source) {
      return source.pipe(exhaustMap(function (a, i) {
        return innerFrom_1.innerFrom(project(a, i)).pipe(map_1.map(function (b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }));
    };
  }

  return lift_1.operate(function (source, subscriber) {
    var index = 0;
    var innerSub = null;
    var isComplete = false;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (outerValue) {
      if (!innerSub) {
        innerSub = OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function () {
          innerSub = null;
          isComplete && subscriber.complete();
        });
        innerFrom_1.innerFrom(project(outerValue, index++)).subscribe(innerSub);
      }
    }, function () {
      isComplete = true;
      !innerSub && subscriber.complete();
    }));
  });
}

exports.exhaustMap = exhaustMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQThEQSxTQUFnQkEsVUFBaEIsQ0FDRUMsT0FERixFQUVFQyxjQUZGLEVBRStHO0VBRTdHLElBQUlBLGNBQUosRUFBb0I7SUFFbEIsT0FBTyxVQUFDQyxNQUFELEVBQXNCO01BQzNCLGFBQU0sQ0FBQ0MsSUFBUCxDQUFZSixVQUFVLENBQUMsVUFBQ0ssQ0FBRCxFQUFJQyxDQUFKLEVBQUs7UUFBSyw2QkFBVUwsT0FBTyxDQUFDSSxDQUFELEVBQUlDLENBQUosQ0FBakIsRUFBeUJGLElBQXpCLENBQThCRyxVQUFJLFVBQUNDLENBQUQsRUFBU0MsRUFBVCxFQUFnQjtVQUFLLHFCQUFjLENBQUNKLENBQUQsRUFBSUcsQ0FBSixFQUFPRixDQUFQLEVBQVVHLEVBQVYsQ0FBZDtRQUEyQixDQUFwRCxDQUE5QjtNQUFvRixDQUEvRixDQUF0QjtJQUF1SCxDQUR6SDtFQUVEOztFQUNELE9BQU9DLGVBQVEsVUFBQ1AsTUFBRCxFQUFTUSxVQUFULEVBQW1CO0lBQ2hDLElBQUlDLEtBQUssR0FBRyxDQUFaO0lBQ0EsSUFBSUMsUUFBUSxHQUF5QixJQUFyQztJQUNBLElBQUlDLFVBQVUsR0FBRyxLQUFqQjtJQUNBWCxNQUFNLENBQUNZLFNBQVAsQ0FDRUMsOENBQ0VMLFVBREYsRUFFRSxVQUFDTSxVQUFELEVBQVc7TUFDVCxJQUFJLENBQUNKLFFBQUwsRUFBZTtRQUNiQSxRQUFRLEdBQUdHLDhDQUF5QkwsVUFBekIsRUFBcUNPLFNBQXJDLEVBQWdEO1VBQ3pETCxRQUFRLEdBQUcsSUFBWDtVQUNBQyxVQUFVLElBQUlILFVBQVUsQ0FBQ1EsUUFBWCxFQUFkO1FBQ0QsQ0FIVSxDQUFYO1FBSUFDLHNCQUFVbkIsT0FBTyxDQUFDZ0IsVUFBRCxFQUFhTCxLQUFLLEVBQWxCLENBQWpCLEVBQXdDRyxTQUF4QyxDQUFrREYsUUFBbEQ7TUFDRDtJQUNGLENBVkgsRUFXRTtNQUNFQyxVQUFVLEdBQUcsSUFBYjtNQUNBLENBQUNELFFBQUQsSUFBYUYsVUFBVSxDQUFDUSxRQUFYLEVBQWI7SUFDRCxDQWRILENBREY7RUFrQkQsQ0F0Qk0sQ0FBUDtBQXVCRDs7QUFoQ0RFIiwibmFtZXMiOlsiZXhoYXVzdE1hcCIsInByb2plY3QiLCJyZXN1bHRTZWxlY3RvciIsInNvdXJjZSIsInBpcGUiLCJhIiwiaSIsIm1hcF8xIiwiYiIsImlpIiwibGlmdF8xIiwic3Vic2NyaWJlciIsImluZGV4IiwiaW5uZXJTdWIiLCJpc0NvbXBsZXRlIiwic3Vic2NyaWJlIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJvdXRlclZhbHVlIiwidW5kZWZpbmVkIiwiY29tcGxldGUiLCJpbm5lckZyb21fMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9leGhhdXN0TWFwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../observable/innerFrom":34,"../util/lift":219,"./OperatorSubscriber":48,"./map":95}],83:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expand = void 0;

var lift_1 = require("../util/lift");

var mergeInternals_1 = require("./mergeInternals");

function expand(project, concurrent, scheduler) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }

  concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
  return lift_1.operate(function (source, subscriber) {
    return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent, undefined, true, scheduler);
  });
}

exports.expand = expand;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQXVFQSxTQUFnQkEsTUFBaEIsQ0FDRUMsT0FERixFQUVFQyxVQUZGLEVBR0VDLFNBSEYsRUFHMkI7RUFEekI7SUFBQUQ7RUFBcUI7O0VBR3JCQSxVQUFVLEdBQUcsQ0FBQ0EsVUFBVSxJQUFJLENBQWYsSUFBb0IsQ0FBcEIsR0FBd0JFLFFBQXhCLEdBQW1DRixVQUFoRDtFQUNBLE9BQU9HLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBQ2hDLHVDQUVFRCxNQUZGLEVBR0VDLFVBSEYsRUFJRU4sT0FKRixFQUtFQyxVQUxGLEVBUUVNLFNBUkYsRUFXRSxJQVhGLEVBWUVMLFNBWkY7RUFhQyxDQWRJLENBQVA7QUFnQkQ7O0FBdEJETSIsIm5hbWVzIjpbImV4cGFuZCIsInByb2plY3QiLCJjb25jdXJyZW50Iiwic2NoZWR1bGVyIiwiSW5maW5pdHkiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwidW5kZWZpbmVkIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2V4cGFuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../util/lift":219,"./mergeInternals":101}],84:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function filter(predicate, thisArg) {
  return lift_1.operate(function (source, subscriber) {
    var index = 0;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      return predicate.call(thisArg, value, index++) && subscriber.next(value);
    }));
  });
}

exports.filter = filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQTBEQSxTQUFnQkEsTUFBaEIsQ0FBMEJDLFNBQTFCLEVBQTJFQyxPQUEzRSxFQUF3RjtFQUN0RixPQUFPQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUVoQyxJQUFJQyxLQUFLLEdBQUcsQ0FBWjtJQUlBRixNQUFNLENBQUNHLFNBQVAsQ0FJRUMsOENBQXlCSCxVQUF6QixFQUFxQyxVQUFDSSxLQUFELEVBQU07TUFBSyxnQkFBUyxDQUFDQyxJQUFWLENBQWVSLE9BQWYsRUFBd0JPLEtBQXhCLEVBQStCSCxLQUFLLEVBQXBDLEtBQTJDRCxVQUFVLENBQUNNLElBQVgsQ0FBZ0JGLEtBQWhCLENBQTNDO0lBQWlFLENBQWpILENBSkY7RUFNRCxDQVpNLENBQVA7QUFhRDs7QUFkREciLCJuYW1lcyI6WyJmaWx0ZXIiLCJwcmVkaWNhdGUiLCJ0aGlzQXJnIiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsImluZGV4Iiwic3Vic2NyaWJlIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJ2YWx1ZSIsImNhbGwiLCJuZXh0IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpbHRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../util/lift":219,"./OperatorSubscriber":48}],85:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.finalize = void 0;

var lift_1 = require("../util/lift");

function finalize(callback) {
  return lift_1.operate(function (source, subscriber) {
    try {
      source.subscribe(subscriber);
    } finally {
      subscriber.add(callback);
    }
  });
}

exports.finalize = finalize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQStEQSxTQUFnQkEsUUFBaEIsQ0FBNEJDLFFBQTVCLEVBQWdEO0VBQzlDLE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBR2hDLElBQUk7TUFDRkQsTUFBTSxDQUFDRSxTQUFQLENBQWlCRCxVQUFqQjtJQUNELENBRkQsU0FFVTtNQUNSQSxVQUFVLENBQUNFLEdBQVgsQ0FBZUwsUUFBZjtJQUNEO0VBQ0YsQ0FSTSxDQUFQO0FBU0Q7O0FBVkRNIiwibmFtZXMiOlsiZmluYWxpemUiLCJjYWxsYmFjayIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJzdWJzY3JpYmUiLCJhZGQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvZmluYWxpemUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../util/lift":219}],86:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFind = exports.find = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function find(predicate, thisArg) {
  return lift_1.operate(createFind(predicate, thisArg, 'value'));
}

exports.find = find;

function createFind(predicate, thisArg, emit) {
  var findIndex = emit === 'index';
  return function (source, subscriber) {
    var index = 0;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      var i = index++;

      if (predicate.call(thisArg, value, i, source)) {
        subscriber.next(findIndex ? i : value);
        subscriber.complete();
      }
    }, function () {
      subscriber.next(findIndex ? -1 : undefined);
      subscriber.complete();
    }));
  };
}

exports.createFind = createFind;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQUNBOztBQTREQSxTQUFnQkEsSUFBaEIsQ0FDRUMsU0FERixFQUVFQyxPQUZGLEVBRWU7RUFFYixPQUFPQyxlQUFRQyxVQUFVLENBQUNILFNBQUQsRUFBWUMsT0FBWixFQUFxQixPQUFyQixDQUFsQixDQUFQO0FBQ0Q7O0FBTERHOztBQU9BLFNBQWdCRCxVQUFoQixDQUNFSCxTQURGLEVBRUVDLE9BRkYsRUFHRUksSUFIRixFQUd5QjtFQUV2QixJQUFNQyxTQUFTLEdBQUdELElBQUksS0FBSyxPQUEzQjtFQUNBLE9BQU8sVUFBQ0UsTUFBRCxFQUF3QkMsVUFBeEIsRUFBbUQ7SUFDeEQsSUFBSUMsS0FBSyxHQUFHLENBQVo7SUFDQUYsTUFBTSxDQUFDRyxTQUFQLENBQ0VDLDhDQUNFSCxVQURGLEVBRUUsVUFBQ0ksS0FBRCxFQUFNO01BQ0osSUFBTUMsQ0FBQyxHQUFHSixLQUFLLEVBQWY7O01BQ0EsSUFBSVQsU0FBUyxDQUFDYyxJQUFWLENBQWViLE9BQWYsRUFBd0JXLEtBQXhCLEVBQStCQyxDQUEvQixFQUFrQ04sTUFBbEMsQ0FBSixFQUErQztRQUM3Q0MsVUFBVSxDQUFDTyxJQUFYLENBQWdCVCxTQUFTLEdBQUdPLENBQUgsR0FBT0QsS0FBaEM7UUFDQUosVUFBVSxDQUFDUSxRQUFYO01BQ0Q7SUFDRixDQVJILEVBU0U7TUFDRVIsVUFBVSxDQUFDTyxJQUFYLENBQWdCVCxTQUFTLEdBQUcsQ0FBQyxDQUFKLEdBQVFXLFNBQWpDO01BQ0FULFVBQVUsQ0FBQ1EsUUFBWDtJQUNELENBWkgsQ0FERjtFQWdCRCxDQWxCRDtBQW1CRDs7QUF6QkRaIiwibmFtZXMiOlsiZmluZCIsInByZWRpY2F0ZSIsInRoaXNBcmciLCJsaWZ0XzEiLCJjcmVhdGVGaW5kIiwiZXhwb3J0cyIsImVtaXQiLCJmaW5kSW5kZXgiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwiaW5kZXgiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwiaSIsImNhbGwiLCJuZXh0IiwiY29tcGxldGUiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9maW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/lift":219,"./OperatorSubscriber":48}],87:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findIndex = void 0;

var lift_1 = require("../util/lift");

var find_1 = require("./find");

function findIndex(predicate, thisArg) {
  return lift_1.operate(find_1.createFind(predicate, thisArg, 'index'));
}

exports.findIndex = findIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQXVEQSxTQUFnQkEsU0FBaEIsQ0FDRUMsU0FERixFQUVFQyxPQUZGLEVBRWU7RUFFYixPQUFPQyxlQUFRQyxrQkFBV0gsU0FBWCxFQUFzQkMsT0FBdEIsRUFBK0IsT0FBL0IsQ0FBUixDQUFQO0FBQ0Q7O0FBTERHIiwibmFtZXMiOlsiZmluZEluZGV4IiwicHJlZGljYXRlIiwidGhpc0FyZyIsImxpZnRfMSIsImZpbmRfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9maW5kSW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../util/lift":219,"./find":86}],88:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.first = void 0;

var EmptyError_1 = require("../util/EmptyError");

var filter_1 = require("./filter");

var take_1 = require("./take");

var defaultIfEmpty_1 = require("./defaultIfEmpty");

var throwIfEmpty_1 = require("./throwIfEmpty");

var identity_1 = require("../util/identity");

function first(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function (source) {
    return source.pipe(predicate ? filter_1.filter(function (v, i) {
      return predicate(v, i, source);
    }) : identity_1.identity, take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () {
      return new EmptyError_1.EmptyError();
    }));
  };
}

exports.first = first;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQXlFQSxTQUFnQkEsS0FBaEIsQ0FDRUMsU0FERixFQUVFQyxZQUZGLEVBRWtCO0VBRWhCLElBQU1DLGVBQWUsR0FBR0MsU0FBUyxDQUFDQyxNQUFWLElBQW9CLENBQTVDO0VBQ0EsT0FBTyxVQUFDQyxNQUFELEVBQXNCO0lBQzNCLGFBQU0sQ0FBQ0MsSUFBUCxDQUNFTixTQUFTLEdBQUdPLGdCQUFPLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFLO01BQUssZ0JBQVMsQ0FBQ0QsQ0FBRCxFQUFJQyxDQUFKLEVBQU9KLE1BQVAsQ0FBVDtJQUF1QixDQUF4QyxDQUFILEdBQStDSyxtQkFEMUQsRUFFRUMsWUFBSyxDQUFMLENBRkYsRUFHRVQsZUFBZSxHQUFHVSxnQ0FBZVgsWUFBZixDQUFILEdBQW1DWSw0QkFBYTtNQUFNLFdBQUlDLHVCQUFKO0lBQWdCLENBQW5DLENBSHBEO0VBSUMsQ0FMSDtBQU1EOztBQVhEQyIsIm5hbWVzIjpbImZpcnN0IiwicHJlZGljYXRlIiwiZGVmYXVsdFZhbHVlIiwiaGFzRGVmYXVsdFZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwicGlwZSIsImZpbHRlcl8xIiwidiIsImkiLCJpZGVudGl0eV8xIiwidGFrZV8xIiwiZGVmYXVsdElmRW1wdHlfMSIsInRocm93SWZFbXB0eV8xIiwiRW1wdHlFcnJvcl8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZpcnN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/EmptyError":194,"../util/identity":208,"./defaultIfEmpty":70,"./filter":84,"./take":141,"./throwIfEmpty":148}],89:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatMap = void 0;

var mergeMap_1 = require("./mergeMap");

exports.flatMap = mergeMap_1.mergeMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUthQSxrQkFBVUMsbUJBQVYiLCJuYW1lcyI6WyJleHBvcnRzIiwibWVyZ2VNYXBfMSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2ZsYXRNYXAudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./mergeMap":102}],90:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupBy = void 0;

var Observable_1 = require("../Observable");

var innerFrom_1 = require("../observable/innerFrom");

var Subject_1 = require("../Subject");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function groupBy(keySelector, elementOrOptions, duration, connector) {
  return lift_1.operate(function (source, subscriber) {
    var element;

    if (!elementOrOptions || typeof elementOrOptions === 'function') {
      element = elementOrOptions;
    } else {
      duration = elementOrOptions.duration, element = elementOrOptions.element, connector = elementOrOptions.connector;
    }

    var groups = new Map();

    var notify = function notify(cb) {
      groups.forEach(cb);
      cb(subscriber);
    };

    var handleError = function handleError(err) {
      return notify(function (consumer) {
        return consumer.error(err);
      });
    };

    var activeGroups = 0;
    var teardownAttempted = false;
    var groupBySourceSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function (value) {
      try {
        var key_1 = keySelector(value);
        var group_1 = groups.get(key_1);

        if (!group_1) {
          groups.set(key_1, group_1 = connector ? connector() : new Subject_1.Subject());
          var grouped = createGroupedObservable(key_1, group_1);
          subscriber.next(grouped);

          if (duration) {
            var durationSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(group_1, function () {
              group_1.complete();
              durationSubscriber_1 === null || durationSubscriber_1 === void 0 ? void 0 : durationSubscriber_1.unsubscribe();
            }, undefined, undefined, function () {
              return groups["delete"](key_1);
            });
            groupBySourceSubscriber.add(innerFrom_1.innerFrom(duration(grouped)).subscribe(durationSubscriber_1));
          }
        }

        group_1.next(element ? element(value) : value);
      } catch (err) {
        handleError(err);
      }
    }, function () {
      return notify(function (consumer) {
        return consumer.complete();
      });
    }, handleError, function () {
      return groups.clear();
    }, function () {
      teardownAttempted = true;
      return activeGroups === 0;
    });
    source.subscribe(groupBySourceSubscriber);

    function createGroupedObservable(key, groupSubject) {
      var result = new Observable_1.Observable(function (groupSubscriber) {
        activeGroups++;
        var innerSub = groupSubject.subscribe(groupSubscriber);
        return function () {
          innerSub.unsubscribe();
          --activeGroups === 0 && teardownAttempted && groupBySourceSubscriber.unsubscribe();
        };
      });
      result.key = key;
      return result;
    }
  });
}

exports.groupBy = groupBy;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OUI7TUFDRW5CLGlCQUFpQixHQUFHLElBQXBCO01BSUEsT0FBT0QsWUFBWSxLQUFLLENBQXhCO0lBQ0QsQ0FyRTZCLENBQWhDO0lBeUVBWixNQUFNLENBQUMrQixTQUFQLENBQWlCakIsdUJBQWpCOztJQU9BLFNBQVNTLHVCQUFULENBQWlDVSxHQUFqQyxFQUF5Q0MsWUFBekMsRUFBdUU7TUFDckUsSUFBTUMsTUFBTSxHQUFRLElBQUlDLHVCQUFKLENBQWtCLFVBQUNDLGVBQUQsRUFBZ0I7UUFDcER6QixZQUFZO1FBQ1osSUFBTTBCLFFBQVEsR0FBR0osWUFBWSxDQUFDSCxTQUFiLENBQXVCTSxlQUF2QixDQUFqQjtRQUNBLE9BQU87VUFDTEMsUUFBUSxDQUFDWCxXQUFUO1VBSUEsRUFBRWYsWUFBRixLQUFtQixDQUFuQixJQUF3QkMsaUJBQXhCLElBQTZDQyx1QkFBdUIsQ0FBQ2EsV0FBeEIsRUFBN0M7UUFDRCxDQU5EO01BT0QsQ0FWbUIsQ0FBcEI7TUFXQVEsTUFBTSxDQUFDRixHQUFQLEdBQWFBLEdBQWI7TUFDQSxPQUFPRSxNQUFQO0lBQ0Q7RUFDRixDQWpJTSxDQUFQO0FBa0lEOztBQXhJREkiLCJuYW1lcyI6WyJncm91cEJ5Iiwia2V5U2VsZWN0b3IiLCJlbGVtZW50T3JPcHRpb25zIiwiZHVyYXRpb24iLCJjb25uZWN0b3IiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwiZWxlbWVudCIsImdyb3VwcyIsIk1hcCIsIm5vdGlmeSIsImNiIiwiZm9yRWFjaCIsImhhbmRsZUVycm9yIiwiZXJyIiwiY29uc3VtZXIiLCJlcnJvciIsImFjdGl2ZUdyb3VwcyIsInRlYXJkb3duQXR0ZW1wdGVkIiwiZ3JvdXBCeVNvdXJjZVN1YnNjcmliZXIiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwia2V5XzEiLCJncm91cF8xIiwiZ2V0Iiwic2V0IiwiU3ViamVjdF8xIiwiZ3JvdXBlZCIsImNyZWF0ZUdyb3VwZWRPYnNlcnZhYmxlIiwibmV4dCIsImR1cmF0aW9uU3Vic2NyaWJlcl8xIiwiY29tcGxldGUiLCJ1bnN1YnNjcmliZSIsInVuZGVmaW5lZCIsImFkZCIsImlubmVyRnJvbV8xIiwic3Vic2NyaWJlIiwiY2xlYXIiLCJrZXkiLCJncm91cFN1YmplY3QiLCJyZXN1bHQiLCJPYnNlcnZhYmxlXzEiLCJncm91cFN1YnNjcmliZXIiLCJpbm5lclN1YiIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9ncm91cEJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../Observable":8,"../Subject":11,"../observable/innerFrom":34,"../util/lift":219,"./OperatorSubscriber":48}],91:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ignoreElements = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var noop_1 = require("../util/noop");

function ignoreElements() {
  return lift_1.operate(function (source, subscriber) {
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, noop_1.noop));
  });
}

exports.ignoreElements = ignoreElements;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQXFDQSxTQUFnQkEsY0FBaEIsR0FBOEI7RUFDNUIsT0FBT0MsZUFBUSxVQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBbUI7SUFDaENELE1BQU0sQ0FBQ0UsU0FBUCxDQUFpQkMsOENBQXlCRixVQUF6QixFQUFxQ0csV0FBckMsQ0FBakI7RUFDRCxDQUZNLENBQVA7QUFHRDs7QUFKREMiLCJuYW1lcyI6WyJpZ25vcmVFbGVtZW50cyIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsIm5vb3BfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9pZ25vcmVFbGVtZW50cy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../util/lift":219,"../util/noop":221,"./OperatorSubscriber":48}],92:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmpty = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function isEmpty() {
  return lift_1.operate(function (source, subscriber) {
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
      subscriber.next(false);
      subscriber.complete();
    }, function () {
      subscriber.next(true);
      subscriber.complete();
    }));
  });
}

exports.isEmpty = isEmpty;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQStEQSxTQUFnQkEsT0FBaEIsR0FBdUI7RUFDckIsT0FBT0MsZUFBUSxVQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBbUI7SUFDaENELE1BQU0sQ0FBQ0UsU0FBUCxDQUNFQyw4Q0FDRUYsVUFERixFQUVFO01BQ0VBLFVBQVUsQ0FBQ0csSUFBWCxDQUFnQixLQUFoQjtNQUNBSCxVQUFVLENBQUNJLFFBQVg7SUFDRCxDQUxILEVBTUU7TUFDRUosVUFBVSxDQUFDRyxJQUFYLENBQWdCLElBQWhCO01BQ0FILFVBQVUsQ0FBQ0ksUUFBWDtJQUNELENBVEgsQ0FERjtFQWFELENBZE0sQ0FBUDtBQWVEOztBQWhCREMiLCJuYW1lcyI6WyJpc0VtcHR5IiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsInN1YnNjcmliZSIsIk9wZXJhdG9yU3Vic2NyaWJlcl8xIiwibmV4dCIsImNvbXBsZXRlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL2lzRW1wdHkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../util/lift":219,"./OperatorSubscriber":48}],93:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinAllInternals = void 0;

var identity_1 = require("../util/identity");

var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");

var pipe_1 = require("../util/pipe");

var mergeMap_1 = require("./mergeMap");

var toArray_1 = require("./toArray");

function joinAllInternals(joinFn, project) {
  return pipe_1.pipe(toArray_1.toArray(), mergeMap_1.mergeMap(function (sources) {
    return joinFn(sources);
  }), project ? mapOneOrManyArgs_1.mapOneOrManyArgs(project) : identity_1.identity);
}

exports.joinAllInternals = joinAllInternals;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQVlBLFNBQWdCQSxnQkFBaEIsQ0FBdUNDLE1BQXZDLEVBQWlHQyxPQUFqRyxFQUFnSTtFQUM5SCxPQUFPQyxZQUdMQyxtQkFISyxFQUtMQyxvQkFBUyxVQUFDQyxPQUFELEVBQVE7SUFBSyxhQUFNLENBQUNBLE9BQUQsQ0FBTjtFQUFlLENBQXJDLENBTEssRUFPTEosT0FBTyxHQUFHSyxvQ0FBaUJMLE9BQWpCLENBQUgsR0FBZ0NNLG1CQVBsQyxDQUFQO0FBU0Q7O0FBVkRDIiwibmFtZXMiOlsiam9pbkFsbEludGVybmFscyIsImpvaW5GbiIsInByb2plY3QiLCJwaXBlXzEiLCJ0b0FycmF5XzEiLCJtZXJnZU1hcF8xIiwic291cmNlcyIsIm1hcE9uZU9yTWFueUFyZ3NfMSIsImlkZW50aXR5XzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvam9pbkFsbEludGVybmFscy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../util/identity":208,"../util/mapOneOrManyArgs":220,"../util/pipe":223,"./mergeMap":102,"./toArray":153}],94:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.last = void 0;

var EmptyError_1 = require("../util/EmptyError");

var filter_1 = require("./filter");

var takeLast_1 = require("./takeLast");

var throwIfEmpty_1 = require("./throwIfEmpty");

var defaultIfEmpty_1 = require("./defaultIfEmpty");

var identity_1 = require("../util/identity");

function last(predicate, defaultValue) {
  var hasDefaultValue = arguments.length >= 2;
  return function (source) {
    return source.pipe(predicate ? filter_1.filter(function (v, i) {
      return predicate(v, i, source);
    }) : identity_1.identity, takeLast_1.takeLast(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function () {
      return new EmptyError_1.EmptyError();
    }));
  };
}

exports.last = last;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQXVFQSxTQUFnQkEsSUFBaEIsQ0FDRUMsU0FERixFQUVFQyxZQUZGLEVBRWtCO0VBRWhCLElBQU1DLGVBQWUsR0FBR0MsU0FBUyxDQUFDQyxNQUFWLElBQW9CLENBQTVDO0VBQ0EsT0FBTyxVQUFDQyxNQUFELEVBQXNCO0lBQzNCLGFBQU0sQ0FBQ0MsSUFBUCxDQUNFTixTQUFTLEdBQUdPLGdCQUFPLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFLO01BQUssZ0JBQVMsQ0FBQ0QsQ0FBRCxFQUFJQyxDQUFKLEVBQU9KLE1BQVAsQ0FBVDtJQUF1QixDQUF4QyxDQUFILEdBQStDSyxtQkFEMUQsRUFFRUMsb0JBQVMsQ0FBVCxDQUZGLEVBR0VULGVBQWUsR0FBR1UsZ0NBQWVYLFlBQWYsQ0FBSCxHQUFtQ1ksNEJBQWE7TUFBTSxXQUFJQyx1QkFBSjtJQUFnQixDQUFuQyxDQUhwRDtFQUlDLENBTEg7QUFNRDs7QUFYREMiLCJuYW1lcyI6WyJsYXN0IiwicHJlZGljYXRlIiwiZGVmYXVsdFZhbHVlIiwiaGFzRGVmYXVsdFZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwicGlwZSIsImZpbHRlcl8xIiwidiIsImkiLCJpZGVudGl0eV8xIiwidGFrZUxhc3RfMSIsImRlZmF1bHRJZkVtcHR5XzEiLCJ0aHJvd0lmRW1wdHlfMSIsIkVtcHR5RXJyb3JfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9sYXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/EmptyError":194,"../util/identity":208,"./defaultIfEmpty":70,"./filter":84,"./takeLast":142,"./throwIfEmpty":148}],95:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function map(project, thisArg) {
  return lift_1.operate(function (source, subscriber) {
    var index = 0;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      subscriber.next(project.call(thisArg, value, index++));
    }));
  });
}

exports.map = map;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQTZDQSxTQUFnQkEsR0FBaEIsQ0FBMEJDLE9BQTFCLEVBQW1FQyxPQUFuRSxFQUFnRjtFQUM5RSxPQUFPQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUVoQyxJQUFJQyxLQUFLLEdBQUcsQ0FBWjtJQUdBRixNQUFNLENBQUNHLFNBQVAsQ0FDRUMsOENBQXlCSCxVQUF6QixFQUFxQyxVQUFDSSxLQUFELEVBQVM7TUFHNUNKLFVBQVUsQ0FBQ0ssSUFBWCxDQUFnQlQsT0FBTyxDQUFDVSxJQUFSLENBQWFULE9BQWIsRUFBc0JPLEtBQXRCLEVBQTZCSCxLQUFLLEVBQWxDLENBQWhCO0lBQ0QsQ0FKRCxDQURGO0VBT0QsQ0FaTSxDQUFQO0FBYUQ7O0FBZERNIiwibmFtZXMiOlsibWFwIiwicHJvamVjdCIsInRoaXNBcmciLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwiaW5kZXgiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwibmV4dCIsImNhbGwiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWFwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/lift":219,"./OperatorSubscriber":48}],96:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapTo = void 0;

var map_1 = require("./map");

function mapTo(value) {
  return map_1.map(function () {
    return value;
  });
}

exports.mapTo = mapTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQTRDQSxTQUFnQkEsS0FBaEIsQ0FBeUJDLEtBQXpCLEVBQWlDO0VBQy9CLE9BQU9DLFVBQUk7SUFBTTtFQUFLLENBQWYsQ0FBUDtBQUNEOztBQUZEQyIsIm5hbWVzIjpbIm1hcFRvIiwidmFsdWUiLCJtYXBfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9tYXBUby50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./map":95}],97:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.materialize = void 0;

var Notification_1 = require("../Notification");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function materialize() {
  return lift_1.operate(function (source, subscriber) {
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      subscriber.next(Notification_1.Notification.createNext(value));
    }, function () {
      subscriber.next(Notification_1.Notification.createComplete());
      subscriber.complete();
    }, function (err) {
      subscriber.next(Notification_1.Notification.createError(err));
      subscriber.complete();
    }));
  });
}

exports.materialize = materialize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQWtEQSxTQUFnQkEsV0FBaEIsR0FBMkI7RUFDekIsT0FBT0MsZUFBUSxVQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBbUI7SUFDaENELE1BQU0sQ0FBQ0UsU0FBUCxDQUNFQyw4Q0FDRUYsVUFERixFQUVFLFVBQUNHLEtBQUQsRUFBTTtNQUNKSCxVQUFVLENBQUNJLElBQVgsQ0FBZ0JDLDRCQUFhQyxVQUFiLENBQXdCSCxLQUF4QixDQUFoQjtJQUNELENBSkgsRUFLRTtNQUNFSCxVQUFVLENBQUNJLElBQVgsQ0FBZ0JDLDRCQUFhRSxjQUFiLEVBQWhCO01BQ0FQLFVBQVUsQ0FBQ1EsUUFBWDtJQUNELENBUkgsRUFTRSxVQUFDQyxHQUFELEVBQUk7TUFDRlQsVUFBVSxDQUFDSSxJQUFYLENBQWdCQyw0QkFBYUssV0FBYixDQUF5QkQsR0FBekIsQ0FBaEI7TUFDQVQsVUFBVSxDQUFDUSxRQUFYO0lBQ0QsQ0FaSCxDQURGO0VBZ0JELENBakJNLENBQVA7QUFrQkQ7O0FBbkJERyIsIm5hbWVzIjpbIm1hdGVyaWFsaXplIiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsInN1YnNjcmliZSIsIk9wZXJhdG9yU3Vic2NyaWJlcl8xIiwidmFsdWUiLCJuZXh0IiwiTm90aWZpY2F0aW9uXzEiLCJjcmVhdGVOZXh0IiwiY3JlYXRlQ29tcGxldGUiLCJjb21wbGV0ZSIsImVyciIsImNyZWF0ZUVycm9yIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL21hdGVyaWFsaXplLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../Notification":6,"../util/lift":219,"./OperatorSubscriber":48}],98:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.max = void 0;

var reduce_1 = require("./reduce");

var isFunction_1 = require("../util/isFunction");

function max(comparer) {
  return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function (x, y) {
    return comparer(x, y) > 0 ? x : y;
  } : function (x, y) {
    return x > y ? x : y;
  });
}

exports.max = max;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQWdEQSxTQUFnQkEsR0FBaEIsQ0FBdUJDLFFBQXZCLEVBQXdEO0VBQ3RELE9BQU9DLGdCQUFPQyx3QkFBV0YsUUFBWCxJQUF1QixVQUFDRyxDQUFELEVBQUlDLENBQUosRUFBSztJQUFLLE9BQUNKLFFBQVEsQ0FBQ0csQ0FBRCxFQUFJQyxDQUFKLENBQVIsR0FBaUIsQ0FBakIsR0FBcUJELENBQXJCLEdBQXlCQyxDQUExQjtFQUE0QixDQUE3RCxHQUFnRSxVQUFDRCxDQUFELEVBQUlDLENBQUosRUFBSztJQUFLLE9BQUNELENBQUMsR0FBR0MsQ0FBSixHQUFRRCxDQUFSLEdBQVlDLENBQWI7RUFBZSxDQUFoRyxDQUFQO0FBQ0Q7O0FBRkRDIiwibmFtZXMiOlsibWF4IiwiY29tcGFyZXIiLCJyZWR1Y2VfMSIsImlzRnVuY3Rpb25fMSIsIngiLCJ5IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL21heC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../util/isFunction":212,"./reduce":117}],99:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.merge = void 0;

var lift_1 = require("../util/lift");

var argsOrArgArray_1 = require("../util/argsOrArgArray");

var mergeAll_1 = require("./mergeAll");

var args_1 = require("../util/args");

var from_1 = require("../observable/from");

function merge() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var scheduler = args_1.popScheduler(args);
  var concurrent = args_1.popNumber(args, Infinity);
  args = argsOrArgArray_1.argsOrArgArray(args);
  return lift_1.operate(function (source, subscriber) {
    mergeAll_1.mergeAll(concurrent)(from_1.from(__spreadArray([source], __read(args)), scheduler)).subscribe(subscriber);
  });
}

exports.merge = merge;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBaUJBLFNBQWdCQSxLQUFoQixHQUFxQjtFQUFJOztPQUFBLHlDQUFrQjtJQUFsQkM7OztFQUN2QixJQUFNQyxTQUFTLEdBQUdDLG9CQUFhRixJQUFiLENBQWxCO0VBQ0EsSUFBTUcsVUFBVSxHQUFHRCxpQkFBVUYsSUFBVixFQUFnQkksUUFBaEIsQ0FBbkI7RUFDQUosSUFBSSxHQUFHSyxnQ0FBZUwsSUFBZixDQUFQO0VBRUEsT0FBT00sZUFBUSxVQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBbUI7SUFDaENDLG9CQUFTTixVQUFULEVBQXFCTyxZQUFJQyxlQUFFSixNQUFGLEdBQVFLLE9BQU1aLElBQU4sQ0FBUixDQUFKLEVBQWtEQyxTQUFsRCxDQUFyQixFQUFtRlksU0FBbkYsQ0FBNkZMLFVBQTdGO0VBQ0QsQ0FGTSxDQUFQO0FBR0Q7O0FBUkRNIiwibmFtZXMiOlsibWVyZ2UiLCJhcmdzIiwic2NoZWR1bGVyIiwiYXJnc18xIiwiY29uY3VycmVudCIsIkluZmluaXR5IiwiYXJnc09yQXJnQXJyYXlfMSIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJtZXJnZUFsbF8xIiwiZnJvbV8xIiwiX19zcHJlYWRBcnJheSIsIl9fcmVhZCIsInN1YnNjcmliZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9tZXJnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../observable/from":28,"../util/args":200,"../util/argsOrArgArray":202,"../util/lift":219,"./mergeAll":100}],100:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeAll = void 0;

var mergeMap_1 = require("./mergeMap");

var identity_1 = require("../util/identity");

function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }

  return mergeMap_1.mergeMap(identity_1.identity, concurrent);
}

exports.mergeAll = mergeAll;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQThEQSxTQUFnQkEsUUFBaEIsQ0FBeURDLFVBQXpELEVBQXNGO0VBQTdCO0lBQUFBO0VBQTZCOztFQUNwRixPQUFPQyxvQkFBU0MsbUJBQVQsRUFBbUJGLFVBQW5CLENBQVA7QUFDRDs7QUFGREciLCJuYW1lcyI6WyJtZXJnZUFsbCIsImNvbmN1cnJlbnQiLCJtZXJnZU1hcF8xIiwiaWRlbnRpdHlfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9tZXJnZUFsbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../util/identity":208,"./mergeMap":102}],101:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeInternals = void 0;

var innerFrom_1 = require("../observable/innerFrom");

var executeSchedule_1 = require("../util/executeSchedule");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
  var buffer = [];
  var active = 0;
  var index = 0;
  var isComplete = false;

  var checkComplete = function checkComplete() {
    if (isComplete && !buffer.length && !active) {
      subscriber.complete();
    }
  };

  var outerNext = function outerNext(value) {
    return active < concurrent ? doInnerSub(value) : buffer.push(value);
  };

  var doInnerSub = function doInnerSub(value) {
    expand && subscriber.next(value);
    active++;
    var innerComplete = false;
    innerFrom_1.innerFrom(project(value, index++)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (innerValue) {
      onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);

      if (expand) {
        outerNext(innerValue);
      } else {
        subscriber.next(innerValue);
      }
    }, function () {
      innerComplete = true;
    }, undefined, function () {
      if (innerComplete) {
        try {
          active--;

          var _loop_1 = function _loop_1() {
            var bufferedValue = buffer.shift();

            if (innerSubScheduler) {
              executeSchedule_1.executeSchedule(subscriber, innerSubScheduler, function () {
                return doInnerSub(bufferedValue);
              });
            } else {
              doInnerSub(bufferedValue);
            }
          };

          while (buffer.length && active < concurrent) {
            _loop_1();
          }

          checkComplete();
        } catch (err) {
          subscriber.error(err);
        }
      }
    }));
  };

  source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, outerNext, function () {
    isComplete = true;
    checkComplete();
  }));
  return function () {
    additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
  };
}

exports.mergeInternals = mergeInternals;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUdBOztBQUNBOztBQWVBLFNBQWdCQSxjQUFoQixDQUNFQyxNQURGLEVBRUVDLFVBRkYsRUFHRUMsT0FIRixFQUlFQyxVQUpGLEVBS0VDLFlBTEYsRUFNRUMsTUFORixFQU9FQyxpQkFQRixFQVFFQyxtQkFSRixFQVFrQztFQUdoQyxJQUFNQyxNQUFNLEdBQVEsRUFBcEI7RUFFQSxJQUFJQyxNQUFNLEdBQUcsQ0FBYjtFQUVBLElBQUlDLEtBQUssR0FBRyxDQUFaO0VBRUEsSUFBSUMsVUFBVSxHQUFHLEtBQWpCOztFQUtBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7SUFJcEIsSUFBSUQsVUFBVSxJQUFJLENBQUNILE1BQU0sQ0FBQ0ssTUFBdEIsSUFBZ0MsQ0FBQ0osTUFBckMsRUFBNkM7TUFDM0NSLFVBQVUsQ0FBQ2EsUUFBWDtJQUNEO0VBQ0YsQ0FQRDs7RUFVQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVM7SUFBSyxPQUFDUCxNQUFNLEdBQUdOLFVBQVQsR0FBc0JjLFVBQVUsQ0FBQ0QsS0FBRCxDQUFoQyxHQUEwQ1IsTUFBTSxDQUFDVSxJQUFQLENBQVlGLEtBQVosQ0FBM0M7RUFBOEQsQ0FBOUY7O0VBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0QsS0FBRCxFQUFTO0lBSTFCWCxNQUFNLElBQUlKLFVBQVUsQ0FBQ2tCLElBQVgsQ0FBZ0JILEtBQWhCLENBQVY7SUFJQVAsTUFBTTtJQUtOLElBQUlXLGFBQWEsR0FBRyxLQUFwQjtJQUdBQyxzQkFBVW5CLE9BQU8sQ0FBQ2MsS0FBRCxFQUFRTixLQUFLLEVBQWIsQ0FBakIsRUFBbUNZLFNBQW5DLENBQ0VDLDhDQUNFdEIsVUFERixFQUVFLFVBQUN1QixVQUFELEVBQVc7TUFHVHBCLFlBQVksU0FBWixnQkFBWSxXQUFaLEdBQVksTUFBWixlQUFZLENBQUdvQixVQUFILENBQVo7O01BRUEsSUFBSW5CLE1BQUosRUFBWTtRQUdWVSxTQUFTLENBQUNTLFVBQUQsQ0FBVDtNQUNELENBSkQsTUFJTztRQUVMdkIsVUFBVSxDQUFDa0IsSUFBWCxDQUFnQkssVUFBaEI7TUFDRDtJQUNGLENBZkgsRUFnQkU7TUFHRUosYUFBYSxHQUFHLElBQWhCO0lBQ0QsQ0FwQkgsRUFzQkVLLFNBdEJGLEVBdUJFO01BSUUsSUFBSUwsYUFBSixFQUFtQjtRQUtqQixJQUFJO1VBSUZYLE1BQU07OztZQU1KLElBQU1pQixhQUFhLEdBQUdsQixNQUFNLENBQUNtQixLQUFQLEVBQXRCOztZQUlBLElBQUlyQixpQkFBSixFQUF1QjtjQUNyQnNCLGtDQUFnQjNCLFVBQWhCLEVBQTRCSyxpQkFBNUIsRUFBK0M7Z0JBQU0saUJBQVUsQ0FBQ29CLGFBQUQsQ0FBVjtjQUF5QixDQUE5RTtZQUNELENBRkQsTUFFTztjQUNMVCxVQUFVLENBQUNTLGFBQUQsQ0FBVjtZQUNEOzs7VUFUSCxPQUFPbEIsTUFBTSxDQUFDSyxNQUFQLElBQWlCSixNQUFNLEdBQUdOLFVBQWpDLEVBQTJDOztVQVUxQzs7VUFFRFMsYUFBYTtRQUNkLENBdEJELENBc0JFLE9BQU9pQixHQUFQLEVBQVk7VUFDWjVCLFVBQVUsQ0FBQzZCLEtBQVgsQ0FBaUJELEdBQWpCO1FBQ0Q7TUFDRjtJQUNGLENBMURILENBREY7RUE4REQsQ0E5RUQ7O0VBaUZBN0IsTUFBTSxDQUFDc0IsU0FBUCxDQUNFQyw4Q0FBeUJ0QixVQUF6QixFQUFxQ2MsU0FBckMsRUFBZ0Q7SUFFOUNKLFVBQVUsR0FBRyxJQUFiO0lBQ0FDLGFBQWE7RUFDZCxDQUpELENBREY7RUFVQSxPQUFPO0lBQ0xMLG1CQUFtQixTQUFuQix1QkFBbUIsV0FBbkIsR0FBbUIsTUFBbkIsc0JBQW1CLEVBQW5CO0VBQ0QsQ0FGRDtBQUdEOztBQWhJRHdCIiwibmFtZXMiOlsibWVyZ2VJbnRlcm5hbHMiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwicHJvamVjdCIsImNvbmN1cnJlbnQiLCJvbkJlZm9yZU5leHQiLCJleHBhbmQiLCJpbm5lclN1YlNjaGVkdWxlciIsImFkZGl0aW9uYWxGaW5hbGl6ZXIiLCJidWZmZXIiLCJhY3RpdmUiLCJpbmRleCIsImlzQ29tcGxldGUiLCJjaGVja0NvbXBsZXRlIiwibGVuZ3RoIiwiY29tcGxldGUiLCJvdXRlck5leHQiLCJ2YWx1ZSIsImRvSW5uZXJTdWIiLCJwdXNoIiwibmV4dCIsImlubmVyQ29tcGxldGUiLCJpbm5lckZyb21fMSIsInN1YnNjcmliZSIsIk9wZXJhdG9yU3Vic2NyaWJlcl8xIiwiaW5uZXJWYWx1ZSIsInVuZGVmaW5lZCIsImJ1ZmZlcmVkVmFsdWUiLCJzaGlmdCIsImV4ZWN1dGVTY2hlZHVsZV8xIiwiZXJyIiwiZXJyb3IiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWVyZ2VJbnRlcm5hbHMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../observable/innerFrom":34,"../util/executeSchedule":207,"./OperatorSubscriber":48}],102:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMap = void 0;

var map_1 = require("./map");

var innerFrom_1 = require("../observable/innerFrom");

var lift_1 = require("../util/lift");

var mergeInternals_1 = require("./mergeInternals");

var isFunction_1 = require("../util/isFunction");

function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }

  if (isFunction_1.isFunction(resultSelector)) {
    return mergeMap(function (a, i) {
      return map_1.map(function (b, ii) {
        return resultSelector(a, b, i, ii);
      })(innerFrom_1.innerFrom(project(a, i)));
    }, concurrent);
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }

  return lift_1.operate(function (source, subscriber) {
    return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent);
  });
}

exports.mergeMap = mergeMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQTZFQSxTQUFnQkEsUUFBaEIsQ0FDRUMsT0FERixFQUVFQyxjQUZGLEVBR0VDLFVBSEYsRUFHK0I7RUFBN0I7SUFBQUE7RUFBNkI7O0VBRTdCLElBQUlDLHdCQUFXRixjQUFYLENBQUosRUFBZ0M7SUFFOUIsT0FBT0YsUUFBUSxDQUFDLFVBQUNLLENBQUQsRUFBSUMsQ0FBSixFQUFLO01BQUssaUJBQUksVUFBQ0MsQ0FBRCxFQUFTQyxFQUFULEVBQW1CO1FBQUsscUJBQWMsQ0FBQ0gsQ0FBRCxFQUFJRSxDQUFKLEVBQU9ELENBQVAsRUFBVUUsRUFBVixDQUFkO01BQTJCLENBQXZELEVBQXlEQyxzQkFBVVIsT0FBTyxDQUFDSSxDQUFELEVBQUlDLENBQUosQ0FBakIsQ0FBekQ7SUFBa0YsQ0FBN0YsRUFBK0ZILFVBQS9GLENBQWY7RUFDRCxDQUhELE1BR08sSUFBSSxPQUFPRCxjQUFQLEtBQTBCLFFBQTlCLEVBQXdDO0lBQzdDQyxVQUFVLEdBQUdELGNBQWI7RUFDRDs7RUFFRCxPQUFPUSxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUFLLHVDQUFlRCxNQUFmLEVBQXVCQyxVQUF2QixFQUFtQ1gsT0FBbkMsRUFBNENFLFVBQTVDO0VBQXVELENBQXZGLENBQVA7QUFDRDs7QUFiRFUiLCJuYW1lcyI6WyJtZXJnZU1hcCIsInByb2plY3QiLCJyZXN1bHRTZWxlY3RvciIsImNvbmN1cnJlbnQiLCJpc0Z1bmN0aW9uXzEiLCJhIiwiaSIsImIiLCJpaSIsImlubmVyRnJvbV8xIiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9tZXJnZU1hcC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../observable/innerFrom":34,"../util/isFunction":212,"../util/lift":219,"./map":95,"./mergeInternals":101}],103:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeMapTo = void 0;

var mergeMap_1 = require("./mergeMap");

var isFunction_1 = require("../util/isFunction");

function mergeMapTo(innerObservable, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }

  if (isFunction_1.isFunction(resultSelector)) {
    return mergeMap_1.mergeMap(function () {
      return innerObservable;
    }, resultSelector, concurrent);
  }

  if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }

  return mergeMap_1.mergeMap(function () {
    return innerObservable;
  }, concurrent);
}

exports.mergeMapTo = mergeMapTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQTJEQSxTQUFnQkEsVUFBaEIsQ0FDRUMsZUFERixFQUVFQyxjQUZGLEVBR0VDLFVBSEYsRUFHK0I7RUFBN0I7SUFBQUE7RUFBNkI7O0VBRTdCLElBQUlDLHdCQUFXRixjQUFYLENBQUosRUFBZ0M7SUFDOUIsT0FBT0csb0JBQVM7TUFBTTtJQUFlLENBQTlCLEVBQWdDSCxjQUFoQyxFQUFnREMsVUFBaEQsQ0FBUDtFQUNEOztFQUNELElBQUksT0FBT0QsY0FBUCxLQUEwQixRQUE5QixFQUF3QztJQUN0Q0MsVUFBVSxHQUFHRCxjQUFiO0VBQ0Q7O0VBQ0QsT0FBT0csb0JBQVM7SUFBTTtFQUFlLENBQTlCLEVBQWdDRixVQUFoQyxDQUFQO0FBQ0Q7O0FBWkRHIiwibmFtZXMiOlsibWVyZ2VNYXBUbyIsImlubmVyT2JzZXJ2YWJsZSIsInJlc3VsdFNlbGVjdG9yIiwiY29uY3VycmVudCIsImlzRnVuY3Rpb25fMSIsIm1lcmdlTWFwXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWVyZ2VNYXBUby50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../util/isFunction":212,"./mergeMap":102}],104:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeScan = void 0;

var lift_1 = require("../util/lift");

var mergeInternals_1 = require("./mergeInternals");

function mergeScan(accumulator, seed, concurrent) {
  if (concurrent === void 0) {
    concurrent = Infinity;
  }

  return lift_1.operate(function (source, subscriber) {
    var state = seed;
    return mergeInternals_1.mergeInternals(source, subscriber, function (value, index) {
      return accumulator(state, value, index);
    }, concurrent, function (value) {
      state = value;
    }, false, undefined, function () {
      return state = null;
    });
  });
}

exports.mergeScan = mergeScan;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQW9FQSxTQUFnQkEsU0FBaEIsQ0FDRUMsV0FERixFQUVFQyxJQUZGLEVBR0VDLFVBSEYsRUFHdUI7RUFBckI7SUFBQUE7RUFBcUI7O0VBRXJCLE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBRWhDLElBQUlDLEtBQUssR0FBR0wsSUFBWjtJQUVBLE9BQU9NLGdDQUNMSCxNQURLLEVBRUxDLFVBRkssRUFHTCxVQUFDRyxLQUFELEVBQVFDLEtBQVIsRUFBYTtNQUFLLGtCQUFXLENBQUNILEtBQUQsRUFBUUUsS0FBUixFQUFlQyxLQUFmLENBQVg7SUFBZ0MsQ0FIN0MsRUFJTFAsVUFKSyxFQUtMLFVBQUNNLEtBQUQsRUFBTTtNQUNKRixLQUFLLEdBQUdFLEtBQVI7SUFDRCxDQVBJLEVBUUwsS0FSSyxFQVNMRSxTQVRLLEVBVUw7TUFBTSxPQUFDSixLQUFLLEdBQUcsSUFBVDtJQUFlLENBVmhCLENBQVA7RUFZRCxDQWhCTSxDQUFQO0FBaUJEOztBQXRCREsiLCJuYW1lcyI6WyJtZXJnZVNjYW4iLCJhY2N1bXVsYXRvciIsInNlZWQiLCJjb25jdXJyZW50IiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsInN0YXRlIiwibWVyZ2VJbnRlcm5hbHNfMSIsInZhbHVlIiwiaW5kZXgiLCJ1bmRlZmluZWQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWVyZ2VTY2FuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/lift":219,"./mergeInternals":101}],105:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeWith = void 0;

var merge_1 = require("./merge");

function mergeWith() {
  var otherSources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    otherSources[_i] = arguments[_i];
  }

  return merge_1.merge.apply(void 0, __spreadArray([], __read(otherSources)));
}

exports.mergeWith = mergeWith;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBMkNBLFNBQWdCQSxTQUFoQixHQUF5QjtFQUN2Qjs7T0FBQSx5Q0FBNkM7SUFBN0NDOzs7RUFFQSxPQUFPQyxjQUFLQyxLQUFMLENBQUssTUFBTCxFQUFLQyx5QkFBSUgsWUFBSixFQUFMLENBQVA7QUFDRDs7QUFKREkiLCJuYW1lcyI6WyJtZXJnZVdpdGgiLCJvdGhlclNvdXJjZXMiLCJtZXJnZV8xIiwiYXBwbHkiLCJfX3NwcmVhZEFycmF5IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL21lcmdlV2l0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./merge":99}],106:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.min = void 0;

var reduce_1 = require("./reduce");

var isFunction_1 = require("../util/isFunction");

function min(comparer) {
  return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function (x, y) {
    return comparer(x, y) < 0 ? x : y;
  } : function (x, y) {
    return x < y ? x : y;
  });
}

exports.min = min;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQWdEQSxTQUFnQkEsR0FBaEIsQ0FBdUJDLFFBQXZCLEVBQXdEO0VBQ3RELE9BQU9DLGdCQUFPQyx3QkFBV0YsUUFBWCxJQUF1QixVQUFDRyxDQUFELEVBQUlDLENBQUosRUFBSztJQUFLLE9BQUNKLFFBQVEsQ0FBQ0csQ0FBRCxFQUFJQyxDQUFKLENBQVIsR0FBaUIsQ0FBakIsR0FBcUJELENBQXJCLEdBQXlCQyxDQUExQjtFQUE0QixDQUE3RCxHQUFnRSxVQUFDRCxDQUFELEVBQUlDLENBQUosRUFBSztJQUFLLE9BQUNELENBQUMsR0FBR0MsQ0FBSixHQUFRRCxDQUFSLEdBQVlDLENBQWI7RUFBZSxDQUFoRyxDQUFQO0FBQ0Q7O0FBRkRDIiwibmFtZXMiOlsibWluIiwiY29tcGFyZXIiLCJyZWR1Y2VfMSIsImlzRnVuY3Rpb25fMSIsIngiLCJ5IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL21pbi50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../util/isFunction":212,"./reduce":117}],107:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multicast = void 0;

var ConnectableObservable_1 = require("../observable/ConnectableObservable");

var isFunction_1 = require("../util/isFunction");

var connect_1 = require("./connect");

function multicast(subjectOrSubjectFactory, selector) {
  var subjectFactory = isFunction_1.isFunction(subjectOrSubjectFactory) ? subjectOrSubjectFactory : function () {
    return subjectOrSubjectFactory;
  };

  if (isFunction_1.isFunction(selector)) {
    return connect_1.connect(selector, {
      connector: subjectFactory
    });
  }

  return function (source) {
    return new ConnectableObservable_1.ConnectableObservable(source, subjectFactory);
  };
}

exports.multicast = multicast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQTRFQSxTQUFnQkEsU0FBaEIsQ0FDRUMsdUJBREYsRUFFRUMsUUFGRixFQUVxRDtFQUVuRCxJQUFNQyxjQUFjLEdBQUdDLHdCQUFXSCx1QkFBWCxJQUFzQ0EsdUJBQXRDLEdBQWdFO0lBQU07RUFBdUIsQ0FBcEg7O0VBRUEsSUFBSUcsd0JBQVdGLFFBQVgsQ0FBSixFQUEwQjtJQUl4QixPQUFPRyxrQkFBUUgsUUFBUixFQUFrQjtNQUN2QkksU0FBUyxFQUFFSDtJQURZLENBQWxCLENBQVA7RUFHRDs7RUFFRCxPQUFPLFVBQUNJLE1BQUQsRUFBc0I7SUFBSyxXQUFJQyw2Q0FBSixDQUErQkQsTUFBL0IsRUFBdUNKLGNBQXZDO0VBQXNELENBQXhGO0FBQ0Q7O0FBaEJETSIsIm5hbWVzIjpbIm11bHRpY2FzdCIsInN1YmplY3RPclN1YmplY3RGYWN0b3J5Iiwic2VsZWN0b3IiLCJzdWJqZWN0RmFjdG9yeSIsImlzRnVuY3Rpb25fMSIsImNvbm5lY3RfMSIsImNvbm5lY3RvciIsInNvdXJjZSIsIkNvbm5lY3RhYmxlT2JzZXJ2YWJsZV8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL211bHRpY2FzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../observable/ConnectableObservable":17,"../util/isFunction":212,"./connect":66}],108:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observeOn = void 0;

var executeSchedule_1 = require("../util/executeSchedule");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function observeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return lift_1.operate(function (source, subscriber) {
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      return executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
        return subscriber.next(value);
      }, delay);
    }, function () {
      return executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
        return subscriber.complete();
      }, delay);
    }, function (err) {
      return executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
        return subscriber.error(err);
      }, delay);
    }));
  });
}

exports.observeOn = observeOn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQXNEQSxTQUFnQkEsU0FBaEIsQ0FBNkJDLFNBQTdCLEVBQXVEQyxLQUF2RCxFQUFnRTtFQUFUO0lBQUFBO0VBQVM7O0VBQzlELE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBQ2hDRCxNQUFNLENBQUNFLFNBQVAsQ0FDRUMsOENBQ0VGLFVBREYsRUFFRSxVQUFDRyxLQUFELEVBQU07TUFBSyx5Q0FBZ0JILFVBQWhCLEVBQTRCSixTQUE1QixFQUF1QztRQUFNLGlCQUFVLENBQUNRLElBQVgsQ0FBZ0JELEtBQWhCO01BQXNCLENBQW5FLEVBQXFFTixLQUFyRTtJQUEyRSxDQUZ4RixFQUdFO01BQU0seUNBQWdCRyxVQUFoQixFQUE0QkosU0FBNUIsRUFBdUM7UUFBTSxpQkFBVSxDQUFDUyxRQUFYO01BQXFCLENBQWxFLEVBQW9FUixLQUFwRTtJQUEwRSxDQUhsRixFQUlFLFVBQUNTLEdBQUQsRUFBSTtNQUFLLHlDQUFnQk4sVUFBaEIsRUFBNEJKLFNBQTVCLEVBQXVDO1FBQU0saUJBQVUsQ0FBQ1csS0FBWCxDQUFpQkQsR0FBakI7TUFBcUIsQ0FBbEUsRUFBb0VULEtBQXBFO0lBQTBFLENBSnJGLENBREY7RUFRRCxDQVRNLENBQVA7QUFVRDs7QUFYRFciLCJuYW1lcyI6WyJvYnNlcnZlT24iLCJzY2hlZHVsZXIiLCJkZWxheSIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwibmV4dCIsImNvbXBsZXRlIiwiZXJyIiwiZXJyb3IiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvb2JzZXJ2ZU9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/executeSchedule":207,"../util/lift":219,"./OperatorSubscriber":48}],109:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onErrorResumeNext = void 0;

var lift_1 = require("../util/lift");

var innerFrom_1 = require("../observable/innerFrom");

var argsOrArgArray_1 = require("../util/argsOrArgArray");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var noop_1 = require("../util/noop");

function onErrorResumeNext() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
  return lift_1.operate(function (source, subscriber) {
    var remaining = __spreadArray([source], __read(nextSources));

    var subscribeNext = function subscribeNext() {
      if (!subscriber.closed) {
        if (remaining.length > 0) {
          var nextSource = void 0;

          try {
            nextSource = innerFrom_1.innerFrom(remaining.shift());
          } catch (err) {
            subscribeNext();
            return;
          }

          var innerSub = OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, noop_1.noop, noop_1.noop);
          nextSource.subscribe(innerSub);
          innerSub.add(subscribeNext);
        } else {
          subscriber.complete();
        }
      }
    };

    subscribeNext();
  });
}

exports.onErrorResumeNext = onErrorResumeNext;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBaUZBLFNBQWdCQSxpQkFBaEIsR0FBaUM7RUFDL0I7O09BQUEseUNBQXlFO0lBQXpFQzs7O0VBTUEsSUFBTUMsV0FBVyxHQUFHQyxnQ0FBZUYsT0FBZixDQUFwQjtFQUVBLE9BQU9HLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBQ2hDLElBQU1DLFNBQVMsa0JBQUlGLE1BQUosR0FBVUcsT0FBS04sV0FBTCxDQUFWLENBQWY7O0lBQ0EsSUFBTU8sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtNQUNwQixJQUFJLENBQUNILFVBQVUsQ0FBQ0ksTUFBaEIsRUFBd0I7UUFDdEIsSUFBSUgsU0FBUyxDQUFDSSxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO1VBQ3hCLElBQUlDLFVBQVUsU0FBZDs7VUFDQSxJQUFJO1lBQ0ZBLFVBQVUsR0FBR0Msc0JBQVVOLFNBQVMsQ0FBQ08sS0FBVixFQUFWLENBQWI7VUFDRCxDQUZELENBRUUsT0FBT0MsR0FBUCxFQUFZO1lBQ1pOLGFBQWE7WUFDYjtVQUNEOztVQU1ELElBQU1PLFFBQVEsR0FBR0MsOENBQXlCWCxVQUF6QixFQUFxQ1ksU0FBckMsRUFBZ0RDLFdBQWhELEVBQXNEQSxXQUF0RCxDQUFqQjtVQUNBUCxVQUFVLENBQUNRLFNBQVgsQ0FBcUJKLFFBQXJCO1VBQ0FBLFFBQVEsQ0FBQ0ssR0FBVCxDQUFhWixhQUFiO1FBQ0QsQ0FoQkQsTUFnQk87VUFDTEgsVUFBVSxDQUFDZ0IsUUFBWDtRQUNEO01BQ0Y7SUFDRixDQXRCRDs7SUF3QkFiLGFBQWE7RUFDZCxDQTNCTSxDQUFQO0FBNEJEOztBQXJDRGMiLCJuYW1lcyI6WyJvbkVycm9yUmVzdW1lTmV4dCIsInNvdXJjZXMiLCJuZXh0U291cmNlcyIsImFyZ3NPckFyZ0FycmF5XzEiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwicmVtYWluaW5nIiwiX19yZWFkIiwic3Vic2NyaWJlTmV4dCIsImNsb3NlZCIsImxlbmd0aCIsIm5leHRTb3VyY2UiLCJpbm5lckZyb21fMSIsInNoaWZ0IiwiZXJyIiwiaW5uZXJTdWIiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInVuZGVmaW5lZCIsIm5vb3BfMSIsInN1YnNjcmliZSIsImFkZCIsImNvbXBsZXRlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL29uRXJyb3JSZXN1bWVOZXh0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../observable/innerFrom":34,"../util/argsOrArgArray":202,"../util/lift":219,"../util/noop":221,"./OperatorSubscriber":48}],110:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pairwise = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function pairwise() {
  return lift_1.operate(function (source, subscriber) {
    var prev;
    var hasPrev = false;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      var p = prev;
      prev = value;
      hasPrev && subscriber.next([p, value]);
      hasPrev = true;
    }));
  });
}

exports.pairwise = pairwise;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQTZDQSxTQUFnQkEsUUFBaEIsR0FBd0I7RUFDdEIsT0FBT0MsZUFBUSxVQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBbUI7SUFDaEMsSUFBSUMsSUFBSjtJQUNBLElBQUlDLE9BQU8sR0FBRyxLQUFkO0lBQ0FILE1BQU0sQ0FBQ0ksU0FBUCxDQUNFQyw4Q0FBeUJKLFVBQXpCLEVBQXFDLFVBQUNLLEtBQUQsRUFBTTtNQUN6QyxJQUFNQyxDQUFDLEdBQUdMLElBQVY7TUFDQUEsSUFBSSxHQUFHSSxLQUFQO01BQ0FILE9BQU8sSUFBSUYsVUFBVSxDQUFDTyxJQUFYLENBQWdCLENBQUNELENBQUQsRUFBSUQsS0FBSixDQUFoQixDQUFYO01BQ0FILE9BQU8sR0FBRyxJQUFWO0lBQ0QsQ0FMRCxDQURGO0VBUUQsQ0FYTSxDQUFQO0FBWUQ7O0FBYkRNIiwibmFtZXMiOlsicGFpcndpc2UiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwicHJldiIsImhhc1ByZXYiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwicCIsIm5leHQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvcGFpcndpc2UudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../util/lift":219,"./OperatorSubscriber":48}],111:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluck = void 0;

var map_1 = require("./map");

function pluck() {
  var properties = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    properties[_i] = arguments[_i];
  }

  var length = properties.length;

  if (length === 0) {
    throw new Error('list of properties cannot be empty.');
  }

  return map_1.map(function (x) {
    var currentProp = x;

    for (var i = 0; i < length; i++) {
      var p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];

      if (typeof p !== 'undefined') {
        currentProp = p;
      } else {
        return undefined;
      }
    }

    return currentProp;
  });
}

exports.pluck = pluck;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQXdGQSxTQUFnQkEsS0FBaEIsR0FBcUI7RUFBTzs7T0FBQSx5Q0FBOEM7SUFBOUNDOzs7RUFDMUIsSUFBTUMsTUFBTSxHQUFHRCxVQUFVLENBQUNDLE1BQTFCOztFQUNBLElBQUlBLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0lBQ2hCLE1BQU0sSUFBSUMsS0FBSixDQUFVLHFDQUFWLENBQU47RUFDRDs7RUFDRCxPQUFPQyxVQUFJLFVBQUNDLENBQUQsRUFBRTtJQUNYLElBQUlDLFdBQVcsR0FBUUQsQ0FBdkI7O0lBQ0EsS0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxNQUFwQixFQUE0QkssQ0FBQyxFQUE3QixFQUFpQztNQUMvQixJQUFNQyxDQUFDLEdBQUdGLFdBQVcsU0FBWCxlQUFXLFdBQVgsR0FBVyxNQUFYLGNBQVcsQ0FBR0wsVUFBVSxDQUFDTSxDQUFELENBQWIsQ0FBckI7O01BQ0EsSUFBSSxPQUFPQyxDQUFQLEtBQWEsV0FBakIsRUFBOEI7UUFDNUJGLFdBQVcsR0FBR0UsQ0FBZDtNQUNELENBRkQsTUFFTztRQUNMLE9BQU9DLFNBQVA7TUFDRDtJQUNGOztJQUNELE9BQU9ILFdBQVA7RUFDRCxDQVhNLENBQVA7QUFZRDs7QUFqQkRJIiwibmFtZXMiOlsicGx1Y2siLCJwcm9wZXJ0aWVzIiwibGVuZ3RoIiwiRXJyb3IiLCJtYXBfMSIsIngiLCJjdXJyZW50UHJvcCIsImkiLCJwIiwidW5kZWZpbmVkIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3BsdWNrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"./map":95}],112:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publish = void 0;

var Subject_1 = require("../Subject");

var multicast_1 = require("./multicast");

var connect_1 = require("./connect");

function publish(selector) {
  return selector ? function (source) {
    return connect_1.connect(selector)(source);
  } : function (source) {
    return multicast_1.multicast(new Subject_1.Subject())(source);
  };
}

exports.publish = publish;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUdBOztBQXFGQSxTQUFnQkEsT0FBaEIsQ0FBOEJDLFFBQTlCLEVBQStEO0VBQzdELE9BQU9BLFFBQVEsR0FBRyxVQUFDQyxNQUFELEVBQU87SUFBSyx5QkFBUUQsUUFBUixFQUFrQkMsTUFBbEI7RUFBeUIsQ0FBeEMsR0FBMkMsVUFBQ0EsTUFBRCxFQUFPO0lBQUssNkJBQVUsSUFBSUMsaUJBQUosRUFBVixFQUE0QkQsTUFBNUI7RUFBbUMsQ0FBekc7QUFDRDs7QUFGREUiLCJuYW1lcyI6WyJwdWJsaXNoIiwic2VsZWN0b3IiLCJzb3VyY2UiLCJTdWJqZWN0XzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvcHVibGlzaC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../Subject":11,"./connect":66,"./multicast":107}],113:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishBehavior = void 0;

var BehaviorSubject_1 = require("../BehaviorSubject");

var ConnectableObservable_1 = require("../observable/ConnectableObservable");

function publishBehavior(initialValue) {
  return function (source) {
    var subject = new BehaviorSubject_1.BehaviorSubject(initialValue);
    return new ConnectableObservable_1.ConnectableObservable(source, function () {
      return subject;
    });
  };
}

exports.publishBehavior = publishBehavior;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQWlCQSxTQUFnQkEsZUFBaEIsQ0FBbUNDLFlBQW5DLEVBQWtEO0VBRWhELE9BQU8sVUFBQ0MsTUFBRCxFQUFPO0lBQ1osSUFBTUMsT0FBTyxHQUFHLElBQUlDLGlDQUFKLENBQXVCSCxZQUF2QixDQUFoQjtJQUNBLE9BQU8sSUFBSUksNkNBQUosQ0FBMEJILE1BQTFCLEVBQWtDO01BQU07SUFBTyxDQUEvQyxDQUFQO0VBQ0QsQ0FIRDtBQUlEOztBQU5ESSIsIm5hbWVzIjpbInB1Ymxpc2hCZWhhdmlvciIsImluaXRpYWxWYWx1ZSIsInNvdXJjZSIsInN1YmplY3QiLCJCZWhhdmlvclN1YmplY3RfMSIsIkNvbm5lY3RhYmxlT2JzZXJ2YWJsZV8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3B1Ymxpc2hCZWhhdmlvci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../BehaviorSubject":5,"../observable/ConnectableObservable":17}],114:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishLast = void 0;

var AsyncSubject_1 = require("../AsyncSubject");

var ConnectableObservable_1 = require("../observable/ConnectableObservable");

function publishLast() {
  return function (source) {
    var subject = new AsyncSubject_1.AsyncSubject();
    return new ConnectableObservable_1.ConnectableObservable(source, function () {
      return subject;
    });
  };
}

exports.publishLast = publishLast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQW1FQSxTQUFnQkEsV0FBaEIsR0FBMkI7RUFFekIsT0FBTyxVQUFDQyxNQUFELEVBQU87SUFDWixJQUFNQyxPQUFPLEdBQUcsSUFBSUMsMkJBQUosRUFBaEI7SUFDQSxPQUFPLElBQUlDLDZDQUFKLENBQTBCSCxNQUExQixFQUFrQztNQUFNO0lBQU8sQ0FBL0MsQ0FBUDtFQUNELENBSEQ7QUFJRDs7QUFOREkiLCJuYW1lcyI6WyJwdWJsaXNoTGFzdCIsInNvdXJjZSIsInN1YmplY3QiLCJBc3luY1N1YmplY3RfMSIsIkNvbm5lY3RhYmxlT2JzZXJ2YWJsZV8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3B1Ymxpc2hMYXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../AsyncSubject":4,"../observable/ConnectableObservable":17}],115:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publishReplay = void 0;

var ReplaySubject_1 = require("../ReplaySubject");

var multicast_1 = require("./multicast");

var isFunction_1 = require("../util/isFunction");

function publishReplay(bufferSize, windowTime, selectorOrScheduler, timestampProvider) {
  if (selectorOrScheduler && !isFunction_1.isFunction(selectorOrScheduler)) {
    timestampProvider = selectorOrScheduler;
  }

  var selector = isFunction_1.isFunction(selectorOrScheduler) ? selectorOrScheduler : undefined;
  return function (source) {
    return multicast_1.multicast(new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, timestampProvider), selector)(source);
  };
}

exports.publishReplay = publishReplay;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUVBOztBQThFQSxTQUFnQkEsYUFBaEIsQ0FDRUMsVUFERixFQUVFQyxVQUZGLEVBR0VDLG1CQUhGLEVBSUVDLGlCQUpGLEVBSXVDO0VBRXJDLElBQUlELG1CQUFtQixJQUFJLENBQUNFLHdCQUFXRixtQkFBWCxDQUE1QixFQUE2RDtJQUMzREMsaUJBQWlCLEdBQUdELG1CQUFwQjtFQUNEOztFQUNELElBQU1HLFFBQVEsR0FBR0Qsd0JBQVdGLG1CQUFYLElBQWtDQSxtQkFBbEMsR0FBd0RJLFNBQXpFO0VBR0EsT0FBTyxVQUFDQyxNQUFELEVBQXNCO0lBQUssNkJBQVUsSUFBSUMsNkJBQUosQ0FBcUJSLFVBQXJCLEVBQWlDQyxVQUFqQyxFQUE2Q0UsaUJBQTdDLENBQVYsRUFBMkVFLFFBQTNFLEVBQXNGRSxNQUF0RjtFQUE2RixDQUEvSDtBQUNEOztBQWJERSIsIm5hbWVzIjpbInB1Ymxpc2hSZXBsYXkiLCJidWZmZXJTaXplIiwid2luZG93VGltZSIsInNlbGVjdG9yT3JTY2hlZHVsZXIiLCJ0aW1lc3RhbXBQcm92aWRlciIsImlzRnVuY3Rpb25fMSIsInNlbGVjdG9yIiwidW5kZWZpbmVkIiwic291cmNlIiwiUmVwbGF5U3ViamVjdF8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3B1Ymxpc2hSZXBsYXkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../ReplaySubject":9,"../util/isFunction":212,"./multicast":107}],116:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.raceWith = void 0;

var race_1 = require("../observable/race");

var lift_1 = require("../util/lift");

var identity_1 = require("../util/identity");

function raceWith() {
  var otherSources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    otherSources[_i] = arguments[_i];
  }

  return !otherSources.length ? identity_1.identity : lift_1.operate(function (source, subscriber) {
    race_1.raceInit(__spreadArray([source], __read(otherSources)))(subscriber);
  });
}

exports.raceWith = raceWith;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBNEJBLFNBQWdCQSxRQUFoQixHQUF3QjtFQUN0Qjs7T0FBQSx5Q0FBNkM7SUFBN0NDOzs7RUFFQSxPQUFPLENBQUNBLFlBQVksQ0FBQ0MsTUFBZCxHQUNIQyxtQkFERyxHQUVIQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUN6QkMsZ0JBQVFDLGVBQWlCSCxNQUFqQixHQUF1QkksT0FBS1IsWUFBTCxDQUF2QixDQUFSLEVBQW1ESyxVQUFuRDtFQUNELENBRkQsQ0FGSjtBQUtEOztBQVJESSIsIm5hbWVzIjpbInJhY2VXaXRoIiwib3RoZXJTb3VyY2VzIiwibGVuZ3RoIiwiaWRlbnRpdHlfMSIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJyYWNlXzEiLCJfX3NwcmVhZEFycmF5IiwiX19yZWFkIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3JhY2VXaXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../observable/race":42,"../util/identity":208,"../util/lift":219}],117:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduce = void 0;

var scanInternals_1 = require("./scanInternals");

var lift_1 = require("../util/lift");

function reduce(accumulator, seed) {
  return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, false, true));
}

exports.reduce = reduce;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQXlEQSxTQUFnQkEsTUFBaEIsQ0FBNkJDLFdBQTdCLEVBQXNGQyxJQUF0RixFQUFnRztFQUM5RixPQUFPQyxlQUFRQyw4QkFBY0gsV0FBZCxFQUEyQkMsSUFBM0IsRUFBaUNHLFNBQVMsQ0FBQ0MsTUFBVixJQUFvQixDQUFyRCxFQUF3RCxLQUF4RCxFQUErRCxJQUEvRCxDQUFSLENBQVA7QUFDRDs7QUFGREMiLCJuYW1lcyI6WyJyZWR1Y2UiLCJhY2N1bXVsYXRvciIsInNlZWQiLCJsaWZ0XzEiLCJzY2FuSW50ZXJuYWxzXzEiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvcmVkdWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/lift":219,"./scanInternals":126}],118:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refCount = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function refCount() {
  return lift_1.operate(function (source, subscriber) {
    var connection = null;
    source._refCount++;
    var refCounter = OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, undefined, function () {
      if (!source || source._refCount <= 0 || 0 < --source._refCount) {
        connection = null;
        return;
      }

      var sharedConnection = source._connection;
      var conn = connection;
      connection = null;

      if (sharedConnection && (!conn || sharedConnection === conn)) {
        sharedConnection.unsubscribe();
      }

      subscriber.unsubscribe();
    });
    source.subscribe(refCounter);

    if (!refCounter.closed) {
      connection = source.connect();
    }
  });
}

exports.refCount = refCount;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQUNBOztBQTREQSxTQUFnQkEsUUFBaEIsR0FBd0I7RUFDdEIsT0FBT0MsZUFBUSxVQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBbUI7SUFDaEMsSUFBSUMsVUFBVSxHQUF3QixJQUF0QztJQUVDRixNQUFjLENBQUNHLFNBQWY7SUFFRCxJQUFNQyxVQUFVLEdBQUdDLDhDQUF5QkosVUFBekIsRUFBcUNLLFNBQXJDLEVBQWdEQSxTQUFoRCxFQUEyREEsU0FBM0QsRUFBc0U7TUFDdkYsSUFBSSxDQUFDTixNQUFELElBQVlBLE1BQWMsQ0FBQ0csU0FBZixJQUE0QixDQUF4QyxJQUE2QyxJQUFJLEVBQUdILE1BQWMsQ0FBQ0csU0FBdkUsRUFBa0Y7UUFDaEZELFVBQVUsR0FBRyxJQUFiO1FBQ0E7TUFDRDs7TUEyQkQsSUFBTUssZ0JBQWdCLEdBQUlQLE1BQWMsQ0FBQ1EsV0FBekM7TUFDQSxJQUFNQyxJQUFJLEdBQUdQLFVBQWI7TUFDQUEsVUFBVSxHQUFHLElBQWI7O01BRUEsSUFBSUssZ0JBQWdCLEtBQUssQ0FBQ0UsSUFBRCxJQUFTRixnQkFBZ0IsS0FBS0UsSUFBbkMsQ0FBcEIsRUFBOEQ7UUFDNURGLGdCQUFnQixDQUFDRyxXQUFqQjtNQUNEOztNQUVEVCxVQUFVLENBQUNTLFdBQVg7SUFDRCxDQXhDa0IsQ0FBbkI7SUEwQ0FWLE1BQU0sQ0FBQ1csU0FBUCxDQUFpQlAsVUFBakI7O0lBRUEsSUFBSSxDQUFDQSxVQUFVLENBQUNRLE1BQWhCLEVBQXdCO01BQ3RCVixVQUFVLEdBQUlGLE1BQW1DLENBQUNhLE9BQXBDLEVBQWQ7SUFDRDtFQUNGLENBcERNLENBQVA7QUFxREQ7O0FBdEREQyIsIm5hbWVzIjpbInJlZkNvdW50IiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsImNvbm5lY3Rpb24iLCJfcmVmQ291bnQiLCJyZWZDb3VudGVyIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJ1bmRlZmluZWQiLCJzaGFyZWRDb25uZWN0aW9uIiwiX2Nvbm5lY3Rpb24iLCJjb25uIiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJjbG9zZWQiLCJjb25uZWN0IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3JlZkNvdW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/lift":219,"./OperatorSubscriber":48}],119:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeat = void 0;

var empty_1 = require("../observable/empty");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var innerFrom_1 = require("../observable/innerFrom");

var timer_1 = require("../observable/timer");

function repeat(countOrConfig) {
  var _a;

  var count = Infinity;
  var delay;

  if (countOrConfig != null) {
    if (_typeof(countOrConfig) === 'object') {
      _a = countOrConfig.count, count = _a === void 0 ? Infinity : _a, delay = countOrConfig.delay;
    } else {
      count = countOrConfig;
    }
  }

  return count <= 0 ? function () {
    return empty_1.EMPTY;
  } : lift_1.operate(function (source, subscriber) {
    var soFar = 0;
    var sourceSub;

    var resubscribe = function resubscribe() {
      sourceSub === null || sourceSub === void 0 ? void 0 : sourceSub.unsubscribe();
      sourceSub = null;

      if (delay != null) {
        var notifier = typeof delay === 'number' ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(soFar));
        var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
          notifierSubscriber_1.unsubscribe();
          subscribeToSource();
        });
        notifier.subscribe(notifierSubscriber_1);
      } else {
        subscribeToSource();
      }
    };

    var subscribeToSource = function subscribeToSource() {
      var syncUnsub = false;
      sourceSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function () {
        if (++soFar < count) {
          if (sourceSub) {
            resubscribe();
          } else {
            syncUnsub = true;
          }
        } else {
          subscriber.complete();
        }
      }));

      if (syncUnsub) {
        resubscribe();
      }
    };

    subscribeToSource();
  });
}

exports.repeat = repeat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBNkdBLFNBQWdCQSxNQUFoQixDQUEwQkMsYUFBMUIsRUFBK0Q7OztFQUM3RCxJQUFJQyxLQUFLLEdBQUdDLFFBQVo7RUFDQSxJQUFJQyxLQUFKOztFQUVBLElBQUlILGFBQWEsSUFBSSxJQUFyQixFQUEyQjtJQUN6QixJQUFJLFFBQU9BLGFBQVAsTUFBeUIsUUFBN0IsRUFBdUM7TUFDbENJLEtBQTRCSixhQUFhLE1BQXpDLE9BQUssbUJBQUdFLFFBQUgsR0FBV0UsRUFBaEIsRUFBa0JELEtBQUssR0FBS0gsYUFBYSxNQUE1QztJQUNELENBRkQsTUFFTztNQUNMQyxLQUFLLEdBQUdELGFBQVI7SUFDRDtFQUNGOztFQUVELE9BQU9DLEtBQUssSUFBSSxDQUFULEdBQ0g7SUFBTTtFQUFLLENBRFIsR0FFSEksZUFBUSxVQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBbUI7SUFDekIsSUFBSUMsS0FBSyxHQUFHLENBQVo7SUFDQSxJQUFJQyxTQUFKOztJQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO01BQ2xCRCxTQUFTLFNBQVQsYUFBUyxXQUFULEdBQVMsTUFBVCxZQUFTLENBQUVFLFdBQVg7TUFDQUYsU0FBUyxHQUFHLElBQVo7O01BQ0EsSUFBSU4sS0FBSyxJQUFJLElBQWIsRUFBbUI7UUFDakIsSUFBTVMsUUFBUSxHQUFHLE9BQU9ULEtBQVAsS0FBaUIsUUFBakIsR0FBNEJVLGNBQU1WLEtBQU4sQ0FBNUIsR0FBMkNXLHNCQUFVWCxLQUFLLENBQUNLLEtBQUQsQ0FBZixDQUE1RDtRQUNBLElBQU1PLG9CQUFrQixHQUFHQyw4Q0FBeUJULFVBQXpCLEVBQXFDO1VBQzlEUSxvQkFBa0IsQ0FBQ0osV0FBbkI7VUFDQU0saUJBQWlCO1FBQ2xCLENBSDBCLENBQTNCO1FBSUFMLFFBQVEsQ0FBQ00sU0FBVCxDQUFtQkgsb0JBQW5CO01BQ0QsQ0FQRCxNQU9PO1FBQ0xFLGlCQUFpQjtNQUNsQjtJQUNGLENBYkQ7O0lBZUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtNQUN4QixJQUFJRSxTQUFTLEdBQUcsS0FBaEI7TUFDQVYsU0FBUyxHQUFHSCxNQUFNLENBQUNZLFNBQVAsQ0FDVkYsOENBQXlCVCxVQUF6QixFQUFxQ2EsU0FBckMsRUFBZ0Q7UUFDOUMsSUFBSSxFQUFFWixLQUFGLEdBQVVQLEtBQWQsRUFBcUI7VUFDbkIsSUFBSVEsU0FBSixFQUFlO1lBQ2JDLFdBQVc7VUFDWixDQUZELE1BRU87WUFDTFMsU0FBUyxHQUFHLElBQVo7VUFDRDtRQUNGLENBTkQsTUFNTztVQUNMWixVQUFVLENBQUNjLFFBQVg7UUFDRDtNQUNGLENBVkQsQ0FEVSxDQUFaOztNQWNBLElBQUlGLFNBQUosRUFBZTtRQUNiVCxXQUFXO01BQ1o7SUFDRixDQW5CRDs7SUFxQkFPLGlCQUFpQjtFQUNsQixDQXpDRCxDQUZKO0FBNENEOztBQXhEREsiLCJuYW1lcyI6WyJyZXBlYXQiLCJjb3VudE9yQ29uZmlnIiwiY291bnQiLCJJbmZpbml0eSIsImRlbGF5IiwiX2EiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwic29GYXIiLCJzb3VyY2VTdWIiLCJyZXN1YnNjcmliZSIsInVuc3Vic2NyaWJlIiwibm90aWZpZXIiLCJ0aW1lcl8xIiwiaW5uZXJGcm9tXzEiLCJub3RpZmllclN1YnNjcmliZXJfMSIsIk9wZXJhdG9yU3Vic2NyaWJlcl8xIiwic3Vic2NyaWJlVG9Tb3VyY2UiLCJzdWJzY3JpYmUiLCJzeW5jVW5zdWIiLCJ1bmRlZmluZWQiLCJjb21wbGV0ZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9yZXBlYXQudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../observable/empty":26,"../observable/innerFrom":34,"../observable/timer":45,"../util/lift":219,"./OperatorSubscriber":48}],120:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeatWhen = void 0;

var Subject_1 = require("../Subject");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function repeatWhen(notifier) {
  return lift_1.operate(function (source, subscriber) {
    var innerSub;
    var syncResub = false;
    var completions$;
    var isNotifierComplete = false;
    var isMainComplete = false;

    var checkComplete = function checkComplete() {
      return isMainComplete && isNotifierComplete && (subscriber.complete(), true);
    };

    var getCompletionSubject = function getCompletionSubject() {
      if (!completions$) {
        completions$ = new Subject_1.Subject();
        notifier(completions$).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
          if (innerSub) {
            subscribeForRepeatWhen();
          } else {
            syncResub = true;
          }
        }, function () {
          isNotifierComplete = true;
          checkComplete();
        }));
      }

      return completions$;
    };

    var subscribeForRepeatWhen = function subscribeForRepeatWhen() {
      isMainComplete = false;
      innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, function () {
        isMainComplete = true;
        !checkComplete() && getCompletionSubject().next();
      }));

      if (syncResub) {
        innerSub.unsubscribe();
        innerSub = null;
        syncResub = false;
        subscribeForRepeatWhen();
      }
    };

    subscribeForRepeatWhen();
  });
}

exports.repeatWhen = repeatWhen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUlBOztBQUNBOztBQW1DQSxTQUFnQkEsVUFBaEIsQ0FBOEJDLFFBQTlCLEVBQTRGO0VBQzFGLE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBQ2hDLElBQUlDLFFBQUo7SUFDQSxJQUFJQyxTQUFTLEdBQUcsS0FBaEI7SUFDQSxJQUFJQyxZQUFKO0lBQ0EsSUFBSUMsa0JBQWtCLEdBQUcsS0FBekI7SUFDQSxJQUFJQyxjQUFjLEdBQUcsS0FBckI7O0lBS0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtNQUFNLHFCQUFjLElBQUlGLGtCQUFsQixLQUF5Q0osVUFBVSxDQUFDTyxRQUFYLElBQXVCLElBQWhFO0lBQXFFLENBQWpHOztJQUtBLElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUI7TUFDM0IsSUFBSSxDQUFDTCxZQUFMLEVBQW1CO1FBQ2pCQSxZQUFZLEdBQUcsSUFBSU0saUJBQUosRUFBZjtRQUlBWixRQUFRLENBQUNNLFlBQUQsQ0FBUixDQUF1Qk8sU0FBdkIsQ0FDRUMsOENBQ0VYLFVBREYsRUFFRTtVQUNFLElBQUlDLFFBQUosRUFBYztZQUNaVyxzQkFBc0I7VUFDdkIsQ0FGRCxNQUVPO1lBS0xWLFNBQVMsR0FBRyxJQUFaO1VBQ0Q7UUFDRixDQVpILEVBYUU7VUFDRUUsa0JBQWtCLEdBQUcsSUFBckI7VUFDQUUsYUFBYTtRQUNkLENBaEJILENBREY7TUFvQkQ7O01BQ0QsT0FBT0gsWUFBUDtJQUNELENBNUJEOztJQThCQSxJQUFNUyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCO01BQzdCUCxjQUFjLEdBQUcsS0FBakI7TUFFQUosUUFBUSxHQUFHRixNQUFNLENBQUNXLFNBQVAsQ0FDVEMsOENBQXlCWCxVQUF6QixFQUFxQ2EsU0FBckMsRUFBZ0Q7UUFDOUNSLGNBQWMsR0FBRyxJQUFqQjtRQU1BLENBQUNDLGFBQWEsRUFBZCxJQUFvQkUsb0JBQW9CLEdBQUdNLElBQXZCLEVBQXBCO01BQ0QsQ0FSRCxDQURTLENBQVg7O01BWUEsSUFBSVosU0FBSixFQUFlO1FBS2JELFFBQVEsQ0FBQ2MsV0FBVDtRQUlBZCxRQUFRLEdBQUcsSUFBWDtRQUVBQyxTQUFTLEdBQUcsS0FBWjtRQUVBVSxzQkFBc0I7TUFDdkI7SUFDRixDQTlCRDs7SUFpQ0FBLHNCQUFzQjtFQUN2QixDQS9FTSxDQUFQO0FBZ0ZEOztBQWpGREkiLCJuYW1lcyI6WyJyZXBlYXRXaGVuIiwibm90aWZpZXIiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwiaW5uZXJTdWIiLCJzeW5jUmVzdWIiLCJjb21wbGV0aW9ucyQiLCJpc05vdGlmaWVyQ29tcGxldGUiLCJpc01haW5Db21wbGV0ZSIsImNoZWNrQ29tcGxldGUiLCJjb21wbGV0ZSIsImdldENvbXBsZXRpb25TdWJqZWN0IiwiU3ViamVjdF8xIiwic3Vic2NyaWJlIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJzdWJzY3JpYmVGb3JSZXBlYXRXaGVuIiwidW5kZWZpbmVkIiwibmV4dCIsInVuc3Vic2NyaWJlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3JlcGVhdFdoZW4udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../Subject":11,"../util/lift":219,"./OperatorSubscriber":48}],121:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retry = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var identity_1 = require("../util/identity");

var timer_1 = require("../observable/timer");

var innerFrom_1 = require("../observable/innerFrom");

function retry(configOrCount) {
  if (configOrCount === void 0) {
    configOrCount = Infinity;
  }

  var config;

  if (configOrCount && _typeof(configOrCount) === 'object') {
    config = configOrCount;
  } else {
    config = {
      count: configOrCount
    };
  }

  var _a = config.count,
      count = _a === void 0 ? Infinity : _a,
      delay = config.delay,
      _b = config.resetOnSuccess,
      resetOnSuccess = _b === void 0 ? false : _b;
  return count <= 0 ? identity_1.identity : lift_1.operate(function (source, subscriber) {
    var soFar = 0;
    var innerSub;

    var subscribeForRetry = function subscribeForRetry() {
      var syncUnsub = false;
      innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
        if (resetOnSuccess) {
          soFar = 0;
        }

        subscriber.next(value);
      }, undefined, function (err) {
        if (soFar++ < count) {
          var resub_1 = function resub_1() {
            if (innerSub) {
              innerSub.unsubscribe();
              innerSub = null;
              subscribeForRetry();
            } else {
              syncUnsub = true;
            }
          };

          if (delay != null) {
            var notifier = typeof delay === 'number' ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(err, soFar));
            var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
              notifierSubscriber_1.unsubscribe();
              resub_1();
            }, function () {
              subscriber.complete();
            });
            notifier.subscribe(notifierSubscriber_1);
          } else {
            resub_1();
          }
        } else {
          subscriber.error(err);
        }
      }));

      if (syncUnsub) {
        innerSub.unsubscribe();
        innerSub = null;
        subscribeForRetry();
      }
    };

    subscribeForRetry();
  });
}

exports.retry = retry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBNEVBLFNBQWdCQSxLQUFoQixDQUF5QkMsYUFBekIsRUFBdUU7RUFBOUM7SUFBQUE7RUFBOEM7O0VBQ3JFLElBQUlDLE1BQUo7O0VBQ0EsSUFBSUQsYUFBYSxJQUFJLFFBQU9BLGFBQVAsTUFBeUIsUUFBOUMsRUFBd0Q7SUFDdERDLE1BQU0sR0FBR0QsYUFBVDtFQUNELENBRkQsTUFFTztJQUNMQyxNQUFNLEdBQUc7TUFDUEMsS0FBSyxFQUFFRjtJQURBLENBQVQ7RUFHRDs7RUFDTyxTQUFvRUMsTUFBTSxNQUExRTtFQUFBLFNBQUssbUJBQUdFLFFBQUgsR0FBV0MsRUFBaEI7RUFBQSxJQUFrQkMsS0FBSyxHQUE2Q0osTUFBTSxNQUExRTtFQUFBLElBQXlCSyxLQUEyQ0wsTUFBTSxlQUExRTtFQUFBLElBQXlDTSxjQUFjLG1CQUFHLEtBQUgsR0FBUUQsRUFBL0Q7RUFFUixPQUFPSixLQUFLLElBQUksQ0FBVCxHQUNITSxtQkFERyxHQUVIQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUN6QixJQUFJQyxLQUFLLEdBQUcsQ0FBWjtJQUNBLElBQUlDLFFBQUo7O0lBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtNQUN4QixJQUFJQyxTQUFTLEdBQUcsS0FBaEI7TUFDQUYsUUFBUSxHQUFHSCxNQUFNLENBQUNNLFNBQVAsQ0FDVEMsOENBQ0VOLFVBREYsRUFFRSxVQUFDTyxLQUFELEVBQU07UUFFSixJQUFJWCxjQUFKLEVBQW9CO1VBQ2xCSyxLQUFLLEdBQUcsQ0FBUjtRQUNEOztRQUNERCxVQUFVLENBQUNRLElBQVgsQ0FBZ0JELEtBQWhCO01BQ0QsQ0FSSCxFQVVFRSxTQVZGLEVBV0UsVUFBQ0MsR0FBRCxFQUFJO1FBQ0YsSUFBSVQsS0FBSyxLQUFLVixLQUFkLEVBQXFCO1VBRW5CLElBQU1vQixPQUFLLEdBQUcsU0FBUkEsT0FBUTtZQUNaLElBQUlULFFBQUosRUFBYztjQUNaQSxRQUFRLENBQUNVLFdBQVQ7Y0FDQVYsUUFBUSxHQUFHLElBQVg7Y0FDQUMsaUJBQWlCO1lBQ2xCLENBSkQsTUFJTztjQUNMQyxTQUFTLEdBQUcsSUFBWjtZQUNEO1VBQ0YsQ0FSRDs7VUFVQSxJQUFJVixLQUFLLElBQUksSUFBYixFQUFtQjtZQUlqQixJQUFNbUIsUUFBUSxHQUFHLE9BQU9uQixLQUFQLEtBQWlCLFFBQWpCLEdBQTRCb0IsY0FBTXBCLEtBQU4sQ0FBNUIsR0FBMkNxQixzQkFBVXJCLEtBQUssQ0FBQ2dCLEdBQUQsRUFBTVQsS0FBTixDQUFmLENBQTVEO1lBQ0EsSUFBTWUsb0JBQWtCLEdBQUdWLDhDQUN6Qk4sVUFEeUIsRUFFekI7Y0FJRWdCLG9CQUFrQixDQUFDSixXQUFuQjtjQUNBRCxPQUFLO1lBQ04sQ0FSd0IsRUFTekI7Y0FHRVgsVUFBVSxDQUFDaUIsUUFBWDtZQUNELENBYndCLENBQTNCO1lBZUFKLFFBQVEsQ0FBQ1IsU0FBVCxDQUFtQlcsb0JBQW5CO1VBQ0QsQ0FyQkQsTUFxQk87WUFFTEwsT0FBSztVQUNOO1FBQ0YsQ0FyQ0QsTUFxQ087VUFHTFgsVUFBVSxDQUFDa0IsS0FBWCxDQUFpQlIsR0FBakI7UUFDRDtNQUNGLENBdERILENBRFMsQ0FBWDs7TUEwREEsSUFBSU4sU0FBSixFQUFlO1FBQ2JGLFFBQVEsQ0FBQ1UsV0FBVDtRQUNBVixRQUFRLEdBQUcsSUFBWDtRQUNBQyxpQkFBaUI7TUFDbEI7SUFDRixDQWpFRDs7SUFrRUFBLGlCQUFpQjtFQUNsQixDQXRFRCxDQUZKO0FBeUVEOztBQXBGRGdCIiwibmFtZXMiOlsicmV0cnkiLCJjb25maWdPckNvdW50IiwiY29uZmlnIiwiY291bnQiLCJJbmZpbml0eSIsIl9hIiwiZGVsYXkiLCJfYiIsInJlc2V0T25TdWNjZXNzIiwiaWRlbnRpdHlfMSIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJzb0ZhciIsImlubmVyU3ViIiwic3Vic2NyaWJlRm9yUmV0cnkiLCJzeW5jVW5zdWIiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwibmV4dCIsInVuZGVmaW5lZCIsImVyciIsInJlc3ViXzEiLCJ1bnN1YnNjcmliZSIsIm5vdGlmaWVyIiwidGltZXJfMSIsImlubmVyRnJvbV8xIiwibm90aWZpZXJTdWJzY3JpYmVyXzEiLCJjb21wbGV0ZSIsImVycm9yIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3JldHJ5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../observable/innerFrom":34,"../observable/timer":45,"../util/identity":208,"../util/lift":219,"./OperatorSubscriber":48}],122:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retryWhen = void 0;

var Subject_1 = require("../Subject");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function retryWhen(notifier) {
  return lift_1.operate(function (source, subscriber) {
    var innerSub;
    var syncResub = false;
    var errors$;

    var subscribeForRetryWhen = function subscribeForRetryWhen() {
      innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, undefined, undefined, function (err) {
        if (!errors$) {
          errors$ = new Subject_1.Subject();
          notifier(errors$).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
            return innerSub ? subscribeForRetryWhen() : syncResub = true;
          }));
        }

        if (errors$) {
          errors$.next(err);
        }
      }));

      if (syncResub) {
        innerSub.unsubscribe();
        innerSub = null;
        syncResub = false;
        subscribeForRetryWhen();
      }
    };

    subscribeForRetryWhen();
  });
}

exports.retryWhen = retryWhen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUlBOztBQUNBOztBQXlEQSxTQUFnQkEsU0FBaEIsQ0FBNkJDLFFBQTdCLEVBQW1GO0VBQ2pGLE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBQ2hDLElBQUlDLFFBQUo7SUFDQSxJQUFJQyxTQUFTLEdBQUcsS0FBaEI7SUFDQSxJQUFJQyxPQUFKOztJQUVBLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0I7TUFDNUJILFFBQVEsR0FBR0YsTUFBTSxDQUFDTSxTQUFQLENBQ1RDLDhDQUF5Qk4sVUFBekIsRUFBcUNPLFNBQXJDLEVBQWdEQSxTQUFoRCxFQUEyRCxVQUFDQyxHQUFELEVBQUk7UUFDN0QsSUFBSSxDQUFDTCxPQUFMLEVBQWM7VUFDWkEsT0FBTyxHQUFHLElBQUlNLGlCQUFKLEVBQVY7VUFDQVosUUFBUSxDQUFDTSxPQUFELENBQVIsQ0FBa0JFLFNBQWxCLENBQ0VDLDhDQUF5Qk4sVUFBekIsRUFBcUM7WUFNbkMsZUFBUSxHQUFHSSxxQkFBcUIsRUFBeEIsR0FBOEJGLFNBQVMsR0FBRyxJQUFsRDtVQUF1RCxDQU56RCxDQURGO1FBVUQ7O1FBQ0QsSUFBSUMsT0FBSixFQUFhO1VBRVhBLE9BQU8sQ0FBQ08sSUFBUixDQUFhRixHQUFiO1FBQ0Q7TUFDRixDQWxCRCxDQURTLENBQVg7O01Bc0JBLElBQUlOLFNBQUosRUFBZTtRQUtiRCxRQUFRLENBQUNVLFdBQVQ7UUFDQVYsUUFBUSxHQUFHLElBQVg7UUFFQUMsU0FBUyxHQUFHLEtBQVo7UUFFQUUscUJBQXFCO01BQ3RCO0lBQ0YsQ0FuQ0Q7O0lBc0NBQSxxQkFBcUI7RUFDdEIsQ0E1Q00sQ0FBUDtBQTZDRDs7QUE5Q0RRIiwibmFtZXMiOlsicmV0cnlXaGVuIiwibm90aWZpZXIiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwiaW5uZXJTdWIiLCJzeW5jUmVzdWIiLCJlcnJvcnMkIiwic3Vic2NyaWJlRm9yUmV0cnlXaGVuIiwic3Vic2NyaWJlIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJ1bmRlZmluZWQiLCJlcnIiLCJTdWJqZWN0XzEiLCJuZXh0IiwidW5zdWJzY3JpYmUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvcmV0cnlXaGVuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../Subject":11,"../util/lift":219,"./OperatorSubscriber":48}],123:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sample = void 0;

var lift_1 = require("../util/lift");

var noop_1 = require("../util/noop");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function sample(notifier) {
  return lift_1.operate(function (source, subscriber) {
    var hasValue = false;
    var lastValue = null;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      hasValue = true;
      lastValue = value;
    }));
    notifier.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
      if (hasValue) {
        hasValue = false;
        var value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
    }, noop_1.noop));
  });
}

exports.sample = sample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQTBDQSxTQUFnQkEsTUFBaEIsQ0FBMEJDLFFBQTFCLEVBQW1EO0VBQ2pELE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBQ2hDLElBQUlDLFFBQVEsR0FBRyxLQUFmO0lBQ0EsSUFBSUMsU0FBUyxHQUFhLElBQTFCO0lBQ0FILE1BQU0sQ0FBQ0ksU0FBUCxDQUNFQyw4Q0FBeUJKLFVBQXpCLEVBQXFDLFVBQUNLLEtBQUQsRUFBTTtNQUN6Q0osUUFBUSxHQUFHLElBQVg7TUFDQUMsU0FBUyxHQUFHRyxLQUFaO0lBQ0QsQ0FIRCxDQURGO0lBTUFSLFFBQVEsQ0FBQ00sU0FBVCxDQUNFQyw4Q0FDRUosVUFERixFQUVFO01BQ0UsSUFBSUMsUUFBSixFQUFjO1FBQ1pBLFFBQVEsR0FBRyxLQUFYO1FBQ0EsSUFBTUksS0FBSyxHQUFHSCxTQUFkO1FBQ0FBLFNBQVMsR0FBRyxJQUFaO1FBQ0FGLFVBQVUsQ0FBQ00sSUFBWCxDQUFnQkQsS0FBaEI7TUFDRDtJQUNGLENBVEgsRUFVRUUsV0FWRixDQURGO0VBY0QsQ0F2Qk0sQ0FBUDtBQXdCRDs7QUF6QkRDIiwibmFtZXMiOlsic2FtcGxlIiwibm90aWZpZXIiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwiaGFzVmFsdWUiLCJsYXN0VmFsdWUiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwibmV4dCIsIm5vb3BfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9zYW1wbGUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../util/lift":219,"../util/noop":221,"./OperatorSubscriber":48}],124:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sampleTime = void 0;

var async_1 = require("../scheduler/async");

var sample_1 = require("./sample");

var interval_1 = require("../observable/interval");

function sampleTime(period, scheduler) {
  if (scheduler === void 0) {
    scheduler = async_1.asyncScheduler;
  }

  return sample_1.sample(interval_1.interval(period, scheduler));
}

exports.sampleTime = sampleTime;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQTZDQSxTQUFnQkEsVUFBaEIsQ0FBOEJDLE1BQTlCLEVBQThDQyxTQUE5QyxFQUF1RjtFQUF6QztJQUFBQSxZQUEyQkMsc0JBQTNCO0VBQXlDOztFQUNyRixPQUFPQyxnQkFBT0Msb0JBQVNKLE1BQVQsRUFBaUJDLFNBQWpCLENBQVAsQ0FBUDtBQUNEOztBQUZESSIsIm5hbWVzIjpbInNhbXBsZVRpbWUiLCJwZXJpb2QiLCJzY2hlZHVsZXIiLCJhc3luY18xIiwic2FtcGxlXzEiLCJpbnRlcnZhbF8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3NhbXBsZVRpbWUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../observable/interval":35,"../scheduler/async":183,"./sample":123}],125:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scan = void 0;

var lift_1 = require("../util/lift");

var scanInternals_1 = require("./scanInternals");

function scan(accumulator, seed) {
  return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, true));
}

exports.scan = scan;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQXFGQSxTQUFnQkEsSUFBaEIsQ0FBOEJDLFdBQTlCLEVBQTJGQyxJQUEzRixFQUFtRztFQU1qRyxPQUFPQyxlQUFRQyw4QkFBY0gsV0FBZCxFQUEyQkMsSUFBM0IsRUFBc0NHLFNBQVMsQ0FBQ0MsTUFBVixJQUFvQixDQUExRCxFQUE2RCxJQUE3RCxDQUFSLENBQVA7QUFDRDs7QUFQREMiLCJuYW1lcyI6WyJzY2FuIiwiYWNjdW11bGF0b3IiLCJzZWVkIiwibGlmdF8xIiwic2NhbkludGVybmFsc18xIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3NjYW4udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../util/lift":219,"./scanInternals":126}],126:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scanInternals = void 0;

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
  return function (source, subscriber) {
    var hasState = hasSeed;
    var state = seed;
    var index = 0;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      var i = index++;
      state = hasState ? accumulator(state, value, i) : (hasState = true, value);
      emitOnNext && subscriber.next(state);
    }, emitBeforeComplete && function () {
      hasState && subscriber.next(state);
      subscriber.complete();
    }));
  };
}

exports.scanInternals = scanInternals;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQVdBLFNBQWdCQSxhQUFoQixDQUNFQyxXQURGLEVBRUVDLElBRkYsRUFHRUMsT0FIRixFQUlFQyxVQUpGLEVBS0VDLGtCQUxGLEVBS3VDO0VBRXJDLE9BQU8sVUFBQ0MsTUFBRCxFQUF3QkMsVUFBeEIsRUFBbUQ7SUFJeEQsSUFBSUMsUUFBUSxHQUFHTCxPQUFmO0lBSUEsSUFBSU0sS0FBSyxHQUFRUCxJQUFqQjtJQUVBLElBQUlRLEtBQUssR0FBRyxDQUFaO0lBR0FKLE1BQU0sQ0FBQ0ssU0FBUCxDQUNFQyw4Q0FDRUwsVUFERixFQUVFLFVBQUNNLEtBQUQsRUFBTTtNQUVKLElBQU1DLENBQUMsR0FBR0osS0FBSyxFQUFmO01BRUFELEtBQUssR0FBR0QsUUFBUSxHQUVaUCxXQUFXLENBQUNRLEtBQUQsRUFBUUksS0FBUixFQUFlQyxDQUFmLENBRkMsSUFNVk4sUUFBUSxHQUFHLElBQVosRUFBbUJLLEtBTlIsQ0FBaEI7TUFTQVQsVUFBVSxJQUFJRyxVQUFVLENBQUNRLElBQVgsQ0FBZ0JOLEtBQWhCLENBQWQ7SUFDRCxDQWhCSCxFQW1CRUosa0JBQWtCLElBQ2Y7TUFDQ0csUUFBUSxJQUFJRCxVQUFVLENBQUNRLElBQVgsQ0FBZ0JOLEtBQWhCLENBQVo7TUFDQUYsVUFBVSxDQUFDUyxRQUFYO0lBQ0QsQ0F2QkwsQ0FERjtFQTJCRCxDQXhDRDtBQXlDRDs7QUFoRERDIiwibmFtZXMiOlsic2NhbkludGVybmFscyIsImFjY3VtdWxhdG9yIiwic2VlZCIsImhhc1NlZWQiLCJlbWl0T25OZXh0IiwiZW1pdEJlZm9yZUNvbXBsZXRlIiwic291cmNlIiwic3Vic2NyaWJlciIsImhhc1N0YXRlIiwic3RhdGUiLCJpbmRleCIsInN1YnNjcmliZSIsIk9wZXJhdG9yU3Vic2NyaWJlcl8xIiwidmFsdWUiLCJpIiwibmV4dCIsImNvbXBsZXRlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3NjYW5JbnRlcm5hbHMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./OperatorSubscriber":48}],127:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequenceEqual = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function sequenceEqual(compareTo, comparator) {
  if (comparator === void 0) {
    comparator = function comparator(a, b) {
      return a === b;
    };
  }

  return lift_1.operate(function (source, subscriber) {
    var aState = createState();
    var bState = createState();

    var emit = function emit(isEqual) {
      subscriber.next(isEqual);
      subscriber.complete();
    };

    var createSubscriber = function createSubscriber(selfState, otherState) {
      var sequenceEqualSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (a) {
        var buffer = otherState.buffer,
            complete = otherState.complete;

        if (buffer.length === 0) {
          complete ? emit(false) : selfState.buffer.push(a);
        } else {
          !comparator(a, buffer.shift()) && emit(false);
        }
      }, function () {
        selfState.complete = true;
        var complete = otherState.complete,
            buffer = otherState.buffer;
        complete && emit(buffer.length === 0);
        sequenceEqualSubscriber === null || sequenceEqualSubscriber === void 0 ? void 0 : sequenceEqualSubscriber.unsubscribe();
      });
      return sequenceEqualSubscriber;
    };

    source.subscribe(createSubscriber(aState, bState));
    compareTo.subscribe(createSubscriber(bState, aState));
  });
}

exports.sequenceEqual = sequenceEqual;

function createState() {
  return {
    buffer: [],
    complete: false
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQUNBOztBQXlEQSxTQUFnQkEsYUFBaEIsQ0FDRUMsU0FERixFQUVFQyxVQUZGLEVBRXlEO0VBQXZEO0lBQUFBLGlDQUF1Q0MsQ0FBdkMsRUFBMENDLENBQTFDLEVBQTJDO01BQUssUUFBQyxLQUFLQSxDQUFOO0lBQU8sQ0FBdkQ7RUFBdUQ7O0VBRXZELE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBRWhDLElBQU1DLE1BQU0sR0FBR0MsV0FBVyxFQUExQjtJQUVBLElBQU1DLE1BQU0sR0FBR0QsV0FBVyxFQUExQjs7SUFHQSxJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxPQUFELEVBQWlCO01BQzVCTCxVQUFVLENBQUNNLElBQVgsQ0FBZ0JELE9BQWhCO01BQ0FMLFVBQVUsQ0FBQ08sUUFBWDtJQUNELENBSEQ7O0lBVUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxTQUFELEVBQThCQyxVQUE5QixFQUEwRDtNQUNqRixJQUFNQyx1QkFBdUIsR0FBR0MsOENBQzlCWixVQUQ4QixFQUU5QixVQUFDSixDQUFELEVBQUs7UUFDSyxVQUFNLEdBQWVjLFVBQVUsT0FBL0I7UUFBQSxJQUFRSCxRQUFRLEdBQUtHLFVBQVUsU0FBL0I7O1FBQ1IsSUFBSUcsTUFBTSxDQUFDQyxNQUFQLEtBQWtCLENBQXRCLEVBQXlCO1VBT3ZCUCxRQUFRLEdBQUdILElBQUksQ0FBQyxLQUFELENBQVAsR0FBaUJLLFNBQVMsQ0FBQ0ksTUFBVixDQUFpQkUsSUFBakIsQ0FBc0JuQixDQUF0QixDQUF6QjtRQUNELENBUkQsTUFRTztVQUlMLENBQUNELFVBQVUsQ0FBQ0MsQ0FBRCxFQUFJaUIsTUFBTSxDQUFDRyxLQUFQLEVBQUosQ0FBWCxJQUFtQ1osSUFBSSxDQUFDLEtBQUQsQ0FBdkM7UUFDRDtNQUNGLENBbEI2QixFQW1COUI7UUFFRUssU0FBUyxDQUFDRixRQUFWLEdBQXFCLElBQXJCO1FBQ1EsWUFBUSxHQUFhRyxVQUFVLFNBQS9CO1FBQUEsSUFBVUcsTUFBTSxHQUFLSCxVQUFVLE9BQS9CO1FBS1JILFFBQVEsSUFBSUgsSUFBSSxDQUFDUyxNQUFNLENBQUNDLE1BQVAsS0FBa0IsQ0FBbkIsQ0FBaEI7UUFFQUgsdUJBQXVCLFNBQXZCLDJCQUF1QixXQUF2QixHQUF1QixNQUF2QiwwQkFBdUIsQ0FBRU0sV0FBekI7TUFDRCxDQTlCNkIsQ0FBaEM7TUFpQ0EsT0FBT04sdUJBQVA7SUFDRCxDQW5DRDs7SUFzQ0FaLE1BQU0sQ0FBQ21CLFNBQVAsQ0FBaUJWLGdCQUFnQixDQUFDUCxNQUFELEVBQVNFLE1BQVQsQ0FBakM7SUFDQVQsU0FBUyxDQUFDd0IsU0FBVixDQUFvQlYsZ0JBQWdCLENBQUNMLE1BQUQsRUFBU0YsTUFBVCxDQUFwQztFQUNELENBekRNLENBQVA7QUEwREQ7O0FBOUREa0I7O0FBOEVBLFNBQVNqQixXQUFULEdBQW9CO0VBQ2xCLE9BQU87SUFDTFcsTUFBTSxFQUFFLEVBREg7SUFFTE4sUUFBUSxFQUFFO0VBRkwsQ0FBUDtBQUlEIiwibmFtZXMiOlsic2VxdWVuY2VFcXVhbCIsImNvbXBhcmVUbyIsImNvbXBhcmF0b3IiLCJhIiwiYiIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJhU3RhdGUiLCJjcmVhdGVTdGF0ZSIsImJTdGF0ZSIsImVtaXQiLCJpc0VxdWFsIiwibmV4dCIsImNvbXBsZXRlIiwiY3JlYXRlU3Vic2NyaWJlciIsInNlbGZTdGF0ZSIsIm90aGVyU3RhdGUiLCJzZXF1ZW5jZUVxdWFsU3Vic2NyaWJlciIsIk9wZXJhdG9yU3Vic2NyaWJlcl8xIiwiYnVmZmVyIiwibGVuZ3RoIiwicHVzaCIsInNoaWZ0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvc2VxdWVuY2VFcXVhbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../util/lift":219,"./OperatorSubscriber":48}],128:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.share = void 0;

var innerFrom_1 = require("../observable/innerFrom");

var Subject_1 = require("../Subject");

var Subscriber_1 = require("../Subscriber");

var lift_1 = require("../util/lift");

function share(options) {
  if (options === void 0) {
    options = {};
  }

  var _a = options.connector,
      connector = _a === void 0 ? function () {
    return new Subject_1.Subject();
  } : _a,
      _b = options.resetOnError,
      resetOnError = _b === void 0 ? true : _b,
      _c = options.resetOnComplete,
      resetOnComplete = _c === void 0 ? true : _c,
      _d = options.resetOnRefCountZero,
      resetOnRefCountZero = _d === void 0 ? true : _d;
  return function (wrapperSource) {
    var connection;
    var resetConnection;
    var subject;
    var refCount = 0;
    var hasCompleted = false;
    var hasErrored = false;

    var cancelReset = function cancelReset() {
      resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
      resetConnection = undefined;
    };

    var reset = function reset() {
      cancelReset();
      connection = subject = undefined;
      hasCompleted = hasErrored = false;
    };

    var resetAndUnsubscribe = function resetAndUnsubscribe() {
      var conn = connection;
      reset();
      conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
    };

    return lift_1.operate(function (source, subscriber) {
      refCount++;

      if (!hasErrored && !hasCompleted) {
        cancelReset();
      }

      var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
      subscriber.add(function () {
        refCount--;

        if (refCount === 0 && !hasErrored && !hasCompleted) {
          resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
        }
      });
      dest.subscribe(subscriber);

      if (!connection && refCount > 0) {
        connection = new Subscriber_1.SafeSubscriber({
          next: function next(value) {
            return dest.next(value);
          },
          error: function error(err) {
            hasErrored = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnError, err);
            dest.error(err);
          },
          complete: function complete() {
            hasCompleted = true;
            cancelReset();
            resetConnection = handleReset(reset, resetOnComplete);
            dest.complete();
          }
        });
        innerFrom_1.innerFrom(source).subscribe(connection);
      }
    })(wrapperSource);
  };
}

exports.share = share;

function handleReset(reset, on) {
  var args = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }

  if (on === true) {
    reset();
    return;
  }

  if (on === false) {
    return;
  }

  var onSubscriber = new Subscriber_1.SafeSubscriber({
    next: function next() {
      onSubscriber.unsubscribe();
      reset();
    }
  });
  return on.apply(void 0, __spreadArray([], __read(args))).subscribe(onSubscriber);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQVFiLGVBQVIsQ0FBN0I7WUFDQW1CLElBQUksQ0FBQ1UsUUFBTDtVQUNEO1FBYjZCLENBQW5CLENBQWI7UUFlQUMsc0JBQVViLE1BQVYsRUFBa0JNLFNBQWxCLENBQTRCbkIsVUFBNUI7TUFDRDtJQUNGLENBN0RNLEVBNkRKRCxhQTdESSxDQUFQO0VBOERELENBekZEO0FBMEZEOztBQXJHRDRCOztBQXVHQSxTQUFTVCxXQUFULENBQ0VULEtBREYsRUFFRW1CLEVBRkYsRUFFaUQ7RUFDL0M7O09BQUEseUNBQVU7SUFBVkM7OztFQUVBLElBQUlELEVBQUUsS0FBSyxJQUFYLEVBQWlCO0lBQ2ZuQixLQUFLO0lBQ0w7RUFDRDs7RUFFRCxJQUFJbUIsRUFBRSxLQUFLLEtBQVgsRUFBa0I7SUFDaEI7RUFDRDs7RUFFRCxJQUFNRSxZQUFZLEdBQUcsSUFBSVYsMkJBQUosQ0FBbUI7SUFDdENDLElBQUksRUFBRTtNQUNKUyxZQUFZLENBQUN2QixXQUFiO01BQ0FFLEtBQUs7SUFDTjtFQUpxQyxDQUFuQixDQUFyQjtFQU9BLE9BQU9tQixFQUFFLE1BQUYsQ0FBRSxNQUFGLEVBQUVHLHlCQUFJRixJQUFKLEVBQUYsRUFBWVYsU0FBWixDQUFzQlcsWUFBdEIsQ0FBUDtBQUNEIiwibmFtZXMiOlsic2hhcmUiLCJvcHRpb25zIiwiU3ViamVjdF8xIiwiX2EiLCJfYiIsInJlc2V0T25FcnJvciIsIl9jIiwicmVzZXRPbkNvbXBsZXRlIiwiX2QiLCJyZXNldE9uUmVmQ291bnRaZXJvIiwid3JhcHBlclNvdXJjZSIsImNvbm5lY3Rpb24iLCJyZXNldENvbm5lY3Rpb24iLCJzdWJqZWN0IiwicmVmQ291bnQiLCJoYXNDb21wbGV0ZWQiLCJoYXNFcnJvcmVkIiwiY2FuY2VsUmVzZXQiLCJ1bnN1YnNjcmliZSIsInVuZGVmaW5lZCIsInJlc2V0IiwicmVzZXRBbmRVbnN1YnNjcmliZSIsImNvbm4iLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwiZGVzdCIsImNvbm5lY3RvciIsImFkZCIsImhhbmRsZVJlc2V0Iiwic3Vic2NyaWJlIiwiU3Vic2NyaWJlcl8xIiwibmV4dCIsInZhbHVlIiwiZXJyb3IiLCJlcnIiLCJjb21wbGV0ZSIsImlubmVyRnJvbV8xIiwiZXhwb3J0cyIsIm9uIiwiYXJncyIsIm9uU3Vic2NyaWJlciIsIl9fc3ByZWFkQXJyYXkiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9zaGFyZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../Subject":11,"../Subscriber":12,"../observable/innerFrom":34,"../util/lift":219}],129:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shareReplay = void 0;

var ReplaySubject_1 = require("../ReplaySubject");

var share_1 = require("./share");

function shareReplay(configOrBufferSize, windowTime, scheduler) {
  var _a, _b, _c;

  var bufferSize;
  var refCount = false;

  if (configOrBufferSize && _typeof(configOrBufferSize) === 'object') {
    _a = configOrBufferSize.bufferSize, bufferSize = _a === void 0 ? Infinity : _a, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler;
  } else {
    bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
  }

  return share_1.share({
    connector: function connector() {
      return new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
    },
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: refCount
  });
}

exports.shareReplay = shareReplay;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBdUpBLFNBQWdCQSxXQUFoQixDQUNFQyxrQkFERixFQUVFQyxVQUZGLEVBR0VDLFNBSEYsRUFHMkI7OztFQUV6QixJQUFJQyxVQUFKO0VBQ0EsSUFBSUMsUUFBUSxHQUFHLEtBQWY7O0VBQ0EsSUFBSUosa0JBQWtCLElBQUksUUFBT0Esa0JBQVAsTUFBOEIsUUFBeEQsRUFBa0U7SUFDN0RLLEtBQThFTCxrQkFBa0IsV0FBaEcsWUFBVSxtQkFBR00sUUFBSCxHQUFXRCxFQUFyQixFQUF1QkUsS0FBdURQLGtCQUFrQixXQUFoRyxFQUF1QkMsVUFBVSxtQkFBR0ssUUFBSCxHQUFXQyxFQUE1QyxFQUE4Q0MsS0FBZ0NSLGtCQUFrQixTQUFoRyxFQUE4Q0ksUUFBUSxtQkFBRyxLQUFILEdBQVFJLEVBQTlELEVBQWdFTixTQUFTLEdBQUtGLGtCQUFrQixVQUFuRztFQUNELENBRkQsTUFFTztJQUNMRyxVQUFVLEdBQUlILGtCQUFrQixTQUFsQixzQkFBa0IsV0FBbEIsd0JBQXNCTSxRQUFwQztFQUNEOztFQUNELE9BQU9HLGNBQVM7SUFDZEMsU0FBUyxFQUFFO01BQU0sV0FBSUMsNkJBQUosQ0FBa0JSLFVBQWxCLEVBQThCRixVQUE5QixFQUEwQ0MsU0FBMUM7SUFBb0QsQ0FEdkQ7SUFFZFUsWUFBWSxFQUFFLElBRkE7SUFHZEMsZUFBZSxFQUFFLEtBSEg7SUFJZEMsbUJBQW1CLEVBQUVWO0VBSlAsQ0FBVCxDQUFQO0FBTUQ7O0FBbEJEVyIsIm5hbWVzIjpbInNoYXJlUmVwbGF5IiwiY29uZmlnT3JCdWZmZXJTaXplIiwid2luZG93VGltZSIsInNjaGVkdWxlciIsImJ1ZmZlclNpemUiLCJyZWZDb3VudCIsIl9hIiwiSW5maW5pdHkiLCJfYiIsIl9jIiwic2hhcmVfMSIsImNvbm5lY3RvciIsIlJlcGxheVN1YmplY3RfMSIsInJlc2V0T25FcnJvciIsInJlc2V0T25Db21wbGV0ZSIsInJlc2V0T25SZWZDb3VudFplcm8iLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvc2hhcmVSZXBsYXkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../ReplaySubject":9,"./share":128}],130:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.single = void 0;

var EmptyError_1 = require("../util/EmptyError");

var SequenceError_1 = require("../util/SequenceError");

var NotFoundError_1 = require("../util/NotFoundError");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function single(predicate) {
  return lift_1.operate(function (source, subscriber) {
    var hasValue = false;
    var singleValue;
    var seenValue = false;
    var index = 0;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      seenValue = true;

      if (!predicate || predicate(value, index++, source)) {
        hasValue && subscriber.error(new SequenceError_1.SequenceError('Too many matching values'));
        hasValue = true;
        singleValue = value;
      }
    }, function () {
      if (hasValue) {
        subscriber.next(singleValue);
        subscriber.complete();
      } else {
        subscriber.error(seenValue ? new NotFoundError_1.NotFoundError('No matching values') : new EmptyError_1.EmptyError());
      }
    }));
  });
}

exports.single = single;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQWlGQSxTQUFnQkEsTUFBaEIsQ0FBMEJDLFNBQTFCLEVBQWlHO0VBQy9GLE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBQ2hDLElBQUlDLFFBQVEsR0FBRyxLQUFmO0lBQ0EsSUFBSUMsV0FBSjtJQUNBLElBQUlDLFNBQVMsR0FBRyxLQUFoQjtJQUNBLElBQUlDLEtBQUssR0FBRyxDQUFaO0lBQ0FMLE1BQU0sQ0FBQ00sU0FBUCxDQUNFQyw4Q0FDRU4sVUFERixFQUVFLFVBQUNPLEtBQUQsRUFBTTtNQUNKSixTQUFTLEdBQUcsSUFBWjs7TUFDQSxJQUFJLENBQUNOLFNBQUQsSUFBY0EsU0FBUyxDQUFDVSxLQUFELEVBQVFILEtBQUssRUFBYixFQUFpQkwsTUFBakIsQ0FBM0IsRUFBcUQ7UUFDbkRFLFFBQVEsSUFBSUQsVUFBVSxDQUFDUSxLQUFYLENBQWlCLElBQUlDLDZCQUFKLENBQWtCLDBCQUFsQixDQUFqQixDQUFaO1FBQ0FSLFFBQVEsR0FBRyxJQUFYO1FBQ0FDLFdBQVcsR0FBR0ssS0FBZDtNQUNEO0lBQ0YsQ0FUSCxFQVVFO01BQ0UsSUFBSU4sUUFBSixFQUFjO1FBQ1pELFVBQVUsQ0FBQ1UsSUFBWCxDQUFnQlIsV0FBaEI7UUFDQUYsVUFBVSxDQUFDVyxRQUFYO01BQ0QsQ0FIRCxNQUdPO1FBQ0xYLFVBQVUsQ0FBQ1EsS0FBWCxDQUFpQkwsU0FBUyxHQUFHLElBQUlTLDZCQUFKLENBQWtCLG9CQUFsQixDQUFILEdBQTZDLElBQUlDLHVCQUFKLEVBQXZFO01BQ0Q7SUFDRixDQWpCSCxDQURGO0VBcUJELENBMUJNLENBQVA7QUEyQkQ7O0FBNUJEQyIsIm5hbWVzIjpbInNpbmdsZSIsInByZWRpY2F0ZSIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJoYXNWYWx1ZSIsInNpbmdsZVZhbHVlIiwic2VlblZhbHVlIiwiaW5kZXgiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwiZXJyb3IiLCJTZXF1ZW5jZUVycm9yXzEiLCJuZXh0IiwiY29tcGxldGUiLCJOb3RGb3VuZEVycm9yXzEiLCJFbXB0eUVycm9yXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvc2luZ2xlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/EmptyError":194,"../util/NotFoundError":196,"../util/SequenceError":198,"../util/lift":219,"./OperatorSubscriber":48}],131:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skip = void 0;

var filter_1 = require("./filter");

function skip(count) {
  return filter_1.filter(function (_, index) {
    return count <= index;
  });
}

exports.skip = skip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQW1DQSxTQUFnQkEsSUFBaEIsQ0FBd0JDLEtBQXhCLEVBQXFDO0VBQ25DLE9BQU9DLGdCQUFPLFVBQUNDLENBQUQsRUFBSUMsS0FBSixFQUFTO0lBQUssWUFBSyxJQUFJQSxLQUFUO0VBQWMsQ0FBbkMsQ0FBUDtBQUNEOztBQUZEQyIsIm5hbWVzIjpbInNraXAiLCJjb3VudCIsImZpbHRlcl8xIiwiXyIsImluZGV4IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3NraXAudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./filter":84}],132:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skipLast = void 0;

var identity_1 = require("../util/identity");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function skipLast(skipCount) {
  return skipCount <= 0 ? identity_1.identity : lift_1.operate(function (source, subscriber) {
    var ring = new Array(skipCount);
    var seen = 0;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      var valueIndex = seen++;

      if (valueIndex < skipCount) {
        ring[valueIndex] = value;
      } else {
        var index = valueIndex % skipCount;
        var oldValue = ring[index];
        ring[index] = value;
        subscriber.next(oldValue);
      }
    }));
    return function () {
      ring = null;
    };
  });
}

exports.skipLast = skipLast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQTRDQSxTQUFnQkEsUUFBaEIsQ0FBNEJDLFNBQTVCLEVBQTZDO0VBQzNDLE9BQU9BLFNBQVMsSUFBSSxDQUFiLEdBRUhDLG1CQUZHLEdBR0hDLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBSXpCLElBQUlDLElBQUksR0FBUSxJQUFJQyxLQUFKLENBQVVOLFNBQVYsQ0FBaEI7SUFHQSxJQUFJTyxJQUFJLEdBQUcsQ0FBWDtJQUNBSixNQUFNLENBQUNLLFNBQVAsQ0FDRUMsOENBQXlCTCxVQUF6QixFQUFxQyxVQUFDTSxLQUFELEVBQU07TUFLekMsSUFBTUMsVUFBVSxHQUFHSixJQUFJLEVBQXZCOztNQUNBLElBQUlJLFVBQVUsR0FBR1gsU0FBakIsRUFBNEI7UUFJMUJLLElBQUksQ0FBQ00sVUFBRCxDQUFKLEdBQW1CRCxLQUFuQjtNQUNELENBTEQsTUFLTztRQUlMLElBQU1FLEtBQUssR0FBR0QsVUFBVSxHQUFHWCxTQUEzQjtRQUdBLElBQU1hLFFBQVEsR0FBR1IsSUFBSSxDQUFDTyxLQUFELENBQXJCO1FBQ0FQLElBQUksQ0FBQ08sS0FBRCxDQUFKLEdBQWNGLEtBQWQ7UUFLQU4sVUFBVSxDQUFDVSxJQUFYLENBQWdCRCxRQUFoQjtNQUNEO0lBQ0YsQ0ExQkQsQ0FERjtJQThCQSxPQUFPO01BRUxSLElBQUksR0FBRyxJQUFQO0lBQ0QsQ0FIRDtFQUlELENBMUNELENBSEo7QUE4Q0Q7O0FBL0NEVSIsIm5hbWVzIjpbInNraXBMYXN0Iiwic2tpcENvdW50IiwiaWRlbnRpdHlfMSIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJyaW5nIiwiQXJyYXkiLCJzZWVuIiwic3Vic2NyaWJlIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJ2YWx1ZSIsInZhbHVlSW5kZXgiLCJpbmRleCIsIm9sZFZhbHVlIiwibmV4dCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9za2lwTGFzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../util/identity":208,"../util/lift":219,"./OperatorSubscriber":48}],133:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skipUntil = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var innerFrom_1 = require("../observable/innerFrom");

var noop_1 = require("../util/noop");

function skipUntil(notifier) {
  return lift_1.operate(function (source, subscriber) {
    var taking = false;
    var skipSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
      skipSubscriber === null || skipSubscriber === void 0 ? void 0 : skipSubscriber.unsubscribe();
      taking = true;
    }, noop_1.noop);
    innerFrom_1.innerFrom(notifier).subscribe(skipSubscriber);
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      return taking && subscriber.next(value);
    }));
  });
}

exports.skipUntil = skipUntil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQTRDQSxTQUFnQkEsU0FBaEIsQ0FBNkJDLFFBQTdCLEVBQXNEO0VBQ3BELE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBQ2hDLElBQUlDLE1BQU0sR0FBRyxLQUFiO0lBRUEsSUFBTUMsY0FBYyxHQUFHQyw4Q0FDckJILFVBRHFCLEVBRXJCO01BQ0VFLGNBQWMsU0FBZCxrQkFBYyxXQUFkLEdBQWMsTUFBZCxpQkFBYyxDQUFFRSxXQUFoQjtNQUNBSCxNQUFNLEdBQUcsSUFBVDtJQUNELENBTG9CLEVBTXJCSSxXQU5xQixDQUF2QjtJQVNBQyxzQkFBVVQsUUFBVixFQUFvQlUsU0FBcEIsQ0FBOEJMLGNBQTlCO0lBRUFILE1BQU0sQ0FBQ1EsU0FBUCxDQUFpQkosOENBQXlCSCxVQUF6QixFQUFxQyxVQUFDUSxLQUFELEVBQU07TUFBSyxhQUFNLElBQUlSLFVBQVUsQ0FBQ1MsSUFBWCxDQUFnQkQsS0FBaEIsQ0FBVjtJQUFnQyxDQUFoRixDQUFqQjtFQUNELENBZk0sQ0FBUDtBQWdCRDs7QUFqQkRFIiwibmFtZXMiOlsic2tpcFVudGlsIiwibm90aWZpZXIiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwidGFraW5nIiwic2tpcFN1YnNjcmliZXIiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInVuc3Vic2NyaWJlIiwibm9vcF8xIiwiaW5uZXJGcm9tXzEiLCJzdWJzY3JpYmUiLCJ2YWx1ZSIsIm5leHQiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvc2tpcFVudGlsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../observable/innerFrom":34,"../util/lift":219,"../util/noop":221,"./OperatorSubscriber":48}],134:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skipWhile = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function skipWhile(predicate) {
  return lift_1.operate(function (source, subscriber) {
    var taking = false;
    var index = 0;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      return (taking || (taking = !predicate(value, index++))) && subscriber.next(value);
    }));
  });
}

exports.skipWhile = skipWhile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQWlEQSxTQUFnQkEsU0FBaEIsQ0FBNkJDLFNBQTdCLEVBQTRFO0VBQzFFLE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBQ2hDLElBQUlDLE1BQU0sR0FBRyxLQUFiO0lBQ0EsSUFBSUMsS0FBSyxHQUFHLENBQVo7SUFDQUgsTUFBTSxDQUFDSSxTQUFQLENBQ0VDLDhDQUF5QkosVUFBekIsRUFBcUMsVUFBQ0ssS0FBRCxFQUFNO01BQUssUUFBQ0osTUFBTSxLQUFLQSxNQUFNLEdBQUcsQ0FBQ0osU0FBUyxDQUFDUSxLQUFELEVBQVFILEtBQUssRUFBYixDQUF4QixDQUFQLEtBQXFERixVQUFVLENBQUNNLElBQVgsQ0FBZ0JELEtBQWhCLENBQXJEO0lBQTJFLENBQTNILENBREY7RUFHRCxDQU5NLENBQVA7QUFPRDs7QUFSREUiLCJuYW1lcyI6WyJza2lwV2hpbGUiLCJwcmVkaWNhdGUiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwidGFraW5nIiwiaW5kZXgiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwibmV4dCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9za2lwV2hpbGUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../util/lift":219,"./OperatorSubscriber":48}],135:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startWith = void 0;

var concat_1 = require("../observable/concat");

var args_1 = require("../util/args");

var lift_1 = require("../util/lift");

function startWith() {
  var values = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    values[_i] = arguments[_i];
  }

  var scheduler = args_1.popScheduler(values);
  return lift_1.operate(function (source, subscriber) {
    (scheduler ? concat_1.concat(values, source, scheduler) : concat_1.concat(values, source)).subscribe(subscriber);
  });
}

exports.startWith = startWith;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQXVEQSxTQUFnQkEsU0FBaEIsR0FBeUI7RUFBTzs7T0FBQSx5Q0FBYztJQUFkQzs7O0VBQzlCLElBQU1DLFNBQVMsR0FBR0Msb0JBQWFGLE1BQWIsQ0FBbEI7RUFDQSxPQUFPRyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUloQyxDQUFDSixTQUFTLEdBQUdLLGdCQUFPTixNQUFQLEVBQWVJLE1BQWYsRUFBdUJILFNBQXZCLENBQUgsR0FBdUNLLGdCQUFPTixNQUFQLEVBQWVJLE1BQWYsQ0FBakQsRUFBeUVHLFNBQXpFLENBQW1GRixVQUFuRjtFQUNELENBTE0sQ0FBUDtBQU1EOztBQVJERyIsIm5hbWVzIjpbInN0YXJ0V2l0aCIsInZhbHVlcyIsInNjaGVkdWxlciIsImFyZ3NfMSIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJjb25jYXRfMSIsInN1YnNjcmliZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9zdGFydFdpdGgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../observable/concat":22,"../util/args":200,"../util/lift":219}],136:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscribeOn = void 0;

var lift_1 = require("../util/lift");

function subscribeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return lift_1.operate(function (source, subscriber) {
    subscriber.add(scheduler.schedule(function () {
      return source.subscribe(subscriber);
    }, delay));
  });
}

exports.subscribeOn = subscribeOn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQTZEQSxTQUFnQkEsV0FBaEIsQ0FBK0JDLFNBQS9CLEVBQXlEQyxLQUF6RCxFQUEwRTtFQUFqQjtJQUFBQTtFQUFpQjs7RUFDeEUsT0FBT0MsZUFBUSxVQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBbUI7SUFDaENBLFVBQVUsQ0FBQ0MsR0FBWCxDQUFlTCxTQUFTLENBQUNNLFFBQVYsQ0FBbUI7TUFBTSxhQUFNLENBQUNDLFNBQVAsQ0FBaUJILFVBQWpCO0lBQTRCLENBQXJELEVBQXVESCxLQUF2RCxDQUFmO0VBQ0QsQ0FGTSxDQUFQO0FBR0Q7O0FBSkRPIiwibmFtZXMiOlsic3Vic2NyaWJlT24iLCJzY2hlZHVsZXIiLCJkZWxheSIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJhZGQiLCJzY2hlZHVsZSIsInN1YnNjcmliZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9zdWJzY3JpYmVPbi50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../util/lift":219}],137:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchAll = void 0;

var switchMap_1 = require("./switchMap");

var identity_1 = require("../util/identity");

function switchAll() {
  return switchMap_1.switchMap(identity_1.identity);
}

exports.switchAll = switchAll;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQTREQSxTQUFnQkEsU0FBaEIsR0FBeUI7RUFDdkIsT0FBT0Msc0JBQVVDLG1CQUFWLENBQVA7QUFDRDs7QUFGREMiLCJuYW1lcyI6WyJzd2l0Y2hBbGwiLCJzd2l0Y2hNYXBfMSIsImlkZW50aXR5XzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvc3dpdGNoQWxsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/identity":208,"./switchMap":138}],138:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchMap = void 0;

var innerFrom_1 = require("../observable/innerFrom");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function switchMap(project, resultSelector) {
  return lift_1.operate(function (source, subscriber) {
    var innerSubscriber = null;
    var index = 0;
    var isComplete = false;

    var checkComplete = function checkComplete() {
      return isComplete && !innerSubscriber && subscriber.complete();
    };

    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
      var innerIndex = 0;
      var outerIndex = index++;
      innerFrom_1.innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (innerValue) {
        return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
      }, function () {
        innerSubscriber = null;
        checkComplete();
      }));
    }, function () {
      isComplete = true;
      checkComplete();
    }));
  });
}

exports.switchMap = switchMap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQWlGQSxTQUFnQkEsU0FBaEIsQ0FDRUMsT0FERixFQUVFQyxjQUZGLEVBRStHO0VBRTdHLE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBQ2hDLElBQUlDLGVBQWUsR0FBMEMsSUFBN0Q7SUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWjtJQUVBLElBQUlDLFVBQVUsR0FBRyxLQUFqQjs7SUFJQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO01BQU0saUJBQVUsSUFBSSxDQUFDSCxlQUFmLElBQWtDRCxVQUFVLENBQUNLLFFBQVgsRUFBbEM7SUFBdUQsQ0FBbkY7O0lBRUFOLE1BQU0sQ0FBQ08sU0FBUCxDQUNFQyw4Q0FDRVAsVUFERixFQUVFLFVBQUNRLEtBQUQsRUFBTTtNQUVKUCxlQUFlLFNBQWYsbUJBQWUsV0FBZixHQUFlLE1BQWYsa0JBQWUsQ0FBRVEsV0FBakI7TUFDQSxJQUFJQyxVQUFVLEdBQUcsQ0FBakI7TUFDQSxJQUFNQyxVQUFVLEdBQUdULEtBQUssRUFBeEI7TUFFQVUsc0JBQVVoQixPQUFPLENBQUNZLEtBQUQsRUFBUUcsVUFBUixDQUFqQixFQUFzQ0wsU0FBdEMsQ0FDR0wsZUFBZSxHQUFHTSw4Q0FDakJQLFVBRGlCLEVBS2pCLFVBQUNhLFVBQUQsRUFBVztRQUFLLGlCQUFVLENBQUNDLElBQVgsQ0FBZ0JqQixjQUFjLEdBQUdBLGNBQWMsQ0FBQ1csS0FBRCxFQUFRSyxVQUFSLEVBQW9CRixVQUFwQixFQUFnQ0QsVUFBVSxFQUExQyxDQUFqQixHQUFpRUcsVUFBL0Y7TUFBMEcsQ0FMekcsRUFNakI7UUFJRVosZUFBZSxHQUFHLElBQWxCO1FBQ0FHLGFBQWE7TUFDZCxDQVpnQixDQURyQjtJQWdCRCxDQXhCSCxFQXlCRTtNQUNFRCxVQUFVLEdBQUcsSUFBYjtNQUNBQyxhQUFhO0lBQ2QsQ0E1QkgsQ0FERjtFQWdDRCxDQTFDTSxDQUFQO0FBMkNEOztBQS9DRFciLCJuYW1lcyI6WyJzd2l0Y2hNYXAiLCJwcm9qZWN0IiwicmVzdWx0U2VsZWN0b3IiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwiaW5uZXJTdWJzY3JpYmVyIiwiaW5kZXgiLCJpc0NvbXBsZXRlIiwiY2hlY2tDb21wbGV0ZSIsImNvbXBsZXRlIiwic3Vic2NyaWJlIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJ2YWx1ZSIsInVuc3Vic2NyaWJlIiwiaW5uZXJJbmRleCIsIm91dGVySW5kZXgiLCJpbm5lckZyb21fMSIsImlubmVyVmFsdWUiLCJuZXh0IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3N3aXRjaE1hcC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../observable/innerFrom":34,"../util/lift":219,"./OperatorSubscriber":48}],139:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchMapTo = void 0;

var switchMap_1 = require("./switchMap");

var isFunction_1 = require("../util/isFunction");

function switchMapTo(innerObservable, resultSelector) {
  return isFunction_1.isFunction(resultSelector) ? switchMap_1.switchMap(function () {
    return innerObservable;
  }, resultSelector) : switchMap_1.switchMap(function () {
    return innerObservable;
  });
}

exports.switchMapTo = switchMapTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQXdEQSxTQUFnQkEsV0FBaEIsQ0FDRUMsZUFERixFQUVFQyxjQUZGLEVBRStHO0VBRTdHLE9BQU9DLHdCQUFXRCxjQUFYLElBQTZCRSxzQkFBVTtJQUFNO0VBQWUsQ0FBL0IsRUFBaUNGLGNBQWpDLENBQTdCLEdBQWdGRSxzQkFBVTtJQUFNO0VBQWUsQ0FBL0IsQ0FBdkY7QUFDRDs7QUFMREMiLCJuYW1lcyI6WyJzd2l0Y2hNYXBUbyIsImlubmVyT2JzZXJ2YWJsZSIsInJlc3VsdFNlbGVjdG9yIiwiaXNGdW5jdGlvbl8xIiwic3dpdGNoTWFwXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvc3dpdGNoTWFwVG8udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../util/isFunction":212,"./switchMap":138}],140:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.switchScan = void 0;

var switchMap_1 = require("./switchMap");

var lift_1 = require("../util/lift");

function switchScan(accumulator, seed) {
  return lift_1.operate(function (source, subscriber) {
    var state = seed;
    switchMap_1.switchMap(function (value, index) {
      return accumulator(state, value, index);
    }, function (_, innerValue) {
      return state = innerValue, innerValue;
    })(source).subscribe(subscriber);
    return function () {
      state = null;
    };
  });
}

exports.switchScan = switchScan;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQXFCQSxTQUFnQkEsVUFBaEIsQ0FDRUMsV0FERixFQUVFQyxJQUZGLEVBRVM7RUFFUCxPQUFPQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUdoQyxJQUFJQyxLQUFLLEdBQUdKLElBQVo7SUFLQUssc0JBR0UsVUFBQ0MsS0FBRCxFQUFXQyxLQUFYLEVBQWdCO01BQUssa0JBQVcsQ0FBQ0gsS0FBRCxFQUFRRSxLQUFSLEVBQWVDLEtBQWYsQ0FBWDtJQUFnQyxDQUh2RCxFQU1FLFVBQUNDLENBQUQsRUFBSUMsVUFBSixFQUFjO01BQUssT0FBRUwsS0FBSyxHQUFHSyxVQUFULEVBQXNCQSxVQUF2QjtJQUFrQyxDQU52RCxFQU9FUCxNQVBGLEVBT1VRLFNBUFYsQ0FPb0JQLFVBUHBCO0lBU0EsT0FBTztNQUVMQyxLQUFLLEdBQUcsSUFBUjtJQUNELENBSEQ7RUFJRCxDQXJCTSxDQUFQO0FBc0JEOztBQTFCRE8iLCJuYW1lcyI6WyJzd2l0Y2hTY2FuIiwiYWNjdW11bGF0b3IiLCJzZWVkIiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsInN0YXRlIiwic3dpdGNoTWFwXzEiLCJ2YWx1ZSIsImluZGV4IiwiXyIsImlubmVyVmFsdWUiLCJzdWJzY3JpYmUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvc3dpdGNoU2Nhbi50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../util/lift":219,"./switchMap":138}],141:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.take = void 0;

var empty_1 = require("../observable/empty");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function take(count) {
  return count <= 0 ? function () {
    return empty_1.EMPTY;
  } : lift_1.operate(function (source, subscriber) {
    var seen = 0;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      if (++seen <= count) {
        subscriber.next(value);

        if (count <= seen) {
          subscriber.complete();
        }
      }
    }));
  });
}

exports.take = take;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQTRDQSxTQUFnQkEsSUFBaEIsQ0FBd0JDLEtBQXhCLEVBQXFDO0VBQ25DLE9BQU9BLEtBQUssSUFBSSxDQUFULEdBRUg7SUFBTTtFQUFLLENBRlIsR0FHSEMsZUFBUSxVQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBbUI7SUFDekIsSUFBSUMsSUFBSSxHQUFHLENBQVg7SUFDQUYsTUFBTSxDQUFDRyxTQUFQLENBQ0VDLDhDQUF5QkgsVUFBekIsRUFBcUMsVUFBQ0ksS0FBRCxFQUFNO01BSXpDLElBQUksRUFBRUgsSUFBRixJQUFVSixLQUFkLEVBQXFCO1FBQ25CRyxVQUFVLENBQUNLLElBQVgsQ0FBZ0JELEtBQWhCOztRQUlBLElBQUlQLEtBQUssSUFBSUksSUFBYixFQUFtQjtVQUNqQkQsVUFBVSxDQUFDTSxRQUFYO1FBQ0Q7TUFDRjtJQUNGLENBYkQsQ0FERjtFQWdCRCxDQWxCRCxDQUhKO0FBc0JEOztBQXZCREMiLCJuYW1lcyI6WyJ0YWtlIiwiY291bnQiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwic2VlbiIsInN1YnNjcmliZSIsIk9wZXJhdG9yU3Vic2NyaWJlcl8xIiwidmFsdWUiLCJuZXh0IiwiY29tcGxldGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvdGFrZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../observable/empty":26,"../util/lift":219,"./OperatorSubscriber":48}],142:[function(require,module,exports){
"use strict";

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeLast = void 0;

var empty_1 = require("../observable/empty");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function takeLast(count) {
  return count <= 0 ? function () {
    return empty_1.EMPTY;
  } : lift_1.operate(function (source, subscriber) {
    var buffer = [];
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      buffer.push(value);
      count < buffer.length && buffer.shift();
    }, function () {
      var e_1, _a;

      try {
        for (var buffer_1 = __values(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()) {
          var value = buffer_1_1.value;
          subscriber.next(value);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (buffer_1_1 && !buffer_1_1.done && (_a = buffer_1["return"])) _a.call(buffer_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      subscriber.complete();
    }, undefined, function () {
      buffer = null;
    }));
  });
}

exports.takeLast = takeLast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBeUNBLFNBQWdCQSxRQUFoQixDQUE0QkMsS0FBNUIsRUFBeUM7RUFDdkMsT0FBT0EsS0FBSyxJQUFJLENBQVQsR0FDSDtJQUFNO0VBQUssQ0FEUixHQUVIQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUt6QixJQUFJQyxNQUFNLEdBQVEsRUFBbEI7SUFDQUYsTUFBTSxDQUFDRyxTQUFQLENBQ0VDLDhDQUNFSCxVQURGLEVBRUUsVUFBQ0ksS0FBRCxFQUFNO01BRUpILE1BQU0sQ0FBQ0ksSUFBUCxDQUFZRCxLQUFaO01BR0FQLEtBQUssR0FBR0ksTUFBTSxDQUFDSyxNQUFmLElBQXlCTCxNQUFNLENBQUNNLEtBQVAsRUFBekI7SUFDRCxDQVJILEVBU0U7Ozs7UUFHRSxLQUFvQixpQ0FBTUMsNEJBQTFCLEVBQTBCLGdCQUExQixFQUEwQkEsNEJBQTFCLEVBQTRCO1VBQXZCLElBQU1KLEtBQUssbUJBQVg7VUFDSEosVUFBVSxDQUFDUyxJQUFYLENBQWdCTCxLQUFoQjtRQUNEOzs7Ozs7Ozs7Ozs7O01BQ0RKLFVBQVUsQ0FBQ1UsUUFBWDtJQUNELENBaEJILEVBa0JFQyxTQWxCRixFQW1CRTtNQUVFVixNQUFNLEdBQUcsSUFBVDtJQUNELENBdEJILENBREY7RUEwQkQsQ0FoQ0QsQ0FGSjtBQW1DRDs7QUFwQ0RXIiwibmFtZXMiOlsidGFrZUxhc3QiLCJjb3VudCIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJidWZmZXIiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwicHVzaCIsImxlbmd0aCIsInNoaWZ0IiwiYnVmZmVyXzFfMSIsIm5leHQiLCJjb21wbGV0ZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy90YWtlTGFzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../observable/empty":26,"../util/lift":219,"./OperatorSubscriber":48}],143:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeUntil = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var innerFrom_1 = require("../observable/innerFrom");

var noop_1 = require("../util/noop");

function takeUntil(notifier) {
  return lift_1.operate(function (source, subscriber) {
    innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
      return subscriber.complete();
    }, noop_1.noop));
    !subscriber.closed && source.subscribe(subscriber);
  });
}

exports.takeUntil = takeUntil;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQXlDQSxTQUFnQkEsU0FBaEIsQ0FBNkJDLFFBQTdCLEVBQTJEO0VBQ3pELE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBQ2hDQyxzQkFBVUosUUFBVixFQUFvQkssU0FBcEIsQ0FBOEJDLDhDQUF5QkgsVUFBekIsRUFBcUM7TUFBTSxpQkFBVSxDQUFDSSxRQUFYO0lBQXFCLENBQWhFLEVBQWtFQyxXQUFsRSxDQUE5QjtJQUNBLENBQUNMLFVBQVUsQ0FBQ00sTUFBWixJQUFzQlAsTUFBTSxDQUFDRyxTQUFQLENBQWlCRixVQUFqQixDQUF0QjtFQUNELENBSE0sQ0FBUDtBQUlEOztBQUxETyIsIm5hbWVzIjpbInRha2VVbnRpbCIsIm5vdGlmaWVyIiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsImlubmVyRnJvbV8xIiwic3Vic2NyaWJlIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJjb21wbGV0ZSIsIm5vb3BfMSIsImNsb3NlZCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy90YWtlVW50aWwudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../observable/innerFrom":34,"../util/lift":219,"../util/noop":221,"./OperatorSubscriber":48}],144:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.takeWhile = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function takeWhile(predicate, inclusive) {
  if (inclusive === void 0) {
    inclusive = false;
  }

  return lift_1.operate(function (source, subscriber) {
    var index = 0;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      var result = predicate(value, index++);
      (result || inclusive) && subscriber.next(value);
      !result && subscriber.complete();
    }));
  });
}

exports.takeWhile = takeWhile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQW9EQSxTQUFnQkEsU0FBaEIsQ0FBNkJDLFNBQTdCLEVBQThFQyxTQUE5RSxFQUErRjtFQUFqQjtJQUFBQTtFQUFpQjs7RUFDN0YsT0FBT0MsZUFBUSxVQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBbUI7SUFDaEMsSUFBSUMsS0FBSyxHQUFHLENBQVo7SUFDQUYsTUFBTSxDQUFDRyxTQUFQLENBQ0VDLDhDQUF5QkgsVUFBekIsRUFBcUMsVUFBQ0ksS0FBRCxFQUFNO01BQ3pDLElBQU1DLE1BQU0sR0FBR1QsU0FBUyxDQUFDUSxLQUFELEVBQVFILEtBQUssRUFBYixDQUF4QjtNQUNBLENBQUNJLE1BQU0sSUFBSVIsU0FBWCxLQUF5QkcsVUFBVSxDQUFDTSxJQUFYLENBQWdCRixLQUFoQixDQUF6QjtNQUNBLENBQUNDLE1BQUQsSUFBV0wsVUFBVSxDQUFDTyxRQUFYLEVBQVg7SUFDRCxDQUpELENBREY7RUFPRCxDQVRNLENBQVA7QUFVRDs7QUFYREMiLCJuYW1lcyI6WyJ0YWtlV2hpbGUiLCJwcmVkaWNhdGUiLCJpbmNsdXNpdmUiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwiaW5kZXgiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwicmVzdWx0IiwibmV4dCIsImNvbXBsZXRlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3Rha2VXaGlsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../util/lift":219,"./OperatorSubscriber":48}],145:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tap = void 0;

var isFunction_1 = require("../util/isFunction");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var identity_1 = require("../util/identity");

function tap(observerOrNext, error, complete) {
  var tapObserver = isFunction_1.isFunction(observerOrNext) || error || complete ? {
    next: observerOrNext,
    error: error,
    complete: complete
  } : observerOrNext;
  return tapObserver ? lift_1.operate(function (source, subscriber) {
    var _a;

    (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
    var isUnsub = true;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      var _a;

      (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
      subscriber.next(value);
    }, function () {
      var _a;

      isUnsub = false;
      (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      subscriber.complete();
    }, function (err) {
      var _a;

      isUnsub = false;
      (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
      subscriber.error(err);
    }, function () {
      var _a, _b;

      if (isUnsub) {
        (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
      }

      (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
    }));
  }) : identity_1.identity;
}

exports.tap = tap;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQXNHQSxTQUFnQkEsR0FBaEIsQ0FDRUMsY0FERixFQUVFQyxLQUZGLEVBR0VDLFFBSEYsRUFHZ0M7RUFLOUIsSUFBTUMsV0FBVyxHQUNmQyx3QkFBV0osY0FBWCxLQUE4QkMsS0FBOUIsSUFBdUNDLFFBQXZDLEdBRUs7SUFBRUcsSUFBSSxFQUFFTCxjQUFSO0lBQW1GQyxLQUFLLE9BQXhGO0lBQTBGQyxRQUFRO0VBQWxHLENBRkwsR0FHSUYsY0FKTjtFQU1BLE9BQU9HLFdBQVcsR0FDZEcsZUFBUSxVQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBbUI7OztJQUN6QixpQkFBVyxDQUFDQyxTQUFaLE1BQXFCLElBQXJCLElBQXFCQyxhQUFyQixHQUFxQixNQUFyQixHQUFxQkEsUUFBckJQLFdBQXFCLENBQXJCO0lBQ0EsSUFBSVEsT0FBTyxHQUFHLElBQWQ7SUFDQUosTUFBTSxDQUFDRSxTQUFQLENBQ0VHLDhDQUNFSixVQURGLEVBRUUsVUFBQ0ssS0FBRCxFQUFNOzs7TUFDSixpQkFBVyxDQUFDUixJQUFaLE1BQWdCLElBQWhCLElBQWdCSyxhQUFoQixHQUFnQixNQUFoQixHQUFnQkEsUUFBaEJQLFdBQWdCLEVBQUdVLEtBQUgsQ0FBaEI7TUFDQUwsVUFBVSxDQUFDSCxJQUFYLENBQWdCUSxLQUFoQjtJQUNELENBTEgsRUFNRTs7O01BQ0VGLE9BQU8sR0FBRyxLQUFWO01BQ0EsaUJBQVcsQ0FBQ1QsUUFBWixNQUFvQixJQUFwQixJQUFvQlEsYUFBcEIsR0FBb0IsTUFBcEIsR0FBb0JBLFFBQXBCUCxXQUFvQixDQUFwQjtNQUNBSyxVQUFVLENBQUNOLFFBQVg7SUFDRCxDQVZILEVBV0UsVUFBQ1ksR0FBRCxFQUFJOzs7TUFDRkgsT0FBTyxHQUFHLEtBQVY7TUFDQSxpQkFBVyxDQUFDVixLQUFaLE1BQWlCLElBQWpCLElBQWlCUyxhQUFqQixHQUFpQixNQUFqQixHQUFpQkEsUUFBakJQLFdBQWlCLEVBQUdXLEdBQUgsQ0FBakI7TUFDQU4sVUFBVSxDQUFDUCxLQUFYLENBQWlCYSxHQUFqQjtJQUNELENBZkgsRUFnQkU7OztNQUNFLElBQUlILE9BQUosRUFBYTtRQUNYLGlCQUFXLENBQUNJLFdBQVosTUFBdUIsSUFBdkIsSUFBdUJMLGFBQXZCLEdBQXVCLE1BQXZCLEdBQXVCQSxRQUF2QlAsV0FBdUIsQ0FBdkI7TUFDRDs7TUFDRCxpQkFBVyxDQUFDYSxRQUFaLE1BQW9CLElBQXBCLElBQW9CQyxhQUFwQixHQUFvQixNQUFwQixHQUFvQkEsUUFBcEJkLFdBQW9CLENBQXBCO0lBQ0QsQ0FyQkgsQ0FERjtFQXlCRCxDQTVCRCxDQURjLEdBaUNkZSxtQkFqQ0o7QUFrQ0Q7O0FBaEREQyIsIm5hbWVzIjpbInRhcCIsIm9ic2VydmVyT3JOZXh0IiwiZXJyb3IiLCJjb21wbGV0ZSIsInRhcE9ic2VydmVyIiwiaXNGdW5jdGlvbl8xIiwibmV4dCIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJzdWJzY3JpYmUiLCJfYSIsImlzVW5zdWIiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwiZXJyIiwidW5zdWJzY3JpYmUiLCJmaW5hbGl6ZSIsIl9iIiwiaWRlbnRpdHlfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy90YXAudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../util/identity":208,"../util/isFunction":212,"../util/lift":219,"./OperatorSubscriber":48}],146:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = exports.defaultThrottleConfig = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var innerFrom_1 = require("../observable/innerFrom");

exports.defaultThrottleConfig = {
  leading: true,
  trailing: false
};

function throttle(durationSelector, config) {
  if (config === void 0) {
    config = exports.defaultThrottleConfig;
  }

  return lift_1.operate(function (source, subscriber) {
    var leading = config.leading,
        trailing = config.trailing;
    var hasValue = false;
    var sendValue = null;
    var throttled = null;
    var isComplete = false;

    var endThrottling = function endThrottling() {
      throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
      throttled = null;

      if (trailing) {
        send();
        isComplete && subscriber.complete();
      }
    };

    var cleanupThrottling = function cleanupThrottling() {
      throttled = null;
      isComplete && subscriber.complete();
    };

    var startThrottle = function startThrottle(value) {
      return throttled = innerFrom_1.innerFrom(durationSelector(value)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
    };

    var send = function send() {
      if (hasValue) {
        hasValue = false;
        var value = sendValue;
        sendValue = null;
        subscriber.next(value);
        !isComplete && startThrottle(value);
      }
    };

    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      hasValue = true;
      sendValue = value;
      !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
    }, function () {
      isComplete = true;
      !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
    }));
  });
}

exports.throttle = throttle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQUNBOztBQUNBOztBQU9hQSxnQ0FBd0M7RUFDbkRDLE9BQU8sRUFBRSxJQUQwQztFQUVuREMsUUFBUSxFQUFFO0FBRnlDLENBQXhDOztBQW1EYixTQUFnQkMsUUFBaEIsQ0FDRUMsZ0JBREYsRUFFRUMsTUFGRixFQUVnRDtFQUE5QztJQUFBQSxTQUF5QkwsNkJBQXpCO0VBQThDOztFQUU5QyxPQUFPTSxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUN4QixXQUFPLEdBQWVILE1BQU0sUUFBNUI7SUFBQSxJQUFTSCxRQUFRLEdBQUtHLE1BQU0sU0FBNUI7SUFDUixJQUFJSSxRQUFRLEdBQUcsS0FBZjtJQUNBLElBQUlDLFNBQVMsR0FBYSxJQUExQjtJQUNBLElBQUlDLFNBQVMsR0FBd0IsSUFBckM7SUFDQSxJQUFJQyxVQUFVLEdBQUcsS0FBakI7O0lBRUEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtNQUNwQkYsU0FBUyxTQUFULGFBQVMsV0FBVCxHQUFTLE1BQVQsWUFBUyxDQUFFRyxXQUFYO01BQ0FILFNBQVMsR0FBRyxJQUFaOztNQUNBLElBQUlULFFBQUosRUFBYztRQUNaYSxJQUFJO1FBQ0pILFVBQVUsSUFBSUosVUFBVSxDQUFDUSxRQUFYLEVBQWQ7TUFDRDtJQUNGLENBUEQ7O0lBU0EsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtNQUN4Qk4sU0FBUyxHQUFHLElBQVo7TUFDQUMsVUFBVSxJQUFJSixVQUFVLENBQUNRLFFBQVgsRUFBZDtJQUNELENBSEQ7O0lBS0EsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQVM7TUFDN0IsT0FBQ1IsU0FBUyxHQUFHUyxzQkFBVWhCLGdCQUFnQixDQUFDZSxLQUFELENBQTFCLEVBQW1DRSxTQUFuQyxDQUE2Q0MsOENBQXlCZCxVQUF6QixFQUFxQ0ssYUFBckMsRUFBb0RJLGlCQUFwRCxDQUE3QyxDQUFiO0lBQWtJLENBRHBJOztJQUdBLElBQU1GLElBQUksR0FBRyxTQUFQQSxJQUFPO01BQ1gsSUFBSU4sUUFBSixFQUFjO1FBSVpBLFFBQVEsR0FBRyxLQUFYO1FBQ0EsSUFBTVUsS0FBSyxHQUFHVCxTQUFkO1FBQ0FBLFNBQVMsR0FBRyxJQUFaO1FBRUFGLFVBQVUsQ0FBQ2UsSUFBWCxDQUFnQkosS0FBaEI7UUFDQSxDQUFDUCxVQUFELElBQWVNLGFBQWEsQ0FBQ0MsS0FBRCxDQUE1QjtNQUNEO0lBQ0YsQ0FaRDs7SUFjQVosTUFBTSxDQUFDYyxTQUFQLENBQ0VDLDhDQUNFZCxVQURGLEVBT0UsVUFBQ1csS0FBRCxFQUFNO01BQ0pWLFFBQVEsR0FBRyxJQUFYO01BQ0FDLFNBQVMsR0FBR1MsS0FBWjtNQUNBLEVBQUVSLFNBQVMsSUFBSSxDQUFDQSxTQUFTLENBQUNhLE1BQTFCLE1BQXNDdkIsT0FBTyxHQUFHYyxJQUFJLEVBQVAsR0FBWUcsYUFBYSxDQUFDQyxLQUFELENBQXRFO0lBQ0QsQ0FYSCxFQVlFO01BQ0VQLFVBQVUsR0FBRyxJQUFiO01BQ0EsRUFBRVYsUUFBUSxJQUFJTyxRQUFaLElBQXdCRSxTQUF4QixJQUFxQyxDQUFDQSxTQUFTLENBQUNhLE1BQWxELEtBQTZEaEIsVUFBVSxDQUFDUSxRQUFYLEVBQTdEO0lBQ0QsQ0FmSCxDQURGO0VBbUJELENBekRNLENBQVA7QUEwREQ7O0FBOUREaEIiLCJuYW1lcyI6WyJleHBvcnRzIiwibGVhZGluZyIsInRyYWlsaW5nIiwidGhyb3R0bGUiLCJkdXJhdGlvblNlbGVjdG9yIiwiY29uZmlnIiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsImhhc1ZhbHVlIiwic2VuZFZhbHVlIiwidGhyb3R0bGVkIiwiaXNDb21wbGV0ZSIsImVuZFRocm90dGxpbmciLCJ1bnN1YnNjcmliZSIsInNlbmQiLCJjb21wbGV0ZSIsImNsZWFudXBUaHJvdHRsaW5nIiwic3RhcnRUaHJvdHRsZSIsInZhbHVlIiwiaW5uZXJGcm9tXzEiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsIm5leHQiLCJjbG9zZWQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy90aHJvdHRsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../observable/innerFrom":34,"../util/lift":219,"./OperatorSubscriber":48}],147:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttleTime = void 0;

var async_1 = require("../scheduler/async");

var throttle_1 = require("./throttle");

var timer_1 = require("../observable/timer");

function throttleTime(duration, scheduler, config) {
  if (scheduler === void 0) {
    scheduler = async_1.asyncScheduler;
  }

  if (config === void 0) {
    config = throttle_1.defaultThrottleConfig;
  }

  var duration$ = timer_1.timer(duration, scheduler);
  return throttle_1.throttle(function () {
    return duration$;
  }, config);
}

exports.throttleTime = throttleTime;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQW1EQSxTQUFnQkEsWUFBaEIsQ0FDRUMsUUFERixFQUVFQyxTQUZGLEVBR0VDLE1BSEYsRUFHZ0M7RUFEOUI7SUFBQUQsWUFBMkJFLHNCQUEzQjtFQUF5Qzs7RUFDekM7SUFBQUQsU0FBU0UsZ0NBQVQ7RUFBOEI7O0VBRTlCLElBQU1DLFNBQVMsR0FBR0MsY0FBTU4sUUFBTixFQUFnQkMsU0FBaEIsQ0FBbEI7RUFDQSxPQUFPRyxvQkFBUztJQUFNO0VBQVMsQ0FBeEIsRUFBMEJGLE1BQTFCLENBQVA7QUFDRDs7QUFQREsiLCJuYW1lcyI6WyJ0aHJvdHRsZVRpbWUiLCJkdXJhdGlvbiIsInNjaGVkdWxlciIsImNvbmZpZyIsImFzeW5jXzEiLCJ0aHJvdHRsZV8xIiwiZHVyYXRpb24kIiwidGltZXJfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy90aHJvdHRsZVRpbWUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../observable/timer":45,"../scheduler/async":183,"./throttle":146}],148:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throwIfEmpty = void 0;

var EmptyError_1 = require("../util/EmptyError");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function throwIfEmpty(errorFactory) {
  if (errorFactory === void 0) {
    errorFactory = defaultErrorFactory;
  }

  return lift_1.operate(function (source, subscriber) {
    var hasValue = false;
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      hasValue = true;
      subscriber.next(value);
    }, function () {
      return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
    }));
  });
}

exports.throwIfEmpty = throwIfEmpty;

function defaultErrorFactory() {
  return new EmptyError_1.EmptyError();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQXNDQSxTQUFnQkEsWUFBaEIsQ0FBZ0NDLFlBQWhDLEVBQTZFO0VBQTdDO0lBQUFBO0VBQTZDOztFQUMzRSxPQUFPQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUNoQyxJQUFJQyxRQUFRLEdBQUcsS0FBZjtJQUNBRixNQUFNLENBQUNHLFNBQVAsQ0FDRUMsOENBQ0VILFVBREYsRUFFRSxVQUFDSSxLQUFELEVBQU07TUFDSkgsUUFBUSxHQUFHLElBQVg7TUFDQUQsVUFBVSxDQUFDSyxJQUFYLENBQWdCRCxLQUFoQjtJQUNELENBTEgsRUFNRTtNQUFNLE9BQUNILFFBQVEsR0FBR0QsVUFBVSxDQUFDTSxRQUFYLEVBQUgsR0FBMkJOLFVBQVUsQ0FBQ08sS0FBWCxDQUFpQlYsWUFBWSxFQUE3QixDQUFwQztJQUFxRSxDQU43RSxDQURGO0VBVUQsQ0FaTSxDQUFQO0FBYUQ7O0FBZERXOztBQWdCQSxTQUFTQyxtQkFBVCxHQUE0QjtFQUMxQixPQUFPLElBQUlDLHVCQUFKLEVBQVA7QUFDRCIsIm5hbWVzIjpbInRocm93SWZFbXB0eSIsImVycm9yRmFjdG9yeSIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJoYXNWYWx1ZSIsInN1YnNjcmliZSIsIk9wZXJhdG9yU3Vic2NyaWJlcl8xIiwidmFsdWUiLCJuZXh0IiwiY29tcGxldGUiLCJlcnJvciIsImV4cG9ydHMiLCJkZWZhdWx0RXJyb3JGYWN0b3J5IiwiRW1wdHlFcnJvcl8xIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvdGhyb3dJZkVtcHR5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/EmptyError":194,"../util/lift":219,"./OperatorSubscriber":48}],149:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeInterval = exports.timeInterval = void 0;

var async_1 = require("../scheduler/async");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function timeInterval(scheduler) {
  if (scheduler === void 0) {
    scheduler = async_1.asyncScheduler;
  }

  return lift_1.operate(function (source, subscriber) {
    var last = scheduler.now();
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      var now = scheduler.now();
      var interval = now - last;
      last = now;
      subscriber.next(new TimeInterval(value, interval));
    }));
  });
}

exports.timeInterval = timeInterval;

var TimeInterval = function () {
  function TimeInterval(value, interval) {
    this.value = value;
    this.interval = interval;
  }

  return TimeInterval;
}();

exports.TimeInterval = TimeInterval;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQXlDQSxTQUFnQkEsWUFBaEIsQ0FBZ0NDLFNBQWhDLEVBQXlFO0VBQXpDO0lBQUFBLFlBQTJCQyxzQkFBM0I7RUFBeUM7O0VBQ3ZFLE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBQ2hDLElBQUlDLElBQUksR0FBR0wsU0FBUyxDQUFDTSxHQUFWLEVBQVg7SUFDQUgsTUFBTSxDQUFDSSxTQUFQLENBQ0VDLDhDQUF5QkosVUFBekIsRUFBcUMsVUFBQ0ssS0FBRCxFQUFNO01BQ3pDLElBQU1ILEdBQUcsR0FBR04sU0FBUyxDQUFDTSxHQUFWLEVBQVo7TUFDQSxJQUFNSSxRQUFRLEdBQUdKLEdBQUcsR0FBR0QsSUFBdkI7TUFDQUEsSUFBSSxHQUFHQyxHQUFQO01BQ0FGLFVBQVUsQ0FBQ08sSUFBWCxDQUFnQixJQUFJQyxZQUFKLENBQWlCSCxLQUFqQixFQUF3QkMsUUFBeEIsQ0FBaEI7SUFDRCxDQUxELENBREY7RUFRRCxDQVZNLENBQVA7QUFXRDs7QUFaREc7O0FBaUJBO0VBSUUsc0JBQW1CSixLQUFuQixFQUFvQ0MsUUFBcEMsRUFBb0Q7SUFBakM7SUFBaUI7RUFBb0I7O0VBQzFEO0FBQUMsQ0FMRDs7QUFBYUciLCJuYW1lcyI6WyJ0aW1lSW50ZXJ2YWwiLCJzY2hlZHVsZXIiLCJhc3luY18xIiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsImxhc3QiLCJub3ciLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwiaW50ZXJ2YWwiLCJuZXh0IiwiVGltZUludGVydmFsIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3RpbWVJbnRlcnZhbC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../scheduler/async":183,"../util/lift":219,"./OperatorSubscriber":48}],150:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeout = exports.TimeoutError = void 0;

var async_1 = require("../scheduler/async");

var isDate_1 = require("../util/isDate");

var lift_1 = require("../util/lift");

var innerFrom_1 = require("../observable/innerFrom");

var createErrorClass_1 = require("../util/createErrorClass");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var executeSchedule_1 = require("../util/executeSchedule");

exports.TimeoutError = createErrorClass_1.createErrorClass(function (_super) {
  return function TimeoutErrorImpl(info) {
    if (info === void 0) {
      info = null;
    }

    _super(this);

    this.message = 'Timeout has occurred';
    this.name = 'TimeoutError';
    this.info = info;
  };
});

function timeout(config, schedulerArg) {
  var _a = isDate_1.isValidDate(config) ? {
    first: config
  } : typeof config === 'number' ? {
    each: config
  } : config,
      first = _a.first,
      each = _a.each,
      _b = _a["with"],
      _with = _b === void 0 ? timeoutErrorFactory : _b,
      _c = _a.scheduler,
      scheduler = _c === void 0 ? schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : async_1.asyncScheduler : _c,
      _d = _a.meta,
      meta = _d === void 0 ? null : _d;

  if (first == null && each == null) {
    throw new TypeError('No timeout provided.');
  }

  return lift_1.operate(function (source, subscriber) {
    var originalSourceSubscription;
    var timerSubscription;
    var lastValue = null;
    var seen = 0;

    var startTimer = function startTimer(delay) {
      timerSubscription = executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
        try {
          originalSourceSubscription.unsubscribe();
          innerFrom_1.innerFrom(_with({
            meta: meta,
            lastValue: lastValue,
            seen: seen
          })).subscribe(subscriber);
        } catch (err) {
          subscriber.error(err);
        }
      }, delay);
    };

    originalSourceSubscription = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      seen++;
      subscriber.next(lastValue = value);
      each > 0 && startTimer(each);
    }, undefined, undefined, function () {
      if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
        timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      }

      lastValue = null;
    }));
    !seen && startTimer(first != null ? typeof first === 'number' ? first : +first - scheduler.now() : each);
  });
}

exports.timeout = timeout;

function timeoutErrorFactory(info) {
  throw new exports.TimeoutError(info);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtJQStCQSxDQUFDQyxJQUFELElBQVNDLFVBQVUsQ0FBQ2xCLEtBQUssSUFBSSxJQUFULEdBQWlCLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsR0FBNEJBLEtBQTVCLEdBQW9DLENBQUNBLEtBQUQsR0FBU00sU0FBVSxDQUFDeUIsR0FBWCxFQUE5RCxHQUFrRjlCLElBQW5GLENBQW5CO0VBQ0QsQ0F0RU0sQ0FBUDtBQXVFRDs7QUEvRkRaOztBQXNHQSxTQUFTZSxtQkFBVCxDQUE2QlgsSUFBN0IsRUFBbUQ7RUFDakQsTUFBTSxJQUFJSixvQkFBSixDQUFpQkksSUFBakIsQ0FBTjtBQUNEIiwibmFtZXMiOlsiZXhwb3J0cyIsImNyZWF0ZUVycm9yQ2xhc3NfMSIsIl9zdXBlciIsIlRpbWVvdXRFcnJvckltcGwiLCJpbmZvIiwibWVzc2FnZSIsIm5hbWUiLCJ0aW1lb3V0IiwiY29uZmlnIiwic2NoZWR1bGVyQXJnIiwiaXNEYXRlXzEiLCJmaXJzdCIsImVhY2giLCJfYiIsIl93aXRoIiwidGltZW91dEVycm9yRmFjdG9yeSIsIl9jIiwic2NoZWR1bGVyIiwiYXN5bmNfMSIsIl9kIiwibWV0YSIsIlR5cGVFcnJvciIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJvcmlnaW5hbFNvdXJjZVN1YnNjcmlwdGlvbiIsInRpbWVyU3Vic2NyaXB0aW9uIiwibGFzdFZhbHVlIiwic2VlbiIsInN0YXJ0VGltZXIiLCJkZWxheSIsImV4ZWN1dGVTY2hlZHVsZV8xIiwidW5zdWJzY3JpYmUiLCJpbm5lckZyb21fMSIsInN1YnNjcmliZSIsImVyciIsImVycm9yIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJ2YWx1ZSIsIm5leHQiLCJ1bmRlZmluZWQiLCJjbG9zZWQiLCJub3ciXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy90aW1lb3V0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../observable/innerFrom":34,"../scheduler/async":183,"../util/createErrorClass":204,"../util/executeSchedule":207,"../util/isDate":211,"../util/lift":219,"./OperatorSubscriber":48}],151:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeoutWith = void 0;

var async_1 = require("../scheduler/async");

var isDate_1 = require("../util/isDate");

var timeout_1 = require("./timeout");

function timeoutWith(due, withObservable, scheduler) {
  var first;
  var each;

  var _with;

  scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : async_1.async;

  if (isDate_1.isValidDate(due)) {
    first = due;
  } else if (typeof due === 'number') {
    each = due;
  }

  if (withObservable) {
    _with = function _with() {
      return withObservable;
    };
  } else {
    throw new TypeError('No observable provided to switch to');
  }

  if (first == null && each == null) {
    throw new TypeError('No timeout provided.');
  }

  return timeout_1.timeout({
    first: first,
    each: each,
    scheduler: scheduler,
    "with": _with
  });
}

exports.timeoutWith = timeoutWith;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQStFQSxTQUFnQkEsV0FBaEIsQ0FDRUMsR0FERixFQUVFQyxjQUZGLEVBR0VDLFNBSEYsRUFHMkI7RUFFekIsSUFBSUMsS0FBSjtFQUNBLElBQUlDLElBQUo7O0VBQ0EsSUFBSUMsS0FBSjs7RUFDQUgsU0FBUyxHQUFHQSxTQUFTLFNBQVQsYUFBUyxXQUFULGVBQWFJLGFBQXpCOztFQUVBLElBQUlDLHFCQUFZUCxHQUFaLENBQUosRUFBc0I7SUFDcEJHLEtBQUssR0FBR0gsR0FBUjtFQUNELENBRkQsTUFFTyxJQUFJLE9BQU9BLEdBQVAsS0FBZSxRQUFuQixFQUE2QjtJQUNsQ0ksSUFBSSxHQUFHSixHQUFQO0VBQ0Q7O0VBRUQsSUFBSUMsY0FBSixFQUFvQjtJQUNsQkksS0FBSyxHQUFHO01BQU07SUFBYyxDQUE1QjtFQUNELENBRkQsTUFFTztJQUNMLE1BQU0sSUFBSUcsU0FBSixDQUFjLHFDQUFkLENBQU47RUFDRDs7RUFFRCxJQUFJTCxLQUFLLElBQUksSUFBVCxJQUFpQkMsSUFBSSxJQUFJLElBQTdCLEVBQW1DO0lBRWpDLE1BQU0sSUFBSUksU0FBSixDQUFjLHNCQUFkLENBQU47RUFDRDs7RUFFRCxPQUFPQyxrQkFBK0I7SUFDcENOLEtBQUssT0FEK0I7SUFFcENDLElBQUksTUFGZ0M7SUFHcENGLFNBQVMsV0FIMkI7SUFJcEMsUUFBTUc7RUFKOEIsQ0FBL0IsQ0FBUDtBQU1EOztBQWpDREsiLCJuYW1lcyI6WyJ0aW1lb3V0V2l0aCIsImR1ZSIsIndpdGhPYnNlcnZhYmxlIiwic2NoZWR1bGVyIiwiZmlyc3QiLCJlYWNoIiwiX3dpdGgiLCJhc3luY18xIiwiaXNEYXRlXzEiLCJUeXBlRXJyb3IiLCJ0aW1lb3V0XzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvdGltZW91dFdpdGgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../scheduler/async":183,"../util/isDate":211,"./timeout":150}],152:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timestamp = void 0;

var dateTimestampProvider_1 = require("../scheduler/dateTimestampProvider");

var map_1 = require("./map");

function timestamp(timestampProvider) {
  if (timestampProvider === void 0) {
    timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
  }

  return map_1.map(function (value) {
    return {
      value: value,
      timestamp: timestampProvider.now()
    };
  });
}

exports.timestamp = timestamp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQWtDQSxTQUFnQkEsU0FBaEIsQ0FBNkJDLGlCQUE3QixFQUF5RjtFQUE1RDtJQUFBQSxvQkFBdUNDLDZDQUF2QztFQUE0RDs7RUFDdkYsT0FBT0MsVUFBSSxVQUFDQyxLQUFELEVBQVM7SUFBSyxPQUFDO01BQUVBLEtBQUssT0FBUDtNQUFTSixTQUFTLEVBQUVDLGlCQUFpQixDQUFDSSxHQUFsQjtJQUFwQixDQUFEO0VBQStDLENBQWpFLENBQVA7QUFDRDs7QUFGREMiLCJuYW1lcyI6WyJ0aW1lc3RhbXAiLCJ0aW1lc3RhbXBQcm92aWRlciIsImRhdGVUaW1lc3RhbXBQcm92aWRlcl8xIiwibWFwXzEiLCJ2YWx1ZSIsIm5vdyIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy90aW1lc3RhbXAudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../scheduler/dateTimestampProvider":184,"./map":95}],153:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toArray = void 0;

var reduce_1 = require("./reduce");

var lift_1 = require("../util/lift");

var arrReducer = function arrReducer(arr, value) {
  return arr.push(value), arr;
};

function toArray() {
  return lift_1.operate(function (source, subscriber) {
    reduce_1.reduce(arrReducer, [])(source).subscribe(subscriber);
  });
}

exports.toArray = toArray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEdBQUQsRUFBYUMsS0FBYixFQUF1QjtFQUFLLE9BQUNELEdBQUcsQ0FBQ0UsSUFBSixDQUFTRCxLQUFULEdBQWlCRCxHQUFsQjtBQUFzQixDQUFyRTs7QUFnQ0EsU0FBZ0JHLE9BQWhCLEdBQXVCO0VBSXJCLE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBQ2hDQyxnQkFBT1IsVUFBUCxFQUFtQixFQUFuQixFQUE4Qk0sTUFBOUIsRUFBc0NHLFNBQXRDLENBQWdERixVQUFoRDtFQUNELENBRk0sQ0FBUDtBQUdEOztBQVBERyIsIm5hbWVzIjpbImFyclJlZHVjZXIiLCJhcnIiLCJ2YWx1ZSIsInB1c2giLCJ0b0FycmF5IiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsInJlZHVjZV8xIiwic3Vic2NyaWJlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3RvQXJyYXkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../util/lift":219,"./reduce":117}],154:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.window = void 0;

var Subject_1 = require("../Subject");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var noop_1 = require("../util/noop");

function window(windowBoundaries) {
  return lift_1.operate(function (source, subscriber) {
    var windowSubject = new Subject_1.Subject();
    subscriber.next(windowSubject.asObservable());

    var errorHandler = function errorHandler(err) {
      windowSubject.error(err);
      subscriber.error(err);
    };

    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      return windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.next(value);
    }, function () {
      windowSubject.complete();
      subscriber.complete();
    }, errorHandler));
    windowBoundaries.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function () {
      windowSubject.complete();
      subscriber.next(windowSubject = new Subject_1.Subject());
    }, noop_1.noop, errorHandler));
    return function () {
      windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.unsubscribe();
      windowSubject = null;
    };
  });
}

exports.window = window;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQTZDQSxTQUFnQkEsTUFBaEIsQ0FBMEJDLGdCQUExQixFQUEyRDtFQUN6RCxPQUFPQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUNoQyxJQUFJQyxhQUFhLEdBQWUsSUFBSUMsaUJBQUosRUFBaEM7SUFFQUYsVUFBVSxDQUFDRyxJQUFYLENBQWdCRixhQUFhLENBQUNHLFlBQWQsRUFBaEI7O0lBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsR0FBRCxFQUFTO01BQzVCTCxhQUFhLENBQUNNLEtBQWQsQ0FBb0JELEdBQXBCO01BQ0FOLFVBQVUsQ0FBQ08sS0FBWCxDQUFpQkQsR0FBakI7SUFDRCxDQUhEOztJQU1BUCxNQUFNLENBQUNTLFNBQVAsQ0FDRUMsOENBQ0VULFVBREYsRUFFRSxVQUFDVSxLQUFELEVBQU07TUFBSyxvQkFBYSxTQUFiLGlCQUFhLFdBQWIsR0FBYSxNQUFiLGdCQUFhLENBQUVQLElBQWYsQ0FBb0JPLEtBQXBCO0lBQTBCLENBRnZDLEVBR0U7TUFDRVQsYUFBYSxDQUFDVSxRQUFkO01BQ0FYLFVBQVUsQ0FBQ1csUUFBWDtJQUNELENBTkgsRUFPRU4sWUFQRixDQURGO0lBYUFSLGdCQUFnQixDQUFDVyxTQUFqQixDQUNFQyw4Q0FDRVQsVUFERixFQUVFO01BQ0VDLGFBQWEsQ0FBQ1UsUUFBZDtNQUNBWCxVQUFVLENBQUNHLElBQVgsQ0FBaUJGLGFBQWEsR0FBRyxJQUFJQyxpQkFBSixFQUFqQztJQUNELENBTEgsRUFNRVUsV0FORixFQU9FUCxZQVBGLENBREY7SUFZQSxPQUFPO01BSUxKLGFBQWEsU0FBYixpQkFBYSxXQUFiLEdBQWEsTUFBYixnQkFBYSxDQUFFWSxXQUFmO01BQ0FaLGFBQWEsR0FBRyxJQUFoQjtJQUNELENBTkQ7RUFPRCxDQTNDTSxDQUFQO0FBNENEOztBQTdDRGEiLCJuYW1lcyI6WyJ3aW5kb3ciLCJ3aW5kb3dCb3VuZGFyaWVzIiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsIndpbmRvd1N1YmplY3QiLCJTdWJqZWN0XzEiLCJuZXh0IiwiYXNPYnNlcnZhYmxlIiwiZXJyb3JIYW5kbGVyIiwiZXJyIiwiZXJyb3IiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsInZhbHVlIiwiY29tcGxldGUiLCJub29wXzEiLCJ1bnN1YnNjcmliZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy93aW5kb3cudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../Subject":11,"../util/lift":219,"../util/noop":221,"./OperatorSubscriber":48}],155:[function(require,module,exports){
"use strict";

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowCount = void 0;

var Subject_1 = require("../Subject");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

function windowCount(windowSize, startWindowEvery) {
  if (startWindowEvery === void 0) {
    startWindowEvery = 0;
  }

  var startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
  return lift_1.operate(function (source, subscriber) {
    var windows = [new Subject_1.Subject()];
    var starts = [];
    var count = 0;
    subscriber.next(windows[0].asObservable());
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      var e_1, _a;

      try {
        for (var windows_1 = __values(windows), windows_1_1 = windows_1.next(); !windows_1_1.done; windows_1_1 = windows_1.next()) {
          var window_1 = windows_1_1.value;
          window_1.next(value);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (windows_1_1 && !windows_1_1.done && (_a = windows_1["return"])) _a.call(windows_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      var c = count - windowSize + 1;

      if (c >= 0 && c % startEvery === 0) {
        windows.shift().complete();
      }

      if (++count % startEvery === 0) {
        var window_2 = new Subject_1.Subject();
        windows.push(window_2);
        subscriber.next(window_2.asObservable());
      }
    }, function () {
      while (windows.length > 0) {
        windows.shift().complete();
      }

      subscriber.complete();
    }, function (err) {
      while (windows.length > 0) {
        windows.shift().error(err);
      }

      subscriber.error(err);
    }, function () {
      starts = null;
      windows = null;
    }));
  });
}

exports.windowCount = windowCount;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBZ0VBLFNBQWdCQSxXQUFoQixDQUErQkMsVUFBL0IsRUFBbURDLGdCQUFuRCxFQUErRTtFQUE1QjtJQUFBQTtFQUE0Qjs7RUFDN0UsSUFBTUMsVUFBVSxHQUFHRCxnQkFBZ0IsR0FBRyxDQUFuQixHQUF1QkEsZ0JBQXZCLEdBQTBDRCxVQUE3RDtFQUVBLE9BQU9HLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBQ2hDLElBQUlDLE9BQU8sR0FBRyxDQUFDLElBQUlDLGlCQUFKLEVBQUQsQ0FBZDtJQUNBLElBQUlDLE1BQU0sR0FBYSxFQUF2QjtJQUNBLElBQUlDLEtBQUssR0FBRyxDQUFaO0lBR0FKLFVBQVUsQ0FBQ0ssSUFBWCxDQUFnQkosT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSyxZQUFYLEVBQWhCO0lBRUFQLE1BQU0sQ0FBQ1EsU0FBUCxDQUNFQyw4Q0FDRVIsVUFERixFQUVFLFVBQUNTLEtBQUQsRUFBUzs7OztRQUlQLEtBQXFCLG1DQUFPQyw4QkFBNUIsRUFBNEIsaUJBQTVCLEVBQTRCQSw4QkFBNUIsRUFBOEI7VUFBekIsSUFBTUMsUUFBTSxvQkFBWjtVQUNIQSxRQUFNLENBQUNOLElBQVAsQ0FBWUksS0FBWjtRQUNEOzs7Ozs7Ozs7Ozs7O01BTUQsSUFBTUcsQ0FBQyxHQUFHUixLQUFLLEdBQUdULFVBQVIsR0FBcUIsQ0FBL0I7O01BQ0EsSUFBSWlCLENBQUMsSUFBSSxDQUFMLElBQVVBLENBQUMsR0FBR2YsVUFBSixLQUFtQixDQUFqQyxFQUFvQztRQUNsQ0ksT0FBTyxDQUFDWSxLQUFSLEdBQWlCQyxRQUFqQjtNQUNEOztNQU9ELElBQUksRUFBRVYsS0FBRixHQUFVUCxVQUFWLEtBQXlCLENBQTdCLEVBQWdDO1FBQzlCLElBQU1rQixRQUFNLEdBQUcsSUFBSWIsaUJBQUosRUFBZjtRQUNBRCxPQUFPLENBQUNlLElBQVIsQ0FBYUQsUUFBYjtRQUNBZixVQUFVLENBQUNLLElBQVgsQ0FBZ0JVLFFBQU0sQ0FBQ1QsWUFBUCxFQUFoQjtNQUNEO0lBQ0YsQ0E3QkgsRUE4QkU7TUFDRSxPQUFPTCxPQUFPLENBQUNnQixNQUFSLEdBQWlCLENBQXhCLEVBQTJCO1FBQ3pCaEIsT0FBTyxDQUFDWSxLQUFSLEdBQWlCQyxRQUFqQjtNQUNEOztNQUNEZCxVQUFVLENBQUNjLFFBQVg7SUFDRCxDQW5DSCxFQW9DRSxVQUFDSSxHQUFELEVBQUk7TUFDRixPQUFPakIsT0FBTyxDQUFDZ0IsTUFBUixHQUFpQixDQUF4QixFQUEyQjtRQUN6QmhCLE9BQU8sQ0FBQ1ksS0FBUixHQUFpQk0sS0FBakIsQ0FBdUJELEdBQXZCO01BQ0Q7O01BQ0RsQixVQUFVLENBQUNtQixLQUFYLENBQWlCRCxHQUFqQjtJQUNELENBekNILEVBMENFO01BQ0VmLE1BQU0sR0FBRyxJQUFUO01BQ0FGLE9BQU8sR0FBRyxJQUFWO0lBQ0QsQ0E3Q0gsQ0FERjtFQWlERCxDQXpETSxDQUFQO0FBMEREOztBQTdERG1CIiwibmFtZXMiOlsid2luZG93Q291bnQiLCJ3aW5kb3dTaXplIiwic3RhcnRXaW5kb3dFdmVyeSIsInN0YXJ0RXZlcnkiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwid2luZG93cyIsIlN1YmplY3RfMSIsInN0YXJ0cyIsImNvdW50IiwibmV4dCIsImFzT2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsIk9wZXJhdG9yU3Vic2NyaWJlcl8xIiwidmFsdWUiLCJ3aW5kb3dzXzFfMSIsIndpbmRvd18xIiwiYyIsInNoaWZ0IiwiY29tcGxldGUiLCJ3aW5kb3dfMiIsInB1c2giLCJsZW5ndGgiLCJlcnIiLCJlcnJvciIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy93aW5kb3dDb3VudC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../Subject":11,"../util/lift":219,"./OperatorSubscriber":48}],156:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowTime = void 0;

var Subject_1 = require("../Subject");

var async_1 = require("../scheduler/async");

var Subscription_1 = require("../Subscription");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var arrRemove_1 = require("../util/arrRemove");

var args_1 = require("../util/args");

var executeSchedule_1 = require("../util/executeSchedule");

function windowTime(windowTimeSpan) {
  var _a, _b;

  var otherArgs = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    otherArgs[_i - 1] = arguments[_i];
  }

  var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
  var windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
  var maxWindowSize = otherArgs[1] || Infinity;
  return lift_1.operate(function (source, subscriber) {
    var windowRecords = [];
    var restartOnClose = false;

    var closeWindow = function closeWindow(record) {
      var window = record.window,
          subs = record.subs;
      window.complete();
      subs.unsubscribe();
      arrRemove_1.arrRemove(windowRecords, record);
      restartOnClose && startWindow();
    };

    var startWindow = function startWindow() {
      if (windowRecords) {
        var subs = new Subscription_1.Subscription();
        subscriber.add(subs);
        var window_1 = new Subject_1.Subject();
        var record_1 = {
          window: window_1,
          subs: subs,
          seen: 0
        };
        windowRecords.push(record_1);
        subscriber.next(window_1.asObservable());
        executeSchedule_1.executeSchedule(subs, scheduler, function () {
          return closeWindow(record_1);
        }, windowTimeSpan);
      }
    };

    if (windowCreationInterval !== null && windowCreationInterval >= 0) {
      executeSchedule_1.executeSchedule(subscriber, scheduler, startWindow, windowCreationInterval, true);
    } else {
      restartOnClose = true;
    }

    startWindow();

    var loop = function loop(cb) {
      return windowRecords.slice().forEach(cb);
    };

    var terminate = function terminate(cb) {
      loop(function (_a) {
        var window = _a.window;
        return cb(window);
      });
      cb(subscriber);
      subscriber.unsubscribe();
    };

    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      loop(function (record) {
        record.window.next(value);
        maxWindowSize <= ++record.seen && closeWindow(record);
      });
    }, function () {
      return terminate(function (consumer) {
        return consumer.complete();
      });
    }, function (err) {
      return terminate(function (consumer) {
        return consumer.error(err);
      });
    }));
    return function () {
      windowRecords = null;
    };
  });
}

exports.windowTime = windowTime;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQWdHQSxTQUFnQkEsVUFBaEIsQ0FBOEJDLGNBQTlCLEVBQW9EOzs7RUFBRTs7T0FBQSx5Q0FBbUI7SUFBbkJDOzs7RUFDcEQsSUFBTUMsU0FBUyxHQUFHLDBCQUFhRCxTQUFiLE9BQXVCLElBQXZCLElBQXVCRSxhQUF2QixHQUF1QkEsRUFBdkIsR0FBMkJDLHNCQUE3QztFQUNBLElBQU1DLHNCQUFzQixHQUFHLE1BQUNKLFNBQVMsQ0FBQyxDQUFELENBQVYsTUFBd0IsSUFBeEIsSUFBd0JLLGFBQXhCLEdBQXdCQSxFQUF4QixHQUE0QixJQUEzRDtFQUNBLElBQU1DLGFBQWEsR0FBSU4sU0FBUyxDQUFDLENBQUQsQ0FBVCxJQUEyQk8sUUFBbEQ7RUFFQSxPQUFPQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUVoQyxJQUFJQyxhQUFhLEdBQTZCLEVBQTlDO0lBR0EsSUFBSUMsY0FBYyxHQUFHLEtBQXJCOztJQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE1BQUQsRUFBbUQ7TUFDN0QsVUFBTSxHQUFXQSxNQUFNLE9BQXZCO01BQUEsSUFBUUMsSUFBSSxHQUFLRCxNQUFNLEtBQXZCO01BQ1JFLE1BQU0sQ0FBQ0MsUUFBUDtNQUNBRixJQUFJLENBQUNHLFdBQUw7TUFDQUMsc0JBQVVSLGFBQVYsRUFBeUJHLE1BQXpCO01BQ0FGLGNBQWMsSUFBSVEsV0FBVyxFQUE3QjtJQUNELENBTkQ7O0lBWUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7TUFDbEIsSUFBSVQsYUFBSixFQUFtQjtRQUNqQixJQUFNSSxJQUFJLEdBQUcsSUFBSU0sMkJBQUosRUFBYjtRQUNBWCxVQUFVLENBQUNZLEdBQVgsQ0FBZVAsSUFBZjtRQUNBLElBQU1RLFFBQU0sR0FBRyxJQUFJQyxpQkFBSixFQUFmO1FBQ0EsSUFBTUMsUUFBTSxHQUFHO1VBQ2JULE1BQU0sVUFETztVQUViRCxJQUFJLE1BRlM7VUFHYlcsSUFBSSxFQUFFO1FBSE8sQ0FBZjtRQUtBZixhQUFhLENBQUNnQixJQUFkLENBQW1CRixRQUFuQjtRQUNBZixVQUFVLENBQUNrQixJQUFYLENBQWdCTCxRQUFNLENBQUNNLFlBQVAsRUFBaEI7UUFDQUMsa0NBQWdCZixJQUFoQixFQUFzQmQsU0FBdEIsRUFBaUM7VUFBTSxrQkFBVyxDQUFDd0IsUUFBRCxDQUFYO1FBQW1CLENBQTFELEVBQTREMUIsY0FBNUQ7TUFDRDtJQUNGLENBZEQ7O0lBZ0JBLElBQUlLLHNCQUFzQixLQUFLLElBQTNCLElBQW1DQSxzQkFBc0IsSUFBSSxDQUFqRSxFQUFvRTtNQUlsRTBCLGtDQUFnQnBCLFVBQWhCLEVBQTRCVCxTQUE1QixFQUF1Q21CLFdBQXZDLEVBQW9EaEIsc0JBQXBELEVBQTRFLElBQTVFO0lBQ0QsQ0FMRCxNQUtPO01BQ0xRLGNBQWMsR0FBRyxJQUFqQjtJQUNEOztJQUVEUSxXQUFXOztJQVFYLElBQU1XLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEVBQUQsRUFBc0M7TUFBSyxvQkFBYyxDQUFDQyxLQUFmLEdBQXVCQyxPQUF2QixDQUErQkYsRUFBL0I7SUFBa0MsQ0FBMUY7O0lBTUEsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0gsRUFBRCxFQUFzQztNQUN0REQsSUFBSSxDQUFDLFVBQUM3QixFQUFELEVBQVc7WUFBUmMsTUFBTTtRQUFPLFNBQUUsQ0FBQ0EsTUFBRCxDQUFGO01BQVUsQ0FBM0IsQ0FBSjtNQUNBZ0IsRUFBRSxDQUFDdEIsVUFBRCxDQUFGO01BQ0FBLFVBQVUsQ0FBQ1EsV0FBWDtJQUNELENBSkQ7O0lBTUFULE1BQU0sQ0FBQzJCLFNBQVAsQ0FDRUMsOENBQ0UzQixVQURGLEVBRUUsVUFBQzRCLEtBQUQsRUFBUztNQUVQUCxJQUFJLENBQUMsVUFBQ2pCLE1BQUQsRUFBTztRQUNWQSxNQUFNLENBQUNFLE1BQVAsQ0FBY1ksSUFBZCxDQUFtQlUsS0FBbkI7UUFFQWhDLGFBQWEsSUFBSSxFQUFFUSxNQUFNLENBQUNZLElBQTFCLElBQWtDYixXQUFXLENBQUNDLE1BQUQsQ0FBN0M7TUFDRCxDQUpHLENBQUo7SUFLRCxDQVRILEVBV0U7TUFBTSxnQkFBUyxDQUFDLFVBQUN5QixRQUFELEVBQVM7UUFBSyxlQUFRLENBQUN0QixRQUFUO01BQW1CLENBQWxDLENBQVQ7SUFBNEMsQ0FYcEQsRUFhRSxVQUFDdUIsR0FBRCxFQUFJO01BQUssZ0JBQVMsQ0FBQyxVQUFDRCxRQUFELEVBQVM7UUFBSyxlQUFRLENBQUNFLEtBQVQsQ0FBZUQsR0FBZjtNQUFtQixDQUFsQyxDQUFUO0lBQTRDLENBYnZELENBREY7SUFxQkEsT0FBTztNQUVMN0IsYUFBYSxHQUFHLElBQWhCO0lBQ0QsQ0FIRDtFQUlELENBekZNLENBQVA7QUEwRkQ7O0FBL0ZEK0IiLCJuYW1lcyI6WyJ3aW5kb3dUaW1lIiwid2luZG93VGltZVNwYW4iLCJvdGhlckFyZ3MiLCJzY2hlZHVsZXIiLCJfYSIsImFzeW5jXzEiLCJ3aW5kb3dDcmVhdGlvbkludGVydmFsIiwiX2IiLCJtYXhXaW5kb3dTaXplIiwiSW5maW5pdHkiLCJsaWZ0XzEiLCJzb3VyY2UiLCJzdWJzY3JpYmVyIiwid2luZG93UmVjb3JkcyIsInJlc3RhcnRPbkNsb3NlIiwiY2xvc2VXaW5kb3ciLCJyZWNvcmQiLCJzdWJzIiwid2luZG93IiwiY29tcGxldGUiLCJ1bnN1YnNjcmliZSIsImFyclJlbW92ZV8xIiwic3RhcnRXaW5kb3ciLCJTdWJzY3JpcHRpb25fMSIsImFkZCIsIndpbmRvd18xIiwiU3ViamVjdF8xIiwicmVjb3JkXzEiLCJzZWVuIiwicHVzaCIsIm5leHQiLCJhc09ic2VydmFibGUiLCJleGVjdXRlU2NoZWR1bGVfMSIsImxvb3AiLCJjYiIsInNsaWNlIiwiZm9yRWFjaCIsInRlcm1pbmF0ZSIsInN1YnNjcmliZSIsIk9wZXJhdG9yU3Vic2NyaWJlcl8xIiwidmFsdWUiLCJjb25zdW1lciIsImVyciIsImVycm9yIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3dpbmRvd1RpbWUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../Subject":11,"../Subscription":13,"../scheduler/async":183,"../util/args":200,"../util/arrRemove":203,"../util/executeSchedule":207,"../util/lift":219,"./OperatorSubscriber":48}],157:[function(require,module,exports){
"use strict";

var __values = void 0 && (void 0).__values || function (o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function next() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowToggle = void 0;

var Subject_1 = require("../Subject");

var Subscription_1 = require("../Subscription");

var lift_1 = require("../util/lift");

var innerFrom_1 = require("../observable/innerFrom");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var noop_1 = require("../util/noop");

var arrRemove_1 = require("../util/arrRemove");

function windowToggle(openings, closingSelector) {
  return lift_1.operate(function (source, subscriber) {
    var windows = [];

    var handleError = function handleError(err) {
      while (0 < windows.length) {
        windows.shift().error(err);
      }

      subscriber.error(err);
    };

    innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (openValue) {
      var window = new Subject_1.Subject();
      windows.push(window);
      var closingSubscription = new Subscription_1.Subscription();

      var closeWindow = function closeWindow() {
        arrRemove_1.arrRemove(windows, window);
        window.complete();
        closingSubscription.unsubscribe();
      };

      var closingNotifier;

      try {
        closingNotifier = innerFrom_1.innerFrom(closingSelector(openValue));
      } catch (err) {
        handleError(err);
        return;
      }

      subscriber.next(window.asObservable());
      closingSubscription.add(closingNotifier.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, closeWindow, noop_1.noop, handleError)));
    }, noop_1.noop));
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      var e_1, _a;

      var windowsCopy = windows.slice();

      try {
        for (var windowsCopy_1 = __values(windowsCopy), windowsCopy_1_1 = windowsCopy_1.next(); !windowsCopy_1_1.done; windowsCopy_1_1 = windowsCopy_1.next()) {
          var window_1 = windowsCopy_1_1.value;
          window_1.next(value);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (windowsCopy_1_1 && !windowsCopy_1_1.done && (_a = windowsCopy_1["return"])) _a.call(windowsCopy_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }, function () {
      while (0 < windows.length) {
        windows.shift().complete();
      }

      subscriber.complete();
    }, handleError, function () {
      while (0 < windows.length) {
        windows.shift().unsubscribe();
      }
    }));
  });
}

exports.windowToggle = windowToggle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBaURBLFNBQWdCQSxZQUFoQixDQUNFQyxRQURGLEVBRUVDLGVBRkYsRUFFeUQ7RUFFdkQsT0FBT0MsZUFBUSxVQUFDQyxNQUFELEVBQVNDLFVBQVQsRUFBbUI7SUFDaEMsSUFBTUMsT0FBTyxHQUFpQixFQUE5Qjs7SUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQVM7TUFDM0IsT0FBTyxJQUFJRixPQUFPLENBQUNHLE1BQW5CLEVBQTJCO1FBQ3pCSCxPQUFPLENBQUNJLEtBQVIsR0FBaUJDLEtBQWpCLENBQXVCSCxHQUF2QjtNQUNEOztNQUNESCxVQUFVLENBQUNNLEtBQVgsQ0FBaUJILEdBQWpCO0lBQ0QsQ0FMRDs7SUFPQUksc0JBQVVYLFFBQVYsRUFBb0JZLFNBQXBCLENBQ0VDLDhDQUNFVCxVQURGLEVBRUUsVUFBQ1UsU0FBRCxFQUFVO01BQ1IsSUFBTUMsTUFBTSxHQUFHLElBQUlDLGlCQUFKLEVBQWY7TUFDQVgsT0FBTyxDQUFDWSxJQUFSLENBQWFGLE1BQWI7TUFDQSxJQUFNRyxtQkFBbUIsR0FBRyxJQUFJQywyQkFBSixFQUE1Qjs7TUFDQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztRQUNsQkMsc0JBQVVoQixPQUFWLEVBQW1CVSxNQUFuQjtRQUNBQSxNQUFNLENBQUNPLFFBQVA7UUFDQUosbUJBQW1CLENBQUNLLFdBQXBCO01BQ0QsQ0FKRDs7TUFNQSxJQUFJQyxlQUFKOztNQUNBLElBQUk7UUFDRkEsZUFBZSxHQUFHYixzQkFBVVYsZUFBZSxDQUFDYSxTQUFELENBQXpCLENBQWxCO01BQ0QsQ0FGRCxDQUVFLE9BQU9QLEdBQVAsRUFBWTtRQUNaRCxXQUFXLENBQUNDLEdBQUQsQ0FBWDtRQUNBO01BQ0Q7O01BRURILFVBQVUsQ0FBQ3FCLElBQVgsQ0FBZ0JWLE1BQU0sQ0FBQ1csWUFBUCxFQUFoQjtNQUVBUixtQkFBbUIsQ0FBQ1MsR0FBcEIsQ0FBd0JILGVBQWUsQ0FBQ1osU0FBaEIsQ0FBMEJDLDhDQUF5QlQsVUFBekIsRUFBcUNnQixXQUFyQyxFQUFrRFEsV0FBbEQsRUFBd0R0QixXQUF4RCxDQUExQixDQUF4QjtJQUNELENBdkJILEVBd0JFc0IsV0F4QkYsQ0FERjtJQThCQXpCLE1BQU0sQ0FBQ1MsU0FBUCxDQUNFQyw4Q0FDRVQsVUFERixFQUVFLFVBQUN5QixLQUFELEVBQVM7OztNQUdQLElBQU1DLFdBQVcsR0FBR3pCLE9BQU8sQ0FBQzBCLEtBQVIsRUFBcEI7OztRQUNBLEtBQXFCLDJDQUFXQyxzQ0FBaEMsRUFBZ0MscUJBQWhDLEVBQWdDQSxzQ0FBaEMsRUFBa0M7VUFBN0IsSUFBTUMsUUFBTSx3QkFBWjtVQUNIQSxRQUFNLENBQUNSLElBQVAsQ0FBWUksS0FBWjtRQUNEOzs7Ozs7Ozs7Ozs7SUFDRixDQVRILEVBVUU7TUFFRSxPQUFPLElBQUl4QixPQUFPLENBQUNHLE1BQW5CLEVBQTJCO1FBQ3pCSCxPQUFPLENBQUNJLEtBQVIsR0FBaUJhLFFBQWpCO01BQ0Q7O01BQ0RsQixVQUFVLENBQUNrQixRQUFYO0lBQ0QsQ0FoQkgsRUFpQkVoQixXQWpCRixFQWtCRTtNQU1FLE9BQU8sSUFBSUQsT0FBTyxDQUFDRyxNQUFuQixFQUEyQjtRQUN6QkgsT0FBTyxDQUFDSSxLQUFSLEdBQWlCYyxXQUFqQjtNQUNEO0lBQ0YsQ0EzQkgsQ0FERjtFQStCRCxDQXZFTSxDQUFQO0FBd0VEOztBQTVFRFciLCJuYW1lcyI6WyJ3aW5kb3dUb2dnbGUiLCJvcGVuaW5ncyIsImNsb3NpbmdTZWxlY3RvciIsImxpZnRfMSIsInNvdXJjZSIsInN1YnNjcmliZXIiLCJ3aW5kb3dzIiwiaGFuZGxlRXJyb3IiLCJlcnIiLCJsZW5ndGgiLCJzaGlmdCIsImVycm9yIiwiaW5uZXJGcm9tXzEiLCJzdWJzY3JpYmUiLCJPcGVyYXRvclN1YnNjcmliZXJfMSIsIm9wZW5WYWx1ZSIsIndpbmRvdyIsIlN1YmplY3RfMSIsInB1c2giLCJjbG9zaW5nU3Vic2NyaXB0aW9uIiwiU3Vic2NyaXB0aW9uXzEiLCJjbG9zZVdpbmRvdyIsImFyclJlbW92ZV8xIiwiY29tcGxldGUiLCJ1bnN1YnNjcmliZSIsImNsb3NpbmdOb3RpZmllciIsIm5leHQiLCJhc09ic2VydmFibGUiLCJhZGQiLCJub29wXzEiLCJ2YWx1ZSIsIndpbmRvd3NDb3B5Iiwic2xpY2UiLCJ3aW5kb3dzQ29weV8xXzEiLCJ3aW5kb3dfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy93aW5kb3dUb2dnbGUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../Subject":11,"../Subscription":13,"../observable/innerFrom":34,"../util/arrRemove":203,"../util/lift":219,"../util/noop":221,"./OperatorSubscriber":48}],158:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowWhen = void 0;

var Subject_1 = require("../Subject");

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var innerFrom_1 = require("../observable/innerFrom");

function windowWhen(closingSelector) {
  return lift_1.operate(function (source, subscriber) {
    var window;
    var closingSubscriber;

    var handleError = function handleError(err) {
      window.error(err);
      subscriber.error(err);
    };

    var openWindow = function openWindow() {
      closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
      window === null || window === void 0 ? void 0 : window.complete();
      window = new Subject_1.Subject();
      subscriber.next(window.asObservable());
      var closingNotifier;

      try {
        closingNotifier = innerFrom_1.innerFrom(closingSelector());
      } catch (err) {
        handleError(err);
        return;
      }

      closingNotifier.subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openWindow, openWindow, handleError));
    };

    openWindow();
    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      return window.next(value);
    }, function () {
      window.complete();
      subscriber.complete();
    }, handleError, function () {
      closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
      window = null;
    }));
  });
}

exports.windowWhen = windowWhen;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQThDQSxTQUFnQkEsVUFBaEIsQ0FBOEJDLGVBQTlCLEVBQXlFO0VBQ3ZFLE9BQU9DLGVBQVEsVUFBQ0MsTUFBRCxFQUFTQyxVQUFULEVBQW1CO0lBQ2hDLElBQUlDLE1BQUo7SUFDQSxJQUFJQyxpQkFBSjs7SUFNQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQVM7TUFDM0JILE1BQU8sQ0FBQ0ksS0FBUixDQUFjRCxHQUFkO01BQ0FKLFVBQVUsQ0FBQ0ssS0FBWCxDQUFpQkQsR0FBakI7SUFDRCxDQUhEOztJQVdBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhO01BR2pCSixpQkFBaUIsU0FBakIscUJBQWlCLFdBQWpCLEdBQWlCLE1BQWpCLG9CQUFpQixDQUFFSyxXQUFuQjtNQUdBTixNQUFNLFNBQU4sVUFBTSxXQUFOLEdBQU0sTUFBTixTQUFNLENBQUVPLFFBQVI7TUFHQVAsTUFBTSxHQUFHLElBQUlRLGlCQUFKLEVBQVQ7TUFDQVQsVUFBVSxDQUFDVSxJQUFYLENBQWdCVCxNQUFNLENBQUNVLFlBQVAsRUFBaEI7TUFHQSxJQUFJQyxlQUFKOztNQUNBLElBQUk7UUFDRkEsZUFBZSxHQUFHQyxzQkFBVWhCLGVBQWUsRUFBekIsQ0FBbEI7TUFDRCxDQUZELENBRUUsT0FBT08sR0FBUCxFQUFZO1FBQ1pELFdBQVcsQ0FBQ0MsR0FBRCxDQUFYO1FBQ0E7TUFDRDs7TUFNRFEsZUFBZSxDQUFDRSxTQUFoQixDQUEyQlosaUJBQWlCLEdBQUdhLDhDQUF5QmYsVUFBekIsRUFBcUNNLFVBQXJDLEVBQWlEQSxVQUFqRCxFQUE2REgsV0FBN0QsQ0FBL0M7SUFDRCxDQTFCRDs7SUE2QkFHLFVBQVU7SUFHVlAsTUFBTSxDQUFDZSxTQUFQLENBQ0VDLDhDQUNFZixVQURGLEVBRUUsVUFBQ2dCLEtBQUQsRUFBTTtNQUFLLGFBQU8sQ0FBQ04sSUFBUixDQUFhTSxLQUFiO0lBQW1CLENBRmhDLEVBR0U7TUFFRWYsTUFBTyxDQUFDTyxRQUFSO01BQ0FSLFVBQVUsQ0FBQ1EsUUFBWDtJQUNELENBUEgsRUFRRUwsV0FSRixFQVNFO01BR0VELGlCQUFpQixTQUFqQixxQkFBaUIsV0FBakIsR0FBaUIsTUFBakIsb0JBQWlCLENBQUVLLFdBQW5CO01BQ0FOLE1BQU0sR0FBRyxJQUFUO0lBQ0QsQ0FkSCxDQURGO0VBa0JELENBckVNLENBQVA7QUFzRUQ7O0FBdkVEZ0IiLCJuYW1lcyI6WyJ3aW5kb3dXaGVuIiwiY2xvc2luZ1NlbGVjdG9yIiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsIndpbmRvdyIsImNsb3NpbmdTdWJzY3JpYmVyIiwiaGFuZGxlRXJyb3IiLCJlcnIiLCJlcnJvciIsIm9wZW5XaW5kb3ciLCJ1bnN1YnNjcmliZSIsImNvbXBsZXRlIiwiU3ViamVjdF8xIiwibmV4dCIsImFzT2JzZXJ2YWJsZSIsImNsb3NpbmdOb3RpZmllciIsImlubmVyRnJvbV8xIiwic3Vic2NyaWJlIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJ2YWx1ZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy93aW5kb3dXaGVuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../Subject":11,"../observable/innerFrom":34,"../util/lift":219,"./OperatorSubscriber":48}],159:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLatestFrom = void 0;

var lift_1 = require("../util/lift");

var OperatorSubscriber_1 = require("./OperatorSubscriber");

var innerFrom_1 = require("../observable/innerFrom");

var identity_1 = require("../util/identity");

var noop_1 = require("../util/noop");

var args_1 = require("../util/args");

function withLatestFrom() {
  var inputs = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    inputs[_i] = arguments[_i];
  }

  var project = args_1.popResultSelector(inputs);
  return lift_1.operate(function (source, subscriber) {
    var len = inputs.length;
    var otherValues = new Array(len);
    var hasValue = inputs.map(function () {
      return false;
    });
    var ready = false;

    var _loop_1 = function _loop_1(i) {
      innerFrom_1.innerFrom(inputs[i]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
        otherValues[i] = value;

        if (!ready && !hasValue[i]) {
          hasValue[i] = true;
          (ready = hasValue.every(identity_1.identity)) && (hasValue = null);
        }
      }, noop_1.noop));
    };

    for (var i = 0; i < len; i++) {
      _loop_1(i);
    }

    source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function (value) {
      if (ready) {
        var values = __spreadArray([value], __read(otherValues));

        subscriber.next(project ? project.apply(void 0, __spreadArray([], __read(values))) : values);
      }
    }));
  });
}

exports.withLatestFrom = withLatestFrom;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBbURBLFNBQWdCQSxjQUFoQixHQUE4QjtFQUFPOztPQUFBLHlDQUFnQjtJQUFoQkM7OztFQUNuQyxJQUFNQyxPQUFPLEdBQUdDLHlCQUFrQkYsTUFBbEIsQ0FBaEI7RUFFQSxPQUFPRyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUNoQyxJQUFNQyxHQUFHLEdBQUdOLE1BQU0sQ0FBQ08sTUFBbkI7SUFDQSxJQUFNQyxXQUFXLEdBQUcsSUFBSUMsS0FBSixDQUFVSCxHQUFWLENBQXBCO0lBSUEsSUFBSUksUUFBUSxHQUFHVixNQUFNLENBQUNXLEdBQVAsQ0FBVztNQUFNO0lBQUssQ0FBdEIsQ0FBZjtJQUdBLElBQUlDLEtBQUssR0FBRyxLQUFaOzttQ0FNU0MsR0FBQztNQUNSQyxzQkFBVWQsTUFBTSxDQUFDYSxDQUFELENBQWhCLEVBQXFCRSxTQUFyQixDQUNFQyw4Q0FDRVgsVUFERixFQUVFLFVBQUNZLEtBQUQsRUFBTTtRQUNKVCxXQUFXLENBQUNLLENBQUQsQ0FBWCxHQUFpQkksS0FBakI7O1FBQ0EsSUFBSSxDQUFDTCxLQUFELElBQVUsQ0FBQ0YsUUFBUSxDQUFDRyxDQUFELENBQXZCLEVBQTRCO1VBRTFCSCxRQUFRLENBQUNHLENBQUQsQ0FBUixHQUFjLElBQWQ7VUFLQSxDQUFDRCxLQUFLLEdBQUdGLFFBQVEsQ0FBQ1EsS0FBVCxDQUFlQyxtQkFBZixDQUFULE1BQXVDVCxRQUFRLEdBQUcsSUFBbEQ7UUFDRDtNQUNGLENBYkgsRUFnQkVVLFdBaEJGLENBREY7OztJQURGLEtBQUssSUFBSVAsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1AsR0FBcEIsRUFBeUJPLENBQUMsRUFBMUIsRUFBNEI7Y0FBbkJBO0lBcUJSOztJQUdEVCxNQUFNLENBQUNXLFNBQVAsQ0FDRUMsOENBQXlCWCxVQUF6QixFQUFxQyxVQUFDWSxLQUFELEVBQU07TUFDekMsSUFBSUwsS0FBSixFQUFXO1FBRVQsSUFBTVMsTUFBTSxrQkFBSUosS0FBSixHQUFTSyxPQUFLZCxXQUFMLENBQVQsQ0FBWjs7UUFDQUgsVUFBVSxDQUFDa0IsSUFBWCxDQUFnQnRCLE9BQU8sR0FBR0EsT0FBTyxNQUFQLENBQU8sTUFBUCxFQUFPdUIseUJBQUlILE1BQUosRUFBUCxDQUFILEdBQXdCQSxNQUEvQztNQUNEO0lBQ0YsQ0FORCxDQURGO0VBU0QsQ0FoRE0sQ0FBUDtBQWlERDs7QUFwRERJIiwibmFtZXMiOlsid2l0aExhdGVzdEZyb20iLCJpbnB1dHMiLCJwcm9qZWN0IiwiYXJnc18xIiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsImxlbiIsImxlbmd0aCIsIm90aGVyVmFsdWVzIiwiQXJyYXkiLCJoYXNWYWx1ZSIsIm1hcCIsInJlYWR5IiwiaSIsImlubmVyRnJvbV8xIiwic3Vic2NyaWJlIiwiT3BlcmF0b3JTdWJzY3JpYmVyXzEiLCJ2YWx1ZSIsImV2ZXJ5IiwiaWRlbnRpdHlfMSIsIm5vb3BfMSIsInZhbHVlcyIsIl9fcmVhZCIsIm5leHQiLCJfX3NwcmVhZEFycmF5IiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3dpdGhMYXRlc3RGcm9tLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../observable/innerFrom":34,"../util/args":200,"../util/identity":208,"../util/lift":219,"../util/noop":221,"./OperatorSubscriber":48}],160:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zip = void 0;

var zip_1 = require("../observable/zip");

var lift_1 = require("../util/lift");

function zip() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  return lift_1.operate(function (source, subscriber) {
    zip_1.zip.apply(void 0, __spreadArray([source], __read(sources))).subscribe(subscriber);
  });
}

exports.zip = zip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBbUJBLFNBQWdCQSxHQUFoQixHQUFtQjtFQUFPOztPQUFBLHlDQUF3RTtJQUF4RUM7OztFQUN4QixPQUFPQyxlQUFRLFVBQUNDLE1BQUQsRUFBU0MsVUFBVCxFQUFtQjtJQUNoQ0MsVUFBU0MsS0FBVCxDQUFTLE1BQVQsRUFBU0MsZUFBQ0osTUFBRCxHQUErQkssT0FBTVAsT0FBTixDQUEvQixDQUFULEVBQXVGUSxTQUF2RixDQUFpR0wsVUFBakc7RUFDRCxDQUZNLENBQVA7QUFHRDs7QUFKRE0iLCJuYW1lcyI6WyJ6aXAiLCJzb3VyY2VzIiwibGlmdF8xIiwic291cmNlIiwic3Vic2NyaWJlciIsInppcF8xIiwiYXBwbHkiLCJfX3NwcmVhZEFycmF5IiwiX19yZWFkIiwic3Vic2NyaWJlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3ppcC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../observable/zip":47,"../util/lift":219}],161:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipAll = void 0;

var zip_1 = require("../observable/zip");

var joinAllInternals_1 = require("./joinAllInternals");

function zipAll(project) {
  return joinAllInternals_1.joinAllInternals(zip_1.zip, project);
}

exports.zipAll = zipAll;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQWVBLFNBQWdCQSxNQUFoQixDQUE2QkMsT0FBN0IsRUFBNEQ7RUFDMUQsT0FBT0Msb0NBQWlCQyxTQUFqQixFQUFzQkYsT0FBdEIsQ0FBUDtBQUNEOztBQUZERyIsIm5hbWVzIjpbInppcEFsbCIsInByb2plY3QiLCJqb2luQWxsSW50ZXJuYWxzXzEiLCJ6aXBfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy96aXBBbGwudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../observable/zip":47,"./joinAllInternals":93}],162:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipWith = void 0;

var zip_1 = require("./zip");

function zipWith() {
  var otherInputs = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    otherInputs[_i] = arguments[_i];
  }

  return zip_1.zip.apply(void 0, __spreadArray([], __read(otherInputs)));
}

exports.zipWith = zipWith;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBeUJBLFNBQWdCQSxPQUFoQixHQUF1QjtFQUFrQzs7T0FBQSx5Q0FBNEM7SUFBNUNDOzs7RUFDdkQsT0FBT0MsVUFBR0MsS0FBSCxDQUFHLE1BQUgsRUFBR0MseUJBQUlILFdBQUosRUFBSCxDQUFQO0FBQ0Q7O0FBRkRJIiwibmFtZXMiOlsiemlwV2l0aCIsIm90aGVySW5wdXRzIiwiemlwXzEiLCJhcHBseSIsIl9fc3ByZWFkQXJyYXkiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvemlwV2l0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./zip":160}],163:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleArray = void 0;

var Observable_1 = require("../Observable");

function scheduleArray(input, scheduler) {
  return new Observable_1.Observable(function (subscriber) {
    var i = 0;
    return scheduler.schedule(function () {
      if (i === input.length) {
        subscriber.complete();
      } else {
        subscriber.next(input[i++]);

        if (!subscriber.closed) {
          this.schedule();
        }
      }
    });
  });
}

exports.scheduleArray = scheduleArray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUdBLFNBQWdCQSxhQUFoQixDQUFpQ0MsS0FBakMsRUFBc0RDLFNBQXRELEVBQThFO0VBQzVFLE9BQU8sSUFBSUMsdUJBQUosQ0FBa0IsVUFBQ0MsVUFBRCxFQUFXO0lBRWxDLElBQUlDLENBQUMsR0FBRyxDQUFSO0lBRUEsT0FBT0gsU0FBUyxDQUFDSSxRQUFWLENBQW1CO01BQ3hCLElBQUlELENBQUMsS0FBS0osS0FBSyxDQUFDTSxNQUFoQixFQUF3QjtRQUd0QkgsVUFBVSxDQUFDSSxRQUFYO01BQ0QsQ0FKRCxNQUlPO1FBR0xKLFVBQVUsQ0FBQ0ssSUFBWCxDQUFnQlIsS0FBSyxDQUFDSSxDQUFDLEVBQUYsQ0FBckI7O1FBSUEsSUFBSSxDQUFDRCxVQUFVLENBQUNNLE1BQWhCLEVBQXdCO1VBQ3RCLEtBQUtKLFFBQUw7UUFDRDtNQUNGO0lBQ0YsQ0FoQk0sQ0FBUDtFQWlCRCxDQXJCTSxDQUFQO0FBc0JEOztBQXZCREsiLCJuYW1lcyI6WyJzY2hlZHVsZUFycmF5IiwiaW5wdXQiLCJzY2hlZHVsZXIiLCJPYnNlcnZhYmxlXzEiLCJzdWJzY3JpYmVyIiwiaSIsInNjaGVkdWxlIiwibGVuZ3RoIiwiY29tcGxldGUiLCJuZXh0IiwiY2xvc2VkIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlQXJyYXkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../Observable":8}],164:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleAsyncIterable = void 0;

var Observable_1 = require("../Observable");

var executeSchedule_1 = require("../util/executeSchedule");

function scheduleAsyncIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }

  return new Observable_1.Observable(function (subscriber) {
    executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
      var iterator = input[Symbol.asyncIterator]();
      executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
        iterator.next().then(function (result) {
          if (result.done) {
            subscriber.complete();
          } else {
            subscriber.next(result.value);
          }
        });
      }, 0, true);
    });
  });
}

exports.scheduleAsyncIterable = scheduleAsyncIterable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUVBLFNBQWdCQSxxQkFBaEIsQ0FBeUNDLEtBQXpDLEVBQWtFQyxTQUFsRSxFQUEwRjtFQUN4RixJQUFJLENBQUNELEtBQUwsRUFBWTtJQUNWLE1BQU0sSUFBSUUsS0FBSixDQUFVLHlCQUFWLENBQU47RUFDRDs7RUFDRCxPQUFPLElBQUlDLHVCQUFKLENBQWtCLFVBQUNDLFVBQUQsRUFBVztJQUNsQ0Msa0NBQWdCRCxVQUFoQixFQUE0QkgsU0FBNUIsRUFBdUM7TUFDckMsSUFBTUssUUFBUSxHQUFHTixLQUFLLENBQUNPLE1BQU0sQ0FBQ0MsYUFBUixDQUFMLEVBQWpCO01BQ0FILGtDQUNFRCxVQURGLEVBRUVILFNBRkYsRUFHRTtRQUNFSyxRQUFRLENBQUNHLElBQVQsR0FBZ0JDLElBQWhCLENBQXFCLFVBQUNDLE1BQUQsRUFBTztVQUMxQixJQUFJQSxNQUFNLENBQUNDLElBQVgsRUFBaUI7WUFHZlIsVUFBVSxDQUFDUyxRQUFYO1VBQ0QsQ0FKRCxNQUlPO1lBQ0xULFVBQVUsQ0FBQ0ssSUFBWCxDQUFnQkUsTUFBTSxDQUFDRyxLQUF2QjtVQUNEO1FBQ0YsQ0FSRDtNQVNELENBYkgsRUFjRSxDQWRGLEVBZUUsSUFmRjtJQWlCRCxDQW5CRDtFQW9CRCxDQXJCTSxDQUFQO0FBc0JEOztBQTFCREMiLCJuYW1lcyI6WyJzY2hlZHVsZUFzeW5jSXRlcmFibGUiLCJpbnB1dCIsInNjaGVkdWxlciIsIkVycm9yIiwiT2JzZXJ2YWJsZV8xIiwic3Vic2NyaWJlciIsImV4ZWN1dGVTY2hlZHVsZV8xIiwiaXRlcmF0b3IiLCJTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwibmV4dCIsInRoZW4iLCJyZXN1bHQiLCJkb25lIiwiY29tcGxldGUiLCJ2YWx1ZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUFzeW5jSXRlcmFibGUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../Observable":8,"../util/executeSchedule":207}],165:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleIterable = void 0;

var Observable_1 = require("../Observable");

var iterator_1 = require("../symbol/iterator");

var isFunction_1 = require("../util/isFunction");

var executeSchedule_1 = require("../util/executeSchedule");

function scheduleIterable(input, scheduler) {
  return new Observable_1.Observable(function (subscriber) {
    var iterator;
    executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
      iterator = input[iterator_1.iterator]();
      executeSchedule_1.executeSchedule(subscriber, scheduler, function () {
        var _a;

        var value;
        var done;

        try {
          _a = iterator.next(), value = _a.value, done = _a.done;
        } catch (err) {
          subscriber.error(err);
          return;
        }

        if (done) {
          subscriber.complete();
        } else {
          subscriber.next(value);
        }
      }, 0, true);
    });
    return function () {
      return isFunction_1.isFunction(iterator === null || iterator === void 0 ? void 0 : iterator["return"]) && iterator["return"]();
    };
  });
}

exports.scheduleIterable = scheduleIterable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQU9BLFNBQWdCQSxnQkFBaEIsQ0FBb0NDLEtBQXBDLEVBQXdEQyxTQUF4RCxFQUFnRjtFQUM5RSxPQUFPLElBQUlDLHVCQUFKLENBQWtCLFVBQUNDLFVBQUQsRUFBVztJQUNsQyxJQUFJQyxRQUFKO0lBS0FDLGtDQUFnQkYsVUFBaEIsRUFBNEJGLFNBQTVCLEVBQXVDO01BRXJDRyxRQUFRLEdBQUlKLEtBQWEsQ0FBQ00sbUJBQUQsQ0FBYixFQUFaO01BRUFELGtDQUNFRixVQURGLEVBRUVGLFNBRkYsRUFHRTs7O1FBQ0UsSUFBSU0sS0FBSjtRQUNBLElBQUlDLElBQUo7O1FBQ0EsSUFBSTtVQUVEQyxLQUFrQkwsUUFBUSxDQUFDTSxJQUFULEVBQWxCLEVBQUVILEtBQUssV0FBUCxFQUFTQyxJQUFJLFVBQWQ7UUFDRCxDQUhELENBR0UsT0FBT0csR0FBUCxFQUFZO1VBRVpSLFVBQVUsQ0FBQ1MsS0FBWCxDQUFpQkQsR0FBakI7VUFDQTtRQUNEOztRQUVELElBQUlILElBQUosRUFBVTtVQUtSTCxVQUFVLENBQUNVLFFBQVg7UUFDRCxDQU5ELE1BTU87VUFFTFYsVUFBVSxDQUFDTyxJQUFYLENBQWdCSCxLQUFoQjtRQUNEO01BQ0YsQ0F6QkgsRUEwQkUsQ0ExQkYsRUEyQkUsSUEzQkY7SUE2QkQsQ0FqQ0Q7SUF1Q0EsT0FBTztNQUFNLCtCQUFXSCxRQUFRLFNBQVIsWUFBUSxXQUFSLEdBQVEsTUFBUixXQUFRLFVBQW5CLEtBQWdDQSxRQUFRLFVBQVIsRUFBaEM7SUFBaUQsQ0FBOUQ7RUFDRCxDQTlDTSxDQUFQO0FBK0NEOztBQWhERFUiLCJuYW1lcyI6WyJzY2hlZHVsZUl0ZXJhYmxlIiwiaW5wdXQiLCJzY2hlZHVsZXIiLCJPYnNlcnZhYmxlXzEiLCJzdWJzY3JpYmVyIiwiaXRlcmF0b3IiLCJleGVjdXRlU2NoZWR1bGVfMSIsIml0ZXJhdG9yXzEiLCJ2YWx1ZSIsImRvbmUiLCJfYSIsIm5leHQiLCJlcnIiLCJlcnJvciIsImNvbXBsZXRlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlSXRlcmFibGUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../Observable":8,"../symbol/iterator":190,"../util/executeSchedule":207,"../util/isFunction":212}],166:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleObservable = void 0;

var innerFrom_1 = require("../observable/innerFrom");

var observeOn_1 = require("../operators/observeOn");

var subscribeOn_1 = require("../operators/subscribeOn");

function scheduleObservable(input, scheduler) {
  return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
}

exports.scheduleObservable = scheduleObservable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUdBLFNBQWdCQSxrQkFBaEIsQ0FBc0NDLEtBQXRDLEVBQW1FQyxTQUFuRSxFQUEyRjtFQUN6RixPQUFPQyxzQkFBVUYsS0FBVixFQUFpQkcsSUFBakIsQ0FBc0JDLDBCQUFZSCxTQUFaLENBQXRCLEVBQThDSSxzQkFBVUosU0FBVixDQUE5QyxDQUFQO0FBQ0Q7O0FBRkRLIiwibmFtZXMiOlsic2NoZWR1bGVPYnNlcnZhYmxlIiwiaW5wdXQiLCJzY2hlZHVsZXIiLCJpbm5lckZyb21fMSIsInBpcGUiLCJzdWJzY3JpYmVPbl8xIiwib2JzZXJ2ZU9uXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVPYnNlcnZhYmxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../observable/innerFrom":34,"../operators/observeOn":108,"../operators/subscribeOn":136}],167:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schedulePromise = void 0;

var innerFrom_1 = require("../observable/innerFrom");

var observeOn_1 = require("../operators/observeOn");

var subscribeOn_1 = require("../operators/subscribeOn");

function schedulePromise(input, scheduler) {
  return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
}

exports.schedulePromise = schedulePromise;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUdBLFNBQWdCQSxlQUFoQixDQUFtQ0MsS0FBbkMsRUFBMERDLFNBQTFELEVBQWtGO0VBQ2hGLE9BQU9DLHNCQUFVRixLQUFWLEVBQWlCRyxJQUFqQixDQUFzQkMsMEJBQVlILFNBQVosQ0FBdEIsRUFBOENJLHNCQUFVSixTQUFWLENBQTlDLENBQVA7QUFDRDs7QUFGREsiLCJuYW1lcyI6WyJzY2hlZHVsZVByb21pc2UiLCJpbnB1dCIsInNjaGVkdWxlciIsImlubmVyRnJvbV8xIiwicGlwZSIsInN1YnNjcmliZU9uXzEiLCJvYnNlcnZlT25fMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZVByb21pc2UudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../observable/innerFrom":34,"../operators/observeOn":108,"../operators/subscribeOn":136}],168:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduleReadableStreamLike = void 0;

var scheduleAsyncIterable_1 = require("./scheduleAsyncIterable");

var isReadableStreamLike_1 = require("../util/isReadableStreamLike");

function scheduleReadableStreamLike(input, scheduler) {
  return scheduleAsyncIterable_1.scheduleAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(input), scheduler);
}

exports.scheduleReadableStreamLike = scheduleReadableStreamLike;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOztBQUNBOztBQUVBLFNBQWdCQSwwQkFBaEIsQ0FBOENDLEtBQTlDLEVBQTRFQyxTQUE1RSxFQUFvRztFQUNsRyxPQUFPQyw4Q0FBc0JDLDBEQUFtQ0gsS0FBbkMsQ0FBdEIsRUFBaUVDLFNBQWpFLENBQVA7QUFDRDs7QUFGREciLCJuYW1lcyI6WyJzY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZSIsImlucHV0Iiwic2NoZWR1bGVyIiwic2NoZWR1bGVBc3luY0l0ZXJhYmxlXzEiLCJpc1JlYWRhYmxlU3RyZWFtTGlrZV8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/isReadableStreamLike":217,"./scheduleAsyncIterable":164}],169:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scheduled = void 0;

var scheduleObservable_1 = require("./scheduleObservable");

var schedulePromise_1 = require("./schedulePromise");

var scheduleArray_1 = require("./scheduleArray");

var scheduleIterable_1 = require("./scheduleIterable");

var scheduleAsyncIterable_1 = require("./scheduleAsyncIterable");

var isInteropObservable_1 = require("../util/isInteropObservable");

var isPromise_1 = require("../util/isPromise");

var isArrayLike_1 = require("../util/isArrayLike");

var isIterable_1 = require("../util/isIterable");

var isAsyncIterable_1 = require("../util/isAsyncIterable");

var throwUnobservableError_1 = require("../util/throwUnobservableError");

var isReadableStreamLike_1 = require("../util/isReadableStreamLike");

var scheduleReadableStreamLike_1 = require("./scheduleReadableStreamLike");

function scheduled(input, scheduler) {
  if (input != null) {
    if (isInteropObservable_1.isInteropObservable(input)) {
      return scheduleObservable_1.scheduleObservable(input, scheduler);
    }

    if (isArrayLike_1.isArrayLike(input)) {
      return scheduleArray_1.scheduleArray(input, scheduler);
    }

    if (isPromise_1.isPromise(input)) {
      return schedulePromise_1.schedulePromise(input, scheduler);
    }

    if (isAsyncIterable_1.isAsyncIterable(input)) {
      return scheduleAsyncIterable_1.scheduleAsyncIterable(input, scheduler);
    }

    if (isIterable_1.isIterable(input)) {
      return scheduleIterable_1.scheduleIterable(input, scheduler);
    }

    if (isReadableStreamLike_1.isReadableStreamLike(input)) {
      return scheduleReadableStreamLike_1.scheduleReadableStreamLike(input, scheduler);
    }
  }

  throw throwUnobservableError_1.createInvalidObservableTypeError(input);
}

exports.scheduled = scheduled;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUNBOztBQWFBLFNBQWdCQSxTQUFoQixDQUE2QkMsS0FBN0IsRUFBd0RDLFNBQXhELEVBQWdGO0VBQzlFLElBQUlELEtBQUssSUFBSSxJQUFiLEVBQW1CO0lBQ2pCLElBQUlFLDBDQUFvQkYsS0FBcEIsQ0FBSixFQUFnQztNQUM5QixPQUFPRyx3Q0FBbUJILEtBQW5CLEVBQTBCQyxTQUExQixDQUFQO0lBQ0Q7O0lBQ0QsSUFBSUcsMEJBQVlKLEtBQVosQ0FBSixFQUF3QjtNQUN0QixPQUFPSyw4QkFBY0wsS0FBZCxFQUFxQkMsU0FBckIsQ0FBUDtJQUNEOztJQUNELElBQUlLLHNCQUFVTixLQUFWLENBQUosRUFBc0I7TUFDcEIsT0FBT08sa0NBQWdCUCxLQUFoQixFQUF1QkMsU0FBdkIsQ0FBUDtJQUNEOztJQUNELElBQUlPLGtDQUFnQlIsS0FBaEIsQ0FBSixFQUE0QjtNQUMxQixPQUFPUyw4Q0FBc0JULEtBQXRCLEVBQTZCQyxTQUE3QixDQUFQO0lBQ0Q7O0lBQ0QsSUFBSVMsd0JBQVdWLEtBQVgsQ0FBSixFQUF1QjtNQUNyQixPQUFPVyxvQ0FBaUJYLEtBQWpCLEVBQXdCQyxTQUF4QixDQUFQO0lBQ0Q7O0lBQ0QsSUFBSVcsNENBQXFCWixLQUFyQixDQUFKLEVBQWlDO01BQy9CLE9BQU9hLHdEQUEyQmIsS0FBM0IsRUFBa0NDLFNBQWxDLENBQVA7SUFDRDtFQUNGOztFQUNELE1BQU1hLDBEQUFpQ2QsS0FBakMsQ0FBTjtBQUNEOztBQXRCRGUiLCJuYW1lcyI6WyJzY2hlZHVsZWQiLCJpbnB1dCIsInNjaGVkdWxlciIsImlzSW50ZXJvcE9ic2VydmFibGVfMSIsInNjaGVkdWxlT2JzZXJ2YWJsZV8xIiwiaXNBcnJheUxpa2VfMSIsInNjaGVkdWxlQXJyYXlfMSIsImlzUHJvbWlzZV8xIiwic2NoZWR1bGVQcm9taXNlXzEiLCJpc0FzeW5jSXRlcmFibGVfMSIsInNjaGVkdWxlQXN5bmNJdGVyYWJsZV8xIiwiaXNJdGVyYWJsZV8xIiwic2NoZWR1bGVJdGVyYWJsZV8xIiwiaXNSZWFkYWJsZVN0cmVhbUxpa2VfMSIsInNjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlXzEiLCJ0aHJvd1Vub2JzZXJ2YWJsZUVycm9yXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/isArrayLike":209,"../util/isAsyncIterable":210,"../util/isInteropObservable":213,"../util/isIterable":214,"../util/isPromise":216,"../util/isReadableStreamLike":217,"../util/throwUnobservableError":225,"./scheduleArray":163,"./scheduleAsyncIterable":164,"./scheduleIterable":165,"./scheduleObservable":166,"./schedulePromise":167,"./scheduleReadableStreamLike":168}],170:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = void 0;

var Subscription_1 = require("../Subscription");

var Action = function (_super) {
  __extends(Action, _super);

  function Action(scheduler, work) {
    return _super.call(this) || this;
  }

  Action.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return this;
  };

  return Action;
}(Subscription_1.Subscription);

exports.Action = Action;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFpQkE7RUFBK0JBOztFQUM3QixnQkFBWUMsU0FBWixFQUFrQ0MsSUFBbEMsRUFBcUY7V0FDbkZDLHFCQUFPO0VBQ1I7O0VBV01DLDRCQUFQLFVBQWdCQyxLQUFoQixFQUEyQkMsS0FBM0IsRUFBNEM7SUFBakI7TUFBQUE7SUFBaUI7O0lBQzFDLE9BQU8sSUFBUDtFQUNELENBRk07O0VBR1Q7QUFBQyxDQWpCRCxDQUErQkMsMkJBQS9COztBQUFhQyIsIm5hbWVzIjpbIl9fZXh0ZW5kcyIsInNjaGVkdWxlciIsIndvcmsiLCJfc3VwZXIiLCJBY3Rpb24iLCJzdGF0ZSIsImRlbGF5IiwiU3Vic2NyaXB0aW9uXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvQWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../Subscription":13}],171:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationFrameAction = void 0;

var AsyncAction_1 = require("./AsyncAction");

var animationFrameProvider_1 = require("./animationFrameProvider");

var AnimationFrameAction = function (_super) {
  __extends(AnimationFrameAction, _super);

  function AnimationFrameAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function () {
      return scheduler.flush(undefined);
    }));
  };

  AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay != null && delay > 0 || delay == null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }

    if (!scheduler.actions.some(function (action) {
      return action.id === id;
    })) {
      animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
      scheduler._scheduled = undefined;
    }

    return undefined;
  };

  return AnimationFrameAction;
}(AsyncAction_1.AsyncAction);

exports.AnimationFrameAction = AnimationFrameAction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFFQTtFQUE2Q0E7O0VBQzNDLDhCQUFzQkMsU0FBdEIsRUFBb0VDLElBQXBFLEVBQXVIO0lBQXZILFlBQ0VDLGtCQUFNRixTQUFOLEVBQWlCQyxJQUFqQixLQUFzQixJQUR4Qjs7SUFBc0JFO0lBQThDQTs7RUFFbkU7O0VBRVNDLGdEQUFWLFVBQXlCSixTQUF6QixFQUE2REssRUFBN0QsRUFBdUVDLEtBQXZFLEVBQXdGO0lBQWpCO01BQUFBO0lBQWlCOztJQUV0RixJQUFJQSxLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxHQUFHLENBQTlCLEVBQWlDO01BQy9CLE9BQU9KLGlCQUFNSyxjQUFOLENBQW9CQyxJQUFwQixDQUFvQixJQUFwQixFQUFxQlIsU0FBckIsRUFBZ0NLLEVBQWhDLEVBQW9DQyxLQUFwQyxDQUFQO0lBQ0Q7O0lBRUROLFNBQVMsQ0FBQ1MsT0FBVixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkI7SUFJQSxPQUFPVixTQUFTLENBQUNXLFVBQVYsS0FBeUJYLFNBQVMsQ0FBQ1csVUFBVixHQUF1QkMsZ0RBQXVCQyxxQkFBdkIsQ0FBNkM7TUFBTSxnQkFBUyxDQUFDQyxLQUFWLENBQWdCQyxTQUFoQjtJQUEwQixDQUE3RSxDQUFoRCxDQUFQO0VBQ0QsQ0FYUzs7RUFZQVgsZ0RBQVYsVUFBeUJKLFNBQXpCLEVBQTZESyxFQUE3RCxFQUF1RUMsS0FBdkUsRUFBd0Y7SUFBakI7TUFBQUE7SUFBaUI7O0lBSXRGLElBQUtBLEtBQUssSUFBSSxJQUFULElBQWlCQSxLQUFLLEdBQUcsQ0FBMUIsSUFBaUNBLEtBQUssSUFBSSxJQUFULElBQWlCLEtBQUtBLEtBQUwsR0FBYSxDQUFuRSxFQUF1RTtNQUNyRSxPQUFPSixpQkFBTWMsY0FBTixDQUFvQlIsSUFBcEIsQ0FBb0IsSUFBcEIsRUFBcUJSLFNBQXJCLEVBQWdDSyxFQUFoQyxFQUFvQ0MsS0FBcEMsQ0FBUDtJQUNEOztJQUlELElBQUksQ0FBQ04sU0FBUyxDQUFDUyxPQUFWLENBQWtCUSxJQUFsQixDQUF1QixVQUFDQyxNQUFELEVBQU87TUFBSyxhQUFNLENBQUNiLEVBQVAsS0FBY0EsRUFBZDtJQUFnQixDQUFuRCxDQUFMLEVBQTJEO01BQ3pETyxnREFBdUJPLG9CQUF2QixDQUE0Q2QsRUFBNUM7TUFDQUwsU0FBUyxDQUFDVyxVQUFWLEdBQXVCSSxTQUF2QjtJQUNEOztJQUVELE9BQU9BLFNBQVA7RUFDRCxDQWhCUzs7RUFpQlo7QUFBQyxDQWxDRCxDQUE2Q0sseUJBQTdDOztBQUFhQyIsIm5hbWVzIjpbIl9fZXh0ZW5kcyIsInNjaGVkdWxlciIsIndvcmsiLCJfc3VwZXIiLCJfdGhpcyIsIkFuaW1hdGlvbkZyYW1lQWN0aW9uIiwiaWQiLCJkZWxheSIsInJlcXVlc3RBc3luY0lkIiwiY2FsbCIsImFjdGlvbnMiLCJwdXNoIiwiX3NjaGVkdWxlZCIsImFuaW1hdGlvbkZyYW1lUHJvdmlkZXJfMSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZsdXNoIiwidW5kZWZpbmVkIiwicmVjeWNsZUFzeW5jSWQiLCJzb21lIiwiYWN0aW9uIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJBc3luY0FjdGlvbl8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL0FuaW1hdGlvbkZyYW1lQWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"./AsyncAction":175,"./animationFrameProvider":181}],172:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimationFrameScheduler = void 0;

var AsyncScheduler_1 = require("./AsyncScheduler");

var AnimationFrameScheduler = function (_super) {
  __extends(AnimationFrameScheduler, _super);

  function AnimationFrameScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AnimationFrameScheduler.prototype.flush = function (action) {
    this._active = true;
    var flushId = this._scheduled;
    this._scheduled = undefined;
    var actions = this.actions;
    var error;
    action = action || actions.shift();

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());

    this._active = false;

    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AnimationFrameScheduler;
}(AsyncScheduler_1.AsyncScheduler);

exports.AnimationFrameScheduler = AnimationFrameScheduler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQTtFQUE2Q0E7O0VBQTdDOztFQWtDQzs7RUFqQ1FDLDBDQUFQLFVBQWFDLE1BQWIsRUFBc0M7SUFDcEMsS0FBS0MsT0FBTCxHQUFlLElBQWY7SUFVQSxJQUFNQyxPQUFPLEdBQUcsS0FBS0MsVUFBckI7SUFDQSxLQUFLQSxVQUFMLEdBQWtCQyxTQUFsQjtJQUVRLFdBQU8sR0FBSyxLQUFJQyxPQUFoQjtJQUNSLElBQUlDLEtBQUo7SUFDQU4sTUFBTSxHQUFHQSxNQUFNLElBQUlLLE9BQU8sQ0FBQ0UsS0FBUixFQUFuQjs7SUFFQSxHQUFHO01BQ0QsSUFBS0QsS0FBSyxHQUFHTixNQUFNLENBQUNRLE9BQVAsQ0FBZVIsTUFBTSxDQUFDUyxLQUF0QixFQUE2QlQsTUFBTSxDQUFDVSxLQUFwQyxDQUFiLEVBQTBEO1FBQ3hEO01BQ0Q7SUFDRixDQUpELFFBSVMsQ0FBQ1YsTUFBTSxHQUFHSyxPQUFPLENBQUMsQ0FBRCxDQUFqQixLQUF5QkwsTUFBTSxDQUFDVyxFQUFQLEtBQWNULE9BQXZDLElBQWtERyxPQUFPLENBQUNFLEtBQVIsRUFKM0Q7O0lBTUEsS0FBS04sT0FBTCxHQUFlLEtBQWY7O0lBRUEsSUFBSUssS0FBSixFQUFXO01BQ1QsT0FBTyxDQUFDTixNQUFNLEdBQUdLLE9BQU8sQ0FBQyxDQUFELENBQWpCLEtBQXlCTCxNQUFNLENBQUNXLEVBQVAsS0FBY1QsT0FBdkMsSUFBa0RHLE9BQU8sQ0FBQ0UsS0FBUixFQUF6RCxFQUEwRTtRQUN4RVAsTUFBTSxDQUFDWSxXQUFQO01BQ0Q7O01BQ0QsTUFBTU4sS0FBTjtJQUNEO0VBQ0YsQ0FoQ007O0VBaUNUO0FBQUMsQ0FsQ0QsQ0FBNkNPLCtCQUE3Qzs7QUFBYUMiLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJBbmltYXRpb25GcmFtZVNjaGVkdWxlciIsImFjdGlvbiIsIl9hY3RpdmUiLCJmbHVzaElkIiwiX3NjaGVkdWxlZCIsInVuZGVmaW5lZCIsImFjdGlvbnMiLCJlcnJvciIsInNoaWZ0IiwiZXhlY3V0ZSIsInN0YXRlIiwiZGVsYXkiLCJpZCIsInVuc3Vic2NyaWJlIiwiQXN5bmNTY2hlZHVsZXJfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3NjaGVkdWxlci9BbmltYXRpb25GcmFtZVNjaGVkdWxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./AsyncScheduler":176}],173:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsapAction = void 0;

var AsyncAction_1 = require("./AsyncAction");

var immediateProvider_1 = require("./immediateProvider");

var AsapAction = function (_super) {
  __extends(AsapAction, _super);

  function AsapAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = immediateProvider_1.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
  };

  AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay != null && delay > 0 || delay == null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }

    if (!scheduler.actions.some(function (action) {
      return action.id === id;
    })) {
      immediateProvider_1.immediateProvider.clearImmediate(id);
      scheduler._scheduled = undefined;
    }

    return undefined;
  };

  return AsapAction;
}(AsyncAction_1.AsyncAction);

exports.AsapAction = AsapAction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFHQTs7QUFFQTtFQUFtQ0E7O0VBQ2pDLG9CQUFzQkMsU0FBdEIsRUFBMERDLElBQTFELEVBQTZHO0lBQTdHLFlBQ0VDLGtCQUFNRixTQUFOLEVBQWlCQyxJQUFqQixLQUFzQixJQUR4Qjs7SUFBc0JFO0lBQW9DQTs7RUFFekQ7O0VBRVNDLHNDQUFWLFVBQXlCSixTQUF6QixFQUFtREssRUFBbkQsRUFBNkRDLEtBQTdELEVBQThFO0lBQWpCO01BQUFBO0lBQWlCOztJQUU1RSxJQUFJQSxLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxHQUFHLENBQTlCLEVBQWlDO01BQy9CLE9BQU9KLGlCQUFNSyxjQUFOLENBQW9CQyxJQUFwQixDQUFvQixJQUFwQixFQUFxQlIsU0FBckIsRUFBZ0NLLEVBQWhDLEVBQW9DQyxLQUFwQyxDQUFQO0lBQ0Q7O0lBRUROLFNBQVMsQ0FBQ1MsT0FBVixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkI7SUFJQSxPQUFPVixTQUFTLENBQUNXLFVBQVYsS0FBeUJYLFNBQVMsQ0FBQ1csVUFBVixHQUF1QkMsc0NBQWtCQyxZQUFsQixDQUErQmIsU0FBUyxDQUFDYyxLQUFWLENBQWdCQyxJQUFoQixDQUFxQmYsU0FBckIsRUFBZ0NnQixTQUFoQyxDQUEvQixDQUFoRCxDQUFQO0VBQ0QsQ0FYUzs7RUFZQVosc0NBQVYsVUFBeUJKLFNBQXpCLEVBQW1ESyxFQUFuRCxFQUE2REMsS0FBN0QsRUFBOEU7SUFBakI7TUFBQUE7SUFBaUI7O0lBSTVFLElBQUtBLEtBQUssSUFBSSxJQUFULElBQWlCQSxLQUFLLEdBQUcsQ0FBMUIsSUFBaUNBLEtBQUssSUFBSSxJQUFULElBQWlCLEtBQUtBLEtBQUwsR0FBYSxDQUFuRSxFQUF1RTtNQUNyRSxPQUFPSixpQkFBTWUsY0FBTixDQUFvQlQsSUFBcEIsQ0FBb0IsSUFBcEIsRUFBcUJSLFNBQXJCLEVBQWdDSyxFQUFoQyxFQUFvQ0MsS0FBcEMsQ0FBUDtJQUNEOztJQUlELElBQUksQ0FBQ04sU0FBUyxDQUFDUyxPQUFWLENBQWtCUyxJQUFsQixDQUF1QixVQUFDQyxNQUFELEVBQU87TUFBSyxhQUFNLENBQUNkLEVBQVAsS0FBY0EsRUFBZDtJQUFnQixDQUFuRCxDQUFMLEVBQTJEO01BQ3pETyxzQ0FBa0JRLGNBQWxCLENBQWlDZixFQUFqQztNQUNBTCxTQUFTLENBQUNXLFVBQVYsR0FBdUJLLFNBQXZCO0lBQ0Q7O0lBRUQsT0FBT0EsU0FBUDtFQUNELENBaEJTOztFQWlCWjtBQUFDLENBbENELENBQW1DSyx5QkFBbkM7O0FBQWFDIiwibmFtZXMiOlsiX19leHRlbmRzIiwic2NoZWR1bGVyIiwid29yayIsIl9zdXBlciIsIl90aGlzIiwiQXNhcEFjdGlvbiIsImlkIiwiZGVsYXkiLCJyZXF1ZXN0QXN5bmNJZCIsImNhbGwiLCJhY3Rpb25zIiwicHVzaCIsIl9zY2hlZHVsZWQiLCJpbW1lZGlhdGVQcm92aWRlcl8xIiwic2V0SW1tZWRpYXRlIiwiZmx1c2giLCJiaW5kIiwidW5kZWZpbmVkIiwicmVjeWNsZUFzeW5jSWQiLCJzb21lIiwiYWN0aW9uIiwiY2xlYXJJbW1lZGlhdGUiLCJBc3luY0FjdGlvbl8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL0FzYXBBY3Rpb24udHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./AsyncAction":175,"./immediateProvider":185}],174:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsapScheduler = void 0;

var AsyncScheduler_1 = require("./AsyncScheduler");

var AsapScheduler = function (_super) {
  __extends(AsapScheduler, _super);

  function AsapScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AsapScheduler.prototype.flush = function (action) {
    this._active = true;
    var flushId = this._scheduled;
    this._scheduled = undefined;
    var actions = this.actions;
    var error;
    action = action || actions.shift();

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());

    this._active = false;

    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AsapScheduler;
}(AsyncScheduler_1.AsyncScheduler);

exports.AsapScheduler = AsapScheduler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQTtFQUFtQ0E7O0VBQW5DOztFQWtDQzs7RUFqQ1FDLGdDQUFQLFVBQWFDLE1BQWIsRUFBc0M7SUFDcEMsS0FBS0MsT0FBTCxHQUFlLElBQWY7SUFVQSxJQUFNQyxPQUFPLEdBQUcsS0FBS0MsVUFBckI7SUFDQSxLQUFLQSxVQUFMLEdBQWtCQyxTQUFsQjtJQUVRLFdBQU8sR0FBSyxLQUFJQyxPQUFoQjtJQUNSLElBQUlDLEtBQUo7SUFDQU4sTUFBTSxHQUFHQSxNQUFNLElBQUlLLE9BQU8sQ0FBQ0UsS0FBUixFQUFuQjs7SUFFQSxHQUFHO01BQ0QsSUFBS0QsS0FBSyxHQUFHTixNQUFNLENBQUNRLE9BQVAsQ0FBZVIsTUFBTSxDQUFDUyxLQUF0QixFQUE2QlQsTUFBTSxDQUFDVSxLQUFwQyxDQUFiLEVBQTBEO1FBQ3hEO01BQ0Q7SUFDRixDQUpELFFBSVMsQ0FBQ1YsTUFBTSxHQUFHSyxPQUFPLENBQUMsQ0FBRCxDQUFqQixLQUF5QkwsTUFBTSxDQUFDVyxFQUFQLEtBQWNULE9BQXZDLElBQWtERyxPQUFPLENBQUNFLEtBQVIsRUFKM0Q7O0lBTUEsS0FBS04sT0FBTCxHQUFlLEtBQWY7O0lBRUEsSUFBSUssS0FBSixFQUFXO01BQ1QsT0FBTyxDQUFDTixNQUFNLEdBQUdLLE9BQU8sQ0FBQyxDQUFELENBQWpCLEtBQXlCTCxNQUFNLENBQUNXLEVBQVAsS0FBY1QsT0FBdkMsSUFBa0RHLE9BQU8sQ0FBQ0UsS0FBUixFQUF6RCxFQUEwRTtRQUN4RVAsTUFBTSxDQUFDWSxXQUFQO01BQ0Q7O01BQ0QsTUFBTU4sS0FBTjtJQUNEO0VBQ0YsQ0FoQ007O0VBaUNUO0FBQUMsQ0FsQ0QsQ0FBbUNPLCtCQUFuQzs7QUFBYUMiLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJBc2FwU2NoZWR1bGVyIiwiYWN0aW9uIiwiX2FjdGl2ZSIsImZsdXNoSWQiLCJfc2NoZWR1bGVkIiwidW5kZWZpbmVkIiwiYWN0aW9ucyIsImVycm9yIiwic2hpZnQiLCJleGVjdXRlIiwic3RhdGUiLCJkZWxheSIsImlkIiwidW5zdWJzY3JpYmUiLCJBc3luY1NjaGVkdWxlcl8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL0FzYXBTY2hlZHVsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./AsyncScheduler":176}],175:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncAction = void 0;

var Action_1 = require("./Action");

var intervalProvider_1 = require("./intervalProvider");

var arrRemove_1 = require("../util/arrRemove");

var AsyncAction = function (_super) {
  __extends(AsyncAction, _super);

  function AsyncAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }

  AsyncAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (this.closed) {
      return this;
    }

    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }

    this.pending = true;
    this.delay = delay;
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
    return this;
  };

  AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return intervalProvider_1.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
  };

  AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay != null && this.delay === delay && this.pending === false) {
      return id;
    }

    intervalProvider_1.intervalProvider.clearInterval(id);
    return undefined;
  };

  AsyncAction.prototype.execute = function (state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }

    this.pending = false;

    var error = this._execute(state, delay);

    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };

  AsyncAction.prototype._execute = function (state, _delay) {
    var errored = false;
    var errorValue;

    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = e ? e : new Error('Scheduled action threw falsy error');
    }

    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };

  AsyncAction.prototype.unsubscribe = function () {
    if (!this.closed) {
      var _a = this,
          id = _a.id,
          scheduler = _a.scheduler;

      var actions = scheduler.actions;
      this.work = this.state = this.scheduler = null;
      this.pending = false;
      arrRemove_1.arrRemove(actions, this);

      if (id != null) {
        this.id = this.recycleAsyncId(scheduler, id, null);
      }

      this.delay = null;

      _super.prototype.unsubscribe.call(this);
    }
  };

  return AsyncAction;
}(Action_1.Action);

exports.AsyncAction = AsyncAction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBSCxHQUFPLElBQUlOLEtBQUosQ0FBVSxvQ0FBVixDQUFyQjtJQUNEOztJQUNELElBQUlJLE9BQUosRUFBYTtNQUNYLEtBQUtHLFdBQUw7TUFDQSxPQUFPRixVQUFQO0lBQ0Q7RUFDRixDQWhCUzs7RUFrQlZyQjtJQUNFLElBQUksQ0FBQyxLQUFLRyxNQUFWLEVBQWtCO01BQ1YsU0FBb0IsSUFBcEI7TUFBQSxJQUFFQyxFQUFFLFFBQUo7TUFBQSxJQUFNUixTQUFTLGVBQWY7O01BQ0UsV0FBTyxHQUFLQSxTQUFTLFFBQXJCO01BRVIsS0FBS0MsSUFBTCxHQUFZLEtBQUtJLEtBQUwsR0FBYSxLQUFLTCxTQUFMLEdBQWlCLElBQTFDO01BQ0EsS0FBS1UsT0FBTCxHQUFlLEtBQWY7TUFFQWtCLHNCQUFVQyxPQUFWLEVBQW1CLElBQW5COztNQUNBLElBQUlyQixFQUFFLElBQUksSUFBVixFQUFnQjtRQUNkLEtBQUtBLEVBQUwsR0FBVSxLQUFLQyxjQUFMLENBQW9CVCxTQUFwQixFQUErQlEsRUFBL0IsRUFBbUMsSUFBbkMsQ0FBVjtNQUNEOztNQUVELEtBQUtGLEtBQUwsR0FBYSxJQUFiOztNQUNBSixpQkFBTXlCLFdBQU4sQ0FBaUJHLElBQWpCLENBQWlCLElBQWpCO0lBQ0Q7RUFDRixDQWhCRDs7RUFpQkY7QUFBQyxDQTNJRCxDQUFvQ0MsZUFBcEM7O0FBQWFDIiwibmFtZXMiOlsiX19leHRlbmRzIiwic2NoZWR1bGVyIiwid29yayIsIl9zdXBlciIsIl90aGlzIiwiQXN5bmNBY3Rpb24iLCJzdGF0ZSIsImRlbGF5IiwiY2xvc2VkIiwiaWQiLCJyZWN5Y2xlQXN5bmNJZCIsInBlbmRpbmciLCJyZXF1ZXN0QXN5bmNJZCIsIl9pZCIsImludGVydmFsUHJvdmlkZXJfMSIsInNldEludGVydmFsIiwiZmx1c2giLCJiaW5kIiwiX3NjaGVkdWxlciIsImNsZWFySW50ZXJ2YWwiLCJ1bmRlZmluZWQiLCJFcnJvciIsImVycm9yIiwiX2V4ZWN1dGUiLCJfZGVsYXkiLCJlcnJvcmVkIiwiZXJyb3JWYWx1ZSIsImUiLCJ1bnN1YnNjcmliZSIsImFyclJlbW92ZV8xIiwiYWN0aW9ucyIsImNhbGwiLCJBY3Rpb25fMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3NjaGVkdWxlci9Bc3luY0FjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../util/arrRemove":203,"./Action":170,"./intervalProvider":186}],176:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncScheduler = void 0;

var Scheduler_1 = require("../Scheduler");

var AsyncScheduler = function (_super) {
  __extends(AsyncScheduler, _super);

  function AsyncScheduler(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler_1.Scheduler.now;
    }

    var _this = _super.call(this, SchedulerAction, now) || this;

    _this.actions = [];
    _this._active = false;
    _this._scheduled = undefined;
    return _this;
  }

  AsyncScheduler.prototype.flush = function (action) {
    var actions = this.actions;

    if (this._active) {
      actions.push(action);
      return;
    }

    var error;
    this._active = true;

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());

    this._active = false;

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AsyncScheduler;
}(Scheduler_1.Scheduler);

exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFJQTtFQUFvQ0E7O0VBa0JsQyx3QkFBWUMsZUFBWixFQUE0Q0MsR0FBNUMsRUFBNkU7SUFBakM7TUFBQUEsTUFBb0JDLHNCQUFVRCxHQUE5QjtJQUFpQzs7SUFBN0UsWUFDRUUsa0JBQU1ILGVBQU4sRUFBdUJDLEdBQXZCLEtBQTJCLElBRDdCOztJQWpCT0csZ0JBQW1DLEVBQW5DO0lBT0FBLGdCQUFtQixLQUFuQjtJQVFBQSxtQkFBa0JDLFNBQWxCOztFQUlOOztFQUVNQyxpQ0FBUCxVQUFhQyxNQUFiLEVBQXFDO0lBQzNCLFdBQU8sR0FBSyxLQUFJQyxPQUFoQjs7SUFFUixJQUFJLEtBQUtDLE9BQVQsRUFBa0I7TUFDaEJELE9BQU8sQ0FBQ0UsSUFBUixDQUFhSCxNQUFiO01BQ0E7SUFDRDs7SUFFRCxJQUFJSSxLQUFKO0lBQ0EsS0FBS0YsT0FBTCxHQUFlLElBQWY7O0lBRUEsR0FBRztNQUNELElBQUtFLEtBQUssR0FBR0osTUFBTSxDQUFDSyxPQUFQLENBQWVMLE1BQU0sQ0FBQ00sS0FBdEIsRUFBNkJOLE1BQU0sQ0FBQ08sS0FBcEMsQ0FBYixFQUEwRDtRQUN4RDtNQUNEO0lBQ0YsQ0FKRCxRQUlVUCxNQUFNLEdBQUdDLE9BQU8sQ0FBQ08sS0FBUixFQUpuQjs7SUFNQSxLQUFLTixPQUFMLEdBQWUsS0FBZjs7SUFFQSxJQUFJRSxLQUFKLEVBQVc7TUFDVCxPQUFRSixNQUFNLEdBQUdDLE9BQU8sQ0FBQ08sS0FBUixFQUFqQixFQUFvQztRQUNsQ1IsTUFBTSxDQUFDUyxXQUFQO01BQ0Q7O01BQ0QsTUFBTUwsS0FBTjtJQUNEO0VBQ0YsQ0F6Qk07O0VBMEJUO0FBQUMsQ0FoREQsQ0FBb0NULHFCQUFwQzs7QUFBYWUiLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJTY2hlZHVsZXJBY3Rpb24iLCJub3ciLCJTY2hlZHVsZXJfMSIsIl9zdXBlciIsIl90aGlzIiwidW5kZWZpbmVkIiwiQXN5bmNTY2hlZHVsZXIiLCJhY3Rpb24iLCJhY3Rpb25zIiwiX2FjdGl2ZSIsInB1c2giLCJlcnJvciIsImV4ZWN1dGUiLCJzdGF0ZSIsImRlbGF5Iiwic2hpZnQiLCJ1bnN1YnNjcmliZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3NjaGVkdWxlci9Bc3luY1NjaGVkdWxlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../Scheduler":10}],177:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueAction = void 0;

var AsyncAction_1 = require("./AsyncAction");

var QueueAction = function (_super) {
  __extends(QueueAction, _super);

  function QueueAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  QueueAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay > 0) {
      return _super.prototype.schedule.call(this, state, delay);
    }

    this.delay = delay;
    this.state = state;
    this.scheduler.flush(this);
    return this;
  };

  QueueAction.prototype.execute = function (state, delay) {
    return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
  };

  QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay != null && delay > 0 || delay == null && this.delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    return scheduler.flush(this);
  };

  return QueueAction;
}(AsyncAction_1.AsyncAction);

exports.QueueAction = QueueAction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFLQTtFQUFvQ0E7O0VBRWxDLHFCQUFzQkMsU0FBdEIsRUFDc0JDLElBRHRCLEVBQ3lFO0lBRHpFLFlBRUVDLGtCQUFNRixTQUFOLEVBQWlCQyxJQUFqQixLQUFzQixJQUZ4Qjs7SUFBc0JFO0lBQ0FBOztFQUVyQjs7RUFFTUMsaUNBQVAsVUFBZ0JDLEtBQWhCLEVBQTJCQyxLQUEzQixFQUE0QztJQUFqQjtNQUFBQTtJQUFpQjs7SUFDMUMsSUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtNQUNiLE9BQU9KLGlCQUFNSyxRQUFOLENBQWNDLElBQWQsQ0FBYyxJQUFkLEVBQWVILEtBQWYsRUFBc0JDLEtBQXRCLENBQVA7SUFDRDs7SUFDRCxLQUFLQSxLQUFMLEdBQWFBLEtBQWI7SUFDQSxLQUFLRCxLQUFMLEdBQWFBLEtBQWI7SUFDQSxLQUFLTCxTQUFMLENBQWVTLEtBQWYsQ0FBcUIsSUFBckI7SUFDQSxPQUFPLElBQVA7RUFDRCxDQVJNOztFQVVBTCxnQ0FBUCxVQUFlQyxLQUFmLEVBQXlCQyxLQUF6QixFQUFzQztJQUNwQyxPQUFRQSxLQUFLLEdBQUcsQ0FBUixJQUFhLEtBQUtJLE1BQW5CLEdBQ0xSLGlCQUFNUyxPQUFOLENBQWFILElBQWIsQ0FBYSxJQUFiLEVBQWNILEtBQWQsRUFBcUJDLEtBQXJCLENBREssR0FFTCxLQUFLTSxRQUFMLENBQWNQLEtBQWQsRUFBcUJDLEtBQXJCLENBRkY7RUFHRCxDQUpNOztFQU1HRix1Q0FBVixVQUF5QkosU0FBekIsRUFBb0RhLEVBQXBELEVBQThEUCxLQUE5RCxFQUErRTtJQUFqQjtNQUFBQTtJQUFpQjs7SUFLN0UsSUFBS0EsS0FBSyxJQUFJLElBQVQsSUFBaUJBLEtBQUssR0FBRyxDQUExQixJQUFpQ0EsS0FBSyxJQUFJLElBQVQsSUFBaUIsS0FBS0EsS0FBTCxHQUFhLENBQW5FLEVBQXVFO01BQ3JFLE9BQU9KLGlCQUFNWSxjQUFOLENBQW9CTixJQUFwQixDQUFvQixJQUFwQixFQUFxQlIsU0FBckIsRUFBZ0NhLEVBQWhDLEVBQW9DUCxLQUFwQyxDQUFQO0lBQ0Q7O0lBRUQsT0FBT04sU0FBUyxDQUFDUyxLQUFWLENBQWdCLElBQWhCLENBQVA7RUFDRCxDQVZTOztFQVdaO0FBQUMsQ0FsQ0QsQ0FBb0NNLHlCQUFwQzs7QUFBYUMiLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJzY2hlZHVsZXIiLCJ3b3JrIiwiX3N1cGVyIiwiX3RoaXMiLCJRdWV1ZUFjdGlvbiIsInN0YXRlIiwiZGVsYXkiLCJzY2hlZHVsZSIsImNhbGwiLCJmbHVzaCIsImNsb3NlZCIsImV4ZWN1dGUiLCJfZXhlY3V0ZSIsImlkIiwicmVxdWVzdEFzeW5jSWQiLCJBc3luY0FjdGlvbl8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL1F1ZXVlQWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"./AsyncAction":175}],178:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueueScheduler = void 0;

var AsyncScheduler_1 = require("./AsyncScheduler");

var QueueScheduler = function (_super) {
  __extends(QueueScheduler, _super);

  function QueueScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return QueueScheduler;
}(AsyncScheduler_1.AsyncScheduler);

exports.QueueScheduler = QueueScheduler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtFQUFvQ0E7O0VBQXBDOztFQUNDOztFQUFEO0FBQUMsQ0FERCxDQUFvQ0MsK0JBQXBDOztBQUFhQyIsIm5hbWVzIjpbIl9fZXh0ZW5kcyIsIkFzeW5jU2NoZWR1bGVyXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvUXVldWVTY2hlZHVsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./AsyncScheduler":176}],179:[function(require,module,exports){
"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VirtualAction = exports.VirtualTimeScheduler = void 0;

var AsyncAction_1 = require("./AsyncAction");

var Subscription_1 = require("../Subscription");

var AsyncScheduler_1 = require("./AsyncScheduler");

var VirtualTimeScheduler = function (_super) {
  __extends(VirtualTimeScheduler, _super);

  function VirtualTimeScheduler(schedulerActionCtor, maxFrames) {
    if (schedulerActionCtor === void 0) {
      schedulerActionCtor = VirtualAction;
    }

    if (maxFrames === void 0) {
      maxFrames = Infinity;
    }

    var _this = _super.call(this, schedulerActionCtor, function () {
      return _this.frame;
    }) || this;

    _this.maxFrames = maxFrames;
    _this.frame = 0;
    _this.index = -1;
    return _this;
  }

  VirtualTimeScheduler.prototype.flush = function () {
    var _a = this,
        actions = _a.actions,
        maxFrames = _a.maxFrames;

    var error;
    var action;

    while ((action = actions[0]) && action.delay <= maxFrames) {
      actions.shift();
      this.frame = action.delay;

      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    }

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  VirtualTimeScheduler.frameTimeFactor = 10;
  return VirtualTimeScheduler;
}(AsyncScheduler_1.AsyncScheduler);

exports.VirtualTimeScheduler = VirtualTimeScheduler;

var VirtualAction = function (_super) {
  __extends(VirtualAction, _super);

  function VirtualAction(scheduler, work, index) {
    if (index === void 0) {
      index = scheduler.index += 1;
    }

    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    _this.index = index;
    _this.active = true;
    _this.index = scheduler.index = index;
    return _this;
  }

  VirtualAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (Number.isFinite(delay)) {
      if (!this.id) {
        return _super.prototype.schedule.call(this, state, delay);
      }

      this.active = false;
      var action = new VirtualAction(this.scheduler, this.work);
      this.add(action);
      return action.schedule(state, delay);
    } else {
      return Subscription_1.Subscription.EMPTY;
    }
  };

  VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    this.delay = scheduler.frame + delay;
    var actions = scheduler.actions;
    actions.push(this);
    actions.sort(VirtualAction.sortActions);
    return true;
  };

  VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return undefined;
  };

  VirtualAction.prototype._execute = function (state, delay) {
    if (this.active === true) {
      return _super.prototype._execute.call(this, state, delay);
    }
  };

  VirtualAction.sortActions = function (a, b) {
    if (a.delay === b.delay) {
      if (a.index === b.index) {
        return 0;
      } else if (a.index > b.index) {
        return 1;
      } else {
        return -1;
      }
    } else if (a.delay > b.delay) {
      return 1;
    } else {
      return -1;
    }
  };

  return VirtualAction;
}(AsyncAction_1.AsyncAction);

exports.VirtualAction = VirtualAction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFHQTtFQUEwQ0E7O0VBeUJ4Qyw4QkFBWUMsbUJBQVosRUFBbUZDLFNBQW5GLEVBQStHO0lBQW5HO01BQUFELHNCQUEwQ0UsYUFBMUM7SUFBOEQ7O0lBQVM7TUFBQUQ7SUFBNEI7O0lBQS9HLFlBQ0VFLGtCQUFNSCxtQkFBTixFQUEyQjtNQUFNLFlBQUksQ0FBQ0ksS0FBTDtJQUFVLENBQTNDLEtBQTRDLElBRDlDOztJQUFtRkM7SUFmNUVBLGNBQWdCLENBQWhCO0lBTUFBLGNBQWdCLENBQUMsQ0FBakI7O0VBV047O0VBT01DLHVDQUFQO0lBQ1EsU0FBeUIsSUFBekI7SUFBQSxJQUFFQyxPQUFPLGFBQVQ7SUFBQSxJQUFXTixTQUFTLGVBQXBCOztJQUNOLElBQUlPLEtBQUo7SUFDQSxJQUFJQyxNQUFKOztJQUVBLE9BQU8sQ0FBQ0EsTUFBTSxHQUFHRixPQUFPLENBQUMsQ0FBRCxDQUFqQixLQUF5QkUsTUFBTSxDQUFDQyxLQUFQLElBQWdCVCxTQUFoRCxFQUEyRDtNQUN6RE0sT0FBTyxDQUFDSSxLQUFSO01BQ0EsS0FBS1AsS0FBTCxHQUFhSyxNQUFNLENBQUNDLEtBQXBCOztNQUVBLElBQUtGLEtBQUssR0FBR0MsTUFBTSxDQUFDRyxPQUFQLENBQWVILE1BQU0sQ0FBQ0ksS0FBdEIsRUFBNkJKLE1BQU0sQ0FBQ0MsS0FBcEMsQ0FBYixFQUEwRDtRQUN4RDtNQUNEO0lBQ0Y7O0lBRUQsSUFBSUYsS0FBSixFQUFXO01BQ1QsT0FBUUMsTUFBTSxHQUFHRixPQUFPLENBQUNJLEtBQVIsRUFBakIsRUFBbUM7UUFDakNGLE1BQU0sQ0FBQ0ssV0FBUDtNQUNEOztNQUNELE1BQU1OLEtBQU47SUFDRDtFQUNGLENBcEJNOztFQWhDQUYsdUNBQWtCLEVBQWxCO0VBcURUO0FBQUMsQ0F2REQsQ0FBMENTLCtCQUExQzs7QUFBYUM7O0FBeURiO0VBQXNDakI7O0VBR3BDLHVCQUNZa0IsU0FEWixFQUVZQyxJQUZaLEVBR1lDLEtBSFosRUFHa0Q7SUFBdEM7TUFBQUEsUUFBaUJGLFNBQVMsQ0FBQ0UsS0FBVixJQUFtQixDQUFwQztJQUFzQzs7SUFIbEQsWUFLRWhCLGtCQUFNYyxTQUFOLEVBQWlCQyxJQUFqQixLQUFzQixJQUx4Qjs7SUFDWWI7SUFDQUE7SUFDQUE7SUFMRkEsZUFBa0IsSUFBbEI7SUFRUkEsS0FBSSxDQUFDYyxLQUFMLEdBQWFGLFNBQVMsQ0FBQ0UsS0FBVixHQUFrQkEsS0FBL0I7O0VBQ0Q7O0VBRU1qQixtQ0FBUCxVQUFnQlcsS0FBaEIsRUFBMkJILEtBQTNCLEVBQTRDO0lBQWpCO01BQUFBO0lBQWlCOztJQUMxQyxJQUFJVSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JYLEtBQWhCLENBQUosRUFBNEI7TUFDMUIsSUFBSSxDQUFDLEtBQUtZLEVBQVYsRUFBYztRQUNaLE9BQU9uQixpQkFBTW9CLFFBQU4sQ0FBY0MsSUFBZCxDQUFjLElBQWQsRUFBZVgsS0FBZixFQUFzQkgsS0FBdEIsQ0FBUDtNQUNEOztNQUNELEtBQUtlLE1BQUwsR0FBYyxLQUFkO01BS0EsSUFBTWhCLE1BQU0sR0FBRyxJQUFJUCxhQUFKLENBQWtCLEtBQUtlLFNBQXZCLEVBQWtDLEtBQUtDLElBQXZDLENBQWY7TUFDQSxLQUFLUSxHQUFMLENBQVNqQixNQUFUO01BQ0EsT0FBT0EsTUFBTSxDQUFDYyxRQUFQLENBQWdCVixLQUFoQixFQUF1QkgsS0FBdkIsQ0FBUDtJQUNELENBWkQsTUFZTztNQUdMLE9BQU9pQiw0QkFBYUMsS0FBcEI7SUFDRDtFQUNGLENBbEJNOztFQW9CRzFCLHlDQUFWLFVBQXlCZSxTQUF6QixFQUEwREssRUFBMUQsRUFBb0VaLEtBQXBFLEVBQXFGO0lBQWpCO01BQUFBO0lBQWlCOztJQUNuRixLQUFLQSxLQUFMLEdBQWFPLFNBQVMsQ0FBQ2IsS0FBVixHQUFrQk0sS0FBL0I7SUFDUSxXQUFPLEdBQUtPLFNBQVMsUUFBckI7SUFDUlYsT0FBTyxDQUFDc0IsSUFBUixDQUFhLElBQWI7SUFDQ3RCLE9BQW1DLENBQUN1QixJQUFwQyxDQUF5QzVCLGFBQWEsQ0FBQzZCLFdBQXZEO0lBQ0QsT0FBTyxJQUFQO0VBQ0QsQ0FOUzs7RUFRQTdCLHlDQUFWLFVBQXlCZSxTQUF6QixFQUEwREssRUFBMUQsRUFBb0VaLEtBQXBFLEVBQXFGO0lBQWpCO01BQUFBO0lBQWlCOztJQUNuRixPQUFPc0IsU0FBUDtFQUNELENBRlM7O0VBSUE5QixtQ0FBVixVQUFtQlcsS0FBbkIsRUFBNkJILEtBQTdCLEVBQTBDO0lBQ3hDLElBQUksS0FBS2UsTUFBTCxLQUFnQixJQUFwQixFQUEwQjtNQUN4QixPQUFPdEIsaUJBQU04QixRQUFOLENBQWNULElBQWQsQ0FBYyxJQUFkLEVBQWVYLEtBQWYsRUFBc0JILEtBQXRCLENBQVA7SUFDRDtFQUNGLENBSlM7O0VBTUtSLDRCQUFmLFVBQThCZ0MsQ0FBOUIsRUFBbURDLENBQW5ELEVBQXNFO0lBQ3BFLElBQUlELENBQUMsQ0FBQ3hCLEtBQUYsS0FBWXlCLENBQUMsQ0FBQ3pCLEtBQWxCLEVBQXlCO01BQ3ZCLElBQUl3QixDQUFDLENBQUNmLEtBQUYsS0FBWWdCLENBQUMsQ0FBQ2hCLEtBQWxCLEVBQXlCO1FBQ3ZCLE9BQU8sQ0FBUDtNQUNELENBRkQsTUFFTyxJQUFJZSxDQUFDLENBQUNmLEtBQUYsR0FBVWdCLENBQUMsQ0FBQ2hCLEtBQWhCLEVBQXVCO1FBQzVCLE9BQU8sQ0FBUDtNQUNELENBRk0sTUFFQTtRQUNMLE9BQU8sQ0FBQyxDQUFSO01BQ0Q7SUFDRixDQVJELE1BUU8sSUFBSWUsQ0FBQyxDQUFDeEIsS0FBRixHQUFVeUIsQ0FBQyxDQUFDekIsS0FBaEIsRUFBdUI7TUFDNUIsT0FBTyxDQUFQO0lBQ0QsQ0FGTSxNQUVBO01BQ0wsT0FBTyxDQUFDLENBQVI7SUFDRDtFQUNGLENBZGM7O0VBZWpCO0FBQUMsQ0FqRUQsQ0FBc0MwQix5QkFBdEM7O0FBQWFwQiIsIm5hbWVzIjpbIl9fZXh0ZW5kcyIsInNjaGVkdWxlckFjdGlvbkN0b3IiLCJtYXhGcmFtZXMiLCJWaXJ0dWFsQWN0aW9uIiwiX3N1cGVyIiwiZnJhbWUiLCJfdGhpcyIsIlZpcnR1YWxUaW1lU2NoZWR1bGVyIiwiYWN0aW9ucyIsImVycm9yIiwiYWN0aW9uIiwiZGVsYXkiLCJzaGlmdCIsImV4ZWN1dGUiLCJzdGF0ZSIsInVuc3Vic2NyaWJlIiwiQXN5bmNTY2hlZHVsZXJfMSIsImV4cG9ydHMiLCJzY2hlZHVsZXIiLCJ3b3JrIiwiaW5kZXgiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsImlkIiwic2NoZWR1bGUiLCJjYWxsIiwiYWN0aXZlIiwiYWRkIiwiU3Vic2NyaXB0aW9uXzEiLCJFTVBUWSIsInB1c2giLCJzb3J0Iiwic29ydEFjdGlvbnMiLCJ1bmRlZmluZWQiLCJfZXhlY3V0ZSIsImEiLCJiIiwiQXN5bmNBY3Rpb25fMSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL1ZpcnR1YWxUaW1lU2NoZWR1bGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../Subscription":13,"./AsyncAction":175,"./AsyncScheduler":176}],180:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationFrame = exports.animationFrameScheduler = void 0;

var AnimationFrameAction_1 = require("./AnimationFrameAction");

var AnimationFrameScheduler_1 = require("./AnimationFrameScheduler");

exports.animationFrameScheduler = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
exports.animationFrame = exports.animationFrameScheduler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQWtDYUEsa0NBQTBCLElBQUlDLGlEQUFKLENBQTRCQywyQ0FBNUIsQ0FBMUI7QUFLQUYseUJBQWlCQSwrQkFBakIiLCJuYW1lcyI6WyJleHBvcnRzIiwiQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXJfMSIsIkFuaW1hdGlvbkZyYW1lQWN0aW9uXzEiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3NjaGVkdWxlci9hbmltYXRpb25GcmFtZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./AnimationFrameAction":171,"./AnimationFrameScheduler":172}],181:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationFrameProvider = void 0;

var Subscription_1 = require("../Subscription");

exports.animationFrameProvider = {
  schedule: function schedule(callback) {
    var request = requestAnimationFrame;
    var cancel = cancelAnimationFrame;
    var delegate = exports.animationFrameProvider.delegate;

    if (delegate) {
      request = delegate.requestAnimationFrame;
      cancel = delegate.cancelAnimationFrame;
    }

    var handle = request(function (timestamp) {
      cancel = undefined;
      callback(timestamp);
    });
    return new Subscription_1.Subscription(function () {
      return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
    });
  },
  requestAnimationFrame: function (_requestAnimationFrame) {
    function requestAnimationFrame() {
      return _requestAnimationFrame.apply(this, arguments);
    }

    requestAnimationFrame.toString = function () {
      return _requestAnimationFrame.toString();
    };

    return requestAnimationFrame;
  }(function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var delegate = exports.animationFrameProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
  }),
  cancelAnimationFrame: function (_cancelAnimationFrame) {
    function cancelAnimationFrame() {
      return _cancelAnimationFrame.apply(this, arguments);
    }

    cancelAnimationFrame.toString = function () {
      return _cancelAnimationFrame.toString();
    };

    return cancelAnimationFrame;
  }(function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var delegate = exports.animationFrameProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
  }),
  delegate: undefined
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBY2FBLGlDQUFpRDtFQUc1REMsUUFBUSxFQUFSLGtCQUFTQyxRQUFULEVBQWlCO0lBQ2YsSUFBSUMsT0FBTyxHQUFHQyxxQkFBZDtJQUNBLElBQUlDLE1BQU0sR0FBNENDLG9CQUF0RDtJQUNRLFlBQVEsR0FBS04sK0JBQXNCTyxRQUFuQzs7SUFDUixJQUFJQSxRQUFKLEVBQWM7TUFDWkosT0FBTyxHQUFHSSxRQUFRLENBQUNILHFCQUFuQjtNQUNBQyxNQUFNLEdBQUdFLFFBQVEsQ0FBQ0Qsb0JBQWxCO0lBQ0Q7O0lBQ0QsSUFBTUUsTUFBTSxHQUFHTCxPQUFPLENBQUMsVUFBQ00sU0FBRCxFQUFVO01BSS9CSixNQUFNLEdBQUdLLFNBQVQ7TUFDQVIsUUFBUSxDQUFDTyxTQUFELENBQVI7SUFDRCxDQU5xQixDQUF0QjtJQU9BLE9BQU8sSUFBSUUsMkJBQUosQ0FBaUI7TUFBTSxhQUFNLFNBQU4sVUFBTSxXQUFOLEdBQU0sTUFBTixTQUFNLENBQUdILE1BQUgsQ0FBTjtJQUFnQixDQUF2QyxDQUFQO0VBQ0QsQ0FuQjJEO0VBb0I1REoscUJBQXFCO0lBQUE7TUFBQTtJQUFBOztJQUFBO01BQUE7SUFBQTs7SUFBQTtFQUFBO0lBQUM7O1NBQUEseUNBQU87TUFBUFE7OztJQUNaLFlBQVEsR0FBS1osK0JBQXNCTyxRQUFuQztJQUNSLE9BQU8sQ0FBQyxTQUFRLFNBQVIsWUFBUSxXQUFSLEdBQVEsTUFBUixXQUFRLENBQUVILHFCQUFWLEtBQW1DQSxxQkFBcEMsRUFBMERTLEtBQTFELENBQTBELE1BQTFELEVBQTBEQyx5QkFBSUYsSUFBSixFQUExRCxDQUFQO0VBQ0QsQ0FIb0IsQ0FwQnVDO0VBd0I1RE4sb0JBQW9CO0lBQUE7TUFBQTtJQUFBOztJQUFBO01BQUE7SUFBQTs7SUFBQTtFQUFBO0lBQUM7O1NBQUEseUNBQU87TUFBUE07OztJQUNYLFlBQVEsR0FBS1osK0JBQXNCTyxRQUFuQztJQUNSLE9BQU8sQ0FBQyxTQUFRLFNBQVIsWUFBUSxXQUFSLEdBQVEsTUFBUixXQUFRLENBQUVELG9CQUFWLEtBQWtDQSxvQkFBbkMsRUFBd0RPLEtBQXhELENBQXdELE1BQXhELEVBQXdEQyx5QkFBSUYsSUFBSixFQUF4RCxDQUFQO0VBQ0QsQ0FIbUIsQ0F4QndDO0VBNEI1REwsUUFBUSxFQUFFRztBQTVCa0QsQ0FBakQiLCJuYW1lcyI6WyJleHBvcnRzIiwic2NoZWR1bGUiLCJjYWxsYmFjayIsInJlcXVlc3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWwiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImRlbGVnYXRlIiwiaGFuZGxlIiwidGltZXN0YW1wIiwidW5kZWZpbmVkIiwiU3Vic2NyaXB0aW9uXzEiLCJhcmdzIiwiYXBwbHkiLCJfX3NwcmVhZEFycmF5Il0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvYW5pbWF0aW9uRnJhbWVQcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../Subscription":13}],182:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asap = exports.asapScheduler = void 0;

var AsapAction_1 = require("./AsapAction");

var AsapScheduler_1 = require("./AsapScheduler");

exports.asapScheduler = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
exports.asap = exports.asapScheduler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQXFDYUEsd0JBQWdCLElBQUlDLDZCQUFKLENBQWtCQyx1QkFBbEIsQ0FBaEI7QUFLQUYsZUFBT0EscUJBQVAiLCJuYW1lcyI6WyJleHBvcnRzIiwiQXNhcFNjaGVkdWxlcl8xIiwiQXNhcEFjdGlvbl8xIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvYXNhcC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./AsapAction":173,"./AsapScheduler":174}],183:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.async = exports.asyncScheduler = void 0;

var AsyncAction_1 = require("./AsyncAction");

var AsyncScheduler_1 = require("./AsyncScheduler");

exports.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
exports.async = exports.asyncScheduler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQWlEYUEseUJBQWlCLElBQUlDLCtCQUFKLENBQW1CQyx5QkFBbkIsQ0FBakI7QUFLQUYsZ0JBQVFBLHNCQUFSIiwibmFtZXMiOlsiZXhwb3J0cyIsIkFzeW5jU2NoZWR1bGVyXzEiLCJBc3luY0FjdGlvbl8xIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvYXN5bmMudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./AsyncAction":175,"./AsyncScheduler":176}],184:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateTimestampProvider = void 0;
exports.dateTimestampProvider = {
  now: function now() {
    return (exports.dateTimestampProvider.delegate || Date).now();
  },
  delegate: undefined
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBTWFBLGdDQUErQztFQUMxREMsR0FBRztJQUdELE9BQU8sQ0FBQ0QsOEJBQXNCRSxRQUF0QixJQUFrQ0MsSUFBbkMsRUFBeUNGLEdBQXpDLEVBQVA7RUFDRCxDQUx5RDtFQU0xREMsUUFBUSxFQUFFRTtBQU5nRCxDQUEvQyIsIm5hbWVzIjpbImV4cG9ydHMiLCJub3ciLCJkZWxlZ2F0ZSIsIkRhdGUiLCJ1bmRlZmluZWQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3NjaGVkdWxlci9kYXRlVGltZXN0YW1wUHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{}],185:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.immediateProvider = void 0;

var Immediate_1 = require("../util/Immediate");

var _setImmediate = Immediate_1.Immediate.setImmediate,
    _clearImmediate = Immediate_1.Immediate.clearImmediate;
exports.immediateProvider = {
  setImmediate: function setImmediate() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var delegate = exports.immediateProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || _setImmediate).apply(void 0, __spreadArray([], __read(args)));
  },
  clearImmediate: function clearImmediate(handle) {
    var delegate = exports.immediateProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || _clearImmediate)(handle);
  },
  delegate: undefined
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRVEsaUJBQVksR0FBcUJBLHNCQUFTQyxZQUExQztBQUFBLElBQWNDLGVBQWMsR0FBS0Ysc0JBQVNFLGNBQTFDO0FBZ0JLQyw0QkFBdUM7RUFHbERGLFlBQVk7SUFBQzs7U0FBQSx5Q0FBTztNQUFQRzs7O0lBQ0gsWUFBUSxHQUFLRCwwQkFBaUJFLFFBQTlCO0lBQ1IsT0FBTyxDQUFDLFNBQVEsU0FBUixZQUFRLFdBQVIsR0FBUSxNQUFSLFdBQVEsQ0FBRUosWUFBVixLQUEwQkEsYUFBM0IsRUFBd0NLLEtBQXhDLENBQXdDLE1BQXhDLEVBQXdDQyx5QkFBSUgsSUFBSixFQUF4QyxDQUFQO0VBQ0QsQ0FOaUQ7RUFPbERGLGNBQWMsRUFBZCx3QkFBZU0sTUFBZixFQUFxQjtJQUNYLFlBQVEsR0FBS0wsMEJBQWlCRSxRQUE5QjtJQUNSLE9BQU8sQ0FBQyxTQUFRLFNBQVIsWUFBUSxXQUFSLEdBQVEsTUFBUixXQUFRLENBQUVILGNBQVYsS0FBNEJBLGVBQTdCLEVBQTZDTSxNQUE3QyxDQUFQO0VBQ0QsQ0FWaUQ7RUFXbERILFFBQVEsRUFBRUk7QUFYd0MsQ0FBdkMiLCJuYW1lcyI6WyJJbW1lZGlhdGVfMSIsInNldEltbWVkaWF0ZSIsImNsZWFySW1tZWRpYXRlIiwiZXhwb3J0cyIsImFyZ3MiLCJkZWxlZ2F0ZSIsImFwcGx5IiwiX19zcHJlYWRBcnJheSIsImhhbmRsZSIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL2ltbWVkaWF0ZVByb3ZpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../util/Immediate":195}],186:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intervalProvider = void 0;
exports.intervalProvider = {
  setInterval: function (_setInterval) {
    function setInterval(_x, _x2) {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  }(function (handler, timeout) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    var delegate = exports.intervalProvider.delegate;

    if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
      return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
    }

    return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
  }),
  clearInterval: function (_clearInterval) {
    function clearInterval(_x3) {
      return _clearInterval.apply(this, arguments);
    }

    clearInterval.toString = function () {
      return _clearInterval.toString();
    };

    return clearInterval;
  }(function (handle) {
    var delegate = exports.intervalProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
  }),
  delegate: undefined
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlYUEsMkJBQXFDO0VBR2hEQyxXQUFXO0lBQUE7TUFBQTtJQUFBOztJQUFBO01BQUE7SUFBQTs7SUFBQTtFQUFBLEVBQVgsVUFBWUMsT0FBWixFQUFpQ0MsT0FBakMsRUFBaUQ7SUFBRTs7U0FBQSx5Q0FBTztNQUFQQzs7O0lBQ3pDLFlBQVEsR0FBS0oseUJBQWdCSyxRQUE3Qjs7SUFDUixJQUFJQSxRQUFRLFNBQVIsWUFBUSxXQUFSLEdBQVEsTUFBUixXQUFRLENBQUVKLFdBQWQsRUFBMkI7TUFDekIsT0FBT0ksUUFBUSxDQUFDSixXQUFULENBQW9CSyxLQUFwQixXQUFRQyxlQUFhTCxPQUFiLEVBQXNCQyxPQUF0QixHQUE2QkssT0FBS0osSUFBTCxDQUE3QixDQUFSLENBQVA7SUFDRDs7SUFDRCxPQUFPSCxXQUFXLE1BQVgsQ0FBVyxNQUFYLEVBQVdNLGVBQUNMLE9BQUQsRUFBVUMsT0FBVixHQUFpQkssT0FBS0osSUFBTCxDQUFqQixDQUFYLENBQVA7RUFDRCxDQU5VLENBSHFDO0VBVWhESyxhQUFhO0lBQUE7TUFBQTtJQUFBOztJQUFBO01BQUE7SUFBQTs7SUFBQTtFQUFBLEVBQWIsVUFBY0MsTUFBZCxFQUFvQjtJQUNWLFlBQVEsR0FBS1YseUJBQWdCSyxRQUE3QjtJQUNSLE9BQU8sQ0FBQyxTQUFRLFNBQVIsWUFBUSxXQUFSLEdBQVEsTUFBUixXQUFRLENBQUVJLGFBQVYsS0FBMkJBLGFBQTVCLEVBQTJDQyxNQUEzQyxDQUFQO0VBQ0QsQ0FIWSxDQVZtQztFQWNoREwsUUFBUSxFQUFFTTtBQWRzQyxDQUFyQyIsIm5hbWVzIjpbImV4cG9ydHMiLCJzZXRJbnRlcnZhbCIsImhhbmRsZXIiLCJ0aW1lb3V0IiwiYXJncyIsImRlbGVnYXRlIiwiYXBwbHkiLCJfX3NwcmVhZEFycmF5IiwiX19yZWFkIiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZSIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL2ludGVydmFsUHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{}],187:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.performanceTimestampProvider = void 0;
exports.performanceTimestampProvider = {
  now: function now() {
    return (exports.performanceTimestampProvider.delegate || performance).now();
  },
  delegate: undefined
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBTWFBLHVDQUE2RDtFQUN4RUMsR0FBRztJQUdELE9BQU8sQ0FBQ0QscUNBQTZCRSxRQUE3QixJQUF5Q0MsV0FBMUMsRUFBdURGLEdBQXZELEVBQVA7RUFDRCxDQUx1RTtFQU14RUMsUUFBUSxFQUFFRTtBQU44RCxDQUE3RCIsIm5hbWVzIjpbImV4cG9ydHMiLCJub3ciLCJkZWxlZ2F0ZSIsInBlcmZvcm1hbmNlIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvcGVyZm9ybWFuY2VUaW1lc3RhbXBQcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{}],188:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queue = exports.queueScheduler = void 0;

var QueueAction_1 = require("./QueueAction");

var QueueScheduler_1 = require("./QueueScheduler");

exports.queueScheduler = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
exports.queue = exports.queueScheduler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQWlFYUEseUJBQWlCLElBQUlDLCtCQUFKLENBQW1CQyx5QkFBbkIsQ0FBakI7QUFLQUYsZ0JBQVFBLHNCQUFSIiwibmFtZXMiOlsiZXhwb3J0cyIsIlF1ZXVlU2NoZWR1bGVyXzEiLCJRdWV1ZUFjdGlvbl8xIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvcXVldWUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./QueueAction":177,"./QueueScheduler":178}],189:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeoutProvider = void 0;
exports.timeoutProvider = {
  setTimeout: function (_setTimeout) {
    function setTimeout(_x, _x2) {
      return _setTimeout.apply(this, arguments);
    }

    setTimeout.toString = function () {
      return _setTimeout.toString();
    };

    return setTimeout;
  }(function (handler, timeout) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    var delegate = exports.timeoutProvider.delegate;

    if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
      return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
    }

    return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
  }),
  clearTimeout: function (_clearTimeout) {
    function clearTimeout(_x3) {
      return _clearTimeout.apply(this, arguments);
    }

    clearTimeout.toString = function () {
      return _clearTimeout.toString();
    };

    return clearTimeout;
  }(function (handle) {
    var delegate = exports.timeoutProvider.delegate;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
  }),
  delegate: undefined
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlYUEsMEJBQW1DO0VBRzlDQyxVQUFVO0lBQUE7TUFBQTtJQUFBOztJQUFBO01BQUE7SUFBQTs7SUFBQTtFQUFBLEVBQVYsVUFBV0MsT0FBWCxFQUFnQ0MsT0FBaEMsRUFBZ0Q7SUFBRTs7U0FBQSx5Q0FBTztNQUFQQzs7O0lBQ3hDLFlBQVEsR0FBS0osd0JBQWVLLFFBQTVCOztJQUNSLElBQUlBLFFBQVEsU0FBUixZQUFRLFdBQVIsR0FBUSxNQUFSLFdBQVEsQ0FBRUosVUFBZCxFQUEwQjtNQUN4QixPQUFPSSxRQUFRLENBQUNKLFVBQVQsQ0FBbUJLLEtBQW5CLFdBQVFDLGVBQVlMLE9BQVosRUFBcUJDLE9BQXJCLEdBQTRCSyxPQUFLSixJQUFMLENBQTVCLENBQVIsQ0FBUDtJQUNEOztJQUNELE9BQU9ILFVBQVUsTUFBVixDQUFVLE1BQVYsRUFBVU0sZUFBQ0wsT0FBRCxFQUFVQyxPQUFWLEdBQWlCSyxPQUFLSixJQUFMLENBQWpCLENBQVYsQ0FBUDtFQUNELENBTlMsQ0FIb0M7RUFVOUNLLFlBQVk7SUFBQTtNQUFBO0lBQUE7O0lBQUE7TUFBQTtJQUFBOztJQUFBO0VBQUEsRUFBWixVQUFhQyxNQUFiLEVBQW1CO0lBQ1QsWUFBUSxHQUFLVix3QkFBZUssUUFBNUI7SUFDUixPQUFPLENBQUMsU0FBUSxTQUFSLFlBQVEsV0FBUixHQUFRLE1BQVIsV0FBUSxDQUFFSSxZQUFWLEtBQTBCQSxZQUEzQixFQUF5Q0MsTUFBekMsQ0FBUDtFQUNELENBSFcsQ0FWa0M7RUFjOUNMLFFBQVEsRUFBRU07QUFkb0MsQ0FBbkMiLCJuYW1lcyI6WyJleHBvcnRzIiwic2V0VGltZW91dCIsImhhbmRsZXIiLCJ0aW1lb3V0IiwiYXJncyIsImRlbGVnYXRlIiwiYXBwbHkiLCJfX3NwcmVhZEFycmF5IiwiX19yZWFkIiwiY2xlYXJUaW1lb3V0IiwiaGFuZGxlIiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{}],190:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iterator = exports.getSymbolIterator = void 0;

function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }

  return Symbol.iterator;
}

exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFNBQWdCQSxpQkFBaEIsR0FBaUM7RUFDL0IsSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLENBQUNBLE1BQU0sQ0FBQ0MsUUFBNUMsRUFBc0Q7SUFDcEQsT0FBTyxZQUFQO0VBQ0Q7O0VBRUQsT0FBT0QsTUFBTSxDQUFDQyxRQUFkO0FBQ0Q7O0FBTkRDO0FBUWFBLG1CQUFXSCxpQkFBaUIsRUFBNUIiLCJuYW1lcyI6WyJnZXRTeW1ib2xJdGVyYXRvciIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvc3ltYm9sL2l0ZXJhdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{}],191:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observable = void 0;

exports.observable = function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNhQSxxQkFBK0I7RUFBTSxPQUFDLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE1BQU0sQ0FBQ0MsVUFBeEMsSUFBdUQsY0FBdkQ7QUFBcUUsQ0FBNUUsRUFBOUIiLCJuYW1lcyI6WyJleHBvcnRzIiwiU3ltYm9sIiwib2JzZXJ2YWJsZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvc3ltYm9sL29ic2VydmFibGUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{}],192:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IiIsIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W119
},{}],193:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArgumentOutOfRangeError = void 0;

var createErrorClass_1 = require("./createErrorClass");

exports.ArgumentOutOfRangeError = createErrorClass_1.createErrorClass(function (_super) {
  return function ArgumentOutOfRangeErrorImpl() {
    _super(this);

    this.name = 'ArgumentOutOfRangeError';
    this.message = 'argument out of range';
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQXNCYUEsa0NBQXVEQyxvQ0FDbEUsVUFBQ0MsTUFBRCxFQUFPO0VBQ0wsZ0JBQVNDLDJCQUFULEdBQW9DO0lBQ2xDRCxNQUFNLENBQUMsSUFBRCxDQUFOOztJQUNBLEtBQUtFLElBQUwsR0FBWSx5QkFBWjtJQUNBLEtBQUtDLE9BQUwsR0FBZSx1QkFBZjtFQUNELENBSkQ7QUFJQyxDQU4rRCxDQUF2RCIsIm5hbWVzIjpbImV4cG9ydHMiLCJjcmVhdGVFcnJvckNsYXNzXzEiLCJfc3VwZXIiLCJBcmd1bWVudE91dE9mUmFuZ2VFcnJvckltcGwiLCJuYW1lIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvdXRpbC9Bcmd1bWVudE91dE9mUmFuZ2VFcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./createErrorClass":204}],194:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyError = void 0;

var createErrorClass_1 = require("./createErrorClass");

exports.EmptyError = createErrorClass_1.createErrorClass(function (_super) {
  return function EmptyErrorImpl() {
    _super(this);

    this.name = 'EmptyError';
    this.message = 'no elements in sequence';
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQXdCYUEscUJBQTZCQyxvQ0FBaUIsVUFBQ0MsTUFBRCxFQUFPO0VBQUssZ0JBQVNDLGNBQVQsR0FBdUI7SUFDNUZELE1BQU0sQ0FBQyxJQUFELENBQU47O0lBQ0EsS0FBS0UsSUFBTCxHQUFZLFlBQVo7SUFDQSxLQUFLQyxPQUFMLEdBQWUseUJBQWY7RUFDRCxDQUpzRTtBQUl0RSxDQUp5QyxDQUE3QiIsIm5hbWVzIjpbImV4cG9ydHMiLCJjcmVhdGVFcnJvckNsYXNzXzEiLCJfc3VwZXIiLCJFbXB0eUVycm9ySW1wbCIsIm5hbWUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL0VtcHR5RXJyb3IudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./createErrorClass":204}],195:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestTools = exports.Immediate = void 0;
var nextHandle = 1;
var resolved;
var activeHandles = {};

function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }

  return false;
}

exports.Immediate = {
  setImmediate: function setImmediate(cb) {
    var handle = nextHandle++;
    activeHandles[handle] = true;

    if (!resolved) {
      resolved = Promise.resolve();
    }

    resolved.then(function () {
      return findAndClearHandle(handle) && cb();
    });
    return handle;
  },
  clearImmediate: function clearImmediate(handle) {
    findAndClearHandle(handle);
  }
};
exports.TestTools = {
  pending: function pending() {
    return Object.keys(activeHandles).length;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHLENBQWpCO0FBRUEsSUFBSUMsUUFBSjtBQUNBLElBQU1DLGFBQWEsR0FBMkIsRUFBOUM7O0FBT0EsU0FBU0Msa0JBQVQsQ0FBNEJDLE1BQTVCLEVBQTBDO0VBQ3hDLElBQUlBLE1BQU0sSUFBSUYsYUFBZCxFQUE2QjtJQUMzQixPQUFPQSxhQUFhLENBQUNFLE1BQUQsQ0FBcEI7SUFDQSxPQUFPLElBQVA7RUFDRDs7RUFDRCxPQUFPLEtBQVA7QUFDRDs7QUFLWUMsb0JBQVk7RUFDdkJDLFlBQVksRUFBWixzQkFBYUMsRUFBYixFQUEyQjtJQUN6QixJQUFNSCxNQUFNLEdBQUdKLFVBQVUsRUFBekI7SUFDQUUsYUFBYSxDQUFDRSxNQUFELENBQWIsR0FBd0IsSUFBeEI7O0lBQ0EsSUFBSSxDQUFDSCxRQUFMLEVBQWU7TUFDYkEsUUFBUSxHQUFHTyxPQUFPLENBQUNDLE9BQVIsRUFBWDtJQUNEOztJQUNEUixRQUFRLENBQUNTLElBQVQsQ0FBYztNQUFNLHlCQUFrQixDQUFDTixNQUFELENBQWxCLElBQThCRyxFQUFFLEVBQWhDO0lBQWtDLENBQXREO0lBQ0EsT0FBT0gsTUFBUDtFQUNELENBVHNCO0VBV3ZCTyxjQUFjLEVBQWQsd0JBQWVQLE1BQWYsRUFBNkI7SUFDM0JELGtCQUFrQixDQUFDQyxNQUFELENBQWxCO0VBQ0Q7QUFic0IsQ0FBWjtBQW1CQUMsb0JBQVk7RUFDdkJPLE9BQU87SUFDTCxPQUFPQyxNQUFNLENBQUNDLElBQVAsQ0FBWVosYUFBWixFQUEyQmEsTUFBbEM7RUFDRDtBQUhzQixDQUFaIiwibmFtZXMiOlsibmV4dEhhbmRsZSIsInJlc29sdmVkIiwiYWN0aXZlSGFuZGxlcyIsImZpbmRBbmRDbGVhckhhbmRsZSIsImhhbmRsZSIsImV4cG9ydHMiLCJzZXRJbW1lZGlhdGUiLCJjYiIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsImNsZWFySW1tZWRpYXRlIiwicGVuZGluZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvSW1tZWRpYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{}],196:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundError = void 0;

var createErrorClass_1 = require("./createErrorClass");

exports.NotFoundError = createErrorClass_1.createErrorClass(function (_super) {
  return function NotFoundErrorImpl(message) {
    _super(this);

    this.name = 'NotFoundError';
    this.message = message;
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQW9CYUEsd0JBQW1DQyxvQ0FDOUMsVUFBQ0MsTUFBRCxFQUFPO0VBQ0wsZ0JBQVNDLGlCQUFULENBQXNDQyxPQUF0QyxFQUFxRDtJQUNuREYsTUFBTSxDQUFDLElBQUQsQ0FBTjs7SUFDQSxLQUFLRyxJQUFMLEdBQVksZUFBWjtJQUNBLEtBQUtELE9BQUwsR0FBZUEsT0FBZjtFQUNELENBSkQ7QUFJQyxDQU4yQyxDQUFuQyIsIm5hbWVzIjpbImV4cG9ydHMiLCJjcmVhdGVFcnJvckNsYXNzXzEiLCJfc3VwZXIiLCJOb3RGb3VuZEVycm9ySW1wbCIsIm1lc3NhZ2UiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL05vdEZvdW5kRXJyb3IudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./createErrorClass":204}],197:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectUnsubscribedError = void 0;

var createErrorClass_1 = require("./createErrorClass");

exports.ObjectUnsubscribedError = createErrorClass_1.createErrorClass(function (_super) {
  return function ObjectUnsubscribedErrorImpl() {
    _super(this);

    this.name = 'ObjectUnsubscribedError';
    this.message = 'object unsubscribed';
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQXFCYUEsa0NBQXVEQyxvQ0FDbEUsVUFBQ0MsTUFBRCxFQUFPO0VBQ0wsZ0JBQVNDLDJCQUFULEdBQW9DO0lBQ2xDRCxNQUFNLENBQUMsSUFBRCxDQUFOOztJQUNBLEtBQUtFLElBQUwsR0FBWSx5QkFBWjtJQUNBLEtBQUtDLE9BQUwsR0FBZSxxQkFBZjtFQUNELENBSkQ7QUFJQyxDQU4rRCxDQUF2RCIsIm5hbWVzIjpbImV4cG9ydHMiLCJjcmVhdGVFcnJvckNsYXNzXzEiLCJfc3VwZXIiLCJPYmplY3RVbnN1YnNjcmliZWRFcnJvckltcGwiLCJuYW1lIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./createErrorClass":204}],198:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SequenceError = void 0;

var createErrorClass_1 = require("./createErrorClass");

exports.SequenceError = createErrorClass_1.createErrorClass(function (_super) {
  return function SequenceErrorImpl(message) {
    _super(this);

    this.name = 'SequenceError';
    this.message = message;
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQW9CYUEsd0JBQW1DQyxvQ0FDOUMsVUFBQ0MsTUFBRCxFQUFPO0VBQ0wsZ0JBQVNDLGlCQUFULENBQXNDQyxPQUF0QyxFQUFxRDtJQUNuREYsTUFBTSxDQUFDLElBQUQsQ0FBTjs7SUFDQSxLQUFLRyxJQUFMLEdBQVksZUFBWjtJQUNBLEtBQUtELE9BQUwsR0FBZUEsT0FBZjtFQUNELENBSkQ7QUFJQyxDQU4yQyxDQUFuQyIsIm5hbWVzIjpbImV4cG9ydHMiLCJjcmVhdGVFcnJvckNsYXNzXzEiLCJfc3VwZXIiLCJTZXF1ZW5jZUVycm9ySW1wbCIsIm1lc3NhZ2UiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL1NlcXVlbmNlRXJyb3IudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./createErrorClass":204}],199:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsubscriptionError = void 0;

var createErrorClass_1 = require("./createErrorClass");

exports.UnsubscriptionError = createErrorClass_1.createErrorClass(function (_super) {
  return function UnsubscriptionErrorImpl(errors) {
    _super(this);

    this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
      return i + 1 + ") " + err.toString();
    }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQWtCYUEsOEJBQStDQyxvQ0FDMUQsVUFBQ0MsTUFBRCxFQUFPO0VBQ0wsZ0JBQVNDLHVCQUFULENBQTRDQyxNQUE1QyxFQUFzRTtJQUNwRUYsTUFBTSxDQUFDLElBQUQsQ0FBTjs7SUFDQSxLQUFLRyxPQUFMLEdBQWVELE1BQU0sR0FDZEEsTUFBTSxDQUFDRSxNQUFQLEdBQWEsMkNBQWIsR0FDWEYsTUFBTSxDQUFDRyxHQUFQLENBQVcsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQU87TUFBSyxPQUFHQSxDQUFDLEdBQUcsQ0FBSixHQUFLLElBQUwsR0FBVUQsR0FBRyxDQUFDRSxRQUFKLEVBQWI7SUFBNkIsQ0FBcEQsRUFBc0RDLElBQXRELENBQTJELE1BQTNELENBRnlCLEdBR2pCLEVBSEo7SUFJQSxLQUFLQyxJQUFMLEdBQVkscUJBQVo7SUFDQSxLQUFLUixNQUFMLEdBQWNBLE1BQWQ7RUFDRCxDQVJEO0FBUUMsQ0FWdUQsQ0FBL0MiLCJuYW1lcyI6WyJleHBvcnRzIiwiY3JlYXRlRXJyb3JDbGFzc18xIiwiX3N1cGVyIiwiVW5zdWJzY3JpcHRpb25FcnJvckltcGwiLCJlcnJvcnMiLCJtZXNzYWdlIiwibGVuZ3RoIiwibWFwIiwiZXJyIiwiaSIsInRvU3RyaW5nIiwiam9pbiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./createErrorClass":204}],200:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.popNumber = exports.popScheduler = exports.popResultSelector = void 0;

var isFunction_1 = require("./isFunction");

var isScheduler_1 = require("./isScheduler");

function last(arr) {
  return arr[arr.length - 1];
}

function popResultSelector(args) {
  return isFunction_1.isFunction(last(args)) ? args.pop() : undefined;
}

exports.popResultSelector = popResultSelector;

function popScheduler(args) {
  return isScheduler_1.isScheduler(last(args)) ? args.pop() : undefined;
}

exports.popScheduler = popScheduler;

function popNumber(args, defaultValue) {
  return typeof last(args) === 'number' ? args.pop() : defaultValue;
}

exports.popNumber = popNumber;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUVBLFNBQVNBLElBQVQsQ0FBaUJDLEdBQWpCLEVBQXlCO0VBQ3ZCLE9BQU9BLEdBQUcsQ0FBQ0EsR0FBRyxDQUFDQyxNQUFKLEdBQWEsQ0FBZCxDQUFWO0FBQ0Q7O0FBRUQsU0FBZ0JDLGlCQUFoQixDQUFrQ0MsSUFBbEMsRUFBNkM7RUFDM0MsT0FBT0Msd0JBQVdMLElBQUksQ0FBQ0ksSUFBRCxDQUFmLElBQXlCQSxJQUFJLENBQUNFLEdBQUwsRUFBekIsR0FBc0NDLFNBQTdDO0FBQ0Q7O0FBRkRDOztBQUlBLFNBQWdCQyxZQUFoQixDQUE2QkwsSUFBN0IsRUFBd0M7RUFDdEMsT0FBT00sMEJBQVlWLElBQUksQ0FBQ0ksSUFBRCxDQUFoQixJQUEwQkEsSUFBSSxDQUFDRSxHQUFMLEVBQTFCLEdBQXVDQyxTQUE5QztBQUNEOztBQUZEQzs7QUFJQSxTQUFnQkcsU0FBaEIsQ0FBMEJQLElBQTFCLEVBQXVDUSxZQUF2QyxFQUEyRDtFQUN6RCxPQUFPLE9BQU9aLElBQUksQ0FBQ0ksSUFBRCxDQUFYLEtBQXNCLFFBQXRCLEdBQWlDQSxJQUFJLENBQUNFLEdBQUwsRUFBakMsR0FBK0NNLFlBQXREO0FBQ0Q7O0FBRkRKIiwibmFtZXMiOlsibGFzdCIsImFyciIsImxlbmd0aCIsInBvcFJlc3VsdFNlbGVjdG9yIiwiYXJncyIsImlzRnVuY3Rpb25fMSIsInBvcCIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJwb3BTY2hlZHVsZXIiLCJpc1NjaGVkdWxlcl8xIiwicG9wTnVtYmVyIiwiZGVmYXVsdFZhbHVlIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL2FyZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./isFunction":212,"./isScheduler":218}],201:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.argsArgArrayOrObject = void 0;
var isArray = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf,
    objectProto = Object.prototype,
    getKeys = Object.keys;

function argsArgArrayOrObject(args) {
  if (args.length === 1) {
    var first_1 = args[0];

    if (isArray(first_1)) {
      return {
        args: first_1,
        keys: null
      };
    }

    if (isPOJO(first_1)) {
      var keys = getKeys(first_1);
      return {
        args: keys.map(function (key) {
          return first_1[key];
        }),
        keys: keys
      };
    }
  }

  return {
    args: args,
    keys: null
  };
}

exports.argsArgArrayOrObject = argsArgArrayOrObject;

function isPOJO(obj) {
  return obj && _typeof(obj) === 'object' && getPrototypeOf(obj) === objectProto;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBUSxXQUFPLEdBQUtBLEtBQUssUUFBakI7QUFDQSxrQkFBYyxHQUE0Q0MsTUFBTSxlQUFoRTtBQUFBLElBQTJCQyxXQUFXLEdBQW9CRCxNQUFNLFVBQWhFO0FBQUEsSUFBOENFLE9BQU8sR0FBS0YsTUFBTSxLQUFoRTs7QUFRUixTQUFnQkcsb0JBQWhCLENBQXFFQyxJQUFyRSxFQUE0RjtFQUMxRixJQUFJQSxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7SUFDckIsSUFBTUMsT0FBSyxHQUFHRixJQUFJLENBQUMsQ0FBRCxDQUFsQjs7SUFDQSxJQUFJRyxPQUFPLENBQUNELE9BQUQsQ0FBWCxFQUFvQjtNQUNsQixPQUFPO1FBQUVGLElBQUksRUFBRUUsT0FBUjtRQUFlRSxJQUFJLEVBQUU7TUFBckIsQ0FBUDtJQUNEOztJQUNELElBQUlDLE1BQU0sQ0FBQ0gsT0FBRCxDQUFWLEVBQW1CO01BQ2pCLElBQU1FLElBQUksR0FBR04sT0FBTyxDQUFDSSxPQUFELENBQXBCO01BQ0EsT0FBTztRQUNMRixJQUFJLEVBQUVJLElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLEdBQUQsRUFBSTtVQUFLLGNBQUssQ0FBQ0EsR0FBRCxDQUFMO1FBQVUsQ0FBNUIsQ0FERDtRQUVMSCxJQUFJO01BRkMsQ0FBUDtJQUlEO0VBQ0Y7O0VBRUQsT0FBTztJQUFFSixJQUFJLEVBQUVBLElBQVI7SUFBcUJJLElBQUksRUFBRTtFQUEzQixDQUFQO0FBQ0Q7O0FBaEJESTs7QUFrQkEsU0FBU0gsTUFBVCxDQUFnQkksR0FBaEIsRUFBd0I7RUFDdEIsT0FBT0EsR0FBRyxJQUFJLFFBQU9BLEdBQVAsTUFBZSxRQUF0QixJQUFrQ0MsY0FBYyxDQUFDRCxHQUFELENBQWQsS0FBd0JaLFdBQWpFO0FBQ0QiLCJuYW1lcyI6WyJBcnJheSIsIk9iamVjdCIsIm9iamVjdFByb3RvIiwiZ2V0S2V5cyIsImFyZ3NBcmdBcnJheU9yT2JqZWN0IiwiYXJncyIsImxlbmd0aCIsImZpcnN0XzEiLCJpc0FycmF5Iiwia2V5cyIsImlzUE9KTyIsIm1hcCIsImtleSIsImV4cG9ydHMiLCJvYmoiLCJnZXRQcm90b3R5cGVPZiJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvdXRpbC9hcmdzQXJnQXJyYXlPck9iamVjdC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{}],202:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.argsOrArgArray = void 0;
var isArray = Array.isArray;

function argsOrArgArray(args) {
  return args.length === 1 && isArray(args[0]) ? args[0] : args;
}

exports.argsOrArgArray = argsOrArgArray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQVEsV0FBTyxHQUFLQSxLQUFLLFFBQWpCOztBQU1SLFNBQWdCQyxjQUFoQixDQUFrQ0MsSUFBbEMsRUFBbUQ7RUFDakQsT0FBT0EsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLENBQWhCLElBQXFCQyxPQUFPLENBQUNGLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBNUIsR0FBd0NBLElBQUksQ0FBQyxDQUFELENBQTVDLEdBQW1EQSxJQUExRDtBQUNEOztBQUZERyIsIm5hbWVzIjpbIkFycmF5IiwiYXJnc09yQXJnQXJyYXkiLCJhcmdzIiwibGVuZ3RoIiwiaXNBcnJheSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvYXJnc09yQXJnQXJyYXkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{}],203:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrRemove = void 0;

function arrRemove(arr, item) {
  if (arr) {
    var index = arr.indexOf(item);
    0 <= index && arr.splice(index, 1);
  }
}

exports.arrRemove = arrRemove;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUtBLFNBQWdCQSxTQUFoQixDQUE2QkMsR0FBN0IsRUFBMERDLElBQTFELEVBQWlFO0VBQy9ELElBQUlELEdBQUosRUFBUztJQUNQLElBQU1FLEtBQUssR0FBR0YsR0FBRyxDQUFDRyxPQUFKLENBQVlGLElBQVosQ0FBZDtJQUNBLEtBQUtDLEtBQUwsSUFBY0YsR0FBRyxDQUFDSSxNQUFKLENBQVdGLEtBQVgsRUFBa0IsQ0FBbEIsQ0FBZDtFQUNEO0FBQ0Y7O0FBTERHIiwibmFtZXMiOlsiYXJyUmVtb3ZlIiwiYXJyIiwiaXRlbSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvYXJyUmVtb3ZlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{}],204:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createErrorClass = void 0;

function createErrorClass(createImpl) {
  var _super = function _super(instance) {
    Error.call(instance);
    instance.stack = new Error().stack;
  };

  var ctorFunc = createImpl(_super);
  ctorFunc.prototype = Object.create(Error.prototype);
  ctorFunc.prototype.constructor = ctorFunc;
  return ctorFunc;
}

exports.createErrorClass = createErrorClass;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVNBLFNBQWdCQSxnQkFBaEIsQ0FBb0NDLFVBQXBDLEVBQW9FO0VBQ2xFLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLFFBQUQsRUFBYztJQUMzQkMsS0FBSyxDQUFDQyxJQUFOLENBQVdGLFFBQVg7SUFDQUEsUUFBUSxDQUFDRyxLQUFULEdBQWlCLElBQUlGLEtBQUosR0FBWUUsS0FBN0I7RUFDRCxDQUhEOztFQUtBLElBQU1DLFFBQVEsR0FBR04sVUFBVSxDQUFDQyxNQUFELENBQTNCO0VBQ0FLLFFBQVEsQ0FBQ0MsU0FBVCxHQUFxQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNOLEtBQUssQ0FBQ0ksU0FBcEIsQ0FBckI7RUFDQUQsUUFBUSxDQUFDQyxTQUFULENBQW1CRyxXQUFuQixHQUFpQ0osUUFBakM7RUFDQSxPQUFPQSxRQUFQO0FBQ0Q7O0FBVkRLIiwibmFtZXMiOlsiY3JlYXRlRXJyb3JDbGFzcyIsImNyZWF0ZUltcGwiLCJfc3VwZXIiLCJpbnN0YW5jZSIsIkVycm9yIiwiY2FsbCIsInN0YWNrIiwiY3RvckZ1bmMiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJjb25zdHJ1Y3RvciIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvY3JlYXRlRXJyb3JDbGFzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{}],205:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createObject = void 0;

function createObject(keys, values) {
  return keys.reduce(function (result, key, i) {
    return result[key] = values[i], result;
  }, {});
}

exports.createObject = createObject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFNBQWdCQSxZQUFoQixDQUE2QkMsSUFBN0IsRUFBNkNDLE1BQTdDLEVBQTBEO0VBQ3hELE9BQU9ELElBQUksQ0FBQ0UsTUFBTCxDQUFZLFVBQUNDLE1BQUQsRUFBU0MsR0FBVCxFQUFjQyxDQUFkLEVBQWU7SUFBSyxPQUFFRixNQUFNLENBQUNDLEdBQUQsQ0FBTixHQUFjSCxNQUFNLENBQUNJLENBQUQsQ0FBckIsRUFBMkJGLE1BQTVCO0VBQW1DLENBQW5FLEVBQXFFLEVBQXJFLENBQVA7QUFDRDs7QUFGREciLCJuYW1lcyI6WyJjcmVhdGVPYmplY3QiLCJrZXlzIiwidmFsdWVzIiwicmVkdWNlIiwicmVzdWx0Iiwia2V5IiwiaSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvY3JlYXRlT2JqZWN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{}],206:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.captureError = exports.errorContext = void 0;

var config_1 = require("../config");

var context = null;

function errorContext(cb) {
  if (config_1.config.useDeprecatedSynchronousErrorHandling) {
    var isRoot = !context;

    if (isRoot) {
      context = {
        errorThrown: false,
        error: null
      };
    }

    cb();

    if (isRoot) {
      var _a = context,
          errorThrown = _a.errorThrown,
          error = _a.error;
      context = null;

      if (errorThrown) {
        throw error;
      }
    }
  } else {
    cb();
  }
}

exports.errorContext = errorContext;

function captureError(err) {
  if (config_1.config.useDeprecatedSynchronousErrorHandling && context) {
    context.errorThrown = true;
    context.error = err;
  }
}

exports.captureError = captureError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQUlBLE9BQU8sR0FBZ0QsSUFBM0Q7O0FBU0EsU0FBZ0JDLFlBQWhCLENBQTZCQyxFQUE3QixFQUEyQztFQUN6QyxJQUFJQyxnQkFBT0MscUNBQVgsRUFBa0Q7SUFDaEQsSUFBTUMsTUFBTSxHQUFHLENBQUNMLE9BQWhCOztJQUNBLElBQUlLLE1BQUosRUFBWTtNQUNWTCxPQUFPLEdBQUc7UUFBRU0sV0FBVyxFQUFFLEtBQWY7UUFBc0JDLEtBQUssRUFBRTtNQUE3QixDQUFWO0lBQ0Q7O0lBQ0RMLEVBQUU7O0lBQ0YsSUFBSUcsTUFBSixFQUFZO01BQ0osU0FBeUJMLE9BQXpCO01BQUEsSUFBRU0sV0FBVyxpQkFBYjtNQUFBLElBQWVDLEtBQUssV0FBcEI7TUFDTlAsT0FBTyxHQUFHLElBQVY7O01BQ0EsSUFBSU0sV0FBSixFQUFpQjtRQUNmLE1BQU1DLEtBQU47TUFDRDtJQUNGO0VBQ0YsQ0FiRCxNQWFPO0lBR0xMLEVBQUU7RUFDSDtBQUNGOztBQW5CRE07O0FBeUJBLFNBQWdCQyxZQUFoQixDQUE2QkMsR0FBN0IsRUFBcUM7RUFDbkMsSUFBSVAsZ0JBQU9DLHFDQUFQLElBQWdESixPQUFwRCxFQUE2RDtJQUMzREEsT0FBTyxDQUFDTSxXQUFSLEdBQXNCLElBQXRCO0lBQ0FOLE9BQU8sQ0FBQ08sS0FBUixHQUFnQkcsR0FBaEI7RUFDRDtBQUNGOztBQUxERiIsIm5hbWVzIjpbImNvbnRleHQiLCJlcnJvckNvbnRleHQiLCJjYiIsImNvbmZpZ18xIiwidXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyIsImlzUm9vdCIsImVycm9yVGhyb3duIiwiZXJyb3IiLCJleHBvcnRzIiwiY2FwdHVyZUVycm9yIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL2Vycm9yQ29udGV4dC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../config":14}],207:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeSchedule = void 0;

function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
  if (delay === void 0) {
    delay = 0;
  }

  if (repeat === void 0) {
    repeat = false;
  }

  var scheduleSubscription = scheduler.schedule(function () {
    work();

    if (repeat) {
      parentSubscription.add(this.schedule(null, delay));
    } else {
      this.unsubscribe();
    }
  }, delay);
  parentSubscription.add(scheduleSubscription);

  if (!repeat) {
    return scheduleSubscription;
  }
}

exports.executeSchedule = executeSchedule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWtCQSxTQUFnQkEsZUFBaEIsQ0FDRUMsa0JBREYsRUFFRUMsU0FGRixFQUdFQyxJQUhGLEVBSUVDLEtBSkYsRUFLRUMsTUFMRixFQUtnQjtFQURkO0lBQUFEO0VBQVM7O0VBQ1Q7SUFBQUM7RUFBYzs7RUFFZCxJQUFNQyxvQkFBb0IsR0FBR0osU0FBUyxDQUFDSyxRQUFWLENBQW1CO0lBQzlDSixJQUFJOztJQUNKLElBQUlFLE1BQUosRUFBWTtNQUNWSixrQkFBa0IsQ0FBQ08sR0FBbkIsQ0FBdUIsS0FBS0QsUUFBTCxDQUFjLElBQWQsRUFBb0JILEtBQXBCLENBQXZCO0lBQ0QsQ0FGRCxNQUVPO01BQ0wsS0FBS0ssV0FBTDtJQUNEO0VBQ0YsQ0FQNEIsRUFPMUJMLEtBUDBCLENBQTdCO0VBU0FILGtCQUFrQixDQUFDTyxHQUFuQixDQUF1QkYsb0JBQXZCOztFQUVBLElBQUksQ0FBQ0QsTUFBTCxFQUFhO0lBS1gsT0FBT0Msb0JBQVA7RUFDRDtBQUNGOztBQXpCREkiLCJuYW1lcyI6WyJleGVjdXRlU2NoZWR1bGUiLCJwYXJlbnRTdWJzY3JpcHRpb24iLCJzY2hlZHVsZXIiLCJ3b3JrIiwiZGVsYXkiLCJyZXBlYXQiLCJzY2hlZHVsZVN1YnNjcmlwdGlvbiIsInNjaGVkdWxlIiwiYWRkIiwidW5zdWJzY3JpYmUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL2V4ZWN1dGVTY2hlZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{}],208:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identity = void 0;

function identity(x) {
  return x;
}

exports.identity = identity;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQTBDQSxTQUFnQkEsUUFBaEIsQ0FBNEJDLENBQTVCLEVBQWdDO0VBQzlCLE9BQU9BLENBQVA7QUFDRDs7QUFGREMiLCJuYW1lcyI6WyJpZGVudGl0eSIsIngiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL2lkZW50aXR5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{}],209:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrayLike = void 0;

exports.isArrayLike = function (x) {
  return x && typeof x.length === 'number' && typeof x !== 'function';
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFhQSxzQkFBZSxVQUFJQyxDQUFKLEVBQVU7RUFBd0IsUUFBQyxJQUFJLE9BQU9BLENBQUMsQ0FBQ0MsTUFBVCxLQUFvQixRQUF6QixJQUFxQyxPQUFPRCxDQUFQLEtBQWEsVUFBbEQ7QUFBNEQsQ0FBN0ciLCJuYW1lcyI6WyJleHBvcnRzIiwieCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvdXRpbC9pc0FycmF5TGlrZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{}],210:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAsyncIterable = void 0;

var isFunction_1 = require("./isFunction");

function isAsyncIterable(obj) {
  return Symbol.asyncIterator && isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}

exports.isAsyncIterable = isAsyncIterable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLFNBQWdCQSxlQUFoQixDQUFtQ0MsR0FBbkMsRUFBMkM7RUFDekMsT0FBT0MsTUFBTSxDQUFDQyxhQUFQLElBQXdCQyx3QkFBV0gsR0FBRyxTQUFILE9BQUcsV0FBSCxHQUFHLE1BQUgsTUFBRyxDQUFHQyxNQUFNLENBQUNDLGFBQVYsQ0FBZCxDQUEvQjtBQUNEOztBQUZERSIsIm5hbWVzIjpbImlzQXN5bmNJdGVyYWJsZSIsIm9iaiIsIlN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJpc0Z1bmN0aW9uXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL2lzQXN5bmNJdGVyYWJsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./isFunction":212}],211:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidDate = void 0;

function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

exports.isValidDate = isValidDate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9BLFNBQWdCQSxXQUFoQixDQUE0QkMsS0FBNUIsRUFBc0M7RUFDcEMsT0FBT0EsS0FBSyxZQUFZQyxJQUFqQixJQUF5QixDQUFDQyxLQUFLLENBQUNGLEtBQUQsQ0FBdEM7QUFDRDs7QUFGREciLCJuYW1lcyI6WyJpc1ZhbGlkRGF0ZSIsInZhbHVlIiwiRGF0ZSIsImlzTmFOIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvdXRpbC9pc0RhdGUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{}],212:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = void 0;

function isFunction(value) {
  return typeof value === 'function';
}

exports.isFunction = isFunction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLFNBQWdCQSxVQUFoQixDQUEyQkMsS0FBM0IsRUFBcUM7RUFDbkMsT0FBTyxPQUFPQSxLQUFQLEtBQWlCLFVBQXhCO0FBQ0Q7O0FBRkRDIiwibmFtZXMiOlsiaXNGdW5jdGlvbiIsInZhbHVlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvdXRpbC9pc0Z1bmN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{}],213:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInteropObservable = void 0;

var observable_1 = require("../symbol/observable");

var isFunction_1 = require("./isFunction");

function isInteropObservable(input) {
  return isFunction_1.isFunction(input[observable_1.observable]);
}

exports.isInteropObservable = isInteropObservable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUdBLFNBQWdCQSxtQkFBaEIsQ0FBb0NDLEtBQXBDLEVBQThDO0VBQzVDLE9BQU9DLHdCQUFXRCxLQUFLLENBQUNFLHVCQUFELENBQWhCLENBQVA7QUFDRDs7QUFGREMiLCJuYW1lcyI6WyJpc0ludGVyb3BPYnNlcnZhYmxlIiwiaW5wdXQiLCJpc0Z1bmN0aW9uXzEiLCJvYnNlcnZhYmxlXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL2lzSW50ZXJvcE9ic2VydmFibGUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../symbol/observable":191,"./isFunction":212}],214:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIterable = void 0;

var iterator_1 = require("../symbol/iterator");

var isFunction_1 = require("./isFunction");

function isIterable(input) {
  return isFunction_1.isFunction(input === null || input === void 0 ? void 0 : input[iterator_1.iterator]);
}

exports.isIterable = isIterable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUdBLFNBQWdCQSxVQUFoQixDQUEyQkMsS0FBM0IsRUFBcUM7RUFDbkMsT0FBT0Msd0JBQVdELEtBQUssU0FBTCxTQUFLLFdBQUwsR0FBSyxNQUFMLFFBQUssQ0FBR0UsbUJBQUgsQ0FBaEIsQ0FBUDtBQUNEOztBQUZEQyIsIm5hbWVzIjpbImlzSXRlcmFibGUiLCJpbnB1dCIsImlzRnVuY3Rpb25fMSIsIml0ZXJhdG9yXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL2lzSXRlcmFibGUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../symbol/iterator":190,"./isFunction":212}],215:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObservable = void 0;

var Observable_1 = require("../Observable");

var isFunction_1 = require("./isFunction");

function isObservable(obj) {
  return !!obj && (obj instanceof Observable_1.Observable || isFunction_1.isFunction(obj.lift) && isFunction_1.isFunction(obj.subscribe));
}

exports.isObservable = isObservable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQU1BLFNBQWdCQSxZQUFoQixDQUE2QkMsR0FBN0IsRUFBcUM7RUFHbkMsT0FBTyxDQUFDLENBQUNBLEdBQUYsS0FBVUEsR0FBRyxZQUFZQyx1QkFBZixJQUE4QkMsd0JBQVdGLEdBQUcsQ0FBQ0csSUFBZixLQUF3QkQsd0JBQVdGLEdBQUcsQ0FBQ0ksU0FBZixDQUFoRSxDQUFQO0FBQ0Q7O0FBSkRDIiwibmFtZXMiOlsiaXNPYnNlcnZhYmxlIiwib2JqIiwiT2JzZXJ2YWJsZV8xIiwiaXNGdW5jdGlvbl8xIiwibGlmdCIsInN1YnNjcmliZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvaXNPYnNlcnZhYmxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"../Observable":8,"./isFunction":212}],216:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromise = void 0;

var isFunction_1 = require("./isFunction");

function isPromise(value) {
  return isFunction_1.isFunction(value === null || value === void 0 ? void 0 : value.then);
}

exports.isPromise = isPromise;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQU1BLFNBQWdCQSxTQUFoQixDQUEwQkMsS0FBMUIsRUFBb0M7RUFDbEMsT0FBT0Msd0JBQVdELEtBQUssU0FBTCxTQUFLLFdBQUwsR0FBSyxNQUFMLFFBQUssQ0FBRUUsSUFBbEIsQ0FBUDtBQUNEOztBQUZEQyIsIm5hbWVzIjpbImlzUHJvbWlzZSIsInZhbHVlIiwiaXNGdW5jdGlvbl8xIiwidGhlbiIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvaXNQcm9taXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"./isFunction":212}],217:[function(require,module,exports){
"use strict";

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __await = void 0 && (void 0).__await || function (v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = void 0 && (void 0).__asyncGenerator || function (thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isReadableStreamLike = exports.readableStreamLikeToAsyncGenerator = void 0;

var isFunction_1 = require("./isFunction");

function readableStreamLikeToAsyncGenerator(readableStream) {
  return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
    var reader, _a, value, done;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          reader = readableStream.getReader();
          _b.label = 1;

        case 1:
          _b.trys.push([1,, 9, 10]);

          _b.label = 2;

        case 2:
          if (!true) return [3, 8];
          return [4, __await(reader.read())];

        case 3:
          _a = _b.sent(), value = _a.value, done = _a.done;
          if (!done) return [3, 5];
          return [4, __await(void 0)];

        case 4:
          return [2, _b.sent()];

        case 5:
          return [4, __await(value)];

        case 6:
          return [4, _b.sent()];

        case 7:
          _b.sent();

          return [3, 2];

        case 8:
          return [3, 10];

        case 9:
          reader.releaseLock();
          return [7];

        case 10:
          return [2];
      }
    });
  });
}

exports.readableStreamLikeToAsyncGenerator = readableStreamLikeToAsyncGenerator;

function isReadableStreamLike(obj) {
  return isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}

exports.isReadableStreamLike = isReadableStreamLike;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQSxTQUF1QkEsa0NBQXZCLENBQTZEQyxjQUE3RCxFQUFrRzs7Ozs7OztVQUMxRkMsTUFBTSxHQUFHRCxjQUFjLENBQUNFLFNBQWYsRUFBVDs7Ozs7Ozs7O2VBRUcsTUFBSTtVQUNlLG1CQUFNRCxNQUFNLENBQUNFLElBQVAsRUFBTjs7O1VBQWxCQyxLQUFrQkMsU0FBbEIsRUFBRUMsS0FBSyxXQUFQLEVBQVNDLElBQUksVUFBYjtlQUNGQTs7OztVQUNGOzs7NkJBRUlEOzs7VUFBTjs7O1VBQUFEOzs7Ozs7OztVQUdGSixNQUFNLENBQUNPLFdBQVA7Ozs7Ozs7O0FBRUg7O0FBYkRDOztBQWVBLFNBQWdCQyxvQkFBaEIsQ0FBd0NDLEdBQXhDLEVBQWdEO0VBRzlDLE9BQU9DLHdCQUFXRCxHQUFHLFNBQUgsT0FBRyxXQUFILEdBQUcsTUFBSCxNQUFHLENBQUVULFNBQWhCLENBQVA7QUFDRDs7QUFKRE8iLCJuYW1lcyI6WyJyZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yIiwicmVhZGFibGVTdHJlYW0iLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJyZWFkIiwiX2EiLCJfYiIsInZhbHVlIiwiZG9uZSIsInJlbGVhc2VMb2NrIiwiZXhwb3J0cyIsImlzUmVhZGFibGVTdHJlYW1MaWtlIiwib2JqIiwiaXNGdW5jdGlvbl8xIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL2lzUmVhZGFibGVTdHJlYW1MaWtlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"./isFunction":212}],218:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isScheduler = void 0;

var isFunction_1 = require("./isFunction");

function isScheduler(value) {
  return value && isFunction_1.isFunction(value.schedule);
}

exports.isScheduler = isScheduler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUVBLFNBQWdCQSxXQUFoQixDQUE0QkMsS0FBNUIsRUFBc0M7RUFDcEMsT0FBT0EsS0FBSyxJQUFJQyx3QkFBV0QsS0FBSyxDQUFDRSxRQUFqQixDQUFoQjtBQUNEOztBQUZEQyIsIm5hbWVzIjpbImlzU2NoZWR1bGVyIiwidmFsdWUiLCJpc0Z1bmN0aW9uXzEiLCJzY2hlZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvaXNTY2hlZHVsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"./isFunction":212}],219:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.operate = exports.hasLift = void 0;

var isFunction_1 = require("./isFunction");

function hasLift(source) {
  return isFunction_1.isFunction(source === null || source === void 0 ? void 0 : source.lift);
}

exports.hasLift = hasLift;

function operate(init) {
  return function (source) {
    if (hasLift(source)) {
      return source.lift(function (liftedSource) {
        try {
          return init(liftedSource, this);
        } catch (err) {
          this.error(err);
        }
      });
    }

    throw new TypeError('Unable to lift unknown Observable type');
  };
}

exports.operate = operate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQUtBLFNBQWdCQSxPQUFoQixDQUF3QkMsTUFBeEIsRUFBbUM7RUFDakMsT0FBT0Msd0JBQVdELE1BQU0sU0FBTixVQUFNLFdBQU4sR0FBTSxNQUFOLFNBQU0sQ0FBRUUsSUFBbkIsQ0FBUDtBQUNEOztBQUZEQzs7QUFRQSxTQUFnQkMsT0FBaEIsQ0FDRUMsSUFERixFQUN1RjtFQUVyRixPQUFPLFVBQUNMLE1BQUQsRUFBc0I7SUFDM0IsSUFBSUQsT0FBTyxDQUFDQyxNQUFELENBQVgsRUFBcUI7TUFDbkIsT0FBT0EsTUFBTSxDQUFDRSxJQUFQLENBQVksVUFBK0JJLFlBQS9CLEVBQTBEO1FBQzNFLElBQUk7VUFDRixPQUFPRCxJQUFJLENBQUNDLFlBQUQsRUFBZSxJQUFmLENBQVg7UUFDRCxDQUZELENBRUUsT0FBT0MsR0FBUCxFQUFZO1VBQ1osS0FBS0MsS0FBTCxDQUFXRCxHQUFYO1FBQ0Q7TUFDRixDQU5NLENBQVA7SUFPRDs7SUFDRCxNQUFNLElBQUlFLFNBQUosQ0FBYyx3Q0FBZCxDQUFOO0VBQ0QsQ0FYRDtBQVlEOztBQWZETiIsIm5hbWVzIjpbImhhc0xpZnQiLCJzb3VyY2UiLCJpc0Z1bmN0aW9uXzEiLCJsaWZ0IiwiZXhwb3J0cyIsIm9wZXJhdGUiLCJpbml0IiwibGlmdGVkU291cmNlIiwiZXJyIiwiZXJyb3IiLCJUeXBlRXJyb3IiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvbGlmdC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"./isFunction":212}],220:[function(require,module,exports){
"use strict";

var __read = void 0 && (void 0).__read || function (o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
      ar.push(r.value);
    }
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapOneOrManyArgs = void 0;

var map_1 = require("../operators/map");

var isArray = Array.isArray;

function callOrApply(fn, args) {
  return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}

function mapOneOrManyArgs(fn) {
  return map_1.map(function (args) {
    return callOrApply(fn, args);
  });
}

exports.mapOneOrManyArgs = mapOneOrManyArgs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRVEsV0FBTyxHQUFLQSxLQUFLLFFBQWpCOztBQUVSLFNBQVNDLFdBQVQsQ0FBMkJDLEVBQTNCLEVBQXdEQyxJQUF4RCxFQUFtRTtFQUMvRCxPQUFPQyxPQUFPLENBQUNELElBQUQsQ0FBUCxHQUFnQkQsRUFBRSxNQUFGLENBQUUsTUFBRixFQUFFRyx5QkFBSUYsSUFBSixFQUFGLENBQWhCLEdBQThCRCxFQUFFLENBQUNDLElBQUQsQ0FBdkM7QUFDSDs7QUFNRCxTQUFnQkcsZ0JBQWhCLENBQXVDSixFQUF2QyxFQUFrRTtFQUM5RCxPQUFPSyxVQUFJLGdCQUFJO0lBQUksa0JBQVcsQ0FBQ0wsRUFBRCxFQUFLQyxJQUFMLENBQVg7RUFBcUIsQ0FBakMsQ0FBUDtBQUNIOztBQUZESyIsIm5hbWVzIjpbIkFycmF5IiwiY2FsbE9yQXBwbHkiLCJmbiIsImFyZ3MiLCJpc0FycmF5IiwiX19zcHJlYWRBcnJheSIsIm1hcE9uZU9yTWFueUFyZ3MiLCJtYXBfMSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvbWFwT25lT3JNYW55QXJncy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==
},{"../operators/map":95}],221:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noop = void 0;

function noop() {}

exports.noop = noop;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLFNBQWdCQSxJQUFoQixHQUFvQixDQUFNOztBQUExQkMiLCJuYW1lcyI6WyJub29wIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvdXRpbC9ub29wLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{}],222:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.not = void 0;

function not(pred, thisArg) {
  return function (value, index) {
    return !pred.call(thisArg, value, index);
  };
}

exports.not = not;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFNBQWdCQSxHQUFoQixDQUF1QkMsSUFBdkIsRUFBbUVDLE9BQW5FLEVBQStFO0VBQzdFLE9BQU8sVUFBQ0MsS0FBRCxFQUFXQyxLQUFYLEVBQXdCO0lBQUssUUFBQ0gsSUFBSSxDQUFDSSxJQUFMLENBQVVILE9BQVYsRUFBbUJDLEtBQW5CLEVBQTBCQyxLQUExQixDQUFEO0VBQWlDLENBQXJFO0FBQ0Q7O0FBRkRFIiwibmFtZXMiOlsibm90IiwicHJlZCIsInRoaXNBcmciLCJ2YWx1ZSIsImluZGV4IiwiY2FsbCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvbm90LnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{}],223:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pipeFromArray = exports.pipe = void 0;

var identity_1 = require("./identity");

function pipe() {
  var fns = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }

  return pipeFromArray(fns);
}

exports.pipe = pipe;

function pipeFromArray(fns) {
  if (fns.length === 0) {
    return identity_1.identity;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function piped(input) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, input);
  };
}

exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQTZFQSxTQUFnQkEsSUFBaEIsR0FBb0I7RUFBQzs7T0FBQSx5Q0FBc0M7SUFBdENDOzs7RUFDbkIsT0FBT0MsYUFBYSxDQUFDRCxHQUFELENBQXBCO0FBQ0Q7O0FBRkRFOztBQUtBLFNBQWdCRCxhQUFoQixDQUFvQ0QsR0FBcEMsRUFBbUU7RUFDakUsSUFBSUEsR0FBRyxDQUFDRyxNQUFKLEtBQWUsQ0FBbkIsRUFBc0I7SUFDcEIsT0FBT0MsbUJBQVA7RUFDRDs7RUFFRCxJQUFJSixHQUFHLENBQUNHLE1BQUosS0FBZSxDQUFuQixFQUFzQjtJQUNwQixPQUFPSCxHQUFHLENBQUMsQ0FBRCxDQUFWO0VBQ0Q7O0VBRUQsT0FBTyxTQUFTSyxLQUFULENBQWVDLEtBQWYsRUFBdUI7SUFDNUIsT0FBT04sR0FBRyxDQUFDTyxNQUFKLENBQVcsVUFBQ0MsSUFBRCxFQUFZQyxFQUFaLEVBQW1DO01BQUssU0FBRSxDQUFDRCxJQUFELENBQUY7SUFBUSxDQUEzRCxFQUE2REYsS0FBN0QsQ0FBUDtFQUNELENBRkQ7QUFHRDs7QUFaREoiLCJuYW1lcyI6WyJwaXBlIiwiZm5zIiwicGlwZUZyb21BcnJheSIsImV4cG9ydHMiLCJsZW5ndGgiLCJpZGVudGl0eV8xIiwicGlwZWQiLCJpbnB1dCIsInJlZHVjZSIsInByZXYiLCJmbiJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvdXRpbC9waXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19
},{"./identity":208}],224:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reportUnhandledError = void 0;

var config_1 = require("../config");

var timeoutProvider_1 = require("../scheduler/timeoutProvider");

function reportUnhandledError(err) {
  timeoutProvider_1.timeoutProvider.setTimeout(function () {
    var onUnhandledError = config_1.config.onUnhandledError;

    if (onUnhandledError) {
      onUnhandledError(err);
    } else {
      throw err;
    }
  });
}

exports.reportUnhandledError = reportUnhandledError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQVdBLFNBQWdCQSxvQkFBaEIsQ0FBcUNDLEdBQXJDLEVBQTZDO0VBQzNDQyxrQ0FBZ0JDLFVBQWhCLENBQTJCO0lBQ2pCLG9CQUFnQixHQUFLQyxnQkFBTUMsZ0JBQTNCOztJQUNSLElBQUlBLGdCQUFKLEVBQXNCO01BRXBCQSxnQkFBZ0IsQ0FBQ0osR0FBRCxDQUFoQjtJQUNELENBSEQsTUFHTztNQUVMLE1BQU1BLEdBQU47SUFDRDtFQUNGLENBVEQ7QUFVRDs7QUFYREsiLCJuYW1lcyI6WyJyZXBvcnRVbmhhbmRsZWRFcnJvciIsImVyciIsInRpbWVvdXRQcm92aWRlcl8xIiwic2V0VGltZW91dCIsImNvbmZpZ18xIiwib25VbmhhbmRsZWRFcnJvciIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvcmVwb3J0VW5oYW5kbGVkRXJyb3IudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{"../config":14,"../scheduler/timeoutProvider":189}],225:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInvalidObservableTypeError = void 0;

function createInvalidObservableTypeError(input) {
  return new TypeError("You provided " + (input !== null && _typeof(input) === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}

exports.createInvalidObservableTypeError = createInvalidObservableTypeError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUEsU0FBZ0JBLGdDQUFoQixDQUFpREMsS0FBakQsRUFBMkQ7RUFFekQsT0FBTyxJQUFJQyxTQUFKLENBQ0wsbUJBQ0VELEtBQUssS0FBSyxJQUFWLElBQWtCLFFBQU9BLEtBQVAsTUFBaUIsUUFBbkMsR0FBOEMsbUJBQTlDLEdBQW9FLE1BQUlBLEtBQUosR0FBUyxHQUQvRSxJQUNrRiwwSEFGN0UsQ0FBUDtBQUtEOztBQVBERSIsIm5hbWVzIjpbImNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yIiwiaW5wdXQiLCJUeXBlRXJyb3IiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL3Rocm93VW5vYnNlcnZhYmxlRXJyb3IudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=
},{}]},{},[1])