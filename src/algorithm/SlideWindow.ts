export class SlideWindow{
    public GetMinCover(source: string, target: string): string{
        if(!source || !target){
            return "";
        }

        let targetMap = this.buildMap(target);
        let windowMap = new Map<string, number>();
        let start = 0;
        let length  = source.length;
        let matchCount = 0;
        for(let i = 0; i < source.length; i++){
            let item = source[i];
            if(targetMap.has(item)){
                let count = windowMap.get(item) ?? 0;
                windowMap.set(item, count + 1);
                if(windowMap.get(item) === targetMap.get(item)){
                    matchCount++;
                }
            }
            
            while(matchCount === targetMap.size){
                if(i - start + 1 < length){
                    length = i - start + 1;
                }
                let item = source[start];
                if(targetMap.has(item)){
                    if(windowMap.get(item) === targetMap.get(item)){
                        matchCount--;
                    } else {
                        start++;
                    }
                } else{
                    start++;
                }
            }
        }

        if(length < source.length){
            return source.substring(start, start + length);
        }
        return "";
    }

    private buildMap(target: string): Map<string, number>{
        let map = new Map<string, number>();
        for(let item of target){
            let count = map.get(item) ?? 0;
            map.set(item, count + 1);
        }
        return map;
    }
}