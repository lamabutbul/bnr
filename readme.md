# B&R Catalog

## Prerequisites
* PHP 7.1
* MySQL 5.7
* Composer
* Bower

### Dev Prerequisites
* NPM
* Gulp

## Install
* Install composer dependencies
    ```
    composer install
    ```
* Install bower components
    ```
    bower install
    ```
* create .env from .env.example
* create db and put credentials
    ```
    CREATE DATABASE bnr
    DEFAULT CHARACTER SET utf8
    DEFAULT COLLATE utf8_general_ci;

    CREATE USER 'bnr'@'localhost' IDENTIFIED BY 'bnr';

    GRANT ALL PRIVILEGES ON bnr.* TO 'bnr'@'localhost';
    ```

## Run
* `php artisan serve`
* open [http://localhost:8000](http://localhost:8000)
