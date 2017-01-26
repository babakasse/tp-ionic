'use strict';

angular.module('starter')
    .controller('DataController', ['$scope', 'dataService'], function ($scope, dataService) {
        $scope.infoPost = function(){
            dataService.getPost().then(function(data){
                $scope.posts=data;
            })
            .error(function(data)
            {
                
            })
        }

       return $scope.infoPost();
    });