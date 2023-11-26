import React from "react";
import { day, dayName, month } from "../date/date";
import { IoIosAddCircle } from "react-icons/io";
import {useDispatch} from 'react-redux'
import { showAddTask } from "../redux/slices/slice";


const Side = () => {

  const dispatch = useDispatch()
  return (
    <aside className="w-full sm:w-28 sm:h-44 bg-purple-400 absolute max-sm:top-[0px] sm:right-[-90px] top-1/2 -translate-y-1/2 rounded-md">
      <div className="text-center my-3">
        <h1 className="text-white font-mono font-bold text-3xl">
          {day < 10 ? `0${day}` : day}
        </h1>
        <p className="text-sm text-white capitalize tracking-wide">
          {month} {new Date().getFullYear()}
        </p>
        <p className="text-sm text-white capitalize tracking-wide mt-1">
          {dayName}
        </p>
        <div
        onClick={()=> dispatch(showAddTask())}
        className="flex items-center mt-6 text-3xl cursor-pointer w-fit m-auto text-white">
          <IoIosAddCircle />
        </div>
      </div>
    </aside>
  );
};

export default Side;
