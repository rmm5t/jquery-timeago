# timeago: a jQuery plugin

Timeago is a jQuery plugin that makes it easy to support automatically updating
fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago") from ISO 8601
formatted dates and times embedded in your HTML (à la microformats).

## Usage

First, load jQuery and the plugin:

```html
<script src="jquery.min.js" type="text/javascript"></script>
<script src="jquery.timeago.js" type="text/javascript"></script>
```

Now, let's attach it to your timestamps on DOM ready - put this in the head section:

```html
<script type="text/javascript">
   jQuery(document).ready(function() {
     $("abbr.timeago").timeago();
   });
</script>
```

This will turn all abbr elements with a class of timeago and an ISO 8601
timestamp in the title (conforming to the
[datetime design pattern microformat](http://microformats.org/wiki/datetime-design-pattern)):

```html
<abbr class="timeago" title="2011-12-17T09:24:17Z">December 17, 2011</abbr>
```

into something like this:

```html
<abbr class="timeago" title="December 17, 2011">about 1 day ago</abbr>
```

HTML5 `<time>` elements are also supported:

```html
<time class="timeago" datetime="2011-12-17T09:24:17Z">December 17, 2011</time>
```

As time passes, the timestamps will automatically update.

You can override the default labels as well, using either the difference in time
or the original date-time values.

```html
<script type="text/javascript">
var timeago_ranges = {};
    timeago_ranges[59*$.timeago.units.sec] = "moments %sfx"; // moments ago
    timeago_ranges[119*$.timeago.units.sec] = "1 minute %sfx"; // 1 minute ago
    timeago_ranges[59*$.timeago.units.min] = "%NM minutes %sfx"; // 23 minutes ago
    timeago_ranges[119*$.timeago.units.min] = "1 hour %sfx"; // 1 hour ago
    timeago_ranges[23*$.timeago.units.hour] = "%NH hours %sfx"; // 12 hours ago
    timeago_ranges[1*$.timeago.units.year] = "%b %d"; // Jan 12
    timeago_ranges[9999*$.timeago.units.year] = "%b %d %Y"; // Jan 12 20012
$.timeago.ranges = timeago_ranges;
</script>
```

**For more usage and examples**: [http://timeago.yarp.com/](http://timeago.yarp.com/)

**For different language configurations**: visit the [`locales`](https://github.com/rmm5t/jquery-timeago/tree/master/locales) directory.

## Author

[Ryan McGeary](http://ryan.mcgeary.org) ([@rmm5t](http://twitter.com/rmm5t))

## Other

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2008-2012, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
