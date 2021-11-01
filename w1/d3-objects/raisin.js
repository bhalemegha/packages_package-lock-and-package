const raisinAlarm = function(cookie) {
  console.log(cookie);
  let found = false;
  cookie.forEach(function(ele){
    if(ele==="🍇"){
      found = true;
    }
  });
  return (found) ? "raisin alert!" : "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));