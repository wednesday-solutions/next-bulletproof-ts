import type { NextPage } from 'next'
import { Button } from 'antd';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button type='primary'>Button</Button>
    </div>
  )
}

export default Home
