export const createProject = (project) => {
    // return {
    //     type: 'ADD_PROJECT',
    //     project: project
    // }

    return (dispatch, getState) => {
        // make async call to database
        dispatch({
            type: 'CREATE_PROJECT',
            project
        })
    }
}