import { useState, useEffect } from "react";
import { useCarContext } from "./useCarContext";

export const useCarDetail = () => {
    const [ id, setId] = useState()
    const { state, dispatch } = useCarContext()

    useEffect(() => {
        if(id) {
            dispatch({
                type: 'DETAILS_CAR',
                id
            })
        }

    }, [id])

    return {
        setId,
        car: state.car
    }
}