import db from '../../db/index.js';

export const addPathLink = async (payload) => {
    const result = await db('path_links').insert(payload).returning('*')

    return result[0]
}   