'use strict';

var app = angular.module('travelApp');
	app.service('hotelAirService', function countryService($q,$http) {

		this.fixDate = function(date){
			var holder = [];
			date = date.split('-');
			holder = date.shift();
			date.push(holder);
			date = date.join('/');
			return date;
		};

		this.getHotel = function(adults,children,stars,aDate,dDate,country,city){
			var childObj = {
				0:'',
				1:'5',
				2:'5,5',
				3:'5,5,5',
				4:'5,5,5,5'
			};
			var check = function(c,childObj){
			    var res = '';
			    var i = 0;
			    for(i in childObj){
			        if(i == c){
			            res = childObj[i];
			            break;
			        };
			        i++;
			    };
			    return res;
			};
			children = check(children,childObj);
			var deferred = $q.defer();
			var url = 'http://dev.api.ean.com/ean-services/rs/hotel/v3/list?minorRev=[current_minorRev_4]&cid=55505&apiKey=5akxwaxqb8b4fsbtj6tbpfrm&customerSessionId=88888&customerUserAgent=MOBILE_SITE&customerIpAddress=67.214.233.236&locale=en_US&currencyCode=USD&destinationString='+city+'&countryCode='+country+'&supplierCacheTolerance=MED&arrivalDate='+aDate+'&departureDate='+dDate+'&room1='+adults+','+children+'&minStarRating='+stars+'&maxStarRating='+stars+'&numberOfResults=1';
			$http({
				method: 'GET', url: 'http://www.tripsimplicity.com/hotel:name?q='+url
			}).success(function(data) {
				if (data.HotelListResponse.EanWsError.category = "RESULT_NULL") {alert("Results are not availible for these dates, please try again!") break};
			    deferred.resolve(data);
			}).error(function(err){
			    deferred.reject(err);
			});
			return deferred.promise;
		};
		this.getAir = function(adults,children,aDate,oAirCode,dAirCode){

			var oCode = oAirCode
			var dCode = dAirCode

			var deferred = $q.defer();
			$http({
				method: 'POST', 
				url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAIVZERszQwnKfoKC9niU55SCTXFUqaEaQ',
				data: {
				  "request": {
				    "slice": [
				      {
				        "origin": oCode,
				        "destination": dCode,
				        "date": aDate
				      }
				    ],
				    "passengers": {
				      "adultCount": adults,
				      "infantInLapCount": 0,
				      "infantInSeatCount": 0,
				      "childCount": children,
				      "seniorCount": 0
				    },
				    "solutions": 1,
				    "refundable": false
				  }
				}
			}).success(function(data) {
				deferred.resolve(data);
			}).error(function(err){
				deferred.reject(err);
			});
			return deferred.promise;
		};
	})