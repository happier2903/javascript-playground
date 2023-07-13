function list(names){
  
    let result = '';
    for (let i = 0; i < names.length; i++) {
      const name = names[i].name;
      if (i === 0) {
       result = result + name;
      } else if (i < names.length-1){
        result = result + ', ' + name;
      }
      else if (i < names.length) {
        result = result + ' & ' + name;
      }
    }
    return result;
  }