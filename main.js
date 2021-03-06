//Даны два массива - [1, 2, 3] и [4, 5, 6]. Объедините их вместе (concat)

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = arr1.concat(arr2);

console.log(arr3);

//2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]
// (reverse).

arr1.reverse;
console.log(arr1);

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6
arr1.push('apple','coffee','juice');

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало 7, 8, 9.
arr1.unshift(7,8,9)

// 5. Дан массив ['aaa', 'bbb', 'ccc']. Выведите на экран первый элемент и удалите его.
const arr5 = ['aaa', 'bbb', 'ccc'];

arr5.shift();

// 6. Дан массив ['ddd', 'fff', 'eee']. Выведите последний элемент на экран.
const arr6 = ['ddd', 'fff', 'eee'];
arr6.pop();

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый массив элементы с третьего по пятый.
const arr7 = [1, 2, 3, 4, 5];
const arr8 = arr7.slice(2,4);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый массив элементы со второго по четвертый.
const arr9 = arr7.slice(1,3);

// 9. С помощью метода splice из массива [1, 2, 3, 4, 5] сделайте массив [1, 4, 5]
const arr10 = [1, 2, 3, 4, 5];
const arr11 = arr10.splice(-4,2);

// 10. С помощью метода splice из массива [1, 2, 3, 4, 5] запишите в новый массив элементы [2, 3, 4].
const arr12 = [1, 2, 3, 4, 5];
let arr13 = arr12.splice(0,1);
arr13 = arr12.splice(-1,1);

// 11. С помощью метода splice из массива [1, 2, 3, 4, 5] сделайте массив [1, 'w', 'tr', 2, 3, 4, 'vv', 5, 'a']
const arr14 = [1, 2, 3, 4, 5];
arr14.splice(1,0,'w');
arr14.splice(2,0,'tr');
arr14.splice(-1,0,'vv');
arr14.splice(8,0,'a')

// 12. Дан массив [5, 8, 2, 4, 7, 1]. Отсортируйте его по возрастанию.
const arr15 = [5, 8, 2, 4, 7, 1];
arr15.sort()
