import { ChangeEvent, useState } from 'react'
import style from './home.module.css'
import { IData } from './interfaces'

function App(): JSX.Element {
  const data: IData[] = [
    { title: 'omar', id: 1, description: 'description' },
    { title: 'osman', id: 2, description: 'description' },
    { title: 'Abdulloh', id: 1, description: 'description' },
  ]

  const [title, setTitle] = useState<string>('')
  const [arr, setArr] = useState<IData[]>(data)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value)
    // console.log(title);
  }

  const handleSubmit = () => {
    if (!title?.length) return;
    console.log(title);
    setTitle('')
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
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App
