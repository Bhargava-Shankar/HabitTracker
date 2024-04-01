import React, { useState,useRef, SetStateAction } from 'react'
import "../components/css/tracker-table.css";
declare global{
    interface Date {
        addDays(days: number): Date;
    }
    interface taskList{
        name?: string,
    }
}
Date.prototype.addDays  = function(days: number ): Date  {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
function getDates(startDate: Date , stopDate: Date ): Date[] {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date(currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

const Table: React.FC  = () => {
  const startDate = new Date(2024, 0, 1); 
  const stopDate = new Date(2024, 0, 100);
    const datesInRange = getDates(startDate, stopDate);
    
   const [taskList, setTaskList] = useState<taskList[]>([]);
    let taskNameRef = useRef<HTMLInputElement>(null);

    const handleAddTask = () => {
        setTaskList([...taskList, { name: taskNameRef.current?.value }]);
        console.log(taskNameRef.current?.value);
    }
  return (
    <div className='tracker-table-container'>
      <table border={1} className='tracker-table'>
              <tr>
                  <th>Habits</th>
                  {datesInRange.map((value: Date, key: number) => {
                      return (
                          <th>{value.toLocaleDateString(undefined,{
                              month: "short", day: "numeric"
                          })}</th>
                      )
                  })}
              </tr>
              {
                  taskList.map((value, key) => {
                      return (
                          <tr>
                              {value.name}
                          </tr>
                      )
                  })
              }
          </table>
          <div className="input-container">
              <input type="text" ref={taskNameRef} />
              <button onClick={handleAddTask}>ADD TASK</button>
          </div>
    </div>
  )
}

export default Table
