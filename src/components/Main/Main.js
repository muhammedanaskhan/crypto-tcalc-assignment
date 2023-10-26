import React from 'react'
import styles from './Main.module.css'
import Calculator from '../Calculator/Calculator'
import GetStartedCard from '../GetStartedCard/GetStartedCard'

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.calculatorAndCard}>
        <Calculator/>
        <GetStartedCard/>
      </div>
    </div>
  )
}

export default Main