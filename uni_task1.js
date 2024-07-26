const sentence = "tanay"
let dcount =0;
let dletters = [];
let result = "";
let result1 = {};

for(let i=0;i<sentence.length;i++)
{
    const char = sentence[i];
    if(char.match(/[a-z A-Z]/) && !dletters.includes(char))
    {
        let count = 0;
    
    
    for(let j=i;j<sentence.length;j++)
        {
            if(char === sentence[j])
            {
                count++;
            }  
        }
        dcount++;
        result+=count + " ";
        result1[char]=count;
        dletters.push(char);
    }   
}

console.log(dcount + " " +result);
console.log(result1);   //bonus point

