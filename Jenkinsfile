pipeline
{
    agent none

    stages
    {
        stage('pull')
        {
            agent any
            steps
            {
                sh '$(pwd)/pull'
            }
        }
        stage('save and build')
        {
            agent any
            steps
            {
                sh 'ls'
                sh 'cd agile-front-end'
                sh 'npm install -save'
                sh 'ng build --prod --build-optimizer=false'
            }
        }
        stage('deploy')
        {
            agent any
            steps
            {
                sh '$(pwd)/deploy $(pwd)'
            }
        }
    }

    post
    {
        always
        {
            echo 'Stages Completed!'
        }
        success
        {
            echo 'Passed! Deploying Changes...'
        }
        failure
        {
            echo 'Failed! Ignoring Changes...'
        }
    }
}

