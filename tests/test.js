

let a = {
    ab (){
        console.log("test")
        console.log(this.ab.ac)
    }
}
a.ab.ac = 22
console.log(a.ab)
a.ab()