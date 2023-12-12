import React from 'react';
import QZoon1 from '../../../assets/qZone1.png'
import QZoon2 from '../../../assets/qZone2.png'
import QZoon3 from '../../../assets/qZone3.png'

const primary = "#f3f3f3";

const QZone = () => {
    return (
        <div className='rounded' style={{backgroundColor: primary}}>
            <h4 className='p-2'>Z-Zone</h4>
            <div>
                <img src={QZoon1} alt="" />
                <img src={QZoon2} alt="" />
                <img src={QZoon3} alt="" />
            </div>
        </div>
    );
};

export default QZone;