function validSpacing(s) {
  return s[0] !== ' ' && s[s.length - 1] !== ' ' && !s.includes('  ');
}