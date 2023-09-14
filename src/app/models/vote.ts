import { Colleague } from "./colleague";
import { Like_Hate } from "./like-hate";

export interface Vote {
    colleague: Colleague; 
    like_hate: Like_Hate; 
    score: number;

}
