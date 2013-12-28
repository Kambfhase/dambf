
;(function($){

	$.fn.dambf = function( options){
		return this.replaceWith(function(){
			var e = this;
			var neu = $('<iframe>',{
				src : 'iframe.html',
				height:300,
				width:800
			});
			neu.data('foo', e);

			var arr = $.map( $(e).find('source'), function( source){
				return {
					src: $(source).attr('src'),
					type: $(source).attr('type')
				};
			});

			$(window).on('message', function(event){
				var orig = event.originalEvent;
				if( neu.get(0).contentWindow != orig.source) return;

				if( orig.data.cmd == 'ready' && orig.source == neu.get(0).contentWindow ){
					orig.source.postMessage({
						cmd: 'sources',
						arg: arr
					}, '*');

					orig.source.postMessage({
						cmd: 'podlove',
						arg: 

{
    "pluginPath": "http:\/\/not-safe-for-work.de\/wp-content\/plugins\/podlove-podcasting-plugin-for-wordpress\/lib\/modules\/podlove_web_player\/player\/podlove-web-player\/static\/",
    "alwaysShowHours": true,
    "alwaysShowControls": true,
    "timecontrolsVisible": false,
    "summaryVisible": false,
    "hidetimebutton": false,
    "hidedownloadbutton": false,
    "hidesharebutton": false,
    "sharewholeepisode": false,
    "loop": false,
    "chapterlinks": "all",
    "permalink": "http:\/\/not-safe-for-work.de\/nsfw079-die-gruene-elke\/",
    "title": "NSFW079 Die gr\u00fcne Elke",
    "subtitle": "USVs \u2013 Jahresr\u00fcckblick 1983 \u2014 Zigarettenrauchende Fussballer \u2014 Iran \u2014 Vibratoren \u2014 Bitcoins \u2014 Elektromobilit\u00e4t",
    "summary": "Zur letzten Sendung in diesem Jahr nehmen wir die schwere B\u00fcrde des Jahresr\u00fcckblicks auf uns und schauen einfach mal in die unmittelbare Vergangenheit: 1983. Das mischen wir mit Skepsis \u00fcber den Finanzmarkt und Hoffnung f\u00fcr die Politik, Klappmessern, zigarettenrauchende Fu\u00dfballern, die politische Gesamtlage und \u00fcberhaupt so viel unterschiedliches Zeug, dass wir mehr als nur gl\u00fccklich sind, dass so viele Leute live die Shownotes mitf\u00fchren.<br \/>\r\n<br \/>\r\nWir bedanken uns bei allen Unterst\u00fctzern f\u00fcr ein tolles Podcast-Jahr und w\u00fcnschen Euch einen guten Rutsch und was man sonst noch so braucht. Es macht viel Spa\u00df mit Euch und wir sehen zu, Euch auch im n\u00e4chsten Jahr angemessene Unterhaltung bereitzustellen.",
    "poster": "http:\/\/meta.metaebene.me\/media\/nsfw\/not-safe-for-work-logo.jpg",
    "duration": "03:20:22",
    "chaptersVisible": false,
    "features": ["current", "progress", "duration", "tracks", "fullscreen", "volume"],
    "chapters": [{
        "start": "00:00:00.000",
        "title": "Intro",
        "href": "",
        "image": ""
    }, {
        "start": "00:01:38.000",
        "title": "Babo",
        "href": "",
        "image": ""
    }, {
        "start": "00:11:14.000",
        "title": "Fluppdizit\u00e4t",
        "href": "",
        "image": ""
    }, {
        "start": "00:26:33.000",
        "title": "Mach' det aues!",
        "href": "",
        "image": ""
    }, {
        "start": "00:36:36.000",
        "title": "83\/1",
        "href": "",
        "image": ""
    }, {
        "start": "01:08:43.000",
        "title": "Pimmelschrank",
        "href": "",
        "image": ""
    }, {
        "start": "01:35:31.000",
        "title": "Die Stille an der Ampel",
        "href": "",
        "image": ""
    }, {
        "start": "02:01:05.000",
        "title": "Bitcoin",
        "href": "",
        "image": ""
    }, {
        "start": "02:11:10.000",
        "title": "Walter Frosch",
        "href": "",
        "image": ""
    }, {
        "start": "02:18:52.000",
        "title": "Der Seher",
        "href": "",
        "image": ""
    }, {
        "start": "02:30:06.000",
        "title": "83\/2",
        "href": "",
        "image": ""
    }, {
        "start": "03:01:29.000",
        "title": "Behelmt, bem\u00fctzt, bemantelt",
        "href": "",
        "image": ""
    }, {
        "start": "03:14:57.000",
        "title": "Verabschiedung",
        "href": "",
        "image": ""
    }, {
        "start": "03:17:19.000",
        "title": "Outro",
        "href": "",
        "image": ""
    }]
}


					},'*');
				}

				if( orig.data.cmd == 'resize'){
					console.log("resizing!")
					/*if( false){
						neu.stop(true,true).animate({height:orig.data.arg,duration:70, easing:"linear"});
					} else */
					//setTimeout(function(){
						neu.height(orig.data.arg);
					//},10)
				}
			})

			return neu;
		});
	}

})(jQuery);

