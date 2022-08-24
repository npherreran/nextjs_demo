import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout';

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

ContactPage.getLayout = (page: JSX.Element) => {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default ContactPage;
