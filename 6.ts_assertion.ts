{
    const sum = (a:string, b: number) =>{
        return a + b;
    }
    
    const  result = sum("ehllo", 10) as string;
    const  result2 =<string>sum("hello", 10)
    console.log(typeof result)
    console.log(typeof result2)
}