import React from 'react';

/**
 * 脚手架
 */
class Nav extends React.Component {
    render () {
        return (
            <div className="wrap">
                <div className="layout-header">
                    <div className="ant-layout-wrapper">
                        <div className="ant-layout-logo"></div>
                        <p>asdadadasda</p>
                    </div>
                </div>

                {this.props.children}

                <div className="footer">
                    footer
                </div>
            </div>

        )
    }
}

export default Nav;