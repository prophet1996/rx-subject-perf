import  {take}  from "rxjs/operators/take";
import sub,{genString} from './sub'
const MAX_ITER = 100000

export function original(element) {
  const act = ()=>{
    for (let i = 0; i < MAX_ITER; i++) {
      const subject = sub();
      subject.subscribe((i) => {
      });
      subject.next({text:genString(1)});
    }
  }
  element.addEventListener('click', act)
}

export function withUnsub(element) {
  const unsubs = []
  const act = ()=>{
    for (let i = 0; i < MAX_ITER; i++) {
      const subject = sub();
      unsubs.push(subject.subscribe((i) => {
      }));
      subject.next({text:genString(1)});
      for(const unsub of unsubs){
        unsub.unsubscribe()
      }
    }
  }
  element.addEventListener('click', act)
}
export function takeD(element) {
  const act = ()=>{
    for (let i = 0; i < MAX_ITER; i++) {
      const subject = sub().pipe(take(1));
      subject.subscribe((i) => {
      });
      subject.next({text:genString(1)});
    }
  }
  element.addEventListener('click', act)
}
export function takeWithUnsub(element) {
  const act = ()=>{
    for (let i = 0; i < MAX_ITER; i++) {
      const subject = sub().pipe(take(1));;
      subject.subscribe((i) => {
        setTimeout(()=>{subject.unsubscribe()}, 0)
      });
      subject.next({text:genString(1)});
    }
  }
  element.addEventListener('click', act)
}
