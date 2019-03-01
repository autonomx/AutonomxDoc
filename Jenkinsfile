pipeline {

    agent none

    stages {

        stage('Build staging') {
            when {
                not {
                    branch 'master'
                }
            }
            agent {
                dockerfile {
                    filename 'Dockerfile'
                }
            }
            steps {
                sh "mkdir -p _site/${env.BRANCH_NAME}"
                sh 'bundle exec jekyll clean'
                sh "bundle exec jekyll build --baseurl /${env.BRANCH_NAME} --destination _site/${env.BRANCH_NAME}"
                stash includes: '_site/**/*', name: '_site'
            }
        }

        stage('Deploy staging') {
            when {
                not {
                    branch 'master'
                }
            }
            agent {
                docker {
                    image 'node'
                    args '-v /$HOME/docker-cache-node:/tmp/docker-cache-node -e "HOME=/tmp/docker-cache-node"'
                }
            }
            steps {
                unstash '_site'
                withAWS(region: 'us-east-1', credentials: 'aws-docs-staging') {
                    sh "npm install && cd _site && node ../deploy.js docs-staging.katalon.com ${env.BRANCH_NAME}"
                }
            }
            post {
                always {
                    withAWS(region: 'us-east-1', credentials: 'aws-docs-staging') {
                        s3Upload(file:'robots.txt', bucket:'docs-staging.katalon.com', path:'', acl:'PublicRead')
                    }
                }
            }
        }

        stage('Build production') {
            when { branch 'master' }
            agent {
                dockerfile {
                    filename 'Dockerfile'
                }
            }
            steps {
                sh 'bundle exec jekyll clean'
                sh 'bundle exec jekyll build --config _config.yml,_config_prod.yml'
                sh 'rm -rfv _site/robots.txt'
            }
            post {
                success {
                    withAWS(region: 'us-east-1', credentials: 'aws-docs-staging') {
                        s3Upload(file:'_site', bucket:'docs.katalon.com', path:'', acl:'PublicRead')
                        cfInvalidate(distribution:'E39AGUOIPSZ2OA', paths:['/*'])
                    }
                }
            }
        }

        stage('Index production') {
            when { branch 'master' }
            agent {
                dockerfile {
                    filename 'Dockerfile'
                }
            }
            environment {
                ALGOLIA_API_KEY = credentials('algolia-api-key')
            }
            steps {
                sh 'bundle exec jekyll clean'
                sh 'bundle exec jekyll algolia --config _config.yml,_config_prod.yml --verbose'
            }
        }
    }
}
