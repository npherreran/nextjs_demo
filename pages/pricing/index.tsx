import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout';


const PricingPage = () => {
    return (
        <>
            <h1>Pricing page</h1>
            <h1 className={'title'}>
                Ir a <Link href="/">Home</Link>
            </h1>
        </>

    )
}

PricingPage.getLayout = (page: JSX.Element) => {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default PricingPage;
