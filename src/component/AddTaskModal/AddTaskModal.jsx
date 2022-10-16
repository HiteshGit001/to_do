import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from '@chakra-ui/react'
import { useData } from '../../context/DataContext';

const AddTaskModal = ({ isOpen, onClose }) => {
  const { setTaskListToday, taskListToday } = useData();
  const [formData, setFormData] = useState(
    {
      mainTask: "",
      subTask: [
        {
          taskName: "",
        }
      ]
    }
  );
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  const handleSubTask = (event) => {
    const {name, value} = event.target;
    // setFormData({...formData.subTask, [name]:value});
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskListToday((ps) => [...ps, formData]);
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Task</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <label>Main Task</label>
            <Input onChange={handleChange} type="text" name="mainTask" placeholder="Main Task" />
            <label>Main Task</label>
            <Input onChange={handleSubTask} type="text" name="subTask" placeholder="Sub Task" />
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="green" size="sm">ADD +</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default AddTaskModal