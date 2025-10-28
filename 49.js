//Set(it is iterable)
//store data
// sets also have its own methods
//no index-based access
//order is not guaranteed
//unique items only

// const set = new Set([1,2,3,4]);
// console.log(set);
// console.log(set.size);

// const set = new Set("hasrshit");
// console.log(set);
// console.log(set.size);

// const items = ['item1', 'item2', 'item3', 'item4'];
// const set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// set.add(items);
// set.add(items);//not added since already added

// console.log(set);


// const items = ['item1', 'item2', 'item3', 'item4'];
const set = new Set();
set.add(1);
set.add(3);
set.add(4);
set.add(5);
set.add(6);
set.add(7);
set.add(8);
set.add(9);
set.add(10);
set.add(['item1', 'item2', 'item3', 'item4']);
// set.add(['item1', 'item2', 'item3', 'item4']);//now addes since different refference is created
// console.log(set);

// console.log(set.has(2));//true
// console.log(set.has(5));//false


// console.log(set.delete(2));//true
// console.log(set.add(2));//return Set

for(let number of set){
    console.log(number);
}




