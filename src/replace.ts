/*
 * 替换正则表达式匹配的文本
 */
export function replaceRegexMatchedText(
  text: string,
  regExp: RegExp = /\${(\w+)}/g,
  source: string | Record<string, string>,
): string {
  if (typeof source === 'string') {
    return text.replace(regExp, source);
  }

  // 占位符对应的值是否不存在
  let flag = false;

  const resultStr = text.replace(regExp, ($, $1) => {
    const result = source[$1];

    if (!result) {
      flag = true;
    }

    return result || '';
  });

  return flag ? '' : resultStr;
}
