<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tentatives_upload', function (Blueprint $table) {
            $table->id('num_tentative');
            $table->binary('data');
            $table->string('adresse_ip');
            $table->string('checksum');
            $table->date('date_upload');
            $table->string('encodage');
            $table->timestamps();
    
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tentatives_upload');
    }
};
