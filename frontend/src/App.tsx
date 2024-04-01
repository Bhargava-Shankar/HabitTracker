import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/Table'
import TableContextProvider from './contexts/TableContextProvider'
import InputTask from './components/InputTask'
function App() {
  return (
      <TableContextProvider>
        <Table></Table>
        <InputTask></InputTask>
      </TableContextProvider>
  )
}

export default App
