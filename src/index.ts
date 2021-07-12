import * as rt from 'runtypes';

export function getUnderlying(runtype: rt.Runtype): rt.Runtype {
  /*
  let x = runtype;
  while (x.reflect.tag === 'constraint') x = x.reflect.underlying;
  return x;
  */

 /*
  let x = runtype as any;
  while (x.reflect.tag === 'constraint') x = x.reflect.underlying;
  return x as unknown as rt.Runtype;
  */

 if (runtype.reflect.tag === 'constraint') return getUnderlying(runtype.reflect.underlying);

 return runtype;
}

