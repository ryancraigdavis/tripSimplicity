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

		this.getHotel = function(adults,children,minStars,maxStars,aDate,dDate,country,city){
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
			var url = 'http://dev.api.ean.com/ean-services/rs/hotel/v3/list?minorRev=[current_minorRev_4]&cid=55505&apiKey=5akxwaxqb8b4fsbtj6tbpfrm&customerSessionId=88888&customerUserAgent=MOBILE_SITE&customerIpAddress=67.214.233.236&locale=en_US&currencyCode=USD&destinationString='+city+'&countryCode='+country+'&supplierCacheTolerance=MED&arrivalDate='+aDate+'&departureDate='+dDate+'&room1='+adults+','+children+'&minStarRating='+minStars+'&maxStarRating='+maxStars+'&numberOfResults=1';
			$http({
				method: 'GET', url: 'http://www.tripsimplicity.com/hotel:name?q='+url
			}).success(function(data) {
				console.log(data);
			    deferred.resolve(data);
			}).error(function(err){
			    deferred.reject(err);
			});
			return deferred.promise;
		};
	})