import db from '../../db/index.js';

export const addStationLink = async (payload) => {
    const result = await db('station_path_links').insert(payload).returning('*')

    return result[0]
}   