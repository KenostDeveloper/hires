'use client'
import { useState } from "react";
import styles from "./photo.module.css";
import Modal from "../components/Modal/Modal";
import Nav from "../components/Nav/Nav";
// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//     title: "HiRes Studio — Фото",
//     description: "Generated by create next app",
// };

export default function Photo() {
    const [modal, setModal] = useState(false)
    
  return (
    <div className={styles.main}>
        <Nav setModal={setModal}/>
        <Modal active={modal} setActive={setModal} >
            <iframe height="100%" width="500px"  id="ms_booking_iframe" src="https://n1025717.yclients.com/"></iframe>
        </Modal>
        <div className={`container ${styles.container}`}>
            
        </div>
    </div>
  )
}
