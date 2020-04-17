let foo = number => {
    let results = []
    
    for(let i=1; i<=number; i++){
        
        if(i%2 ===0 && i%3===0 && i%5===0)
            results.push("yu-gi-oh")
        else if (i%3 ===0)
            results.push("gi")
        else if(i%5 ===0)
            results.push("oh")
        else if(i%2 ===0)
            results.push("yu")
        else
            results.push(i)
        // console.log("worked")
    }
    console.log(results)
    return results
}

foo(100)
foo(250)