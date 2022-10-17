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
  Select,
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
      ],
      mainTaskStatus: false,
    }
  );
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, subTask: [{ taskName: value }] });
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
            <Input onChange={handleChange} type="text" name="subTask" placeholder="Sub Task" />
            <label>Task Status</label>
            <Select>
              <option name="mainTaskStatus" value={true}>Completed</option>
              <option name="mainTaskStatus" value={false}>Open to Complete</option>
            </Select>
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