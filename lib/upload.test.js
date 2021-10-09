const { buildUploadList, removeExtensionPath, HTML_MIME_TYPE } = require('./upload');

test('it creates properly upload list', () => {
  const uploadList = buildUploadList(['/a/b/c/test.html', '/e/f/g/test2.html'], '.');
  expect(uploadList).toBeTruthy();
  expect(uploadList.length).toEqual(2);
});

test('it generate uploadList with custom mime types only when html is set', () => {
  const uploadList = buildUploadList(['/a/b/c/test.html', '/e/f/g/bundle.js'], '.');
  expect(uploadList[0].contentType).toEqual(HTML_MIME_TYPE);
  expect(uploadList[1].contentType).toBeFalsy();
});

test('it removes extension of a canonical path', () => {
  const path1 = removeExtensionPath('/a/b/c/d.html');
  expect(path1).toEqual('/a/b/c/d');

  const path2 = removeExtensionPath('/a/b/c/d');
  expect(path2).toEqual('/a/b/c/d');
});
