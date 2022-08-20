export const api = {
    auth: {
        signIn: '/auth/signIn',
        refresh: '/auth/refresh',
        logout: '/auth/logout',
    },
    user: {
        all: '/user/'
    },
    brands: {
        all: '/brands/',
        detail: (id: string) => `/brands/${id}`
    },
}
