import {post} from "../helpers/http";
import {authUrl} from "../helpers/apiRoutes";

export const register = async (data) => post(authUrl('register'), data)