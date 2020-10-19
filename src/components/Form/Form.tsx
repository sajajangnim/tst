import React, { ReactElement, useState } from 'react'
import styles from './Form.module.scss'
import SweetAlert from 'sweetalert2-react';
import axios from 'axios'

const Form = () : ReactElement => {
  const [name, setName] = useState<string>('')
  const [first, setFirst] = useState<string>('')
  const [last, setLast] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)

  const postData = async (first : string, last : string) =>{
    const payload = {
      first,
      last
    }

    const { data : { name }} = await axios.post('https://jingga-nangis.azurewebsites.net/api/PopUp?', payload)
    
    setName(name)
    setFirst('')
    setLast('')
    setShow(true)
    
  }
  
  return (
    <React.Fragment>
      <div className={styles.container}>
      <div className={styles.welcome}>
        Welcome { name }!
      </div>
      <div  className={styles.formContainer}>
        <div className={styles.field}>
          <div className= {styles.title}>
            First name:
          </div>
          <input type="text" value={first} className={styles.input} onChange={(e) => setFirst(e.target.value)}/>
        </div>
        <div className={styles.field}>
          <div className= {styles.title}>
            Last name:
          </div>
          <input type="text" value={last} className={styles.input} onChange={(e) => setLast(e.target.value)}/>
        </div>
        <div className={styles.btn} onClick={() => postData(first, last)}>
          Enter
        </div>
      </div>
    </div>
    <SweetAlert
      show={show}
      title= {`Hello there, ${name}!`}
      onConfirm={() => setShow(false)}
    />
    </React.Fragment>
  )
}

export default Form
