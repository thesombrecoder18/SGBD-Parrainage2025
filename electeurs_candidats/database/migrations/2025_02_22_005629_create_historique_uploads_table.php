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
        Schema::create('historique_uploads', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('utilisateur_upload');
            $table->date('date_upload');
            $table->string('adresse_ip');
            $table->foreignId('agent_dge_id')->constrained('agents_dge')->onDelete('cascade');
            $table->timestamps();
    
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('historique_uploads');
    }
};
