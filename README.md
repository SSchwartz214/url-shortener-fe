## Url Zapper

### Description

This application generates shortened URL's from user inputted URL's.  A background worker is used to scrape the websites for their titles. Additionally, there is a top 100 page that ranks and displays the URL's based on visits. 

<img width="1440" alt="screen shot 2018-12-21 at 10 39 39 pm" src="https://user-images.githubusercontent.com/30695131/50371104-69717f80-0571-11e9-9408-58426933f345.png">

<img width="1440" alt="screen shot 2018-12-21 at 10 34 57 pm" src="https://user-images.githubusercontent.com/30695131/50371067-b86ae500-0570-11e9-9223-700358abf743.png">

### To view in production, visit:

https://url-zapper.herokuapp.com/

### Initial Setup

1. Clone this repository 

  ```shell
  git clone https://github.com/SSchwartz214/url-shortener-fe.git
  ```
  
2. Change into the `url-shortener-fe` directory

3. Install dependencies

  ```shell
  npm install
  ```

### Running the Server Locally

To see the code in action locally, you need to fire up a development server. Use the command:

```shell
npm start
```

Once the server is running, visit in your browser:

* `http://localhost:3000/` to run the application.

### Built With

* [React](https://reactjs.org/)
* [Ruby on Rails](https://rubyonrails.org/)
* [SideKiq](https://sidekiq.org/)
* [Redis](https://redis.io/)

### Algorithm 
My method "generate_short" on the Rails backend API (https://github.com/SSchwartz214/url_shortener) takes the database id for a url and converts it into it’s Base 36 equivalent.  Since every url has a unique id no url will ever have the same Base 36 equivalent and as a result will never have the same shortened url.

#### Questions or comments?

Please contact me at:

* Seth: sschwartz214@gmail.com
