function onReady() {
	/*const addToDoForm = document.getElementById('addToDoForm');
	const newToDoText = document.getElementById('newToDoText');
	const toDoList = document.getElementById('toDoList');
	const formList = document.getElementById('list');

	addToDoForm.addEventListener('submit', (event) => {
		event.preventDefault();
		let title = newToDoText.value;
		let newLi = document.createElement('li');
		let checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.id="checkbox";
		newLi.textContent = title;
		toDoList.appendChild(newLi);
		newLi.appendChild(checkbox);
		newLi.id="todo";
		newToDoText.value= '';
	});

	formList.addEventListener('submit', (event) => {
		event.preventDefault();
		let checkbox = document.getElementById("checkbox");
		if (checkbox.checked){
			checkbox.id="selected";
			toDoList.removeChild(document.getElementById('todo') );
		};
	});
*/

}

window.onload = function () {
	onReady()
}
