import '../styles/index.scss';
import $ from "jquery";
import validate from "jquery-validation";

console.log('webpack starterkit');


$('form').validate({
    rules: {
        name: {
            required: true,
            minlength: 3
        },
        email: {
            required: true,
            email: true
        },
        number: {
            required: true,
            number: true
        },
        textarea: {
            required: true,
            textarea: true
        }            
    },
    messages: {
        name: {
            required: 'Поле имя обязательно для заполнения',   
            minlength: 'Минимальное количество символов 3'
        },
        email: {
            required: 'Поле email обязательно для заполнения',
            email: 'В это поле нужно вводить только email'
        },
        number: {
            required: 'Поле телефон обязательно для заполнения',
            number: 'В это поле нужнно вводить только номер телефона'
        },
        textarea: {
            required: 'Данное поле обязательно для заполнения'
        }   
    }
});