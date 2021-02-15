$(document).ready(function () {

    let subject;
    let image;

    $('form').on('submit', function (event) {

        event.preventDefault();
        subject = $(this).find('input[type = text]');
        subject = subject.val();

        image = $(this).next().find("img[alt='Randomly Generated Image']");

        if (subject != '') {
            image = image.attr('src', 'https://source.unsplash.com/400x250/?' + subject);
        } else {
            console.log('err');
        }
    })

    $('form').find("button[type='button']").on('click', function (event) {
        let form = $(this).parent();
        let img = form.next().find("img[alt='Randomly Generated Image']");

        $(img).clone().appendTo('#image-gallery');    
    })

})