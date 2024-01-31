'use client'
import { useState } from "react";
import styles from "./photo.module.css";
import Modal from "../components/Modal/Modal";
import Nav from "../components/Nav/Nav";

export default function PhotoComponents() {
    const [modal, setModal] = useState(false)
    
  return (
    <div>
        <Nav setModal={setModal}/>
        <Modal active={modal} setActive={setModal} >
            <iframe height="100%" width="500px"  id="ms_booking_iframe" src="https://n1025717.yclients.com/"></iframe>
        </Modal>
    </div>
  )
}
