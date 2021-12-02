import Header  from '@/components/Header'
import Footer  from '@/components/Footer'
import TopBar from '@/components/TopBar'

const Layout = ({children}) => {
    return (
        <div className="site-wrapper">
            <TopBar  />
            <Header  />
            {children}
            <Footer  />
        </div>
    )
}

export default Layout
