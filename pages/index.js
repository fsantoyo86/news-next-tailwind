import Head from 'next/head'
import { Toolbar } from '../components/toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
   <div className="page-container">
     <Toolbar></Toolbar>
     <div className={styles.main}>
       <h1>News at every minute</h1>
       <h3>The latest events at one click away</h3>
     </div>
   </div>
   </>
  )
}
