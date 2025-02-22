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
        Schema::create('electeurs_problemes', function (Blueprint $table) {
            $table->id();
            $table->string('numero_carte_electeur')->unique();
            $table->string('numero_carte_identite')->unique();
            $table->string('nature');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('electeurs_problemes');
    }
};
