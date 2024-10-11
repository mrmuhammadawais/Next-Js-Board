


// "use client";
// import { useDispatch, useSelector } from 'react-redux';
// import { Card, Checkbox, Button, Row, Col, Typography, Avatar, Select, Modal, Input, Form, Dropdown, Menu } from 'antd';
// import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
// import { toggleTaskCompletion, addTask, deleteTask, editTask, updateTaskStatus } from '../../redux/taskSlice';
// import { useState } from 'react';
// import MainLayout from '@/components/app-components/Layout/MainLayout';
// const { Title } = Typography;
// const { Option } = Select;

// const TaskList = () => {
//   const dispatch = useDispatch();
//   const tasks = useSelector((state) => state.tasks.tasks);

//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentTask, setCurrentTask] = useState(null);
//   const [taskTitle, setTaskTitle] = useState('');
//   const [taskDescription, setTaskDescription] = useState('');
//   const [subtasks, setSubtasks] = useState(['']);

//   const onTaskChange = (taskId, subtaskId) => {
//     dispatch(toggleTaskCompletion({ taskId, subtaskId }));
//   };

//   const onStatusChange = (taskId, newStatus) => {
//     dispatch(updateTaskStatus({ taskId, status: newStatus }));
//   };

//   const showModal = () => {
//     resetForm();
//     setIsModalVisible(true);
//     setIsEditing(false);
//   };

//   const handleEdit = (task) => {
//     setCurrentTask(task);
//     setTaskTitle(task.title);
//     setTaskDescription(task.description);
//     setSubtasks(task.subtasks.map((subtask) => subtask.text));
//     setIsModalVisible(true);
//     setIsEditing(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//     resetForm();
//   };

//   const handleAddTask = () => {
//     const newTask = {
//       id: tasks.length + 1,
//       title: taskTitle,
//       description: taskDescription,
//       subtasks: subtasks.map((subtask, index) => ({
//         id: index + 1,
//         text: subtask,
//         completed: false,
//       })),
//       status: 'todo',
//     };
//     dispatch(addTask(newTask));
//     handleCancel();
//   };

//   const handleUpdateTask = () => {
//     const updatedTask = {
//       id: currentTask.id,
//       title: taskTitle,
//       description: taskDescription,
//       subtasks: subtasks.map((subtask, index) => ({
//         id: index + 1,
//         text: subtask,
//         completed: false,
//       })),
//     };
//     dispatch(editTask(updatedTask));
//     handleCancel();
//   };

//   const handleDeleteTask = (taskId) => {
//     dispatch(deleteTask(taskId));
//   };

//   const resetForm = () => {
//     setTaskTitle('');
//     setTaskDescription('');
//     setSubtasks(['']);
//   };

//   const renderTaskCard = (task) => (
//      <Card
   
//     key={task.id}
//       className="mb-4 p-4 bg-white shadow-md rounded-lg bg-[#ffffff]"
//       title={
//         <div className="flex justify-between items-center bg-[#ffffff] ">
//           <span>{task.title}</span>
//           <Select
//             defaultValue={task.status}
//             className="w-32"
//             onChange={(value) => onStatusChange(task.id, value)}
//           >
//             <Option value="todo">To Do</Option>
//             <Option value="inprogress">In Progress</Option>
//             <Option value="completed">Completed</Option>
//           </Select>
//         </div>
//       }
//       extra={
//         <Dropdown
//           overlay={
//             <Menu>
//               <Menu.Item key="edit" onClick={() => handleEdit(task)}>Edit</Menu.Item>
//               <Menu.Item key="delete" onClick={() => handleDeleteTask(task.id)}>Delete</Menu.Item>
//             </Menu>
//           }
//           trigger={['click']}
//         >
//           <Button icon={<EllipsisOutlined />} />
//         </Dropdown>
//       }
//     >
//       {task.subtasks.map((subtask) => (
//         <Checkbox
//           key={subtask.id}
//           checked={subtask.completed}
//           onChange={() => onTaskChange(task.id, subtask.id)}
//           className={`block mb-1 text-lg ${subtask.completed ? 'line-through' : ''}`}
//         >
//           {subtask.text}
//         </Checkbox>
//       ))}
//     </Card> 
    
//   );

//   return (
//     <MainLayout>
//       <div className="p-6  bg-[#ffffff]">
//         <Title level={3} className="mb-6 font-bold text-xl">Tasks</Title>

//         <Row justify="space-between" align="middle" className="mb-6">
//           <Col>
//             <Button
//               type="primary"
//               icon={<PlusOutlined />}
//               className="rounded-md bg-blue-500 hover:bg-blue-600"
//               onClick={showModal}
//             >
//               Add Task
//             </Button>
//           </Col>
//           <Col>
//             <Avatar.Group>
//               <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" />
//               <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" />
//               <Avatar src="https://randomuser.me/api/portraits/men/56.jpg" />
//               <Avatar src="https://randomuser.me/api/portraits/women/76.jpg" />
//               <Avatar icon={<PlusOutlined />} />
//             </Avatar.Group>
//           </Col>
//         </Row>

