require('../css/style.css');
let data=require('./data.js');
let $=require('jquery');

$.each(data, function(k){
    $('body').append('<h1> Name: '+data[k].name+'</h1>');
});