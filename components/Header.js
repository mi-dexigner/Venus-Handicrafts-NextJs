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
          <div className={styles.cartHeader}>
              <div className={styles.cartInner}>
              <svg xmlns="http://www.w3.org/2000/svg" className={styles.cartIcon}  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
<span>2 Items</span>  |  <span>$330</span>
              </div>
            <div className={styles.searchIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
            </div>
          </div>
        </header>
    )
}

export default Header
