<template>

    <section>
        <h2 class="text-2xl font-semibold mb-10">
            Engineering Foundation
        </h2>

        <div class="space-y-10 max-w-3xl">

            <div
                v-for="(section, index) in ENGINEERING_FOUNDATION"
                :key="index"
                class="space-y-2"
                >
                <h3 class="text-lg font-semibold text-white">
                    {{ section.title }}
                </h3>

                <p class="text-gray-400 text-sm leading-relaxed">
                    {{ section.content }}
                </p>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { ENGINEERING_FOUNDATION } from '~/constants/skills'
const feature = ref();
</script>

<style lang="css" scoped></style>