<template>
    <section id="projects">
        <h2 class="text-2xl font-semibold mb-10">
            Selected Projects
        </h2>

        <div class="space-y-16 max-w-3xl">
            <div v-for="(project, index) in PROJECTS" :key="index">

                <h3 class="text-xl font-semibold">
                    {{ project.title }} ({{ project.year }})
                </h3>

                <p class="text-purple-400 text-sm mt-1">
                    {{ project.subtitle }}
                </p>

                <div class="mt-5 space-y-4 text-sm text-gray-400 leading-relaxed">
                    <p>{{ project.description }}</p>

                    <p>
                        <span class="text-white font-medium block">Impact:</span>
                        {{ project.impact }}
                    </p>

                    <p class="text-gray-500">
                        {{ project.tech }}
                    </p>
                </div>

                <!-- Buttons -->
                <div class="mt-6 flex gap-4 text-sm">
                    <a v-for="(link, i) in project.links" :key="i" :href="link.url" target="_blank"
                        class="px-5 py-2 rounded-lg transition" :class="link.type === 'primary'
                            ? 'bg-white/10 hover:bg-white/20'
                            : 'border border-white/20 hover:bg-white/5'">
                        {{ link.label }}
                    </a>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { PROJECTS } from '~/constants/projects'
const feature = ref();
</script>

<style lang="css" scoped></style>