'use strict';

var app = angular.module('travelApp');
	app.controller('mainCtrl', function ($scope,taxService,countryService,intService,hotelAirService) {
		$scope.getCountry = function(country){
			$scope.country = country;
			$scope.countryImage = './images/'+country+'/flag.jpg';
		};
		$scope.getUsa = function(country){
			$scope.country = country;
			$scope.usa = country;
			$scope.countryImage = './images/'+country+'/flag.jpg';
		};
		$scope.getState = function(state){
			$scope.state = state;
		};
		$scope.getAdults = function(adults){
			$scope.adults = adults;
		};
		$scope.getChildren = function(children){
			$scope.children = children;
		};
		$scope.getMinStars = function(minStars){
			$scope.starMin = minStars;
			$scope.starMax = minStars;
		};
		// $scope.getMaxStars = function(maxStars){
		// 	$scope.starMax = maxStars;
		// };

	 	$scope.getRate = function(country,income,adults,children,starMin,starMax,preArrive,preDepart,city){
	 		$scope.city = city;
	 		var modifiedName = countryService.modifyTax(country);
	 		var fxIncome = 0;
	 		var countryCode = '';
	 		var hotelInfo = {};
	 		var rates = {};
	 		var preNightlyRate = 0;
	 		var preTotalHotelRate = 0;
	 		var preFxIncome = 0;
	 		var arrive = '';
	 		var depart = '';
	 		arrive = hotelAirService.fixDate(preArrive);
	 		depart = hotelAirService.fixDate(preDepart);
	 		income = countryService.modifyIncome(income);
	 		$scope.preBudget = intService.modifyIncome(income);
			countryService.getTax(modifiedName).then(function(data){
				$scope.countryName = data[0].name;
				data.shift();
				$scope.currency = data[0].currency;
				countryCode = data[1].hotelCode;
				// hotelAirService.getAir(adults,children,preArrive).then(function(dataAir){
				// 	console.log(dataAir)
				// })
				hotelAirService.getHotel(adults,children,starMin,starMax,arrive,depart,countryCode,city).then(function(dataHotel){
					hotelInfo = dataHotel.HotelListResponse.HotelList.HotelSummary;
					rates = hotelInfo.RoomRateDetailsList.RoomRateDetails.RateInfo.ChargeableRateInfo;
					var key;
					for(key in rates){
					    if(key === '@maxNightlyRate'){
					    preNightlyRate = rates[key];
					    };
					    if(key === '@total'){
					    preTotalHotelRate = rates[key];
						};
					};
					preNightlyRate = countryService.modifyIncome(preNightlyRate);
					preTotalHotelRate = countryService.modifyIncome(preTotalHotelRate);
					$scope.nightlyRate = intService.modifyIncome(preNightlyRate);
					$scope.hotelTotal = intService.modifyIncome(preTotalHotelRate);
					console.log(income);
					console.log(preTotalHotelRate);
					preFxIncome = income - preTotalHotelRate;
					$scope.preFxIncome = intService.modifyIncome(preFxIncome);
					fxIncome = data[0].currentRate * preFxIncome;
					$scope.fxIncome = intService.modifyIncome(fxIncome);
				});
	 		});	
	 	};
	});