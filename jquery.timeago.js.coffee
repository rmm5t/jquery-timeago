###
Timeago is a jQuery plugin that makes it easy to support automatically
updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").

@name timeago
@version 0.11.4
@requires jQuery v1.2.3+
@author Ryan McGeary
@license MIT License - http://www.opensource.org/licenses/mit-license.php

For usage and examples, visit:
http://timeago.yarp.com/

Copyright (c) 2008-2012, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
###
(($) ->
  # remove milliseconds
  # -04:00 -> -0400

  # jQuery's `is()` doesn't play well with HTML5 in IE
  # $(elem).is("time");
  refresh = (object) ->
    data = prepareData(object)
    unless isNaN(data.datetime)
      t = $(object)
      t.text inWords(data.datetime, data.settings)
      if data.datetime.getTime() > hourAgo().getTime()
        t.parent().addClass "lessThanOneDay"
      else
        t.parent().removeClass "lessThanOneDay"
    this
  prepareData = (element) ->
    element = $(element)
    data = element.data("timeago")
    unless data.datetime
      data = $.extend(true, {}, data,
        datetime: $t.datetime(element)
      )
      element.data "timeago", data
      text = $.trim(element.text())
      element.attr "title", text  if text.length > 0 and not ($t.isTime(element) and element.attr("title"))
    data
  inWords = (date, settings) ->
    $t.inWords distance(date), settings
  distance = (date) ->
    new Date().getTime() - date.getTime()
  hourAgo = ->
    date = undefined
    date = new Date()
    date.setHours date.getHours() - 1
    date
  $.timeago = (timestamp, settings) ->
    if timestamp instanceof Date
      inWords timestamp, settings
    else if typeof timestamp is "string"
      inWords $.timeago.parse(timestamp), settings
    else if typeof timestamp is "number"
      inWords new Date(timestamp), settings
    else
      inWords $.timeago.datetime(timestamp), settings

  $t = $.timeago
  $.extend $.timeago,
    settings:
      refreshMillis: 60000
      allowFuture: false
      strings:
        prefixAgo: null
        prefixFromNow: null
        suffixAgo: "ago"
        suffixFromNow: "from now"
        seconds: "less than a minute"
        minute: "about a minute"
        minutes: "%d minutes"
        hour: "about an hour"
        hours: "about %d hours"
        day: "a day"
        days: "%d days"
        month: "about a month"
        months: "%d months"
        year: "about a year"
        years: "%d years"
        wordSeparator: " "
        numbers: []

    inWords: (distanceMillis, settings) ->
      substitute = (stringOrFunction, number) ->
        string = (if $.isFunction(stringOrFunction) then stringOrFunction(number, distanceMillis) else stringOrFunction)
        value = ($l.numbers and $l.numbers[number]) or number
        string.replace /%d/i, value
      $l = settings.strings
      prefix = $l.prefixAgo
      suffix = $l.suffixAgo
      if settings.allowFuture
        if distanceMillis < 0
          prefix = $l.prefixFromNow
          suffix = $l.suffixFromNow
      seconds = Math.abs(distanceMillis) / 1000
      minutes = seconds / 60
      hours = minutes / 60
      days = hours / 24
      years = days / 365
      words = seconds < 45 and substitute($l.seconds, Math.round(seconds)) or seconds < 90 and substitute($l.minute, 1) or minutes < 45 and substitute($l.minutes, Math.round(minutes)) or minutes < 90 and substitute($l.hour, 1) or hours < 24 and substitute($l.hours, Math.round(hours)) or hours < 42 and substitute($l.day, 1) or days < 30 and substitute($l.days, Math.round(days)) or days < 45 and substitute($l.month, 1) or days < 365 and substitute($l.months, Math.round(days / 30)) or years < 1.5 and substitute($l.year, 1) or substitute($l.years, Math.round(years))
      separator = (if $l.wordSeparator is `undefined` then " " else $l.wordSeparator)
      $.trim [prefix, words, suffix].join(separator)

    parse: (iso8601) ->
      s = $.trim(iso8601)
      s = s.replace(/\.\d+/, "")
      s = s.replace(/-/, "/").replace(/-/, "/")
      s = s.replace(/T/, " ").replace(/Z/, " UTC")
      s = s.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2")
      new Date(s)

    datetime: (elem) ->
      iso8601 = (if $t.isTime(elem) then $(elem).attr("datetime") else $(elem).attr("title"))
      $t.parse iso8601

    isTime: (elem) ->
      $(elem).get(0).tagName.toLowerCase() is "time"

  $.fn.timeago = (settings) ->
    self = this
    $s = $.extend(true, {}, $t.settings, settings)
    self.data "timeago",
      settings: $s

    timeago = undefined
    _i = undefined
    _len = undefined
    timeago = undefined
    _i = undefined
    _len = undefined
    _i = 0
    _len = self.length

    while _i < _len
      timeago = self[_i]
      refresh timeago
      restart timeago, $s.refreshMillis  if $s.refreshMillis > 0
      _i++
    self

  restart = undefined
  restart = (object, refreshMillis) ->
    setTimeout (->
      again = undefined
      try
        refresh object
        again = true
      catch e
        again = false
      restart object, refreshMillis  if again
    ), refreshMillis


  # fix for IE6 suckage
  document.createElement "abbr"
  document.createElement "time"
) jQuery