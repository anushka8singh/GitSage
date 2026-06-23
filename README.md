# 🚀 GitSage

>Autonomous GitHub Engineering Assistant for Automated Pull Request Analysis, Release Notes, and Changelog Generation.

GitSage is a developer productivity platform that connects directly to GitHub repositories, analyzes pull request history using AI, and automatically generates structured engineering insights, release notes, and changelogs.

Instead of manually reviewing merged pull requests and writing release documentation, GitSage understands repository activity and transforms raw development work into meaningful summaries.

---

## ✨ Features

### 🔐 GitHub OAuth Authentication

Secure login using GitHub OAuth.

* GitHub account authentication
* Access token management
* Repository access authorization

---

### 📦 Repository Import

Import repositories directly from GitHub.

* Fetch user repositories
* Store repository metadata
* Track default branches
* Support public and private repositories

---

### 🔄 Pull Request Import

Import historical merged pull requests.

* Retrieve merged PRs
* Store PR metadata
* Track authors and merge history
* Build foundation for AI analysis

---

### 🧠 Context-Aware AI Analysis

Unlike simple AI wrappers that only analyze PR titles, GitSage builds contextual representations of pull requests.

The AI agent analyzes:

* Pull Request Title
* Pull Request Description
* Changed Files
* Commit Messages

This enables significantly more accurate understanding of engineering work.

---

### 🤖 AI Classification Agent

GitSage automatically categorizes pull requests into:

* FEATURE
* BUG_FIX
* CHORE
* OTHER

Each analysis includes:

* Category
* Confidence Score
* Summary
* Reasoning

Example:

```json
{
  "category": "FEATURE",
  "confidence": 0.94,
  "summary": "Introduces repository analytics functionality.",
  "reasoning": "New analytics components and supporting logic were added."
}
```

---

### 📝 Automated Release Notes (In Progress)

Generate stakeholder-friendly release notes directly from merged pull requests.

Example:

```md
## Features

- Added repository analytics dashboard
- Added GitHub OAuth support

## Bug Fixes

- Fixed login session handling

## Chores

- Updated project dependencies
```

---

## 🏗️ Architecture

```text
React Frontend
       │
       ▼
Express Backend
       │
 ┌─────┼─────┐
 ▼     ▼     ▼

GitHub Prisma Gemini AI
 API    ORM

       │
       ▼

 PostgreSQL
```

---

## 🔄 Workflow

```text
User Login
    ↓
GitHub OAuth
    ↓
Access Token Storage
    ↓
Repository Import
    ↓
Pull Request Import
    ↓
Context Builder
    ↓
Gemini Analysis
    ↓
Category + Summary + Reasoning
    ↓
Release Notes Generation
```

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL
* Prisma ORM

### Authentication

* GitHub OAuth
* Passport.js

### AI

* Google Gemini 2.5 Flash

### External APIs

* GitHub REST API

---

## 🗄️ Database Design

### User

Stores authenticated GitHub users.

### Repository

Stores imported GitHub repositories.

### PullRequest

Stores:

* PR Metadata
* AI Analysis
* Context Data
* Classification Results

Relationship Structure:

```text
User
 └── Repository
         └── PullRequest
```

---

## 🎯 Why GitSage?

Engineering teams spend significant time:

* Reviewing merged pull requests
* Writing release notes
* Maintaining changelogs
* Communicating technical updates

GitSage automates this workflow by combining GitHub data with AI-powered analysis.

The goal is to transform:

```text
Raw Development Activity
```

into

```text
Actionable Engineering Knowledge
```


---

## 💡 Key Engineering Concepts Demonstrated

* OAuth 2.0 Authentication
* REST API Integration
* GitHub API Consumption
* Relational Database Design
* Prisma ORM
* AI Agent Workflows
* Prompt Engineering
* Context Building Pipelines
* Service Layer Architecture
* Repository Pattern Concepts
* AI-Powered Developer Tooling

---

## 👨‍💻 Project Goal

GitSage was built to explore how AI can augment software engineering workflows by automatically understanding pull requests, categorizing development work, and generating release-ready documentation.

The long-term vision is to evolve GitSage into a fully autonomous engineering assistant capable of monitoring repositories, generating changelogs, and communicating technical progress to both engineers and non-technical stakeholders.
