(async()=>{
    const removal=%replace%

    for (let p of Array.from($('._aano > div:nth-child(1) > div:nth-child(1)').children).map(v => v.children[0].children[0].children[0]).map(el => {
        const user = el.children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].innerText;
        const button = el.children[2].children[0].children[0];
        return [user, button];
    })
    .filter(([user, button]) => removal.includes(user) && button.innerText==='Following')
    .map(([user, button]) => () => new Promise((resolve) => {
        console.log(`removing, ${user}`);
        button.click();
        const int = setInterval(() => {
          console.log('trying to find button');
          if($('button._a9--._ap36._a9-_')) {
            $('button._a9--._ap36._a9-_').click();
            clearInterval(int);
            console.log(`removed ${user}`);
            setTimeout(resolve, 1000);
          }
        }, 1000);
    }))) await p();
})();
