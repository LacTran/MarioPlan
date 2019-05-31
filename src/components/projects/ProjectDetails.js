import React from 'react';

const ProjectDetails = (props) => {
    // console.log(props)
    const id = props.match.params.id;
    return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project Title - {id}</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eligendi quae nobis quod animi similique odit. Culpa assumenda totam consequuntur.</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by Tinh Lun</div>
                        <div>31st May 2019.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;