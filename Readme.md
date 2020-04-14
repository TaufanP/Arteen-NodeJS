<h1 align='center'>Arteen Backend</h1>
<p align='center'>
  <a href='https://nodejs.org/en/'>
  <img height="200" src='https://miro.medium.com/max/1400/0*udqKV8dsTEnBeKRm.png' />
  </a>
</p>

<br>
<br>

**Arteen Backend** is the backend for Arteen Webiste which you can access at http://54.159.200.168:3000/. There are several features within the App:

  - CRUD Product
  - CRUD Category
  - Add or reduce product orders
  - Search product by certain column
  - Pagination
  - Allowed CORS
  - Able to test via Postman
  
## Introduction
[![React.js](https://img.shields.io/badge/React-16.12.0-blue.svg?style=rounded-square)](https://facebook.github.io/react/)
[![NodeJS](https://img.shields.io/badge/Node-v.1.0.0-green.svg?style=rounded-square)](https://nodejs.org/en/)
[![Axios](https://img.shields.io/badge/Axios-v.0.19.2-66a1ff.svg?style=rounded-square)](https://github.com/axios/axios)

## Related Project
<a href="https://github.com/TaufanP/Arteen-ReactJS">Arteen ReactJS</a></br>
<a href="https://github.com/TaufanP/Arteen-Redux">Arteen Redux</a>

## Requirements
1. <a href="https://www.apachefriends.org/download.html">XAMPP</a>
2. Arteen database <a href="https://drive.google.com/open?id=1QJRNwIPujen3HZNZKYrrbz3v3kbGyvNf">file</a>.
3. <a href="https://github.com/TaufanP/Arteen-NodeJS">Arteen backend</a>
4. node_modules

## Installation
1. Clone this repository.
2. Open app's directory in CMD or Terminal.
3. Type ` npm install ` to install all the required node_modules.
4. Type ` npm start ` to start the server.
5. Open <a href="https://www.postman.com/">Postman</a> to test the application.

# Features Breakdown!
This section will explain every each of the features. Including the description and the steps to test it.

**General task**: After completing the requirement of a feature at Postman, click send button to see the result.

Before you begin to test these features, you need to create an account first by accessing:
```sh
http://localhost:8080/api/v1/users/
```
Fill the required fields such as name, username, and password.
Make sure POST method is selected before Send the request.
![register](https://user-images.githubusercontent.com/33638021/79176840-80557880-7e2b-11ea-885a-aafee20faa34.png)

Great! now you are already have an account. Let's sign in with it by accessing:
```sh
http://localhost:8080/api/v1/users/login
```
Fill the required fields such as username and password.
Make sure POST method is selected before Send the request.
![sign-in](https://user-images.githubusercontent.com/33638021/79177212-76804500-7e2c-11ea-9b48-fe87ef9dbeef.png)

After you send the login request, you will get a token. Token used to access all of the features. You always need to put the token in x-access-token field at Headers. Here is an example for read data of all products with token inserted:
![token-example](https://user-images.githubusercontent.com/33638021/79177532-408f9080-7e2d-11ea-9ab2-bc907df8959a.png)

## CRUD Product
Contains Create, Read, Update, and Delete to Product database.

### Create Product
Create a new product that requires name, description, price, stock, id_category, and image. Test this feature via Postman with **POST** Method with URL:

```sh
http://localhost:8081/api/v1/product
```

Then fill the key and value at `Body -> form-data`
Finalize it with Send button.
![add-product](https://user-images.githubusercontent.com/33638021/79177600-6ae14e00-7e2d-11ea-9368-d7693822098c.png)

### Read Product
Show list of the created products. Test this feature via Postman with **GET** Method with URL:

```sh
http://localhost:8081/api/v1/product
```

There is a hidden feature in Read Product which is you can show the detail of a product based on the *id*. Test this feature via Postman with **GET** Method with URL:

```sh
http://localhost:8081/api/v1/product/:id
```    
    
Replace the *:id* with the Product's id e.g 

```sh
http://localhost:8081/api/v1/product/1
```

### Update Product
Update the data of a product based on the *id*. The data you need to provide are name, description, price, stock, id_category, and image. Test this feature via Postman with **PATCH** Method with URL:

```sh
http://localhost:8081/api/v1/product/:id
```

Then fill the key and value at `Body -> form-data`

### Delete Product
Remove a data from the list based on the *id*. Test this feature via Postman with **DELETE** Method with URL:

```sh
http://localhost:8081/api/v1/product/:id
```

Replace the *:id* with the Product's id that you want to remove.

### Search Product
Search data by its name. You must provide the *keyword* of the name. Test this feature via Postman with **GET** Method with URL:

```sh
http://localhost:8081/api/v1/product/search/:keyword
```

Replace the *:keyword* with the Product's name that you want to see, e.g

```sh
http://localhost:8081/api/v1/product/search/ayam
```

### Pagination
Navigating through pages. Test this feature via Postman with **GET** Method with URL:

```sh
http://localhost:8081/api/v1/product/page?pages=1
```

The 1 at the very end is the page number. You can change it to the other positive number.

## CRUD Category
Contains Create, Read, Update, and Delete to Category database.

### Create Category
Create a new category that requires *id* and *name_category*. Test this feature via Postman with POST **Method** with URL:

```sh
http://localhost:8081/api/v1/category
```

Then fill the key and value at `Body -> form-data`

### Read Category
Show list of the created category. Test this feature via Postman with **GET** Method with URL:

```sh
http://localhost:8081/api/v1/category
```

There is a hidden feature in Read Category which is you can show the detail of a category based on the *id*. Test this feature via Postman with **GET** Method with URL:

```
http://localhost:8081/api/v1/category/:id
```
    
Replace the *:id* with the Category's id e.g 

```
http://localhost:8081/api/v1/category/1
```

### Update Category
Update the data of a category based on the *id*. The data you need to provide are *id* and *name_category*. Test this feature via Postman with **PATCH** Method with URL:

```
http://localhost:8081/api/v1/product/:id
```
Then fill the key and value at `Body -> form-data`

### Delete Category
Remove a data from the list based on the *id*. Test this feature via Postman with **DELETE** Method with URL:

```
http://localhost:8081/api/v1/category/:id
```

Replace the *:id* with the Category's id that you want to remove.

# Adding and reducing product orders
User could easily adding or reducing their orders before doing the checkout.

### Adding Orders for the First Time
Add orders to the order list. You only need to set the *quantity* of your order of a product then the *id* of the product. Test this feature via Postman with **POST** Method with URL:

```
http://localhost:8081/api/v1/order
```

Then fill the key and value at `Body -> form-data`

### See the Order List
Order list could be shown in the Postman with URL (Using **GET**):

```
http://127.0.0.1:8081/api/v1/order/
```

### Add or Reduce the Order's Quantity
Adding or reducing the order only need to set the new *quantity*. You could change the product to if you wish, by changing the *id_product*. This feature could be tested via Postman with **PATCH** Method at:

```
http://127.0.0.1:8081/api/v1/order/:id
```

### Remove Order from the List
Removing your order could be achieved by running **DELETE** Method at:

```
http://127.0.0.1:8081/api/v1/order/:id
```

# Checkout the Orders
Finishing the orders will automatically generate the last payment (or completion) of the orders. You could finish your shopping via Postman with **CREATE** Method by accessing:

```
http://127.0.0.1:8081/api/v1/checkout/
```

You need to set the *id* of the order at `Body -> x-www-form-urlencoded`

### See Shopping History
Shopping History could be shown in the Postman with URL (Using **GET**):

```
http://127.0.0.1:8081/api/v1/checkout/
```
