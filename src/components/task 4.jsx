/* eslint-disable react/prop-types */

const Task4 = ({item = []}) => {
  return (
    <div>
      <ul>
        {item.length > 0 ? (
          item.map((item, index) => <li key={index}>{item}</li>)
        ):(
          <li>нечего нет</li>
        )}
      </ul>
    </div>
  )
}

export default Task4