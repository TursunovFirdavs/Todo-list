import { ChangeEvent, useState } from 'react'
import style from './home.module.css'
import { IData } from './interfaces'
import { data } from './constants'

function App(): JSX.Element {
  const [title, setTitle] = useState<string>('')
  const [arr, setArr] = useState<IData[]>(data)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value)
    // console.log(title);
  }

  const handleSubmit = () => {
    if (!title?.length) return;
    const newArr = {
      title,
      id: new Date().getTime(),
      description: 'descriptoin'
    }
    setArr([...arr, newArr])    
    setTitle('')
  }

  const deleteItem = (id: number) => {
    const newData = arr.filter(c => c.id != id);
    setArr(newData)
  }

  return (
    <div className={style.todo}>
      <h1 className={style.title}>App Todo</h1>
      <input className={style.input} value={title} onChange={changeHandler} type="text" placeholder='Enter todo' />
      <button onClick={handleSubmit} className={style.button}>Add todo</button>
      <div className={style.card}>
        {
          arr.map(c =>
            <div key={c.id} className={style.cardItem}>
              <p>{c.title}</p>
              <div className={style.delBtn}>
                <button onClick={() => deleteItem(c.id)}>Del</button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App
