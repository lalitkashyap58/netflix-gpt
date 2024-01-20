import OpenAI from "openai";
import { OPEN_AI_KEY } from "./constants";

const openAi=new OpenAI({
    apiKey:OPEN_AI_KEY,
    dangerouslyAllowBrowser: true

});

export default openAi;