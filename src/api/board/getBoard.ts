import { request } from 'chayns-helper';
import { StatusResponse } from 'chayns-helper/dist/functions/httpRequest/ResponseType';
import { Board } from '../../redux-modules/types';

const getBoard = async (): Promise<Board> => {
    const { status, data } = await request.fetch(
        `board/${chayns.env.site.tapp.id}`,
        {},
        'getBoard',
        {}
    ) as StatusResponse<Board>;
    return data as Board;
};

export default getBoard;
