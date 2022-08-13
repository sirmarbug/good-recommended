export const authUrl = (uri) => `auth/${uri}`
export const recommendUrl = (id) => id ? `recommend/${id}` : `recommend`
export const recommendTypeUrl = (id) => `recommend/type/${id}`