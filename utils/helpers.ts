export const logServerActivity = (status: number | null, msg: string, isNotError: boolean = false) => {
  const msgFull = `${isNotError ? '+++Message: ' : '---Error:'} ${status} ${msg}`;

  console.log(msgFull);
};
