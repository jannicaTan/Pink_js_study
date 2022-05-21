class Animal {
  name: string;   // 声明了Animal类中的name属性必须为string类型
  constructor(name: string){
      this.name = name;
  }
  sayName():void{	// 加void表示没有返回值
      console.log(this.name);
  }
}

let animal = new Animal("嘟嘟");
animal.sayName();   // 嘟嘟
