import { FC, PropsWithChildren } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { Navbar } from '../Navbar';

import styles from "../../styles/MainLayout.module.css";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {

    const { asPath } = useRouter();

    const PathName = () => {
        if (asPath.length > 1) {
            const str = asPath.slice(1);
            return str.charAt(0).toUpperCase() + str.slice(1);
        } else {
            return 'Home';
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Portafolio Natalia Herrera</title>
                <meta name="description" content={`${PathName()} page - Natalia Herrera`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
