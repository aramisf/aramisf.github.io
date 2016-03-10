var vingApp = angular.module('vingApp', []);

vingApp.factory('Vingadores', function () {

    var Vingadores = {};

    Vingadores.cast = [
        {
            nome: "Robert Downey Jr.",
            char: "Tony Stark / Iron Man"
        },
        {
            nome: "Chris Evans",
            char: "Steve Rogers / Captain America"
        },
        {
            nome: "Mark Ruffalo",
            char: "Bruce Banner / The Hulk"
        },
        {
            nome: "Chris Hemsworth",
            char: "Thor"
        },
        {
            nome: "Scarlett Johansson",
            char: "Natasha Romanoff / Black Widow"
        },
        {
            nome: "Jeremy Renner",
            char: "Clint Barton / Hawkeye"
        },
        {
            nome: "Tom Hiddleston",
            char: "Loki"
        },
        {
            nome: "Clark Gregg",
            char: "Agent Phil Coulson"
        },
        {
            nome: "Cobie Smulders",
            char: "Agent Maria Hill"
        },
        {
            nome: "Stellan Skarsgard",
            char: "Selvig"
        },
        {
            nome: "Samuel L. Jackson",
            char: "Nick Fury"
        },
        {
            nome: "Gwyneth Paltrow",
            char: "Pepper Potts"
        },
        {
            nome: "Paul Bettany",
            char: "Jarvis (voice)"
        },
        {
            nome: "Alexis Denisof",
            char: "The Other"
        },
        {
            nome: "Tina Benko",
            char: "NASA Scientist"
        }
    ];

    return Vingadores;
})

function vingCtrl ($scope, Vingadores) {
    $scope.vings = Vingadores;
}
