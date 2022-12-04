function sortPeople(names: string[], heights: number[]): any[] {
    let finalArray = []
    for(let i=0;i<names.length;i++){
        finalArray.push([names[i],heights[i]])
    }
    return finalArray.sort((a,b)=>b[1]-a[1]).map((a)=>a[0]);
};