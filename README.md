<div className="capitalize flex flex-col justify-center">
  <span className="font-semibold">{item.customerName}</span>
  <small className="text-gray-500">
    {new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
  </small>
</div>
