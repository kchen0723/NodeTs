export class Stock{    
// # 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
// # 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
// # 注意：你不能在买入股票前卖出股票。
// # 示例 1:
// # 输入: [7,1,5,3,6,4]
// # 输出: 5
    maxProfitBuyOnlyOnce(prices: number[]): number {
        if(!Array.isArray(prices) || prices.length < 2){
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

    maxProfitBuyOnlyOnceDp(prices: number[]){
        if(!Array.isArray(prices) || prices.length < 2){
            return 0;
        }

        let holdCash = 0;
        let holdStock = 0 - prices[0];
        let dp = [[holdCash, holdStock]];

        for(let i = 1; i < prices.length; i++){
            holdCash = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
            holdStock = Math.max(dp[i - 1][1], 0 - prices[i]);
            dp.push([holdCash, holdStock]);
        }

        return dp[prices.length -1][0];
    }

    maxPrifitBuyMultipleTimes(prices: number[]){
        if(!Array.isArray(prices) || prices.length < 2){
            return 0;
        }

        let holdCash = 0;
        let holdStock = 0 - prices[0];
        let dp = [[holdCash, holdStock]];

        for(let i = 1; i < prices.length; i++){
            holdCash = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
            holdStock = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
            dp.push([holdCash, holdStock]);
        }
        return dp[prices.length - 1][0];
    }

    maxProfitBuyKTimes(prices: number[], k: number): number{
        if(!Array.isArray(prices) || prices.length < 2){
            return 0;
        }

        let holdCash = 0;
        let holdStock = 0 - prices[0];
        let dp = Array.from({length: prices.length}, () => {
            return Array.from({length: k + 1}, () => {
                return Array(2).fill(0);
            })
        });
        //base case
        for(let j = 0; j <=k; j++){
            dp[0][j][0] = holdCash;
            dp[0][j][1] = holdStock;
        }

        //transfer
        for(let i = 1; i < prices.length; i++){
            for(let j = 1; j <= k; j++){
                dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
                dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
            }
        }

        return dp[prices.length - 1][k][0];
    }
}