var filterApp = angular.module('filterApp', []);

// Factory produz dados inter escopo.
filterApp.factory('Dados', function () {

        return { msg: "socorram me subi no onibus em marrocos"}
})

filterApp.filter('verso', function (Dados) {
    return function () {
        return Dados.msg + ' ' + Dados.msg.split('').reverse().join('');
    }
})

filterApp.filter('reverso', function () {
    return function (texto) {
        return texto.split('').reverse().join('');
    }
})

function umCtrl ($scope, Dados) {

    $scope.d = Dados;
}

function doisCtrl ($scope, Dados) {

    $scope.d = Dados;
    if (! $scope.d2) {
        $scope.d2 = {msg: ''};
    }

/** No caso deste metodo aqui, como visto no exemplo anterior, eh mais adequado
 * o uso de filtros, e eh o que faremos neste exemplo. Como pode se ver, um
 * filtro eh um metodo que pode ser usado em toda a aplicacao, ele nao fica
 * restrito a um controlador especifico.
 *  $scope.reverse = function (message) {

 *      return message ?
 *          message.split('').reverse().join('')
 *          :
 *          $scope.d.msg.split('').reverse().join('');
 *  }
 */

}
