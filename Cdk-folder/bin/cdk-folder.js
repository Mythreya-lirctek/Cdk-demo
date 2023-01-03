#!/usr/bin/env node
const cdk = require('aws-cdk-lib');
const { CdkFolderStack } = require('../lib/cdk-folder-stack');

const app = new cdk.App();
new CdkFolderStack(app, 'CdkFolderStack', {
  env: {
    account: '403237590418',
    region: 'ap-south-1',
  }
  });

app.synth();