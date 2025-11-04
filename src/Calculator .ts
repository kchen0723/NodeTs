export class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    public Calculate(str: string): number{
        if(!str){
            return 0;
        }
        let strArray = Array.from(str);
        let result = this.CalculateHelp(strArray);
        return result;
    }

    private CalculateHelp(strArray: string[]): number{
        let sign = "+";
        var tokens = [];
        var stack: number[] = [];
        
        while(strArray.length > 0){
            let token = strArray[0];
            strArray.shift();
            
            if((token >= "0" && token <="9") || token === "."){
                tokens.push(token);
            } 
            if(token === "+" || token === "-" || token === "*" || token === "/" ||
                token === "(" || token === ")" || strArray.length === 0) {
                let num = 0;
                if(tokens.length > 0){
                    num = Number(tokens.join(""));
                    tokens.length = 0;
                }
                if(token === "("){
                    num = this.CalculateHelp(strArray);
                }
                switch(sign){
                    case "+":
                        stack.push(num);
                        break;
                    case "-":
                        stack.push(0 - num);
                        break;
                    case "*":
                        var last = stack.pop();
                        if(last){
                            stack.push(last * num);
                        }
                        break;
                    case "/":
                        var last = stack.pop();
                        if(last){
                            stack.push(last / num);
                        }
                        break;
                }
                if(token === ")"){
                    break;
                }
                sign = token;
            }
        }

        let result = 0;
        for(let i = 0; i < stack.length; i++){
            result += stack[i];
        }
        return result;
    }
}