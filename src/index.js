import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import root from 'react-shadow';
import { Style, hashKeys } from 'react-style-tag';

import './index.css';
// import cssString from 'bundle-text:./index.css';

class TestStyles extends Component {
    
    render() {
        const testStyles = [
            {
                label: "Red background. White text. Heading Border.",
                styles: ".label { background: red; color: white; } h1 { border-bottom: 1px solid; }"
            },
            {
                label: "Bold text. Heading Serif.",
                styles: ".label { font-weight: bold; } h1 { font-family: serif; }"
            }
        ];

        return (
            <Fragment>
                {testStyles.map((test, index) => {
                    return (
                        <root.div className="test-element" key={index}>
                            <style type="text/css">{test.styles}</style>
                            <div className="label">
                                {test.label}
                            </div>
                        </root.div>
                    );
                })}
            </Fragment>
        );
    }

}

ReactDOM.render(<TestStyles/>, document.getElementById('app'));