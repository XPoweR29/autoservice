import React from 'react'

import styles from './LinkBar.module.scss';
import Link from 'next/link';

export const LinkBar = () => {
  return (
    <nav className={styles.linkBar}>
            <ul>
                <li><Link href='/'>Start</Link></li>
                <li><Link href='/#o-nas'>O nas</Link></li>
                <li><Link href='/#uslugi'>Usługi</Link></li>
                <li><Link href='/#kontakt'>Kontakt</Link></li>
            </ul>
    </nav>
  )
}
