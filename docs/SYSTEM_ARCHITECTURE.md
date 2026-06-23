# System Architecture

┌─────────────────────────┐
│ React Frontend          │
└────────────┬────────────┘
│
▼
┌─────────────────────────┐
│ Express Backend         │
└────────────┬────────────┘
│
┌─────────┼─────────┐
▼         ▼         ▼

GitHub API  Prisma   Gemini AI

│         │
▼         ▼

GitHub     PostgreSQL

## Flow

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
Release Notes Generation

## Architectural Principles

* Separation of Concerns
* Service Layer Pattern
* Controller-Service Architecture
* Database Abstraction via Prisma
* External API Isolation
* AI Pipeline Design
* Future Webhook Support
