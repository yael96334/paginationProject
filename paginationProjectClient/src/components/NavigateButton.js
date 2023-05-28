import { IoArrowForwardCircleSharp } from "react-icons/io5"
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getDataByPage } from '../api/ImagesApi'
import { IoArrowBackCircle } from "react-icons/io5"
import { useState } from "react";
export default function NavigateButton() {
    const dis = useDispatch()
    const allData = useSelector(state => state.i)
    const { disabledNext, disabledPrev, arrData, page } = allData;
    const handlleClick = (action) => {
        if (action === "prev") {
            dis(getDataByPage(arrData, page-1, action))
        }
        else
            dis(getDataByPage(arrData, page + 1, action))
    }
    return (
        <div>
            <div style={{ position: "absolute", top: "35%", left: "2%" }}>
                <IconButton disabled={disabledPrev ? true : false} onClick={() => handlleClick("prev")}>
                    <IoArrowBackCircle size={120} color={disabledPrev ? '#cccccc' : 'red'} className="color-Button" />
                </IconButton>
            </div>
            <div style={{ position: "absolute", top: "35%", right: "2%" }} >
                <IconButton disabled={disabledNext ? true : false} onClick={() => handlleClick("next")}>
                    <IoArrowForwardCircleSharp size={120} color={disabledNext ? '#cccccc' : 'red'} className="color-Button" />
                </IconButton>
            </div>
        </div>
    );
}
