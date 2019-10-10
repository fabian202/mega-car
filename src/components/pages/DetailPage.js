import React from 'react'
import CarDetail from '../shared/CarDetail'

export default function DetailPage({id}) {
    return (
        <div>
            <CarDetail carId={id}></CarDetail>
        </div>
    )
}
