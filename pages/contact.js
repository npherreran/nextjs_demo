import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout';

const ContactPage = () => {
  return (
    <>
      <h1>Contact page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
      </h1>
    </>

  )
}

ContactPage.getLayout = (page) => {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default ContactPage;
