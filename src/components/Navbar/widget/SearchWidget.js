import { useState } from "react";

export const SearchWidget = () => {
    const [isActive, setisActive] = useState(false);
    const [option, setOption] = useState(0);


    const handleChange = (e) => {
        setOption(e.target.value);
    }

    return (
        <div className="navbar-item"  >
            <div id="global-search" className="control">
                <input id="tipue_drop_input" className="input is-rounded" type="text" placeholder="Search" required />
            </div>
        </div>

    )
}