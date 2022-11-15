import Image from 'next/image';
import menuIcon from '../../public/vercel.svg';
import styles from './header.module.css';

export default function Header() {
  return (
    <header>
      <div className={styles.menu}>
        <ul>
          <li>
            <a href={'/'}>Hjem</a>
          </li>
          <li>
            <a href={'/about'}>Om LDX</a>
          </li>
          <li>
            <a href={'/privacy'}>Personvern</a>
          </li>
        </ul>
      </div>
      <div className={styles.mobileMenu}>
        <Image src={menuIcon} alt="Hei" />
      </div>
      <div>
        Blog | <a href="https://ldx.no">ldx.no</a>
      </div>
    </header>
  );
}
