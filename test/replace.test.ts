import { replaceRegexMatchedText, replaceSpecialStr } from '../src/replace';

test('测试资源是字符串', () => {
  expect(replaceRegexMatchedText('我是中国人${xxxx}', /\${(\w+)}/g, 'allen')).toBe('我是中国人allen');
});

test('测试资源是对象', () => {
  expect(replaceRegexMatchedText('我是中国人${name}', /\${(\w+)}/g, {
    name: 'allen',
  })).toBe('我是中国人allen');

  expect(replaceRegexMatchedText('我是中国人[name]', /\[(\w+)\]/g, {
    name: 'allen',
  })).toBe('我是中国人allen');
});
