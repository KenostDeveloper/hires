'use client'
import React from 'react';
import styles from './Title.module.css'


const Title = ({text, id}: any) => {

    return (
        <h2 id={id} className={styles.title}>{text}</h2>
    );
};

export default Title;