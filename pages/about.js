import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';

const AboutPage = () => {
  return (
    <>
      <h1>About page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
      </h1>
    </>

  )
}

AboutPage.getLayout = (page) => {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}

export default AboutPage;
