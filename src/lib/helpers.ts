import moment from 'moment';

const formatTimestamp = (timestamp: string) => {
  return moment(timestamp).format('MMMM Do YYYY, h:mm:ss a');
};

export default formatTimestamp;