// return time elapsed 
export default (date)=>{
    var seconds = -1 * (Math.floor((new Date() - new Date(date)) / 1000));

    var interval = Math.floor(seconds / 31556926);
    if (interval < 0) {
      return "Event passed";
    }
    if (interval >= 1) {
      return interval + " years away";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval + " months away";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return interval + " days away";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return interval + " hours away";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return interval + " minutes away";
    }
    return Math.floor(seconds) + " seconds away";
}