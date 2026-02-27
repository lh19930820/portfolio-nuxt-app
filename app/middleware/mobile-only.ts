export default defineNuxtRouteMiddleware(() => {
    if (import.meta.server) {
        const userAgent = useRequestHeaders()['user-agent'] || ''
        const isMobile = /mobile|android|iphone|ipad/i.test(userAgent)

        if (!isMobile) {
            return navigateTo('/')
        }
    }

    if (import.meta.client) {
        if (window.innerWidth > 1024) {
            return navigateTo('/')
        }
    }
})