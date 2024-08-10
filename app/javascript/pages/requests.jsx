import React, { useState, useEffect } from 'react';

export default () => {
  const [itemName, setItemName] = useState('');
  const [cost, setCost] = useState('');
  const [url, setUrl] = useState('');
  const [requests, setRequests] = useState([]);

  const token = document.getElementsByTagName('meta')[2].content;
  const doIt = true;

  useEffect(() => {
    fetch(`requests.json`)
      .then((response) => response.json())
      .then((json) => {
        setRequests(json.filter((elem) => !elem.isPurchased));
      });
  }, [doIt]);

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'item_name':
        setItemName(event.target.value);
        break;
      case 'cost':
        setCost(event.target.value);
        break;
      case 'url':
        setUrl(event.target.value);
        break;
    }
  };

  const handleClick = ({ target }) => {
    console.log(target);
    switch (target.getAttribute('data-action')) {
      case 'submit':
        submitRequest();
        break;
      case 'purchase':
        purchaseItem(target.getAttribute('data-value'));
        break;
    }
  };

  const submitRequest = () => {
    fetch('requests', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        itemName,
        cost,
        url,
        format: 'js',
        authenticity_token: token,
      }),
    }).then((response) => {
      if (response.status == 200) {
        const temp = [...requests];
        temp.push({ itemName, cost, url });
        setRequests(temp);
      } else {
        alert('No good!');
      }
    });
  };

  const purchaseItem = (id) => {
    fetch(`requests/${id}/purchase`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        format: 'js',
        authenticity_token: token,
      }),
    }).then((response) => {
      if (response.status == 200) {
        const temp = [...requests];
        const i = temp.findIndex((elem) => elem.id == id);

        temp.splice(i, 1);
        setRequests(temp);
      } else {
        alert('No good!');
      }
    });
  };

  return (
    <>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr className="text-left">
            <th>Name</th>
            <th>Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>
                <a href={request.url}>{request.itemName}</a>
              </td>
              <td>${(+request.cost).toFixed(2)}</td>
              <td>
                <button
                  data-action="purchase"
                  data-value={request.id}
                  onClick={handleClick}
                >
                  Purchase
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Make a request</h1>
      <div>
        Item Name:{' '}
        <input name="item_name" value={itemName} onChange={handleChange} />
      </div>
      <div>
        Cost: <input name="cost" value={cost} onChange={handleChange} />
      </div>
      <div>
        Url: <input name="url" value={url} onChange={handleChange} />
      </div>
      <div>
        <button data-action="submit" onClick={handleClick}>
          Submit
        </button>
      </div>
    </>
  );
};
