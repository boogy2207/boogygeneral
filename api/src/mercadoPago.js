// Crea un objeto de preferencia
let preference = {
   items: [
      {
         title: "Mi producto",
         unit_price: 100, //it must be integer
         quantity: 1,
      },
   ],
};

mercadopago.preferences
   .create(preference)
   .then(function (response) {
      // Este valor reemplazará el string "<%= global.id %>" en tu HTML
      global.id = response.body.id;
   })
   .catch(function (error) {
      console.log(error);
   });
