define("hashchange/1.3.0/hashchange",["#jquery/1.7.2/jquery"],function(e,t){var n=e("#jquery/1.7.2/jquery");(function(e,t,n){"$:nomunge";function f(e){return e=e||location.href,"#"+e.replace(/^[^#]*#?(.*)$/,"$1")}var r="hashchange",i=document,s,o=e.event.special,u=i.documentMode,a="on"+r in t&&(u===n||u>7);e.fn[r]=function(e){return e?this.bind(r,e):this.trigger(r)},e.fn[r].delay=50,o[r]=e.extend(o[r],{setup:function(){if(a)return!1;e(s.start)},teardown:function(){if(a)return!1;e(s.stop)}}),s=function(){function p(){var n=f(),i=h(u);n!==u?(c(u=n,i),e(t).trigger(r)):i!==u&&(location.href=location.href.replace(/#.*/,"")+i),o=setTimeout(p,e.fn[r].delay)}var s={},o,u=f(),l=function(e){return e},c=l,h=l;return s.start=function(){o||p()},s.stop=function(){o&&clearTimeout(o),o=n},e.browser.msie&&!a&&function(){var t,n;s.start=function(){t||(n=e.fn[r].src,n=n&&n+f(),t=e('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){n||c(f()),p()}).attr("src",n||"javascript:0").insertAfter("body")[0].contentWindow,i.onpropertychange=function(){try{event.propertyName==="title"&&(t.document.title=i.title)}catch(e){}})},s.stop=l,h=function(){return f(t.location.href)},c=function(n,s){var o=t.document,u=e.fn[r].domain;n!==s&&(o.title=i.title,o.open(),u&&o.write('<script>document.domain="'+u+'"</script>'),o.close(),t.location.hash=n)}}(),s}()})(n,this)});