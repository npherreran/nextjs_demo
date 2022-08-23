import Link from 'next/link';
import { useRouter } from 'next/router';

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink = ({ link, name }) => {

    const { asPath } = useRouter();

    return (
        <Link href={link}>
            <a style={asPath === link ? style : null}>{name}</a>
        </Link>
    )
}
