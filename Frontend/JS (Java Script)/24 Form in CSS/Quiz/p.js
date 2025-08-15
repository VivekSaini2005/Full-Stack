const ans = ['C','B','B','B','B'];
const form = document.querySelector('form');

form.addEventListener(('submit'),(event)=>{
    event.preventDefault();

    const data = new FormData(form);
    const answer = Array.from(data.values());
    console.log(answer);
    let cnt = 0;
    for(let i=0;i<ans.length;i++){
        if(answer[i]===ans[i]) cnt+=1;
    }
    console.log(cnt);
    const sc = document.getElementById('scoreArea');
    sc.innerHTML = 'Score: '+cnt+'/5';
})