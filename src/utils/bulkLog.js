const bulkAddLogs = (values) => {
  let payload =  parseData(values);
    if (payload.length > 0) {
      // Call api and save data
    } else {
      return false;
    }
}

function parseData(values) {
  try {
    values = values?.content.split(/\r?\n/);
    let all_items = [];
    let current_date = '';
    for (let i=0;i<values.length;i++) {
      let item = checkifDate(values[i]);
      if(item) {
        current_date = item[2] + '-' + item[1] + '-' + item[0] + ' 01:01:01';
      } else{
        let data = values[i].split(' ');
        if (data.length < 2) {
          continue;
        }
        all_items.push({
          'date': current_date,
          'name': data[0],
          'time_spent': data.length > 2 ? data[2] : data[1]
        })
      }
    }
    return all_items;
  } catch (err) {
    console.log(err);
    return false;
  }

}

function checkifDate(item) {
  item = item.split('/');
  if (item.length>1) {
    return item;
  } else {
    return false;
  }
}

export default bulkAddLogs;
