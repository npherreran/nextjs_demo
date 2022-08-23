import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout';

const HomePage = () => {
  return (
    <>
      <h1>Home page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/about">About</Link>
      </h1>
    </>

  )
}

HomePage.getLayout = (page) => {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default HomePage;
