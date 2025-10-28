export class BagMax{
    public GetMaxProfitForWeightByBackTracking(bags: number[][], maxWeight: number): number{
        if(!Array.isArray(bags) || bags.length == 0 || maxWeight <= 0){
            return 0;
        }
        let result = [0]; //since array is pass by reference.
        this.GetMaxProfitForWeightByBackTrackingHelp(bags, maxWeight, [], 0, result);
        return result[0];
    }

    private GetMaxProfitForWeightByBackTrackingHelp(bags: number[][], maxWeight: number, candidate: number[][], index: number, maxProfit: number[]){
        let weight = 0;
        let profit = 0;
        for(let i = 0; i < candidate.length; i++){
            weight += candidate[i][0];
            profit += candidate[i][1];
        }
        if(weight <= maxWeight){
            maxProfit[0] = Math.max(maxProfit[0], profit);
        }
        if(weight >= maxWeight){
            return;
        }

        for(let i = index; i < bags.length; i++){
            candidate.push(bags[i]);
            this.GetMaxProfitForWeightByBackTrackingHelp(bags, maxWeight, candidate, i + 1, maxProfit);
            candidate.pop();
        }
    }

    public GetMaxProfitForWeightDpDp(bags: number[][], maxWeight: number) : number{
        if(!Array.isArray(bags) || bags.length === 0 || maxWeight <= 0){
            return 0;
        }
        
        let dp = Array.from({length: bags.length + 1}, () => {
            return Array(maxWeight + 1).fill(0);
        });
        
        for(let i = 0; i < bags.length + 1; i++){
            for(let j = 0; j < maxWeight + 1; j++){
                if(i === 0 || j === 0){
                    dp[i][j] = 0;
                }
                else if(j >= bags[i - 1][0]){
                    var taken = bags[i - 1][1] + dp[i - 1][j - bags[i -1][0]];
                    var notTaken = dp[i - 1][j];
                    dp[i][j] = Math.max(taken, notTaken);
                }
                else{
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }
        return dp[bags.length][maxWeight];
    }
}