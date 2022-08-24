import styles from '../styles/Navbar.module.css'
import { ActiveLink } from './ActiveLink';

const menuItems = [
    {
        link: '/',
        name: 'Home'
    },
    {
        link: '/about',
        name: 'About'
    },
    {
        link: '/contact',
        name: 'Contact'
    },
    {
        link: '/pricing',
        name: 'Pricing'
    },
];

export const Navbar = () => {
    return (
        <nav className={styles['menu-container']}>
            {
                menuItems.map((item, index) => (<ActiveLink key={index} link={item.link} name={item.name} />))
            }
        </nav>
    )
}
