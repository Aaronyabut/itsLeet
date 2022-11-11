function reverse(x: number): any {
  let isNeg:boolean = false;
  if (x < 0) {
    isNeg = true;
    x = x*-1;
  }

  const numToStr:string = String(x);
  let reversedStrNum:string = '';

  for (let i = numToStr.length - 1; i >= 0; i --) {
    reversedStrNum += numToStr[i];
  }
  let backToNum:number = Number(reversedStrNum)
  let powOf:number = Math.pow(2,31);
  let powOfNeg:number = Math.pow(-2,31);

  if (isNeg) {
    backToNum = backToNum*-1;
  }

  if (backToNum > powOf || backToNum < powOfNeg) return 0;

  return backToNum;
};