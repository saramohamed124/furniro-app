import { Link } from "react-router-dom"

function ShowMore(){
    return(
        <div className="container">
 <Link to="/shop">       <button className=" show-more">Show More</button></Link>
        </div>
    )
}
export default ShowMore