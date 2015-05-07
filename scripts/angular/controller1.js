/*AUTHOR: Jacob Kromm jacobkromm0@gmail.com
 *VERSION: 1.0
 *CREATED: 04.28.15
 *ASSIGNMENT: Staff Directory
 */

"use strict";


(function () {

	"use strict";

	angular.module('staffApp')
		.controller('staffCtrl', MainCtrl);

	function MainCtrl($scope) {
		$scope.staff = setStaffData();
		$scope.calendar = setCalendarData();

		/** @type {Boolean} */
		$scope.showStaff = false;

		$scope.filterByBuilding = function(building) {
			$scope.filterBuilding = building;
			$scope.showStaff = true;
		};
	}

})();