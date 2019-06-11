
function toggle(){
	// $('#circle').animate({
	// 	top: 500,
	// 	left: 1000
	// }).animate({
	// 	top: 10,
	// 	right: 0
	// })
	// .animate({
	// 	top: 10,
	// 	left: 0
	// });

	var someData = {};
	console.log(someData.firstName)
}

$(function() {
	let userDetailsContainer = $('#user-details');
	$('#getData').on('click', function() {
		$.ajax({
		  url: "/data/data.json",
		  dataType: "json",
		  success: function( result ) {
		  		
		  		let firstName = $('<div></div>').html(result.firstName);
		    	userDetailsContainer.append(firstName);

		    	let lastName = $('<div></div>').html(result.lastName);
		    	userDetailsContainer.append(lastName);

		    	let address = $('<div></div>').html(result.address);
		    	userDetailsContainer.append(address);
		  }
		});
	})
})