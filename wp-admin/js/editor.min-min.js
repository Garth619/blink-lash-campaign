window.wp=window.wp||{},function(e,t){function n(){function n(){!y&&window.tinymce&&(y=window.tinymce,S=y.$,S(document).on("click",function(e){var t,n,r=S(e.target);r.hasClass("wp-switch-editor")&&(t=r.attr("data-wp-editor-id"),n=r.hasClass("switch-tmce")?"tmce":"html",i(t,n))}))}function r(e){var t=S(".mce-toolbar-grp",e.getContainer())[0],n=t&&t.clientHeight;return n&&n>10&&n<200?parseInt(n,10):30}function i(e,t){e=e||"content",t=t||"toggle";var n,i,a,o=y.get(e),c=S("#wp-"+e+"-wrap"),p=S("#"+e),s=p[0];if("toggle"===t&&(t=o&&!o.isHidden()?"html":"tmce"),"tmce"===t||"tinymce"===t){if(o&&!o.isHidden())return!1;void 0!==window.QTags&&window.QTags.closeAllTags(e),n=parseInt(s.style.height,10)||0;var d=!1;d=o?o.getParam("wp_keep_scroll_position"):window.tinyMCEPreInit.mceInit[e]&&window.tinyMCEPreInit.mceInit[e].wp_keep_scroll_position,d&&l(p),o?(o.show(),!y.Env.iOS&&n&&(i=r(o),(n=n-i+14)>50&&n<5e3&&o.theme.resizeTo(null,n)),o.getParam("wp_keep_scroll_position")&&g(o)):y.init(window.tinyMCEPreInit.mceInit[e]),c.removeClass("html-active").addClass("tmce-active"),p.attr("aria-hidden",!0),window.setUserSetting("editor","tinymce")}else if("html"===t){if(o&&o.isHidden())return!1;if(o){y.Env.iOS||(a=o.iframeElement,(n=a?parseInt(a.style.height,10):0)&&(i=r(o),(n=n+i-14)>50&&n<5e3&&(s.style.height=n+"px")));var u=null;o.getParam("wp_keep_scroll_position")&&(u=m(o)),o.hide(),u&&h(o,u)}else p.css({display:"",visibility:""});c.removeClass("tmce-active").addClass("html-active"),p.attr("aria-hidden",!1),window.setUserSetting("editor","html")}}function a(e,t){var n=e.lastIndexOf("<",t-1);if(n>e.lastIndexOf(">",t)||">"===e.substr(t,1)){var r=e.substr(n),i=r.match(/<\s*(\/)?(\w+)/);if(!i)return null;var a=i[2];return{ltPos:n,gtPos:n+r.indexOf(">")+1,tagType:a,isClosingTag:!!i[1]}}return null}function o(e,t){for(var n=p(e),r=0;r<n.length;r++){var i=n[r];if(t>=i.startIndex&&t<=i.endIndex)return i}}function c(e){var t=e.match(/\[+([\w_-])+/g),n=[];if(t)for(var r=0;r<t.length;r++){var i=t[r].replace(/^\[+/g,"");-1===n.indexOf(i)&&n.push(i)}return n}function p(e){var n,r=c(e);if(0===r.length)return[];for(var i,a=t.shortcode.regexp(r.join("|")),o=[];i=a.exec(e);){var p="["===i[1];n={shortcodeName:i[2],showAsPlainText:p,startIndex:i.index,endIndex:i.index+i[0].length,length:i[0].length},o.push(n)}for(var s=new RegExp('(^|[\\n\\r][\\n\\r]|<p>)(https?:\\/\\/[^s"]+?)(<\\/p>s*|[\\n\\r][\\n\\r]|$)',"gi");i=s.exec(e);)n={shortcodeName:"url",showAsPlainText:!1,startIndex:i.index,endIndex:i.index+i[0].length,length:i[0].length,urlAtStartOfContent:""===i[1],urlAtEndOfContent:""===i[3]},o.push(n);return o}function s(e,t){return e("<span>").css({display:"inline-block",width:0,overflow:"hidden","line-height":0}).html(t||"")}function d(e,t){var n=["area","base","br","col","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],r=t.cursorStart,i=t.cursorEnd,c=a(e,r);c&&(r=-1!==n.indexOf(c.tagType)?c.ltPos:c.gtPos);var p=a(e,i);p&&(i=p.gtPos);var s=o(e,r);s&&!s.showAsPlainText&&(r=s.urlAtStartOfContent?s.endIndex:s.startIndex);var d=o(e,i);return d&&!d.showAsPlainText&&(i=d.urlAtEndOfContent?d.startIndex:d.endIndex),{cursorStart:r,cursorEnd:i}}function l(e){if(e&&e.length){var t=e[0],n=t.value,r=d(n,{cursorStart:t.selectionStart,cursorEnd:t.selectionEnd}),i=r.cursorStart,a=r.cursorEnd,o=i!==a?"range":"single",c=null,p=s(S,"&#65279;").attr("data-mce-type","bookmark");if("range"===o){c=[t.value.slice(i,a),p.clone().addClass("mce_SELRES_end")[0].outerHTML].join("")}t.value=[t.value.slice(0,i),p.clone().addClass("mce_SELRES_start")[0].outerHTML,c,t.value.slice(a)].join("")}}function g(e){var t=e.$(".mce_SELRES_start").attr("data-mce-bogus",1),n=e.$(".mce_SELRES_end").attr("data-mce-bogus",1);if(t.length)if(e.focus(),n.length){var r=e.getDoc().createRange();r.setStartAfter(t[0]),r.setEndBefore(n[0]),e.selection.setRng(r)}else e.selection.select(t[0]);e.getParam("wp_keep_scroll_position")&&w(e,t),u(t),u(n),e.save()}function u(e){var t=e.parent();e.remove(),!t.is("p")||t.children().length||t.text()||t.remove()}function w(t,n){var i,a=t.$(n).offset().top,o=t.$(t.getContentAreaContainer()).offset().top,c=r(t),p=e("#wp-content-editor-tools"),s=0,d=0;p.length&&(s=p.height(),d=p.offset().top);var l=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,g=o+a,u=l-(s+c);if(!(g<u)){var w;t.settings.wp_autoresize_on?(i=e("html,body"),w=Math.max(g-u/2,d-s)):(i=e(t.contentDocument).find("html,body"),w=a),i.animate({scrollTop:parseInt(w,10)},100)}}function f(e){e.content=e.content.replace(/<p>(?:<br ?\/?>|\u00a0|\uFEFF| )*<\/p>/g,"<p>&nbsp;</p>")}function m(e){var t=e.getWin(),n=t.getSelection();if(n&&!(n.rangeCount<1)){var r="SELRES_"+Math.random(),i=s(e.$,r),a=i.clone().addClass("mce_SELRES_start"),o=i.clone().addClass("mce_SELRES_end"),c=n.getRangeAt(0),p=c.startContainer,d=c.startOffset,l=c.cloneRange();e.$(p).parents(".mce-offscreen-selection").length>0?(p=e.$("[data-mce-selected]")[0],a.attr("data-mce-object-selection","true"),o.attr("data-mce-object-selection","true"),e.$(p).before(a[0]),e.$(p).after(o[0])):(l.collapse(!1),l.insertNode(o[0]),l.setStart(p,d),l.collapse(!0),l.insertNode(a[0]),c.setStartAfter(a[0]),c.setEndBefore(o[0]),n.removeAllRanges(),n.addRange(c)),e.on("GetContent",f);var g=v(e.getContent());e.off("GetContent",f),a.remove(),o.remove();var u=new RegExp('<span[^>]*\\s*class="mce_SELRES_start"[^>]+>\\s*'+r+"[^<]*<\\/span>(\\s*)"),w=new RegExp('(\\s*)<span[^>]*\\s*class="mce_SELRES_end"[^>]+>\\s*'+r+"[^<]*<\\/span>"),m=g.match(u),h=g.match(w);if(!m)return null;var b=m.index,x=m[0].length,E=null;if(h){-1!==m[0].indexOf("data-mce-object-selection")&&(x-=m[1].length);var y=h.index;-1!==h[0].indexOf("data-mce-object-selection")&&(y-=h[1].length),E=y-x}return{start:b,end:E}}}function h(e,t){if(t){var n=e.getElement(),r=t.start,i=t.end||t.start;n.focus&&setTimeout(function(){n.setSelectionRange(r,i),n.blur&&n.blur(),n.focus()},100)}}function v(e){var t="blockquote|ul|ol|li|dl|dt|dd|table|thead|tbody|tfoot|tr|th|td|h[1-6]|fieldset|figure",n=t+"|div|p",r=t+"|pre",i=!1,a=!1,o=[];return e?(-1===e.indexOf("<script")&&-1===e.indexOf("<style")||(e=e.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g,function(e){return o.push(e),"<wp-preserve>"})),-1!==e.indexOf("<pre")&&(i=!0,e=e.replace(/<pre[^>]*>[\s\S]+?<\/pre>/g,function(e){return e=e.replace(/<br ?\/?>(\r\n|\n)?/g,"<wp-line-break>"),e=e.replace(/<\/?p( [^>]*)?>(\r\n|\n)?/g,"<wp-line-break>"),e.replace(/\r?\n/g,"<wp-line-break>")})),-1!==e.indexOf("[caption")&&(a=!0,e=e.replace(/\[caption[\s\S]+?\[\/caption\]/g,function(e){return e.replace(/<br([^>]*)>/g,"<wp-temp-br$1>").replace(/[\r\n\t]+/,"")})),e=e.replace(new RegExp("\\s*</("+n+")>\\s*","g"),"</$1>\n"),e=e.replace(new RegExp("\\s*<((?:"+n+")(?: [^>]*)?)>","g"),"\n<$1>"),e=e.replace(/(<p [^>]+>.*?)<\/p>/g,"$1</p#>"),e=e.replace(/<div( [^>]*)?>\s*<p>/gi,"<div$1>\n\n"),e=e.replace(/\s*<p>/gi,""),e=e.replace(/\s*<\/p>\s*/gi,"\n\n"),e=e.replace(/\n[\s\u00a0]+\n/g,"\n\n"),e=e.replace(/(\s*)<br ?\/?>\s*/gi,function(e,t){return t&&-1!==t.indexOf("\n")?"\n\n":"\n"}),e=e.replace(/\s*<div/g,"\n<div"),e=e.replace(/<\/div>\s*/g,"</div>\n"),e=e.replace(/\s*\[caption([^\[]+)\[\/caption\]\s*/gi,"\n\n[caption$1[/caption]\n\n"),e=e.replace(/caption\]\n\n+\[caption/g,"caption]\n\n[caption"),e=e.replace(new RegExp("\\s*<((?:"+r+")(?: [^>]*)?)\\s*>","g"),"\n<$1>"),e=e.replace(new RegExp("\\s*</("+r+")>\\s*","g"),"</$1>\n"),e=e.replace(/<((li|dt|dd)[^>]*)>/g," \t<$1>"),-1!==e.indexOf("<option")&&(e=e.replace(/\s*<option/g,"\n<option"),e=e.replace(/\s*<\/select>/g,"\n</select>")),-1!==e.indexOf("<hr")&&(e=e.replace(/\s*<hr( [^>]*)?>\s*/g,"\n\n<hr$1>\n\n")),-1!==e.indexOf("<object")&&(e=e.replace(/<object[\s\S]+?<\/object>/g,function(e){return e.replace(/[\r\n]+/g,"")})),e=e.replace(/<\/p#>/g,"</p>\n"),e=e.replace(/\s*(<p [^>]+>[\s\S]*?<\/p>)/g,"\n$1"),e=e.replace(/^\s+/,""),e=e.replace(/[\s\u00a0]+$/,""),i&&(e=e.replace(/<wp-line-break>/g,"\n")),a&&(e=e.replace(/<wp-temp-br([^>]*)>/g,"<br$1>")),o.length&&(e=e.replace(/<wp-preserve>/g,function(){return o.shift()})),e):""}function b(e){var t=!1,n=!1,r="table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary";return e=e.replace(/\r\n|\r/g,"\n"),-1!==e.indexOf("<object")&&(e=e.replace(/<object[\s\S]+?<\/object>/g,function(e){return e.replace(/\n+/g,"")})),e=e.replace(/<[^<>]+>/g,function(e){return e.replace(/[\n\t ]+/g," ")}),-1===e.indexOf("<pre")&&-1===e.indexOf("<script")||(t=!0,e=e.replace(/<(pre|script)[^>]*>[\s\S]*?<\/\1>/g,function(e){return e.replace(/\n/g,"<wp-line-break>")})),-1!==e.indexOf("<figcaption")&&(e=e.replace(/\s*(<figcaption[^>]*>)/g,"$1"),e=e.replace(/<\/figcaption>\s*/g,"</figcaption>")),-1!==e.indexOf("[caption")&&(n=!0,e=e.replace(/\[caption[\s\S]+?\[\/caption\]/g,function(e){return e=e.replace(/<br([^>]*)>/g,"<wp-temp-br$1>"),e=e.replace(/<[^<>]+>/g,function(e){return e.replace(/[\n\t ]+/," ")}),e.replace(/\s*\n\s*/g,"<wp-temp-br />")})),e+="\n\n",e=e.replace(/<br \/>\s*<br \/>/gi,"\n\n"),e=e.replace(new RegExp("(<(?:"+r+")(?: [^>]*)?>)","gi"),"\n\n$1"),e=e.replace(new RegExp("(</(?:"+r+")>)","gi"),"$1\n\n"),e=e.replace(/<hr( [^>]*)?>/gi,"<hr$1>\n\n"),e=e.replace(/\s*<option/gi,"<option"),e=e.replace(/<\/option>\s*/gi,"</option>"),e=e.replace(/\n\s*\n+/g,"\n\n"),e=e.replace(/([\s\S]+?)\n\n/g,"<p>$1</p>\n"),e=e.replace(/<p>\s*?<\/p>/gi,""),e=e.replace(new RegExp("<p>\\s*(</?(?:"+r+")(?: [^>]*)?>)\\s*</p>","gi"),"$1"),e=e.replace(/<p>(<li.+?)<\/p>/gi,"$1"),e=e.replace(/<p>\s*<blockquote([^>]*)>/gi,"<blockquote$1><p>"),e=e.replace(/<\/blockquote>\s*<\/p>/gi,"</p></blockquote>"),e=e.replace(new RegExp("<p>\\s*(</?(?:"+r+")(?: [^>]*)?>)","gi"),"$1"),e=e.replace(new RegExp("(</?(?:"+r+")(?: [^>]*)?>)\\s*</p>","gi"),"$1"),e=e.replace(/(<br[^>]*>)\s*\n/gi,"$1"),e=e.replace(/\s*\n/g,"<br />\n"),e=e.replace(new RegExp("(</?(?:"+r+")[^>]*>)\\s*<br />","gi"),"$1"),e=e.replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)>)/gi,"$1"),e=e.replace(/(?:<p>|<br ?\/?>)*\s*\[caption([^\[]+)\[\/caption\]\s*(?:<\/p>|<br ?\/?>)*/gi,"[caption$1[/caption]"),e=e.replace(/(<(?:div|th|td|form|fieldset|dd)[^>]*>)(.*?)<\/p>/g,function(e,t,n){return n.match(/<p( [^>]*)?>/)?e:t+"<p>"+n+"</p>"}),t&&(e=e.replace(/<wp-line-break>/g,"\n")),n&&(e=e.replace(/<wp-temp-br([^>]*)>/g,"<br$1>")),e}function x(t){var n={o:_,data:t,unfiltered:t};return e&&e("body").trigger("beforePreWpautop",[n]),n.data=v(n.data),e&&e("body").trigger("afterPreWpautop",[n]),n.data}function E(t){var n={o:_,data:t,unfiltered:t};return e&&e("body").trigger("beforeWpautop",[n]),n.data=b(n.data),e&&e("body").trigger("afterWpautop",[n]),n.data}var y,S,_={};return e(document).on("tinymce-editor-init.keep-scroll-position",function(e,t){t.$(".mce_SELRES_start").length&&g(t)}),e?e(document).ready(n):document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):window.attachEvent&&(window.attachEvent("onload",n),document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&n()})),t.editor.autop=E,t.editor.removep=x,_={go:i,wpautop:E,pre_wpautop:x,_wp_Autop:b,_wp_Nop:v}}t.editor=t.editor||{},window.switchEditors=new n,t.editor.initialize=function(n,r){var i,a;if(e&&n&&t.editor.getDefaultSettings){if(a=t.editor.getDefaultSettings(),r||(r={tinymce:!0}),r.tinymce&&r.quicktags){var o=e("#"+n),c=e("<div>").attr({class:"wp-core-ui wp-editor-wrap tmce-active",id:"wp-"+n+"-wrap"}),p=e('<div class="wp-editor-container">'),s=e("<button>").attr({type:"button","data-wp-editor-id":n}),d=e('<div class="wp-editor-tools">');if(r.mediaButtons){var l="Add Media";window._wpMediaViewsL10n&&window._wpMediaViewsL10n.addMedia&&(l=window._wpMediaViewsL10n.addMedia);var g=e('<button type="button" class="button insert-media add_media">');g.append('<span class="wp-media-buttons-icon"></span>'),g.append(document.createTextNode(" "+l)),g.data("editor",n),d.append(e('<div class="wp-media-buttons">').append(g))}c.append(d.append(e('<div class="wp-editor-tabs">').append(s.clone().attr({id:n+"-tmce",class:"wp-switch-editor switch-tmce"}).text(window.tinymce.translate("Visual"))).append(s.attr({id:n+"-html",class:"wp-switch-editor switch-html"}).text(window.tinymce.translate("Text")))).append(p)),o.after(c),p.append(o)}window.tinymce&&r.tinymce&&("object"!=typeof r.tinymce&&(r.tinymce={}),i=e.extend({},a.tinymce,r.tinymce),i.selector="#"+n,e(document).trigger("wp-before-tinymce-init",i),window.tinymce.init(i),window.wpActiveEditor||(window.wpActiveEditor=n)),window.quicktags&&r.quicktags&&("object"!=typeof r.quicktags&&(r.quicktags={}),i=e.extend({},a.quicktags,r.quicktags),i.id=n,e(document).trigger("wp-before-quicktags-init",i),window.quicktags(i),window.wpActiveEditor||(window.wpActiveEditor=i.id))}},t.editor.remove=function(t){var n,r,i=e("#wp-"+t+"-wrap");window.tinymce&&(n=window.tinymce.get(t))&&(n.isHidden()||n.save(),n.remove()),window.quicktags&&(r=window.QTags.getInstance(t))&&r.remove(),i.length&&(i.after(e("#"+t)),i.remove())},t.editor.getContent=function(t){var n;if(e&&t)return window.tinymce&&(n=window.tinymce.get(t))&&!n.isHidden()&&n.save(),e("#"+t).val()}}(window.jQuery,window.wp);