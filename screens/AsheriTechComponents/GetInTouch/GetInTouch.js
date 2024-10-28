import React from 'react'
import TabsComponent from '../../../components/Tabs/Tabs'

export const GetInTouch = (props) => {
    return (
        <>
        <div className='d-flex justify-content-center'>
            <h1 style={{fontSize:"60px",color:'#d3b52b'}} className='WhoAreYou'>You are a...</h1>
        </div>
            <div>
                <TabsComponent />
            </div>
        </>
    )
}
