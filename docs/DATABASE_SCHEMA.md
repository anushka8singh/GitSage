# Database Design

## User

Stores GitHub-authenticated users.

Fields:

* id
* githubId
* username
* email
* avatarUrl
* accessToken

## Repository

Stores imported GitHub repositories.

Fields:

* id
* githubRepoId
* name
* fullName
* defaultBranch
* private
* webhookActive

## PullRequest

Stores imported pull requests and AI analysis.

Fields:

* id
* githubPrId
* number
* title
* body
* author
* mergedAt
* category
* summary
* confidence
* reasoning
* filesChanged
* commitMessages

## Relationships

User
└── Repository
└── PullRequest

## Why PostgreSQL?

PostgreSQL was selected over MongoDB because:

* Strong relational modeling
* Better data integrity
* Prisma support
* Easier querying for analytics
* Better fit for repository → pull request relationships
