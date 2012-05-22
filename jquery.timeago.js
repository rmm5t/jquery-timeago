/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 0.11.2
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
    $.timeago = function(timestamp, settings) {
        if (timestamp instanceof Date) {
            return inWords(timestamp, settings);
        } else if (typeof timestamp === "string") {
            return inWords($.timeago.parse(timestamp), settings);
        } else {
            return inWords($.timeago.datetime(timestamp), settings);
        }
    };
    var $t = $.timeago;

    $.extend($.timeago, {
        settings: {
            refreshMillis: 2000,
            allowFuture: false,
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
                wordSeparator: " ",
                numbers: []
            }
        },
        inWords: function(distanceMillis, settings) {
            var $l = settings.strings;
            var prefix = $l.prefixAgo;
            var suffix = $l.suffixAgo;
            if (settings.allowFuture) {
                if (distanceMillis < 0) {
                    prefix = $l.prefixFromNow;
                    suffix = $l.suffixFromNow;
                }
            }

            var seconds = Math.abs(distanceMillis) / 1000;
            var minutes = seconds / 60;
            var hours = minutes / 60;
            var days = hours / 24;
            var years = days / 365;

            function substitute(stringOrFunction, number) {
                var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
                var value = ($l.numbers && $l.numbers[number]) || number;
                return string.replace(/%d/i, value);
            }

            var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
                seconds < 90 && substitute($l.minute, 1) ||
                minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
                minutes < 90 && substitute($l.hour, 1) ||
                hours < 24 && substitute($l.hours, Math.round(hours)) ||
                hours < 42 && substitute($l.day, 1) ||
                days < 30 && substitute($l.days, Math.round(days)) ||
                days < 45 && substitute($l.month, 1) ||
                days < 365 && substitute($l.months, Math.round(days / 30)) ||
                years < 1.5 && substitute($l.year, 1) ||
                substitute($l.years, Math.round(years));

            var separator = $l.wordSeparator === undefined ?  " " : $l.wordSeparator;
            return $.trim([prefix, words, suffix].join(separator));
        },
        parse: function(iso8601) {
            var s = $.trim(iso8601);
            s = s.replace(/\.\d\d\d+/,""); // remove milliseconds
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

    $.fn.timeago = function(settings) {
        var self = this;
        var $s = $.extend(true, {}, $t.settings, settings);
        self.data("timeago", { settings: $s });
        var timeago, _i, _len;

        var timeago, _i, _len;

        for (_i = 0, _len = self.length; _i < _len; _i++) {
            timeago = self[_i];
            refresh(timeago);
            if ($s.refreshMillis > 0) {
                restart(timeago, $s.refreshMillis);
            }
        }
        return self;
    };

    var restart;
    restart = function(object, refreshMillis) {
        return setTimeout(function() {
            var again;
            try {
                refresh(object);
                again = true;
            } catch (e) {
                again = false;
            }
            if (again) {
                return restart(object, refreshMillis);
            }
        }, refreshMillis);
    };

    function refresh(object) {
        console.log(object);
        var data = prepareData(object);
        if (!isNaN(data.datetime)) {
            t = $(object);
            t.text(inWords(data.datetime, data.settings));
            if (data.datetime.getTime() > (1).hours().ago().getTime()){
                t.parent().addClass('lessThanOneDay');
            } else{
                t.parent().removeClass('lessThanOneDay');
            }
        }
        return this;
    }

    function prepareData(element) {
        element = $(element);
        var data = element.data("timeago");
        if (!data.datetime) {
            data = $.extend(true, {}, data, { datetime:$t.datetime(element) });
            element.data("timeago", data);
            var text = $.trim(element.text());
            if (text.length > 0 && !($t.isTime(element) && element.attr("title"))) {
                element.attr("title", text);
            }
        }
        return data;
    }

    function inWords(date, settings) {
        return $t.inWords(distance(date), settings);
    }

    function distance(date) {
        return (new Date().getTime() - date.getTime());
    }

    // fix for IE6 suckage
    document.createElement("abbr");
    document.createElement("time");
}(jQuery));
