'use client'
import { useState } from "react";
import styles from "./photo.module.css";
import Modal from "../components/Modal/Modal";
import Nav from "../components/Nav/Nav";
import Image from 'next/image'

export default function PhotoComponents() {
    const [modal, setModal] = useState(false)

    let Photo = [
      {
          id: 1,
          imgSrc: "/Photo/2024-01-24 01.33.17.jpg"
      },
      {
          id: 1,
          imgSrc: "/Photo/2024-01-24 01.33.32.jpg"
      },
      {
          id: 1,
          imgSrc: "/Photo/2024-01-24 01.33.36.jpg"
      },
      {
          id: 1,
          imgSrc: "/Photo/2024-01-24 01.33.41.jpg"
      },
      {
          id: 1,
          imgSrc: "/Photo/6U6A7196.png"
      },
      {
          id: 1,
          imgSrc: "/Photo/6U6A7197.png"
      },
      {
          id: 1,
          imgSrc: "/Photo/6U6A7199.png"
      },
      {
          id: 1,
          imgSrc: "/Photo/6U6A7201.png"
      },
      {
          id: 1,
          imgSrc: "/Photo/6U6A7202.png"
      },
      {
          id: 1,
          imgSrc: "/Photo/6U6A7209.png"
      },
      {
          id: 1,
          imgSrc: "/Photo/6U6A7213.png"
      },
      {
          id: 1,
          imgSrc: "/Photo/2024-01-24 01.36.24.jpg"
      },
      {
          id: 1,
          imgSrc: "/Photo/6U6A7215.png"
      },
      {
          id: 1,
          imgSrc: "/Photo/2024-01-24 01.36.27.jpg"
      },
      {
          id: 1,
          imgSrc: "/Photo/6U6A7217.png"
      },
      {
          id: 1,
          imgSrc: "/Photo/2024-01-24 01.36.08.jpg"
      },
      // {
      //     id: 1,
      //     imgSrc: "/Photo/6U6A7218.png"
      // },
      // {
      //     id: 1,
      //     imgSrc: "/Photo/6U6A7222.jpg"
      // },
      // {
      //     id: 1,
      //     imgSrc: "/Photo/6U6A7224.png"
      // },
      // {
      //     id: 1,
      //     imgSrc: "/Photo/2024-01-24 01.36.17.jpg"
      // },
      // {
      //     id: 1,
      //     imgSrc: "/Photo/6U6A7227.png"
      // },
      // {
      //     id: 1,
      //     imgSrc: "/Photo/2024-01-24 01.36.21.jpg"
      // },
      // {
      //     id: 1,
      //     imgSrc: "/Photo/6U6A7231.png"
      // },
      // {
      //     id: 1,
      //     imgSrc: "/Photo/6U6A7233.png"
      // },

      // {
      //     id: 1,
      //     imgSrc: "/Photo/2024-01-24 01.36.30.jpg"
      // },
      // {
      //     id: 1,
      //     imgSrc: "/Photo/6U6A7234.png"
      // },
  ]

  const [modelPhoto, setModelPhoto] = useState(false)
  const [tempSrc, setTempSrc] = useState('');

  const getImg = (imgSrc:any) => {
    setTempSrc(imgSrc)
    setModelPhoto(true);
  }
    
  return (
    <div>
        <Nav setModal={setModal}/>
        <Modal active={modal} setActive={setModal} >
            <iframe height="100%" width="500px"  id="ms_booking_iframe" src="https://n1025717.yclients.com/"></iframe>
        </Modal>

        <div className={modelPhoto? `${styles.modelPhoto} ${styles.open}` : `${styles.modelPhoto}`} onClick={() => setModelPhoto(false)}>
            <div className={styles.PhotoClose} onClick={() => setModelPhoto(false)}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="icon/close">
                <path id="icon" fillRule="evenodd" clipRule="evenodd" d="M22.7595 20L35.1774 32.4178L32.4178 35.1774L20 22.7595L7.58216 35.1774L4.82263 32.4178L17.2405 20L4.82263 7.58215L7.58216 4.82263L20 17.2405L32.4178 4.82263L35.1774 7.58215L22.7595 20Z" fill="#312C2C"/>
                </g>
                </svg>
            </div>
            <Image width={2000} height={2000} src={tempSrc} onClick={(e) => e.stopPropagation()} alt={""}>
            </Image>
        </div>

        <div className={styles.gallery}>
                {Photo.map((card, index) => (
                  <div className={styles.pics} key={index} onClick={() => getImg(card.imgSrc)}>
                        <Image width={2000} height={2000} src={card.imgSrc} alt={""}/>
                  </div>
                ))}
        </div>
    </div>
  )
}
