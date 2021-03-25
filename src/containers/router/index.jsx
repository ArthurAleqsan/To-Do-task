import React from 'react';
import { withRouter } from "react-router-dom";
import Header from '../../components/common/Header';

const MainRouter = () => {

    return (
        <div className='main-container'>
            <Header />
        </div>
    );
};

export default withRouter(MainRouter);
