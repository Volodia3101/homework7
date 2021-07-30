// Зробити свій розпорядок дня.
//
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
// Напиклад.
// Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі
function day(time){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (time < 500) {
            reject ('Проспав!!!')
        }
        else {
            resolve ('Проснувся');
        }
    }, 500);
    })
}
day(500)
    .then((value) => {
        console.log('Доброго ранку')
        console.log(value)
    })
    .catch(reason => {
        console.log('Проснувся не з тієї ноги')
        console.log(reason)
        });



function bathroom (){
    return new Promise(resolve => {
        setTimeout(() => {

            resolve('Сходив у душ');
        }, 1000)
    })
}

//
//
function breakfast() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Поснідав');
        }, 1500)
    })
}



function work() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Зібрався на роботу');
        }, 1000)
    })
}



function robota() {
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve('Працюю')
        }, 3000)
    })
}



function lunch() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve ('Обідаю')
        }, 1000)
    })
}



function backtowork() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve ('Назад до роботи')
        }, 500)
    })
}



function gohome() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve ('Повертаюсь додому')
        }, 3000)
    })
}



function baby() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve ('Проводжу час з дитиною')
        }, 3500)
    })
}



function dinner() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve ('Вечеряю')
        }, 500)
    })
}



function babybed() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve ('Ложу дитину спати')
        },500)
    })
}



function wife() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve ('Проводжу час з дружиною')
        }, 2500)
    })
}
function newwork() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve ('Вчу курси в okten')
        }, 6000)
    })
}



function gotobed() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve ('4 ночі, час спати)')
        }, 2000)
    })
}


gotobed()

    .then(() => {
        return bathroom()
})
    .then((value) => {
        console.log(value)
})
    .then(() => {
        return breakfast()
})
    .then((value) => {
        console.log(value)
})
    .then(() => {
        return work()
})
    .then((value) => {
        console.log(value)
})
    .then(() => {
        return robota()
})
    .then((value) => {
        console.log(value)
})
    .then(() => {
        return lunch()
})
    .then((value) => {
        console.log(value)
})
    .then(() => {
        return backtowork()
})
    .then((value) => {
        console.log(value)
})
    .then(() => {
    return gohome()
})
    .then((value) => {
    console.log(value)
})
    .then(() => {
        return baby()
})
    .then((value) => {
        console.log(value)
})
    .then(() => {
        return dinner()
})
    .then((value) => {
        console.log(value)
})
    .then(() => {
        return babybed()
})
    .then((value) => {
        console.log(value)
})
    .then(() => {
        return wife()
})
    .then((value) => {
        console.log(value)
})
    .then(() => {
        return newwork()
})
    .then((value) => {
        console.log(value)
})
    .then(() => {
        return gotobed()
})
    .then((value) => {
        console.log(value)
})


//
// async function first() {
//     const first = day(500);
//     console.log(first);
//     await bathroom();
//     console.log('Сходив у душ')
//     await breakfast();
//     console.log('Поснідав')
//     await work();
//     console.log('Зібрався на роботу')
//     await robota();
//     console.log('Працюю')
//     await lunch();
//     console.log('Обідаю')
//     await backtowork();
//     console.log('Назад до роботи')
//     await gohome();
//     console.log('Повертаюсь додому')
//     await baby();
//     console.log('Проводжу час з дитиною')
//     await dinner();
//     console.log('Вечеряю')
//     await babybed();
//     console.log('Ложу дитину спати')
//     await wife();
//     console.log('Проводжу час з дружиною')
//     await newwork();
//     console.log('Вчу курси в okten')
//     await gotobed();
//     console.log('4 ночі, час спати)')
// }
// first();