import React, { Component } from 'react';

import { connect } from 'react-redux';
import './Handbook.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from 'react-intl';
class Handbook extends Component {


    render() {
        let settings = this.props.settings
        return (
            <div className='section-handbook'>

                <div className='handbook-container'>
                    <div className='handbook-header'>
                        <span className='title-header'>Cẩm nang</span>
                        <button className='btn-header'>TÌM KIẾM</button>
                    </div>
                    <div className='handbook-body'>
                        <Slider {...settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div>1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div>2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div>3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div>4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div>5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' />
                                <div>6</div>
                            </div>
                        </Slider>
                    </div>

                </div>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
