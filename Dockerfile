FROM mcr.microsoft.com/playwright:v1.48.2-noble

WORKDIR /app
COPY . /app

RUN apt-get update && \
    apt-get install -y openjdk-11-jre-headless && \
    npm install

ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64

# Running Tests
ENTRYPOINT [ "npm", "run", "cucumber", "login" ]