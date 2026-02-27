export default defineNuxtRouteMiddleware((to) => {
    // SERVER SIDE
    if (import.meta.server) {
        const headers = useRequestHeaders()
        const userAgent = headers['user-agent'] || ''
        const isMobile = /mobile|android|iphone|ipad/i.test(userAgent)

        if (!isMobile) {
            return navigateTo('/', { redirectCode: 302 })
        }
    }

    // CLIENT SIDE
    if (import.meta.client) {
        if (window.innerWidth > 1024) {
            return navigateTo('/')
        }
    }
})