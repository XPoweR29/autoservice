import React from 'react';

import styles from './Feature.module.scss';

interface Props {
    icon: string;
    children: React.ReactNode;
}

export const Feature = ({ icon, children }: Props) => {
	return (
		<div className={styles.feature}>
			<img src={icon} alt='ikona' aria-hidden/>
			<span>{children}</span>
		</div>
	);
};
