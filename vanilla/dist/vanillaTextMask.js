!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.vanillaTextMask=r():e.vanillaTextMask=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var r=e.inputElement,t=(0,i["default"])(e),n=function(e){var r=e.target.value;return t.update(r)};return r.addEventListener("input",n),{control:t,destroy:function(){r.removeEventListener("input",n)}}}Object.defineProperty(r,"__esModule",{value:!0}),r.maskInput=a;var o=t(5),i=n(o);r["default"]=a},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},r.maskingCharacters=["1","A","?","U","L","*"],r.placeholderChar="_"},function(e,r,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?d:arguments[0],r=arguments.length<=1||void 0===arguments[1]?f.placeholderChar:arguments[1];if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));for(var t=!1,n=d,a=0;a<e.length;a++){var o=e[a];"\\"!==o||t===!0?t!==!0?n+=f.maskingCharacters.indexOf(o)!==-1?r:o:(t=!1,n+=o):(t=!0,n+=d)}return n}function a(){var e=arguments.length<=0||void 0===arguments[0]?d:arguments[0];return e.split(d)}function o(){var e=arguments.length<=0||void 0===arguments[0]?d:arguments[0],r=arguments[1];switch(r){case f.maskingCharactersEnums.numeric:return u(e);case f.maskingCharactersEnums.uppercase:case f.maskingCharactersEnums.lowercase:case f.maskingCharactersEnums.alphabetic:return s(e);case f.maskingCharactersEnums.alphanumeric:return u(e)||s(e);case f.maskingCharactersEnums.any:return h.test(e)===!1;default:return!1}}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments[1];switch(r){case f.maskingCharactersEnums.uppercase:return e.toUpperCase();case f.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function u(e){return!isNaN(e)&&h.test(e)!==!0}function s(e){return p.test(e)}function l(e){return"string"==typeof e||e instanceof String}function c(e){return e&&void 0===e.length&&!isNaN(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.tokenize=a,r.isAcceptableChar=o,r.potentiallyTransformChar=i,r.isString=l,r.isNumber=c;var f=t(1),d="",h=/\s/g,p=/^[a-zA-Z]+$/},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?"":r,a=e.currentCaretPosition,o=void 0===a?0:a,i=e.conformedValue,u=e.rawValue,s=e.placeholderChar,l=e.placeholder,c=e.indexesOfPipedChars,f=void 0===c?n:c;if(0===o)return 0;var d=u.length,h=t.length,p=l.length,v=i.length,m=d-h,g=m>0,C=1===d,k=m>1&&!g&&!C;if(k)return o;var b=g&&(t===i||i===l),y=0;if(b?y=o-m:!function(){for(var e=i.toLowerCase(),r=u.toLowerCase(),t=r.substr(0,o).split(""),n=t.filter(function(r){return e.indexOf(r)!==-1}),a=n[n.length-1],s=f.map(function(r){return e[r]}),l=s.filter(function(e){return e===a}).length,c=n.filter(function(e){return e===a}).length,d=c+l,h=0,p=0;p<v;p++){var m=e[p];if(y=p+1,m===a&&h++,h>=d)break}}(),g){for(var P=y,w=y;w<=p;w++)if(l[w]===s&&(P=w),l[w]===s||w===p)return P}else for(var x=y;x>=0;x--)if(l[x-1]===s||0===x)return x}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=t;var n=[]},function(e,r,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments.length<=1||void 0===arguments[1]?"":arguments[1],t=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=t.guide,i=void 0===n||n,u=t.previousConformedValue,s=void 0===u?"":u,l=t.placeholderChar,c=void 0===l?o.placeholderChar:l,f=t.placeholder,d=void 0===f?(0,a.convertMaskToPlaceholder)(r,c):f,h=t.currentCaretPosition,p=t.keepCharPositions,v=i===!1&&void 0!==s,m=e.length,g=s.length,C=d.length,k=m-g,b=k>0,y=h+(b?-k:0),P=y+Math.abs(k);if(p===!0&&!b){for(var w="",x=y;x<P;x++)d[x]===c&&(w+=c);e=e.slice(0,y)+w+e.slice(y,m)}for(var j=r.replace(/\\./g," "),_=e.split("").map(function(e,r){return{"char":e,isNew:r>=y&&r<P}}),E=0,M=0;M<C;M++){var O=M>=y&&""!==s,V=(O?M+k:M)-E,T=_[V];void 0!==T&&d[M]===T["char"]&&T["char"]!==c&&(_.splice(V,1),E++)}var N="",S=!1;e:for(var A=0;A<C;A++){var L=d[A];if(L===c){if(_.length>0)for(;_.length>0;){var R=_.shift(),J=R["char"],U=R.isNew;if(J===c&&v!==!0){N+=c;continue e}if((0,a.isAcceptableChar)(J,j[A])){if(p===!0&&U!==!1&&""!==s&&i!==!1&&b){for(var z=_.length,I=null,Z=0;Z<z;Z++){var $=_[Z];if($["char"]!==c&&$.isNew===!1)break;if($["char"]===c){I=Z;break}}null!==I?(N+=(0,a.potentiallyTransformChar)(J,j[A]),_.splice(I,1)):A--}else N+=(0,a.potentiallyTransformChar)(J,j[A]);continue e}S=!0}v===!1&&(N+=d.substr(A,C));break}N+=L}if(v&&b===!1){for(var q=null,B=0;B<N.length;B++)d[B]===c&&(q=B);N=null!==q?N.substr(0,q+1):""}return{conformedValue:N,meta:{someCharsRejected:S}}}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=n;var a=t(2),o=t(1)},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var r=e.inputElement,t=e.mask,n=e.guide,a=e.pipe,u=e.placeholderChar,l=void 0===u?d.placeholderChar:u,h=e.onAccept,p=e.onReject,v=e.keepCharPositions,m=void 0!==v&&v,g={previousConformedValue:""},C=void 0,k=void 0;return(0,f.isString)(t)&&(C=(0,f.convertMaskToPlaceholder)(t,l)),""===r.placeholder&&r.setAttribute("placeholder",C),{state:g,update:function(){var e=arguments.length<=0||void 0===arguments[0]?r.value:arguments[0];if(e!==g.previousConformedValue){var u=i(e);"function"==typeof t?(k=t(u),C=(0,f.convertMaskToPlaceholder)(k,l)):k=t;var d=r.selectionStart,v=g.previousConformedValue,b={previousConformedValue:v,guide:n,placeholderChar:l,pipe:a,placeholder:C,currentCaretPosition:d,keepCharPositions:m},y=(0,c["default"])(u,k,b),P=y.conformedValue,w=y.meta.someCharsRejected,x="function"==typeof a,j={};x&&(j=a(P,b),j===!1&&(j={value:v,rejected:!0}));var _=x?j.value:P,E=(0,s["default"])({previousConformedValue:v,conformedValue:_,placeholder:C,rawValue:u,currentCaretPosition:d,placeholderChar:l,indexesOfPipedChars:j.indexesOfPipedChars}),M=_===C&&0===E,O=M?"":_;r.value=O,o(r,E),g.previousConformedValue=O,"function"==typeof h&&O!==v&&h();var V=u.length<v.length;"function"==typeof p&&(w||j.rejected)&&V===!1&&p({conformedValue:_,pipeRejection:j.rejected,maskRejection:w})}}}}function o(e,r){document.activeElement===e&&e.setSelectionRange(r,r,"none")}function i(e){if((0,f.isString)(e))return e;if((0,f.isNumber)(e))return String(e);if(void 0===e||null===e)return"";throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=a;var u=t(3),s=n(u),l=t(4),c=n(l),f=t(2),d=t(1)}])});