const calculator = require('./operator.js');
const http = require('http')
const url = require('url')
querystring = require('querystring')

http.createServer((req,res) => {
    
    if(req.url.includes('/calculate')) 
    {
        const query = url.parse(req.url).query
        const qs = querystring.parse(query)

        const n1 = qs["num1"]
        const n2 = qs["num2"]
        const operation = qs["operation"]

        const a = parseInt(n1)
        const b = parseInt(n2)

        
        res.write("Number1 = "+ a +"\n")
        res.write("Number2 = "+ b +"\n")

        if(operation== '+') 
        {
            console.log("Addition = "+ calculator.addition(a,b))
            res.write("Addition = "+ calculator.addition(a,b))
        }

        else if(operation== '-') 
        {
            console.log("Subtraction = "+calculator.subtraction(a,b))
            res.write("Subtraction = "+calculator.subtraction(a,b))
        }

        else if(operation== '*')
        {
            console.log("Multiplication = "+calculator.multiplication(a,b))
            res.write("Multiplication = "+calculator.multiplication(a,b))
        }

        else if(operation== '/') 
        {
            console.log("Division = "+calculator.division(a,b))
            res.write("Division = "+calculator.division(a,b))
        }

        else if(operation=='^')
        {
            console.log("Power = "+ calculator.power(a,b))
            res.write("Power = "+ calculator.power(a,b))
        }

        else if(operation == '%')
        {
            console.log("Modulus = "+ calculator.modulus(a,b))
            res.write("Modulus = "+ calculator.modulus(a,b))
        }

        res.end()
    }      
}).listen(1608);

console.log("server running : http://127.0.0.1:5501/WT_project/exp_5/try/index.html");