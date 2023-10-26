import React from 'react'
import styles from './GetStartedCard.module.css'
import Image from 'next/image'
import getStarted from '@/assets/images/get-started.svg'

import ArrowRight from '@/assets/images/ArrowRight.svg'

function GetStartedCard() {
  return (
    <div className={styles.card}>
      <h1>
        Get Started with KoinX<br/>for FREE
      </h1>
      <p>With our range of features that you can equip for<br/> free,
        KoinX allows you to be more educated and<br/> aware of your tax reports.</p>
        <Image className={styles.img} src={getStarted} alt="Get Started" width={178.6} height={166.2}/>
        <button className={styles.btn}>Get Started for FREE <Image src={ArrowRight} width={20} height={20}/></button>
    </div>
  )
}

export default GetStartedCard