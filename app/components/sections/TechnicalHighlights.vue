<template>
    <section>
        <h2 class="text-2xl font-semibold mb-8">
            Technical Highlights
        </h2>

        <ul class="space-y-3 text-gray-400 max-w-2xl text-sm leading-relaxed">
            <li v-for="(item, index) in TECHNICAL_HIGHLIGHTS" :key="index" class="flex items-start gap-2">
                <span class="text-white">•</span>
                <span>{{ item }}</span>
            </li>
        </ul>
    </section>
</template>

<script setup>
import { TECHNICAL_HIGHLIGHTS } from '~/constants/technical-highlights'
</script>
