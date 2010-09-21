/*
 * timeago: a jQuery plugin, version: 0.9.2 (2010-09-14)
 * @requires jQuery v1.2.3 or later
 *
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2008-2010, Ryan McGeary (ryanonjavascript -[at]- mcgeary [*dot*] org)
 */
(function($) {
  var $t, $s;
  
  $.timeago = function(timestamp) {
    if (timestamp instanceof Date) return inWords(timestamp);
    else if (typeof timestamp == "string") return inWords($t.parse(timestamp));
    else if( typeof timestamp == "number"  ) return inWords(new Date(timestamp));
    else return inWords($t.datetime(timestamp));
  };

  $t = $.extend($.timeago, {
	interval: null,
    settings: {
      refreshMillis: 60000,
      allowFuture: false,
      deviance: 0,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years",
        numbers: []
      }
    },
    substitute: function(stringOrFunction, number) {
      var $l = $s.strings,
        string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction,
        value = ($l.numbers && $l.numbers[number]) || number;
      return string.replace(/%d/i, value);
    },
    inWords: function(distanceMillis) {
      var $l = $s.strings,
        s = $t.substitute,
        prefix = $l.prefixAgo,
        suffix = $l.suffixAgo;
		
      if ($s.allowFuture) {
        if (distanceMillis < 0) {
          prefix = $l.prefixFromNow;
          suffix = $l.suffixFromNow;
        }
        distanceMillis = Math.abs(distanceMillis);
      }

      var seconds = distanceMillis / 1000,
        minutes = seconds / 60,
        hours = minutes / 60,
        days = hours / 24,
        years = days / 365,
        words = seconds < 45 && s($l.seconds, Math.round(seconds))
        || seconds < 90 && s($l.minute, 1)
        || minutes < 45 && s($l.minutes, Math.round(minutes))
        || minutes < 90 && s($l.hour, 1)
        || hours < 24 && s($l.hours, Math.round(hours))
        || hours < 48 && s($l.day, 1)
        || days < 30 && s($l.days, Math.floor(days))
        || days < 60 && s($l.month, 1)
        || days < 365 && s($l.months, Math.floor(days / 30))
        || years < 2 && s($l.year, 1)
        || s($l.years, Math.floor(years));

      return $.trim([prefix, words, suffix].join(" "));
    },
    parse: function(iso8601) {
      var s = $.trim(iso8601)
      	.replace(/\.\d{3,}/,"") // remove milliseconds
      	.replace(/-/,"/").replace(/-/,"/")
      	.replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC")
      	.replace(/([\+-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400

      return new Date(s);
    },
    datetime: function(elem) {
      // jQuery's `is()` doesn't play well with HTML5 in IE
      var isTime = $(elem).get(0).tagName.toLowerCase() == "time", // $(elem).is("time");
        iso8601 = isTime ? $(elem).attr("datetime") : $(elem).attr("title");
      return $t.parse(iso8601);
    }
  });
  
  $s = $t.settings;
  
  $.fn.timeago = function() {
    
    this.each(refresh).addClass( 'timeago-automatic-refresh' );

    if ( !$t.interval && $s.refreshMillis > 0) {
      $t.interval = setInterval( refreshAll, $s.refreshMillis);
    }
    return this;
  };

  function refreshAll() {
    $( '.timeago-automatic-refresh' ).each( refresh );
  }

  function refresh() {
    var data = prepareData(this);
    if (!isNaN(data.datetime)) {
      $(this).text(inWords(data.datetime));
    }
    return this;
  }

  function prepareData(element) {
    element = $(element);
    if (!element.data("timeago")) {
      element.data("timeago", { datetime: $t.datetime(element) });
      var text = $.trim(element.text());
      if (text.length > 0) element.attr("title", text);
    }
    return element.data("timeago");
  }

  function inWords(date) {
    return $t.inWords(distance(date));
  }

  function distance(date) {
    return (new Date().getTime() + $s.deviance - date.getTime());
  }

  // fix for IE6 suckage
  document.createElement("abbr");
  document.createElement("time");
})(jQuery);
