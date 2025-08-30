// let a = 3;
// var b : string = '3423';
// var abc : boolean = true
// var bb;
// var arr :number[] =[1,2,3]
var userroles;
(function (userroles) {
    userroles["admin"] = "admin";
    userroles["guest"] = "guest";
    userroles["superadmin"] = "super_admin";
})(userroles || (userroles = {}));
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE["success"] = "SUCCESS";
    STATUS_CODE["error"] = "not found";
    STATUS_CODE["warning"] = "must watch before submission";
})(STATUS_CODE || (STATUS_CODE = {}));
console.log(userroles.superadmin, STATUS_CODE.success);
let a = [1, 2, 3, 4];
let b = a;
b.pop();
console.log(a, b);
export {};
//# sourceMappingURL=index.js.map