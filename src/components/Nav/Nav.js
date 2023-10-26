import React from 'react'
import styles from './Nav.module.css'
import Image from 'next/image'
import KoinXlogo from '@/assets/images/koinx-logo.svg'
import Link from 'next/link'
function Nav() {
  return (
    <div className={styles.nav}>
        <Image src={KoinXlogo} alt="KoinX Logo" width={95} height={20}/>
        <div className={styles.btnsDiv}>
            <div className={styles.routes}>
                <Link href="/" className={styles.route}>Features</Link>
                <Link href="/" className={styles.route}>Exchanges</Link>
                <Link href="/" className={styles.route}>How it Works?</Link>
                <Link href="/" className={styles.route}>Blog</Link>
                <Link href="/" className={styles.route}>About us</Link>
            </div>
            <button className={styles.signInBtn}>Sign In</button>
        </div>
    </div>
  )
}

export default Nav