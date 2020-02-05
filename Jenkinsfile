pipeline
{
    agent none
    environment
    {
	    PRODUCT_PATH = '/home/ubuntu/agile-front-end'
    }

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
                sh 'ng build --no-build-optimizer --prod'
            }
        }
        stage('deploy')
        {
            agent any
            steps
            {
                sh '$(pwd)/deploy ${PRODUCT_PATH}'
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

