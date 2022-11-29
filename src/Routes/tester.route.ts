import { Router, Request, Response, NextFunction } from "express";

export const tester = Router();

tester.get("/test", async (req: Request, res: Response, next: NextFunction) => {
  

  const foo = new Foo();
  const result = await foo.test();
  
  res.status(200).json({
    result
  });
  next();
});




class Foo {

    public async test() {

        const op1 = this.longRunningOperation(1000, "op1");
        const op2 = this.longRunningOperation(5000, "op2");
        const op3 = this.longRunningOperation(1000, "op3");
        const op4 = this.longRunningOperation(1000, "op4");

        return Promise.all([op1, op2, op3, op4]);
    }

    private longRunningOperation<T>(seconds: number, value: T): Promise<T> {
     
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`Completed ${value}`);
                resolve(value);
            }, seconds);
        });
    }
}