window.onload=function(){

let oScript = document.createElement('script');
let oBody = document.querySelector('body')
oScript.type="text/javascript"
oScript.innerText=" let oUlist = document.querySelector('.editor-template-list');\
for(let i = 0;i<oUlist.children.length;i++ ){\
    oUlist.children[i].className='style-item';\
}\
function perf_observer(list, observer) { \
    let oUlist = document.querySelector('.editor-template-list');\
    for(let i = 0;i<oUlist.children.length;i++ ){\
        oUlist.children[i].className='style-item';\
    }\
}\
var observer2 = new PerformanceObserver(perf_observer);\
observer2.observe({entryTypes: ['resource']});\
style_click='';"
oBody.append(oScript)
}