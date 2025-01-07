import React from 'react';

import styles from './ServiceItem.module.scss';

export const ServiceItem = ({ icon, title, description }: ServiceItem) => {
	return (
		<div className={styles.item}>
			<img
				className={styles.icon}
				src={icon}
				alt='ikona'
				aria-hidden
			/>
			<div className={styles.label}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};
