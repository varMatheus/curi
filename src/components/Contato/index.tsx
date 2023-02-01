import styles from './Contato.module.scss';
import { AiOutlineArrowRight } from "react-icons/ai";
import React from 'react';
export default function Contato() {
  return (
    <div className={styles.container}>
      <span>De uma olhada nos meus perfis<AiOutlineArrowRight /></span>
    </div>
  )
}