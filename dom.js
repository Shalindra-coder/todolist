        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('todo-form');
            const taskInput = document.getElementById('new-task');
            const taskList = document.getElementById('task-list');

            form.addEventListener('submit', function(e) {
                e.preventDefault();

                const taskText = taskInput.value.trim();
                if (taskText !== '') {
                    const li = document.createElement('li');
                    li.textContent = taskText;

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                     deleteButton.className = 'delete';
                     li.appendChild(deleteButton);

                    taskList.appendChild(li);

                    taskInput.value = '';
                }
            });

            taskList.addEventListener('click', function(e) {
                if (e.target.classList.contains('delete')) {
                    const li = e.target.parentElement;
                    taskList.removeChild(li);
                }
            });
        });
