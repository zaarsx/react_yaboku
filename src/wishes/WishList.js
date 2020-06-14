import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {CardColumns} from "react-bootstrap";

import WishItem from './WishItem';

import { wishesFetchData } from "../actions/wishes";


class WishList extends React.Component {

    componentDidMount() {
        this.props.fetchData(`http://127.0.0.1:8000/api/v1/wish/`)
    }

    render() {
        return (
            <CardColumns>
                {
                    (this.props.wishes.length) ? (
                        this.props.wishes.map((wish, index) => (
                            <WishItem wish={wish} key={index} />
                        )
                        )
                    ) : (<div />)
                }
            </CardColumns>
        )
    }
}

const mapStateToProps = state => {
    return {
        wishes: state.wishes
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData:  url => dispatch(wishesFetchData(url))
    };
}

WishList.propTypes = {
    wishes: PropTypes.arrayOf(PropTypes.object).isRequired,
    page: PropTypes.arrayOf(PropTypes.number),
}

export default connect(mapStateToProps, mapDispatchToProps)(WishList);