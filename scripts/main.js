"use strict";function _instanceof(e,n){return null!=n&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](e):e instanceof n}function _classCallCheck(e,n){if(!_instanceof(e,n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}var minTimer=function(){function n(e){_classCallCheck(this,n),this.hour=document.querySelectorAll("".concat(e.hour)),this.min=document.querySelectorAll("".concat(e.min)),this.sec=document.querySelectorAll("".concat(e.sec)),this.separation=e.separation}return _createClass(n,[{key:"start",value:function(){var o=this;setInterval(function(){var e,n,t,r,s,i,a;e=new Date,n=e.getTimezoneOffset(),t=Math.floor(e/1e3-60*n),r=60*Math.ceil((e/1e3/60-n)/60/24)*60*24-t,s=("0"+~~(r/60/60)).slice(-2),i=("0"+~~(r/60%60)).slice(-2),a=("0"+~~(r%60)).slice(-2),o.separation?function(){for(var e=0;e<o.min.length;e++)o.hour[e].innerHTML="<span>".concat(s[0],"</span><span>").concat(s[1],"</span>"),o.min[e].innerHTML="<span>".concat(i[0],"</span><span>").concat(i[1],"</span>"),o.sec[e].innerHTML="<span>".concat(a[0],"</span><span>").concat(a[1],"</span>")}():function(){for(var e=0;e<o.min.length;e++)o.hour[e].innerHTML=s,o.min[e].innerHTML=i,o.sec[e].innerHTML=a}()},1e3)}}]),n}(),timer=new minTimer({hour:".t-hour",min:".t-min",sec:".t-sec",separation:!0}).start();$(document).on("click",'a[href^="#"]',function(e){var n=$(this).attr("href"),t=$(n);if(0!==t.length){e.preventDefault();var r=t.offset().top;$("body, html").animate({scrollTop:r})}}),$(".reviews__slider").slick({dots:!1,prevArrow:'<button type="button" class="slick-prev"><svg class="svg-arrow-prev-dims"><use xlink:href="#arrow-prev"></use></svg></button>',nextArrow:'<button type="button" class="slick-next"><svg class="svg-arrow-next-dims"><use xlink:href="#arrow-next"></use></svg></button>'});var currentSlide=$(".reviews__slider").slick("slickCurrentSlide"),currentSlideEl=$(".slideCurrent");$(document).on("ready",function(){currentSlideEl.text(currentSlide)}),$(".reviews__slider").on("beforeChange",function(e,n,t,r){currentSlideEl.text(r+1)});