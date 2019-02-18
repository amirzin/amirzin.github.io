import { getStreams } from 'actions/streams.actions';

const action = async (): Promise<void> => {
    await getStreams();
};

export default action;