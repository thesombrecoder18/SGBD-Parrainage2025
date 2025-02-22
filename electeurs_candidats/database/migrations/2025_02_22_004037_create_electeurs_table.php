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
        Schema::create('electeurs', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nom');
            $table->string('prenom');
            $table->string('numero_telephone')->unique();
            $table->date('date_naissance');
            $table->enum('sexe', ['Masculin', 'Féminin']);
            $table->string('numero_carte_electeur')->unique();
            $table->string('numero_carte_identite')->unique();
            $table->integer('numero_bureau_vote');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('electeurs');
    }
};
