$(function () {
    (function () {

        var handle = $(".js-slider-handle"),
            text = $(".js-slider-text");

        $( ".js-slider" ).slider({
            range: "min",
            value: 7,
            min: 7,
            max: 30,
            create: function() {
                text.text( $(this).slider( "value" ) );
            },
            slide: function( event, ui ) {
                App.calc.tarif = Math.max(0, parseInt(ui.value) - 7);
                text.text( ui.value );
            }
        });

    })();
});
