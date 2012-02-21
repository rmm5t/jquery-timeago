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

This will turn all abbr elements with a class of timeago and an ISO 8601 timestamp in the title:

```html
<abbr class="timeago" title="2008-07-17T09:24:17Z">July 17, 2008</abbr>
```

into something like this:

```html
<abbr class="timeago" title="July 17, 2008">about 1 day ago</abbr>
```

As time passes, the timestamps will automatically update.

**For more usage and examples**: [http://timeago.yarp.com/](http://timeago.yarp.com/)

**For different language configurations**: [http://gist.github.com/6251](http://gist.github.com/6251)

## Time difference between client and server

Servers and clients can have a time difference. For example, when the user has is 20 seconds in advance, he'll get something like "20 seconds from now". If you want to fix this, you've the possibility to add following code to your html.

```html
<script>
    this.timediffServerClient = (new Date(<SERVER_UTC_TIMESTAMP>).getTime() - new Date().getTime());
</script>
```

Replace <SERVER_UTC_TIMESTAMP> with the UTC timestamp of the server, and the diffence will be corrected. If ```this.timediffServerClient``` is not set, it doesn't make any correction.


## Author

[Ryan McGeary](http://ryan.mcgeary.org) ([@rmm5t](http://twitter.com/rmm5t))

## Other

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2008-2010, Ryan McGeary (ryanonjavascript -[at]- mcgeary [*dot*] org)
