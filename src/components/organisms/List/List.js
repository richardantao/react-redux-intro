import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import { connect } from "react-redux";
import { fetchPosts, editPost } from "../../../actions/posts";
import PropTypes from "prop-types";

class Dashboard extends Component {
    state = {
        message: null
    };

    static propTypes = {
        error: PropTypes.object.isRequired,
        post: PropTypes.object.isRequired,
        fetchPosts: PropTypes.func.isRequired,
        editPost: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
    };

    componentDidUpdate(prevProps) {
        const { error } = this.props;

        if(error !== prevProps.error) {
            if(error.id === "POSTS_ERROR") {
                this.setState({ message: error.message });
            } else {
                this.setState({ message });
            };
        };  
    };

    render() {
        const { message } = this.state;
        const { 
            post: { posts } 
        } = this.props;

        return (
            <Container>
                <Row>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        );
    };
};  

const mapStateToProps = state => ({
    error: state.error,
    post: state.post
});

const mapDispatchToProps = { fetchPosts, editPost };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);