//         <div className="mb-10">
//           <Title level={4} className="mb-3 font-bold text-lg">To Do's ({tasks.filter((task) => task.status === 'todo').length})</Title>
//           {tasks.filter((task) => task.status === 'todo').map(renderTaskCard)}
//         </div>

//         <div className="mb-10">
//           <Title level={4} className="mb-3 font-bold text-lg">In Progress ({tasks.filter((task) => task.status === 'inprogress').length})</Title>
//           {tasks.filter((task) => task.status === 'inprogress').map(renderTaskCard)}
//         </div>

//         <div className="mb-10">
//           <Title level={4} className="mb-3 font-bold text-lg">Completed ({tasks.filter((task) => task.status === 'completed').length})</Title>
//           {tasks.filter((task) => task.status === 'completed').map(renderTaskCard)}
//         </div>

//         <Modal
//           title={isEditing ? "Edit Task" : "Add New Task"}
//           visible={isModalVisible}
//           onCancel={handleCancel}
//           footer={[
//             <Button key="cancel" onClick={handleCancel}>Cancel</Button>,
//             <Button key="submit" type="primary" onClick={isEditing ? handleUpdateTask : handleAddTask}>
//               {isEditing ? 'Update' : 'Save'}
//             </Button>,
//           ]}
//         >
//           <Form layout="vertical">
//             <Form.Item label="Task Title">
//               <Input
//                 value={taskTitle}
//                 onChange={(e) => setTaskTitle(e.target.value)}
//                 placeholder="Enter task title"
//               />
//             </Form.Item>
//             <Form.Item label="Task Description">
//               <Input.TextArea
//                 value={taskDescription}
//                 onChange={(e) => setTaskDescription(e.target.value)}
//                 placeholder="Enter task description"
//               />
//             </Form.Item>
//             <Form.Item label="Subtasks">
//               {subtasks.map((subtask, index) => (
//                 <Input
//                   key={index}
//                   value={subtask}
//                   onChange={(e) => {
//                     const newSubtasks = [...subtasks];
//                     newSubtasks[index] = e.target.value;
//                     setSubtasks(newSubtasks);
//                   }}
//                   placeholder={`Enter subtask ${index + 1}`}
//                   className="mb-2"
//                 />
//               ))}
//               <Button
//                 type="link"
//                 onClick={() => setSubtasks([...subtasks, ''])}
//                 className="mb-2"
//               >
//                 Add another subtask
//               </Button>
//             </Form.Item>
//           </Form>
//         </Modal>
//       </div>
//     </MainLayout>
//   );
// };

// export default TaskList;




