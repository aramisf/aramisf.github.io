var shareApp = angular.module('shareApp', []);

shareApp.factory('Dados', function () {

        return { msg: "Sou um dado retornado por um servico"}
})

function umCtrl ($scope, Dados) {

    $scope.d = Dados;
}

function doisCtrl ($scope, Dados) {

    $scope.d = Dados;

}
