var date = new Date().getHours()
document.getElementById('greeting').innerHTML = date >= 12 && date < 17 ? 'Good Afternoon.' 
	: date >= 17 && date < 20 ? 'Good Evening.' 
	: (date >= 20 && date < 24) || (date >= 0 && date < 5) ? 'Hoot, Hoot, Night Owl.' 
	: 'Good Morning.';