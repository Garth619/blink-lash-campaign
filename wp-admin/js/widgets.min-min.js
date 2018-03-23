var wpWidgets;!function(e){var i=e(document);wpWidgets={hoveredSidebar:null,l10n:{save:"{save}",saved:"{saved}",saveAlert:"{saveAlert}"},dirtyWidgets:{},init:function(){var t,d,s=this,a=e(".widgets-chooser"),n=a.find(".widgets-chooser-sidebars"),r=e("div.widgets-sortables"),o=!("undefined"==typeof isRtl||!isRtl);e("#widgets-right .sidebar-name").click(function(){var t=e(this),d=t.closest(".widgets-holder-wrap "),s=t.find(".handlediv");d.hasClass("closed")?(d.removeClass("closed"),s.attr("aria-expanded","true"),t.parent().sortable("refresh")):(d.addClass("closed"),s.attr("aria-expanded","false")),i.triggerHandler("wp-pin-menu")}).find(".handlediv").each(function(i){0!==i&&e(this).attr("aria-expanded","false")}),e(window).on("beforeunload.widgets",function(i){var t,d=[];if(e.each(s.dirtyWidgets,function(e,i){i&&d.push(e)}),0!==d.length)return t=e("#widgets-right").find(".widget").filter(function(){return-1!==d.indexOf(e(this).prop("id").replace(/^widget-\d+_/,""))}),t.each(function(){e(this).hasClass("open")||e(this).find(".widget-title-action:first").click()}),t.first().each(function(){this.scrollIntoViewIfNeeded?this.scrollIntoViewIfNeeded():this.scrollIntoView(),e(this).find(".widget-inside :tabbable:first").focus()}),i.returnValue=wpWidgets.l10n.saveAlert,i.returnValue}),e("#widgets-left .sidebar-name").click(function(){var t=e(this).closest(".widgets-holder-wrap");t.toggleClass("closed").find(".handlediv").attr("aria-expanded",!t.hasClass("closed")),i.triggerHandler("wp-pin-menu")}),e(document.body).bind("click.widgets-toggle",function(i){var t,d,a,n,r,l,c,g=e(i.target),w={"z-index":100},h=g.closest(".widget").find(".widget-top button.widget-action");g.parents(".widget-top").length&&!g.parents("#available-widgets").length?(t=g.closest("div.widget"),d=t.children(".widget-inside"),a=parseInt(t.find("input.widget-width").val(),10),n=t.parent().width(),c=d.find(".widget-id").val(),t.data("dirty-state-initialized")||(l=d.find(".widget-control-save"),l.prop("disabled",!0).val(wpWidgets.l10n.saved),d.on("input change",function(){s.dirtyWidgets[c]=!0,t.addClass("widget-dirty"),l.prop("disabled",!1).val(wpWidgets.l10n.save)}),t.data("dirty-state-initialized",!0)),d.is(":hidden")?(a>250&&a+30>n&&t.closest("div.widgets-sortables").length&&(r=t.closest("div.widget-liquid-right").length?o?"margin-right":"margin-left":o?"margin-left":"margin-right",w[r]=n-(a+30)+"px",t.css(w)),h.attr("aria-expanded","true"),d.slideDown("fast",function(){t.addClass("open")})):(h.attr("aria-expanded","false"),d.slideUp("fast",function(){t.attr("style",""),t.removeClass("open")})),i.preventDefault()):g.hasClass("widget-control-save")?(wpWidgets.save(g.closest("div.widget"),0,1,0),i.preventDefault()):g.hasClass("widget-control-remove")?(wpWidgets.save(g.closest("div.widget"),1,1,0),i.preventDefault()):g.hasClass("widget-control-close")?(t=g.closest("div.widget"),t.removeClass("open"),h.attr("aria-expanded","false"),wpWidgets.close(t),i.preventDefault()):"inactive-widgets-control-remove"===g.attr("id")&&(wpWidgets.removeInactiveWidgets(),i.preventDefault())}),r.children(".widget").each(function(){var i=e(this);wpWidgets.appendTitle(this),i.find("p.widget-error").length&&i.find(".widget-action").trigger("click").attr("aria-expanded","true")}),e("#widget-list").children(".widget").draggable({connectToSortable:"div.widgets-sortables",handle:"> .widget-top > .widget-title",distance:2,helper:"clone",zIndex:100,containment:"#wpwrap",refreshPositions:!0,start:function(i,t){var a=e(this).find(".widgets-chooser");t.helper.find("div.widget-description").hide(),d=this.id,a.length&&(e("#wpbody-content").append(a.hide()),t.helper.find(".widgets-chooser").remove(),s.clearWidgetSelection())},stop:function(){t&&e(t).hide(),t=""}}),r.droppable({tolerance:"intersect",over:function(i){var t=e(i.target).parent();wpWidgets.hoveredSidebar&&!t.is(wpWidgets.hoveredSidebar)&&wpWidgets.closeSidebar(i),t.hasClass("closed")&&(wpWidgets.hoveredSidebar=t,t.removeClass("closed").find(".handlediv").attr("aria-expanded","true")),e(this).sortable("refresh")},out:function(e){wpWidgets.hoveredSidebar&&wpWidgets.closeSidebar(e)}}),r.sortable({placeholder:"widget-placeholder",items:"> .widget",handle:"> .widget-top > .widget-title",cursor:"move",distance:2,containment:"#wpwrap",tolerance:"pointer",refreshPositions:!0,start:function(i,t){var d,s=e(this),a=s.parent(),n=t.item.children(".widget-inside");"block"===n.css("display")&&(t.item.removeClass("open"),t.item.find(".widget-top button.widget-action").attr("aria-expanded","false"),n.hide(),e(this).sortable("refreshPositions")),a.hasClass("closed")||(d=t.item.hasClass("ui-draggable")?s.height():1+s.height(),s.css("min-height",d+"px"))},stop:function(s,a){var n,r,o,l,c,g,w=a.item,h=d;return wpWidgets.hoveredSidebar=null,w.hasClass("deleting")?(wpWidgets.save(w,1,0,1),void w.remove()):(n=w.find("input.add_new").val(),r=w.find("input.multi_number").val(),w.attr("style","").removeClass("ui-draggable"),d="",n&&("multi"===n?(w.html(w.html().replace(/<[^<>]+>/g,function(e){return e.replace(/__i__|%i%/g,r)})),w.attr("id",h.replace("__i__",r)),r++,e("div#"+h).find("input.multi_number").val(r)):"single"===n&&(w.attr("id","new-"+h),t="div#"+h),wpWidgets.save(w,0,0,1),w.find("input.add_new").val(""),i.trigger("widget-added",[w])),o=w.parent(),o.parent().hasClass("closed")&&(o.parent().removeClass("closed").find(".handlediv").attr("aria-expanded","true"),l=o.children(".widget"),l.length>1&&(c=l.get(0),g=w.get(0),c.id&&g.id&&c.id!==g.id&&e(c).before(w))),void(n?w.find(".widget-action").trigger("click"):wpWidgets.saveOrder(o.attr("id"))))},activate:function(){e(this).parent().addClass("widget-hover")},deactivate:function(){e(this).css("min-height","").parent().removeClass("widget-hover")},receive:function(i,t){var d=e(t.sender);return this.id.indexOf("orphaned_widgets")>-1?void d.sortable("cancel"):void(d.attr("id").indexOf("orphaned_widgets")>-1&&!d.children(".widget").length&&d.parents(".orphan-sidebar").slideUp(400,function(){e(this).remove()}))}}).sortable("option","connectWith","div.widgets-sortables"),e("#available-widgets").droppable({tolerance:"pointer",accept:function(i){return"widget-list"!==e(i).parent().attr("id")},drop:function(i,t){t.draggable.addClass("deleting"),e("#removing-widget").hide().children("span").empty()},over:function(i,t){t.draggable.addClass("deleting"),e("div.widget-placeholder").hide(),t.draggable.hasClass("ui-sortable-helper")&&e("#removing-widget").show().children("span").html(t.draggable.find("div.widget-title").children("h3").html())},out:function(i,t){t.draggable.removeClass("deleting"),e("div.widget-placeholder").show(),e("#removing-widget").hide().children("span").empty()}}),e("#widgets-right .widgets-holder-wrap").each(function(i,t){var d=e(t),s=d.find(".sidebar-name h2").text(),a=d.find(".widgets-sortables").attr("id"),r=e('<li tabindex="0">').text(e.trim(s));0===i&&r.addClass("widgets-chooser-selected"),n.append(r),r.data("sidebarId",a)}),e("#available-widgets .widget .widget-title").on("click.widgets-chooser",function(){var i=e(this).closest(".widget");i.hasClass("widget-in-question")||e("#widgets-left").hasClass("chooser")?s.closeChooser():(s.clearWidgetSelection(),e("#widgets-left").addClass("chooser"),i.addClass("widget-in-question").children(".widget-description").after(a),a.slideDown(300,function(){n.find(".widgets-chooser-selected").focus()}),n.find("li").on("focusin.widgets-chooser",function(){n.find(".widgets-chooser-selected").removeClass("widgets-chooser-selected"),e(this).addClass("widgets-chooser-selected")}))}),a.on("click.widgets-chooser",function(i){var t=e(i.target);t.hasClass("button-primary")?(s.addWidget(a),s.closeChooser()):t.hasClass("widgets-chooser-cancel")&&s.closeChooser()}).on("keyup.widgets-chooser",function(i){i.which===e.ui.keyCode.ENTER?e(i.target).hasClass("widgets-chooser-cancel")?s.closeChooser():(s.addWidget(a),s.closeChooser()):i.which===e.ui.keyCode.ESCAPE&&s.closeChooser()})},saveOrder:function(i){var t={action:"widgets-order",savewidgets:e("#_wpnonce_widgets").val(),sidebars:[]};i&&e("#"+i).find(".spinner:first").addClass("is-active"),e("div.widgets-sortables").each(function(){e(this).sortable&&(t["sidebars["+e(this).attr("id")+"]"]=e(this).sortable("toArray").join(","))}),e.post(ajaxurl,t,function(){e("#inactive-widgets-control-remove").prop("disabled",!e("#wp_inactive_widgets .widget").length),e(".spinner").removeClass("is-active")})},save:function(t,d,s,a){var n,r,o=this,l=t.closest("div.widgets-sortables").attr("id"),c=t.find("form"),g=t.find("input.add_new").val();(d||g||!c.prop("checkValidity")||c[0].checkValidity())&&(n=c.serialize(),t=e(t),e(".spinner",t).addClass("is-active"),r={action:"save-widget",savewidgets:e("#_wpnonce_widgets").val(),sidebar:l},d&&(r.delete_widget=1),n+="&"+e.param(r),e.post(ajaxurl,n,function(n){var r=e("input.widget-id",t).val();d?(e("input.widget_number",t).val()||e("#available-widgets").find("input.widget-id").each(function(){e(this).val()===r&&e(this).closest("div.widget").show()}),s?(a=0,t.slideUp("fast",function(){e(this).remove(),wpWidgets.saveOrder(),delete o.dirtyWidgets[r]})):(t.remove(),delete o.dirtyWidgets[r],"wp_inactive_widgets"===l&&e("#inactive-widgets-control-remove").prop("disabled",!e("#wp_inactive_widgets .widget").length))):(e(".spinner").removeClass("is-active"),n&&n.length>2&&(e("div.widget-content",t).html(n),wpWidgets.appendTitle(t),t.find(".widget-control-save").prop("disabled",!0).val(wpWidgets.l10n.saved),t.removeClass("widget-dirty"),delete o.dirtyWidgets[r],i.trigger("widget-updated",[t]),"wp_inactive_widgets"===l&&e("#inactive-widgets-control-remove").prop("disabled",!e("#wp_inactive_widgets .widget").length))),a&&wpWidgets.saveOrder()}))},removeInactiveWidgets:function(){var i,t,d=e(".remove-inactive-widgets"),s=this;e(".spinner",d).addClass("is-active"),i={action:"delete-inactive-widgets",removeinactivewidgets:e("#_wpnonce_remove_inactive_widgets").val()},t=e.param(i),e.post(ajaxurl,t,function(){e("#wp_inactive_widgets .widget").each(function(){var i=e(this);delete s.dirtyWidgets[i.find("input.widget-id").val()],i.remove()}),e("#inactive-widgets-control-remove").prop("disabled",!0),e(".spinner",d).removeClass("is-active")})},appendTitle:function(i){var t=e('input[id*="-title"]',i).val()||"";t&&(t=": "+t.replace(/<[^<>]+>/g,"").replace(/</g,"&lt;").replace(/>/g,"&gt;")),e(i).children(".widget-top").children(".widget-title").children().children(".in-widget-title").html(t)},close:function(e){e.children(".widget-inside").slideUp("fast",function(){e.attr("style","").find(".widget-top button.widget-action").attr("aria-expanded","false").focus()})},addWidget:function(t){var d,s,a,n,r,o,l,c=t.find(".widgets-chooser-selected").data("sidebarId"),g=e("#"+c);d=e("#available-widgets").find(".widget-in-question").clone(),s=d.attr("id"),a=d.find("input.add_new").val(),n=d.find("input.multi_number").val(),d.find(".widgets-chooser").remove(),"multi"===a?(d.html(d.html().replace(/<[^<>]+>/g,function(e){return e.replace(/__i__|%i%/g,n)})),d.attr("id",s.replace("__i__",n)),n++,e("#"+s).find("input.multi_number").val(n)):"single"===a&&(d.attr("id","new-"+s),e("#"+s).hide()),g.closest(".widgets-holder-wrap").removeClass("closed").find(".handlediv").attr("aria-expanded","true"),g.append(d),g.sortable("refresh"),wpWidgets.save(d,0,0,1),d.find("input.add_new").val(""),i.trigger("widget-added",[d]),r=e(window).scrollTop(),o=r+e(window).height(),l=g.offset(),l.bottom=l.top+g.outerHeight(),(r>l.bottom||o<l.top)&&e("html, body").animate({scrollTop:l.top-130},200),window.setTimeout(function(){d.find(".widget-title").trigger("click")},250)},closeChooser:function(){var i=this;e(".widgets-chooser").slideUp(200,function(){e("#wpbody-content").append(this),i.clearWidgetSelection()})},clearWidgetSelection:function(){e("#widgets-left").removeClass("chooser"),e(".widget-in-question").removeClass("widget-in-question")},closeSidebar:function(i){this.hoveredSidebar.addClass("closed").find(".handlediv").attr("aria-expanded","false"),e(i.target).css("min-height",""),this.hoveredSidebar=null}},i.ready(function(){wpWidgets.init()})}(jQuery);