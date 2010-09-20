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
(function($){

var $t, $s;

$.timeago = $t = function( timestamp, lang )
{
  if( timestamp instanceof Date ) 
    return $t.distanceInWords( timestamp, lang );

  else if( typeof timestamp == "string" ) 
    return $t.distanceInWords( $t.parse(timestamp), lang );
    
  else if( typeof timestamp == "number"  )
    return $t.distanceInWords( new Date(timestamp), lang );
    
  return $t.distanceInWords( $t.datetime( timestamp ), lang );
};

$.extend($t, {
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
  
  strings: function( lang )
  {
    if( !lang && !$.isFunction(this) )
    {
      if( lang = $(this).attr( 'className').match( /timeago-language-([a-z0-9_-]+)/i ) )
        lang = lang[1];
    }
    
    if( lang && typeof $s.strings[ lang ] == 'object' )
      return $s.strings[ lang ];
    
    return $s.strings;
  },
  
  substitute: function( stringOrFunction, number, distanceMillis ) 
  {
    var $l = $t.strings.call( this ),
      string = $.isFunction( stringOrFunction ) ? stringOrFunction( number, distanceMillis ) : stringOrFunction,
      value = ( $l.numbers && $l.numbers[ number ] ) || number;

    return string.replace( /%d/i, value );
  },
  
  distance: function( date )
  {
    return ( new Date().getTime() + $s.deviance - date.getTime() );
  },
  
  distanceInWords: function( date, lang )
  {
    return $t.inWords.call( this, $t.distance.call( this, date ), lang );
  },
  
  inWords: function( distanceMillis, lang ) 
  {
    var $l = $t.strings.call( this, lang ),
      s = $t.substitute,
      prefix = $l.prefixAgo,
      suffix = $l.suffixAgo;
    
    if( $s.allowFuture ) 
    {
      if( distanceMillis < 0 )
      {
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
      words = seconds < 45 && s.call( this, $l.seconds, Math.round(seconds), distanceMillis ) 
        || seconds < 90 && s.call( this, $l.minute, 1, distanceMillis )
        || minutes < 45 && s.call( this, $l.minutes, Math.round(minutes), distanceMillis )
        || minutes < 90 && s.call( this, $l.hour, 1, distanceMillis )
        || hours < 24 && s.call( this, $l.hours, Math.round(hours), distanceMillis )
        || hours < 48 && s.call( this, $l.day, 1, distanceMillis )
        || days < 30 && s.call( this, $l.days, Math.floor(days), distanceMillis )
        || days < 60 && s.call( this, $l.month, 1, distanceMillis )
        || days < 365 && s.call( this, $l.months, Math.floor(days / 30), distanceMillis )
        || years < 2 && s.call( this, $l.year, 1, distanceMillis )
        || s.call( this, $l.years, Math.floor(years), distanceMillis );

    return $.trim( [prefix, words, suffix].join(" ") );
  },

  parse: function( iso8601 )
  {
    var s = $.trim( iso8601 )
      .replace(/\.\d\d\d+/,"") // remove milliseconds
      .replace(/-/,"/").replace(/-/,"/")
      .replace(/T/," ").replace(/Z/," UTC")
      .replace(/([\+-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400

    return new Date( s );
  },
  
  datetime: function()
  {
    // jQuery's `is()` doesn't play well with HTML5 in IE
    var isTime = $(this).get(0).tagName.toLowerCase() == "time", // $(elem).is("time");
      iso8601 = isTime ? $(this).attr("datetime") : $(this).attr("title");

    return $t.parse( iso8601 );
  },
  
  refreshAll: function()
  {
    $( '.timeago-automatic-refresh' ).each( $t.refresh );
  },
  
  prepareData: function()
  {
    var $this = $(this);
    if( !$this.data("timeago") )
    {
      $this.data( "timeago", { datetime: $t.datetime.call( $this ) } );
      var text = $.trim( $this.text() );
      if( text.length )
        $this.attr( "title", text );
    }

    return $this.data("timeago");
  },
  
  refresh: function()
  {
    var data = $t.prepareData.call( this );
    if( !isNaN( data.datetime ) ) 
      $(this).text( $t.distanceInWords.call( this, data.datetime ) );

    return this;
  }
});

$s = $t.settings;

$.fn.timeago = function() 
{
  this.each( $t.refresh ).addClass( 'timeago-automatic-refresh' );

  if( !$t.interval && $s.refreshMillis )
    $t.interval = window.setInterval( $t.refreshAll, $s.refreshMillis );
  
  return this;
};

// fix for IE6 suckage
document.createElement("abbr");
document.createElement("time");

})(jQuery);