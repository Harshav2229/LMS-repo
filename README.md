# Learning Management System (LMS)

A small Node.js demo implementing the **View Available Courses** user story.

## Run locally

```bash
node main.js
```

## Build and run with Docker

```bash
docker build -t lms-app .
docker run --rm lms-app
```

## Features

- Displays available courses
- Docker containerization
- GitHub Actions workflow to run the app and build the Docker image
