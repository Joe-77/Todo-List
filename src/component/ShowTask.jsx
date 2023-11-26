import moment from "moment";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, selectList } from "../redux/slices/slice";
import swal from "sweetalert";

const ShowTask = () => {
  // console.log(new Date().getTime())

  const select = useSelector(selectList);

  const dispatch = useDispatch();

  const del = (data) => {
    {
      swal({
        title: "Are you sure?",
        text: "that this task is finished!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          dispatch(deleteTask(data));
          swal("Poof! Your Task has been deleted!", {
            icon: "success",
          });
        }
      });
    }
  };

  return (
    <>
      <div className="mx-2 md:mx-5 mt-3 h-48 overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-600  pb-2">
        {select.length === 0 ? (
          <p className="text-center w-full text-red-600 mt-5 italic font-mono tracking-wider">
            There is nothing to do.
          </p>
        ) : (
          select.map((e, id) => (
            <div key={id} className="flex justify-between w-full mb-5">
              <div className="flex items-center gap-1 md:gap-2">
                <p className="text-small md:text-xs font-sans text-purple-400">
                  {moment(new Date(e.time)).fromNow()}
                </p>
                <p className=" text-xs md:text-base text-purple-600 leading-6">
                  {e.task}
                </p>
              </div>

              <div className="flex items-center gap-3 pr-2">
                <span
                  onClick={() => del(e)}
                  className="text-2xl text-red-500 delete cursor-pointer"
                >
                  <MdDelete />
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ShowTask;
