import { CSSProperties, FC } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

interface ComponentProps {
    name: string,
    link: string,
}

export const ActiveLink: FC<ComponentProps> = ({ link, name }) => {

    const { asPath } = useRouter();

    return (
        <Link href={link}>
            <a style={asPath === link ? style : undefined}>{name}</a>
        </Link>
    )
}
