'use strict';

var app = angular.module('travelApp',['angucomplete-alt']);
	app.controller('mainCtrl', function ($scope,taxService,usaAirportService,countryService,intService,hotelAirService,countryDataService) {
		// Beginning Variables
		$scope.children = 0;

		// $scope.getCountry = function(country){
		// 	$scope.country = country;
		// 	$scope.countryImage = './images/'+country+'/flag.jpg';
		// };
		// $scope.getUsa = function(country){
		// 	$scope.country = country;
		// 	$scope.usa = country;
		// 	$scope.countryImage = './images/'+country+'/flag.jpg';
		// };
		// $scope.getState = function(state){
		// 	$scope.state = state;
		// };

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

		var airportList = usaAirportService.getCode();
		$scope.airports = airportList;

    $scope.inputChanged = function(str) {
      $scope.console10 = str;
    }

    $scope.focusState = 'None';
    $scope.focusIn = function() {
      var focusInputElem = document.getElementById('ex12_value');
      $scope.focusState = 'In';
      focusInputElem.classList.remove('small-input');
    }
    $scope.focusOut = function() {
      var focusInputElem = document.getElementById('ex12_value');
      $scope.focusState = 'Out';
      focusInputElem.classList.add('small-input');
    }

    $scope.disableInput = true;

	 	$scope.getRate = function(income,adults,children,starMin,preArrive,preDepart,dCity,oCity){
	 		
	 		if (income==null) {
	 			alert('Please enter a trip budget amount');
	 		};

	 		if (adults==null) {
	 			alert('Please specify the number of adults who will be traveling');
	 		};

	 		if(oCity==null){
	 			alert('Please select a departure city! (Unless you plan on walking)');
	 			return;
	 		};
	 		if(dCity==null){
	 			alert('Please select a destination city!');
	 			return;
	 		};
	 		if(preDepart<=preArrive){
	 			alert('Please select a return date that follows your departure date!');
	 			return;
	 		};
	 		var modifiedName = oCity.description.name;
	 		console.log(modifiedName)
	 		// var modifiedName = countryService.modifyTax(country);
	 		var fxIncome = 0;
	 		var countryCode = '';
	 		var hotelInfo = {};
	 		var rates = {};
	 		var preNightlyRate = 0;
	 		var preTotalHotelRate = 0;
	 		var preFxIncome = 0;
	 		var arrive = '';
	 		var depart = '';
	 		var airPrice = '';
	 		arrive = hotelAirService.fixDate(preArrive);
	 		depart = hotelAirService.fixDate(preDepart);
	 		$scope.departureCity = oCity.description.city;
	 		$scope.destinationCity = dCity.description.city;
	 		var departureCity = oCity.description.city;
	 		var destinationCity = dCity.description.city;
	 		var oAirCode = oCity.description.code;
	 		var dAirCode = dCity.description.code;
	 		income = countryService.modifyIncome(income);
	 		$scope.preBudget = intService.modifyIncome(income);
			// countryService.getTax(modifiedName).then(function(data){
				// $scope.countryName = data[0].name;
				// $scope.countryName = modifiedName;
				// countryService.getTax(country.description.currency_alphabetic_code).then(function(dataFx){
			var fxRate = dCity.description.currency_alphabetic_code;
			$scope.countryName = dCity.description.name;
				// data.shift();
			$scope.currency = dCity.description.currency_name;
			countryCode = dCity.description.ISO3166_1_Alpha_2;
				airPrice = hotelAirService.getAir(adults,children,preArrive,oAirCode,dAirCode).then(function(dataAir){
					airPrice = dataAir.trips.tripOption[0].saleTotal;
					airPrice = countryService.modifyAirPrice(airPrice);
					$scope.flightCost = intService.modifyIncome(airPrice);
					hotelAirService.getHotel(adults,children,starMin,arrive,depart,countryCode,destinationCity).then(function(dataHotel){
						if (dataHotel.HotelListResponse.EanWsError.category = "RESULT_NULL") {alert("Results are not availible for these dates, please try again!")};
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
						preFxIncome = income - preTotalHotelRate - airPrice;
						$scope.preFxIncome = intService.modifyIncome(preFxIncome);
						var intFxRate = parseInt(fxRate)
						fxIncome = intFxRate * preFxIncome;
						});
						$scope.fxIncome = intService.modifyIncome(fxIncome);
					});
				// });
	 		// });	
	 	};
	});