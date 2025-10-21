export class Stock{    
    maxProfitBuyOnlyOnce(prices: number[]): number {
        if(prices.length < 2){
            return 0;
        }

        let dp: number[] = [0];
        let minPrice = prices[0];
        for(let i = 1; i < prices.length; i++){
            minPrice = Math.min(minPrice, prices[i]);
            let profit = Math.max(dp[i - 1], prices[i] - minPrice);
            dp.push(profit);
        }
        
        return dp[prices.length - 1];
    }
}