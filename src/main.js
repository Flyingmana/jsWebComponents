import { hawHaw, answer } from "sandbox/something" 
import { MainContent } from "sandbox/MainContent"


hawHaw();
document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    document.getElementById('content').appendChild((new MainContent()).render());
});

console.log(answer());


