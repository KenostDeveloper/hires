'use client'
import React, {useEffect, useState} from 'react';
import styles from './Nav.module.css'
import Link from "next/link";
import { Oswald } from "next/font/google";


const oswald = Oswald({ subsets: ["latin"] });

const Nav = ({setModal}:any) => {


    const [isScroll, setIsScroll] = useState<boolean>(false);
    const [isMenu, setIsMenu] = useState<boolean>(false);

    const handleScroll = () => {
        if(window.scrollY > 20){
            setIsScroll(true);
        }else{
            setIsScroll(false)
        }
    };

    useEffect(() => {
        window.history.scrollRestoration = 'manual'
    }, []);


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const scrolltoHash = function (element_id: string) {
        const element = document.getElementById(element_id)
        element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    return (
        <nav className={isScroll? `${styles.nav} ${oswald.className} ${styles.fixed}` : `${styles.nav} ${oswald.className}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <img src="/logo.svg" className={styles.logoImg}/><img src="/logo-text.svg" className={styles.logoText}/>
                </Link>

                <div onClick={() => setIsMenu(true)} className={styles.mobile}>
                    <img src="/menu.svg" alt="" />
                </div>

                <div className={styles.navNavigation}>
                    <div onClick={() => scrolltoHash('about')} className={styles.link}>О нас</div>
                    <div onClick={() => scrolltoHash('services')} className={styles.link}>Аренда студии</div>
                    <div onClick={() => scrolltoHash('podcast')} className={styles.link}>Подкасты под ключ</div>
                    <div onClick={() => scrolltoHash('price')} className={styles.link}>Прайс</div>
                    <div onClick={() => scrolltoHash('contacts')} className={styles.link}>Контакты</div>

                    <div onClick={() => setModal(true)} className={isScroll? `${styles.nav__bron} ${styles.active}` : `${styles.nav__bron}`}>забронировать</div>
                </div>

                <div className={styles.navLinks}>
                    <Link href="tel:+79996667575" className={styles.link}>+7 (999) 666-75-75</Link>
                    <Link target='_blank' href="https://vk.com/hires.studio" className={styles.vk}>
                        <svg viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M23.8728 12.5092C23.8437 12.4466 23.8166 12.3946 23.7915 12.353C23.3751 11.6031 22.5793 10.6826 21.4047 9.59123L21.3799 9.56624L21.3675 9.55399L21.3549 9.54143H21.3423C20.8093 9.03325 20.4717 8.69156 20.3303 8.51662C20.0716 8.18338 20.0137 7.84607 20.1551 7.50429C20.2549 7.24606 20.6301 6.70073 21.2797 5.86753C21.6214 5.42597 21.892 5.07207 22.0918 4.80544C23.5331 2.88932 24.158 1.66489 23.9663 1.13168L23.8919 1.00708C23.8418 0.932059 23.7127 0.863432 23.5047 0.800845C23.2962 0.738389 23.0297 0.728061 22.7047 0.769683L19.106 0.794542C19.0477 0.773884 18.9645 0.77581 18.856 0.800845C18.7477 0.82588 18.6935 0.838441 18.6935 0.838441L18.6309 0.869734L18.5812 0.90733C18.5395 0.93219 18.4937 0.975913 18.4436 1.03841C18.3939 1.10069 18.3523 1.17378 18.319 1.25707C17.9272 2.26507 17.4817 3.20225 16.9818 4.06858C16.6735 4.58516 16.3904 5.03285 16.1319 5.41192C15.8737 5.79085 15.6571 6.07004 15.4823 6.24901C15.3073 6.42815 15.1493 6.57166 15.0074 6.68007C14.8657 6.78852 14.7575 6.83435 14.6827 6.81758C14.6076 6.80082 14.5369 6.78419 14.47 6.76756C14.3534 6.69254 14.2597 6.59052 14.189 6.46141C14.118 6.3323 14.0702 6.16979 14.0452 5.97402C14.0204 5.77812 14.0057 5.60962 14.0015 5.46794C13.9976 5.32644 13.9994 5.1263 14.0078 4.86807C14.0165 4.60971 14.0204 4.43491 14.0204 4.34326C14.0204 4.02665 14.0265 3.68303 14.0389 3.31233C14.0515 2.94162 14.0617 2.6479 14.0703 2.43152C14.0788 2.21491 14.0827 1.98575 14.0827 1.74416C14.0827 1.50256 14.068 1.31309 14.0389 1.17558C14.0102 1.03824 13.9661 0.904923 13.9081 0.775679C13.8496 0.646566 13.7641 0.54669 13.6519 0.475787C13.5395 0.404972 13.3997 0.348775 13.2333 0.307022C12.7917 0.207102 12.2295 0.153049 11.5462 0.144646C9.99683 0.128015 9.00126 0.228066 8.55974 0.444669C8.3848 0.536186 8.22649 0.661228 8.08495 0.819402C7.93496 1.00274 7.91404 1.10279 8.02232 1.11925C8.52223 1.19414 8.87613 1.37327 9.08442 1.65649L9.15948 1.80657C9.21786 1.91485 9.27616 2.10655 9.3345 2.3814C9.39275 2.65626 9.43035 2.96031 9.44689 3.29338C9.48847 3.90161 9.48847 4.42226 9.44689 4.85538C9.40518 5.28867 9.36579 5.62598 9.3282 5.86758C9.2906 6.10917 9.23441 6.30494 9.15948 6.45484C9.08442 6.60479 9.03448 6.69644 9.00944 6.7297C8.98445 6.76296 8.96362 6.78393 8.94707 6.79216C8.83879 6.83365 8.72618 6.85479 8.60963 6.85479C8.4929 6.85479 8.35136 6.7964 8.18478 6.67972C8.01825 6.56304 7.84541 6.40276 7.66628 6.19863C7.48714 5.99446 7.28511 5.70914 7.0601 5.34264C6.83527 4.97613 6.60199 4.54297 6.3604 4.04315L6.16052 3.68067C6.03556 3.44748 5.86487 3.10794 5.64827 2.66234C5.43153 2.21658 5.23996 1.78538 5.07343 1.36885C5.00686 1.19392 4.90685 1.06073 4.77358 0.969086L4.71104 0.931489C4.66946 0.898227 4.60272 0.862906 4.51116 0.825267C4.41946 0.787671 4.32379 0.76071 4.22374 0.744123L0.799886 0.768983C0.450013 0.768983 0.21262 0.848244 0.0876216 1.00655L0.0375959 1.08144C0.0126049 1.12315 0 1.18976 0 1.28145C0 1.3731 0.024991 1.48558 0.0750167 1.61876C0.574836 2.79347 1.11838 3.92638 1.70564 5.01767C2.29291 6.10895 2.80323 6.98801 3.23631 7.65406C3.66947 8.32059 4.11099 8.94965 4.56087 9.54094C5.01076 10.1325 5.30855 10.5115 5.45425 10.6781C5.60012 10.8449 5.7147 10.9696 5.79799 11.0529L6.11045 11.3528C6.31037 11.5527 6.60396 11.7922 6.99135 12.0712C7.37881 12.3504 7.80778 12.6253 8.27845 12.8963C8.7492 13.1668 9.29686 13.3875 9.92172 13.5583C10.5465 13.7292 11.1546 13.7978 11.7461 13.7647H13.1832C13.4746 13.7395 13.6954 13.6479 13.8455 13.4897L13.8952 13.4271C13.9286 13.3773 13.9599 13.3001 13.9888 13.1961C14.0181 13.092 14.0326 12.9773 14.0326 12.8525C14.024 12.4944 14.0513 12.1716 14.1136 11.8842C14.1759 11.5969 14.2469 11.3803 14.3263 11.2345C14.4057 11.0887 14.4952 10.9657 14.5949 10.866C14.6947 10.7661 14.7659 10.7056 14.8077 10.6848C14.8491 10.6638 14.8823 10.6496 14.9073 10.641C15.1072 10.5744 15.3425 10.6389 15.6135 10.8349C15.8843 11.0306 16.1383 11.2724 16.3758 11.5597C16.6133 11.8472 16.8985 12.1698 17.2317 12.528C17.5651 12.8862 17.8566 13.1526 18.1064 13.3278L18.3562 13.4777C18.523 13.5778 18.7396 13.6694 19.0063 13.7527C19.2724 13.8359 19.5056 13.8568 19.7058 13.8151L22.9046 13.7653C23.221 13.7653 23.4672 13.7129 23.6419 13.6089C23.8168 13.5048 23.9208 13.3901 23.9543 13.2653C23.9877 13.1404 23.9895 12.9987 23.9607 12.8402C23.931 12.6822 23.9018 12.5717 23.8728 12.5092Z"
                                />
                        </svg>
                    </Link>
                    <Link target='_blank' href="https://t.me/hiresst" className={styles.tg}>
                        <svg viewBox="0 0 28 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25.6129 0.872658C25.6129 0.872658 28.2031 -0.137342 27.9872 2.31552C27.9153 3.32553 27.2677 6.86053 26.7641 10.6841L25.0373 22.0106C25.0373 22.0106 24.8934 23.6699 23.5983 23.9585C22.3031 24.247 20.3605 22.9485 20.0007 22.6599C19.7129 22.4435 14.6045 19.197 12.8057 17.6099C12.3021 17.177 11.7265 16.3113 12.8777 15.3013L20.4325 8.087C21.2959 7.22126 22.1593 5.20126 18.5617 7.65413L8.48873 14.5077C8.48873 14.5077 7.33753 15.2291 5.17907 14.5799L0.502281 13.137C0.502281 13.137 -1.22453 12.0549 1.72543 10.9727C8.92047 7.58193 17.7703 4.11906 25.6129 0.872658Z"
                                />
                        </svg>
                    </Link>
                    <Link target='_blank' href="https://api.whatsapp.com/send?phone=79939731212" className={styles.wts}>
                        <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                            <g id="Watshapp">
                            <path id="Vector" d="M44.7 37.1446C44.0455 36.8373 40.9107 35.3012 40.3251 35.0622C39.7395 34.8232 39.3261 34.755 38.8783 35.4036C38.4305 36.0522 37.2248 37.4518 36.8459 37.8956C36.4669 38.3394 36.1224 38.3735 35.4679 37.8956C33.588 37.148 31.8518 36.0856 30.3352 34.755C28.9623 33.474 27.8 31.9882 26.8904 30.3513C26.5115 29.7368 26.8904 29.3954 27.166 29.0541C27.4415 28.7127 27.786 28.3372 28.1305 27.9617C28.3824 27.6369 28.5908 27.2812 28.7506 26.9034C28.836 26.7277 28.8804 26.5352 28.8804 26.3402C28.8804 26.1451 28.836 25.9526 28.7506 25.7769C28.7506 25.4697 27.3038 22.3632 26.7526 21.1001C26.2014 19.837 25.7191 20.0077 25.3402 20.0077H23.9623C23.3059 20.0331 22.6865 20.3155 22.2399 20.7929C21.5191 21.4745 20.9482 22.2963 20.5629 23.2068C20.1775 24.1173 19.9862 25.0969 20.0008 26.0841C20.177 28.5078 21.0763 30.8249 22.5844 32.7409C25.3518 36.8149 29.138 40.1082 33.5733 42.2993C35.089 42.9479 36.2602 43.3234 37.1903 43.6306C38.4964 44.0218 39.8769 44.1037 41.2208 43.8696C42.1133 43.6901 42.9591 43.3309 43.7057 42.8142C44.4524 42.2974 45.0839 41.6341 45.5612 40.8655C45.9584 39.9163 46.0893 38.8783 45.9401 37.8614C45.7679 37.6225 45.3545 37.4518 44.7 37.1446Z"/>
                            <path id="Vector_2" d="M50.3267 13.5581C47.9129 11.138 45.0356 9.22249 41.8645 7.92455C38.6934 6.62662 35.2927 5.97253 31.863 6.00088C27.3197 6.0245 22.8621 7.23164 18.9355 9.50175C15.0089 11.7719 11.7507 15.0255 9.48623 18.9376C7.22182 22.8498 6.03047 27.2836 6.03118 31.7961C6.03189 36.3087 7.22464 40.7421 9.49029 44.6536L6 58L19.7517 54.5334C23.5535 56.5881 27.8141 57.6609 32.1423 57.6533H31.863C37.0214 57.6867 42.0729 56.1934 46.3733 53.3639C50.6738 50.5344 54.0283 46.4969 56.0092 41.7662C57.99 37.0355 58.5074 31.8261 57.4953 26.8022C56.4832 21.7783 53.9876 17.1676 50.3267 13.5581ZM31.863 53.2161C27.9907 53.2191 24.1904 52.1767 20.8686 50.2001L20.1008 49.7495L11.9335 51.8641L14.0975 43.9602L13.6088 43.1629C10.8213 38.7043 9.77863 33.3845 10.6786 28.2129C11.5785 23.0413 14.3584 18.3777 18.4909 15.1069C22.6234 11.8362 27.821 10.1858 33.0974 10.4691C38.3738 10.7523 43.3621 12.9493 47.1156 16.6434C49.1279 18.6259 50.7228 20.9864 51.8074 23.5872C52.892 26.1881 53.4446 28.9773 53.433 31.7924C53.4238 37.4715 51.1483 42.9154 47.1051 46.9311C43.062 50.9468 37.5809 53.2069 31.863 53.2161Z"/>
                            </g>
                        </svg>
                    </Link>
                </div>
            </div>

            <div className={!isMenu? `${styles.MobileMenu}` : `${styles.MobileMenu} ${styles.active}`}>
                <img onClick={() => setIsMenu(false)} className={styles.mobileClose} src="/close.svg" alt="" />

                <div className={styles.MobileMenuEls}>
                    <div onClick={() => {scrolltoHash('about'); setIsMenu(false)}} className={styles.link}>О нас</div>
                    <div onClick={() => {scrolltoHash('services'); setIsMenu(false)}} className={styles.link}>Аренда студии</div>
                    <div onClick={() => {scrolltoHash('podcast'); setIsMenu(false)}} className={styles.link}>Подкасты под ключ</div>
                    <div onClick={() => {scrolltoHash('price'); setIsMenu(false)}} className={styles.link}>Прайс</div>
                    <div onClick={() => {scrolltoHash('contacts'); setIsMenu(false)}} className={styles.link}>Контакты</div>
                    <Link href="tel:+79996667575" className={styles.link}>+7 (999) 666-75-75</Link>

                    <div className={styles.mobileSocial}>
                        <Link target='_blank' href="https://vk.com/hires.studio" className={styles.vk}>
                            <svg viewBox="0 0 24 14" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.8728 12.5092C23.8437 12.4466 23.8166 12.3946 23.7915 12.353C23.3751 11.6031 22.5793 10.6826 21.4047 9.59123L21.3799 9.56624L21.3675 9.55399L21.3549 9.54143H21.3423C20.8093 9.03325 20.4717 8.69156 20.3303 8.51662C20.0716 8.18338 20.0137 7.84607 20.1551 7.50429C20.2549 7.24606 20.6301 6.70073 21.2797 5.86753C21.6214 5.42597 21.892 5.07207 22.0918 4.80544C23.5331 2.88932 24.158 1.66489 23.9663 1.13168L23.8919 1.00708C23.8418 0.932059 23.7127 0.863432 23.5047 0.800845C23.2962 0.738389 23.0297 0.728061 22.7047 0.769683L19.106 0.794542C19.0477 0.773884 18.9645 0.77581 18.856 0.800845C18.7477 0.82588 18.6935 0.838441 18.6935 0.838441L18.6309 0.869734L18.5812 0.90733C18.5395 0.93219 18.4937 0.975913 18.4436 1.03841C18.3939 1.10069 18.3523 1.17378 18.319 1.25707C17.9272 2.26507 17.4817 3.20225 16.9818 4.06858C16.6735 4.58516 16.3904 5.03285 16.1319 5.41192C15.8737 5.79085 15.6571 6.07004 15.4823 6.24901C15.3073 6.42815 15.1493 6.57166 15.0074 6.68007C14.8657 6.78852 14.7575 6.83435 14.6827 6.81758C14.6076 6.80082 14.5369 6.78419 14.47 6.76756C14.3534 6.69254 14.2597 6.59052 14.189 6.46141C14.118 6.3323 14.0702 6.16979 14.0452 5.97402C14.0204 5.77812 14.0057 5.60962 14.0015 5.46794C13.9976 5.32644 13.9994 5.1263 14.0078 4.86807C14.0165 4.60971 14.0204 4.43491 14.0204 4.34326C14.0204 4.02665 14.0265 3.68303 14.0389 3.31233C14.0515 2.94162 14.0617 2.6479 14.0703 2.43152C14.0788 2.21491 14.0827 1.98575 14.0827 1.74416C14.0827 1.50256 14.068 1.31309 14.0389 1.17558C14.0102 1.03824 13.9661 0.904923 13.9081 0.775679C13.8496 0.646566 13.7641 0.54669 13.6519 0.475787C13.5395 0.404972 13.3997 0.348775 13.2333 0.307022C12.7917 0.207102 12.2295 0.153049 11.5462 0.144646C9.99683 0.128015 9.00126 0.228066 8.55974 0.444669C8.3848 0.536186 8.22649 0.661228 8.08495 0.819402C7.93496 1.00274 7.91404 1.10279 8.02232 1.11925C8.52223 1.19414 8.87613 1.37327 9.08442 1.65649L9.15948 1.80657C9.21786 1.91485 9.27616 2.10655 9.3345 2.3814C9.39275 2.65626 9.43035 2.96031 9.44689 3.29338C9.48847 3.90161 9.48847 4.42226 9.44689 4.85538C9.40518 5.28867 9.36579 5.62598 9.3282 5.86758C9.2906 6.10917 9.23441 6.30494 9.15948 6.45484C9.08442 6.60479 9.03448 6.69644 9.00944 6.7297C8.98445 6.76296 8.96362 6.78393 8.94707 6.79216C8.83879 6.83365 8.72618 6.85479 8.60963 6.85479C8.4929 6.85479 8.35136 6.7964 8.18478 6.67972C8.01825 6.56304 7.84541 6.40276 7.66628 6.19863C7.48714 5.99446 7.28511 5.70914 7.0601 5.34264C6.83527 4.97613 6.60199 4.54297 6.3604 4.04315L6.16052 3.68067C6.03556 3.44748 5.86487 3.10794 5.64827 2.66234C5.43153 2.21658 5.23996 1.78538 5.07343 1.36885C5.00686 1.19392 4.90685 1.06073 4.77358 0.969086L4.71104 0.931489C4.66946 0.898227 4.60272 0.862906 4.51116 0.825267C4.41946 0.787671 4.32379 0.76071 4.22374 0.744123L0.799886 0.768983C0.450013 0.768983 0.21262 0.848244 0.0876216 1.00655L0.0375959 1.08144C0.0126049 1.12315 0 1.18976 0 1.28145C0 1.3731 0.024991 1.48558 0.0750167 1.61876C0.574836 2.79347 1.11838 3.92638 1.70564 5.01767C2.29291 6.10895 2.80323 6.98801 3.23631 7.65406C3.66947 8.32059 4.11099 8.94965 4.56087 9.54094C5.01076 10.1325 5.30855 10.5115 5.45425 10.6781C5.60012 10.8449 5.7147 10.9696 5.79799 11.0529L6.11045 11.3528C6.31037 11.5527 6.60396 11.7922 6.99135 12.0712C7.37881 12.3504 7.80778 12.6253 8.27845 12.8963C8.7492 13.1668 9.29686 13.3875 9.92172 13.5583C10.5465 13.7292 11.1546 13.7978 11.7461 13.7647H13.1832C13.4746 13.7395 13.6954 13.6479 13.8455 13.4897L13.8952 13.4271C13.9286 13.3773 13.9599 13.3001 13.9888 13.1961C14.0181 13.092 14.0326 12.9773 14.0326 12.8525C14.024 12.4944 14.0513 12.1716 14.1136 11.8842C14.1759 11.5969 14.2469 11.3803 14.3263 11.2345C14.4057 11.0887 14.4952 10.9657 14.5949 10.866C14.6947 10.7661 14.7659 10.7056 14.8077 10.6848C14.8491 10.6638 14.8823 10.6496 14.9073 10.641C15.1072 10.5744 15.3425 10.6389 15.6135 10.8349C15.8843 11.0306 16.1383 11.2724 16.3758 11.5597C16.6133 11.8472 16.8985 12.1698 17.2317 12.528C17.5651 12.8862 17.8566 13.1526 18.1064 13.3278L18.3562 13.4777C18.523 13.5778 18.7396 13.6694 19.0063 13.7527C19.2724 13.8359 19.5056 13.8568 19.7058 13.8151L22.9046 13.7653C23.221 13.7653 23.4672 13.7129 23.6419 13.6089C23.8168 13.5048 23.9208 13.3901 23.9543 13.2653C23.9877 13.1404 23.9895 12.9987 23.9607 12.8402C23.931 12.6822 23.9018 12.5717 23.8728 12.5092Z"
                                    />
                            </svg>
                        </Link>
                        <Link target='_blank' href="https://t.me/hiresst" className={styles.tg}>
                            <svg viewBox="0 0 28 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.6129 0.872658C25.6129 0.872658 28.2031 -0.137342 27.9872 2.31552C27.9153 3.32553 27.2677 6.86053 26.7641 10.6841L25.0373 22.0106C25.0373 22.0106 24.8934 23.6699 23.5983 23.9585C22.3031 24.247 20.3605 22.9485 20.0007 22.6599C19.7129 22.4435 14.6045 19.197 12.8057 17.6099C12.3021 17.177 11.7265 16.3113 12.8777 15.3013L20.4325 8.087C21.2959 7.22126 22.1593 5.20126 18.5617 7.65413L8.48873 14.5077C8.48873 14.5077 7.33753 15.2291 5.17907 14.5799L0.502281 13.137C0.502281 13.137 -1.22453 12.0549 1.72543 10.9727C8.92047 7.58193 17.7703 4.11906 25.6129 0.872658Z"
                                    />
                            </svg>
                        </Link>
                        <Link target='_blank' href="https://api.whatsapp.com/send?phone=79939731212" className={styles.wts}>
                            <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <g id="Watshapp">
                                <path id="Vector" d="M44.7 37.1446C44.0455 36.8373 40.9107 35.3012 40.3251 35.0622C39.7395 34.8232 39.3261 34.755 38.8783 35.4036C38.4305 36.0522 37.2248 37.4518 36.8459 37.8956C36.4669 38.3394 36.1224 38.3735 35.4679 37.8956C33.588 37.148 31.8518 36.0856 30.3352 34.755C28.9623 33.474 27.8 31.9882 26.8904 30.3513C26.5115 29.7368 26.8904 29.3954 27.166 29.0541C27.4415 28.7127 27.786 28.3372 28.1305 27.9617C28.3824 27.6369 28.5908 27.2812 28.7506 26.9034C28.836 26.7277 28.8804 26.5352 28.8804 26.3402C28.8804 26.1451 28.836 25.9526 28.7506 25.7769C28.7506 25.4697 27.3038 22.3632 26.7526 21.1001C26.2014 19.837 25.7191 20.0077 25.3402 20.0077H23.9623C23.3059 20.0331 22.6865 20.3155 22.2399 20.7929C21.5191 21.4745 20.9482 22.2963 20.5629 23.2068C20.1775 24.1173 19.9862 25.0969 20.0008 26.0841C20.177 28.5078 21.0763 30.8249 22.5844 32.7409C25.3518 36.8149 29.138 40.1082 33.5733 42.2993C35.089 42.9479 36.2602 43.3234 37.1903 43.6306C38.4964 44.0218 39.8769 44.1037 41.2208 43.8696C42.1133 43.6901 42.9591 43.3309 43.7057 42.8142C44.4524 42.2974 45.0839 41.6341 45.5612 40.8655C45.9584 39.9163 46.0893 38.8783 45.9401 37.8614C45.7679 37.6225 45.3545 37.4518 44.7 37.1446Z"/>
                                <path id="Vector_2" d="M50.3267 13.5581C47.9129 11.138 45.0356 9.22249 41.8645 7.92455C38.6934 6.62662 35.2927 5.97253 31.863 6.00088C27.3197 6.0245 22.8621 7.23164 18.9355 9.50175C15.0089 11.7719 11.7507 15.0255 9.48623 18.9376C7.22182 22.8498 6.03047 27.2836 6.03118 31.7961C6.03189 36.3087 7.22464 40.7421 9.49029 44.6536L6 58L19.7517 54.5334C23.5535 56.5881 27.8141 57.6609 32.1423 57.6533H31.863C37.0214 57.6867 42.0729 56.1934 46.3733 53.3639C50.6738 50.5344 54.0283 46.4969 56.0092 41.7662C57.99 37.0355 58.5074 31.8261 57.4953 26.8022C56.4832 21.7783 53.9876 17.1676 50.3267 13.5581ZM31.863 53.2161C27.9907 53.2191 24.1904 52.1767 20.8686 50.2001L20.1008 49.7495L11.9335 51.8641L14.0975 43.9602L13.6088 43.1629C10.8213 38.7043 9.77863 33.3845 10.6786 28.2129C11.5785 23.0413 14.3584 18.3777 18.4909 15.1069C22.6234 11.8362 27.821 10.1858 33.0974 10.4691C38.3738 10.7523 43.3621 12.9493 47.1156 16.6434C49.1279 18.6259 50.7228 20.9864 51.8074 23.5872C52.892 26.1881 53.4446 28.9773 53.433 31.7924C53.4238 37.4715 51.1483 42.9154 47.1051 46.9311C43.062 50.9468 37.5809 53.2069 31.863 53.2161Z"/>
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;