!function(e,n){function t(){function e(){"undefined"!=typeof _wpmejsSettings&&(t=n.extend(!0,{},_wpmejsSettings)),t.classPrefix="mejs-",t.success=t.success||function(e){var n,t;e.rendererName&&-1!==e.rendererName.indexOf("flash")&&(n=e.attributes.autoplay&&"false"!==e.attributes.autoplay,t=e.attributes.loop&&"false"!==e.attributes.loop,n&&e.addEventListener("canplay",function(){e.play()},!1),t&&e.addEventListener("ended",function(){e.play()},!1))},t.customError=function(e,n){if(-1!==e.rendererName.indexOf("flash")||-1!==e.rendererName.indexOf("flv"))return'<a href="'+n.src+'">'+mejsL10n.strings["mejs.download-video"]+"</a>"},n(".wp-audio-shortcode, .wp-video-shortcode").not(".mejs-container").filter(function(){return!n(this).parent().hasClass("mejs-mediaelement")}).mediaelementplayer(t)}var t={};return{initialize:e}}e.wp=e.wp||{},e.wp.mediaelement=new t,n(e.wp.mediaelement.initialize)}(window,jQuery);