

// "use client"
// import { useState } from 'react';
// import { Card, Checkbox, Input, Button } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';

// const TodoList = () => {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: 'Here is task one', status: 'todo' },
//     { id: 2, title: 'Here is task Two', status: 'todo' },
//     { id: 3, title: 'Here is task Three', status: 'todo' },
//     { id: 4, title: 'Here is task one', status: 'todo' },
//     { id: 5, title: 'Here is task Two', status: 'todo' },
//     { id: 6, title: 'Here is task one', status: 'inProgress' },
//     { id: 7, title: 'Here is task one', status: 'completed' },
//     { id: 8, title: 'Here is task Two', status: 'completed' },
//   ]);
//   const [newTaskTitle, setNewTaskTitle] = useState('');

//   const handleTaskStatusChange = (id, status) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//         task.id === id ? { ...task, status } : task
//       )
//     );
//   };

//   const handleAddTask = () => {
//     if (newTaskTitle.trim() !== '') {
//       setTasks((prevTasks) => [
//         ...prevTasks,
//         {
//           id: prevTasks.length + 1,
//           title: newTaskTitle,
//           status: 'todo',
//         },
//       ]);
//       setNewTaskTitle('');
//     }
//   };

//   return (
//     <Card title="Tasks" extra={<Button icon={<PlusOutlined />} onClick={handleAddTask}>Add task</Button>} style={{marginBottom:'30px'}}>
//       {[
//         { title: 'To Do', status: 'todo' },
//         { title: 'In Progress', status: 'inProgress' },
//         { title: 'Completed', status: 'completed' },
//       ].map(({ title, status }) => (
//         <Card
//           key={status}
//           type="inner"
//           title={`${title} (${
//             tasks.filter((task) => task.status === status).length
//           })`}
//         >
//           {tasks
//             .filter((task) => task.status === status)
//             .map((task) => (
//               <Card.Grid key={task.id} style={{ width: '100%' }}>
//                 <Checkbox
//                   checked={task.status !== 'todo'}
//                   onChange={(e) =>
//                     handleTaskStatusChange(
//                       task.id,
//                       e.target.checked ? 'completed' : 'todo'
//                     )
//                   }
//                 >
//                   {task.title}
//                 </Checkbox>
//               </Card.Grid>
//             ))}
//         </Card>
//       ))}

//       <Input.Search
//         placeholder="Add a task"
//         value={newTaskTitle}
//         onChange={(e) => setNewTaskTitle(e.target.value)}
//         onSearch={handleAddTask}
//         enterButton={<PlusOutlined />}
//       />
//     </Card>
//   );
// };

// export default TodoList;



"use client"

import React from 'react';
import { Button } from 'antd';
import TaskModal from '../taskModal/page';
import { openModal } from '../redux/taskSlice';
import { useDispatch } from 'react-redux';

const TaskList = () => {
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(openModal());
  };

  return (
    <div>
      <Button onClick={handleAddTask}>Add Task</Button>
      <TaskModal />
      <div class="task-form">
  <div class="task-header">
    <span>Task title</span>
    <input type="text" placeholder="Enter task title" />
  </div>
  <div class="task-body">
    <label for="task-description">Task description</label>
    <textarea id="task-description" placeholder="Enter task description"></textarea>
  </div>
  <div class="task-list">
    <label for="task-list">Task list</label>
    <ul id="task-list">
      <li class="task-item">
        <input type="text" placeholder="Enter list text" />
        <button class="add-item">+</button>
      </li>
      <li class="task-item">
        <input type="text" placeholder="Enter list text" />
        <button class="remove-item">-</button>
        <button class="add-item">+</button>
      </li>
      <li class="task-item">
        <input type="text" placeholder="Enter list text" />
        <button class="remove-item">-</button>
        <button class="add-item">+</button>
      </li>
    </ul>
  </div>
  <div class="task-image">
    <label for="task-image">Add image</label>
    <input type="file" id="task-image" />
  </div>
</div>
    </div>
  );
};

export default TaskList;