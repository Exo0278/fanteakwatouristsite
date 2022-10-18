 $(function() {
 setTimeout(function() {
$.notify({
	// options
	icon: 'icon_set_1_icon-29',
	title: "<h4>Welcome Traveller</h4> ",
	message: "Have a great experience in our district. Thank you for choosing Fanteakwa District as your destination"
},{
	// settings
	type: 'info',
	delay: 5000,
	timer: 3000,
	z_index: 9999,
	showProgressbar: false,
	placement: {
		from: "bottom",
		align: "right"
	},
	animate: {
		enter: 'animated bounceInUp',
		exit: 'animated bounceOutDown'
	},
});
 }, 1000); // change the start delay
 
setTimeout(function() {
$.notify({
	// options
	icon: 'img/notify_img.jpg',
	title: "<h4>Most Viewed Tour</h4> ",
	message: "<p>Bunsu Eco-Park(13 min. ago).</p><a href=\"single_tour.html\" target=\"_blank\" class=\"btn_1\">Read more</a> "
},{
	// settings
	icon_type: 'image',
	type: 'info',
	delay: 5000,
	timer: 3000,
	z_index: 9999,
	showProgressbar: false,
	placement: {
		from: "bottom",
		align: "right"
	},
	animate: {
		enter: 'animated bounceInUp',
		exit: 'animated bounceOutDown'
	},
});
 }, 5000); // change the start delay
 

 });