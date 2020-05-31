let dog = {
  name: "发财",
  age: 7,
  height: 5,
  sex: "male",
  food: 100,
  health: 100,
  liveTimer: null,
  islive: true,

  bark: function () {
    console.log("旺");
  },
  ask: function () {
    return this.name;
  },
  setName: function (newName) {
    this.name = newName;
    // newName = "发财";
  },
  run: function () {
    // if (!this.islive) {
    if (this.food > 20) {
      let farme2 = document.getElementById("farme");
      farme2.innerHTML = "开心的到处跑....";
      this.food -= 10;
    } else {
      let farme7 = document.getElementById("farme");
      farme7.innerHTML = "主人" + this.name + "跑不动了qaq";
    };
    if (this.food < 0) {
      let farme8 = document.getElementById("farme");
      farme8.innerHTML = "主人" + this.name + "饿了";
    }
    // } else {
    //   console.log("去了天堂");
    // }
  },
  feed: function () {
    if (this.food > 90) {
      let farme6 = document.getElementById("farme");
      farme6.innerHTML = "主人" + this.name + "不饿哦！";
    } else {
      this.food += 10;
      let farme4 = document.getElementById("farme");
      farme4.innerHTML = "好香啊，嘿嘿嘿";
    }
  },
  setI: function () {
    let self = this;
    this.liveTimer = setInterval(function () {
      self.food--;
      self.checkfood();
      self.checkhealth();
      // console.log(self.food);
    }, 1000);
  },
  checkfood: function () {
    if (this.food <= 0) {
      this.food = 0;
      this.health -= 1;
    } else if (this.food >= 80) {
      this.food = this.food >= 100 ? 100 : this.food;
      this.health += 5;
    };
    // console.log(this.health);
    // clearInterval(this.liveTimer);
  },
  checkhealth: function () {
    if (this.health === 0) {
      // console.log(this.health);
      this.dead();
    };
    if (this.health >= 100) {
      this.health = 100;
    }
  },
  dead: function () {
    console.log("waooooo.......");
    let farme1 = document.getElementById("farme");
    farme1.innerHTML = "waooooo.......";
    clearInterval(this.liveTimer);
    this.islive = false;
  },
  tellstatus: function () {
    return "饱食度 : [" + this.food + "]" + " " + "健康值 : [" + this.health + "]" + " " + "是否存活 :[" + (this.islive ? "存活" : "挂了") + "]";
  },
  // 复活
  resurgence: function () {
    this.islive = true;
    this.food = 100;
    this.health = 100;
    let farme5 = document.getElementById("farme");
    farme5.innerHTML = "战斗吧，斯巴达！！！";
  }
};
let view = {
  displaydog: function () {
    let dogs = document.getElementById("dogPic");
    // console.log(dogs);
    dogs.setAttribute("class", "dog");
    // console.log(dogs);
  },
  displaycheck: function () {
    setInterval(function () {
      let dogstatus = document.getElementById("status");
      dogstatus.innerHTML = dog.tellstatus();
    }, 100)
  }
}
// let dogstatus =  document.getElementById("status");
// // console.log(dogstatus)
// dogstatus.innerHTML = dog.tellstatus();

view.displaydog();
view.displaycheck();
// dog.setName("facai");
// console.log(dog.ask());
// console.log(dog.run());
// dog.run();
// dog.run();
// dog.run();
// dog.run();
// dog.run();
// dog.run();
// dog.run();
// dog.run();
// dog.run();
// dog.feed();
// dog.feed();
// dog.feed();
// dog.feed();
// dog.feed();
console.log(dog.food);
dog.setI();
console.log(dog.health);
// console.log(dog.setName());

// setInterval(function(){
//   let a = 100;
//   if(a>0){

//   }
//   // console.log(a)
// },1000);

// setInterval(function(){
//   console.log("123");
// },100)