import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';


const HomePage = ({ history }) => (
    <div className='homepage'>
        <h1> ggg</h1>
        {/* function component..dont need lifecyclie for now */}
        <Directory history={history} />


    </div>



);
export default HomePage;