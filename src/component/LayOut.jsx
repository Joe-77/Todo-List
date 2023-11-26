import React from 'react'
import Box from './Container'
import AddTask from './AddTask';
import {useSelector} from "react-redux"
import { addTask } from '../redux/slices/slice';

const LayOut = () => {

  const select = useSelector(addTask)

  return (
    <div className="w-full h-screen flex items-center justify-center bg-purple-200 relative">
      <Box />
      {select === true && <AddTask/>}
    </div>
  );
}

export default LayOut