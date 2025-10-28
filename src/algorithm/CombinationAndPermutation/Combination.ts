export class Combination{
    public GetCombinationFromUniqueArray(nums: number[], k: number): number[][]{
        let result:number[][] = [];
        if(!Array.isArray(nums) || nums.length === 0 || k <= 0 || k > nums.length){
            return result;
        }

        this.GetCombinationFromUniqueArrayHelp(nums, k, result, [], 0);
        return result;
    }

    private GetCombinationFromUniqueArrayHelp(nums: number[], k: number, result: number[][], candidate: number[], index: number){
        if(candidate.length === k) {
            result.push([...candidate])
            return;
        }

        for(let i = index; i < nums.length; i++){
            candidate.push(nums[i]);
            this.GetCombinationFromUniqueArrayHelp(nums, k, result, candidate, i + 1);
            candidate.pop();
        }
    }
}
