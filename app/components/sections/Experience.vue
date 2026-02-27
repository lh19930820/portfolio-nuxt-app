<template>
    <section>
        <h2 class="text-2xl font-semibold mb-10">
            Professional Experience
        </h2>

        <div class="space-y-12 max-w-3xl">
            <div v-for="exp in EXPERIENCES" :key="exp.role">
                <h3 class="text-lg font-semibold">
                    {{ exp.role }}
                </h3>
                <p class="text-purple-400 text-sm mt-1">
                    {{ exp.company }} • {{ exp.period }}
                </p>

                <ul class="mt-4 space-y-2 text-sm text-gray-400 ml-4">
                    <li v-for="(item, index) in exp.responsibilities" :key="index" class="list-disc">
                        {{ item }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { EXPERIENCES } from '~/constants/experiences'
</script>
