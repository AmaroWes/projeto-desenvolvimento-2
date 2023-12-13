import { Outlet, Link } from "react-router-dom";
import './AbaForm.css'


const AbaForm = (props) => {
    const handler = [props.handler];
    return(
        <div className="aba-form" style={{backgroundColor: props.color.lightgreen}}>
            <Outlet />
        </div>
    )
}

export {AbaForm}