

const seats=[
  {id:1},
  {id:2},
  {id:3},
  {id:4},
  {id:5},
  {id:6},
  {id:7},
  {id:8},
  {id:9},
  {id:10},
  {id:11},
  {id:12},
  {id:13},
  {id:14},
  {id:15},
  {id:16},
  {id:17},
  {id:18},
  {id:19},
  {id:20},
  {id:21},
  {id:22},
  {id:23},
  {id:24},
  {id:25}
]

  const seatTypes=[{
    title:"Sold",
    color:"#dbdbdb"
},
{
    title:"Available",
    color:"#cac9c9"
},
{
    title:"Selected",
    color:"green"
}

];


const time = [
  {
    id:1,
    time:"8:30PM"
  },
  {
    id:2,
    time:"9:30PM"
  },
  {
    id:3,
    time:"11:00PM",
  },
];


const selectSeats = [
  {
    id: 1,
    content: 1,
    isActive:false

  },
  {
    id: 2,
    content: 2,
    isActive:false

  },
  {
    id: 3,
    content: 3,
    isActive:false
      
  },
  {
    id: 4,
    content: 4,
 
  },
  {
    id: 5,
    content: 5,
  
  },
];



  export default {seats,seatTypes,time}

  export {selectSeats}