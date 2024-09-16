function maxSequence(arr) {
  if (!arr.length || arr.every(num => num < 0)) return 0;
    let max = -Infinity
    for (let i = 0; i < arr.length; i++) {
        const n = arr.length - i + 1
        for (let k = 1; k < n; k++) {
            //const t = [a[i]]
            let v = arr[i]
            for (let j = i + 1; j < arr.length - k + 1; j++) {
                v += arr[j]
//                 t.push(arr[j])
            }
//             console.log(t, v)
            max = Math.max(v, max)
        }
    }
    return max
}
//39 from infinity...