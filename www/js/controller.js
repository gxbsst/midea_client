angular.module('starter.controllers', ['ngSanitize'])
    .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

    })
    .controller('ProjectCtrl', function ($scope, Project, $ionicLoading) {

        $scope.reload = function () {
            $ionicLoading.show({
                template: '正在载入...'
            });
            Project.query(function (projects) {
                $scope.projects = projects;
                console.log(projects);
            })
                .$promise.then(function () {
                    $ionicLoading.hide();
                });
        };

        $scope.reload();
    })
    .controller('HomeCtrl', function ($scope, Project, User, $ionicLoading) {
        $scope.reload = function () {
            $ionicLoading.show({
                template: '正在载入...'
            });
            Posts.query(function (posts) {
                $scope.posts = posts;
            })
                .$promise.then(function () {
                    $ionicLoading.hide();
                });
        };

        $scope.reload();
    })
