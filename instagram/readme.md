Extract

```
Array.from($('._aano > div:nth-child(1) > div:nth-child(1)').children).map(v => v.children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].innerText)
```

Button

```
Array.from($('._aano > div:nth-child(1) > div:nth-child(1)').children).map(v => v.children[0].children[0].children[0].children[2].children[0].children[0]
```

Remove

```
Array.from($('._aano > div:nth-child(1) > div:nth-child(1)').children).map(v => v.children[0].children[0].children[0]).map(el => {
    const user = el.children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].innerText;
    const button = el.children[2].children[0].children[0];
    return [user, button];
})
```

FinalStep
```
$('button._a9--._ap36._a9-_').click()
```
