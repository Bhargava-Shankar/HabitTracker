import { useContext } from 'react'
import { tableContext } from '../contexts/TableContextProvider'
const InputTask = () => {
    const { taskNameRef,handleAddTask } = useContext(tableContext);
  return (
      <div className="input-container">
          <input type="text" ref={taskNameRef} />
          <button onClick={handleAddTask}>ADD TASK</button>
          <details className="dropdown">
              <summary className="m-1 btn">open or close</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
              </ul>
          </details>
      </div>
  )
}
export default InputTask
