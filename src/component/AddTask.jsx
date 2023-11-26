import React from "react";
import { useDispatch } from "react-redux";
import { addTaskToArray, hideAddTask } from "../redux/slices/slice";
import { useForm } from "react-hook-form";

const AddTask = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const addTask = (task) => {
    console.log(task.task);
    dispatch(addTaskToArray(task));
    document.getElementById("task").value = "";
  };

  return (
    <>
      <div className=" absolute w-full h-full cursor-pointer flex items-center justify-center z-0">
        <form
          className="bg-white shadow-lg shadow-slate-500 max-sm:w-48 md:w-80 px-3 py-3 z-40"
          onSubmit={handleSubmit(addTask)}
        >
          <input
            id="task"
            {...register("task", { required: true })}
            type="text"
            className="bg-gray-300 outline-none px-2 py-1 rounded-lg w-11/12"
          />

          {errors.task && (
            <small className="text-red-500 text-start">Field is empty !</small>
          )}

          <div className="mt-9 flex items-center justify-end gap-3 pr-4">
            <button className="bg-blue-600 px-3 py-1 rounded-md text-white capitalize tracking-wider">
              add
            </button>
            <span
              onClick={() => dispatch(hideAddTask())}
              className="bg-red-600 px-3 py-1 rounded-md text-white capitalize tracking-wider"
            >
              cancel
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTask;
