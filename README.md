# javascript-regex-utils

js 常用正则方法库，持续添加中...

## Installment

```sh
npm install javascript-regex-utils --save
```

## Documentation

### 1. replaceRegexMatchedText

替换正则表达式匹配的文本

#### Usage

```js
  import { replaceRegexMatchedText } from 'javascript-regex-utils';

  replaceRegexMatchedText('我是中国人${xxxx}', /\${(\w+)}/g, 'allen'); // 我是中国人allen
  replaceRegexMatchedText('我是中国人${name}', /\${(\w+)}/g, {
    name: 'allen',
  }); // 我是中国人allen
```
