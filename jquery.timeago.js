/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 0.11.4
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2012, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
(function($) {
  $.timeago = function(timestamp) {
    if (timestamp instanceof Date) {
      return inWords(timestamp);
    } else if (typeof timestamp === "string") {
      return inWords($.timeago.parse(timestamp));
    } else if (typeof timestamp === "number") {
      return inWords(new Date(timestamp));
    } else {
      return inWords($.timeago.datetime(timestamp));
    }
  };
  var $t = $.timeago;

  // Units.
  var sec = 1,
      min = 60*sec,
      hour = 60*min,
      day = 24*hour,
      week = 7*day,
      month = 30*day,
      year = 365*day;

  var units = {
    sec : sec,
    min : min,
    hour : hour,
    day : day,
    week : week,
    month : month,
    year : year
  };
  // Smallest to Largest!
  var ranges = {};
      ranges[45*units.sec] = "%pfx less than a minute %sfx";
      ranges[90*units.sec] = "%pfx about a minute %sfx";
      ranges[45*units.min] = "%pfx %NM minutes %sfx";
      ranges[90*units.min] = "%pfx about an hour %sfx";
      ranges[24*units.hour] = "%pfx about %NH hours %sfx";
      ranges[42*units.hour] = "%pfx a day %sfx";
      ranges[30*units.day] = "%pfx %Nd days %sfx";
      ranges[45*units.day] = "%pfx about a month %sfx";
      ranges[365*units.day] = "%pfx %Nm months %sfx";
      ranges[1.5*units.year] = "%pfx about a year %sfx";
      ranges[9999*units.year] = "%pfx %Ny years %sfx";

  $.extend($.timeago, {
    settings: {
      refreshMillis: 60000,
      allowFuture: false,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        month_names: ['Jan','Feb','Mar','Apr','May','Jun',
                      'Jul','Aug','Sep','Oct','Nov','Dec']

      }
    },
    ranges: ranges,
    units: units,
    inWords: function(date) {
      var distanceMillis = distance(date);

      var $l = this.settings.strings;
      var prefix = $l.prefixAgo;
      var suffix = $l.suffixAgo;
      if (this.settings.allowFuture) {
        if (distanceMillis < 0) {
          prefix = $l.prefixFromNow;
          suffix = $l.suffixFromNow;
        }
      }

      // Assemble replacements.  Not the full set, but pretty good.

      // Deltas.
      var seconds = Math.round(Math.abs(distanceMillis) / 1000);
      var minutes = Math.round(seconds / 60);
      var hours = Math.round(minutes / 60);
      var days = Math.round(hours / 24);
      var months = Math.round(days / 30);
      var years = Math.round(days / 365);

      var times = {
        '%NS': seconds,
        '%NM': minutes,
        '%NH': hours,
        '%Nd': days,
        '%Nm': months,
        '%ny': years,
        '%d' : date.getDate(),
        '%m' : date.getMonth(),
        '%b' : $l.month_names[date.getMonth()],
        '%Y' : date.getFullYear(),
        '%sfx' : suffix,
        '%pfx' : prefix
      };

      // Find the matching range.
      current_range = '';
      for(range in this.ranges) {
        if(seconds < range) {
            current_range = this.ranges[range];
            break;
        }
      }
      return_val = current_range;

      for(key in times) {
        return_val = return_val.replace(key, times[key]);
      }

      return return_val

    },
    parse: function(iso8601) {
      var s = $.trim(iso8601);
      s = s.replace(/\.\d+/,""); // remove milliseconds
      s = s.replace(/-/,"/").replace(/-/,"/");
      s = s.replace(/T/," ").replace(/Z/," UTC");
      s = s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
      return new Date(s);
    },
    datetime: function(elem) {
      var iso8601 = $t.isTime(elem) ? $(elem).attr("datetime") : $(elem).attr("title");
      return $t.parse(iso8601);
    },
    isTime: function(elem) {
      // jQuery's `is()` doesn't play well with HTML5 in IE
      return $(elem).get(0).tagName.toLowerCase() === "time"; // $(elem).is("time");
    }
  });

  $.fn.timeago = function() {
    var self = this;
    self.each(refresh);

    var $s = $t.settings;
    if ($s.refreshMillis > 0) {
      setInterval(function() { self.each(refresh); }, $s.refreshMillis);
    }
    return self;
  };

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
      if (text.length > 0 && !($t.isTime(element) && element.attr("title"))) {
        element.attr("title", text);
      }
    }
    return element.data("timeago");
  }

  function inWords(date) {
    return $t.inWords(date);
  }

  function distance(date) {
    return (new Date().getTime() - date.getTime());
  }

  // fix for IE6 suckage
  document.createElement("abbr");
  document.createElement("time");
}(jQuery));
