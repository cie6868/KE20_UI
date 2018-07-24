baseUrl = window.location.protocol + '//' + window.location.host;
pollApi = function() {
    $.get(baseUrl + '/api', function(json) {
        updateUi(json);
        setTimeout(pollApi, 250);
    });
}

window.onload = function() {
    pollApi();
}

$('#car-btn-pwr').click(function() {
    if ($(this).hasClass('car-btn-active'))
        url = baseUrl + '/api/power/off'
    else
        url = baseUrl + '/api/power/on'

    $.get(url, function(json) {
        updatePwr(json['pwr'])
    });
});

$('#car-btn-start').click(function(e) {
    if ($(this).hasClass('car-btn-active'))
        url = baseUrl + '/api/starter/off'
    else
        url = baseUrl + '/api/starter/on'

    $.get(url, function(json) {
        updateStart(json['start'])
    })
});

$('#car-btn-hl-low').click(function() {
    if ($(this).hasClass('car-btn-active'))
        url = baseUrl + '/api/headlamps/off'
    else
        url = baseUrl + '/api/headlamps/low'

    $.get(url, function(json) {
        updateHlLow(json['hl_low']);
        updateHlHigh(json['hl_high']);
    });
});

$('#car-btn-hl-high').click(function() {
    if ($(this).hasClass('car-btn-active'))
        url = baseUrl + '/api/headlamps/off'
    else
        url = baseUrl + '/api/headlamps/high'

    $.get(url, function(json) {
        updateHlLow(json['hl_low']);
        updateHlHigh(json['hl_high']);
    });
});

// Source: https://stackoverflow.com/questions/11978995/how-to-change-color-of-svg-image-using-css-jquery-svg-image-replacement
$('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});
