# timeago: a jQuery plugin

Timeago is a jQuery plugin that makes it easy to support automatically updating
fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago") from ISO 8601
formatted dates and times embedded in your HTML (à la microformats).

## Usage

First, load jQuery and the plugin:

    <script src="jquery.min.js" type="text/javascript"></script>
    <script src="jquery.timeago.js" type="text/javascript"></script>

Now, let's attach it to your timestamps on DOM ready:

    <pre>
      jQuery(document).ready(function() {
        jQuery('abbr[class*=timeago]').timeago();
      });
    </pre>

This will turn all abbr elements with a class of timeago and an ISO 8601 timestamp in the title:

    <abbr class="timeago" title="2008-07-17T09:24:17Z">July 17, 2008</abbr>

into something like this:

    <abbr class="timeago" title="2008-07-17T09:24:17Z">about 1 day ago</abbr>

As time passes, the timestamps will automatically update.

**For more usage and examples**: [http://timeago.yarp.com/](http://timeago.yarp.com/)

## Other

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2008, Ryan McGeary (ryanonjavascript -[at]- mcgeary [*dot*] org)
