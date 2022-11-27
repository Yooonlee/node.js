function Person(name){
	this.name = name || "혁준";
}

Person.prototype.getName = function(){
	return this.name;
};

function Korean(name){
	Person.apply(this, arguments);
}

var kor1= new Korean("지수");
console.log(kor1.name);
// console.log(kor1.getName());// 오류 