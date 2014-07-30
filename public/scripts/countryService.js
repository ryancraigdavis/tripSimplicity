'use strict';

var app = angular.module('travelApp');
	app.service('countryService', function countryService($q,$http) {
		this.modifyTax = function(name){
			var countryName = '';
			var array = name.split('');
		    for(var i=0;i<array.length;i++){
		        if(array[i] == ' '){
		        	array[i] = '+';
		        }
		    }
		    countryName = array.join('');
  			return countryName;
		};


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
			    console.log(incomePre);
			    incomePre = parseInt(incomePre);
	  			return incomePre;
			}
			else{
				return income;
			}
		};

		this.getTax = function(country){
			var deferred = $q.defer();
			$http({
				method: 'GET', url: 'http://www.tripsimplicity.com/tax:name?q='+country
			}).success(function(data) {
			    deferred.resolve(data);
			}).error(function(err){
			    deferred.reject(err);
			});
			return deferred.promise;
		};
	});