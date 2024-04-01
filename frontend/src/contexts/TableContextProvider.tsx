import { PropsWithChildren, createContext,useState,useRef } from "react";


export const tableContext = createContext<any>({});
declare global {
    interface Date {
        addDays(days: number): Date;
    }
}
Date.prototype.addDays = function (days: number): Date {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
function getDates(startDate: Date, stopDate: Date): Date[] {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date(currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}


const TableContextProvider = ({ children }: any) => {
    const startDate = new Date(2024, 0, 1);
    const stopDate = new Date(2024, 0, 100);
    const datesInRange = getDates(startDate, stopDate);
    const [taskList, setTaskList] = useState<Task[]>([]);
    let taskNameRef = useRef<HTMLInputElement>(null);
    const handleAddTask = () => {
        setTaskList([...taskList, { name: taskNameRef.current?.value }]);
        console.log(taskNameRef.current?.value);
    }
    const some = 10;
    return (
        <tableContext.Provider value={{
            startDate, stopDate, datesInRange, taskList, setTaskList,
            taskNameRef, handleAddTask,some}}>
            {children}
        </tableContext.Provider>
  )
}

export default TableContextProvider


