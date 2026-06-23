# GitSage Workflow

## Phase 1

User Authentication

User
↓
GitHub OAuth
↓
Access Token Stored

## Phase 2

Repository Discovery

Access Token
↓
GitHub API
↓
Repositories Imported
↓
Stored in PostgreSQL

## Phase 3

Pull Request Discovery

Repository
↓
GitHub API
↓
Merged Pull Requests Imported

## Phase 4

Context Building

For each Pull Request:

* Title
* Description
* Changed Files
* Commit Messages

are collected.

## Phase 5

AI Analysis

Context
↓
Gemini AI
↓
Category
Summary
Confidence
Reasoning

## Phase 6

Release Note Generation

Analyzed Pull Requests
↓
Features
Bug Fixes
Chores
↓
Structured Release Notes

