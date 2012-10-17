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
    return inWords(timestamp);
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
                      'Jul','Aug','Sep','Oct','Nov','Dec'],
        numbers: []
      }
    },
    // Smallest to Largest!
    ranges: {
      seconds: {
        limit: 45*units.sec,
        string:"%pfx less than a minute %sfx"
      },
      minute: {
        limit: 90*units.sec,
        string:"%pfx about a minute %sfx"
      },
      minutes: {
        limit: 45*units.min,
        string:"%pfx %NM minutes %sfx"
      },
      hour: {
        limit: 90*units.min,
        string:"%pfx about an hour %sfx"
      },
      hours: {
        limit: 24*units.hour,
        string:"%pfx about %NH hours %sfx"
      },
      day: {
        limit: 42*units.hour,
        string:"%pfx a day %sfx"
      },
      days: {
        limit: 30*units.day,
        string:"%pfx %Nd days %sfx"
      },
      month: {
        limit: 45*units.day,
        string:"%pfx about a month %sfx"
      },
      months: {
        limit: 365*units.day,
        string:"%pfx %Nm months %sfx"
      },
      year: {
        limit: 1.5*units.year,
        string:"%pfx about a year %sfx"
      },
      years: {
        limit: 9999*units.year,
        string:"%pfx %Ny years %sfx"
      },
    },
    units: units,
    inWords: function(timestamp) {
      var date;

      if (timestamp instanceof Date) {
        date = timestamp;
      } else if (typeof timestamp === "string") {
        date = $.timeago.parse(timestamp);
      } else if (typeof timestamp === "number") {
        date = new Date(timestamp);
      } else {
        date = $.timeago.datetime(timestamp);
      }

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


      // Calculate Deltas.
      var seconds = Math.round(Math.abs(distanceMillis) / 1000);
      var minutes = Math.round(seconds / 60);
      var hours = Math.round(minutes / 60);
      var days = Math.round(hours / 24);
      var months = Math.round(days / 30);
      var years = Math.round(days / 365);

      // Assemble replacements.  Not the full set, but pretty good.
      var times = {
        seconds: {
            pattern: '%NS',
            value: seconds
        },
        minutes: {
          pattern: '%NM',
          value: minutes
        },
        hours: {
          pattern: '%NH',
          value: hours
        },
        days: {
          pattern: '%Nd',
          value: days
        },
        months: {
          pattern: '%Nm',
          value: months
        },
        years: {
          pattern: '%ny',
          value: years
        },
        date_day: {
          pattern: '%d',
          value: date.getDate()
        },
        date_month: {
          pattern: '%m',
          value: date.getMonth()
        },
        date_monthname: {
          pattern: '%b',
          value: $l.month_names[date.getMonth()]
        },
        date_year: {
          pattern: '%Y',
          value: date.getFullYear()
        },
        suffix: {
          pattern: '%sfx',
          value: suffix
        },
        prefix: {
          pattern: '%pfx',
          value: prefix
        },
      };

      // Find the matching range.
      return_val = '';
      for(key in this.ranges) {
        range = this.ranges[key];
        console.log(range);
        if(seconds < range.limit) {
            return_val = range.string;
            break;
        }
      }

      function substitute(stringOrFunction, times) {
        var string = $.isFunction(stringOrFunction) ? stringOrFunction(times, distanceMillis) : stringOrFunction;

        for(key in times) {
            var pattern = times[key].pattern;
            var value = times[key].value;
            value = ($l.numbers && $l.numbers[value]) || value;
            string = string.replace(pattern, value);
        }

        return string;
      }

      return_val = substitute(return_val, times);

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
