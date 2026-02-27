<template>
    <section class="min-h-[70vh] flex items-center">
        <div class="max-w-2xl">

            <p class="typing uppercase tracking-[0.3em] text-xs text-purple-400 mb-6">
                {{ displayedText }}
            </p>
            <h1 class="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                Building scalable frontend applications with Vue, React, and TypeScript.
            </h1>

            <p class="mt-6 text-base text-gray-400 leading-relaxed">
                8+ years developing scalable frontend applications with a strong focus on UI quality, API integration,
                and performance optimization in SSR environments.
            </p>

            <div class="mt-8 flex gap-4">
                <a href="#projects"
                    class="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 font-medium hover:opacity-90 transition">
                    View Projects
                </a>
                <a href="https://github.com/lh19930820" target="_blank"
                    class="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition">
                    GitHub
                </a>
            </div>

        </div>
    </section>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"

const texts: string[] = [
    "Senior Frontend Engineer",
    "Vue & React Specialist",
    "SSR Performance Optimizer",
    "Scalable UI Architect"
]

const displayedText = ref<string>("")

const typingSpeed = 80
const deletingSpeed = 40
const delayAfterTyping = 1200

let textIndex = 0
let charIndex = 0
let isDeleting = false
let timer: ReturnType<typeof setTimeout> | null = null

const typeEffect = () => {
    const currentText = texts[textIndex]

    if (!isDeleting) {
        displayedText.value = currentText.slice(0, charIndex + 1)
        charIndex++

        if (charIndex === currentText.length) {
            timer = setTimeout(() => {
                isDeleting = true
                typeEffect()
            }, delayAfterTyping)
            return
        }
    } else {
        displayedText.value = currentText.slice(0, charIndex - 1)
        charIndex--

        if (charIndex === 0) {
            isDeleting = false
            textIndex = (textIndex + 1) % texts.length
        }
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed
    timer = setTimeout(typeEffect, speed)
}

onMounted(() => {
    typeEffect()
})

onBeforeUnmount(() => {
    if (timer) clearTimeout(timer)
})
</script>
<style scoped>
@keyframes letterFade {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-letter {
    animation: letterFade 0.4s ease forwards;
}
.typing::after {
    content: "|";
    margin-left: 4px;
    animation: blink 1s infinite;
    font-weight: bold;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}
</style>
