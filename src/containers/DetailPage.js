import React from 'react'
import CarDetail from '../components/CarDetail'

export default function DetailPage({id}) {
    return (
        <div>
            <CarDetail carId={id}></CarDetail>
        </div>
    )
}
