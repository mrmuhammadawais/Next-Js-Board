
"use client";
import { useDispatch, useSelector } from 'react-redux';
import { Card, Checkbox, Button, Row, Col, Typography, Avatar, Select, Modal, Input, Form, Dropdown, Menu } from 'antd';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import { toggleTaskCompletion, addTask, deleteTask, editTask,updateTaskStatus} from '../../../redux/taskSlice' // Ensure all actions are imported
import { useState } from 'react';

const { Title } = Typography;
const { Option } = Select;

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

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
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>{task.title}</span>
          <Select
            defaultValue={task.status}
            style={{ width: 120 }}
            onChange={(value) => onStatusChange(task.id, value)}
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
              <Menu.Item key="edit" onClick={() => handleEdit(task)}>Edit</Menu.Item>
              <Menu.Item key="delete" onClick={() => handleDeleteTask(task.id)}>Delete</Menu.Item>
            </Menu>
          }
          trigger={['click']}
        >
          <Button icon={<EllipsisOutlined />} />
        </Dropdown>
      }
      style={{ marginBottom: '10px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}
    >
      {task.subtasks.map((subtask) => (
        <Checkbox
          key={subtask.id}
          checked={subtask.completed}
          onChange={() => onTaskChange(task.id, subtask.id)}
          style={{ display: 'block', marginBottom: '5px', fontSize: '16px', textDecoration: subtask.completed ? 'line-through' : 'none' }}
        >
          {subtask.text}
        </Checkbox>
      ))}
    </Card>
  );

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f2f5' }}>
      <Title level={2} style={{ marginBottom: '20px', fontWeight: 'bold' }}>
        Tasks
      </Title>

      <Row justify="space-between" align="middle" style={{ marginBottom: '20px' }}>
        <Col>
          <Button type="primary" icon={<PlusOutlined />} style={{ borderRadius: '6px', backgroundColor: '#1890ff' }} onClick={showModal}>
            Add Task
          </Button>
        </Col>
        <Col>
          <Avatar.Group style={{ display: 'inline-block' }}>
            <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" />
            <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" />
            <Avatar src="https://randomuser.me/api/portraits/men/56.jpg" />
            <Avatar src="https://randomuser.me/api/portraits/women/76.jpg" />
          </Avatar.Group>
        </Col>
      </Row>

      <div style={{ marginBottom: '40px' }}>
        <Title level={3} style={{ marginBottom: '12px', fontWeight: 'bold' }}>
          To Do's ({tasks.filter((task) => task.status === 'todo').length})
        </Title>
        {tasks.filter((task) => task.status === 'todo').map(renderTaskCard)}
      </div>

      <div style={{ marginBottom: '40px' }}>
        <Title level={3} style={{ marginBottom: '12px', fontWeight: 'bold' }}>
          In Progress ({tasks.filter((task) => task.status === 'inprogress').length})
        </Title>
        {tasks.filter((task) => task.status === 'inprogress').map(renderTaskCard)}
      </div>

      <div style={{ marginBottom: '40px' }}>
        <Title level={3} style={{ marginBottom: '12px', fontWeight: 'bold' }}>
          Completed ({tasks.filter((task) => task.status === 'completed').length})
        </Title>
        {tasks.filter((task) => task.status === 'completed').map(renderTaskCard)}
      </div>

      <Modal
        title={isEditing ? "Edit Task" : "Add New Task"}
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
            />
          </Form.Item>
          <Form.Item label="Task Description">
            <Input.TextArea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Enter task description"
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
                style={{ marginBottom: '10px' }}
              />
            ))}
            <Button
              type="link"
              onClick={() => setSubtasks([...subtasks, ''])}
              style={{ marginBottom: '10px' }}
            >
              Add another subtask
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TaskList;
