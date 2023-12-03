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

    const fother = document.querySelector('body');

    $(fother.children).remove();

    const div = document.createElement('div');

    div.setAttribute('class', 'contianer_confirmation');

    div.setAttribute('id', 'div_confirmation');

    $(fother).append(div);

    const listCreater = {
        img: './assets/images/icon-success.svg',
        h1: 'Thanks for subscribing!', 
        p: 'A confirmation email has been sent to', 
        span: ` ${inputValue}. `,
        p_cont: 'Please open it and click the button inside to confirm your subscription.',
        button: 'Dismiss message'
    }
    
    const listCreaterKeys = Object.keys(listCreater)
    const listCreaterValues = Object.values(listCreater)

    for (let index = 0; index < 6; index++) {
        
        if ( index === 4) 
        {
            document.querySelector('.text').innerHTML+=`${listCreaterValues[index]}`;

            continue

        }

        const creatertag = document.createElement(`${listCreaterKeys[index]}`)

        if (index === 2) 
        {
            
            creatertag.setAttribute('class', 'text')

        }
        
        if (index === 0) 
        {

            creatertag.setAttribute('src', `${listCreaterValues[index]}`)

        } 
        else 
        {
            
            $(creatertag).text(`${listCreaterValues[index]}`);
        }

        if ( index === 3 ) 
        {
        
            $('.text').append(creatertag);

            continue
            
        }
        
        $(div).append(creatertag);
        
    }

    //const p = document.createElement('p')

    //$(p).text(`A confirmation email has been sent to ${inputValue}. Please open it and click the button inside to
    //confirm your subscription.`);

    //const btn = document.createElement('button');

    //$(btn).text('Dismiss message');
    

    return
};


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

