import {recommendUrl} from "../helpers/apiRoutes";
import {getAll} from "../helpers/http";

export const allRecommend = async (data) => getAll(recommendUrl())