"use client";
import { useDispatch, useSelector } from 'react-redux';
import { Card, Checkbox, Button, Row, Col, Typography, Avatar, Select, Modal, Input, Form, Dropdown, Menu } from 'antd';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import { toggleTaskCompletion, addTask, deleteTask, editTask, updateTaskStatus } from '../../redux/taskSlice';
import { useState } from 'react';
import MainLayout from '@/components/app-components/Layout/MainLayout';
const { Title } = Typography;
const { Option } = Select;

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const darkMode = useSelector((state) => state.tasks.darkMode); // Accessing dark mode state

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [subtasks, setSubtasks] = useState(['']);

  const onTaskChange = (taskId, subtaskId) => {
    dispatch(toggleTaskCompletion({ taskId, subtaskId }));
  };

  const onStatusChange = (taskId, newStatus) => {
    dispatch(updateTaskStatus({ taskId, status: newStatus }));
  };

  const showModal = () => {
    resetForm();
    setIsModalVisible(true);
    setIsEditing(false);
  };

  const handleEdit = (task) => {
    setCurrentTask(task);
    setTaskTitle(task.title);
    setTaskDescription(task.description);
    setSubtasks(task.subtasks.map((subtask) => subtask.text));
    setIsModalVisible(true);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    resetForm();
  };

  const handleAddTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      description: taskDescription,
      subtasks: subtasks.map((subtask, index) => ({
        id: index + 1,
        text: subtask,
        completed: false,
      })),
      status: 'todo',
    };
    dispatch(addTask(newTask));
    handleCancel();
  };

  const handleUpdateTask = () => {
    const updatedTask = {
      id: currentTask.id,
      title: taskTitle,
      description: taskDescription,
      subtasks: subtasks.map((subtask, index) => ({
        id: index + 1,
        text: subtask,
        completed: false,
      })),
    };
    dispatch(editTask(updatedTask));
    handleCancel();
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const resetForm = () => {
    setTaskTitle('');
    setTaskDescription('');
    setSubtasks(['']);
  };

  const renderTaskCard = (task) => (
    <Card
      key={task.id}
      className="mb-4 p-4 shadow-md rounded-lg"
      style={{
        backgroundColor: darkMode ? '#24303f' : '#ffffff', // Card background color for dark mode
        color: darkMode ? '#ffffff' : '#000000', // Text color for dark mode
      }}
      title={
        <div className="flex justify-between items-center">
          <span>{task.title}</span>
          <Select
            defaultValue={task.status}
            className="w-32"
            onChange={(value) => onStatusChange(task.id, value)}
            style={{
              backgroundColor: darkMode ? '#24303f' : '#ffffff', // Dropdown background for dark mode
              color: darkMode ? '#ffffff' : '#000000', // Text color for dropdown
            }}
          >
            <Option value="todo">To Do</Option>
            <Option value="inprogress">In Progress</Option>
            <Option value="completed">Completed</Option>
          </Select>
        </div>
      }
      extra={
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="edit" onClick={() => handleEdit(task)}>
                Edit
              </Menu.Item>
              <Menu.Item key="delete" onClick={() => handleDeleteTask(task.id)}>
                Delete
              </Menu.Item>
            </Menu>
          }
          trigger={['click']}
        >
          <Button icon={<EllipsisOutlined />} />
        </Dropdown>
      }
    >
      {task.subtasks.map((subtask) => (
        <Checkbox
          key={subtask.id}
          checked={subtask.completed}
          onChange={() => onTaskChange(task.id, subtask.id)}
          className={`block mb-1 text-lg ${subtask.completed ? 'line-through' : ''}`}
          style={{ color: darkMode ? '#ffffff' : '#000000' }} // Text color for subtasks in dark mode
        >
          {subtask.text}
        </Checkbox>
      ))}
    </Card>
  );

  return (
    <MainLayout>
      <div
        className="p-6"
        style={{ backgroundColor: darkMode ? '#1a222c' : '#ffffff', color: darkMode ? '#ffffff' : '#000000' }}
      >
        <Title level={3} className="mb-6 font-bold text-xl" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
          Tasks
        </Title>

        <Row justify="space-between" align="middle" className="mb-6">
          <Col>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              className="rounded-md bg-blue-500 hover:bg-blue-600"
              onClick={showModal}
            >
              Add Task
            </Button>
          </Col>
          <Col>
            <Avatar.Group>
              <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" />
              <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" />
              <Avatar src="https://randomuser.me/api/portraits/men/56.jpg" />
              <Avatar src="https://randomuser.me/api/portraits/women/76.jpg" />
              <Avatar icon={<PlusOutlined />} />
            </Avatar.Group>
          </Col>
        </Row>

        <div className="mb-10">
          <Title level={4} className="mb-3 font-bold text-lg" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
            To Do's ({tasks.filter((task) => task.status === 'todo').length})
          </Title>
          {tasks.filter((task) => task.status === 'todo').map(renderTaskCard)}
        </div>

        <div className="mb-10">
          <Title level={4} className="mb-3 font-bold text-lg" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
            In Progress ({tasks.filter((task) => task.status === 'inprogress').length})
          </Title>
          {tasks.filter((task) => task.status === 'inprogress').map(renderTaskCard)}
        </div>

        <div className="mb-10">
          <Title level={4} className="mb-3 font-bold text-lg" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
            Completed ({tasks.filter((task) => task.status === 'completed').length})
          </Title>
          {tasks.filter((task) => task.status === 'completed').map(renderTaskCard)}
        </div>

        <Modal
          title={isEditing ? 'Edit Task' : 'Add New Task'}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={[
            <Button key="cancel" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={isEditing ? handleUpdateTask : handleAddTask}>
              {isEditing ? 'Update' : 'Save'}
            </Button>,
          ]}
        >
          <Form layout="vertical">
            <Form.Item label="Task Title">
              <Input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Enter task title"
                style={{
                  backgroundColor: darkMode ? '#24303f' : '#ffffff', // Input background color for dark mode
                  color: darkMode ? '#ffffff' : '#000000', // Input text color for dark mode
                }}
              />
            </Form.Item>
            <Form.Item label="Task Description">
              <Input.TextArea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Enter task description"
                style={{
                  backgroundColor: darkMode ? '#24303f' : '#ffffff',
                  color: darkMode ? '#ffffff' : '#000000',
                }}
              />
            </Form.Item>
            <Form.Item label="Subtasks">
              {subtasks.map((subtask, index) => (
                <Input
                  key={index}
                  value={subtask}
                  onChange={(e) => {
                    const newSubtasks = [...subtasks];
                    newSubtasks[index] = e.target.value;
                    setSubtasks(newSubtasks);
                  }}
                  placeholder={`Enter subtask ${index + 1}`}
                  className="mb-2"
                  style={{
                    backgroundColor: darkMode ? '#24303f' : '#ffffff',
                    color: darkMode ? '#ffffff' : '#000000',
                  }}
                />
              ))}
              <Button type="link" onClick={() => setSubtasks([...subtasks, ''])} className="mb-2">
                Add another subtask
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </MainLayout>
  );
};

export default TaskList;
