$(document).ready(function () {
    var $jours = $('.jour');
    var $puces = $('.bullets .entypo-record		');

    function init() {
        setTimeout(function () {
            $('body').addClass('isok');
            $jours.hide();
            $('.wrapper').fadeIn('slow', function () {
                $jours.first().fadeIn('slow');
                $puces.removeClass('active').first().addClass('active'); //manquait les parenthèses après "first"
            });
        }, 2000);

    }
    $puces.click(function () { //manquait un "s" à $puce
        var $this = $(this);
        var cible = $this.attr('data-cible');
        $jours.hide();

        $($jours.get(cible)).fadeIn()
        $puces.removeClass('active');
        $this.addClass('active');
    });
    init();
}); //manquait chevron fermant
