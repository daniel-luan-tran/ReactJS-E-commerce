import { useContext, useState } from "react";
import { SearchContext } from "../contexts/search.context";
import "./box-search-price.styles.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { TextField } from "@mui/material";

export const BoxSearchPrice = () => {
    const {searchPriceMin, setSearchPriceMin, searchPriceMax, setSearchPriceMax} = useContext(SearchContext);

    const onChangeHandlerMin = (e) => {
        e.preventDefault();
        const price = e.target.value;
        setSearchPriceMin(price);
    }
    const onChangeHandlerMax = (e) => {
        e.preventDefault();
        const price = e.target.value;
        setSearchPriceMax(price);
    }

    const onClickCloseMin = () => {
        setSearchPriceMin("");
    }
    const onClickCloseMax = () => {
        setSearchPriceMax("");
    }
    
    return (
        <>
        <form className="box-search-price-min border rounded-pill" style={{minWidth: "260px"}}>
            <FontAwesomeIcon icon={solid('dollar-sign')} style={{marginLeft: "10px", marginRight: "10px", cursor: "pointer"}} />
            <span>From: </span><input type="text" className="border-0 input-style-price" onChange={onChangeHandlerMin} value={searchPriceMin} placeholder="Enter price from"></input>
            {searchPriceMin != "" && <FontAwesomeIcon icon={regular('circle-xmark')} style={{marginLeft: "10px", marginRight: "10px", cursor: "pointer"}} onClick={onClickCloseMin} />}
        </form>
        <form className="box-search-price-max border rounded-pill" style={{minWidth: "260px"}}>
            <FontAwesomeIcon icon={solid('dollar-sign')} style={{marginLeft: "10px", marginRight: "10px", cursor: "pointer"}} />
            <span style={{marginRight: "21px"}}>To: </span><input type="text" className="border-0 input-style-price" onChange={onChangeHandlerMax} value={searchPriceMax} placeholder="Enter price to"></input>
            {searchPriceMax != "" && <FontAwesomeIcon icon={regular('circle-xmark')} style={{marginLeft: "10px", marginRight: "10px", cursor: "pointer"}} onClick={onClickCloseMax} />}
        </form>
        {/* <TextField
            id="standard-number"
            label="From price $"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            variant="filled"
            style={{width: "100%"}}
            onChange={onChangeHandlerMin}
            autoComplete="off"
            placeholder="Enter price $"
            className="mb-3"
        />
        <TextField
            id="standard-number"
            label="From price $"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            variant="filled"
            style={{width: "100%"}}
            onChange={onChangeHandlerMax}
            autoComplete="off"
            placeholder="Enter price $"
            className="mb-3"
        /> */}
        </>
    )
}