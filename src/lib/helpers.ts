import moment from 'moment';

export const formatTimestamp = (timestamp: string) => {
  return moment(timestamp).format('MMMM Do YYYY, h:mm:ss a');
};
export const convertToISOString = (startDate: Date) => {
  // Ensure 'moment' is available in your scope (from Moment.js library)
  const momentStartDate = moment(startDate);
  
  if (momentStartDate.isValid()) {
    return momentStartDate.toISOString();
  } else {
    return "Invalid date";
  }
}






