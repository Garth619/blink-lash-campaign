window.wp=window.wp||{},function($,e){function t(){function t(){!E&&window.tinymce&&(E=window.tinymce,y=E.$,y(document).on("click",function(e){var t,n,i=y(e.target);i.hasClass("wp-switch-editor")&&(t=i.attr("data-wp-editor-id"),n=i.hasClass("switch-tmce")?"tmce":"html",r(t,n))}))}function n(e){var t=y(".mce-toolbar-grp",e.getContainer())[0],n=t&&t.clientHeight;return n&&n>10&&n<200?parseInt(n,10):30}function r(e,t){e=e||"content",t=t||"toggle";var r,i,a,o=E.get(e),c=y("#wp-"+e+"-wrap"),p=y("#"+e),s=p[0];if("toggle"===t&&(t=o&&!o.isHidden()?"html":"tmce"),"tmce"===t||"tinymce"===t){if(o&&!o.isHidden())return!1;void 0!==window.QTags&&window.QTags.closeAllTags(e),r=parseInt(s.style.height,10)||0;var g=!1;g=o?o.getParam("wp_keep_scroll_position"):window.tinyMCEPreInit.mceInit[e]&&window.tinyMCEPreInit.mceInit[e].wp_keep_scroll_position,g&&d(p),o?(o.show(),!E.Env.iOS&&r&&(i=n(o),(r=r-i+14)>50&&r<5e3&&o.theme.resizeTo(null,r)),o.getParam("wp_keep_scroll_position")&&l(o)):E.init(window.tinyMCEPreInit.mceInit[e]),c.removeClass("html-active").addClass("tmce-active"),p.attr("aria-hidden",!0),window.setUserSetting("editor","tinymce")}else if("html"===t){if(o&&o.isHidden())return!1;if(o){E.Env.iOS||(a=o.iframeElement,(r=a?parseInt(a.style.height,10):0)&&(i=n(o),(r=r+i-14)>50&&r<5e3&&(s.style.height=r+"px")));var u=null;o.getParam("wp_keep_scroll_position")&&(u=f(o)),o.hide(),u&&m(o,u)}else p.css({display:"",visibility:""});c.removeClass("tmce-active").addClass("html-active"),p.attr("aria-hidden",!1),window.setUserSetting("editor","html")}}function i(e,t){var n=e.lastIndexOf("<",t-1);if(n>e.lastIndexOf(">",t)||">"===e.substr(t,1)){var r=e.substr(n),i=r.match(/<\s*(\/)?(\w+)/);if(!i)return null;var a=i[2];return{ltPos:n,gtPos:n+r.indexOf(">")+1,tagType:a,isClosingTag:!!i[1]}}return null}function a(e,t){for(var n=c(e),r=0;r<n.length;r++){var i=n[r];if(t>=i.startIndex&&t<=i.endIndex)return i}}function o(e){var t=e.match(/\[+([\w_-])+/g),n=[];if(t)for(var r=0;r<t.length;r++){var i=t[r].replace(/^\[+/g,"");-1===n.indexOf(i)&&n.push(i)}return n}function c(t){var n=o(t),r;if(0===n.length)return[];for(var i=e.shortcode.regexp(n.join("|")),a,c=[];a=i.exec(t);){var p="["===a[1];r={shortcodeName:a[2],showAsPlainText:p,startIndex:a.index,endIndex:a.index+a[0].length,length:a[0].length},c.push(r)}for(var s=new RegExp('(^|[\\n\\r][\\n\\r]|<p>)(https?:\\/\\/[^s"]+?)(<\\/p>s*|[\\n\\r][\\n\\r]|$)',"gi");a=s.exec(t);)r={shortcodeName:"url",showAsPlainText:!1,startIndex:a.index,endIndex:a.index+a[0].length,length:a[0].length,urlAtStartOfContent:""===a[1],urlAtEndOfContent:""===a[3]},c.push(r);return c}function p(e,t){return e("<span>").css({display:"inline-block",width:0,overflow:"hidden","line-height":0}).html(t||"")}function s(e,t){var n=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],r=t.cursorStart,o=t.cursorEnd,c=i(e,r);c&&(r=-1!==n.indexOf(c.tagType)?c.ltPos:c.gtPos);var p=i(e,o);p&&(o=p.gtPos);var s=a(e,r);s&&!s.showAsPlainText&&(r=s.urlAtStartOfContent?s.endIndex:s.startIndex);var d=a(e,o);return d&&!d.showAsPlainText&&(o=d.urlAtEndOfContent?d.startIndex:d.endIndex),{cursorStart:r,cursorEnd:o}}function d(e){if(e&&e.length){var t=e[0],n=t.value,r=s(n,{cursorStart:t.selectionStart,cursorEnd:t.selectionEnd}),i=r.cursorStart,a=r.cursorEnd,o=i!==a?"range":"single",c=null,d=p(y,"&#65279;").attr("data-mce-type","bookmark");if("range"===o){c=[t.value.slice(i,a),d.clone().addClass("mce_SELRES_end")[0].outerHTML].join("")}t.value=[t.value.slice(0,i),d.clone().addClass("mce_SELRES_start")[0].outerHTML,c,t.value.slice(a)].join("")}}function l(e){var t=e.$(".mce_SELRES_start").attr("data-mce-bogus",1),n=e.$(".mce_SELRES_end").attr("data-mce-bogus",1);if(t.length)if(e.focus(),n.length){var r=e.getDoc().createRange();r.setStartAfter(t[0]),r.setEndBefore(n[0]),e.selection.setRng(r)}else e.selection.select(t[0]);e.getParam("wp_keep_scroll_position")&&u(e,t),g(t),g(n),e.save()}function g(e){var t=e.parent();e.remove(),!t.is("p")||t.children().length||t.text()||t.remove()}function u(e,t){var r=e.$(t).offset().top,i=e.$(e.getContentAreaContainer()).offset().top,a=n(e),o=$("#wp-content-editor-tools"),c=0,p=0,s;o.length&&(c=o.height(),p=o.offset().top);var d=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,l=i+r,g=d-(c+a);if(!(l<g)){var u;e.settings.wp_autoresize_on?(s=$("html,body"),u=Math.max(l-g/2,p-c)):(s=$(e.contentDocument).find("html,body"),u=r),s.animate({scrollTop:parseInt(u,10)},100)}}function w(e){e.content=e.content.replace(/<p>(?:<br ?\/?>|\u00a0|\uFEFF| )*<\/p>/g,"<p>&nbsp;</p>")}function f(e){var t=e.getWin(),n=t.getSelection();if(n&&!(n.rangeCount<1)){var r="SELRES_"+Math.random(),i=p(e.$,r),a=i.clone().addClass("mce_SELRES_start"),o=i.clone().addClass("mce_SELRES_end"),c=n.getRangeAt(0),s=c.startContainer,d=c.startOffset,l=c.cloneRange();e.$(s).parents(".mce-offscreen-selection").length>0?(s=e.$("[data-mce-selected]")[0],a.attr("data-mce-object-selection","true"),o.attr("data-mce-object-selection","true"),e.$(s).before(a[0]),e.$(s).after(o[0])):(l.collapse(!1),l.insertNode(o[0]),l.setStart(s,d),l.collapse(!0),l.insertNode(a[0]),c.setStartAfter(a[0]),c.setEndBefore(o[0]),n.removeAllRanges(),n.addRange(c)),e.on("GetContent",w);var g=h(e.getContent());e.off("GetContent",w),a.remove(),o.remove();var u=new RegExp('<span[^>]*\\s*class="mce_SELRES_start"[^>]+>\\s*'+r+"[^<]*<\\/span>(\\s*)"),f=new RegExp('(\\s*)<span[^>]*\\s*class="mce_SELRES_end"[^>]+>\\s*'+r+"[^<]*<\\/span>"),m=g.match(u),v=g.match(f);if(!m)return null;var b=m.index,x=m[0].length,E=null;if(v){-1!==m[0].indexOf("data-mce-object-selection")&&(x-=m[1].length);var y=v.index;-1!==v[0].indexOf("data-mce-object-selection")&&(y-=v[1].length),E=y-x}return{start:b,end:E}}}function m(e,t){if(t){var n=e.getElement(),r=t.start,i=t.end||t.start;n.focus&&setTimeout(function(){n.setSelectionRange(r,i),n.blur&&n.blur(),n.focus()},100)}}function h(e){var t="blockquote|ul|ol|li|dl|dt|dd|table|thead|tbody|tfoot|tr|th|td|h[1-6]|fieldset|figure",n=t+"|div|p",r=t+"|pre",i=!1,a=!1,o=[];return e?(-1===e.indexOf("<script")&&-1===e.indexOf("<style")||(e=e.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g,function(e){return o.push(e),"<wp-preserve>"})),-1!==e.indexOf("<pre")&&(i=!0,e=e.replace(/<pre[^>]*>[\s\S]+?<\/pre>/g,function(e){return e=e.replace(/<br ?\/?>(\r\n|\n)?/g,"<wp-line-break>"),e=e.replace(/<\/?p( [^>]*)?>(\r\n|\n)?/g,"<wp-line-break>"),e.replace(/\r?\n/g,"<wp-line-break>")})),-1!==e.indexOf("[caption")&&(a=!0,e=e.replace(/\[caption[\s\S]+?\[\/caption\]/g,function(e){return e.replace(/<br([^>]*)>/g,"<wp-temp-br$1>").replace(/[\r\n\t]+/,"")})),e=e.replace(new RegExp("\\s*</("+n+")>\\s*","g"),"</$1>\n"),e=e.replace(new RegExp("\\s*<((?:"+n+")(?: [^>]*)?)>","g"),"\n<$1>"),e=e.replace(/(<p [^>]+>.*?)<\/p>/g,"$1</p#>"),e=e.replace(/<div( [^>]*)?>\s*<p>/gi,"<div$1>\n\n"),e=e.replace(/\s*<p>/gi,""),e=e.replace(/\s*<\/p>\s*/gi,"\n\n"),e=e.replace(/\n[\s\u00a0]+\n/g,"\n\n"),e=e.replace(/(\s*)<br ?\/?>\s*/gi,function(e,t){return t&&-1!==t.indexOf("\n")?"\n\n":"\n"}),e=e.replace(/\s*<div/g,"\n<div"),e=e.replace(/<\/div>\s*/g,"</div>\n"),e=e.replace(/\s*\[caption([^\[]+)\[\/caption\]\s*/gi,"\n\n[caption$1[/caption]\n\n"),e=e.replace(/caption\]\n\n+\[caption/g,"caption]\n\n[caption"),e=e.replace(new RegExp("\\s*<((?:"+r+")(?: [^>]*)?)\\s*>","g"),"\n<$1>"),e=e.replace(new RegExp("\\s*</("+r+")>\\s*","g"),"</$1>\n"),e=e.replace(/<((li|dt|dd)[^>]*)>/g," \t<$1>"),-1!==e.indexOf("<option")&&(e=e.replace(/\s*<option/g,"\n<option"),e=e.replace(/\s*<\/select>/g,"\n</select>")),-1!==e.indexOf("<hr")&&(e=e.replace(/\s*<hr( [^>]*)?>\s*/g,"\n\n<hr$1>\n\n")),-1!==e.indexOf("<object")&&(e=e.replace(/<object[\s\S]+?<\/object>/g,function(e){return e.replace(/[\r\n]+/g,"")})),e=e.replace(/<\/p#>/g,"</p>\n"),e=e.replace(/\s*(<p [^>]+>[\s\S]*?<\/p>)/g,"\n$1"),e=e.replace(/^\s+/,""),e=e.replace(/[\s\u00a0]+$/,""),i&&(e=e.replace(/<wp-line-break>/g,"\n")),a&&(e=e.replace(/<wp-temp-br([^>]*)>/g,"<br$1>")),o.length&&(e=e.replace(/<wp-preserve>/g,function(){return o.shift()})),e):""}function v(e){var t=!1,n=!1,r="table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary";return e=e.replace(/\r\n|\r/g,"\n"),-1!==e.indexOf("<object")&&(e=e.replace(/<object[\s\S]+?<\/object>/g,function(e){return e.replace(/\n+/g,"")})),e=e.replace(/<[^<>]+>/g,function(e){return e.replace(/[\n\t ]+/g," ")}),-1===e.indexOf("<pre")&&-1===e.indexOf("<script")||(t=!0,e=e.replace(/<(pre|script)[^>]*>[\s\S]*?<\/\1>/g,function(e){return e.replace(/\n/g,"<wp-line-break>")})),-1!==e.indexOf("<figcaption")&&(e=e.replace(/\s*(<figcaption[^>]*>)/g,"$1"),e=e.replace(/<\/figcaption>\s*/g,"</figcaption>")),-1!==e.indexOf("[caption")&&(n=!0,e=e.replace(/\[caption[\s\S]+?\[\/caption\]/g,function(e){return e=e.replace(/<br([^>]*)>/g,"<wp-temp-br$1>"),e=e.replace(/<[^<>]+>/g,function(e){return e.replace(/[\n\t ]+/," ")}),e.replace(/\s*\n\s*/g,"<wp-temp-br />")})),e+="\n\n",e=e.replace(/<br \/>\s*<br \/>/gi,"\n\n"),e=e.replace(new RegExp("(<(?:"+r+")(?: [^>]*)?>)","gi"),"\n\n$1"),e=e.replace(new RegExp("(</(?:"+r+")>)","gi"),"$1\n\n"),e=e.replace(/<hr( [^>]*)?>/gi,"<hr$1>\n\n"),e=e.replace(/\s*<option/gi,"<option"),e=e.replace(/<\/option>\s*/gi,"</option>"),e=e.replace(/\n\s*\n+/g,"\n\n"),e=e.replace(/([\s\S]+?)\n\n/g,"<p>$1</p>\n"),e=e.replace(/<p>\s*?<\/p>/gi,""),e=e.replace(new RegExp("<p>\\s*(</?(?:"+r+")(?: [^>]*)?>)\\s*</p>","gi"),"$1"),e=e.replace(/<p>(<li.+?)<\/p>/gi,"$1"),e=e.replace(/<p>\s*<blockquote([^>]*)>/gi,"<blockquote$1><p>"),e=e.replace(/<\/blockquote>\s*<\/p>/gi,"</p></blockquote>"),e=e.replace(new RegExp("<p>\\s*(</?(?:"+r+")(?: [^>]*)?>)","gi"),"$1"),e=e.replace(new RegExp("(</?(?:"+r+")(?: [^>]*)?>)\\s*</p>","gi"),"$1"),e=e.replace(/(<br[^>]*>)\s*\n/gi,"$1"),e=e.replace(/\s*\n/g,"<br />\n"),e=e.replace(new RegExp("(</?(?:"+r+")[^>]*>)\\s*<br />","gi"),"$1"),e=e.replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)>)/gi,"$1"),e=e.replace(/(?:<p>|<br ?\/?>)*\s*\[caption([^\[]+)\[\/caption\]\s*(?:<\/p>|<br ?\/?>)*/gi,"[caption$1[/caption]"),e=e.replace(/(<(?:div|th|td|form|fieldset|dd)[^>]*>)(.*?)<\/p>/g,function(e,t,n){return n.match(/<p( [^>]*)?>/)?e:t+"<p>"+n+"</p>"}),t&&(e=e.replace(/<wp-line-break>/g,"\n")),n&&(e=e.replace(/<wp-temp-br([^>]*)>/g,"<br$1>")),e}function b(e){var t={o:S,data:e,unfiltered:e};return $&&$("body").trigger("beforePreWpautop",[t]),t.data=h(t.data),$&&$("body").trigger("afterPreWpautop",[t]),t.data}function x(e){var t={o:S,data:e,unfiltered:e};return $&&$("body").trigger("beforeWpautop",[t]),t.data=v(t.data),$&&$("body").trigger("afterWpautop",[t]),t.data}var E,y,S={};return $(document).on("tinymce-editor-init.keep-scroll-position",function(e,t){t.$(".mce_SELRES_start").length&&l(t)}),$?$(document).ready(t):document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):window.attachEvent&&(window.attachEvent("onload",t),document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&t()})),e.editor.autop=x,e.editor.removep=b,S={go:r,wpautop:x,pre_wpautop:b,_wp_Autop:v,_wp_Nop:h}}e.editor=e.editor||{},window.switchEditors=new t,e.editor.initialize=function(t,n){var r,i;if($&&t&&e.editor.getDefaultSettings){if(i=e.editor.getDefaultSettings(),n||(n={tinymce:!0}),n.tinymce&&n.quicktags){var a=$("#"+t),o=$("<div>").attr({class:"wp-core-ui wp-editor-wrap tmce-active",id:"wp-"+t+"-wrap"}),c=$('<div class="wp-editor-container">'),p=$("<button>").attr({type:"button","data-wp-editor-id":t}),s=$('<div class="wp-editor-tools">');if(n.mediaButtons){var d="Add Media";window._wpMediaViewsL10n&&window._wpMediaViewsL10n.addMedia&&(d=window._wpMediaViewsL10n.addMedia);var l=$('<button type="button" class="button insert-media add_media">');l.append('<span class="wp-media-buttons-icon"></span>'),l.append(document.createTextNode(" "+d)),l.data("editor",t),s.append($('<div class="wp-media-buttons">').append(l))}o.append(s.append($('<div class="wp-editor-tabs">').append(p.clone().attr({id:t+"-tmce",class:"wp-switch-editor switch-tmce"}).text(window.tinymce.translate("Visual"))).append(p.attr({id:t+"-html",class:"wp-switch-editor switch-html"}).text(window.tinymce.translate("Text")))).append(c)),a.after(o),c.append(a)}window.tinymce&&n.tinymce&&("object"!=typeof n.tinymce&&(n.tinymce={}),r=$.extend({},i.tinymce,n.tinymce),r.selector="#"+t,$(document).trigger("wp-before-tinymce-init",r),window.tinymce.init(r),window.wpActiveEditor||(window.wpActiveEditor=t)),window.quicktags&&n.quicktags&&("object"!=typeof n.quicktags&&(n.quicktags={}),r=$.extend({},i.quicktags,n.quicktags),r.id=t,$(document).trigger("wp-before-quicktags-init",r),window.quicktags(r),window.wpActiveEditor||(window.wpActiveEditor=r.id))}},e.editor.remove=function(e){var t,n,r=$("#wp-"+e+"-wrap");window.tinymce&&(t=window.tinymce.get(e))&&(t.isHidden()||t.save(),t.remove()),window.quicktags&&(n=window.QTags.getInstance(e))&&n.remove(),r.length&&(r.after($("#"+e)),r.remove())},e.editor.getContent=function(e){var t;if($&&e)return window.tinymce&&(t=window.tinymce.get(e))&&!t.isHidden()&&t.save(),$("#"+e).val()}}(window.jQuery,window.wp);