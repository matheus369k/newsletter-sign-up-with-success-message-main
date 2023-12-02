const input = $('#email');
const label_email = $('#label_email')


$('#btn').click(function (e) { 

    e.preventDefault();

    Verification()

    return
});

$(input).change(function () { 

    MsgError('valid');

    return

});

function Verification() {

    const inputValue = $(input).val();

    if (inputValue.slice(Number(inputValue.length)-10, Number(inputValue.length)) !== '@gmail.com') {

        MsgError('inval');

        return

    }else if (Number(inputValue.length) < 14) {

        MsgError('inval');

        return
    }

    MsgError('valid');

    return
}


function MsgError(verif) {

    if (verif === 'valid') {
    
        $('#msgErroGmail').remove();

        $(input).removeClass('err');

        return


    }else if (verif === 'inval' && document.querySelector('#msgErroGmail') === null){

        const span = document.createElement('span');

        span.setAttribute('id', 'msgErroGmail')

        $(label_email).append(span);

        $('#msgErroGmail').text('Valid email required');

        $(input).addClass("err");

        return
    }

    return
}

