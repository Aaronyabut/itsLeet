function intToRoman(num: number): string {
  const numberals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let romanNums:string = '';
  let count:number = num;

  while (count > 0) {
    if (count >= numberals.M) {
      romanNums += 'M';
      count -= numberals.M;
    } else if (count >= numberals.M-numberals.C && count < numberals.M) {
      romanNums += 'CM';
      count -= numberals.M-numberals.C;
    } else if (count >= numberals.D && count < numberals.M-numberals.C) {
      romanNums += 'D';
      count -= numberals.D;
    } else if (count >= numberals.D-numberals.C && count < numberals.D) {
      romanNums += 'CD';
      count -= numberals.D-numberals.C;
    } else if (count >= numberals.C && count < numberals.D-numberals.C) {
      romanNums += 'C';
      count -= numberals.C;
    } else if (count >= numberals.C-numberals.X && count < numberals.C) {
      romanNums += 'XC';
      count -= numberals.C-numberals.X;
    } else if (count >= numberals.L && count < numberals.C-numberals.X) {
      romanNums += 'L';
      count -= numberals.L;
    } else if (count >= numberals.L-numberals.X && count < numberals.L) {
      romanNums += 'XL';
      count -= numberals.L-numberals.X;
    } else if (count >= numberals.X && count < numberals.L-numberals.X) {
      romanNums += 'X';
      count -= numberals.X;
    } else if (count >= numberals.X-numberals.I && count < numberals.X) {
      romanNums += 'IX';
      count -= numberals.X-numberals.I;
    } else if (count >= numberals.V && count < numberals.X-numberals.I) {
      romanNums += 'V';
      count -= numberals.V
    } else if (count >= numberals.V-numberals.I && count < numberals.V) {
      romanNums += 'IV';
      count -= numberals.V-numberals.I
    } else if (count >= numberals.I && count < numberals.V-numberals.I) {
      romanNums += 'I';
      count -= numberals.I;
    } 
  }
  return romanNums;
};