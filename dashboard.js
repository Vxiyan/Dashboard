document.addEventListener('DOMContentLoaded', () => {
    // --- Notepad Logic ---
    const notepadTextarea = document.getElementById('notepad');
    const downloadBtn = document.getElementById('downloadBtn');

    // 1. Load saved notes from localStorage
    const savedNotes = localStorage.getItem('dashboardNotes');
    if (savedNotes) {
        notepadTextarea.value = savedNotes;
    }

    // 2. Save notes whenever they change
    notepadTextarea.addEventListener('input', () => {
        localStorage.setItem('dashboardNotes', notepadTextarea.value);
    });

    // 3. Download notes functionality (Updated to match your original logic)
    downloadBtn.addEventListener('click', function() {
        const text = notepadTextarea.value;
        const blob = new Blob([text], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'notes.txt';
        link.click();
    });


    // --- Task Manager Logic ---
    const taskList = document.getElementById('taskList');
    const newTaskText = document.getElementById('newTaskText');
    const newTaskPriority = document.getElementById('newTaskPriority');
    const addTaskBtn = document.getElementById('addTaskBtn');

    // Load tasks from localStorage (or start with an empty array)
    let tasks = JSON.parse(localStorage.getItem('dashboardTasks')) || [];

    // Function to save tasks to localStorage
    const saveTasks = () => {
        localStorage.setItem('dashboardTasks', JSON.stringify(tasks));
    };

    // Function to render the task list
    const renderTasks = () => {
        taskList.innerHTML = ''; // Clear current list

        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('task-item');
            // Add status class for styling (e.g., 'completed', 'wip')
            listItem.classList.add(task.status.toLowerCase().replace(/\./g, '').replace(' ', '-')); 

            // Task Text
            const textSpan = document.createElement('span');
            textSpan.classList.add('task-text');
            textSpan.textContent = task.text;
            listItem.appendChild(textSpan);

            // Priority
            const prioritySpan = document.createElement('span');
            prioritySpan.classList.add('task-priority', task.priority);
            prioritySpan.textContent = task.priority;
            listItem.appendChild(prioritySpan);

            // Status Dropdown
            const statusSelect = document.createElement('select');
            statusSelect.classList.add('task-status');
            ['Not Started', 'W.I.P.', 'Completed'].forEach(status => {
                const option = document.createElement('option');
                option.value = status;
                option.textContent = status;
                statusSelect.appendChild(option);
            });
            statusSelect.value = task.status; // Set current status
            
            // Event listener for status change
            statusSelect.addEventListener('change', (e) => {
                tasks[index].status = e.target.value;
                saveTasks();
                renderTasks(); // Re-render to update status class
            });
            listItem.appendChild(statusSelect);

            // Delete Button
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-task-btn');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                tasks.splice(index, 1); // Remove task from array
                saveTasks();
                renderTasks();
            });
            listItem.appendChild(deleteBtn);

            taskList.appendChild(listItem);
        });
    };

    // Event listener for adding a new task
    addTaskBtn.addEventListener('click', () => {
        const text = newTaskText.value.trim();
        const priority = newTaskPriority.value;

        if (text) {
            const newTask = {
                text: text,
                priority: priority,
                status: 'Not Started' // Default status
            };
            tasks.push(newTask);
            saveTasks();
            renderTasks();
            newTaskText.value = ''; // Clear input
            newTaskPriority.value = 'Low'; // Reset priority
        }
    });

    // Initial render of tasks when the page loads
    renderTasks();
});

// Note: The 'updatePerformanceMeters' function and the 'setInterval' call 
// for performance tracking have been intentionally removed as requested.
