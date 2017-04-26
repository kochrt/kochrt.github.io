/*
	Rob Koch
	CSE 451
	Bus app
*/

/*
    Ajax calls
*/

var url = 'http://ceclnx01.cec.miamioh.edu/~kochrt/rta.php/';

function getStops(success, error) {
    busGet('stops', success, error);
}

function getRoutes(success, error) {
    busGet('routes', success, error);
}

function routesForStop(stop, success, error) {
    busGet('stops/' + stop, success, error);
}

function stopsForRoute(route, success, error) {
    busGet('routes/' + route, success, error);
}

// pass in empty string if 'now'
function timesForStop(route, stop, after, success, error) {
	after = after.length == 0 ? '' : '?time=' + after;
	busGet('routes/' + route + '/' + stop + after, success, error);
}

// pass in empty string if 'now'
function nextAtStop(stop, time, success, error) {
	time = time.length == 0 ? '' : '?time=' + time;
	busGet('stops/' + stop + '/next' + time, success, error);
}

function busGet(path, success, error) {
    $.ajax({
		type: 'get',
		url: url + path,
		dataType: 'json',
		success: success,
		error: error
    });
}

function setStopsForRoute(route, callback) {
	stopsForRoute(route, function(data) {
		if (data.status != "OK") {
			console.error("oh no");
			return;
		}
		setStopSelect(data.data);
		if (callback) callback();
	});
}

function setRoutesForStop(stop, callback) {
	routesForStop(stop, function(data) {
		if (data.status != "OK") {
			console.error('oh no routes');
			return;
		}
		setRouteSelect(data.data);
		if (callback) callback();
	});
}

function setStops(callback) {
	getStops(function(data) {
		if (data.status != "OK") {
			console.error("oh no");
			return;
		}
		setStopSelect(data.data);
		if (callback) callback();
    });
}

function setRoutes(callback) {
	getRoutes(function(data) {
		if (data.status != "OK") {
			console.error('oh no routes');
			return;
		}
		setRouteSelect(data.data);
		if (callback) callback();
	});
}

function setSelect(id, base, list) {
	var html = '<option>' + base + '</option>';
	for (var i = 0; i < list.length; i++) {
		html += '<option>' + list[i] + '</option>';
	}
	$(id).html(html);
}

function setTimes() {
	var s = '<option value="now">Now</option>';
	for (var i = 0; i < 48; i++) {
		var minutes = ((i / 48) * 1440);
		s += '<option value=' + minutes + '>' + Math.floor(minutes / 60) + (minutes % 60 == 0 ? ":00" : ":30") + '</option>';
	}
	$('.times').html(s);
}

function setResults(stop, data) {
	var table = '<table>';
	var header = '<tr><th>Stop</th><th>Route</th><th>Time</th></tr>';
	for (var key in data) {
		header += '<tr><td>' + stop + '</td><td>' + data[key] + '</td><td>' + minutesToTime(key) + '</td></tr>';
	}
	$('.results').html(table + header + '</table>');
}

function minutesToTime(minutes) {
	var hours = Math.floor(minutes / 60);
	var minutes = minutes % 60;
	return hours + ":" + (minutes < 10 ? "0" : "") + minutes;
}

var selectedStop = function() {
	return $('.stops :selected').text();
}

var selectedRoute = function() {
	return $('.routes :selected').text();
}

var selectedTime = function() {
	return $('.times :selected').val();
}

function setStopSelect(stops) {
	setSelect('.stops', 'Any stop', stops);
}

function setRouteSelect(routes) {
	setSelect('.routes', 'Any route', routes);
}

function resetResults() {
	$('.results').html('<h4>Select a stop above</h4>');
}

function anyRoute() {
	return selectedRoute() == 'Any route';
}

function anyStop() {
	return selectedStop() == 'Any stop';
}

function now() {
	return selectedTime() == 'now';
}

function reset() {
	setStops();
	setRoutes();
	resetResults();
}

$(function () {
	setTimes();
    reset();

	$('.stops').change(function(event) {
		if (anyStop()) {
			reset();
		} else {
			// update available routes
			setRoutesForStop(selectedStop());
			if (anyRoute()) {
				// show next routes that come to that stop..
				var stop = selectedStop();
				nextAtStop(stop, now() ? '' : selectedTime(), function(data) {
					setResults(stop, data.data);
				});
			} else {
				// show times for selected route
				var stop = selectedStop();
				timesForStop(selectedRoute(), stop, now() ? '' : selectedTime(), function() {
					setResults(stop, data.data);
				});
			}
		}
	});

	$('.routes').change(function(event) {
		if (anyRoute()) {
			if (anyStop()) {
				// do nothing
			} else {
				console.log('here we are');
				var stop = selectedStop();
				nextAtStop(stop, now() ? '' : selectedTime(), function(data) {
					setResults(stop, data.data);
				});
			}
		} else {
			if (anyStop()) {
				// set stops this route goes to
				setStopsForRoute(selectedRoute());
			} else {
				// 
				var stop = selectedStop();
				timesForStop(selectedRoute(), stop, now() ? '' : selectedTime(), function(data) {
					setResults(stop, data.data);
				});
			}
		}
	});

	$('.times').change(function(event) {
		if (!anyStop()) {
			if (anyRoute()) {
				var stop = selectedStop();
				nextAtStop(stop, now() ? '' : selectedTime(), function(data) {
					setResults(stop, data.data);
				});
			} else {
				var stop = selectedStop();
				timesForStop(selectedRoute(), stop, now() ? '' : selectedTime(), function(data) {
					setResults(stop, data.data);
				});
			}
		}
	});
});
