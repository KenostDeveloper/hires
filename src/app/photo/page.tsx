
import { useState } from "react";
import PhotoImage from "../components/Photo/Photo";
import Title from "../components/Title/Title";
import styles from "./photo.module.css";
import PhotoComponents from "./PhotoComponents";
import Footer from "../components/footer/Footer";



export const metadata = {
    title: "HiRes Studio — Фото",
    description: "Студия записи подкастов и интервью в Санкт-Петербурге Hires Studio. Мы предоставляем услуги аренды студии подкастов, аренда интерьерной студии и аренду студии с цветным фоном. Так же проводим съемки подкаста с оператором, съёмки видео-интервью, проводим прямые эфиры на стриминговые площадки.",
    icons: {
        icon: '/logo.svg'
    }
};
  

export default function Photo() {

  return (
    <div>
        <div className={styles.main}>
            <PhotoComponents />
        </div>
    </div>
    
  )
}
