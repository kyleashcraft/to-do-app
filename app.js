function onReady() {
	var toDos = [];
	var addToDoForm = document.getElementById('addToDoForm');

	function createNewToDo(){
			var newToDoText = document.getElementById('newToDoText');
			toDos.push({
				title: newToDoText.value,
				complete: false
			});
			newToDoText.value = '';

			renderTheUI(toDos);
	}

	function renderTheUI(toDos){
		var toDoList.getElementById('toDoList')

		toDoList.innerHTML ='';

		toDos.forEach(function(toDo){
			var newLi = document.createElement('li')
			var checkBox = document.createElement('input');
			checkBox.type = 'checkbox';
			newLi.innerHTML = toDo.title;

			toDoList.appendChild(newLi);
			newLi.appendChild(checkbox);
		});
	}

	addToDoForm.addEventListener('submit', function(event) => {
		event.preventDefault();
		createNewToDo();
	});




}

window.onload = function () {
	onReady()
}
