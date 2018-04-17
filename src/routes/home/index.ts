import { getStreams } from 'actions/streams';

const action = async (): Promise<void> => {
    await getStreams();
};

export default action;