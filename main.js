



// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(value => value.json())
//     .then(user => {
//         // console.log(user);
//         fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id)
//             .then(value => value.json())
//             .then(posts => {
//                 let post = posts[0];
//                 console.log(post)
//                 fetch('https://jsonplaceholder.typicode.com/comments?postId=' + post.id)
//                     .then(value => value.json())
//                     .then(coments => { console.log(coments) })
//             })

//     })

// - Реалізувати друкарську машинку. 
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері. 
// КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером. 
// Приклад: "Hello"
// Затримки: 
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
function timeRandom() {
    let time = Math.random() * 0.9 + 0.1;
    return time * 1000;
}
function writeWord(letter) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(letter);
        }, timeRandom())
    })
}

let p = document.createElement('p');
document.body.appendChild(p);


new Promise(resolve => {
    setTimeout(() => {
        resolve('h');
    }, timeRandom())
})
    .then(value => {
        p.innerHTML += value;
        return writeWord('e');

    })
    .then(value => {
        p.innerHTML += value;
        return writeWord('l');

    })
    .then(value => {
        p.innerHTML += value;
        return writeWord('l');
    })
    .then(value => {
        p.innerHTML += value;
        return writeWord('o');
    }).then(value => {
        p.innerHTML += value;
        return writeWord(' ');
    }).then(value => {
        p.innerHTML += value;
        return writeWord('W');
    }).then(value => {
        p.innerHTML += value;
        return writeWord('o');
    }).then(value => {
        p.innerHTML += value;
        return writeWord('r');
    }).then(value => {
        p.innerHTML += value;
        return writeWord('l');
    }).then(value => {
        p.innerHTML += value;
        return writeWord('d');
    }).then(value => p.innerHTML += value)


//---------------------------------------

// -за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users.
//  За допомогою document.createElement вивести їх в браузер. 
//  Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).

/* let wrapUserS = document.createElement('div');
wrapUserS.classList.add('wrapUserS');
document.body.appendChild(wrapUserS);
 */

/* async function showUserInfo() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json())

    console.log(users);

    for (let user of users) {
        console.log(user);
        let wrapUser = document.createElement('div');
        wrapUser.classList.add('wrapUser');

        for (let keyU in user) {
            if (typeof user[keyU] === 'object') {
                wrapUser.innerHTML += `<b>${keyU}:</b> <br>`;
                let addWrapUser = document.createElement('div');
                addWrapUser.classList.add('addWrapUser');
                let addU = user[keyU];
                for (let addKey in addU) {
                    addWrapUser.innerHTML += `${addKey}: ${addU[addKey]} <br>`;
                }
                wrapUser.appendChild(addWrapUser);
            } else {
                wrapUser.innerHTML += `${keyU}: ${user[keyU]} <br>`;
            }
        }

        wrapUserS.appendChild(wrapUser);
    }
}

showUserInfo();
 */

/* 

let wrapUserS = document.createElement('div');
wrapUserS.classList.add('wrapUserS');
document.body.appendChild(wrapUserS);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {

        for (let user of users) {
            let wrapUser = document.createElement('div');
            wrapUser.classList.add('wrapUser');

            for (let keyU in user) {
                if (typeof user[keyU] === 'object') {
                    wrapUser.innerHTML += `<b>${keyU}:</b> <br>`;
                    let addWrapUser = document.createElement('div');
                    addWrapUser.classList.add('addWrapUser');
                    let addU = user[keyU];
                    for (let addKey in addU) {
                        addWrapUser.innerHTML += `${addKey}: ${addU[addKey]} <br>`;
                    }
                    wrapUser.appendChild(addWrapUser);
                } else {
                    wrapUser.innerHTML += `${keyU}: ${user[keyU]} <br>`;
                }
            }

            wrapUserS.appendChild(wrapUser);
        }

    })

 */


// - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. 
// За допомогою document.createElement вивести їх в браузер. 
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

/* 

let wrapPosts = document.createElement('div');
wrapPosts.classList.add('wrapPosts');
document.body.appendChild(wrapPosts);

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(posts => {
        //  console.log(posts);

        for (let elemPost of posts) {
            let wrapPost = document.createElement('div')
            wrapPost.classList.add('wrapPost');

            for (keyp in elemPost) {
                if (elemPost[keyp] === 'object') {
                    wrapPost.innerHTML += `<b>${keyp}</b>: <br>`;

                    let addPostInf = document.createElement('div');
                    addPostInf.classList.add('addPostInf');
                    let add = elemPost[keyp];
                    for (let keyAdd in add) {
                        addPostInf.innerHTML += `${keyAdd}: ${add[keyAdd]}<br>`
                    }
                    wrapPost.appendChild(addPostInf);

                } else {
                    wrapPost.innerHTML += `${keyp}: ${elemPost[keyp]}<br>`
                }
            }

            wrapPosts.appendChild(wrapPost);
        }

    })

 */
// - за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. 
// За допомогою document.createElement вивести їх в браузер. 
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).

/* 

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(comments => {
        //console.log(comments);

        let wrapComents = document.createElement('div');
        wrapComents.classList.add('wrapComents');
        document.body.appendChild(wrapComents);

        for (let coment of comments) {
            console.log(coment)
            let wrapComent = document.createElement('div');
            wrapComent.classList.add('wrapComent');

            for (let keyCom in coment) {
                if (keyCom === 'body') {

                    let wrapComBody = document.createElement('div');
                    wrapComBody.classList.add('wrapComBody');

                    wrapComBody.innerHTML += `<b>coment:</b> <br>`;
                    wrapComBody.innerHTML += `${coment[keyCom]}`;

                    wrapComent.appendChild(wrapComBody);
                } else {

                    wrapComent.innerHTML += `${keyCom}: ${coment[keyCom]} <br>`;
                }
            }
            wrapComents.appendChild(wrapComent);
        }
    })

 */

// -при помощи fetch (как в примере) получить от jsonplaceholder все posts. 
// Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. 
// Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. 
// Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту


// let wrapPosts = document.createElement('div');
// wrapPosts.classList.add('wrapPosts');
// document.body.appendChild(wrapPosts);

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//         //  console.log(posts);

//         for (let elemPost of posts) {
//             let wrapPost = document.createElement('div')
//             wrapPost.classList.add('wrapPost');

//             for (keyp in elemPost) {
//                 if (elemPost[keyp] === 'object') {
//                     wrapPost.innerHTML += `<b>${keyp}</b>: <br>`;

//                     let addPostInf = document.createElement('div');
//                     addPostInf.classList.add('addPostInf');
//                     let add = elemPost[keyp];
//                     for (let keyAdd in add) {
//                         addPostInf.innerHTML += `${keyAdd}: ${add[keyAdd]}<br>`
//                     }
//                     wrapPost.appendChild(addPostInf);

//                 } else {
//                     wrapPost.innerHTML += `${keyp}: ${elemPost[keyp]}<br>`
//                 }
//             }

//             wrapPosts.appendChild(wrapPost);
//         }

//     })



fetch('https://jsonplaceholder.typicode.com/users/').then(value => value.json())
    .then(users => {
        for (let i = 0; i < users.length; i++) {
           console.log(users[i]) 
            let a = users[i];
            fetch('https://jsonplaceholder.typicode.com/comments?postId=' + a.id).then(coments => coments.json())
                .then(comentsUser => {
                    console.log(comentsUser);
                })

        }



    })







