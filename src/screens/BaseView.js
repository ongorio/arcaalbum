import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function BaseView (props) {
    return (
        <>
            <Navbar/>
            <div className={'m-container'}>
                {props.children}
            </div>
            <Footer/>
        </>
    )
}

export default BaseView