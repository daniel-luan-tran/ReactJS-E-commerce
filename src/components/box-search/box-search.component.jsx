import { useContext, useState } from "react";
import { SearchContext } from "../contexts/search.context";
import "./box-search.styles.scss"

export const BoxSearch = () => {
    const {searchString, setSearchString} = useContext(SearchContext);

    console.log(searchString);
    const onChangeHandler = (e) => {
        e.preventDefault();
        const keyword = e.target.value;
        setSearchString(keyword);
    }

    return (
        <input className="box-search" type="text" onChange={onChangeHandler} value={searchString} placeholder="Enter keyword"></input>
    )
}