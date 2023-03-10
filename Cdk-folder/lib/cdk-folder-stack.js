const cdk = require('aws-cdk-lib');
const { CodePipeline, CodePipelineSource, ShellStep } = require('aws-cdk-lib/pipelines');

 class CdkFolderStack extends cdk.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('Mythreya-lirctek/Cdk-demo', 'main'),
        commands: ['npx cdk synth']
      })
    });
  }
}

module.exports = { CdkFolderStack }
