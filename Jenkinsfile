/*
 * This color converter software is part of a micro-service architecture written for demonstration purposes.
 * Copyright (C)  2017  Gianni Bombelli @ Intré S.r.l.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

node('schiavo') {

    env.NODEJS_HOME = "${tool 'nodejs-8'}"
    env.DOCKER_HOME = "${tool 'docker-latest'}"
    env.PATH="${env.NODEJS_HOME}/bin:${env.DOCKER_HOME}/bin:${env.PATH}"
    env.ANSIBLE_HOST_KEY_CHECKING = 'false'

    def test_port = 3100 + env.BUILD_ID.toInteger()

    def array = env.JOB_NAME.split("/")
    def pipelineName = array[array.length - 2];

    try {
        stage('Checkout'){
            checkout scm
            /* TODO Esercizio 1:
             * se la branch e' differente da master:
             * checkout e pull di master
             * creare da master una branch temporanea
             * fare merge con la branch corrente
             * alla fine ricordarsi di fare cleanup della branch temporanea!!!
             */

             // TODO Esercizio 4: aggiungere "upstream trigger"
             // properties([pipelineTriggers([upstream(threshold: hudson.model.Result.SUCCESS, upstreamProjects: "${pipelineName}/master")])])

        }

        stage('Install Dependencies'){

        }

        stage('Static Code Analisys'){

        }

        stage('Build'){

        }

        stage('Test Pre Deploy'){
/*
            sh "npm run test:pre-deploy"

            step([$class: 'XUnitBuilder',
                thresholds: [[$class: 'FailedThreshold', unstableThreshold: '1']],
                tools: [[$class: 'JUnitType', pattern: 'test-report/test-pre-deploy-report.xml']]])
*/
        }

        stage('Build Docker Image') {
//            sh "docker -H tcp://192.168.50.91:2375 build -t 192.168.50.91:5000/${pipelineName}-${env.BRANCH_NAME}:${env.BUILD_ID} -t 192.168.50.91:5000/${pipelineName}-${env.BRANCH_NAME}:latest ."
        }

        stage('Push to Docker Resgistry') {
//            sh "docker -H tcp://192.168.50.91:2375 push 192.168.50.91:5000/${pipelineName}-${env.BRANCH_NAME}:${env.BUILD_ID}"
//            sh "docker -H tcp://192.168.50.91:2375 push 192.168.50.91:5000/${pipelineName}-${env.BRANCH_NAME}:latest"
        }

        stage ('Deploy and Run') {
/*
            if (env.BRANCH_NAME == 'master') {
                print "Deploy docker container to : staging environmet"
                sh "ansible-playbook -i /ansible/inventory/hosts.yml /ansible/hex2hsl.yml --limit staging"
            } else {
                print "Deploy docker container to : testing environmet"
                sh "ansible-playbook -i /ansible/inventory/hosts.yml --extra-vars 'hex2hsl_branch=${env.BRANCH_NAME} hex2hsl_port=${test_port}' /ansible/hex2hsl.yml --limit testing"
            }
*/
        }

        stage('Test post-deploy') {
/*
            def test_url = ''
            if (env.BRANCH_NAME == 'master') {
                test_url = 'http://192.168.50.93:3100'
            } else {
                test_url = 'http://192.168.50.92:' + test_port
            }
            sh "npm run test:post-deploy -- --test_url=${test_url}"

            step([$class: 'XUnitBuilder',
                thresholds: [[$class: 'FailedThreshold', unstableThreshold: '1']],
                tools: [[$class: 'JUnitType', pattern: 'test-report/test-post-deploy-report.xml']]])
*/
        }

        stage('Cleanup') {
            sh "rm node_modules -rf"

//            sh "docker -H tcp://192.168.50.91:2375 rmi 192.168.50.91:5000/${pipelineName}-${env.BRANCH_NAME}:${env.BUILD_ID}"
//            sh "docker -H tcp://192.168.50.91:2375 rmi 192.168.50.91:5000/${pipelineName}-${env.BRANCH_NAME}:latest"
        }

    } catch (err){
        sh "rm node_modules -rf"

//        sh "docker -H tcp://192.168.50.91:2375 rmi 192.168.50.91:5000/${pipelineName}-${env.BRANCH_NAME}:${env.BUILD_ID}"
//        sh "docker -H tcp://192.168.50.91:2375 rmi 192.168.50.91:5000/${pipelineName}-${env.BRANCH_NAME}:latest"

        throw err
    }
}
