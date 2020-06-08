module.exports = {
  name: 'github-actions',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/github-actions',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
