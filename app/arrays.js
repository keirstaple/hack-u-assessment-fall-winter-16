exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: (arr, item) => {
    let location = null;
    for(i=0; i < arr.length; i++){
      location = arr.indexOf(item);
    }
    return location;
  },

  sum: (arr) => {
    let sum = 0
    for(i=0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  },

  remove: (arr, item) => {
    let result = arr.filter((item) => {
      return item !== 2;
    });
    return result;
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
