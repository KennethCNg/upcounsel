export const createTable = table => {
    return $.ajax({
      method: 'POST',
      url: '/tables',
      data: table
    });
  };


export const fetchTable = tableId => {
    return $.ajax({
      method: 'GET',
      url: `/tables/${tableId}`
    });
  };