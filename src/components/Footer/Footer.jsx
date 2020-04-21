import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
	return (
		<div className={styles.container}>
			<p className={styles.footerTag}>
				Re-developed by{' '}
				<a
					className={styles.footerLink}
					href="https://www.linkedin.com/in/md-osman-haruni-shin-32127818b/"
					target="_blank"
				>
					<strong>Khan Osman</strong>
				</a>
			</p>
		</div>
	);
};

export default Footer;
