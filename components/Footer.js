import styles from  '@/styles/Footer.module.css'
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.grid} ${styles.footer_container}`}>
                <div className={styles.widget}>
                    
                </div>
                <div className={styles.widget}>
                <h5 className={styles.widget_title}>INFORMATION</h5>
                <ul>
                    <li><a>About Us</a></li>
                    <li><a>Privacy Policy</a></li>
                    <li><a>Shipping &amp; Delivery</a></li>
                    <li><a>Shipping &amp; Delivery</a></li>
                </ul>
                </div>
                <div className={styles.widget}>
                <h5 className={styles.widget_title}>CUSTOMER SERVICE</h5>
                <ul>
                    <li><a>Our Store</a></li>
                    <li><a>How to Choose?</a></li>
                    <li><a>How to Checkout</a></li>
                    <li><a>Payment Method</a></li>
                    <li><a>Contact Us</a></li>
                    <li><a>Blog</a></li>
                </ul>
                </div>
                <div className={styles.widget}>
                <h5 className={styles.widget_title}>Contact Us</h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer
