/*AUTHOR: Jacob Kromm jacobkromm0@gmail.com
 *VERSION: 1.0
 *CREATED: 04.28.15
 *ASSIGNMENT: Staff Directory
 */

"use strict";

/** @type {Array} */
var staff = [];

function setStaffData() {
	/** @type {Array.<string>} */
	var lines = [],
		person = [];
	$.ajax({
		url: 'data/staff2.csv',
		contentType: "text/csv",
		async: false,
		success: function (text) {
			lines = text.split(/\n/);
		}
	});
	for (var i = 0; i < lines.length; i++) {
		lines[i] = lines[i].replace(/(\r\n|\n|\r)/gm, "");
		person[i] = lines[i].split(",");
		staff[i] = new PersonClass(person[i][0])
	}
	return staff;
}




