import React, { useContext } from 'react'
import "../components/css/tracker-table.css";
import { tableContext } from '../contexts/TableContextProvider';
declare global{
    interface Date {
        addDays(days: number): Date;
    }
    interface Task{
        name?: string,
    }
}

const Table: React.FC  = () => {
    const { datesInRange,taskList, } = useContext(tableContext);
    return (
    <div className='overflow-y-auto'>
      <table border={1} className='table'>
              <tr>
                  <th>Habits</th>
                  {datesInRange.map((value: Date) => {
                      return (
                          <th>{value.toLocaleDateString(undefined,{
                              month: "short", day: "numeric"
                          })}</th>
                      )
                  })}
              </tr>
              {
                  taskList.map((value: Task) => {
                      return (
                          <tr>
                              {value.name}
                          </tr>
                      )
                  })
              }
          </table>
    </div>
  )
}

export default Table
