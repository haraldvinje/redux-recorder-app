export const addZero = (num: number) => (num < 10 ? `0${num}` : `${num}`);

export const getTimeString = (startTime: string, endTime: string): string => {
  return `${new Date(startTime).getHours()}:${new Date(
    startTime
  ).getMinutes()} -
    ${new Date(endTime).getHours()}:${new Date(endTime).getMinutes()}`;
};
