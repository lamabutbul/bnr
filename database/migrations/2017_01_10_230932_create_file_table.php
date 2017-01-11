<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFileTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('file', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('file_category_id')->unsigned();
            $table->integer('product_id')->unsigned();
            $table->string('name', 255);
            $table->string('url', 255);
            $table->string('version', 8);
            $table->timestamp('date');
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('file_category_id')->references('id')->on('file_category');
            $table->foreign('product_id')->references('id')->on('product');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('file');
    }
}
