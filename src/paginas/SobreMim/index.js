import React from 'react'
import PostModelo from '../../componentes/PostModelo'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/sobre_mim_foto.png'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >

      <h3 className={styles.subtitulo}>
        Olá, eu sou Gabriel!
      </h3>
      <img
        src={fotoSobreMim}
        alt='Foto do Gabriel Assys sorrindo'
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Me chamo Gabriel, 21 anos, curso Engenharia de Software em Centro Universitário Campo Real.
        Tenho envolvimento em projetos acadêmicos de desenvolvimento WEB e programa de tutoria acadêmica, além de outros projetos do Centro Universitário.
        Meu objetivo é atuar em desenvolvimento Front-end e atualmente tenho um projeto de aplicação em fase inicial na área de saúde, também tenho feito estudos na área de Java Orientado a Objeto.
        Adoro novos desafios e aprendizados em qualquer área de desenvolvimento. Gosto de utilizar o Visual Studio Code no desenvolvimento, porém, também utilizo Intellij para desenvolvimento Java.
      </p>
    </PostModelo>
  )
}
