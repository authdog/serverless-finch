const { buildUploadList, removeExtensionPath } = require('./upload');

test('it creates properly upload list', () => {
  const uploadList = buildUploadList(['/a/b/c/test.html', '/e/f/g/test2.html'], '.');
  console.log(uploadList);
  expect(uploadList).toBeTruthy();
});

test('it removes extension of a canonical path', () => {
  const path1 = removeExtensionPath('/a/b/c/d.html');
  expect(path1).toEqual('/a/b/c/d');

  const path2 = removeExtensionPath('/a/b/c/d');
  expect(path2).toEqual('/a/b/c/d');
});
