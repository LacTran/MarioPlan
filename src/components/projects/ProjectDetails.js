import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
    // console.log(props)
    const id = props.match.params.id;
    const { project } = props
    if (project) {
        return (
            <div>
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title"> {project.title}- {id}</span>
                            <p>{project.content}</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>{project.authorFirstName} {project.authorLastName}</div>
                            <div>31st May 2019.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    // get single project from the collection, using params
    console.log(state)
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null //project[id] = project object with the id
    return {
        project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(
        [
            { collection: 'projects' }
        ]
    )
)(ProjectDetails);