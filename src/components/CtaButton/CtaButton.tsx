import Link from 'next/link';
import React from 'react';



import styles from './CtaButton.module.scss';

interface Props {
    className?: string;
    icon?: string;
	children: React.ReactNode;
}

export const CtaButton = ({children, className, icon}: Props) => {
	return (
		<Link href='/#kontakt' className={`${styles.cta} ${className}`}>
			<img src={icon} alt='ikona' />
			{children}
		</Link>
	);
};
