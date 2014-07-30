'use strict';

var app = angular.module('travelApp');
	app.service('taxService', function taxService($q,$http) {



		this.getTax = function(name){
			var deferred = $q.defer();
			$http({
				method: 'GET', url: 'http://www.tripsimplicity.com/tax'
			}).success(function(data) {
				console.log(data);
			    deferred.resolve(data);
			}).error(function(err){
			    deferred.reject(err);
			});
			return deferred.promise;
		};

		this.modifyTax = function(name){
			var capName = name.toUpperCase();
			var array = capName.split('');
		    for(var i=0;i<array.length;i++){
		        if(array[i] == ' '){
		        	array[i] = '+';
		        }
		    }
		    capName = array.join('');
  			return capName;
		};
	});