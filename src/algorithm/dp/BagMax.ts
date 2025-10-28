export class BagMax{
    public GetMaxProfitForWeightByBackTracking(bags: number[][], maxWeight: number): number{
        if(bags == undefined || bags.length == 0 || maxWeight <= 0){
            return 0;
        }
        let result = [0];
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
}