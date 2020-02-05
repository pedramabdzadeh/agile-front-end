pipeline
{
    agent none
    environment
    {
	    PRODUCT_PATH = '/home/ubuntu/agile-front-end'
    }

    stages
    {
        agent none
        stage('pull')
        {
            steps
            {
                sh '$(pwd)/pull'
            }
        }
        stage('save and build')
        {
            agent { label 'nodejs8' }
            steps
            {
                npm install -save
                ng build --prod
            }
        }
        stage('deploy')
        {
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

