'use strict';

var app = angular.module('travelApp');
	app.service('countryService', function countryService($q,$http) {
		// this.modifyTax = function(name){
		// 	var countryName = '';
		// 	var array = name.split('');
		//     for(var i=0;i<array.length;i++){
		//         if(array[i] == ' '){
		//         	array[i] = '+';
		//         }
		//     }
		//     countryName = array.join('');
  // 			return countryName;
		// };
		this.modifyIncome = function(income){
			if(typeof income === 'string'){
				var incomePre = 0;
				var array = income.split('');
			    for(var i=0;i<array.length;i++){
			        if(array[i] == ','){
			        	array.splice([i],1);
			        }
			    }
			    incomePre = array.join('');
			    incomePre = parseInt(incomePre);
	  			return incomePre;
			}
			else{
				return income;
			}
		};

		// this.getTax = function(currencyCode){
		// 	var deferred = $q.defer();
		// 	$http({
		// 		method: 'GET', url: 'http://www.tripsimplicity.com/tax:name?q='+currencyCode
		// 	}).success(function(data) {
		// 	    deferred.resolve(data);
		// 	}).error(function(err){
		// 	    deferred.reject(err);
		// 	});
		// 	return deferred.promise;
		// };
		

		this.modifyAirPrice = function(air){
			var array = air.split('');
		   	air = array.splice(3,array.length);
		   	air = air.join('');
		   	air = parseInt(air);
  			return air;
		};
	});