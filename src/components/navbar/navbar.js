/* -------------- IMPORT CSS -------------- */
import Style from "./navbar.module.css";


/* Function to display the header */
function Navbar() {
    return (
        <>
            <div className={Style.navbar}>
                <div className={Style.title}>
                    <h1>Chat App</h1>
                </div>
                <div className={Style.image}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxAyd3Dd-5QJbyrcS-VN-ucJlgyVND0R12bA&usqp=CAU" alt="Logo" />
                </div>
            </div>
        </>
    )
}


/* -------------- EXPORT MODULES -------------- */
export default Navbar;