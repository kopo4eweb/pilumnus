$(function () {
    $('.gallery__item').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        }
    });
});
