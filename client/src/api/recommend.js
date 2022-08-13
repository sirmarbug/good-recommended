import {recommendUrl} from "../helpers/apiRoutes";
import {getAll, post, remove} from "../helpers/http";

export const allRecommend = async () => getAll(recommendUrl())
export const create = async (data) => post(recommendUrl(), data)
export const removeRecommend = async id => remove(recommendUrl(id))