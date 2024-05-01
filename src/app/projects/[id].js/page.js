// pages/projects/[id].js
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Button, List, Card, Divider } from 'antd';

const fetchProjectDetails = async (id) => {
    const { data } = await axios.get(`/api/projects/${id}`);
    return data;
};

const ProjectDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data, isLoading, error } = useQuery(['project', id], () => fetchProjectDetails(id));

    if (isLoading) return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div>
            <Card title={data.name}>
                <p>{data.description}</p>
                <Divider />
                <List
                    header={<div>Tasks</div>}
                    bordered
                    dataSource={data.tasks}
                    renderItem={item => (
                        <List.Item>
                            {item.name} - {item.status}
                        </List.Item>
                    )}
                />
            </Card>
        </div>
    );
};

export default ProjectDetails;
