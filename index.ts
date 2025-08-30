// let a = 3;
// var b : string = '3423';
// var abc : boolean = true
// var bb;
// var arr :number[] =[1,2,3]



 enum userroles{
    admin ='admin',
    guest = 'guest',
    superadmin ='super_admin'
 }
 enum STATUS_CODE {
    success = 'SUCCESS',
    error = 'not found',
    warning = 'must watch before submission'
 }

 console.log(userroles.superadmin ,STATUS_CODE.success)

 let a = [1,2,3,4]
 let b = a;
 b.pop()
 console.log(a,b)