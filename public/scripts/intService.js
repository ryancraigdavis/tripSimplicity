'use strict';

var app = angular.module('travelApp');
	app.service('intService', function intService() {
		this.modifyIncome = function(income){
			var modifyIncome = income.toString();
			function insertDecimalPoints(s) {
			    var temaparray = s.split(".");
			    s = temaparray[0];
			    var l = s.length;
			    var res = ""//+s[0];
			    for (var i=0;i<l-1;i++)
			    {
			        if ((l-i)%3==0 && l>3)
			            res+= ",";
			        res+=s[i];
			    }
			    res+=s[l-1];
			    res =res +"."+temaparray[1];
			    return res;
			}
			modifyIncome = insertDecimalPoints(income.toFixed(2));
			if(modifyIncome.charAt(0) === ','){
				modifyIncome = modifyIncome.split('');
				modifyIncome.shift();
				modifyIncome = modifyIncome.join('');
			}
			return modifyIncome;
		}
	})
