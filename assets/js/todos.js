// cross through todo when completed
$('body').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

//entering new todo on chosen list
$('body').on('keypress', "input[type='text']", function(event) {
	if (event.which === 13) {
		//grabbing new todo text from input
		let todoText = $(this).val();
		$(this).val('');
		let todoDiv = $(this).parent().find('ul');
		//create a new li and add to ul
		todoDiv.append("<li><span><i class='fa fa-trash'></i></span> " + todoText + '</li>');
	}
});

//click on trash to delete todo
$('body').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
});

//click on minus in header of list to delete list
$('body').on('click', '.fa-minus-square', function() {
	$(this).closest('div').fadeOut(500, function() {
		$(this).remove();
	});
});

//minimize input area on given to-do list
$('body').on('click', '.fa-plus', function() {
	let enterTodo = $(this).parent().parent().find('input');
	enterTodo.fadeToggle();
});

//add new todo list
$('.fa-list').on('click', function(event) {
	let newList =
		'<div class="todo"><h1>To-Do List <input type="date"><i class="fa fa-minus-square"></i><i class="fa fa-plus"></i></h1><input type="text" placeholder="Add New Todo"><ul></ul>';
	$(this).closest('body').append(newList);
});
