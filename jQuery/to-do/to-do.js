$(document).ready(
    () => {
        $('#btn').click(() => {
            var toAdd = $('input[name = listItem]').val();
            let isConfirm = confirm('Do you want to add task')
            if (toAdd.length >= 3 && isConfirm) {
                $('ol').append('<li>' + toAdd + '</li>');
                $('input[name = listItem]').val('');

            }
        });
        $(document).on('dblclick', 'li', function () {
            $(this).toggleClass('strike').fadeOut('slow');
        });
    }

)