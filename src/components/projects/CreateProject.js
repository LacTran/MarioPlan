import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state);
        this.props.history.push('/')
    }

    handleOnChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="container">
                <form onSubmit={this.handleOnSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleOnChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleOnChange} ></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => {
            dispatch(createProject(project))
        }
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);