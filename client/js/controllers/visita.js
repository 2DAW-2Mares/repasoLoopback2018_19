// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app')
  .controller('AllVisitasController', ['$scope', 'Visita', function($scope,
      Visita) {
    $scope.visitas = Visita.find({
      filter: {
        include: [
          'familiar',
          'profesor'
        ]
      }
    });
  }])
  .controller('AddVisitaController', ['$scope', 'Familiar', 'Visita',
      '$state', function($scope, Familiar, Visita, $state) {
    $scope.action = 'Add';
    $scope.familiares = [];
    $scope.selectedFamiliar;
    $scope.visita = {};
    $scope.isDisabled = false;

    Familiar
      .find()
      .$promise
      .then(function(familiares) {
        $scope.familiares = familiares;
        $scope.selectedFamiliar = $scope.selectedFamiliar || familiares[0];
      });

    $scope.submitForm = function() {
      Visita
        .create({
          rating: $scope.visita.rating,
          comments: $scope.visita.comments,
          familiarId: $scope.selectedFamiliar.id
        })
        .$promise
        .then(function() {
          $state.go('all-visitas');
        });
    };
  }])
  .controller('DeleteVisitaController', ['$scope', 'Visita', '$state',
      '$stateParams', function($scope, Visita, $state, $stateParams) {
    Visita
      .deleteById({ id: $stateParams.id })
      .$promise
      .then(function() {
        $state.go('my-visitas');
      });
  }])
  .controller('EditVisitaController', ['$scope', '$q', 'Familiar', 'Visita',
      '$stateParams', '$state', function($scope, $q, Familiar, Visita,
      $stateParams, $state) {
    $scope.action = 'Edit';
    $scope.familiares = [];
    $scope.selectedFamiliar;
    $scope.visita = {};
    $scope.isDisabled = true;

    $q
      .all([
        Familiar.find().$promise,
        Visita.findById({ id: $stateParams.id }).$promise
      ])
      .then(function(data) {
        var familiares = $scope.familiares = data[0];
        $scope.visita = data[1];
        $scope.selectedFamiliar;

        var selectedFamiliarIndex = familiares
          .map(function(familiar) {
            return familiar.id;
          })
          .indexOf($scope.visita.familiarId);
        $scope.selectedFamiliar = familiares[selectedFamiliarIndex];
      });

    $scope.submitForm = function() {
      $scope.visita.familiarId = $scope.selectedFamiliar.id;
      $scope.visita
        .$save()
        .then(function(visita) {
          $state.go('all-visitas');
        });
    };
  }])
  .controller('MyVisitasController', ['$scope', 'Visita',
      function($scope, Visita) {
        // after a refresh, the currenUser is not immediately on the scope
        // So, we're watching it on the scope and load my visitas only then.
        $scope.$watch('currentUser.id', function(value) {
          if (!value) {
            return;
          }
          $scope.visitas = Visita.find({
            filter: {
              where: {
                profesorId: $scope.currentUser.id
              },
              include: [
                'familiar',
                'profesor'
              ]
            }
          });
        });
  }]);
