'use client';
import Image from "next/image";
import styles from "./page.module.css";
import {Provider, useDispatch, useSelector} from 'react-redux';
import store, {RootState, AppDispatch} from '../store';
import type {AppProps} from 'next/app';
import {useEffect} from "react";
import { fetchOrders } from '@/store/ordersSlice';
import { fetchProducts } from '@/store/productsSlice';

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const orders = useSelector((state: RootState) => state.orders.orders);
  const ordersStatus = useSelector((state: RootState) => state.orders.status);
  const ordersError = useSelector((state: RootState) => state.orders.error);

  const products = useSelector((state: RootState) => state.products.products);
  const productsStatus = useSelector((state: RootState) => state.products.status);
  const productsError = useSelector((state: RootState) => state.products.error);
  useEffect(() => {
    if (ordersStatus === 'idle') {
      dispatch(fetchOrders());
    }
    if (productsStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [ordersStatus, productsStatus, dispatch]);
  console.log(orders)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
