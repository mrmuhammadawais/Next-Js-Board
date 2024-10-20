"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Checkbox,
  Button,
  Row,
  Col,
  Typography,
  Avatar,
  Select,
  Modal,
  Input,
  Form,
  Dropdown,
  Menu,
  Breadcrumb,
} from "antd";
import { PlusOutlined, EllipsisOutlined } from "@ant-design/icons";
import {
  toggleTaskCompletion,
  addTask,
  deleteTask,
  editTask,
  updateTaskStatus,
} from "../../redux/taskSlice";
import { useState } from "react";
import MainLayout from "@/components/app-components/Layout/MainLayout";

const { Title } = Typography;
const { Option } = Select;

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const darkMode = useSelector((state) => state.tasks.darkMode);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [subtasks, setSubtasks] = useState([""]);

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
      status: "todo",
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
    setTaskTitle("");
    setTaskDescription("");
    setSubtasks([""]);
  };

  const handleSubtaskChange = (value, index) => {
    const newSubtasks = [...subtasks];
    newSubtasks[index] = value;
    setSubtasks(newSubtasks);
  };

  const addSubtaskField = () => {
    setSubtasks([...subtasks, ""]);
  };

  const removeSubtaskField = (index) => {
    const newSubtasks = [...subtasks];
    newSubtasks.splice(index, 1);
    setSubtasks(newSubtasks);
  };

  const renderTaskCard = (task) => (
    <Card
      key={task.id}
      className="mb-4 p-4 shadow-md rounded-lg"
      style={{
        backgroundColor: darkMode ? "#24303f" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        border: "none",
        borderRadius: "0",
      }}
      title={
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div className="text-left mb-2 sm:mb-0">{task.title}</div>

          <div className="flex flex-row sm:flex-row sm:items-center w-full sm:w-auto">
            <Select
              defaultValue={task.status}
              className="w-full sm:w-32 mb-2 sm:mb-0 sm:mr-2"
              onChange={(value) => onStatusChange(task.id, value)}
              style={{
                backgroundColor: darkMode ? "#24303f" : "#ffffff",
                color: darkMode ? "#ffffff" : "#000000",
              }}
            >
              <Option value="todo">To Do</Option>
              <Option value="inprogress">In Progress</Option>
              <Option value="completed">Completed</Option>
            </Select>

            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="edit" onClick={() => handleEdit(task)}>
                    Edit
                  </Menu.Item>
                  <Menu.Item
                    key="delete"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Delete
                  </Menu.Item>
                </Menu>
              }
              trigger={["click"]}
            >
              <Button icon={<EllipsisOutlined />} className="ml-auto sm:ml-0" />
            </Dropdown>
          </div>
        </div>
      }
    >
      {task.subtasks.map((subtask) => (
        <div key={subtask.id} className="flex items-center mb-1">
          <Checkbox
            checked={subtask.completed}
            onChange={() => onTaskChange(task.id, subtask.id)}
            className={`${subtask.completed ? "line-through" : ""} mr-2`}
            style={{ color: darkMode ? "#ffffff" : "#000000" }}
          >
            {subtask.text}
          </Checkbox>
        </div>
      ))}
    </Card>
  );

  return (
    <MainLayout>
      <div
        className="p-0"
        style={{
          // backgroundColor: "#f1f5f9",
          // color: darkMode ? "#ffffff" : "#000000",
          backgroundColor: darkMode ? "#1a222c" : "#ffffff",
          border: "none",
          borderRadius: "0",
          overflow: "hidden",
        }}
      >
        <Row justify="space-between" align="middle" className="mb-6">
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Title level={3} className="font-bold text-xl-700">
              TaskList
            </Title>
          </Col>

          <Col xs={24} sm={12} md={12} lg={12} xl={12} className="text-right">
            <Breadcrumb
              style={{
                display: "inline-block",
                justifyContent: "flex-end",
                width: "100%",
                marginLeft: "314px",

                // color: darkMode ? "#ffffff" : "#ffffff",
              }}
            >
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item>TaskList</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <div className="max-w-full mx-auto">
          <div
            className="mb-6 flex flex-col md:flex-row justify-between items-center p-4 rounded-lg shadow-md"
            style={{
              backgroundColor: darkMode ? "#24303f" : "#ffffff",
              color: darkMode ? "#ffffff" : "#000000",
              border: "none",
              borderRadius: "0",
            }}
          >
            <div className="flex items-center mb-4 md:mb-0">
              <Title
                level={3}
                className="font-bold text-xl"
                style={{
                  color: darkMode ? "#ffffff" : "#000000",
                  border: "none",
                  borderRadius: "0",
                }}
              >
                Tasks
              </Title>
            </div>

            <Row justify="center" align="middle" className="w-full md:w-auto">
              <Col className="mr-4" xs={0} md={2}></Col>

              <div className="mr-3">
                <Col xs={24} md={12} className="flex justify-center">
                  <Avatar.Group>
                    <Avatar src="https://randomuser.me/api/portraits/women/44.jpg" />
                    <Avatar src="https://randomuser.me/api/portraits/men/56.jpg" />
                    <Avatar src="https://randomuser.me/api/portraits/women/76.jpg" />
                    <Avatar
                      icon={<PlusOutlined style={{ color: "#2740fe" }} />}
                    ></Avatar>
                  </Avatar.Group>
                </Col>
              </div>

              <Col xs={24} md={6} className="mt-4 md:mt-0 flex justify-center">
                <Button
                  type="primary"
                  icon={<PlusOutlined color="#2740fe" />}
                  className="rounded-md bg-[#3C50E0] hover:bg-blue-600"
                  onClick={showModal}
                  style={{
                    backgroundColor: "#3C50E0",
                    color: "#ffffff",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  Add Task
                </Button>
              </Col>

              <Col className="ml-4" xs={0} md={2}></Col>
            </Row>
          </div>

          <div className="mb-10">
            <Title level={4} className="mb-3 font-bold text-lg">
              To Do's ({tasks.filter((task) => task.status === "todo").length})
            </Title>
            {tasks.filter((task) => task.status === "todo").map(renderTaskCard)}
          </div>

          <div className="mb-10">
            <Title level={4} className="mb-3 font-bold text-lg">
              In Progress (
              {tasks.filter((task) => task.status === "inprogress").length})
            </Title>
            {tasks
              .filter((task) => task.status === "inprogress")
              .map(renderTaskCard)}
          </div>

          <div className="mb-10">
            <Title level={4} className="mb-3 font-bold text-lg">
              Completed (
              {tasks.filter((task) => task.status === "completed").length})
            </Title>
            {tasks
              .filter((task) => task.status === "completed")
              .map(renderTaskCard)}
          </div>
        </div>
        <Modal
          title={isEditing ? "Edit Task" : "Add Task"}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form
            layout="vertical"
            onFinish={isEditing ? handleUpdateTask : handleAddTask}
          >
            <Form.Item label="Task Title" required>
              <Input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Task Description">
              <Input.TextArea
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Subtasks">
              {subtasks.map((subtask, index) => (
                <div key={index} className="flex items-center mb-2">
                  <Input
                    value={subtask}
                    onChange={(e) => handleSubtaskChange(e.target.value, index)}
                    className="mr-2"
                  />
                  <Button
                    type="danger"
                    onClick={() => removeSubtaskField(index)}
                    disabled={subtasks.length === 1}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button type="dashed" onClick={addSubtaskField} block>
                Add Subtask
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                {isEditing ? "Update Task" : "Add Task"}
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </MainLayout>
  );
};

export default TaskList;








