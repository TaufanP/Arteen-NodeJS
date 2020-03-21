# Point of Sales

**Point of Sales** (POS) is an App that let user to buy foods or beverages. There are several features within the App at down below:

  - CRUD Product
  - CRUD Category
  - Add or reduce product orders
  - Search product by certain column
  - Pagination
  - Allowed CORS
  - Able to test via Postman

# Features Breakdown!
This section will explain every each of the features. Including the description and the steps to test it.

**General task**: After completing the requirement of a feature at Postman, click send button to see the result.

## CRUD Product
Contains Create, Read, Update, and Delete to Product database.

### Create Product
Create a new product that requires name, description, price, stock, id_category, and image. Test this feature via Postman with **POST** Method with URL:

```sh
http://localhost:8080/api/v1/product
```

Then fill the key and value at `Body -> form-data`
Finalize it with Send button.

### Read Product
Show list of the created products. Test this feature via Postman with **GET** Method with URL:

```sh
http://localhost:8080/api/v1/product
```

There is a hidden feature in Read Product which is you can show the detail of a product based on the *id*. Test this feature via Postman with **GET** Method with URL:

```sh
http://localhost:8080/api/v1/product/:id
```    
    
Replace the *:id* with the Product's id e.g 

```sh
http://localhost:8080/api/v1/product/1
```

### Update Product
Update the data of a product based on the *id*. The data you need to provide are name, description, price, stock, id_category, and image. Test this feature via Postman with **PATCH** Method with URL:

```sh
http://localhost:8080/api/v1/product/:id
```

Then fill the key and value at `Body -> form-data`

### Delete Product
Remove a data from the list based on the *id*. Test this feature via Postman with **DELETE** Method with URL:

```sh
http://localhost:8080/api/v1/product/:id
```

Replace the *:id* with the Product's id that you want to remove.

### Search Product
Search data by its name. You must provide the *keyword* of the name. Test this feature via Postman with **GET** Method with URL:

```sh
http://localhost:8080/api/v1/product/search/:keyword
```

Replace the *:keyword* with the Product's name that you want to see, e.g

```sh
http://localhost:8080/api/v1/product/search/ayam
```

### Pagination
Navigating through pages. Test this feature via Postman with **GET** Method with URL:

```sh
http://localhost:8080/api/v1/product/page?pages=1
```

The 1 at the very end is the page number. You can change it to the other positive number.

## CRUD Category
Contains Create, Read, Update, and Delete to Category database.

### Create Category
Create a new category that requires *id* and *name_category*. Test this feature via Postman with POST **Method** with URL:

```sh
http://localhost:8080/api/v1/category
```

Then fill the key and value at `Body -> form-data`

### Read Category
Show list of the created category. Test this feature via Postman with **GET** Method with URL:

```sh
http://localhost:8080/api/v1/category
```

There is a hidden feature in Read Category which is you can show the detail of a category based on the *id*. Test this feature via Postman with **GET** Method with URL:

```
http://localhost:8080/api/v1/category/:id
```
    
Replace the *:id* with the Category's id e.g 

```
http://localhost:8080/api/v1/category/1
```

### Update Category
Update the data of a category based on the *id*. The data you need to provide are *id* and *name_category*. Test this feature via Postman with **PATCH** Method with URL:

```
http://localhost:8080/api/v1/product/:id
```
Then fill the key and value at `Body -> form-data`

### Delete Category
Remove a data from the list based on the *id*. Test this feature via Postman with **DELETE** Method with URL:

```
http://localhost:8080/api/v1/category/:id
```

Replace the *:id* with the Category's id that you want to remove.

# Adding and reducing product orders
User could easily adding or reducing their orders before doing the checkout.

### Adding Orders for the First Time
Add orders to the order list. You only need to set the *quantity* of your order of a product then the *id* of the product. Test this feature via Postman with **POST** Method with URL:

```
http://localhost:8080/api/v1/order
```

Then fill the key and value at `Body -> form-data`

### See the Order List
Order list could be shown in the Postman with URL (Using **GET**):

```
http://127.0.0.1:8080/api/v1/order/
```

### Add or Reduce the Order's Quantity
Adding or reducing the order only need to set the new *quantity*. You could change the product to if you wish, by changing the *id_product*. This feature could be tested via Postman with **PATCH** Method at:

```
http://127.0.0.1:8080/api/v1/order/:id
```

### Remove Order from the List
Removing your order could be achieved by running **DELETE** Method at:

```
http://127.0.0.1:8080/api/v1/order/:id
```

# Checkout the Orders
Finishing the orders will automatically generate the last payment (or completion) of the orders. You could finish your shopping via Postman with **CREATE** Method by accessing:

```
http://127.0.0.1:8080/api/v1/checkout/
```

You need to set the *id* of the order at `Body -> x-www-form-urlencoded`

### See Shopping History
Shopping History could be shown in the Postman with URL (Using **GET**):

```
http://127.0.0.1:8080/api/v1/checkout/
```
