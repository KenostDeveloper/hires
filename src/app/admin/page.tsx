
'use client'
import styles from "./admin.module.css";
import {signIn} from "next-auth/react";


  

export default function Admin() {

  return (
    <div className={styles.main}>
        <div onClick={() => signIn("yandex")}>Войти через Yandex</div>
        <div onClick={() => signIn("twitch")}>Войти через Twitch</div>

    </div>
  )
}
