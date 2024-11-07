import './App.css'
import Task1 from './components/task 1'
import Task2 from './components/task 2'
import Task3 from './components/task 3'
import Task4 from './components/task 4'
function App() {

  return (
    <>
    <Task1 name ={'valadimir'}/>
    <Task1/>
    <Task2 title={'goodbye'}/>
    <Task2/>
    <Task3 type={'text'}/>
    <Task3 type={'password'}/>
    <Task4 item={[
      'tea',
      'coffee',
      'butter',
      'bread',
    ]}/>
    <Task4/>
    </>
  )
}

export default App
