<template>
    <nav class="fixed bottom-0 left-0 w-full z-50 lg:hidden">
        <div class="flex items-center justify-around 
                bg-black/80 backdrop-blur-xl 
                border-t border-white/10 
                py-3">

            <component v-for="item in BOTTOM_NAV" :key="item.label" :is="item.download ? 'a' : NuxtLink"
                :href="item.download ? item.href : undefined" :to="!item.download ? item.href : undefined"
                :download="item.download ? item.href : undefined" class="flex flex-col items-center text-xs transition"
                :class="[
                    !item.download && route.path === item.href
                        ? 'text-white'
                        : item.class
                ]">
                <component :is="item.icon" />
                {{ item.label }}
            </component>

        </div>
    </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { NuxtLink } from '#components'
import { BOTTOM_NAV } from '~/constants/bottom-nav'

const route = useRoute()
</script>