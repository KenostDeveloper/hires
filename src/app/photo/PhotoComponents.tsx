'use client'
import { useState } from "react";
import styles from "./photo.module.css";
import Modal from "../components/Modal/Modal";
import Nav from "../components/Nav/Nav";

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
            <img src={tempSrc}  onClick={(e) => e.stopPropagation()}/>
        </div>

        <div className={styles.gallery}>
                {Photo.map((card, index) => (
                  <div className={styles.pics} key={index} onClick={() => getImg(card.imgSrc)}>
                        <img src={card.imgSrc} style={{width: "100%"}}/>
                  </div>
                ))}
        </div>
    </div>
  )
}
