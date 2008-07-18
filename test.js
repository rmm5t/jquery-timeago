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

jQuery(document).ready(function($) {
  $('abbr[class*=loaded]').attr("title", iso8601(new Date()));
  $('abbr[class*=modified]').attr("title", iso8601(new Date(document.lastModified)));
});
