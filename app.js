function onReady() {
	var toDos = [];
	var addToDoForm = document.getElementById('addToDoForm');
	var list = document.getElementById('list');

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

	function deleteToDos(){
		var toDoList = document.getElementById('toDoList');
		if (toDos.length > 0){
			for (var i = 0; i < toDos.length; i++){
				if (toDoList.childNodes[i].firstElementChild.checked === true){
					toDos.splice(i,1);
				}
			}
		}
		else {
			alert('There is nothing to delete!');
		}
		renderTheUI(toDos);
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

	list.addEventListener('submit', (event) => {
			event.preventDefault();
			deleteToDos();
		});
}

window.onload = function () {
	onReady()
}
