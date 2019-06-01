export const createProject = (project) => {
    // return {
    //     type: 'ADD_PROJECT',
    //     project: project
    // }

    // with thunk
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // use react-redux-firebase & redux-firestore
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Lac',
            authorLastName: 'Tran',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_PROJECT',
                project
            })
        }).catch(err => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                err
            })
        })

    }
}