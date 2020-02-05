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
                sh 'npm install -save'
                sh 'ng build --prod'
            }
        }
        stage('deploy')
        {
            agent any
            steps
            {
                sh 'ls $(pwd)'
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

