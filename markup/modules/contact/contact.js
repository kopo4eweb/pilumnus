
(function () {
    var form = document.getElementById('contact__form');
    var requiredElements = form.querySelectorAll('[required]');

    console.log(requiredElements);

    for (var i = 0; i < requiredElements.length; i++) {
        // console.log(requiredElements[i]);
        requiredElements[i].required = false;
    }

    form.onsubmit = function (e) {
        e.preventDefault();

        // console.log('click button submit');
        var countError = 0;
        for (i = 0; i < requiredElements.length; i++) {
            if (requiredElements[i].required === false) {

                if (requiredElements[i].value.length > 0) {
                    console.log(requiredElements[i].value);
                } else {
                    countError++;
                }
            }
        }
        console.log(countError);
    };
    // document.getElementById('input_name').required = false;
})();
