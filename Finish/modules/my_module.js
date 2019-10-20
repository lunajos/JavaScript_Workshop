'use strict';

function expt (x, y) {

	var z = [];

	for (var a = 0; a < y; a++) {
		z.push(x);
	}

	return z;
}

module.exports = expt;
