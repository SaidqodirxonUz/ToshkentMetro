import db from '../../db/index.js';

export const addStation = async (payload) => {
    const result = await db('stations').insert(payload).returning('*')

    return result[0]
}