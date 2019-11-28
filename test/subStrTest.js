let test='abcdefghigh';

console.log(test.substring(0,6)); // 该方法返回一个新的字符串，该字符串值包含 stringObject 的一个子字符串，其内容是从 start 处到 stop-1 处的所有字符，其长度为 stop 减 star
console.log(test.substr(0,6));// start（必需）：所需的子字符串的起始位置。字符串中的第一个字符的索引为 0。length（可选）：在返回的子字符串中应包括的字符个数。