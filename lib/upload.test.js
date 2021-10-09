const { buildUploadList } = require('./upload');

test('it creates properly upload list', () => {
  const uploadList = buildUploadList(['/a/b/c/test.html', '/e/f/g/test2.html'], '.');
  console.log(uploadList);
  expect(uploadList).toBeTruthy();
});
