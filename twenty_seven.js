const people =[
	{id: 1, name:'First', job:'tt11',age:22},
{id: 2, name:'Second', job:'tt2',age:27},
{id: 3, name:'Third', job:'tt3',age:17},
{id: 4, name:'Fourth', job:'tt4',age:15},
]
/*for (let i = 0; i < people.length; i++){//!es5 синтаксис
    console.log(people[i]);
    
}
for (let person of people) {//? es6 синтаксис
    console.log(person);
    
}
//*.forEach
people.forEach(function (person, index, pArr) {//! функция фор ич( для каждого) принимает на вход параметр функцию, данная функция принимает всебя три параметра 1 это каждый обьект данного массива, 2 индекс, 3 сам массив пипл
    console.log(person);
    console.log(index);
    console.log(pArr);
    
    
})

people.forEach(person => console.log(person))

//* Map

const newPeople = people.map(PeRsOn => {
    return 'Hello '// теперь массив состоив из 4 строк хэллоу
    return person.name// теперь тоько из имен
    return `Так зовут ${person.name} и столько лет ${person.age}` // выведет имя и возраст со словами так зовут и столько лет
    return PeRsOn.age*2// выведем возаст икс два
})
console.log(newPeople)

//* Filter
//? делаем массив на выод только тем кому есть 18
const adults = []
for (let i = 0; i < people.length; i++){
    if (people[i].age >= 19) {
        adults.push(people[i])
    }
}
console.log(adults)
//! а теперь с методом фильтер
const adults = people.filter(pErSoN => {
    if (pErSoN.age >= 18) {
         return true//*TODO возвращаем тру  если хотим оставить элемент в массиве адултс( тру является разрешением на запись в массив)
    }
    
})
 console.log(adults)
 //* Reduce
 let amount=0
for (let i = 0; i < people.length; i++) {
    amount += people[i].id//!посичтаем сумму иднексов всех людей( в примере было бюджет)
}
console.log(amount)
const amount = people.reduce((total, pErSoN) => {
 return total+ pErSoN.id  // на каждой итерации изменяем значение тотал на предыдущий тотал плюс текущий персон айди, можно складываьб хоть имена
},0)// нолик это начальное значение можно поставить хоть двести тысяч
console.log(amount)
//* Find
const vtoroi = people.find(pErSoN => pErSoN.name === 'Second')// создали обьект для поиска второго, с помощью метода файнд в массиве пипл ищем точное совпадение
console.log(vtoroi)

//* FindIndex
const vtoroiIndex = people.findIndex(pErSoN => pErSoN.name === 'Second')// всё тоже самое что и в файнд только на вывод идет индекс элемента
console.log(vtoroiIndex) */
//? ///////////////////////////
const newARRpeople = people
    .filter(person => person.age > 21)// ищем людей старще 21, фильтер вернет нам массив, поэтому воспользуемся методом меп
    .map(person => {
        return {
            info: `${person.name} ну и возраст ${person.age}`,
            id: person.id,// теперь новый массив ньюаррпипл имеет такие поля
            age: person.age
        }
    })
    .reduce((total, p) =>  total+ p.age ,0)// но тут уже складываем только данные полученные из нового массива(71-77 строка) вывели сумманрный возраст тех кто старше 21
console.log(Math.sqrt(newARRpeople))//!  внимание тут выводится квадратный корень из числа с помощью глобального обьекта мес



