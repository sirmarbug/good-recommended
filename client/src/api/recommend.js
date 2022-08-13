import {recommendUrl} from "../helpers/apiRoutes";
import {getAll, post, update, remove} from "../helpers/http";

export const allRecommend = async () => getAll(recommendUrl())
export const getById = async id => getAll(recommendUrl(id))
export const create = async (data) => post(recommendUrl(), data)
export const updateRecommend = async (id, data) => update(recommendUrl(id), data)
export const removeRecommend = async id => remove(recommendUrl(id))