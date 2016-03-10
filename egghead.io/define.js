var methApp = angular.module('methApp', []);

methApp.factory('Dados', function () {

        return { msg: "socorram me subi no onibus em marrocos"}
})

function umCtrl ($scope, Dados) {

    $scope.d = Dados;
}

function doisCtrl ($scope, Dados) {

    $scope.d = Dados;

    $scope.reverse = function (message) {

        return message ?
            message.split('').reverse().join('')
            :
            $scope.d.msg.split('').reverse().join('');
    }

}
