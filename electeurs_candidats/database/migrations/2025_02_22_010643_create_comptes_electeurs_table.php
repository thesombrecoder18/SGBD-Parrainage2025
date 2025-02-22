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
        Schema::create('comptes_electeurs', function (Blueprint $table) {
            $table->string('adresse_email')->unique();
            $table->string('numero_telephone')->unique();
            $table->string('code_authentification');
            $table->string('code_validation');
            $table->date('date_parrainage');
            $table->boolean('status')->default(false);
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comptes_electeurs');
    }
};
