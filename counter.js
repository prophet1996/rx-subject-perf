import  {take}  from "rxjs/operators/take";
import sub,{genString} from './sub'
const MAX_ITER = 10000
export function original(element) {
  const act = ()=>{
    for (let i = 0; i < MAX_ITER; i++) {
      const subject = sub();
      subject.next(genString(10));
      unsubs.push(subject.subscribe((i) => {
      }));
    }
  }
  element.addEventListener('click', act)
}
export function withUnsub(element) {
  const act = ()=>{
    for (let i = 0; i < MAX_ITER; i++) {
      const subject = sub();
      subject.next(genString(2));
      subject.subscribe((i) => {
        setTimeout(()=>{subject.unsubscribe()}, 0)
      });
    }
  }
  element.addEventListener('click', act)
}
export function takeD(element) {
  const act = ()=>{
    for (let i = 0; i < MAX_ITER; i++) {
      const subject = sub().pipe(take(1));
      subject.next(genString(2));
      subject.subscribe((i) => {
        console.log(i[0])
      });
    }
  }
  element.addEventListener('click', act)
}
export function takeWithUnsub(element) {
  const act = ()=>{
    for (let i = 0; i < MAX_ITER; i++) {
      const subject = sub().pipe(take(1));;
      subject.next(genString(2));
      subject.subscribe((i) => {
        setTimeout(()=>{subject.unsubscribe()}, 0)
      });
    }
  }
  element.addEventListener('click', act)
}
