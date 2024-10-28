import React from 'react'
import chart from '../../../assets/chart.png';


export default function Chart() {
    const styles = {
        image: {
            position: 'absolute',
            height: '100%',
            width: '100%',
            objectFit: 'contain',
            zIndex: '-1',
        },
    }
  return (
    <>
    <img
            src={chart}
            alt=""
            style={styles.image}
        />
    </>
  )
}
