$(function(){
	$('.multiselect').css('display','block');
	$('.advancedfilter').hide();
	$(".date-picker").datepicker();

	/* Launch advanced filter panel on click of button */

	$('.subheader__advancedfilter').on('click', function(){
		$(this).find('.btn').toggleClass('darken');
		$('.advancedfilter').slideToggle('slow');
	});

	/* Insert dropdown values upon selection */

	$(".dropdown-menu li a").click(function(){
	  $(this).parents(".btn-group").find('.btn').html($(this).text() + ' <span class="caret"></span>');
	  $(this).parents(".btn-group").find('.btn').val($(this).data('value'));
	});
});



/*	Multi select dropdown */

$(function () { 
    $('.role').multiselect({ 
        buttonText: function(options, select) {
            if (options.length === 0) {
                return 'Filter usergroup';
            }
            if (options.length) {
                return options.length + ' selected';
            }
            else {
                var labels = [];
                options.each(function() {
                    labels.push($(this).val());
                });
                return labels.join(', ') + '';
            }
        }
    
    });
});

/*	Highlight row on checkbox selection	*/

$(function(){
	$('.table__checkbox').on('click', function(e){
		$(this).closest('tr').toggleClass('checked');
	});
});