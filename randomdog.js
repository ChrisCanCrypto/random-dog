'use strict';
var dogArr = [];


function getDogImgs(num){
    $('.img-gal').html('');
    if(num < 1 || num > 50){
        alert('The number entered is not between 1-50, please enter a number in that range.');
    }else{
        fetch('https://dog.ceo/api/breeds/image/random/' + num)
        .then(response => response.json())
        .then(responseJson => makeDogArr(responseJson))
    }
}


function makeDogArr(responseJson){
    console.log(responseJson)
    dogArr = [];
    for(let i = 0; i < responseJson.message.length; i++){
        dogArr.push(responseJson.message[i]);
    }
    displayArr(dogArr);
}

function displayArr(arr){
    
    arr.forEach(element => {
        console.log(element);
        $('.img-gal').append('<img src="' + element + '">');
    });
}


function watchForm(){
    $('form').submit(event => {
        event.preventDefault();
        let num = $('input[type=number]').val();
        getDogImgs(num);
    })
}

$(function(){
    console.log('App loaded... waiting for submit.');
    watchForm();
})