function onReady() {
	var toDos = [];
	var addToDoForm = document.getElementById('addToDoForm');

	function createNewToDo(){
			var newToDoText = document.getElementById('newToDoText');
			if (newToDoText.value !==''){
				toDos.push({
					title: newToDoText.value,
					complete: false
				});
				newToDoText.value = '';

				renderTheUI(toDos);
			}
	}

	function renderTheUI(toDos){
		var toDoList = document.getElementById('toDoList');

		toDoList.innerHTML ='';

		toDos.forEach(function(toDo){
			var newLi = document.createElement('li')
			var checkBox = document.createElement('input');
			checkBox.type = 'checkbox';
			newLi.innerHTML = toDo.title;

			toDoList.appendChild(newLi);
			newLi.appendChild(checkBox);
		});
	}

	addToDoForm.addEventListener('submit', function(event) {
		event.preventDefault();
		createNewToDo();
	});

	function removeLi() {
		formList.addEventListener('submit', (event) => {
			event.preventDefault();
			let checkbox = document.getElementById("checkbox");
			if (checkbox.checked){
				checkbox.id="selected";
				toDoList.removeChild(document.getElementById('todo') );
			};
		});
	};


}

window.onload = function () {
	onReady()
}
