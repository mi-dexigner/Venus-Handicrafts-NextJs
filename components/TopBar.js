import styles from  '../styles/TopBar.module.css'
const TopBar = () => {
    return (
        <div className={styles.topbar}>
      <div className={styles.grid}>
            <div className="col">
            <div className={styles.iconList}>
            <i className={styles.iconEnvelope}></i> Email Us: info@celebritiesjackets.com 
            </div>
            </div>
            <div className="col">
            <div className={styles.iconList}>
            <i></i> Free Shipping Worldwide
            </div>
            </div>
            <div className="col">
            <div className={styles.iconList}>
            <i></i> 100% Secure Transaction
            </div>
            </div>
            <div className="col">
            <div className={styles.iconList}>
            <i></i> Day Easy Returns
            </div>
            </div>
            <div className="col">
            <div className={styles.iconList}>
            <i></i> Excellent Customer Service
            </div>
            </div>
            <div className="col">
            <div className={styles.iconList}>
            <i></i> Excellent Customer Service
            </div>
            </div>
   
      </div>
    </div>
    )
}

export default TopBar
