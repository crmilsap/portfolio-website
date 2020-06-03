import React, { Fragment } from 'react'
import {Javascript, C, CPP, CSS3, HTML5, SQL, Python} from '../../Assets/Proficiencies/Languages/';

function Languages() {

    return (
        <Fragment>
            <h2> Languages </h2>
            <div className = 'prof-languages'>
                <Javascript/>
                <Python/>
                <CPP/>
                <C/>
                <SQL/>
                <HTML5/>
                <CSS3/>
            </div>

        </Fragment>
    );
}

export default Languages;