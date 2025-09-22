// Loading environment variables from .env files
// https://docs.astro.build/en/guides/configuring-astro/#environment-variables
import { loadEnv } from 'vite'
const {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
} = loadEnv(import.meta.env.MODE, process.cwd(), '')
import { defineConfig } from 'astro/config'

// Different environments use different variables
const projectId = PUBLIC_SANITY_PROJECT_ID
const dataset = PUBLIC_SANITY_DATASET

import sanity from '@sanity/astro'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    sanity({
      projectId,
      dataset,
      studioBasePath: '/admin',
      useCdn: false,
      apiVersion: '2025-09-22' // Set to date of setup to use the latest API version
    }),
    react() // Required for Sanity Studio
  ]
})