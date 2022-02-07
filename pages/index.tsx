import type { NextPage } from 'next'
import { Button } from 'antd';
import styles from '../styles/Home.module.css'
import Counter from '../features/Home/components/Counter';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button type='primary'>Button</Button>
      <Counter/>
    </div>
  )
}

export default Home
