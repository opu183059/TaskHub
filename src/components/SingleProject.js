import React from 'react';
import { useQuery } from 'react-query';

const SingleProject = ({ params }) => {

    console.log(params);

    const { isLoading, error, data } = useQuery('projects', () =>
        fetch('api/projects').then(res =>
            res.json()
        )
    );

    if (isLoading) return 'Loading...';

    if (error) return 'An error occurred: ' + error.message;

    return (
        <div>
            Single Projects
        </div>
    );
};

export default SingleProject;