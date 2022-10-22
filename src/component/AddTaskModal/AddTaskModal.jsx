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
  const [id, setId] = useState();
  const { setTaskListToday, taskListToday, countSubData, setSubDataCount, } = useData();
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
    setFormData({
      mainTask: "",
      subTask: [
        {
          taskName: "",
        }
      ],
      mainTaskStatus: false,
    })
  }
  const addSubTask = (event) => {
    setId(id + 1);
    const { name } = event.target;
    // formData.subTask.push({ taskName: "" });
    // setFormData((ps) => [...ps.subTask, [{ id: id, taskName: "" }]]);
    console.log(formData.subTask, 'd');
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
            {formData?.subTask?.map((ele, id) => {
              return (
                <>
                  <label>Sub Task</label>
                  <Input onChange={handleChange} type="text" name="subTask" placeholder="Sub Task" />
                </>
              )
            })}
            <div>
              <Button onClick={addSubTask} color="blue">Add Sub Task</Button>
            </div>
            <label>Task Status</label>
            <Select>
              <option name="mainTaskStatus" value={true}>Completed</option>
              <option name="mainTaskStatus" value={false}>Open to Complete</option>
            </Select>
          </ModalBody>
          <ModalFooter>
            {/* <Button type="submit" name="subTask" colorScheme="green" size="sm">ADD +</Button> */}
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}

export default AddTaskModal