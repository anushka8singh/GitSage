# GitSage

GitSage is an AI-powered GitHub engineering assistant that automatically analyzes repository activity, understands pull requests, classifies engineering work, and generates structured release notes.

The platform connects directly to GitHub through OAuth and leverages GitHub APIs, PostgreSQL, Prisma ORM, and Gemini AI to transform raw development activity into meaningful engineering insights.

## Problem

Development teams often struggle with:

* Maintaining changelogs
* Writing release notes
* Tracking engineering progress
* Understanding repository evolution
* Communicating technical changes to stakeholders

These tasks are repetitive, time-consuming, and frequently neglected.

## Solution

GitSage automates the process by:

1. Connecting to GitHub repositories
2. Importing repository and pull request history
3. Building contextual representations of pull requests
4. Using AI to classify engineering work
5. Generating release-ready summaries and changelogs

## Core Features

* GitHub OAuth Authentication
* Repository Import
* Pull Request Import
* AI-Based Pull Request Classification
* Context-Aware PR Analysis
* Automated Release Note Generation
* Changelog Automation

## Tech Stack

Frontend:

* React
* Vite
* Tailwind CSS

Backend:

* Node.js
* Express.js

Database:

* PostgreSQL
* Prisma ORM

External Services:

* GitHub OAuth
* GitHub REST API
* Gemini AI
