var zeropad = function (num) {
  return ((num < 10) ? '0' : '') + num;
};
var iso8601 = function (date) {
  return date.getUTCFullYear()
    + "-" + zeropad(date.getUTCMonth()+1)
    + "-" + zeropad(date.getUTCDate())
    + "T" + zeropad(date.getUTCHours())
    + ":" + zeropad(date.getUTCMinutes())
    + ":" + zeropad(date.getUTCSeconds()) + "Z";
};

function prepareDynamicDates() {
  $('abbr.loaded').attr("title", iso8601(new Date()));
  $('abbr.modified').attr("title", iso8601(new Date(document.lastModified)));
}

function loadNumbers() {
  jQuery.timeago.settings.strings.numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
}
function unloadNumbers() {
  jQuery.timeago.settings.strings.numbers = [];
}

function loadPigLatin() {
  jQuery.timeago.settings.strings['suffixAgo'] = " ago-hay";
  jQuery.timeago.settings.strings['suffixFromNow'] = " omNow-fray";

  jQuery.timeago.ranges.seconds.string = "%pfxess-lay an-thay a-hay inute-may%sfx";
  jQuery.timeago.ranges.minute.string = "%pfxabout-hay a-hay inute-may%sfx";
  jQuery.timeago.ranges.minutes.string = "%pfx%NM inutes-may%sfx";
  jQuery.timeago.ranges.hour.string = "%pfxabout-hay an-hay hour-hay%sfx";
  jQuery.timeago.ranges.hours.string = "%pfxabout-hay %NH hours-hay%sfx";
  jQuery.timeago.ranges.day.string = "%pfxa-hay ay-day%sfx";
  jQuery.timeago.ranges.days.string = "%pfx%Nd ays-day%sfx";
  jQuery.timeago.ranges.month.string = "%pfxabout-hay a-hay onth-may%sfx";
  jQuery.timeago.ranges.months.string = "%pfx%Nm onths-may%sfx";
  jQuery.timeago.ranges.year.string = "%pfxabout-hay a-hay ear-yay%sfx";
  jQuery.timeago.ranges.years.string = "%pfx%Ny years-yay%sfx";
}

function loadRussian() {
  (function() {
    function numpf(n, f, s, t) {
      // f - 1, 21, 31, ...
      // s - 2-4, 22-24, 32-34 ...
      // t - 5-20, 25-30, ...
      var n10 = n % 10;
      if ( (n10 == 1) && ( (n == 1) || (n > 20) ) ) {
        return f;
      } else if ( (n10 > 1) && (n10 < 5) && ( (n > 20) || (n < 10) ) ) {
        return s;
      } else {
        return t;
      }
    }

    jQuery.timeago.settings.strings['prefixAgo'] = '';
    jQuery.timeago.settings.strings['prefixFromNow'] = "через ";
    jQuery.timeago.settings.strings['suffixAgo'] = " назад";
    jQuery.timeago.settings.strings['suffixFromNow'] = '';

    jQuery.timeago.ranges.seconds.string = "%pfxменьше минуты%sfx";
    jQuery.timeago.ranges.minute.string = "%pfxминуту%sfx";
    jQuery.timeago.ranges.minutes.string = function(values) { return numpf(values.minutes.value, "%pfx%NM минута%sfx", "%pfx%NM минуты%sfx", "%pfx%NM минут%sfx"); };
    jQuery.timeago.ranges.hour.string = "%pfxчас%sfx";
    jQuery.timeago.ranges.hours.string = function(values) { return numpf(values.hours.value, "%pfx%NH час%sfx", "%pfx%NH часа%sfx", "%pfx%NH часов%sfx"); };
    jQuery.timeago.ranges.day.string = "%pfxдень%sfx";
    jQuery.timeago.ranges.days.string = function(values) { return numpf(values.days.value, "%pfx%Nd день%sfx", "%pfx%Nd дня%sfx", "%pfx%Nd дней%sfx"); };
    jQuery.timeago.ranges.month.string = "%pfxмесяц%sfx";
    jQuery.timeago.ranges.months.string = function(values) { return numpf(values.months.value, "%pfx%Nm месяц%sfx", "%pfx%Nm месяца%sfx", "%pfx%Nm месяцев%sfx"); };
    jQuery.timeago.ranges.year.string = "%pfxгод%sfx";
    jQuery.timeago.ranges.years.string = function(values) { return numpf(values.years.value, "%pfx%Ny год%sfx", "%pfx%Ny года%sfx", "%pfx%Ny лет%sfx"); };
  })();
}

function loadMillis() {
  var millisSubstitution = function(values, millis) { return "%pfx" + millis + " milliseconds%sfx"; };

  jQuery.timeago.settings.strings['prefixAgo'] = '';
  jQuery.timeago.settings.strings['prefixFromNow'] = '';
  jQuery.timeago.settings.strings['suffixAgo'] = " ago";
  jQuery.timeago.settings.strings['suffixFromNow'] = " from now";

  jQuery.timeago.ranges.seconds.string = millisSubstitution;
  jQuery.timeago.ranges.minute.string = millisSubstitution;
  jQuery.timeago.ranges.minutes.string = millisSubstitution;
  jQuery.timeago.ranges.hour.string = millisSubstitution;
  jQuery.timeago.ranges.hours.string = millisSubstitution;
  jQuery.timeago.ranges.day.string = millisSubstitution;
  jQuery.timeago.ranges.days.string = millisSubstitution;
  jQuery.timeago.ranges.month.string = millisSubstitution;
  jQuery.timeago.ranges.months.string = millisSubstitution;
  jQuery.timeago.ranges.year.string = millisSubstitution;
  jQuery.timeago.ranges.years.string = millisSubstitution;
}

function loadOrigDates() {
  jQuery.timeago.ranges.day.string = "%m %d";
  jQuery.timeago.ranges.days.string = "%m %d";
  jQuery.timeago.ranges.month.string = "%m %d";
  jQuery.timeago.ranges.months.string = "%m %d";
  jQuery.timeago.ranges.year.string = "%b %d %Y";
  jQuery.timeago.ranges.years.string = "%Y-%m-%d";
}

function loadNoSpaces() {
  jQuery.timeago.ranges.minutes.string = "%pfx%Nmminutes%sfx";
}

function loadYoungOldYears() {
  jQuery.timeago.ranges.years.string = function(values) { return (values.years.value < 21) ? "%Ny young years" : "%Ny old years"; };
}
