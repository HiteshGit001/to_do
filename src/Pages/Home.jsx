import { Search2Icon } from '@chakra-ui/icons';
import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react'
import wave from "../assets/icon/wave.svg";
import { useData } from '../context/DataContext';
import "../styles/pages.css";

const Home = () => {
  const { todaysNumber } = useData();
  const date = new Date().toJSON().slice(0, 10);
  console.log(date)
  return (
    <div>
      <div className="banner_box">
        <p className="title">My todo List</p>
        <p className="subititle">You have <span className="today_task">{todaysNumber} tasks</span> today!</p>
        <p>{date}</p>
        <InputGroup style={{ justifyContent: "center" }}>
          <InputLeftElement
            pointerEvents='none'
            children={<Icon as={Search2Icon} color='gray.300' />}
          />
          <Input placeholder="Search" className="search_input" type="text" />
        </InputGroup>
        <img src={wave} alt="wave icon" />
      </div>
    </div>
  );
};

export default Home;
