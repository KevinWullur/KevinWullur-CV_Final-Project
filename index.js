$(document).ready(function(){
    $('.submit').click(function(event) {
        event.preventDefault()

        var name =$('.name').val()
        var email =$('.email').val()
        var message =$('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(name.length >= 3) {
            statusElm.append('<div>Name is valid</div>')
        }else{
            statusElm.append('<div>Name is not valid</div>')
        }

        if(email.length >= 7 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>Email sent successfully</div>')
        }else{
            statusElm.append('<div>Email is not sent</div>')
        }

        if(message.length >= 2) {
            statusElm.append('<div>Message sent successfully</div>')
        }else{
            statusElm.append('<div>Message is not sent</div>')
        }
    })
})