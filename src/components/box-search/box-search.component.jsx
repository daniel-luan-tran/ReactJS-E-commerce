import { useContext, useState } from "react";
import { SearchContext } from "../contexts/search.context";
import "./box-search.styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export const BoxSearch = () => {
    const {searchString, setSearchString} = useContext(SearchContext);

    console.log(searchString);
    const onChangeHandler = (e) => {
        e.preventDefault();
        const keyword = e.target.value;
        setSearchString(keyword);
    }

    const onClickHandler = () => {
        setSearchString("");
    }

    return (
        <form className="box-search border rounded-pill" style={{minWidth: "260px"}}>
            <FontAwesomeIcon icon={solid('magnifying-glass')} style={{marginLeft: "10px", marginRight: "10px", cursor: "pointer"}} />
            <input type="text" className="border-0 input-style" onChange={onChangeHandler} value={searchString} placeholder="Enter keyword"></input>
            {searchString != "" && <FontAwesomeIcon icon={solid('x')} style={{marginLeft: "10px", marginRight: "10px", cursor: "pointer"}} onClick={onClickHandler} />}
        </form>
    )
}