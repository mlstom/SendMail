import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [mail, setmail] = useState('')
  const handle = async(e)=>{
    e.preventDefault()
    await fetch('https://send-mail-tau.vercel.app/api/sendmail', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:mail}) 
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <input type='email' value={mail} onChange={(e)=>setmail(e.target.value)} />
      <button type='button' onClick={(e)=>handle(e)}>Send Mail</button>
    </div>
  )
}
