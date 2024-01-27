1.
const orderList = [
    { name: 'laptop', price: 120000 },
    { name: 'mobile', price: 7000 },
    { name: 'mobile charger', price: 120000 },
    { name: 'laptop charger', price: 120000 }
 ];
 let totalPrice=0;
 orderList.forEach(orderList=>{
    totalPrice=totalPrice+orderList.price
 })
 console.log('The total price would be',totalPrice)
 2.
function randomNumber(){
    const Number=Math.floor(Math.random()*100)
    console.log(Number)
}
function interval(){
    randomNumber()
    setInterval(randomNumber,2000)
}
interval()
3.
let expenses=[
    {amount:100, category:"utilities"},
    {amount:200, category:"grocery"},
    {amount:50, category:"entertainment"}
]
let taxWithexpense =expenses.map((expenses)=>{
    let tax =expenses.amount*0.1;
    return{...expenses, tax:tax}
})
console.log('expenses with tax ',taxWithexpense)
4.
let groceryExpenses=expenses.filter((expenses)=>{
expenses.category==="grocery"
       
   
})
console.log('grocery:',groceryExpenses)

5.
let expenses=[
        {amount:100, category:"utilities"},
        {amount:200, category:"grocery"},
        {amount:50, category:"entertainment"}
    ]
    let reduce=expenses.reduce((acc,expenses)=>acc+expenses.amount,0);
    console.log(reduce)
6.
    let expenses=[
        {amount:100, category:"utilities"},
        {amount:200, category:"grocery"},
        {amount:50, category:"entertainment"}
    ]
    function categorizeExpenses(expenses){
if(expenses.amount>=200){
    return "higher expense"
}
else {
    return 'lower expense'
}
    }
    let expense =expenses.map((expenses)=>categorizeExpenses(expenses));
    console.log('category: ',expense)

7.
let originalNumbers=[2,5,8,10,3]
originalNumbers.forEach((num,index,arr)=>{
arr[index]=num*2;
})
console.log(originalNumbers)
8.
let originalNumbers=[2,5,8,10,3]
let evenNumbers =[]
originalNumbers.forEach((num,index,arr)=>{
   if( arr[index]%2==0){
    evenNumbers.push(num)
   };
   
})
console.log(evenNumbers)