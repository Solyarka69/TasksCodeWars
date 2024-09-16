String.prototype.camelCase=function(){
  if (this.toString().length === 0) {
    return '';
  } else {
      let a = this.toString().split(' ');
      a = a.map((el) => el = el[0].toUpperCase() + el.slice(1));
      return a.join('');
  }
}
//62 from infinity...