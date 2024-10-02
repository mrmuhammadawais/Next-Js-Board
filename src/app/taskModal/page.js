"use client"
import React from 'react';
import { Modal, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, closeModal, updateNewTask } from '../redux/taskSlice';

const TaskModal = () => {
  const dispatch = useDispatch();
  const { isModalOpen, newTask } = useSelector((state) => state.tasks);

  const handleOk = () => {
    dispatch(addTask(newTask));
    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  const handleInputChange = (e) => {
    dispatch(updateNewTask({ ...newTask, [e.target.name]: e.target.value }));
  };

  return (
    <Modal
      title="Add Task"
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Input
        name="title"
        value={newTask.title}
        onChange={handleInputChange}
        placeholder="Task Title"
      />
      <Input
        name="description"
        value={newTask.description}
        onChange={handleInputChange}
        placeholder="Task Description"
      />
    </Modal>
  );
};

export default TaskModal;