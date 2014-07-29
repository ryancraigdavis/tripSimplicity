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
		};
		$scope.getMaxStars = function(maxStars){
			$scope.starMax = maxStars;
		};

	 	$scope.getRate = function(country,income,adults,children,starMin,starMax,arrive,depart,city){
	 		var modifiedName = countryService.modifyTax(country);
	 		var fxIncome = 0;
	 		var countryCode = '';
	 		var hotelInfo = {};
	 		var rates = {};
	 		arrive = hotelAirService.fixDate(arrive);
	 		depart = hotelAirService.fixDate(depart);
	 		income = countryService.modifyIncome(income);
			countryService.getTax(modifiedName).then(function(data){
				$scope.countryName = data[0].name;
				data.shift();
				$scope.currency = data[0].currency;
				fxIncome = data[0].currentRate * income;
				$scope.fxIncome = intService.modifyIncome(fxIncome);
				countryCode = data[1].hotelCode;
				hotelAirService.getHotel(adults,children,starMin,starMax,arrive,depart,countryCode,city).then(function(dataHotel){
					console.log(dataHotel);
					hotelInfo = dataHotel.HotelListResponse.HotelList.HotelSummary;
					rates = hotelInfo.RoomRateDetailsList.RoomRateDetails.RateInfo.ChargeableRateInfo;
					var key;
					for(key in rates){
					    if(key === '@maxNightlyRate'){
					    $scope.nightlyRate = rates[key];
					    };
					    if(key === '@total'){
					    $scope.hotelTotal = rates[key];
						};
					};
				});
	 		});	
	 	};
	});