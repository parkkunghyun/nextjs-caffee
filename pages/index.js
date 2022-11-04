import Head from 'next/head'
import Image from 'next/image'
import { BaseLayout } from '../components/BaseLayout'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <BaseLayout>
      <h1>Caffee Home</h1>
    </BaseLayout>
  )
}
