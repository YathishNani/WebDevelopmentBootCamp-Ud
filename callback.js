
function s() {
    console.log("s");
    setTimeout(() => {
        document.body.style.backgroundColor = 'red';
    }, 1000)

    setTimeout(() => {
        document.body.style.backgroundColor = 'orange';
    }, 2000)

    setTimeout(() => {
        document.body.style.backgroundColor = 'yellow';
    }, 3000)

    setTimeout(() => {
        document.body.style.backgroundColor = 'green';
    }, 4000)
}

function n() {
    console.log("n")
    setTimeout(() => {
        document.body.style.backgroundColor = 'violet';
        setTimeout(() => {
            document.body.style.backgroundColor = 'indigo';
            setTimeout(() => {
                document.body.style.backgroundColor = 'blue';
                setTimeout(() => {
                    document.body.style.backgroundColor = 'green';
                    setTimeout(() => {
                        document.body.style.backgroundColor = 'yellow';
                        setTimeout(() => {
                            document.body.style.backgroundColor = 'orange';
                            setTimeout(() => {
                                document.body.style.backgroundColor = 'red';
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000) 
}

function m() {
    console.log("m")
    const change = (_color, delay) => {
        setTimeout(() => {
            document.body.style.backgroundColor = _color;
        }, delay)
    }
    change('black', 4000);
}
 


setTimeout(() => {
    s();
}, 2000)

setTimeout(() => {
    m();
}, 3000)

setTimeout(() => {
    n();
}, 4000)

