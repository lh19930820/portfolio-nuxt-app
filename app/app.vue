<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
<script setup lang="ts">
    onMounted(() => {
        const loadFont = () => {
            const link = document.createElement('link')
            link.rel = 'stylesheet'
            link.href =
            'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'

            link.onload = () => {
                document.documentElement.classList.add('font-loaded')
            }
            document.head.appendChild(link)
        }

        if ('requestIdleCallback' in window) {
            requestIdleCallback(loadFont, { timeout: 2000 })
        } else {
            setTimeout(loadFont, 200)
        }
    })
</script>