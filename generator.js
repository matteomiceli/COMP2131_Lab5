$(document).ready(function () {

    let subject;
    let image;

    $('form').on('submit', function (event) {
        let container = $(this).parent();
        console.log(container)
        event.preventDefault();
        subject = $(this).find('input[type = text]');
        subject = subject.val();


        image = $(this).next().find("img[alt='Randomly Generated Image']");

        if (subject != '') {
            image.attr('src', 'https://source.unsplash.com/400x250/?' + subject);
        } else {
            console.log('err')
        }

    })

})