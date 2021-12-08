import Link from 'next/link';
import Image from 'next/image';
import styles from  '@/styles/Header.module.css'
const Header = () => {
    return (
        <header className={styles.header}>
          <div className={styles.logo}>
              <Image
              src='/logo.png'
              layout="responsive"
              alt="Logo"
              width="242"
              height="56"
              />
          </div>
          <nav className={styles.mainNav}>
              <ul>
                  <li><Link href="/"><a>Mens</a></Link></li>
                  <li><Link href="/"><a>Womens</a></Link></li>
                  <li><Link href="/"><a>All Outfits</a></Link></li>
                  <li><Link href="/"><a>Movies</a></Link></li>
                  <li><Link href="/"><a>Tv Series</a></Link></li>
                  <li><Link href="/"><a>Games</a></Link></li>
                  <li><Link href="/"><a>Celebrities</a></Link></li>
                  <li><Link href="/"><a>Size</a></Link></li>
              </ul>
          </nav>
          <div className={styles.cartHeader}>cart</div>
        </header>
    )
}

export default Header
