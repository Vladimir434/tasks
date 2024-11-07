/* eslint-disable react/prop-types */
const Task2 = ({title}) => {
  return (
    <div>
      <button>{title ? title : 'error'}</button>
    </div>
  )
}

export default Task2