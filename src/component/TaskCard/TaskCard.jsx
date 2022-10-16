import React from 'react'
import { useData } from '../../context/DataContext';
import {
  useDisclosure,
} from '@chakra-ui/react'
import styles from "./TaskCard.module.css";
import AddTaskModal from '../AddTaskModal/AddTaskModal';

const TaskCard = () => {
  const { taskListToday, setTaskListToday } = useData();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const AddMainTask = () => {
    
  }
  return (
    <>
      <AddTaskModal onClose={onClose} isOpen={isOpen} />
      <div className={styles.task_flex_box}>
        {taskListToday.map((ele, map) => {
          console.log(taskListToday)
          return (
            <div className={`${styles.task_card} ${styles.task_flex_box}`}>
              <p>{ele.mainTask}</p>
            </div>

          )
        })}
        <div className={`${styles.task_flex_box} ${styles.task_card}`}>
          <button onClick={() => {
            AddMainTask();
            onOpen();
          }}>+</button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
