updateUi = function(json) {
    updatePwr(json['pwr']);
    updateStart(json['start']);
    updateHlLow(json['hl_low']);
    updateHlHigh(json['hl_high']);
}

updatePwr = function(val) {
    if (val)
        $('#car-btn-pwr').addClass('car-btn-active');
    else
        $('#car-btn-pwr').removeClass('car-btn-active');
}

updateStart = function(val) {
    if (val)
        $('#car-btn-start').addClass('car-btn-active');
    else
        $('#car-btn-start').removeClass('car-btn-active');
}

updateHlLow = function(val) {
    if (val)
        $('#car-btn-hl-low').addClass('car-btn-active');
    else
        $('#car-btn-hl-low').removeClass('car-btn-active');
}

updateHlHigh = function(val) {
    if (val)
        $('#car-btn-hl-high').addClass('car-btn-active');
    else
        $('#car-btn-hl-high').removeClass('car-btn-active');
}
