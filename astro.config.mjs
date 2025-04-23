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

import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: node({
    mode: 'standalone', // Use 'standalone' for serverless deployment
  }),
  integrations: [
    sanity({
      projectId,
      dataset,
      studioBasePath: '/admin',
      useCdn: false,
      apiVersion: '2025-04-07' // Set to date of setup to use the latest API version
    }),
    react() // Required for Sanity Studio
  ]
})