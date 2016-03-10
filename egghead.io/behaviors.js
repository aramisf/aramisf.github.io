var app = angular.module('behaviorApp', [])

// Basic
app.directive('xega', function () {

    /* O formato implicito de uma diretiva eh este:
    return {
        restrict: "A",
        link: function () {
        }
    } */
    // Em nosso exemplo, assumimos que o padrao (restricao para atributo e link
    // automatico estao implicitos)
    return function (scope, element) {
        element.bind('mouseenter', function () {
            console.log("To dentro!");
        })
    }
})

app.directive('vaza', function () {

    return function (scope, element) {
        element.bind('mouseleave', function () {
            console.log("Falow Maluco!");
        })
    }
})

// Useful 
