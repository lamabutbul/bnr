<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('product_category_id')->unsigned()->index();
            $table->integer('pid')->unsigned()->unique();
            $table->integer('uid')->unsigned()->unique();
            $table->string('material_number', 32)->unique();
            $table->string('name', 255);
            $table->string('url', 255);
            $table->text('summary');
            $table->text('description');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('product_category_id')->references('id')->on('product_category');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product');
    }
}
