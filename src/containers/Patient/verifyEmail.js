import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../HomePage/HomeHeader';
import './verifyEmail.scss';
import { postVerifyBookingappointment } from '../../services/userService';
import { LANGUAGES } from '../../utils';
import { FormattedMessage } from 'react-intl'


class verifyEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            satatusVerify: false,
            errCode: 0
        }
    }
    async componentDidMount() {
        if (this.props.location && this.props.location.search) {
            let urlParams = new URLSearchParams(this.props.location.search);
            let token = urlParams.get('token');
            let doctorId = urlParams.get('doctorId');
            let res = await postVerifyBookingappointment({
                token: token,
                doctorId: doctorId
            })
            if (res && res.errCode === 0) {
                this.setState({
                    satatusVerify: true,
                    errCode: res.errCode
                })
            } else {
                this.setState({
                    satatusVerify: true,
                    errCode: res && res.errCode ? res.errCode : -1
                })
            }
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }


    render() {
        let { satatusVerify, errCode } = this.state
        return (
            <>
                <HomeHeader />
                <div className='verify-email-container'>
                    {satatusVerify === false ?
                        <div>
                            Loading data...
                        </div>
                        :
                        <div>
                            {+errCode === 0 ?

                                <div className='info-booking'>Xác nhận lịch hẹn thành công</div> :
                                <div className='info-booking'>Lịch hẹn không tồn tại hoặc đã được xác nhận!</div>
                            }
                        </div>
                    }
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(verifyEmail);
