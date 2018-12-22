### Url Zapper

#### Description

An application that allows users to input a url and have it shortened to a custom url.  Users can visit the original url by clicking on the shortened url as well as view the top 100 most visited urls.

<img width="1440" alt="screen shot 2018-12-21 at 10 21 27 pm" src="https://user-images.githubusercontent.com/30695131/50371070-d89aa400-0570-11e9-985a-1c5546fe7ae7.png">

<img width="1440" alt="screen shot 2018-12-21 at 10 34 57 pm" src="https://user-images.githubusercontent.com/30695131/50371067-b86ae500-0570-11e9-9223-700358abf743.png">

### Algorithm 
My method "generate_short" takes the database id for a url and converts it into it’s Base 36 equivalent.  Since every url has a unique id no url will ever have the same Base 36 equivalent and as a result will never have the same shortened url.

## To view in production, visit:

https://url-zapper.herokuapp.com/

## Initial Setup

1. Clone this repository 

  ```shell
  git clone https://github.com/SSchwartz214/url-shortener-fe.git
  ```
  
2. Change into the `url-shortener-fe` directory

3. Install dependencies

  ```shell
  npm install
  ```

## Running the Server Locally

To see the code in action locally, you need to fire up a development server. Use the command:

```shell
npm start
```

Once the server is running, visit in your browser:

* `http://localhost:3000/` to run the application.

## Built With

* [React] (https://reactjs.org/)
* [Ruby on Rails] (https://rubyonrails.org/)

#### Questions or comments?

Please contact me at:

* Seth: sschwartz214@gmail.com
