import { Spin } from 'antd';
import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='min-h-96 flex justify-center items-center'>
            <Spin tip="Loading..." />
        </div>
    );
};

export default LoadingSpinner;