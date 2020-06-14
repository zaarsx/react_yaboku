import React from 'react';
import { connect } from 'react-redux';

import Carousel from 'react-bootstrap/Carousel';
import {slidesFetchData} from "../actions/slides";


class YCarousel extends React.Component {


    componentDidMount() {
        this.props.fetchData(`http://127.0.0.1:8000/api/v1/slide/`)
    }


    render() {
        return (
            <Carousel>
                {
                    this.props.slides.map((slide, index) => {
                        return (<Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={slide.image}
                                alt={slide.title}
                            />
                            <Carousel.Caption>
                                <h3>{slide.title}</h3>
                                <p>{slide.text}</p>
                            </Carousel.Caption>
                        </Carousel.Item>)
                    })
                }
            </Carousel>
        );
    }
}


const mapStateToProps = state => {
    return {
        slides: state.slides
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData:  url => dispatch(slidesFetchData(url))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(YCarousel);